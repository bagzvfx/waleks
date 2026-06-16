import './signal.js';
import './connection.js';
import './history-sync.js';
import './core-message.js';
import './chat-mutation.js';
import './business-cert.js';
import './media-error.js';
import './message-media.js';
import './message-buttons.js';
import './message-polls.js';
import './message-misc.js';

import $protobuf from "protobufjs/minimal.js";
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
export const proto = $root.proto;
