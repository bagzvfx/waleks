import { EventEmitter } from 'events';
import { readFileSync, writeFileSync, mkdirSync, statSync, unlinkSync } from 'fs';
import { join } from 'path';
import { DEFAULT_CONNECTION_CONFIG } from '../Defaults/index.js';
import { makeCommunitiesSocket } from './communities.js';
import { socket as decorateSocket } from '../Utils/helper.js';
import { initAuthCreds } from '../Utils/auth-utils.js';
import { BufferJSON } from '../Utils/generics.js';
import { jidNormalizedUser } from '../WABinary/index.js';
import { proto } from '../Core/index.js';
import { WebSocketClient } from './Client/index.js';
import { LIDMappingStore } from '../Signal/lid-mapping.js';

const originalConnect = WebSocketClient.prototype.connect;
WebSocketClient.prototype.connect = function() {
    if (this.socket) {
        return;
    }
    if (this.config?.protect) {
        const now = Date.now();
        const lastTime = global.lastConnectionAttemptTime || 0;
        const diff = now - lastTime;
        const minInterval = 5000;
        if (diff < minInterval) {
            const delay = minInterval - diff;
            const logger = this.config.logger || console;
            logger.info(`[Protect] Connection rate limit reached. Delaying connection by ${delay}ms to prevent spam/loops.`);
            setTimeout(() => {
                originalConnect.call(this);
            }, delay);
            return;
        }
        global.lastConnectionAttemptTime = now;
    }
    originalConnect.call(this);
};

const useMultiFileAuthStateSync = (folder) => {
    const writeData = (data, file) => {
        const filePath = join(folder, fixFileName(file));
        writeFileSync(filePath, JSON.stringify(data, BufferJSON.replacer));
    };

    const readData = (file) => {
        try {
            const filePath = join(folder, fixFileName(file));
            const data = readFileSync(filePath, { encoding: 'utf-8' });
            return JSON.parse(data, BufferJSON.reviver);
        } catch (error) {
            return null;
        }
    };

    const removeData = (file) => {
        try {
            const filePath = join(folder, fixFileName(file));
            unlinkSync(filePath);
        } catch {}
    };

    const fixFileName = (file) => file?.replace(/\//g, '__')?.replace(/:/g, '-');

    try {
        const stat = statSync(folder);
        if (!stat.isDirectory()) {
            throw new Error(`found something that is not a directory at ${folder}`);
        }
    } catch {
        mkdirSync(folder, { recursive: true });
    }

    const creds = readData('creds.json') || initAuthCreds();

    return {
        state: {
            creds,
            keys: {
                get: async (type, ids) => {
                    const data = {};
                    for (const id of ids) {
                        let value = readData(`${type}-${id}.json`);
                        if (type === 'app-state-sync-key' && value) {
                            value = proto.Message.AppStateSyncKeyData.fromObject(value);
                        }
                        data[id] = value;
                    }
                    return data;
                },
                set: async (data) => {
                    for (const type of Object.keys(data)) {
                        for (const id of Object.keys(data[type])) {
                            const value = data[type][id];
                            const name = `${type}-${id}.json`;
                            if (value) {
                                writeData(value, name);
                            } else {
                                removeData(name);
                            }
                        }
                    }
                }
            }
        },
        saveCreds: () => {
            writeData(creds, 'creds.json');
        }
    };
};

class Socketlek {
    constructor(config = {}) {
        let authState = config.auth;
        let saveCredsFn = null;

        if (config.auth === true) {
            const authResult = useMultiFileAuthStateSync('session');
            authState = authResult.state;
            saveCredsFn = authResult.saveCreds;
        } else if (typeof config.auth === 'string') {
            const authResult = useMultiFileAuthStateSync(config.auth);
            authState = authResult.state;
            saveCredsFn = authResult.saveCreds;
        } else if (config.auth && typeof config.auth === 'object') {
            if (config.auth.creds && config.auth.keys) {
                authState = config.auth;
            } else if (config.auth.state && config.auth.path) {
                const authResult = useMultiFileAuthStateSync(config.auth.path);
                authState = authResult.state;
                saveCredsFn = authResult.saveCreds;
            }
        } else {
            const creds = initAuthCreds();
            const keys = {};
            authState = {
                creds,
                keys: {
                    get: async (type, ids) => {
                        const data = {};
                        for (const id of ids) {
                            data[id] = keys[`${type}-${id}`] || null;
                        }
                        return data;
                    },
                    set: async (data) => {
                        for (const type of Object.keys(data)) {
                            for (const id of Object.keys(data[type])) {
                                const value = data[type][id];
                                if (value) {
                                    keys[`${type}-${id}`] = value;
                                } else {
                                    delete keys[`${type}-${id}`];
                                }
                            }
                        }
                    }
                }
            };
        }

        let logger = config.logger || DEFAULT_CONNECTION_CONFIG.logger;
        if (config.debug === 'silent' || config.debug === false) {
            logger = logger.child({});
            logger.level = 'silent';
        } else if (config.debug === true) {
            logger = logger.child({});
            logger.level = 'debug';
        }

        let browser = config.browser || DEFAULT_CONNECTION_CONFIG.browser;
        const finalVersion = (config.version && config.version.length > 0) ? config.version : DEFAULT_CONNECTION_CONFIG.version;
        
        const newConfig = {
            ...DEFAULT_CONNECTION_CONFIG,
            auth: authState,
            logger,
            browser,
            version: finalVersion,
            markOnlineOnConnect: config.online !== undefined ? config.online : DEFAULT_CONNECTION_CONFIG.markOnlineOnConnect,
            syncFullHistory: config.syncHistory !== undefined ? config.syncHistory : DEFAULT_CONNECTION_CONFIG.syncFullHistory,
            shouldSyncHistoryMessage: config.syncHistory !== undefined ? () => config.syncHistory : DEFAULT_CONNECTION_CONFIG.shouldSyncHistoryMessage,
            enableRecentMessageCache: config.groupCache !== undefined ? config.groupCache : DEFAULT_CONNECTION_CONFIG.enableRecentMessageCache
        };

        const emitter = new EventEmitter();
        let internalSock = null;
        let isReconnecting = false;
        
        // Cache native ev listeners to rebind them across reconnects
        const nativeEvListeners = new Map();
        
        const lidMapping = new LIDMappingStore(authState.keys, logger, null);

        const unlidString = async (str) => {
            if (typeof str === 'string' && (str.includes('@lid') || str.includes('hosted.lid'))) {
                try {
                    const pn = await lidMapping.getPNForLID(str);
                    return pn || str;
                } catch {
                    return str;
                }
            }
            return str;
        };

        const unlidObject = async (obj, seen = new WeakSet()) => {
            if (!obj || typeof obj !== 'object') return;
            if (seen.has(obj)) return;
            seen.add(obj);

            // Handle arrays manually to preserve in-place mutations
            if (Array.isArray(obj)) {
                for (let i = 0; i < obj.length; i++) {
                    if (typeof obj[i] === 'string') {
                        obj[i] = await unlidString(obj[i]);
                    } else if (typeof obj[i] === 'object' && obj[i] !== null) {
                        await unlidObject(obj[i], seen);
                    }
                }
                return;
            }

            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    const val = obj[key];
                    if (typeof val === 'string') {
                        if (val.includes('@lid') || val.includes('hosted.lid')) {
                            obj[key] = await unlidString(val);
                        }
                    } else if (typeof val === 'object' && val !== null) {
                        if (Buffer.isBuffer(val) || val instanceof Uint8Array) continue;
                        await unlidObject(val, seen);
                    }
                }
            }
        };

        const startSocket = () => {
            const sock = makeCommunitiesSocket(newConfig);
            decorateSocket(sock);

            // Rebind saved native ev listeners
            for (const [event, listeners] of nativeEvListeners.entries()) {
                for (const listener of listeners) {
                    sock.ev.on(event, listener);
                }
            }

            // Hook into sock.ev.on to intercept future listeners
            const originalEvOn = sock.ev.on;
            sock.ev.on = function(event, listener) {
                if (!nativeEvListeners.has(event)) {
                    nativeEvListeners.set(event, []);
                }
                nativeEvListeners.get(event).push(listener);
                return originalEvOn.apply(this, arguments);
            };

            // Map internal Baileys events to simplified sock.on events
            sock.ev.on('connection.update', ({ connection, lastDisconnect, qr }) => {
                if (connection === 'open') {
                    isReconnecting = false;
                    emitter.emit('connect');
                    emitter.emit('ready');
                }
                if (connection === 'close') {
                    const statusCode = lastDisconnect?.error?.output?.statusCode;
                    // 401: Logged Out, 440: Connection Replaced
                    const shouldReconnect = statusCode !== 401 && statusCode !== 440;
                    
                    if (shouldReconnect && !isReconnecting) {
                        isReconnecting = true;
                        const delayMs = statusCode === 500 ? 2000 : 5000;
                        logger.info(`Connection closed (code: ${statusCode}). Reconnecting in ${delayMs}ms to prevent bad session...`);
                        setTimeout(() => {
                            startSocket();
                        }, delayMs);
                    } else if (statusCode === 401) {
                        logger.error('Session Logged Out (401). Manual re-authentication required. Session has NOT been forcefully deleted to prevent accidental wipes.');
                    } else if (statusCode === 440) {
                        logger.warn('Connection Replaced (440). Another session is active. Reconnect aborted to prevent spamming the server.');
                    }
                }
                if (lastDisconnect?.error) {
                    emitter.emit('error', lastDisconnect.error);
                }
            });

            sock.ev.on('messages.upsert', async ({ messages, type }) => {
                await unlidObject(messages);
                for (const msg of messages) {
                    if (msg.key.remoteJid === 'status@broadcast') {
                        emitter.emit('stories', { message: msg, type });
                    } else {
                        emitter.emit('message', { message: msg, type });
                    }
                }
            });

            sock.ev.on('messages.update', async (updates) => {
                await unlidObject(updates);
                for (const update of updates) {
                    if (update.update.messageStubType === 1 || update.update.messageStubType === 'REVOKE') {
                        emitter.emit('message.delete', {
                            key: update.key,
                            update: update.update,
                            type: 'revoke'
                        });
                    }
                    if (update.update.pollUpdates) {
                        emitter.emit('poll', update);
                    }
                }
            });

            sock.ev.on('messages.delete', async ({ keys }) => {
                await unlidObject(keys);
                for (const key of keys) {
                    emitter.emit('message.delete', {
                        key,
                        type: 'deleteForMe'
                    });
                }
            });

            sock.ev.on('message-receipt.update', async (receipts) => {
                await unlidObject(receipts);
                emitter.emit('message.receipt', receipts);
            });

            sock.ev.on('group-participants.update', async (update) => {
                await unlidObject(update);
                if (update.action === 'add') emitter.emit('group.add', update);
                else if (update.action === 'remove') emitter.emit('group.remove', update);
                else if (update.action === 'promote') emitter.emit('group.promote', update);
                else if (update.action === 'demote') emitter.emit('group.demote', update);
            });

            sock.ev.on('group.join-request', async (request) => {
                await unlidObject(request);
                emitter.emit('group.request', request);
            });

            sock.ev.on('call', async (calls) => {
                await unlidObject(calls);
                for (const call of calls) {
                    emitter.emit('caller', call);
                }
            });

            sock.ev.on('presence.update', async (presence) => {
                await unlidObject(presence);
                emitter.emit('presence.update', presence);
            });

            sock.ev.on('lid-mapping.update', (mappings) => {
                for (const mapping of mappings) {
                    emitter.emit('lid-mapping', mapping);
                }
            });

            sock.ev.on('labels.edit', (label) => emitter.emit('labels.edit', label));
            sock.ev.on('labels.association', (association) => emitter.emit('labels.association', association));
            sock.ev.on('blocklist.set', (blocklist) => emitter.emit('blocklist.set', blocklist));
            sock.ev.on('blocklist.update', (update) => emitter.emit('blocklist.update', update));
            sock.ev.on('settings.update', (settings) => emitter.emit('settings.update', settings));

            if (saveCredsFn) {
                sock.ev.on('creds.update', saveCredsFn);
            }

            if (config.presence) {
                sock.ev.on('messages.upsert', async ({ messages, type }) => {
                    if (type === 'notify') {
                        const keys = messages.filter(m => !m.key.fromMe).map(m => m.key);
                        if (keys.length > 0) {
                            try { await sock.readMessages(keys); } catch {}
                        }
                    }
                });
            }

            if (config.online === false) {
                sock.ev.on('connection.update', async ({ connection }) => {
                    if (connection === 'open' && sock.authState?.creds?.me) {
                        try { await sock.sendPresenceUpdate('unavailable'); } catch {}
                    }
                });
            } else if (config.online === true) {
                sock.ev.on('connection.update', async ({ connection }) => {
                    if (connection === 'open' && sock.authState?.creds?.me) {
                        try { await sock.sendPresenceUpdate('available'); } catch {}
                    }
                });
            }

            if (config.pairing?.state && config.pairing?.number) {
                sock.ev.on('connection.update', async (update) => {
                    if (update.qr) {
                        try {
                            const code = await sock.requestPairingCode(config.pairing.number, config.pairing.code || 'WALEKSV1');
                            console.log(`\n===================================`);
                            console.log(`PAIRING CODE: ${code}`);
                            console.log(`===================================\n`);
                        } catch (err) {
                            logger.error({ err }, 'failed to request pairing code');
                        }
                    }
                });
            }

            if (config.custom_id) {
                sock.custom_id = config.custom_id;
            }
            if (config.bot) {
                sock.isBotMessage = (msg) => {
                    const id = msg.key?.id;
                    if (!id) return false;
                    return config.bot(id);
                };
            }

            if (config.groupCache) {
                const groupMetadataCache = new Map();
                const originalGroupMetadata = sock.groupMetadata;
                sock.groupMetadata = async (jid) => {
                    const normalizedJid = jidNormalizedUser(jid);
                    if (groupMetadataCache.has(normalizedJid)) {
                        return groupMetadataCache.get(normalizedJid);
                    }
                    const metadata = await originalGroupMetadata.call(sock, jid);
                    if (metadata) {
                        groupMetadataCache.set(normalizedJid, metadata);
                    }
                    return metadata;
                };
                sock.ev.on('groups.update', (updates) => {
                    for (const update of updates) {
                        if (update.id) groupMetadataCache.delete(jidNormalizedUser(update.id));
                    }
                });
                sock.ev.on('group-participants.update', ({ id }) => {
                    if (id) groupMetadataCache.delete(jidNormalizedUser(id));
                });
            }

            if (config.protect) {
                const originalSendMessage = sock.sendMessage;
                let lastSendTime = 0;
                const sendQueue = [];
                let processingQueue = false;

                const processQueue = async () => {
                    if (processingQueue) return;
                    processingQueue = true;
                    while (sendQueue.length > 0) {
                        const item = sendQueue.shift();
                        const now = Date.now();
                        const diff = now - lastSendTime;
                        const minDelay = 1500;
                        if (diff < minDelay) {
                            await new Promise(resolve => setTimeout(resolve, minDelay - diff));
                        }
                        try {
                            const result = await originalSendMessage.apply(sock, item.args);
                            item.resolve(result);
                        } catch (err) {
                            item.reject(err);
                        }
                        lastSendTime = Date.now();
                    }
                    processingQueue = false;
                };

                sock.sendMessage = (...args) => {
                    return new Promise((resolve, reject) => {
                        sendQueue.push({ args, resolve, reject });
                        processQueue();
                    });
                };
            }

            internalSock = sock;
        };

        // Start initial connection
        startSocket();

        // Create a Proxy to always forward method calls to the active `internalSock`.
        // This ensures that when auto-reconnect creates a new socket, the user's waSocket 
        // reference continues to work seamlessly without throwing 'Connection Closed' errors.
        const proxy = new Proxy(emitter, {
            get(target, prop) {
                // Return emitter methods from target
                if (['on', 'off', 'once', 'emit', 'removeListener', 'removeAllListeners'].includes(prop)) {
                    return target[prop].bind(target);
                }
                
                // Forward everything else to internalSock dynamically
                if (internalSock && prop in internalSock) {
                    const val = internalSock[prop];
                    if (typeof val === 'function') {
                        return val.bind(internalSock);
                    }
                    return val;
                }
                return target[prop];
            },
            set(target, prop, value) {
                if (internalSock && prop in internalSock) {
                    internalSock[prop] = value;
                    return true;
                }
                target[prop] = value;
                return true;
            }
        });

        return proxy;
    }
}
export default Socketlek;
//# sourceMappingURL=index.js.map