/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

function longToString(value, unsigned) {
	if (typeof value === "string") {
		return value;
	}
	if (typeof value === "number") {
		return String(value);
	}
	// Fast path: convert Long {low, high} directly via native BigInt
	// BigInt.toString() is a native C++ operation, much faster than Long's pure JS division loops
	if (value && typeof value.low === "number" && typeof value.high === "number") {
		const lo = BigInt(value.low >>> 0);
		const hi = BigInt(value.high >>> 0);
		const combined = (hi << 32n) | lo;
		if (!unsigned && value.high < 0) {
			return (combined - (1n << 64n)).toString();
		}
		return combined.toString();
	}
	return String(value);
}

function longToNumber(value, unsigned) {
	if (typeof value === "number") {
		return value;
	}
	if (typeof value === "string") {
		return Number(value);
	}
	// Fast path: convert Long {low, high} directly via native BigInt
	if (value && typeof value.low === "number" && typeof value.high === "number") {
		const lo = BigInt(value.low >>> 0);
		const hi = BigInt(value.high >>> 0);
		const combined = (hi << 32n) | lo;
		if (!unsigned && value.high < 0) {
			return Number(combined - (1n << 64n));
		}
		return Number(combined);
	}
	return Number(value);
}

const createEmptyMessage = (name) => {
	function M(p) {
		if (p)
			for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
				if (p[ks[i]] != null && ks[i] !== "__proto__")
					this[ks[i]] = p[ks[i]];
	}
	M.create = function(p) { return new M(p); };
	M.encode = function(m, w) { return w ? w : $Writer.create(); };
	M.decode = function(r, l) {
		if (!(r instanceof $Reader)) r = $Reader.create(r);
		var c = l === undefined ? r.len : r.pos + l, m = new M();
		while (r.pos < c) {
			var t = r.uint32();
			r.skipType(t & 7);
		}
		return m;
	};
	M.fromObject = function(d) { return d instanceof M ? d : new M(); };
	M.toObject = function() { return {}; };
	M.prototype.toJSON = function() { return {}; };
	M.getTypeUrl = function(p) { return (p === undefined ? "type.googleapis.com" : p) + "/proto." + name; };
	return M;
};

export const proto = $root.proto = (() => {

    const proto = $root.proto || {};

    proto.ADVEncryptionType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "E2EE"] = 0;
        values[valuesById[1] = "HOSTED"] = 1;
        return values;
    })();

    proto.AIRichResponseCodeMetadata = (function() {

        const AIRichResponseCodeMetadata = proto.AIRichResponseCodeMetadata || {};

        AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT"] = 0;
            values[valuesById[1] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD"] = 1;
            values[valuesById[2] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD"] = 2;
            values[valuesById[3] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING"] = 3;
            values[valuesById[4] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER"] = 4;
            values[valuesById[5] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT"] = 5;
            return values;
        })();

        return AIRichResponseCodeMetadata;
    })();

    proto.AIRichResponseContentItemsMetadata = (function() {

        const AIRichResponseContentItemsMetadata = proto.AIRichResponseContentItemsMetadata || {};

        AIRichResponseContentItemsMetadata.ContentType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT"] = 0;
            values[valuesById[1] = "CAROUSEL"] = 1;
            return values;
        })();

        return AIRichResponseContentItemsMetadata;
    })();

    proto.AIRichResponseDynamicMetadata = (function() {

        const AIRichResponseDynamicMetadata = proto.AIRichResponseDynamicMetadata || {};

        AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN"] = 0;
            values[valuesById[1] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE"] = 1;
            values[valuesById[2] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF"] = 2;
            return values;
        })();

        return AIRichResponseDynamicMetadata;
    })();

    proto.AIRichResponseInlineImageMetadata = (function() {

        const AIRichResponseInlineImageMetadata = proto.AIRichResponseInlineImageMetadata || {};

        AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED"] = 0;
            values[valuesById[1] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED"] = 1;
            values[valuesById[2] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED"] = 2;
            return values;
        })();

        return AIRichResponseInlineImageMetadata;
    })();

    proto.AIRichResponseMessageType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AI_RICH_RESPONSE_TYPE_UNKNOWN"] = 0;
        values[valuesById[1] = "AI_RICH_RESPONSE_TYPE_STANDARD"] = 1;
        return values;
    })();

    proto.AIRichResponseSubMessageType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AI_RICH_RESPONSE_UNKNOWN"] = 0;
        values[valuesById[1] = "AI_RICH_RESPONSE_GRID_IMAGE"] = 1;
        values[valuesById[2] = "AI_RICH_RESPONSE_TEXT"] = 2;
        values[valuesById[3] = "AI_RICH_RESPONSE_INLINE_IMAGE"] = 3;
        values[valuesById[4] = "AI_RICH_RESPONSE_TABLE"] = 4;
        values[valuesById[5] = "AI_RICH_RESPONSE_CODE"] = 5;
        values[valuesById[6] = "AI_RICH_RESPONSE_DYNAMIC"] = 6;
        values[valuesById[7] = "AI_RICH_RESPONSE_MAP"] = 7;
        values[valuesById[8] = "AI_RICH_RESPONSE_LATEX"] = 8;
        values[valuesById[9] = "AI_RICH_RESPONSE_CONTENT_ITEMS"] = 9;
        return values;
    })();

    proto.BizAccountLinkInfo = (function() {

        const BizAccountLinkInfo = proto.BizAccountLinkInfo || {};

        BizAccountLinkInfo.AccountType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ENTERPRISE"] = 0;
            return values;
        })();

        BizAccountLinkInfo.HostStorageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ON_PREMISE"] = 0;
            values[valuesById[1] = "FACEBOOK"] = 1;
            return values;
        })();

        return BizAccountLinkInfo;
    })();

    proto.BizIdentityInfo = (function() {

        const BizIdentityInfo = proto.BizIdentityInfo || {};

        BizIdentityInfo.ActualActorsType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SELF"] = 0;
            values[valuesById[1] = "BSP"] = 1;
            return values;
        })();

        BizIdentityInfo.HostStorageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ON_PREMISE"] = 0;
            values[valuesById[1] = "FACEBOOK"] = 1;
            return values;
        })();

        BizIdentityInfo.VerifiedLevelValue = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "LOW"] = 1;
            values[valuesById[2] = "HIGH"] = 2;
            return values;
        })();

        return BizIdentityInfo;
    })();

    proto.BotAgeCollectionMetadata = (function() {

        const BotAgeCollectionMetadata = proto.BotAgeCollectionMetadata || {};

        BotAgeCollectionMetadata.AgeCollectionType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "O18_BINARY"] = 0;
            values[valuesById[1] = "WAFFLE"] = 1;
            return values;
        })();

        return BotAgeCollectionMetadata;
    })();

    proto.BotCapabilityMetadata = (function() {

        const BotCapabilityMetadata = proto.BotCapabilityMetadata || {};

        BotCapabilityMetadata.BotCapabilityType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PROGRESS_INDICATOR"] = 1;
            values[valuesById[2] = "RICH_RESPONSE_HEADING"] = 2;
            values[valuesById[3] = "RICH_RESPONSE_NESTED_LIST"] = 3;
            values[valuesById[4] = "AI_MEMORY"] = 4;
            values[valuesById[5] = "RICH_RESPONSE_THREAD_SURFING"] = 5;
            values[valuesById[6] = "RICH_RESPONSE_TABLE"] = 6;
            values[valuesById[7] = "RICH_RESPONSE_CODE"] = 7;
            values[valuesById[8] = "RICH_RESPONSE_STRUCTURED_RESPONSE"] = 8;
            values[valuesById[9] = "RICH_RESPONSE_INLINE_IMAGE"] = 9;
            values[valuesById[10] = "WA_IG_1P_PLUGIN_RANKING_CONTROL"] = 10;
            values[valuesById[11] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_1"] = 11;
            values[valuesById[12] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_2"] = 12;
            values[valuesById[13] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_3"] = 13;
            values[valuesById[14] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_4"] = 14;
            values[valuesById[15] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_5"] = 15;
            values[valuesById[16] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_6"] = 16;
            values[valuesById[17] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_7"] = 17;
            values[valuesById[18] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_8"] = 18;
            values[valuesById[19] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_9"] = 19;
            values[valuesById[20] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_10"] = 20;
            values[valuesById[21] = "RICH_RESPONSE_SUB_HEADING"] = 21;
            values[valuesById[22] = "RICH_RESPONSE_GRID_IMAGE"] = 22;
            values[valuesById[23] = "AI_STUDIO_UGC_MEMORY"] = 23;
            values[valuesById[24] = "RICH_RESPONSE_LATEX"] = 24;
            values[valuesById[25] = "RICH_RESPONSE_MAPS"] = 25;
            values[valuesById[26] = "RICH_RESPONSE_INLINE_REELS"] = 26;
            values[valuesById[27] = "AGENTIC_PLANNING"] = 27;
            values[valuesById[28] = "ACCOUNT_LINKING"] = 28;
            values[valuesById[29] = "STREAMING_DISAGGREGATION"] = 29;
            values[valuesById[30] = "RICH_RESPONSE_GRID_IMAGE_3P"] = 30;
            values[valuesById[31] = "RICH_RESPONSE_LATEX_INLINE"] = 31;
            values[valuesById[32] = "QUERY_PLAN"] = 32;
            values[valuesById[33] = "PROACTIVE_MESSAGE"] = 33;
            values[valuesById[34] = "RICH_RESPONSE_UNIFIED_RESPONSE"] = 34;
            values[valuesById[35] = "PROMOTION_MESSAGE"] = 35;
            values[valuesById[36] = "SIMPLIFIED_PROFILE_PAGE"] = 36;
            values[valuesById[37] = "RICH_RESPONSE_SOURCES_IN_MESSAGE"] = 37;
            values[valuesById[38] = "RICH_RESPONSE_SIDE_BY_SIDE_SURVEY"] = 38;
            values[valuesById[39] = "RICH_RESPONSE_UNIFIED_TEXT_COMPONENT"] = 39;
            values[valuesById[40] = "AI_SHARED_MEMORY"] = 40;
            values[valuesById[41] = "RICH_RESPONSE_UNIFIED_SOURCES"] = 41;
            values[valuesById[42] = "RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS"] = 42;
            values[valuesById[43] = "RICH_RESPONSE_UR_INLINE_REELS_ENABLED"] = 43;
            values[valuesById[44] = "RICH_RESPONSE_UR_MEDIA_GRID_ENABLED"] = 44;
            values[valuesById[45] = "RICH_RESPONSE_UR_TIMESTAMP_PLACEHOLDER"] = 45;
            values[valuesById[46] = "RICH_RESPONSE_IN_APP_SURVEY"] = 46;
            values[valuesById[47] = "AI_RESPONSE_MODEL_BRANDING"] = 47;
            values[valuesById[48] = "SESSION_TRANSPARENCY_SYSTEM_MESSAGE"] = 48;
            values[valuesById[49] = "RICH_RESPONSE_UR_REASONING"] = 49;
            return values;
        })();

        return BotCapabilityMetadata;
    })();

    proto.BotFeedbackMessage = (function() {

        const BotFeedbackMessage = proto.BotFeedbackMessage || {};

        BotFeedbackMessage.BotFeedbackKind = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BOT_FEEDBACK_POSITIVE"] = 0;
            values[valuesById[1] = "BOT_FEEDBACK_NEGATIVE_GENERIC"] = 1;
            values[valuesById[2] = "BOT_FEEDBACK_NEGATIVE_HELPFUL"] = 2;
            values[valuesById[3] = "BOT_FEEDBACK_NEGATIVE_INTERESTING"] = 3;
            values[valuesById[4] = "BOT_FEEDBACK_NEGATIVE_ACCURATE"] = 4;
            values[valuesById[5] = "BOT_FEEDBACK_NEGATIVE_SAFE"] = 5;
            values[valuesById[6] = "BOT_FEEDBACK_NEGATIVE_OTHER"] = 6;
            values[valuesById[7] = "BOT_FEEDBACK_NEGATIVE_REFUSED"] = 7;
            values[valuesById[8] = "BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING"] = 8;
            values[valuesById[9] = "BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT"] = 9;
            values[valuesById[10] = "BOT_FEEDBACK_NEGATIVE_PERSONALIZED"] = 10;
            values[valuesById[11] = "BOT_FEEDBACK_NEGATIVE_CLARITY"] = 11;
            values[valuesById[12] = "BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON"] = 12;
            values[valuesById[13] = "BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY"] = 13;
            values[valuesById[14] = "BOT_FEEDBACK_NEGATIVE"] = 14;
            return values;
        })();

        BotFeedbackMessage.BotFeedbackKindMultipleNegative = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC"] = 1;
            values[valuesById[2] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL"] = 2;
            values[valuesById[4] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING"] = 4;
            values[valuesById[8] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE"] = 8;
            values[valuesById[16] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE"] = 16;
            values[valuesById[32] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER"] = 32;
            values[valuesById[64] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED"] = 64;
            values[valuesById[128] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING"] = 128;
            values[valuesById[256] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT"] = 256;
            return values;
        })();

        BotFeedbackMessage.BotFeedbackKindMultiplePositive = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC"] = 1;
            return values;
        })();

        BotFeedbackMessage.ReportKind = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "GENERIC"] = 1;
            return values;
        })();

        return BotFeedbackMessage;
    })();

    proto.BotImagineMetadata = (function() {

        const BotImagineMetadata = proto.BotImagineMetadata || {};

        BotImagineMetadata.ImagineType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "IMAGINE"] = 1;
            values[valuesById[2] = "MEMU"] = 2;
            values[valuesById[3] = "FLASH"] = 3;
            values[valuesById[4] = "EDIT"] = 4;
            return values;
        })();

        return BotImagineMetadata;
    })();

    proto.BotLinkedAccount = (function() {

        const BotLinkedAccount = proto.BotLinkedAccount || {};

        BotLinkedAccount.BotLinkedAccountType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BOT_LINKED_ACCOUNT_TYPE_1P"] = 0;
            return values;
        })();

        return BotLinkedAccount;
    })();

    proto.BotMediaMetadata = (function() {

        const BotMediaMetadata = proto.BotMediaMetadata || {};

        BotMediaMetadata.OrientationType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "CENTER"] = 1;
            values[valuesById[2] = "LEFT"] = 2;
            values[valuesById[3] = "RIGHT"] = 3;
            return values;
        })();

        return BotMediaMetadata;
    })();

    proto.BotMessageOrigin = (function() {

        const BotMessageOrigin = proto.BotMessageOrigin || {};

        BotMessageOrigin.BotMessageOriginType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED"] = 0;
            return values;
        })();

        return BotMessageOrigin;
    })();

    proto.BotMetricsEntryPoint = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNDEFINED_ENTRY_POINT"] = 0;
        values[valuesById[1] = "FAVICON"] = 1;
        values[valuesById[2] = "CHATLIST"] = 2;
        values[valuesById[3] = "AISEARCH_NULL_STATE_PAPER_PLANE"] = 3;
        values[valuesById[4] = "AISEARCH_NULL_STATE_SUGGESTION"] = 4;
        values[valuesById[5] = "AISEARCH_TYPE_AHEAD_SUGGESTION"] = 5;
        values[valuesById[6] = "AISEARCH_TYPE_AHEAD_PAPER_PLANE"] = 6;
        values[valuesById[7] = "AISEARCH_TYPE_AHEAD_RESULT_CHATLIST"] = 7;
        values[valuesById[8] = "AISEARCH_TYPE_AHEAD_RESULT_MESSAGES"] = 8;
        values[valuesById[9] = "AIVOICE_SEARCH_BAR"] = 9;
        values[valuesById[10] = "AIVOICE_FAVICON"] = 10;
        values[valuesById[11] = "AISTUDIO"] = 11;
        values[valuesById[12] = "DEEPLINK"] = 12;
        values[valuesById[13] = "NOTIFICATION"] = 13;
        values[valuesById[14] = "PROFILE_MESSAGE_BUTTON"] = 14;
        values[valuesById[15] = "FORWARD"] = 15;
        values[valuesById[16] = "APP_SHORTCUT"] = 16;
        values[valuesById[17] = "FF_FAMILY"] = 17;
        values[valuesById[18] = "AI_TAB"] = 18;
        values[valuesById[19] = "AI_HOME"] = 19;
        values[valuesById[20] = "AI_DEEPLINK_IMMERSIVE"] = 20;
        values[valuesById[21] = "AI_DEEPLINK"] = 21;
        values[valuesById[22] = "META_AI_CHAT_SHORTCUT_AI_STUDIO"] = 22;
        values[valuesById[23] = "UGC_CHAT_SHORTCUT_AI_STUDIO"] = 23;
        values[valuesById[24] = "NEW_CHAT_AI_STUDIO"] = 24;
        values[valuesById[25] = "AIVOICE_FAVICON_CALL_HISTORY"] = 25;
        values[valuesById[26] = "ASK_META_AI_CONTEXT_MENU"] = 26;
        values[valuesById[27] = "ASK_META_AI_CONTEXT_MENU_1ON1"] = 27;
        values[valuesById[28] = "ASK_META_AI_CONTEXT_MENU_GROUP"] = 28;
        values[valuesById[29] = "INVOKE_META_AI_1ON1"] = 29;
        values[valuesById[30] = "INVOKE_META_AI_GROUP"] = 30;
        values[valuesById[31] = "META_AI_FORWARD"] = 31;
        values[valuesById[32] = "NEW_CHAT_AI_CONTACT"] = 32;
        values[valuesById[33] = "MESSAGE_QUICK_ACTION_1_ON_1_CHAT"] = 33;
        values[valuesById[34] = "MESSAGE_QUICK_ACTION_GROUP_CHAT"] = 34;
        values[valuesById[35] = "ATTACHMENT_TRAY_1_ON_1_CHAT"] = 35;
        values[valuesById[36] = "ATTACHMENT_TRAY_GROUP_CHAT"] = 36;
        values[valuesById[37] = "ASK_META_AI_MEDIA_VIEWER_1ON1"] = 37;
        values[valuesById[38] = "ASK_META_AI_MEDIA_VIEWER_GROUP"] = 38;
        return values;
    })();

    proto.BotMetricsThreadEntryPoint = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "AI_TAB_THREAD"] = 1;
        values[valuesById[2] = "AI_HOME_THREAD"] = 2;
        values[valuesById[3] = "AI_DEEPLINK_IMMERSIVE_THREAD"] = 3;
        values[valuesById[4] = "AI_DEEPLINK_THREAD"] = 4;
        values[valuesById[5] = "ASK_META_AI_CONTEXT_MENU_THREAD"] = 5;
        return values;
    })();

    proto.BotModeSelectionMetadata = (function() {

        const BotModeSelectionMetadata = proto.BotModeSelectionMetadata || {};

        BotModeSelectionMetadata.BotUserSelectionMode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_MODE"] = 0;
            values[valuesById[1] = "REASONING_MODE"] = 1;
            return values;
        })();

        return BotModeSelectionMetadata;
    })();

    proto.BotModelMetadata = (function() {

        const BotModelMetadata = proto.BotModelMetadata || {};

        BotModelMetadata.ModelType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "LLAMA_PROD"] = 1;
            values[valuesById[2] = "LLAMA_PROD_PREMIUM"] = 2;
            return values;
        })();

        BotModelMetadata.PremiumModelStatus = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_STATUS"] = 0;
            values[valuesById[1] = "AVAILABLE"] = 1;
            values[valuesById[2] = "QUOTA_EXCEED_LIMIT"] = 2;
            return values;
        })();

        return BotModelMetadata;
    })();

    proto.BotPluginMetadata = (function() {

        const BotPluginMetadata = proto.BotPluginMetadata || {};

        BotPluginMetadata.PluginType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_PLUGIN"] = 0;
            values[valuesById[1] = "REELS"] = 1;
            values[valuesById[2] = "SEARCH"] = 2;
            return values;
        })();

        BotPluginMetadata.SearchProvider = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "BING"] = 1;
            values[valuesById[2] = "GOOGLE"] = 2;
            values[valuesById[3] = "SUPPORT"] = 3;
            return values;
        })();

        return BotPluginMetadata;
    })();

    proto.BotPromotionMessageMetadata = (function() {

        const BotPromotionMessageMetadata = proto.BotPromotionMessageMetadata || {};

        BotPromotionMessageMetadata.BotPromotionType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "C50"] = 1;
            values[valuesById[2] = "SURVEY_PLATFORM"] = 2;
            return values;
        })();

        return BotPromotionMessageMetadata;
    })();

    proto.BotReminderMetadata = (function() {

        const BotReminderMetadata = proto.BotReminderMetadata || {};

        BotReminderMetadata.ReminderAction = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "NOTIFY"] = 1;
            values[valuesById[2] = "CREATE"] = 2;
            values[valuesById[3] = "DELETE"] = 3;
            values[valuesById[4] = "UPDATE"] = 4;
            return values;
        })();

        BotReminderMetadata.ReminderFrequency = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "ONCE"] = 1;
            values[valuesById[2] = "DAILY"] = 2;
            values[valuesById[3] = "WEEKLY"] = 3;
            values[valuesById[4] = "BIWEEKLY"] = 4;
            values[valuesById[5] = "MONTHLY"] = 5;
            return values;
        })();

        return BotReminderMetadata;
    })();

    proto.BotSessionSource = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "NULL_STATE"] = 1;
        values[valuesById[2] = "TYPEAHEAD"] = 2;
        values[valuesById[3] = "USER_INPUT"] = 3;
        values[valuesById[4] = "EMU_FLASH"] = 4;
        values[valuesById[5] = "EMU_FLASH_FOLLOWUP"] = 5;
        values[valuesById[6] = "VOICE"] = 6;
        return values;
    })();

    proto.BotSignatureVerificationUseCaseProof = (function() {

        const BotSignatureVerificationUseCaseProof = proto.BotSignatureVerificationUseCaseProof || {};

        BotSignatureVerificationUseCaseProof.BotSignatureUseCase = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSPECIFIED"] = 0;
            values[valuesById[1] = "WA_BOT_MSG"] = 1;
            return values;
        })();

        return BotSignatureVerificationUseCaseProof;
    })();

    proto.CallLogRecord = (function() {

        const CallLogRecord = proto.CallLogRecord || {};

        CallLogRecord.CallResult = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CONNECTED"] = 0;
            values[valuesById[1] = "REJECTED"] = 1;
            values[valuesById[2] = "CANCELLED"] = 2;
            values[valuesById[3] = "ACCEPTEDELSEWHERE"] = 3;
            values[valuesById[4] = "MISSED"] = 4;
            values[valuesById[5] = "INVALID"] = 5;
            values[valuesById[6] = "UNAVAILABLE"] = 6;
            values[valuesById[7] = "UPCOMING"] = 7;
            values[valuesById[8] = "FAILED"] = 8;
            values[valuesById[9] = "ABANDONED"] = 9;
            values[valuesById[10] = "ONGOING"] = 10;
            return values;
        })();

        CallLogRecord.CallType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "REGULAR"] = 0;
            values[valuesById[1] = "SCHEDULED_CALL"] = 1;
            values[valuesById[2] = "VOICE_CHAT"] = 2;
            return values;
        })();

        CallLogRecord.SilenceReason = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "SCHEDULED"] = 1;
            values[valuesById[2] = "PRIVACY"] = 2;
            values[valuesById[3] = "LIGHTWEIGHT"] = 3;
            return values;
        })();

        return CallLogRecord;
    })();

    proto.CertChain = (function() {

        function CertChain(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CertChain.prototype.leaf = null;
        CertChain.prototype.intermediate = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CertChain.prototype, "_leaf", {
            get: $util.oneOfGetter($oneOfFields = ["leaf"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CertChain.prototype, "_intermediate", {
            get: $util.oneOfGetter($oneOfFields = ["intermediate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        CertChain.create = function create(properties) {
            return new CertChain(properties);
        };

        CertChain.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.leaf != null && Object.hasOwnProperty.call(m, "leaf"))
                $root.proto.CertChain.NoiseCertificate.encode(m.leaf, w.uint32(10).fork(), q + 1).ldelim();
            if (m.intermediate != null && Object.hasOwnProperty.call(m, "intermediate"))
                $root.proto.CertChain.NoiseCertificate.encode(m.intermediate, w.uint32(18).fork(), q + 1).ldelim();
            return w;
        };

        CertChain.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.CertChain();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.leaf = $root.proto.CertChain.NoiseCertificate.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.intermediate = $root.proto.CertChain.NoiseCertificate.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        CertChain.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.CertChain)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.CertChain: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.CertChain();
            if (d.leaf != null) {
                if (!$util.isObject(d.leaf))
                    throw TypeError(".proto.CertChain.leaf: object expected");
                m.leaf = $root.proto.CertChain.NoiseCertificate.fromObject(d.leaf, n + 1);
            }
            if (d.intermediate != null) {
                if (!$util.isObject(d.intermediate))
                    throw TypeError(".proto.CertChain.intermediate: object expected");
                m.intermediate = $root.proto.CertChain.NoiseCertificate.fromObject(d.intermediate, n + 1);
            }
            return m;
        };

        CertChain.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (m.leaf != null && Object.hasOwnProperty.call(m, "leaf")) {
                d.leaf = $root.proto.CertChain.NoiseCertificate.toObject(m.leaf, o, q + 1);
                if (o.oneofs)
                    d._leaf = "leaf";
            }
            if (m.intermediate != null && Object.hasOwnProperty.call(m, "intermediate")) {
                d.intermediate = $root.proto.CertChain.NoiseCertificate.toObject(m.intermediate, o, q + 1);
                if (o.oneofs)
                    d._intermediate = "intermediate";
            }
            return d;
        };

        CertChain.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CertChain.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.CertChain";
        };

        CertChain.NoiseCertificate = (function() {

            function NoiseCertificate(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            NoiseCertificate.prototype.details = null;
            NoiseCertificate.prototype.signature = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(NoiseCertificate.prototype, "_details", {
                get: $util.oneOfGetter($oneOfFields = ["details"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(NoiseCertificate.prototype, "_signature", {
                get: $util.oneOfGetter($oneOfFields = ["signature"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            NoiseCertificate.create = function create(properties) {
                return new NoiseCertificate(properties);
            };

            NoiseCertificate.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.details != null && Object.hasOwnProperty.call(m, "details"))
                    w.uint32(10).bytes(m.details);
                if (m.signature != null && Object.hasOwnProperty.call(m, "signature"))
                    w.uint32(18).bytes(m.signature);
                return w;
            };

            NoiseCertificate.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.CertChain.NoiseCertificate();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.details = r.bytes();
                            break;
                        }
                    case 2: {
                            m.signature = r.bytes();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            NoiseCertificate.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.CertChain.NoiseCertificate)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.CertChain.NoiseCertificate: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.CertChain.NoiseCertificate();
                if (d.details != null) {
                    if (typeof d.details === "string")
                        $util.base64.decode(d.details, m.details = $util.newBuffer($util.base64.length(d.details)), 0);
                    else if (d.details.length >= 0)
                        m.details = d.details;
                }
                if (d.signature != null) {
                    if (typeof d.signature === "string")
                        $util.base64.decode(d.signature, m.signature = $util.newBuffer($util.base64.length(d.signature)), 0);
                    else if (d.signature.length >= 0)
                        m.signature = d.signature;
                }
                return m;
            };

            NoiseCertificate.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.details != null && Object.hasOwnProperty.call(m, "details")) {
                    d.details = o.bytes === String ? $util.base64.encode(m.details, 0, m.details.length) : o.bytes === Array ? Array.prototype.slice.call(m.details) : m.details;
                    if (o.oneofs)
                        d._details = "details";
                }
                if (m.signature != null && Object.hasOwnProperty.call(m, "signature")) {
                    d.signature = o.bytes === String ? $util.base64.encode(m.signature, 0, m.signature.length) : o.bytes === Array ? Array.prototype.slice.call(m.signature) : m.signature;
                    if (o.oneofs)
                        d._signature = "signature";
                }
                return d;
            };

            NoiseCertificate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            NoiseCertificate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CertChain.NoiseCertificate";
            };

            NoiseCertificate.Details = (function() {

                function Details(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Details.prototype.serial = null;
                Details.prototype.issuerSerial = null;
                Details.prototype.key = null;
                Details.prototype.notBefore = null;
                Details.prototype.notAfter = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_serial", {
                    get: $util.oneOfGetter($oneOfFields = ["serial"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_issuerSerial", {
                    get: $util.oneOfGetter($oneOfFields = ["issuerSerial"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_key", {
                    get: $util.oneOfGetter($oneOfFields = ["key"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_notBefore", {
                    get: $util.oneOfGetter($oneOfFields = ["notBefore"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_notAfter", {
                    get: $util.oneOfGetter($oneOfFields = ["notAfter"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Details.create = function create(properties) {
                    return new Details(properties);
                };

                Details.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.serial != null && Object.hasOwnProperty.call(m, "serial"))
                        w.uint32(8).uint32(m.serial);
                    if (m.issuerSerial != null && Object.hasOwnProperty.call(m, "issuerSerial"))
                        w.uint32(16).uint32(m.issuerSerial);
                    if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                        w.uint32(26).bytes(m.key);
                    if (m.notBefore != null && Object.hasOwnProperty.call(m, "notBefore"))
                        w.uint32(32).uint64(m.notBefore);
                    if (m.notAfter != null && Object.hasOwnProperty.call(m, "notAfter"))
                        w.uint32(40).uint64(m.notAfter);
                    return w;
                };

                Details.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.CertChain.NoiseCertificate.Details();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.serial = r.uint32();
                                break;
                            }
                        case 2: {
                                m.issuerSerial = r.uint32();
                                break;
                            }
                        case 3: {
                                m.key = r.bytes();
                                break;
                            }
                        case 4: {
                                m.notBefore = r.uint64();
                                break;
                            }
                        case 5: {
                                m.notAfter = r.uint64();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Details.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.CertChain.NoiseCertificate.Details)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.CertChain.NoiseCertificate.Details: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.CertChain.NoiseCertificate.Details();
                    if (d.serial != null) {
                        m.serial = d.serial >>> 0;
                    }
                    if (d.issuerSerial != null) {
                        m.issuerSerial = d.issuerSerial >>> 0;
                    }
                    if (d.key != null) {
                        if (typeof d.key === "string")
                            $util.base64.decode(d.key, m.key = $util.newBuffer($util.base64.length(d.key)), 0);
                        else if (d.key.length >= 0)
                            m.key = d.key;
                    }
                    if (d.notBefore != null) {
                        if ($util.Long)
                            m.notBefore = $util.Long.fromValue(d.notBefore, true);
                        else if (typeof d.notBefore === "string")
                            m.notBefore = parseInt(d.notBefore, 10);
                        else if (typeof d.notBefore === "number")
                            m.notBefore = d.notBefore;
                        else if (typeof d.notBefore === "object")
                            m.notBefore = new $util.LongBits(d.notBefore.low >>> 0, d.notBefore.high >>> 0).toNumber(true);
                    }
                    if (d.notAfter != null) {
                        if ($util.Long)
                            m.notAfter = $util.Long.fromValue(d.notAfter, true);
                        else if (typeof d.notAfter === "string")
                            m.notAfter = parseInt(d.notAfter, 10);
                        else if (typeof d.notAfter === "number")
                            m.notAfter = d.notAfter;
                        else if (typeof d.notAfter === "object")
                            m.notAfter = new $util.LongBits(d.notAfter.low >>> 0, d.notAfter.high >>> 0).toNumber(true);
                    }
                    return m;
                };

                Details.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.serial != null && Object.hasOwnProperty.call(m, "serial")) {
                        d.serial = m.serial;
                        if (o.oneofs)
                            d._serial = "serial";
                    }
                    if (m.issuerSerial != null && Object.hasOwnProperty.call(m, "issuerSerial")) {
                        d.issuerSerial = m.issuerSerial;
                        if (o.oneofs)
                            d._issuerSerial = "issuerSerial";
                    }
                    if (m.key != null && Object.hasOwnProperty.call(m, "key")) {
                        d.key = o.bytes === String ? $util.base64.encode(m.key, 0, m.key.length) : o.bytes === Array ? Array.prototype.slice.call(m.key) : m.key;
                        if (o.oneofs)
                            d._key = "key";
                    }
                    if (m.notBefore != null && Object.hasOwnProperty.call(m, "notBefore")) {
                        if (typeof BigInt !== "undefined" && o.longs === BigInt)
                            d.notBefore = typeof m.notBefore === "number" ? BigInt(m.notBefore) : $util.Long.fromBits(m.notBefore.low >>> 0, m.notBefore.high >>> 0, true).toBigInt();
                        else if (typeof m.notBefore === "number")
                            d.notBefore = o.longs === String ? String(m.notBefore) : m.notBefore;
                        else
                            d.notBefore = o.longs === String ? longToString(m.notBefore, true) : o.longs === Number ? longToNumber(m.notBefore, true) : m.notBefore;
                        if (o.oneofs)
                            d._notBefore = "notBefore";
                    }
                    if (m.notAfter != null && Object.hasOwnProperty.call(m, "notAfter")) {
                        if (typeof BigInt !== "undefined" && o.longs === BigInt)
                            d.notAfter = typeof m.notAfter === "number" ? BigInt(m.notAfter) : $util.Long.fromBits(m.notAfter.low >>> 0, m.notAfter.high >>> 0, true).toBigInt();
                        else if (typeof m.notAfter === "number")
                            d.notAfter = o.longs === String ? String(m.notAfter) : m.notAfter;
                        else
                            d.notAfter = o.longs === String ? longToString(m.notAfter, true) : o.longs === Number ? longToNumber(m.notAfter, true) : m.notAfter;
                        if (o.oneofs)
                            d._notAfter = "notAfter";
                    }
                    return d;
                };

                Details.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Details.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.CertChain.NoiseCertificate.Details";
                };

                return Details;
            })();

            return NoiseCertificate;
        })();

        return CertChain;
    })();

    proto.ClientPayload = (function() {

        function ClientPayload(p) {
            this.shards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ClientPayload.prototype.username = null;
        ClientPayload.prototype.passive = null;
        ClientPayload.prototype.userAgent = null;
        ClientPayload.prototype.webInfo = null;
        ClientPayload.prototype.pushName = null;
        ClientPayload.prototype.sessionId = null;
        ClientPayload.prototype.shortConnect = null;
        ClientPayload.prototype.connectType = null;
        ClientPayload.prototype.connectReason = null;
        ClientPayload.prototype.shards = $util.emptyArray;
        ClientPayload.prototype.dnsSource = null;
        ClientPayload.prototype.connectAttemptCount = null;
        ClientPayload.prototype.device = null;
        ClientPayload.prototype.devicePairingData = null;
        ClientPayload.prototype.product = null;
        ClientPayload.prototype.fbCat = null;
        ClientPayload.prototype.fbUserAgent = null;
        ClientPayload.prototype.oc = null;
        ClientPayload.prototype.lc = null;
        ClientPayload.prototype.iosAppExtension = null;
        ClientPayload.prototype.fbAppId = null;
        ClientPayload.prototype.fbDeviceId = null;
        ClientPayload.prototype.pull = null;
        ClientPayload.prototype.paddingBytes = null;
        ClientPayload.prototype.yearClass = null;
        ClientPayload.prototype.memClass = null;
        ClientPayload.prototype.interopData = null;
        ClientPayload.prototype.trafficAnonymization = null;
        ClientPayload.prototype.lidDbMigrated = null;
        ClientPayload.prototype.accountType = null;
        ClientPayload.prototype.connectionSequenceInfo = null;
        ClientPayload.prototype.paaLink = null;
        ClientPayload.prototype.preacksCount = null;
        ClientPayload.prototype.processingQueueSize = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_username", {
            get: $util.oneOfGetter($oneOfFields = ["username"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_passive", {
            get: $util.oneOfGetter($oneOfFields = ["passive"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_userAgent", {
            get: $util.oneOfGetter($oneOfFields = ["userAgent"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_webInfo", {
            get: $util.oneOfGetter($oneOfFields = ["webInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_pushName", {
            get: $util.oneOfGetter($oneOfFields = ["pushName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_sessionId", {
            get: $util.oneOfGetter($oneOfFields = ["sessionId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_shortConnect", {
            get: $util.oneOfGetter($oneOfFields = ["shortConnect"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_connectType", {
            get: $util.oneOfGetter($oneOfFields = ["connectType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_connectReason", {
            get: $util.oneOfGetter($oneOfFields = ["connectReason"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_dnsSource", {
            get: $util.oneOfGetter($oneOfFields = ["dnsSource"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_connectAttemptCount", {
            get: $util.oneOfGetter($oneOfFields = ["connectAttemptCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_device", {
            get: $util.oneOfGetter($oneOfFields = ["device"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_devicePairingData", {
            get: $util.oneOfGetter($oneOfFields = ["devicePairingData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_product", {
            get: $util.oneOfGetter($oneOfFields = ["product"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_fbCat", {
            get: $util.oneOfGetter($oneOfFields = ["fbCat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_fbUserAgent", {
            get: $util.oneOfGetter($oneOfFields = ["fbUserAgent"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_oc", {
            get: $util.oneOfGetter($oneOfFields = ["oc"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_lc", {
            get: $util.oneOfGetter($oneOfFields = ["lc"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_iosAppExtension", {
            get: $util.oneOfGetter($oneOfFields = ["iosAppExtension"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_fbAppId", {
            get: $util.oneOfGetter($oneOfFields = ["fbAppId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_fbDeviceId", {
            get: $util.oneOfGetter($oneOfFields = ["fbDeviceId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_pull", {
            get: $util.oneOfGetter($oneOfFields = ["pull"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_paddingBytes", {
            get: $util.oneOfGetter($oneOfFields = ["paddingBytes"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_yearClass", {
            get: $util.oneOfGetter($oneOfFields = ["yearClass"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_memClass", {
            get: $util.oneOfGetter($oneOfFields = ["memClass"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_interopData", {
            get: $util.oneOfGetter($oneOfFields = ["interopData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_trafficAnonymization", {
            get: $util.oneOfGetter($oneOfFields = ["trafficAnonymization"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_lidDbMigrated", {
            get: $util.oneOfGetter($oneOfFields = ["lidDbMigrated"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_connectionSequenceInfo", {
            get: $util.oneOfGetter($oneOfFields = ["connectionSequenceInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_paaLink", {
            get: $util.oneOfGetter($oneOfFields = ["paaLink"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_preacksCount", {
            get: $util.oneOfGetter($oneOfFields = ["preacksCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_processingQueueSize", {
            get: $util.oneOfGetter($oneOfFields = ["processingQueueSize"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ClientPayload.create = function create(properties) {
            return new ClientPayload(properties);
        };

        ClientPayload.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.username != null && Object.hasOwnProperty.call(m, "username"))
                w.uint32(8).uint64(m.username);
            if (m.passive != null && Object.hasOwnProperty.call(m, "passive"))
                w.uint32(24).bool(m.passive);
            if (m.userAgent != null && Object.hasOwnProperty.call(m, "userAgent"))
                $root.proto.ClientPayload.UserAgent.encode(m.userAgent, w.uint32(42).fork(), q + 1).ldelim();
            if (m.webInfo != null && Object.hasOwnProperty.call(m, "webInfo"))
                $root.proto.ClientPayload.WebInfo.encode(m.webInfo, w.uint32(50).fork(), q + 1).ldelim();
            if (m.pushName != null && Object.hasOwnProperty.call(m, "pushName"))
                w.uint32(58).string(m.pushName);
            if (m.sessionId != null && Object.hasOwnProperty.call(m, "sessionId"))
                w.uint32(77).sfixed32(m.sessionId);
            if (m.shortConnect != null && Object.hasOwnProperty.call(m, "shortConnect"))
                w.uint32(80).bool(m.shortConnect);
            if (m.connectType != null && Object.hasOwnProperty.call(m, "connectType"))
                w.uint32(96).int32(m.connectType);
            if (m.connectReason != null && Object.hasOwnProperty.call(m, "connectReason"))
                w.uint32(104).int32(m.connectReason);
            if (m.shards != null && m.shards.length) {
                w.uint32(114).fork();
                for (var i = 0; i < m.shards.length; ++i)
                    w.int32(m.shards[i]);
                w.ldelim();
            }
            if (m.dnsSource != null && Object.hasOwnProperty.call(m, "dnsSource"))
                $root.proto.ClientPayload.DNSSource.encode(m.dnsSource, w.uint32(122).fork(), q + 1).ldelim();
            if (m.connectAttemptCount != null && Object.hasOwnProperty.call(m, "connectAttemptCount"))
                w.uint32(128).uint32(m.connectAttemptCount);
            if (m.device != null && Object.hasOwnProperty.call(m, "device"))
                w.uint32(144).uint32(m.device);
            if (m.devicePairingData != null && Object.hasOwnProperty.call(m, "devicePairingData"))
                $root.proto.ClientPayload.DevicePairingRegistrationData.encode(m.devicePairingData, w.uint32(154).fork(), q + 1).ldelim();
            if (m.product != null && Object.hasOwnProperty.call(m, "product"))
                w.uint32(160).int32(m.product);
            if (m.fbCat != null && Object.hasOwnProperty.call(m, "fbCat"))
                w.uint32(170).bytes(m.fbCat);
            if (m.fbUserAgent != null && Object.hasOwnProperty.call(m, "fbUserAgent"))
                w.uint32(178).bytes(m.fbUserAgent);
            if (m.oc != null && Object.hasOwnProperty.call(m, "oc"))
                w.uint32(184).bool(m.oc);
            if (m.lc != null && Object.hasOwnProperty.call(m, "lc"))
                w.uint32(192).int32(m.lc);
            if (m.iosAppExtension != null && Object.hasOwnProperty.call(m, "iosAppExtension"))
                w.uint32(240).int32(m.iosAppExtension);
            if (m.fbAppId != null && Object.hasOwnProperty.call(m, "fbAppId"))
                w.uint32(248).uint64(m.fbAppId);
            if (m.fbDeviceId != null && Object.hasOwnProperty.call(m, "fbDeviceId"))
                w.uint32(258).bytes(m.fbDeviceId);
            if (m.pull != null && Object.hasOwnProperty.call(m, "pull"))
                w.uint32(264).bool(m.pull);
            if (m.paddingBytes != null && Object.hasOwnProperty.call(m, "paddingBytes"))
                w.uint32(274).bytes(m.paddingBytes);
            if (m.yearClass != null && Object.hasOwnProperty.call(m, "yearClass"))
                w.uint32(288).int32(m.yearClass);
            if (m.memClass != null && Object.hasOwnProperty.call(m, "memClass"))
                w.uint32(296).int32(m.memClass);
            if (m.interopData != null && Object.hasOwnProperty.call(m, "interopData"))
                $root.proto.ClientPayload.InteropData.encode(m.interopData, w.uint32(306).fork(), q + 1).ldelim();
            if (m.trafficAnonymization != null && Object.hasOwnProperty.call(m, "trafficAnonymization"))
                w.uint32(320).int32(m.trafficAnonymization);
            if (m.lidDbMigrated != null && Object.hasOwnProperty.call(m, "lidDbMigrated"))
                w.uint32(328).bool(m.lidDbMigrated);
            if (m.accountType != null && Object.hasOwnProperty.call(m, "accountType"))
                w.uint32(336).int32(m.accountType);
            if (m.connectionSequenceInfo != null && Object.hasOwnProperty.call(m, "connectionSequenceInfo"))
                w.uint32(349).sfixed32(m.connectionSequenceInfo);
            if (m.paaLink != null && Object.hasOwnProperty.call(m, "paaLink"))
                w.uint32(352).bool(m.paaLink);
            if (m.preacksCount != null && Object.hasOwnProperty.call(m, "preacksCount"))
                w.uint32(360).int32(m.preacksCount);
            if (m.processingQueueSize != null && Object.hasOwnProperty.call(m, "processingQueueSize"))
                w.uint32(368).int32(m.processingQueueSize);
            return w;
        };

        ClientPayload.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ClientPayload();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.username = r.uint64();
                        break;
                    }
                case 3: {
                        m.passive = r.bool();
                        break;
                    }
                case 5: {
                        m.userAgent = $root.proto.ClientPayload.UserAgent.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 6: {
                        m.webInfo = $root.proto.ClientPayload.WebInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 7: {
                        m.pushName = r.string();
                        break;
                    }
                case 9: {
                        m.sessionId = r.sfixed32();
                        break;
                    }
                case 10: {
                        m.shortConnect = r.bool();
                        break;
                    }
                case 12: {
                        m.connectType = r.int32();
                        break;
                    }
                case 13: {
                        m.connectReason = r.int32();
                        break;
                    }
                case 14: {
                        if (!(m.shards && m.shards.length))
                            m.shards = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.shards.push(r.int32());
                        } else
                            m.shards.push(r.int32());
                        break;
                    }
                case 15: {
                        m.dnsSource = $root.proto.ClientPayload.DNSSource.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 16: {
                        m.connectAttemptCount = r.uint32();
                        break;
                    }
                case 18: {
                        m.device = r.uint32();
                        break;
                    }
                case 19: {
                        m.devicePairingData = $root.proto.ClientPayload.DevicePairingRegistrationData.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 20: {
                        m.product = r.int32();
                        break;
                    }
                case 21: {
                        m.fbCat = r.bytes();
                        break;
                    }
                case 22: {
                        m.fbUserAgent = r.bytes();
                        break;
                    }
                case 23: {
                        m.oc = r.bool();
                        break;
                    }
                case 24: {
                        m.lc = r.int32();
                        break;
                    }
                case 30: {
                        m.iosAppExtension = r.int32();
                        break;
                    }
                case 31: {
                        m.fbAppId = r.uint64();
                        break;
                    }
                case 32: {
                        m.fbDeviceId = r.bytes();
                        break;
                    }
                case 33: {
                        m.pull = r.bool();
                        break;
                    }
                case 34: {
                        m.paddingBytes = r.bytes();
                        break;
                    }
                case 36: {
                        m.yearClass = r.int32();
                        break;
                    }
                case 37: {
                        m.memClass = r.int32();
                        break;
                    }
                case 38: {
                        m.interopData = $root.proto.ClientPayload.InteropData.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 40: {
                        m.trafficAnonymization = r.int32();
                        break;
                    }
                case 41: {
                        m.lidDbMigrated = r.bool();
                        break;
                    }
                case 42: {
                        m.accountType = r.int32();
                        break;
                    }
                case 43: {
                        m.connectionSequenceInfo = r.sfixed32();
                        break;
                    }
                case 44: {
                        m.paaLink = r.bool();
                        break;
                    }
                case 45: {
                        m.preacksCount = r.int32();
                        break;
                    }
                case 46: {
                        m.processingQueueSize = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ClientPayload.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.ClientPayload)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.ClientPayload: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.ClientPayload();
            if (d.username != null) {
                if ($util.Long)
                    m.username = $util.Long.fromValue(d.username, true);
                else if (typeof d.username === "string")
                    m.username = parseInt(d.username, 10);
                else if (typeof d.username === "number")
                    m.username = d.username;
                else if (typeof d.username === "object")
                    m.username = new $util.LongBits(d.username.low >>> 0, d.username.high >>> 0).toNumber(true);
            }
            if (d.passive != null) {
                m.passive = Boolean(d.passive);
            }
            if (d.userAgent != null) {
                if (!$util.isObject(d.userAgent))
                    throw TypeError(".proto.ClientPayload.userAgent: object expected");
                m.userAgent = $root.proto.ClientPayload.UserAgent.fromObject(d.userAgent, n + 1);
            }
            if (d.webInfo != null) {
                if (!$util.isObject(d.webInfo))
                    throw TypeError(".proto.ClientPayload.webInfo: object expected");
                m.webInfo = $root.proto.ClientPayload.WebInfo.fromObject(d.webInfo, n + 1);
            }
            if (d.pushName != null) {
                m.pushName = String(d.pushName);
            }
            if (d.sessionId != null) {
                m.sessionId = d.sessionId | 0;
            }
            if (d.shortConnect != null) {
                m.shortConnect = Boolean(d.shortConnect);
            }
            switch (d.connectType) {
            default:
                if (typeof d.connectType === "number") {
                    m.connectType = d.connectType;
                    break;
                }
                break;
            case "CELLULAR_UNKNOWN":
            case 0:
                m.connectType = 0;
                break;
            case "WIFI_UNKNOWN":
            case 1:
                m.connectType = 1;
                break;
            case "CELLULAR_EDGE":
            case 100:
                m.connectType = 100;
                break;
            case "CELLULAR_IDEN":
            case 101:
                m.connectType = 101;
                break;
            case "CELLULAR_UMTS":
            case 102:
                m.connectType = 102;
                break;
            case "CELLULAR_EVDO":
            case 103:
                m.connectType = 103;
                break;
            case "CELLULAR_GPRS":
            case 104:
                m.connectType = 104;
                break;
            case "CELLULAR_HSDPA":
            case 105:
                m.connectType = 105;
                break;
            case "CELLULAR_HSUPA":
            case 106:
                m.connectType = 106;
                break;
            case "CELLULAR_HSPA":
            case 107:
                m.connectType = 107;
                break;
            case "CELLULAR_CDMA":
            case 108:
                m.connectType = 108;
                break;
            case "CELLULAR_1XRTT":
            case 109:
                m.connectType = 109;
                break;
            case "CELLULAR_EHRPD":
            case 110:
                m.connectType = 110;
                break;
            case "CELLULAR_LTE":
            case 111:
                m.connectType = 111;
                break;
            case "CELLULAR_HSPAP":
            case 112:
                m.connectType = 112;
                break;
            }
            switch (d.connectReason) {
            default:
                if (typeof d.connectReason === "number") {
                    m.connectReason = d.connectReason;
                    break;
                }
                break;
            case "PUSH":
            case 0:
                m.connectReason = 0;
                break;
            case "USER_ACTIVATED":
            case 1:
                m.connectReason = 1;
                break;
            case "SCHEDULED":
            case 2:
                m.connectReason = 2;
                break;
            case "ERROR_RECONNECT":
            case 3:
                m.connectReason = 3;
                break;
            case "NETWORK_SWITCH":
            case 4:
                m.connectReason = 4;
                break;
            case "PING_RECONNECT":
            case 5:
                m.connectReason = 5;
                break;
            case "UNKNOWN":
            case 6:
                m.connectReason = 6;
                break;
            }
            if (d.shards) {
                if (!Array.isArray(d.shards))
                    throw TypeError(".proto.ClientPayload.shards: array expected");
                m.shards = [];
                for (var i = 0; i < d.shards.length; ++i) {
                    m.shards[i] = d.shards[i] | 0;
                }
            }
            if (d.dnsSource != null) {
                if (!$util.isObject(d.dnsSource))
                    throw TypeError(".proto.ClientPayload.dnsSource: object expected");
                m.dnsSource = $root.proto.ClientPayload.DNSSource.fromObject(d.dnsSource, n + 1);
            }
            if (d.connectAttemptCount != null) {
                m.connectAttemptCount = d.connectAttemptCount >>> 0;
            }
            if (d.device != null) {
                m.device = d.device >>> 0;
            }
            if (d.devicePairingData != null) {
                if (!$util.isObject(d.devicePairingData))
                    throw TypeError(".proto.ClientPayload.devicePairingData: object expected");
                m.devicePairingData = $root.proto.ClientPayload.DevicePairingRegistrationData.fromObject(d.devicePairingData, n + 1);
            }
            switch (d.product) {
            default:
                if (typeof d.product === "number") {
                    m.product = d.product;
                    break;
                }
                break;
            case "WHATSAPP":
            case 0:
                m.product = 0;
                break;
            case "MESSENGER":
            case 1:
                m.product = 1;
                break;
            case "INTEROP":
            case 2:
                m.product = 2;
                break;
            case "INTEROP_MSGR":
            case 3:
                m.product = 3;
                break;
            case "WHATSAPP_LID":
            case 4:
                m.product = 4;
                break;
            }
            if (d.fbCat != null) {
                if (typeof d.fbCat === "string")
                    $util.base64.decode(d.fbCat, m.fbCat = $util.newBuffer($util.base64.length(d.fbCat)), 0);
                else if (d.fbCat.length >= 0)
                    m.fbCat = d.fbCat;
            }
            if (d.fbUserAgent != null) {
                if (typeof d.fbUserAgent === "string")
                    $util.base64.decode(d.fbUserAgent, m.fbUserAgent = $util.newBuffer($util.base64.length(d.fbUserAgent)), 0);
                else if (d.fbUserAgent.length >= 0)
                    m.fbUserAgent = d.fbUserAgent;
            }
            if (d.oc != null) {
                m.oc = Boolean(d.oc);
            }
            if (d.lc != null) {
                m.lc = d.lc | 0;
            }
            switch (d.iosAppExtension) {
            default:
                if (typeof d.iosAppExtension === "number") {
                    m.iosAppExtension = d.iosAppExtension;
                    break;
                }
                break;
            case "SHARE_EXTENSION":
            case 0:
                m.iosAppExtension = 0;
                break;
            case "SERVICE_EXTENSION":
            case 1:
                m.iosAppExtension = 1;
                break;
            case "INTENTS_EXTENSION":
            case 2:
                m.iosAppExtension = 2;
                break;
            }
            if (d.fbAppId != null) {
                if ($util.Long)
                    m.fbAppId = $util.Long.fromValue(d.fbAppId, true);
                else if (typeof d.fbAppId === "string")
                    m.fbAppId = parseInt(d.fbAppId, 10);
                else if (typeof d.fbAppId === "number")
                    m.fbAppId = d.fbAppId;
                else if (typeof d.fbAppId === "object")
                    m.fbAppId = new $util.LongBits(d.fbAppId.low >>> 0, d.fbAppId.high >>> 0).toNumber(true);
            }
            if (d.fbDeviceId != null) {
                if (typeof d.fbDeviceId === "string")
                    $util.base64.decode(d.fbDeviceId, m.fbDeviceId = $util.newBuffer($util.base64.length(d.fbDeviceId)), 0);
                else if (d.fbDeviceId.length >= 0)
                    m.fbDeviceId = d.fbDeviceId;
            }
            if (d.pull != null) {
                m.pull = Boolean(d.pull);
            }
            if (d.paddingBytes != null) {
                if (typeof d.paddingBytes === "string")
                    $util.base64.decode(d.paddingBytes, m.paddingBytes = $util.newBuffer($util.base64.length(d.paddingBytes)), 0);
                else if (d.paddingBytes.length >= 0)
                    m.paddingBytes = d.paddingBytes;
            }
            if (d.yearClass != null) {
                m.yearClass = d.yearClass | 0;
            }
            if (d.memClass != null) {
                m.memClass = d.memClass | 0;
            }
            if (d.interopData != null) {
                if (!$util.isObject(d.interopData))
                    throw TypeError(".proto.ClientPayload.interopData: object expected");
                m.interopData = $root.proto.ClientPayload.InteropData.fromObject(d.interopData, n + 1);
            }
            switch (d.trafficAnonymization) {
            default:
                if (typeof d.trafficAnonymization === "number") {
                    m.trafficAnonymization = d.trafficAnonymization;
                    break;
                }
                break;
            case "OFF":
            case 0:
                m.trafficAnonymization = 0;
                break;
            case "STANDARD":
            case 1:
                m.trafficAnonymization = 1;
                break;
            }
            if (d.lidDbMigrated != null) {
                m.lidDbMigrated = Boolean(d.lidDbMigrated);
            }
            switch (d.accountType) {
            default:
                if (typeof d.accountType === "number") {
                    m.accountType = d.accountType;
                    break;
                }
                break;
            case "DEFAULT":
            case 0:
                m.accountType = 0;
                break;
            case "GUEST":
            case 1:
                m.accountType = 1;
                break;
            }
            if (d.connectionSequenceInfo != null) {
                m.connectionSequenceInfo = d.connectionSequenceInfo | 0;
            }
            if (d.paaLink != null) {
                m.paaLink = Boolean(d.paaLink);
            }
            if (d.preacksCount != null) {
                m.preacksCount = d.preacksCount | 0;
            }
            if (d.processingQueueSize != null) {
                m.processingQueueSize = d.processingQueueSize | 0;
            }
            return m;
        };

        ClientPayload.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.shards = [];
            }
            if (m.username != null && Object.hasOwnProperty.call(m, "username")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.username = typeof m.username === "number" ? BigInt(m.username) : $util.Long.fromBits(m.username.low >>> 0, m.username.high >>> 0, true).toBigInt();
                else if (typeof m.username === "number")
                    d.username = o.longs === String ? String(m.username) : m.username;
                else
                    d.username = o.longs === String ? longToString(m.username, true) : o.longs === Number ? longToNumber(m.username, true) : m.username;
                if (o.oneofs)
                    d._username = "username";
            }
            if (m.passive != null && Object.hasOwnProperty.call(m, "passive")) {
                d.passive = m.passive;
                if (o.oneofs)
                    d._passive = "passive";
            }
            if (m.userAgent != null && Object.hasOwnProperty.call(m, "userAgent")) {
                d.userAgent = $root.proto.ClientPayload.UserAgent.toObject(m.userAgent, o, q + 1);
                if (o.oneofs)
                    d._userAgent = "userAgent";
            }
            if (m.webInfo != null && Object.hasOwnProperty.call(m, "webInfo")) {
                d.webInfo = $root.proto.ClientPayload.WebInfo.toObject(m.webInfo, o, q + 1);
                if (o.oneofs)
                    d._webInfo = "webInfo";
            }
            if (m.pushName != null && Object.hasOwnProperty.call(m, "pushName")) {
                d.pushName = m.pushName;
                if (o.oneofs)
                    d._pushName = "pushName";
            }
            if (m.sessionId != null && Object.hasOwnProperty.call(m, "sessionId")) {
                d.sessionId = m.sessionId;
                if (o.oneofs)
                    d._sessionId = "sessionId";
            }
            if (m.shortConnect != null && Object.hasOwnProperty.call(m, "shortConnect")) {
                d.shortConnect = m.shortConnect;
                if (o.oneofs)
                    d._shortConnect = "shortConnect";
            }
            if (m.connectType != null && Object.hasOwnProperty.call(m, "connectType")) {
                d.connectType = o.enums === String ? $root.proto.ClientPayload.ConnectType[m.connectType] === undefined ? m.connectType : $root.proto.ClientPayload.ConnectType[m.connectType] : m.connectType;
                if (o.oneofs)
                    d._connectType = "connectType";
            }
            if (m.connectReason != null && Object.hasOwnProperty.call(m, "connectReason")) {
                d.connectReason = o.enums === String ? $root.proto.ClientPayload.ConnectReason[m.connectReason] === undefined ? m.connectReason : $root.proto.ClientPayload.ConnectReason[m.connectReason] : m.connectReason;
                if (o.oneofs)
                    d._connectReason = "connectReason";
            }
            if (m.shards && m.shards.length) {
                d.shards = [];
                for (var j = 0; j < m.shards.length; ++j) {
                    d.shards[j] = m.shards[j];
                }
            }
            if (m.dnsSource != null && Object.hasOwnProperty.call(m, "dnsSource")) {
                d.dnsSource = $root.proto.ClientPayload.DNSSource.toObject(m.dnsSource, o, q + 1);
                if (o.oneofs)
                    d._dnsSource = "dnsSource";
            }
            if (m.connectAttemptCount != null && Object.hasOwnProperty.call(m, "connectAttemptCount")) {
                d.connectAttemptCount = m.connectAttemptCount;
                if (o.oneofs)
                    d._connectAttemptCount = "connectAttemptCount";
            }
            if (m.device != null && Object.hasOwnProperty.call(m, "device")) {
                d.device = m.device;
                if (o.oneofs)
                    d._device = "device";
            }
            if (m.devicePairingData != null && Object.hasOwnProperty.call(m, "devicePairingData")) {
                d.devicePairingData = $root.proto.ClientPayload.DevicePairingRegistrationData.toObject(m.devicePairingData, o, q + 1);
                if (o.oneofs)
                    d._devicePairingData = "devicePairingData";
            }
            if (m.product != null && Object.hasOwnProperty.call(m, "product")) {
                d.product = o.enums === String ? $root.proto.ClientPayload.Product[m.product] === undefined ? m.product : $root.proto.ClientPayload.Product[m.product] : m.product;
                if (o.oneofs)
                    d._product = "product";
            }
            if (m.fbCat != null && Object.hasOwnProperty.call(m, "fbCat")) {
                d.fbCat = o.bytes === String ? $util.base64.encode(m.fbCat, 0, m.fbCat.length) : o.bytes === Array ? Array.prototype.slice.call(m.fbCat) : m.fbCat;
                if (o.oneofs)
                    d._fbCat = "fbCat";
            }
            if (m.fbUserAgent != null && Object.hasOwnProperty.call(m, "fbUserAgent")) {
                d.fbUserAgent = o.bytes === String ? $util.base64.encode(m.fbUserAgent, 0, m.fbUserAgent.length) : o.bytes === Array ? Array.prototype.slice.call(m.fbUserAgent) : m.fbUserAgent;
                if (o.oneofs)
                    d._fbUserAgent = "fbUserAgent";
            }
            if (m.oc != null && Object.hasOwnProperty.call(m, "oc")) {
                d.oc = m.oc;
                if (o.oneofs)
                    d._oc = "oc";
            }
            if (m.lc != null && Object.hasOwnProperty.call(m, "lc")) {
                d.lc = m.lc;
                if (o.oneofs)
                    d._lc = "lc";
            }
            if (m.iosAppExtension != null && Object.hasOwnProperty.call(m, "iosAppExtension")) {
                d.iosAppExtension = o.enums === String ? $root.proto.ClientPayload.IOSAppExtension[m.iosAppExtension] === undefined ? m.iosAppExtension : $root.proto.ClientPayload.IOSAppExtension[m.iosAppExtension] : m.iosAppExtension;
                if (o.oneofs)
                    d._iosAppExtension = "iosAppExtension";
            }
            if (m.fbAppId != null && Object.hasOwnProperty.call(m, "fbAppId")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.fbAppId = typeof m.fbAppId === "number" ? BigInt(m.fbAppId) : $util.Long.fromBits(m.fbAppId.low >>> 0, m.fbAppId.high >>> 0, true).toBigInt();
                else if (typeof m.fbAppId === "number")
                    d.fbAppId = o.longs === String ? String(m.fbAppId) : m.fbAppId;
                else
                    d.fbAppId = o.longs === String ? longToString(m.fbAppId, true) : o.longs === Number ? longToNumber(m.fbAppId, true) : m.fbAppId;
                if (o.oneofs)
                    d._fbAppId = "fbAppId";
            }
            if (m.fbDeviceId != null && Object.hasOwnProperty.call(m, "fbDeviceId")) {
                d.fbDeviceId = o.bytes === String ? $util.base64.encode(m.fbDeviceId, 0, m.fbDeviceId.length) : o.bytes === Array ? Array.prototype.slice.call(m.fbDeviceId) : m.fbDeviceId;
                if (o.oneofs)
                    d._fbDeviceId = "fbDeviceId";
            }
            if (m.pull != null && Object.hasOwnProperty.call(m, "pull")) {
                d.pull = m.pull;
                if (o.oneofs)
                    d._pull = "pull";
            }
            if (m.paddingBytes != null && Object.hasOwnProperty.call(m, "paddingBytes")) {
                d.paddingBytes = o.bytes === String ? $util.base64.encode(m.paddingBytes, 0, m.paddingBytes.length) : o.bytes === Array ? Array.prototype.slice.call(m.paddingBytes) : m.paddingBytes;
                if (o.oneofs)
                    d._paddingBytes = "paddingBytes";
            }
            if (m.yearClass != null && Object.hasOwnProperty.call(m, "yearClass")) {
                d.yearClass = m.yearClass;
                if (o.oneofs)
                    d._yearClass = "yearClass";
            }
            if (m.memClass != null && Object.hasOwnProperty.call(m, "memClass")) {
                d.memClass = m.memClass;
                if (o.oneofs)
                    d._memClass = "memClass";
            }
            if (m.interopData != null && Object.hasOwnProperty.call(m, "interopData")) {
                d.interopData = $root.proto.ClientPayload.InteropData.toObject(m.interopData, o, q + 1);
                if (o.oneofs)
                    d._interopData = "interopData";
            }
            if (m.trafficAnonymization != null && Object.hasOwnProperty.call(m, "trafficAnonymization")) {
                d.trafficAnonymization = o.enums === String ? $root.proto.ClientPayload.TrafficAnonymization[m.trafficAnonymization] === undefined ? m.trafficAnonymization : $root.proto.ClientPayload.TrafficAnonymization[m.trafficAnonymization] : m.trafficAnonymization;
                if (o.oneofs)
                    d._trafficAnonymization = "trafficAnonymization";
            }
            if (m.lidDbMigrated != null && Object.hasOwnProperty.call(m, "lidDbMigrated")) {
                d.lidDbMigrated = m.lidDbMigrated;
                if (o.oneofs)
                    d._lidDbMigrated = "lidDbMigrated";
            }
            if (m.accountType != null && Object.hasOwnProperty.call(m, "accountType")) {
                d.accountType = o.enums === String ? $root.proto.ClientPayload.AccountType[m.accountType] === undefined ? m.accountType : $root.proto.ClientPayload.AccountType[m.accountType] : m.accountType;
                if (o.oneofs)
                    d._accountType = "accountType";
            }
            if (m.connectionSequenceInfo != null && Object.hasOwnProperty.call(m, "connectionSequenceInfo")) {
                d.connectionSequenceInfo = m.connectionSequenceInfo;
                if (o.oneofs)
                    d._connectionSequenceInfo = "connectionSequenceInfo";
            }
            if (m.paaLink != null && Object.hasOwnProperty.call(m, "paaLink")) {
                d.paaLink = m.paaLink;
                if (o.oneofs)
                    d._paaLink = "paaLink";
            }
            if (m.preacksCount != null && Object.hasOwnProperty.call(m, "preacksCount")) {
                d.preacksCount = m.preacksCount;
                if (o.oneofs)
                    d._preacksCount = "preacksCount";
            }
            if (m.processingQueueSize != null && Object.hasOwnProperty.call(m, "processingQueueSize")) {
                d.processingQueueSize = m.processingQueueSize;
                if (o.oneofs)
                    d._processingQueueSize = "processingQueueSize";
            }
            return d;
        };

        ClientPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ClientPayload";
        };

        ClientPayload.AccountType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT"] = 0;
            values[valuesById[1] = "GUEST"] = 1;
            return values;
        })();

        ClientPayload.ConnectReason = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PUSH"] = 0;
            values[valuesById[1] = "USER_ACTIVATED"] = 1;
            values[valuesById[2] = "SCHEDULED"] = 2;
            values[valuesById[3] = "ERROR_RECONNECT"] = 3;
            values[valuesById[4] = "NETWORK_SWITCH"] = 4;
            values[valuesById[5] = "PING_RECONNECT"] = 5;
            values[valuesById[6] = "UNKNOWN"] = 6;
            return values;
        })();

        ClientPayload.ConnectType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CELLULAR_UNKNOWN"] = 0;
            values[valuesById[1] = "WIFI_UNKNOWN"] = 1;
            values[valuesById[100] = "CELLULAR_EDGE"] = 100;
            values[valuesById[101] = "CELLULAR_IDEN"] = 101;
            values[valuesById[102] = "CELLULAR_UMTS"] = 102;
            values[valuesById[103] = "CELLULAR_EVDO"] = 103;
            values[valuesById[104] = "CELLULAR_GPRS"] = 104;
            values[valuesById[105] = "CELLULAR_HSDPA"] = 105;
            values[valuesById[106] = "CELLULAR_HSUPA"] = 106;
            values[valuesById[107] = "CELLULAR_HSPA"] = 107;
            values[valuesById[108] = "CELLULAR_CDMA"] = 108;
            values[valuesById[109] = "CELLULAR_1XRTT"] = 109;
            values[valuesById[110] = "CELLULAR_EHRPD"] = 110;
            values[valuesById[111] = "CELLULAR_LTE"] = 111;
            values[valuesById[112] = "CELLULAR_HSPAP"] = 112;
            return values;
        })();

        ClientPayload.DNSSource = (function() {

            function DNSSource(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DNSSource.prototype.dnsMethod = null;
            DNSSource.prototype.appCached = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DNSSource.prototype, "_dnsMethod", {
                get: $util.oneOfGetter($oneOfFields = ["dnsMethod"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DNSSource.prototype, "_appCached", {
                get: $util.oneOfGetter($oneOfFields = ["appCached"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            DNSSource.create = function create(properties) {
                return new DNSSource(properties);
            };

            DNSSource.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.dnsMethod != null && Object.hasOwnProperty.call(m, "dnsMethod"))
                    w.uint32(120).int32(m.dnsMethod);
                if (m.appCached != null && Object.hasOwnProperty.call(m, "appCached"))
                    w.uint32(128).bool(m.appCached);
                return w;
            };

            DNSSource.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ClientPayload.DNSSource();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 15: {
                            m.dnsMethod = r.int32();
                            break;
                        }
                    case 16: {
                            m.appCached = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            DNSSource.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ClientPayload.DNSSource)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ClientPayload.DNSSource: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ClientPayload.DNSSource();
                switch (d.dnsMethod) {
                default:
                    if (typeof d.dnsMethod === "number") {
                        m.dnsMethod = d.dnsMethod;
                        break;
                    }
                    break;
                case "SYSTEM":
                case 0:
                    m.dnsMethod = 0;
                    break;
                case "GOOGLE":
                case 1:
                    m.dnsMethod = 1;
                    break;
                case "HARDCODED":
                case 2:
                    m.dnsMethod = 2;
                    break;
                case "OVERRIDE":
                case 3:
                    m.dnsMethod = 3;
                    break;
                case "FALLBACK":
                case 4:
                    m.dnsMethod = 4;
                    break;
                case "MNS":
                case 5:
                    m.dnsMethod = 5;
                    break;
                }
                if (d.appCached != null) {
                    m.appCached = Boolean(d.appCached);
                }
                return m;
            };

            DNSSource.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.dnsMethod != null && Object.hasOwnProperty.call(m, "dnsMethod")) {
                    d.dnsMethod = o.enums === String ? $root.proto.ClientPayload.DNSSource.DNSResolutionMethod[m.dnsMethod] === undefined ? m.dnsMethod : $root.proto.ClientPayload.DNSSource.DNSResolutionMethod[m.dnsMethod] : m.dnsMethod;
                    if (o.oneofs)
                        d._dnsMethod = "dnsMethod";
                }
                if (m.appCached != null && Object.hasOwnProperty.call(m, "appCached")) {
                    d.appCached = m.appCached;
                    if (o.oneofs)
                        d._appCached = "appCached";
                }
                return d;
            };

            DNSSource.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DNSSource.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ClientPayload.DNSSource";
            };

            DNSSource.DNSResolutionMethod = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SYSTEM"] = 0;
                values[valuesById[1] = "GOOGLE"] = 1;
                values[valuesById[2] = "HARDCODED"] = 2;
                values[valuesById[3] = "OVERRIDE"] = 3;
                values[valuesById[4] = "FALLBACK"] = 4;
                values[valuesById[5] = "MNS"] = 5;
                return values;
            })();

            return DNSSource;
        })();

        ClientPayload.DevicePairingRegistrationData = (function() {

            function DevicePairingRegistrationData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DevicePairingRegistrationData.prototype.eRegid = null;
            DevicePairingRegistrationData.prototype.eKeytype = null;
            DevicePairingRegistrationData.prototype.eIdent = null;
            DevicePairingRegistrationData.prototype.eSkeyId = null;
            DevicePairingRegistrationData.prototype.eSkeyVal = null;
            DevicePairingRegistrationData.prototype.eSkeySig = null;
            DevicePairingRegistrationData.prototype.buildHash = null;
            DevicePairingRegistrationData.prototype.deviceProps = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_eRegid", {
                get: $util.oneOfGetter($oneOfFields = ["eRegid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_eKeytype", {
                get: $util.oneOfGetter($oneOfFields = ["eKeytype"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_eIdent", {
                get: $util.oneOfGetter($oneOfFields = ["eIdent"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_eSkeyId", {
                get: $util.oneOfGetter($oneOfFields = ["eSkeyId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_eSkeyVal", {
                get: $util.oneOfGetter($oneOfFields = ["eSkeyVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_eSkeySig", {
                get: $util.oneOfGetter($oneOfFields = ["eSkeySig"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_buildHash", {
                get: $util.oneOfGetter($oneOfFields = ["buildHash"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_deviceProps", {
                get: $util.oneOfGetter($oneOfFields = ["deviceProps"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            DevicePairingRegistrationData.create = function create(properties) {
                return new DevicePairingRegistrationData(properties);
            };

            DevicePairingRegistrationData.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.eRegid != null && Object.hasOwnProperty.call(m, "eRegid"))
                    w.uint32(10).bytes(m.eRegid);
                if (m.eKeytype != null && Object.hasOwnProperty.call(m, "eKeytype"))
                    w.uint32(18).bytes(m.eKeytype);
                if (m.eIdent != null && Object.hasOwnProperty.call(m, "eIdent"))
                    w.uint32(26).bytes(m.eIdent);
                if (m.eSkeyId != null && Object.hasOwnProperty.call(m, "eSkeyId"))
                    w.uint32(34).bytes(m.eSkeyId);
                if (m.eSkeyVal != null && Object.hasOwnProperty.call(m, "eSkeyVal"))
                    w.uint32(42).bytes(m.eSkeyVal);
                if (m.eSkeySig != null && Object.hasOwnProperty.call(m, "eSkeySig"))
                    w.uint32(50).bytes(m.eSkeySig);
                if (m.buildHash != null && Object.hasOwnProperty.call(m, "buildHash"))
                    w.uint32(58).bytes(m.buildHash);
                if (m.deviceProps != null && Object.hasOwnProperty.call(m, "deviceProps"))
                    w.uint32(66).bytes(m.deviceProps);
                return w;
            };

            DevicePairingRegistrationData.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ClientPayload.DevicePairingRegistrationData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.eRegid = r.bytes();
                            break;
                        }
                    case 2: {
                            m.eKeytype = r.bytes();
                            break;
                        }
                    case 3: {
                            m.eIdent = r.bytes();
                            break;
                        }
                    case 4: {
                            m.eSkeyId = r.bytes();
                            break;
                        }
                    case 5: {
                            m.eSkeyVal = r.bytes();
                            break;
                        }
                    case 6: {
                            m.eSkeySig = r.bytes();
                            break;
                        }
                    case 7: {
                            m.buildHash = r.bytes();
                            break;
                        }
                    case 8: {
                            m.deviceProps = r.bytes();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            DevicePairingRegistrationData.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ClientPayload.DevicePairingRegistrationData)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ClientPayload.DevicePairingRegistrationData: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ClientPayload.DevicePairingRegistrationData();
                if (d.eRegid != null) {
                    if (typeof d.eRegid === "string")
                        $util.base64.decode(d.eRegid, m.eRegid = $util.newBuffer($util.base64.length(d.eRegid)), 0);
                    else if (d.eRegid.length >= 0)
                        m.eRegid = d.eRegid;
                }
                if (d.eKeytype != null) {
                    if (typeof d.eKeytype === "string")
                        $util.base64.decode(d.eKeytype, m.eKeytype = $util.newBuffer($util.base64.length(d.eKeytype)), 0);
                    else if (d.eKeytype.length >= 0)
                        m.eKeytype = d.eKeytype;
                }
                if (d.eIdent != null) {
                    if (typeof d.eIdent === "string")
                        $util.base64.decode(d.eIdent, m.eIdent = $util.newBuffer($util.base64.length(d.eIdent)), 0);
                    else if (d.eIdent.length >= 0)
                        m.eIdent = d.eIdent;
                }
                if (d.eSkeyId != null) {
                    if (typeof d.eSkeyId === "string")
                        $util.base64.decode(d.eSkeyId, m.eSkeyId = $util.newBuffer($util.base64.length(d.eSkeyId)), 0);
                    else if (d.eSkeyId.length >= 0)
                        m.eSkeyId = d.eSkeyId;
                }
                if (d.eSkeyVal != null) {
                    if (typeof d.eSkeyVal === "string")
                        $util.base64.decode(d.eSkeyVal, m.eSkeyVal = $util.newBuffer($util.base64.length(d.eSkeyVal)), 0);
                    else if (d.eSkeyVal.length >= 0)
                        m.eSkeyVal = d.eSkeyVal;
                }
                if (d.eSkeySig != null) {
                    if (typeof d.eSkeySig === "string")
                        $util.base64.decode(d.eSkeySig, m.eSkeySig = $util.newBuffer($util.base64.length(d.eSkeySig)), 0);
                    else if (d.eSkeySig.length >= 0)
                        m.eSkeySig = d.eSkeySig;
                }
                if (d.buildHash != null) {
                    if (typeof d.buildHash === "string")
                        $util.base64.decode(d.buildHash, m.buildHash = $util.newBuffer($util.base64.length(d.buildHash)), 0);
                    else if (d.buildHash.length >= 0)
                        m.buildHash = d.buildHash;
                }
                if (d.deviceProps != null) {
                    if (typeof d.deviceProps === "string")
                        $util.base64.decode(d.deviceProps, m.deviceProps = $util.newBuffer($util.base64.length(d.deviceProps)), 0);
                    else if (d.deviceProps.length >= 0)
                        m.deviceProps = d.deviceProps;
                }
                return m;
            };

            DevicePairingRegistrationData.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.eRegid != null && Object.hasOwnProperty.call(m, "eRegid")) {
                    d.eRegid = o.bytes === String ? $util.base64.encode(m.eRegid, 0, m.eRegid.length) : o.bytes === Array ? Array.prototype.slice.call(m.eRegid) : m.eRegid;
                    if (o.oneofs)
                        d._eRegid = "eRegid";
                }
                if (m.eKeytype != null && Object.hasOwnProperty.call(m, "eKeytype")) {
                    d.eKeytype = o.bytes === String ? $util.base64.encode(m.eKeytype, 0, m.eKeytype.length) : o.bytes === Array ? Array.prototype.slice.call(m.eKeytype) : m.eKeytype;
                    if (o.oneofs)
                        d._eKeytype = "eKeytype";
                }
                if (m.eIdent != null && Object.hasOwnProperty.call(m, "eIdent")) {
                    d.eIdent = o.bytes === String ? $util.base64.encode(m.eIdent, 0, m.eIdent.length) : o.bytes === Array ? Array.prototype.slice.call(m.eIdent) : m.eIdent;
                    if (o.oneofs)
                        d._eIdent = "eIdent";
                }
                if (m.eSkeyId != null && Object.hasOwnProperty.call(m, "eSkeyId")) {
                    d.eSkeyId = o.bytes === String ? $util.base64.encode(m.eSkeyId, 0, m.eSkeyId.length) : o.bytes === Array ? Array.prototype.slice.call(m.eSkeyId) : m.eSkeyId;
                    if (o.oneofs)
                        d._eSkeyId = "eSkeyId";
                }
                if (m.eSkeyVal != null && Object.hasOwnProperty.call(m, "eSkeyVal")) {
                    d.eSkeyVal = o.bytes === String ? $util.base64.encode(m.eSkeyVal, 0, m.eSkeyVal.length) : o.bytes === Array ? Array.prototype.slice.call(m.eSkeyVal) : m.eSkeyVal;
                    if (o.oneofs)
                        d._eSkeyVal = "eSkeyVal";
                }
                if (m.eSkeySig != null && Object.hasOwnProperty.call(m, "eSkeySig")) {
                    d.eSkeySig = o.bytes === String ? $util.base64.encode(m.eSkeySig, 0, m.eSkeySig.length) : o.bytes === Array ? Array.prototype.slice.call(m.eSkeySig) : m.eSkeySig;
                    if (o.oneofs)
                        d._eSkeySig = "eSkeySig";
                }
                if (m.buildHash != null && Object.hasOwnProperty.call(m, "buildHash")) {
                    d.buildHash = o.bytes === String ? $util.base64.encode(m.buildHash, 0, m.buildHash.length) : o.bytes === Array ? Array.prototype.slice.call(m.buildHash) : m.buildHash;
                    if (o.oneofs)
                        d._buildHash = "buildHash";
                }
                if (m.deviceProps != null && Object.hasOwnProperty.call(m, "deviceProps")) {
                    d.deviceProps = o.bytes === String ? $util.base64.encode(m.deviceProps, 0, m.deviceProps.length) : o.bytes === Array ? Array.prototype.slice.call(m.deviceProps) : m.deviceProps;
                    if (o.oneofs)
                        d._deviceProps = "deviceProps";
                }
                return d;
            };

            DevicePairingRegistrationData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DevicePairingRegistrationData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ClientPayload.DevicePairingRegistrationData";
            };

            return DevicePairingRegistrationData;
        })();

        ClientPayload.IOSAppExtension = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SHARE_EXTENSION"] = 0;
            values[valuesById[1] = "SERVICE_EXTENSION"] = 1;
            values[valuesById[2] = "INTENTS_EXTENSION"] = 2;
            return values;
        })();

        ClientPayload.InteropData = (function() {

            function InteropData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InteropData.prototype.accountId = null;
            InteropData.prototype.token = null;
            InteropData.prototype.enableReadReceipts = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteropData.prototype, "_accountId", {
                get: $util.oneOfGetter($oneOfFields = ["accountId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteropData.prototype, "_token", {
                get: $util.oneOfGetter($oneOfFields = ["token"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteropData.prototype, "_enableReadReceipts", {
                get: $util.oneOfGetter($oneOfFields = ["enableReadReceipts"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            InteropData.create = function create(properties) {
                return new InteropData(properties);
            };

            InteropData.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.accountId != null && Object.hasOwnProperty.call(m, "accountId"))
                    w.uint32(8).uint64(m.accountId);
                if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                    w.uint32(18).bytes(m.token);
                if (m.enableReadReceipts != null && Object.hasOwnProperty.call(m, "enableReadReceipts"))
                    w.uint32(24).bool(m.enableReadReceipts);
                return w;
            };

            InteropData.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ClientPayload.InteropData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.accountId = r.uint64();
                            break;
                        }
                    case 2: {
                            m.token = r.bytes();
                            break;
                        }
                    case 3: {
                            m.enableReadReceipts = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            InteropData.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ClientPayload.InteropData)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ClientPayload.InteropData: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ClientPayload.InteropData();
                if (d.accountId != null) {
                    if ($util.Long)
                        m.accountId = $util.Long.fromValue(d.accountId, true);
                    else if (typeof d.accountId === "string")
                        m.accountId = parseInt(d.accountId, 10);
                    else if (typeof d.accountId === "number")
                        m.accountId = d.accountId;
                    else if (typeof d.accountId === "object")
                        m.accountId = new $util.LongBits(d.accountId.low >>> 0, d.accountId.high >>> 0).toNumber(true);
                }
                if (d.token != null) {
                    if (typeof d.token === "string")
                        $util.base64.decode(d.token, m.token = $util.newBuffer($util.base64.length(d.token)), 0);
                    else if (d.token.length >= 0)
                        m.token = d.token;
                }
                if (d.enableReadReceipts != null) {
                    m.enableReadReceipts = Boolean(d.enableReadReceipts);
                }
                return m;
            };

            InteropData.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.accountId != null && Object.hasOwnProperty.call(m, "accountId")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.accountId = typeof m.accountId === "number" ? BigInt(m.accountId) : $util.Long.fromBits(m.accountId.low >>> 0, m.accountId.high >>> 0, true).toBigInt();
                    else if (typeof m.accountId === "number")
                        d.accountId = o.longs === String ? String(m.accountId) : m.accountId;
                    else
                        d.accountId = o.longs === String ? longToString(m.accountId, true) : o.longs === Number ? longToNumber(m.accountId, true) : m.accountId;
                    if (o.oneofs)
                        d._accountId = "accountId";
                }
                if (m.token != null && Object.hasOwnProperty.call(m, "token")) {
                    d.token = o.bytes === String ? $util.base64.encode(m.token, 0, m.token.length) : o.bytes === Array ? Array.prototype.slice.call(m.token) : m.token;
                    if (o.oneofs)
                        d._token = "token";
                }
                if (m.enableReadReceipts != null && Object.hasOwnProperty.call(m, "enableReadReceipts")) {
                    d.enableReadReceipts = m.enableReadReceipts;
                    if (o.oneofs)
                        d._enableReadReceipts = "enableReadReceipts";
                }
                return d;
            };

            InteropData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InteropData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ClientPayload.InteropData";
            };

            return InteropData;
        })();

        ClientPayload.Product = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WHATSAPP"] = 0;
            values[valuesById[1] = "MESSENGER"] = 1;
            values[valuesById[2] = "INTEROP"] = 2;
            values[valuesById[3] = "INTEROP_MSGR"] = 3;
            values[valuesById[4] = "WHATSAPP_LID"] = 4;
            return values;
        })();

        ClientPayload.TrafficAnonymization = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OFF"] = 0;
            values[valuesById[1] = "STANDARD"] = 1;
            return values;
        })();

        ClientPayload.UserAgent = (function() {

            function UserAgent(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            UserAgent.prototype.platform = null;
            UserAgent.prototype.appVersion = null;
            UserAgent.prototype.mcc = null;
            UserAgent.prototype.mnc = null;
            UserAgent.prototype.osVersion = null;
            UserAgent.prototype.manufacturer = null;
            UserAgent.prototype.device = null;
            UserAgent.prototype.osBuildNumber = null;
            UserAgent.prototype.phoneId = null;
            UserAgent.prototype.releaseChannel = null;
            UserAgent.prototype.localeLanguageIso6391 = null;
            UserAgent.prototype.localeCountryIso31661Alpha2 = null;
            UserAgent.prototype.deviceBoard = null;
            UserAgent.prototype.deviceExpId = null;
            UserAgent.prototype.deviceType = null;
            UserAgent.prototype.deviceModelType = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_platform", {
                get: $util.oneOfGetter($oneOfFields = ["platform"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_appVersion", {
                get: $util.oneOfGetter($oneOfFields = ["appVersion"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_mcc", {
                get: $util.oneOfGetter($oneOfFields = ["mcc"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_mnc", {
                get: $util.oneOfGetter($oneOfFields = ["mnc"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_osVersion", {
                get: $util.oneOfGetter($oneOfFields = ["osVersion"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_manufacturer", {
                get: $util.oneOfGetter($oneOfFields = ["manufacturer"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_device", {
                get: $util.oneOfGetter($oneOfFields = ["device"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_osBuildNumber", {
                get: $util.oneOfGetter($oneOfFields = ["osBuildNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_phoneId", {
                get: $util.oneOfGetter($oneOfFields = ["phoneId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_releaseChannel", {
                get: $util.oneOfGetter($oneOfFields = ["releaseChannel"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_localeLanguageIso6391", {
                get: $util.oneOfGetter($oneOfFields = ["localeLanguageIso6391"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_localeCountryIso31661Alpha2", {
                get: $util.oneOfGetter($oneOfFields = ["localeCountryIso31661Alpha2"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_deviceBoard", {
                get: $util.oneOfGetter($oneOfFields = ["deviceBoard"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_deviceExpId", {
                get: $util.oneOfGetter($oneOfFields = ["deviceExpId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_deviceType", {
                get: $util.oneOfGetter($oneOfFields = ["deviceType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_deviceModelType", {
                get: $util.oneOfGetter($oneOfFields = ["deviceModelType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            UserAgent.create = function create(properties) {
                return new UserAgent(properties);
            };

            UserAgent.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.platform != null && Object.hasOwnProperty.call(m, "platform"))
                    w.uint32(8).int32(m.platform);
                if (m.appVersion != null && Object.hasOwnProperty.call(m, "appVersion"))
                    $root.proto.ClientPayload.UserAgent.AppVersion.encode(m.appVersion, w.uint32(18).fork(), q + 1).ldelim();
                if (m.mcc != null && Object.hasOwnProperty.call(m, "mcc"))
                    w.uint32(26).string(m.mcc);
                if (m.mnc != null && Object.hasOwnProperty.call(m, "mnc"))
                    w.uint32(34).string(m.mnc);
                if (m.osVersion != null && Object.hasOwnProperty.call(m, "osVersion"))
                    w.uint32(42).string(m.osVersion);
                if (m.manufacturer != null && Object.hasOwnProperty.call(m, "manufacturer"))
                    w.uint32(50).string(m.manufacturer);
                if (m.device != null && Object.hasOwnProperty.call(m, "device"))
                    w.uint32(58).string(m.device);
                if (m.osBuildNumber != null && Object.hasOwnProperty.call(m, "osBuildNumber"))
                    w.uint32(66).string(m.osBuildNumber);
                if (m.phoneId != null && Object.hasOwnProperty.call(m, "phoneId"))
                    w.uint32(74).string(m.phoneId);
                if (m.releaseChannel != null && Object.hasOwnProperty.call(m, "releaseChannel"))
                    w.uint32(80).int32(m.releaseChannel);
                if (m.localeLanguageIso6391 != null && Object.hasOwnProperty.call(m, "localeLanguageIso6391"))
                    w.uint32(90).string(m.localeLanguageIso6391);
                if (m.localeCountryIso31661Alpha2 != null && Object.hasOwnProperty.call(m, "localeCountryIso31661Alpha2"))
                    w.uint32(98).string(m.localeCountryIso31661Alpha2);
                if (m.deviceBoard != null && Object.hasOwnProperty.call(m, "deviceBoard"))
                    w.uint32(106).string(m.deviceBoard);
                if (m.deviceExpId != null && Object.hasOwnProperty.call(m, "deviceExpId"))
                    w.uint32(114).string(m.deviceExpId);
                if (m.deviceType != null && Object.hasOwnProperty.call(m, "deviceType"))
                    w.uint32(120).int32(m.deviceType);
                if (m.deviceModelType != null && Object.hasOwnProperty.call(m, "deviceModelType"))
                    w.uint32(130).string(m.deviceModelType);
                return w;
            };

            UserAgent.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ClientPayload.UserAgent();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.platform = r.int32();
                            break;
                        }
                    case 2: {
                            m.appVersion = $root.proto.ClientPayload.UserAgent.AppVersion.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 3: {
                            m.mcc = r.string();
                            break;
                        }
                    case 4: {
                            m.mnc = r.string();
                            break;
                        }
                    case 5: {
                            m.osVersion = r.string();
                            break;
                        }
                    case 6: {
                            m.manufacturer = r.string();
                            break;
                        }
                    case 7: {
                            m.device = r.string();
                            break;
                        }
                    case 8: {
                            m.osBuildNumber = r.string();
                            break;
                        }
                    case 9: {
                            m.phoneId = r.string();
                            break;
                        }
                    case 10: {
                            m.releaseChannel = r.int32();
                            break;
                        }
                    case 11: {
                            m.localeLanguageIso6391 = r.string();
                            break;
                        }
                    case 12: {
                            m.localeCountryIso31661Alpha2 = r.string();
                            break;
                        }
                    case 13: {
                            m.deviceBoard = r.string();
                            break;
                        }
                    case 14: {
                            m.deviceExpId = r.string();
                            break;
                        }
                    case 15: {
                            m.deviceType = r.int32();
                            break;
                        }
                    case 16: {
                            m.deviceModelType = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            UserAgent.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ClientPayload.UserAgent)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ClientPayload.UserAgent: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ClientPayload.UserAgent();
                switch (d.platform) {
                default:
                    if (typeof d.platform === "number") {
                        m.platform = d.platform;
                        break;
                    }
                    break;
                case "ANDROID":
                case 0:
                    m.platform = 0;
                    break;
                case "IOS":
                case 1:
                    m.platform = 1;
                    break;
                case "WINDOWS_PHONE":
                case 2:
                    m.platform = 2;
                    break;
                case "BLACKBERRY":
                case 3:
                    m.platform = 3;
                    break;
                case "BLACKBERRYX":
                case 4:
                    m.platform = 4;
                    break;
                case "S40":
                case 5:
                    m.platform = 5;
                    break;
                case "S60":
                case 6:
                    m.platform = 6;
                    break;
                case "PYTHON_CLIENT":
                case 7:
                    m.platform = 7;
                    break;
                case "TIZEN":
                case 8:
                    m.platform = 8;
                    break;
                case "ENTERPRISE":
                case 9:
                    m.platform = 9;
                    break;
                case "SMB_ANDROID":
                case 10:
                    m.platform = 10;
                    break;
                case "KAIOS":
                case 11:
                    m.platform = 11;
                    break;
                case "SMB_IOS":
                case 12:
                    m.platform = 12;
                    break;
                case "WINDOWS":
                case 13:
                    m.platform = 13;
                    break;
                case "WEB":
                case 14:
                    m.platform = 14;
                    break;
                case "PORTAL":
                case 15:
                    m.platform = 15;
                    break;
                case "GREEN_ANDROID":
                case 16:
                    m.platform = 16;
                    break;
                case "GREEN_IPHONE":
                case 17:
                    m.platform = 17;
                    break;
                case "BLUE_ANDROID":
                case 18:
                    m.platform = 18;
                    break;
                case "BLUE_IPHONE":
                case 19:
                    m.platform = 19;
                    break;
                case "FBLITE_ANDROID":
                case 20:
                    m.platform = 20;
                    break;
                case "MLITE_ANDROID":
                case 21:
                    m.platform = 21;
                    break;
                case "IGLITE_ANDROID":
                case 22:
                    m.platform = 22;
                    break;
                case "PAGE":
                case 23:
                    m.platform = 23;
                    break;
                case "MACOS":
                case 24:
                    m.platform = 24;
                    break;
                case "OCULUS_MSG":
                case 25:
                    m.platform = 25;
                    break;
                case "OCULUS_CALL":
                case 26:
                    m.platform = 26;
                    break;
                case "MILAN":
                case 27:
                    m.platform = 27;
                    break;
                case "CAPI":
                case 28:
                    m.platform = 28;
                    break;
                case "WEAROS":
                case 29:
                    m.platform = 29;
                    break;
                case "ARDEVICE":
                case 30:
                    m.platform = 30;
                    break;
                case "VRDEVICE":
                case 31:
                    m.platform = 31;
                    break;
                case "BLUE_WEB":
                case 32:
                    m.platform = 32;
                    break;
                case "IPAD":
                case 33:
                    m.platform = 33;
                    break;
                case "TEST":
                case 34:
                    m.platform = 34;
                    break;
                case "SMART_GLASSES":
                case 35:
                    m.platform = 35;
                    break;
                case "BLUE_VR":
                case 36:
                    m.platform = 36;
                    break;
                case "AR_WRIST":
                case 37:
                    m.platform = 37;
                    break;
                }
                if (d.appVersion != null) {
                    if (!$util.isObject(d.appVersion))
                        throw TypeError(".proto.ClientPayload.UserAgent.appVersion: object expected");
                    m.appVersion = $root.proto.ClientPayload.UserAgent.AppVersion.fromObject(d.appVersion, n + 1);
                }
                if (d.mcc != null) {
                    m.mcc = String(d.mcc);
                }
                if (d.mnc != null) {
                    m.mnc = String(d.mnc);
                }
                if (d.osVersion != null) {
                    m.osVersion = String(d.osVersion);
                }
                if (d.manufacturer != null) {
                    m.manufacturer = String(d.manufacturer);
                }
                if (d.device != null) {
                    m.device = String(d.device);
                }
                if (d.osBuildNumber != null) {
                    m.osBuildNumber = String(d.osBuildNumber);
                }
                if (d.phoneId != null) {
                    m.phoneId = String(d.phoneId);
                }
                switch (d.releaseChannel) {
                default:
                    if (typeof d.releaseChannel === "number") {
                        m.releaseChannel = d.releaseChannel;
                        break;
                    }
                    break;
                case "RELEASE":
                case 0:
                    m.releaseChannel = 0;
                    break;
                case "BETA":
                case 1:
                    m.releaseChannel = 1;
                    break;
                case "ALPHA":
                case 2:
                    m.releaseChannel = 2;
                    break;
                case "DEBUG":
                case 3:
                    m.releaseChannel = 3;
                    break;
                }
                if (d.localeLanguageIso6391 != null) {
                    m.localeLanguageIso6391 = String(d.localeLanguageIso6391);
                }
                if (d.localeCountryIso31661Alpha2 != null) {
                    m.localeCountryIso31661Alpha2 = String(d.localeCountryIso31661Alpha2);
                }
                if (d.deviceBoard != null) {
                    m.deviceBoard = String(d.deviceBoard);
                }
                if (d.deviceExpId != null) {
                    m.deviceExpId = String(d.deviceExpId);
                }
                switch (d.deviceType) {
                default:
                    if (typeof d.deviceType === "number") {
                        m.deviceType = d.deviceType;
                        break;
                    }
                    break;
                case "PHONE":
                case 0:
                    m.deviceType = 0;
                    break;
                case "TABLET":
                case 1:
                    m.deviceType = 1;
                    break;
                case "DESKTOP":
                case 2:
                    m.deviceType = 2;
                    break;
                case "WEARABLE":
                case 3:
                    m.deviceType = 3;
                    break;
                case "VR":
                case 4:
                    m.deviceType = 4;
                    break;
                }
                if (d.deviceModelType != null) {
                    m.deviceModelType = String(d.deviceModelType);
                }
                return m;
            };

            UserAgent.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.platform != null && Object.hasOwnProperty.call(m, "platform")) {
                    d.platform = o.enums === String ? $root.proto.ClientPayload.UserAgent.Platform[m.platform] === undefined ? m.platform : $root.proto.ClientPayload.UserAgent.Platform[m.platform] : m.platform;
                    if (o.oneofs)
                        d._platform = "platform";
                }
                if (m.appVersion != null && Object.hasOwnProperty.call(m, "appVersion")) {
                    d.appVersion = $root.proto.ClientPayload.UserAgent.AppVersion.toObject(m.appVersion, o, q + 1);
                    if (o.oneofs)
                        d._appVersion = "appVersion";
                }
                if (m.mcc != null && Object.hasOwnProperty.call(m, "mcc")) {
                    d.mcc = m.mcc;
                    if (o.oneofs)
                        d._mcc = "mcc";
                }
                if (m.mnc != null && Object.hasOwnProperty.call(m, "mnc")) {
                    d.mnc = m.mnc;
                    if (o.oneofs)
                        d._mnc = "mnc";
                }
                if (m.osVersion != null && Object.hasOwnProperty.call(m, "osVersion")) {
                    d.osVersion = m.osVersion;
                    if (o.oneofs)
                        d._osVersion = "osVersion";
                }
                if (m.manufacturer != null && Object.hasOwnProperty.call(m, "manufacturer")) {
                    d.manufacturer = m.manufacturer;
                    if (o.oneofs)
                        d._manufacturer = "manufacturer";
                }
                if (m.device != null && Object.hasOwnProperty.call(m, "device")) {
                    d.device = m.device;
                    if (o.oneofs)
                        d._device = "device";
                }
                if (m.osBuildNumber != null && Object.hasOwnProperty.call(m, "osBuildNumber")) {
                    d.osBuildNumber = m.osBuildNumber;
                    if (o.oneofs)
                        d._osBuildNumber = "osBuildNumber";
                }
                if (m.phoneId != null && Object.hasOwnProperty.call(m, "phoneId")) {
                    d.phoneId = m.phoneId;
                    if (o.oneofs)
                        d._phoneId = "phoneId";
                }
                if (m.releaseChannel != null && Object.hasOwnProperty.call(m, "releaseChannel")) {
                    d.releaseChannel = o.enums === String ? $root.proto.ClientPayload.UserAgent.ReleaseChannel[m.releaseChannel] === undefined ? m.releaseChannel : $root.proto.ClientPayload.UserAgent.ReleaseChannel[m.releaseChannel] : m.releaseChannel;
                    if (o.oneofs)
                        d._releaseChannel = "releaseChannel";
                }
                if (m.localeLanguageIso6391 != null && Object.hasOwnProperty.call(m, "localeLanguageIso6391")) {
                    d.localeLanguageIso6391 = m.localeLanguageIso6391;
                    if (o.oneofs)
                        d._localeLanguageIso6391 = "localeLanguageIso6391";
                }
                if (m.localeCountryIso31661Alpha2 != null && Object.hasOwnProperty.call(m, "localeCountryIso31661Alpha2")) {
                    d.localeCountryIso31661Alpha2 = m.localeCountryIso31661Alpha2;
                    if (o.oneofs)
                        d._localeCountryIso31661Alpha2 = "localeCountryIso31661Alpha2";
                }
                if (m.deviceBoard != null && Object.hasOwnProperty.call(m, "deviceBoard")) {
                    d.deviceBoard = m.deviceBoard;
                    if (o.oneofs)
                        d._deviceBoard = "deviceBoard";
                }
                if (m.deviceExpId != null && Object.hasOwnProperty.call(m, "deviceExpId")) {
                    d.deviceExpId = m.deviceExpId;
                    if (o.oneofs)
                        d._deviceExpId = "deviceExpId";
                }
                if (m.deviceType != null && Object.hasOwnProperty.call(m, "deviceType")) {
                    d.deviceType = o.enums === String ? $root.proto.ClientPayload.UserAgent.DeviceType[m.deviceType] === undefined ? m.deviceType : $root.proto.ClientPayload.UserAgent.DeviceType[m.deviceType] : m.deviceType;
                    if (o.oneofs)
                        d._deviceType = "deviceType";
                }
                if (m.deviceModelType != null && Object.hasOwnProperty.call(m, "deviceModelType")) {
                    d.deviceModelType = m.deviceModelType;
                    if (o.oneofs)
                        d._deviceModelType = "deviceModelType";
                }
                return d;
            };

            UserAgent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UserAgent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ClientPayload.UserAgent";
            };

            UserAgent.AppVersion = (function() {

                function AppVersion(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                AppVersion.prototype.primary = null;
                AppVersion.prototype.secondary = null;
                AppVersion.prototype.tertiary = null;
                AppVersion.prototype.quaternary = null;
                AppVersion.prototype.quinary = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(AppVersion.prototype, "_primary", {
                    get: $util.oneOfGetter($oneOfFields = ["primary"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(AppVersion.prototype, "_secondary", {
                    get: $util.oneOfGetter($oneOfFields = ["secondary"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(AppVersion.prototype, "_tertiary", {
                    get: $util.oneOfGetter($oneOfFields = ["tertiary"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(AppVersion.prototype, "_quaternary", {
                    get: $util.oneOfGetter($oneOfFields = ["quaternary"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(AppVersion.prototype, "_quinary", {
                    get: $util.oneOfGetter($oneOfFields = ["quinary"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                AppVersion.create = function create(properties) {
                    return new AppVersion(properties);
                };

                AppVersion.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.primary != null && Object.hasOwnProperty.call(m, "primary"))
                        w.uint32(8).uint32(m.primary);
                    if (m.secondary != null && Object.hasOwnProperty.call(m, "secondary"))
                        w.uint32(16).uint32(m.secondary);
                    if (m.tertiary != null && Object.hasOwnProperty.call(m, "tertiary"))
                        w.uint32(24).uint32(m.tertiary);
                    if (m.quaternary != null && Object.hasOwnProperty.call(m, "quaternary"))
                        w.uint32(32).uint32(m.quaternary);
                    if (m.quinary != null && Object.hasOwnProperty.call(m, "quinary"))
                        w.uint32(40).uint32(m.quinary);
                    return w;
                };

                AppVersion.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ClientPayload.UserAgent.AppVersion();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.primary = r.uint32();
                                break;
                            }
                        case 2: {
                                m.secondary = r.uint32();
                                break;
                            }
                        case 3: {
                                m.tertiary = r.uint32();
                                break;
                            }
                        case 4: {
                                m.quaternary = r.uint32();
                                break;
                            }
                        case 5: {
                                m.quinary = r.uint32();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                AppVersion.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.ClientPayload.UserAgent.AppVersion)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.ClientPayload.UserAgent.AppVersion: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.ClientPayload.UserAgent.AppVersion();
                    if (d.primary != null) {
                        m.primary = d.primary >>> 0;
                    }
                    if (d.secondary != null) {
                        m.secondary = d.secondary >>> 0;
                    }
                    if (d.tertiary != null) {
                        m.tertiary = d.tertiary >>> 0;
                    }
                    if (d.quaternary != null) {
                        m.quaternary = d.quaternary >>> 0;
                    }
                    if (d.quinary != null) {
                        m.quinary = d.quinary >>> 0;
                    }
                    return m;
                };

                AppVersion.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.primary != null && Object.hasOwnProperty.call(m, "primary")) {
                        d.primary = m.primary;
                        if (o.oneofs)
                            d._primary = "primary";
                    }
                    if (m.secondary != null && Object.hasOwnProperty.call(m, "secondary")) {
                        d.secondary = m.secondary;
                        if (o.oneofs)
                            d._secondary = "secondary";
                    }
                    if (m.tertiary != null && Object.hasOwnProperty.call(m, "tertiary")) {
                        d.tertiary = m.tertiary;
                        if (o.oneofs)
                            d._tertiary = "tertiary";
                    }
                    if (m.quaternary != null && Object.hasOwnProperty.call(m, "quaternary")) {
                        d.quaternary = m.quaternary;
                        if (o.oneofs)
                            d._quaternary = "quaternary";
                    }
                    if (m.quinary != null && Object.hasOwnProperty.call(m, "quinary")) {
                        d.quinary = m.quinary;
                        if (o.oneofs)
                            d._quinary = "quinary";
                    }
                    return d;
                };

                AppVersion.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                AppVersion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.ClientPayload.UserAgent.AppVersion";
                };

                return AppVersion;
            })();

            UserAgent.DeviceType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PHONE"] = 0;
                values[valuesById[1] = "TABLET"] = 1;
                values[valuesById[2] = "DESKTOP"] = 2;
                values[valuesById[3] = "WEARABLE"] = 3;
                values[valuesById[4] = "VR"] = 4;
                return values;
            })();

            UserAgent.Platform = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ANDROID"] = 0;
                values[valuesById[1] = "IOS"] = 1;
                values[valuesById[2] = "WINDOWS_PHONE"] = 2;
                values[valuesById[3] = "BLACKBERRY"] = 3;
                values[valuesById[4] = "BLACKBERRYX"] = 4;
                values[valuesById[5] = "S40"] = 5;
                values[valuesById[6] = "S60"] = 6;
                values[valuesById[7] = "PYTHON_CLIENT"] = 7;
                values[valuesById[8] = "TIZEN"] = 8;
                values[valuesById[9] = "ENTERPRISE"] = 9;
                values[valuesById[10] = "SMB_ANDROID"] = 10;
                values[valuesById[11] = "KAIOS"] = 11;
                values[valuesById[12] = "SMB_IOS"] = 12;
                values[valuesById[13] = "WINDOWS"] = 13;
                values[valuesById[14] = "WEB"] = 14;
                values[valuesById[15] = "PORTAL"] = 15;
                values[valuesById[16] = "GREEN_ANDROID"] = 16;
                values[valuesById[17] = "GREEN_IPHONE"] = 17;
                values[valuesById[18] = "BLUE_ANDROID"] = 18;
                values[valuesById[19] = "BLUE_IPHONE"] = 19;
                values[valuesById[20] = "FBLITE_ANDROID"] = 20;
                values[valuesById[21] = "MLITE_ANDROID"] = 21;
                values[valuesById[22] = "IGLITE_ANDROID"] = 22;
                values[valuesById[23] = "PAGE"] = 23;
                values[valuesById[24] = "MACOS"] = 24;
                values[valuesById[25] = "OCULUS_MSG"] = 25;
                values[valuesById[26] = "OCULUS_CALL"] = 26;
                values[valuesById[27] = "MILAN"] = 27;
                values[valuesById[28] = "CAPI"] = 28;
                values[valuesById[29] = "WEAROS"] = 29;
                values[valuesById[30] = "ARDEVICE"] = 30;
                values[valuesById[31] = "VRDEVICE"] = 31;
                values[valuesById[32] = "BLUE_WEB"] = 32;
                values[valuesById[33] = "IPAD"] = 33;
                values[valuesById[34] = "TEST"] = 34;
                values[valuesById[35] = "SMART_GLASSES"] = 35;
                values[valuesById[36] = "BLUE_VR"] = 36;
                values[valuesById[37] = "AR_WRIST"] = 37;
                return values;
            })();

            UserAgent.ReleaseChannel = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "RELEASE"] = 0;
                values[valuesById[1] = "BETA"] = 1;
                values[valuesById[2] = "ALPHA"] = 2;
                values[valuesById[3] = "DEBUG"] = 3;
                return values;
            })();

            return UserAgent;
        })();

        ClientPayload.WebInfo = (function() {

            function WebInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            WebInfo.prototype.refToken = null;
            WebInfo.prototype.version = null;
            WebInfo.prototype.webdPayload = null;
            WebInfo.prototype.webSubPlatform = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(WebInfo.prototype, "_refToken", {
                get: $util.oneOfGetter($oneOfFields = ["refToken"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(WebInfo.prototype, "_version", {
                get: $util.oneOfGetter($oneOfFields = ["version"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(WebInfo.prototype, "_webdPayload", {
                get: $util.oneOfGetter($oneOfFields = ["webdPayload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(WebInfo.prototype, "_webSubPlatform", {
                get: $util.oneOfGetter($oneOfFields = ["webSubPlatform"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            WebInfo.create = function create(properties) {
                return new WebInfo(properties);
            };

            WebInfo.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.refToken != null && Object.hasOwnProperty.call(m, "refToken"))
                    w.uint32(10).string(m.refToken);
                if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                    w.uint32(18).string(m.version);
                if (m.webdPayload != null && Object.hasOwnProperty.call(m, "webdPayload"))
                    $root.proto.ClientPayload.WebInfo.WebdPayload.encode(m.webdPayload, w.uint32(26).fork(), q + 1).ldelim();
                if (m.webSubPlatform != null && Object.hasOwnProperty.call(m, "webSubPlatform"))
                    w.uint32(32).int32(m.webSubPlatform);
                return w;
            };

            WebInfo.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ClientPayload.WebInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.refToken = r.string();
                            break;
                        }
                    case 2: {
                            m.version = r.string();
                            break;
                        }
                    case 3: {
                            m.webdPayload = $root.proto.ClientPayload.WebInfo.WebdPayload.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 4: {
                            m.webSubPlatform = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            WebInfo.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ClientPayload.WebInfo)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ClientPayload.WebInfo: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ClientPayload.WebInfo();
                if (d.refToken != null) {
                    m.refToken = String(d.refToken);
                }
                if (d.version != null) {
                    m.version = String(d.version);
                }
                if (d.webdPayload != null) {
                    if (!$util.isObject(d.webdPayload))
                        throw TypeError(".proto.ClientPayload.WebInfo.webdPayload: object expected");
                    m.webdPayload = $root.proto.ClientPayload.WebInfo.WebdPayload.fromObject(d.webdPayload, n + 1);
                }
                switch (d.webSubPlatform) {
                default:
                    if (typeof d.webSubPlatform === "number") {
                        m.webSubPlatform = d.webSubPlatform;
                        break;
                    }
                    break;
                case "WEB_BROWSER":
                case 0:
                    m.webSubPlatform = 0;
                    break;
                case "APP_STORE":
                case 1:
                    m.webSubPlatform = 1;
                    break;
                case "WIN_STORE":
                case 2:
                    m.webSubPlatform = 2;
                    break;
                case "DARWIN":
                case 3:
                    m.webSubPlatform = 3;
                    break;
                case "WIN32":
                case 4:
                    m.webSubPlatform = 4;
                    break;
                case "WIN_HYBRID":
                case 5:
                    m.webSubPlatform = 5;
                    break;
                }
                return m;
            };

            WebInfo.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.refToken != null && Object.hasOwnProperty.call(m, "refToken")) {
                    d.refToken = m.refToken;
                    if (o.oneofs)
                        d._refToken = "refToken";
                }
                if (m.version != null && Object.hasOwnProperty.call(m, "version")) {
                    d.version = m.version;
                    if (o.oneofs)
                        d._version = "version";
                }
                if (m.webdPayload != null && Object.hasOwnProperty.call(m, "webdPayload")) {
                    d.webdPayload = $root.proto.ClientPayload.WebInfo.WebdPayload.toObject(m.webdPayload, o, q + 1);
                    if (o.oneofs)
                        d._webdPayload = "webdPayload";
                }
                if (m.webSubPlatform != null && Object.hasOwnProperty.call(m, "webSubPlatform")) {
                    d.webSubPlatform = o.enums === String ? $root.proto.ClientPayload.WebInfo.WebSubPlatform[m.webSubPlatform] === undefined ? m.webSubPlatform : $root.proto.ClientPayload.WebInfo.WebSubPlatform[m.webSubPlatform] : m.webSubPlatform;
                    if (o.oneofs)
                        d._webSubPlatform = "webSubPlatform";
                }
                return d;
            };

            WebInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            WebInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ClientPayload.WebInfo";
            };

            WebInfo.WebSubPlatform = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "WEB_BROWSER"] = 0;
                values[valuesById[1] = "APP_STORE"] = 1;
                values[valuesById[2] = "WIN_STORE"] = 2;
                values[valuesById[3] = "DARWIN"] = 3;
                values[valuesById[4] = "WIN32"] = 4;
                values[valuesById[5] = "WIN_HYBRID"] = 5;
                return values;
            })();

            WebInfo.WebdPayload = (function() {

                function WebdPayload(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                WebdPayload.prototype.usesParticipantInKey = null;
                WebdPayload.prototype.supportsStarredMessages = null;
                WebdPayload.prototype.supportsDocumentMessages = null;
                WebdPayload.prototype.supportsUrlMessages = null;
                WebdPayload.prototype.supportsMediaRetry = null;
                WebdPayload.prototype.supportsE2EImage = null;
                WebdPayload.prototype.supportsE2EVideo = null;
                WebdPayload.prototype.supportsE2EAudio = null;
                WebdPayload.prototype.supportsE2EDocument = null;
                WebdPayload.prototype.documentTypes = null;
                WebdPayload.prototype.features = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_usesParticipantInKey", {
                    get: $util.oneOfGetter($oneOfFields = ["usesParticipantInKey"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsStarredMessages", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsStarredMessages"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsDocumentMessages", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsDocumentMessages"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsUrlMessages", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsUrlMessages"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsMediaRetry", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsMediaRetry"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsE2EImage", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsE2EImage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsE2EVideo", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsE2EVideo"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsE2EAudio", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsE2EAudio"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsE2EDocument", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsE2EDocument"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_documentTypes", {
                    get: $util.oneOfGetter($oneOfFields = ["documentTypes"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_features", {
                    get: $util.oneOfGetter($oneOfFields = ["features"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                WebdPayload.create = function create(properties) {
                    return new WebdPayload(properties);
                };

                WebdPayload.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.usesParticipantInKey != null && Object.hasOwnProperty.call(m, "usesParticipantInKey"))
                        w.uint32(8).bool(m.usesParticipantInKey);
                    if (m.supportsStarredMessages != null && Object.hasOwnProperty.call(m, "supportsStarredMessages"))
                        w.uint32(16).bool(m.supportsStarredMessages);
                    if (m.supportsDocumentMessages != null && Object.hasOwnProperty.call(m, "supportsDocumentMessages"))
                        w.uint32(24).bool(m.supportsDocumentMessages);
                    if (m.supportsUrlMessages != null && Object.hasOwnProperty.call(m, "supportsUrlMessages"))
                        w.uint32(32).bool(m.supportsUrlMessages);
                    if (m.supportsMediaRetry != null && Object.hasOwnProperty.call(m, "supportsMediaRetry"))
                        w.uint32(40).bool(m.supportsMediaRetry);
                    if (m.supportsE2EImage != null && Object.hasOwnProperty.call(m, "supportsE2EImage"))
                        w.uint32(48).bool(m.supportsE2EImage);
                    if (m.supportsE2EVideo != null && Object.hasOwnProperty.call(m, "supportsE2EVideo"))
                        w.uint32(56).bool(m.supportsE2EVideo);
                    if (m.supportsE2EAudio != null && Object.hasOwnProperty.call(m, "supportsE2EAudio"))
                        w.uint32(64).bool(m.supportsE2EAudio);
                    if (m.supportsE2EDocument != null && Object.hasOwnProperty.call(m, "supportsE2EDocument"))
                        w.uint32(72).bool(m.supportsE2EDocument);
                    if (m.documentTypes != null && Object.hasOwnProperty.call(m, "documentTypes"))
                        w.uint32(82).string(m.documentTypes);
                    if (m.features != null && Object.hasOwnProperty.call(m, "features"))
                        w.uint32(90).bytes(m.features);
                    return w;
                };

                WebdPayload.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ClientPayload.WebInfo.WebdPayload();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.usesParticipantInKey = r.bool();
                                break;
                            }
                        case 2: {
                                m.supportsStarredMessages = r.bool();
                                break;
                            }
                        case 3: {
                                m.supportsDocumentMessages = r.bool();
                                break;
                            }
                        case 4: {
                                m.supportsUrlMessages = r.bool();
                                break;
                            }
                        case 5: {
                                m.supportsMediaRetry = r.bool();
                                break;
                            }
                        case 6: {
                                m.supportsE2EImage = r.bool();
                                break;
                            }
                        case 7: {
                                m.supportsE2EVideo = r.bool();
                                break;
                            }
                        case 8: {
                                m.supportsE2EAudio = r.bool();
                                break;
                            }
                        case 9: {
                                m.supportsE2EDocument = r.bool();
                                break;
                            }
                        case 10: {
                                m.documentTypes = r.string();
                                break;
                            }
                        case 11: {
                                m.features = r.bytes();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                WebdPayload.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.ClientPayload.WebInfo.WebdPayload)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.ClientPayload.WebInfo.WebdPayload: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.ClientPayload.WebInfo.WebdPayload();
                    if (d.usesParticipantInKey != null) {
                        m.usesParticipantInKey = Boolean(d.usesParticipantInKey);
                    }
                    if (d.supportsStarredMessages != null) {
                        m.supportsStarredMessages = Boolean(d.supportsStarredMessages);
                    }
                    if (d.supportsDocumentMessages != null) {
                        m.supportsDocumentMessages = Boolean(d.supportsDocumentMessages);
                    }
                    if (d.supportsUrlMessages != null) {
                        m.supportsUrlMessages = Boolean(d.supportsUrlMessages);
                    }
                    if (d.supportsMediaRetry != null) {
                        m.supportsMediaRetry = Boolean(d.supportsMediaRetry);
                    }
                    if (d.supportsE2EImage != null) {
                        m.supportsE2EImage = Boolean(d.supportsE2EImage);
                    }
                    if (d.supportsE2EVideo != null) {
                        m.supportsE2EVideo = Boolean(d.supportsE2EVideo);
                    }
                    if (d.supportsE2EAudio != null) {
                        m.supportsE2EAudio = Boolean(d.supportsE2EAudio);
                    }
                    if (d.supportsE2EDocument != null) {
                        m.supportsE2EDocument = Boolean(d.supportsE2EDocument);
                    }
                    if (d.documentTypes != null) {
                        m.documentTypes = String(d.documentTypes);
                    }
                    if (d.features != null) {
                        if (typeof d.features === "string")
                            $util.base64.decode(d.features, m.features = $util.newBuffer($util.base64.length(d.features)), 0);
                        else if (d.features.length >= 0)
                            m.features = d.features;
                    }
                    return m;
                };

                WebdPayload.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.usesParticipantInKey != null && Object.hasOwnProperty.call(m, "usesParticipantInKey")) {
                        d.usesParticipantInKey = m.usesParticipantInKey;
                        if (o.oneofs)
                            d._usesParticipantInKey = "usesParticipantInKey";
                    }
                    if (m.supportsStarredMessages != null && Object.hasOwnProperty.call(m, "supportsStarredMessages")) {
                        d.supportsStarredMessages = m.supportsStarredMessages;
                        if (o.oneofs)
                            d._supportsStarredMessages = "supportsStarredMessages";
                    }
                    if (m.supportsDocumentMessages != null && Object.hasOwnProperty.call(m, "supportsDocumentMessages")) {
                        d.supportsDocumentMessages = m.supportsDocumentMessages;
                        if (o.oneofs)
                            d._supportsDocumentMessages = "supportsDocumentMessages";
                    }
                    if (m.supportsUrlMessages != null && Object.hasOwnProperty.call(m, "supportsUrlMessages")) {
                        d.supportsUrlMessages = m.supportsUrlMessages;
                        if (o.oneofs)
                            d._supportsUrlMessages = "supportsUrlMessages";
                    }
                    if (m.supportsMediaRetry != null && Object.hasOwnProperty.call(m, "supportsMediaRetry")) {
                        d.supportsMediaRetry = m.supportsMediaRetry;
                        if (o.oneofs)
                            d._supportsMediaRetry = "supportsMediaRetry";
                    }
                    if (m.supportsE2EImage != null && Object.hasOwnProperty.call(m, "supportsE2EImage")) {
                        d.supportsE2EImage = m.supportsE2EImage;
                        if (o.oneofs)
                            d._supportsE2EImage = "supportsE2EImage";
                    }
                    if (m.supportsE2EVideo != null && Object.hasOwnProperty.call(m, "supportsE2EVideo")) {
                        d.supportsE2EVideo = m.supportsE2EVideo;
                        if (o.oneofs)
                            d._supportsE2EVideo = "supportsE2EVideo";
                    }
                    if (m.supportsE2EAudio != null && Object.hasOwnProperty.call(m, "supportsE2EAudio")) {
                        d.supportsE2EAudio = m.supportsE2EAudio;
                        if (o.oneofs)
                            d._supportsE2EAudio = "supportsE2EAudio";
                    }
                    if (m.supportsE2EDocument != null && Object.hasOwnProperty.call(m, "supportsE2EDocument")) {
                        d.supportsE2EDocument = m.supportsE2EDocument;
                        if (o.oneofs)
                            d._supportsE2EDocument = "supportsE2EDocument";
                    }
                    if (m.documentTypes != null && Object.hasOwnProperty.call(m, "documentTypes")) {
                        d.documentTypes = m.documentTypes;
                        if (o.oneofs)
                            d._documentTypes = "documentTypes";
                    }
                    if (m.features != null && Object.hasOwnProperty.call(m, "features")) {
                        d.features = o.bytes === String ? $util.base64.encode(m.features, 0, m.features.length) : o.bytes === Array ? Array.prototype.slice.call(m.features) : m.features;
                        if (o.oneofs)
                            d._features = "features";
                    }
                    return d;
                };

                WebdPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                WebdPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.ClientPayload.WebInfo.WebdPayload";
                };

                return WebdPayload;
            })();

            return WebInfo;
        })();

        return ClientPayload;
    })();

    proto.CollectionName = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "COLLECTION_NAME_UNKNOWN"] = 0;
        values[valuesById[1] = "REGULAR"] = 1;
        values[valuesById[2] = "REGULAR_LOW"] = 2;
        values[valuesById[3] = "REGULAR_HIGH"] = 3;
        values[valuesById[4] = "CRITICAL_BLOCK"] = 4;
        values[valuesById[5] = "CRITICAL_UNBLOCK_LOW"] = 5;
        return values;
    })();

    proto.ContextInfo = (function() {

        const ContextInfo = proto.ContextInfo || {};

        ContextInfo.ForwardOrigin = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHAT"] = 1;
            values[valuesById[2] = "STATUS"] = 2;
            values[valuesById[3] = "CHANNELS"] = 3;
            values[valuesById[4] = "META_AI"] = 4;
            values[valuesById[5] = "UGC"] = 5;
            return values;
        })();

        ContextInfo.PairedMediaType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NOT_PAIRED_MEDIA"] = 0;
            values[valuesById[1] = "SD_VIDEO_PARENT"] = 1;
            values[valuesById[2] = "HD_VIDEO_CHILD"] = 2;
            values[valuesById[3] = "SD_IMAGE_PARENT"] = 3;
            values[valuesById[4] = "HD_IMAGE_CHILD"] = 4;
            values[valuesById[5] = "MOTION_PHOTO_PARENT"] = 5;
            values[valuesById[6] = "MOTION_PHOTO_CHILD"] = 6;
            values[valuesById[7] = "HEVC_VIDEO_PARENT"] = 7;
            values[valuesById[8] = "HEVC_VIDEO_CHILD"] = 8;
            return values;
        })();

        ContextInfo.QuotedType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EXPLICIT"] = 0;
            values[valuesById[1] = "AUTO"] = 1;
            return values;
        })();

        ContextInfo.StatusAttributionType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "RESHARED_FROM_MENTION"] = 1;
            values[valuesById[2] = "RESHARED_FROM_POST"] = 2;
            values[valuesById[3] = "RESHARED_FROM_POST_MANY_TIMES"] = 3;
            values[valuesById[4] = "FORWARDED_FROM_STATUS"] = 4;
            return values;
        })();

        ContextInfo.StatusSourceType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IMAGE"] = 0;
            values[valuesById[1] = "VIDEO"] = 1;
            values[valuesById[2] = "GIF"] = 2;
            values[valuesById[3] = "AUDIO"] = 3;
            values[valuesById[4] = "TEXT"] = 4;
            values[valuesById[5] = "MUSIC_STANDALONE"] = 5;
            return values;
        })();

        return ContextInfo;
    })();

    proto.Conversation = (function() {

        const Conversation = proto.Conversation || {};

        Conversation.EndOfHistoryTransferType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY"] = 0;
            values[valuesById[1] = "COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY"] = 1;
            values[valuesById[2] = "COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY"] = 2;
            return values;
        })();

        return Conversation;
    })();

    proto.DeviceCapabilities = (function() {

        const DeviceCapabilities = proto.DeviceCapabilities || {};

        DeviceCapabilities.ChatLockSupportLevel = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "MINIMAL"] = 1;
            values[valuesById[2] = "FULL"] = 2;
            return values;
        })();

        DeviceCapabilities.MemberNameTagPrimarySupport = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DISABLED"] = 0;
            values[valuesById[1] = "RECEIVER_ENABLED"] = 1;
            values[valuesById[2] = "SENDER_ENABLED"] = 2;
            return values;
        })();

        return DeviceCapabilities;
    })();

    proto.DeviceProps = (function() {

        const DeviceProps = proto.DeviceProps || {};

        DeviceProps.PlatformType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHROME"] = 1;
            values[valuesById[2] = "FIREFOX"] = 2;
            values[valuesById[3] = "IE"] = 3;
            values[valuesById[4] = "OPERA"] = 4;
            values[valuesById[5] = "SAFARI"] = 5;
            values[valuesById[6] = "EDGE"] = 6;
            values[valuesById[7] = "DESKTOP"] = 7;
            values[valuesById[8] = "IPAD"] = 8;
            values[valuesById[9] = "ANDROID_TABLET"] = 9;
            values[valuesById[10] = "OHANA"] = 10;
            values[valuesById[11] = "ALOHA"] = 11;
            values[valuesById[12] = "CATALINA"] = 12;
            values[valuesById[13] = "TCL_TV"] = 13;
            values[valuesById[14] = "IOS_PHONE"] = 14;
            values[valuesById[15] = "IOS_CATALYST"] = 15;
            values[valuesById[16] = "ANDROID_PHONE"] = 16;
            values[valuesById[17] = "ANDROID_AMBIGUOUS"] = 17;
            values[valuesById[18] = "WEAR_OS"] = 18;
            values[valuesById[19] = "AR_WRIST"] = 19;
            values[valuesById[20] = "AR_DEVICE"] = 20;
            values[valuesById[21] = "UWP"] = 21;
            values[valuesById[22] = "VR"] = 22;
            values[valuesById[23] = "CLOUD_API"] = 23;
            values[valuesById[24] = "SMARTGLASSES"] = 24;
            return values;
        })();

        return DeviceProps;
    })();

    proto.DisappearingMode = (function() {

        const DisappearingMode = proto.DisappearingMode || {};

        DisappearingMode.Initiator = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CHANGED_IN_CHAT"] = 0;
            values[valuesById[1] = "INITIATED_BY_ME"] = 1;
            values[valuesById[2] = "INITIATED_BY_OTHER"] = 2;
            values[valuesById[3] = "BIZ_UPGRADE_FB_HOSTING"] = 3;
            return values;
        })();

        DisappearingMode.Trigger = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHAT_SETTING"] = 1;
            values[valuesById[2] = "ACCOUNT_SETTING"] = 2;
            values[valuesById[3] = "BULK_CHANGE"] = 3;
            values[valuesById[4] = "BIZ_SUPPORTS_FB_HOSTING"] = 4;
            values[valuesById[5] = "UNKNOWN_GROUPS"] = 5;
            return values;
        })();

        return DisappearingMode;
    })();

    proto.GroupHistoryBundleInfo = (function() {

        const GroupHistoryBundleInfo = proto.GroupHistoryBundleInfo || {};

        GroupHistoryBundleInfo.ProcessState = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NOT_INJECTED"] = 0;
            values[valuesById[1] = "INJECTED"] = 1;
            values[valuesById[2] = "INJECTED_PARTIAL"] = 2;
            values[valuesById[3] = "INJECTION_FAILED"] = 3;
            values[valuesById[4] = "INJECTION_FAILED_NO_RETRY"] = 4;
            return values;
        })();

        return GroupHistoryBundleInfo;
    })();

    proto.GroupParticipant = (function() {

        const GroupParticipant = proto.GroupParticipant || {};

        GroupParticipant.Rank = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "REGULAR"] = 0;
            values[valuesById[1] = "ADMIN"] = 1;
            values[valuesById[2] = "SUPERADMIN"] = 2;
            return values;
        })();

        return GroupParticipant;
    })();

    proto.HandshakeMessage = (function() {

        function HandshakeMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        HandshakeMessage.prototype.clientHello = null;
        HandshakeMessage.prototype.serverHello = null;
        HandshakeMessage.prototype.clientFinish = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HandshakeMessage.prototype, "_clientHello", {
            get: $util.oneOfGetter($oneOfFields = ["clientHello"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HandshakeMessage.prototype, "_serverHello", {
            get: $util.oneOfGetter($oneOfFields = ["serverHello"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HandshakeMessage.prototype, "_clientFinish", {
            get: $util.oneOfGetter($oneOfFields = ["clientFinish"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        HandshakeMessage.create = function create(properties) {
            return new HandshakeMessage(properties);
        };

        HandshakeMessage.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.clientHello != null && Object.hasOwnProperty.call(m, "clientHello"))
                $root.proto.HandshakeMessage.ClientHello.encode(m.clientHello, w.uint32(18).fork(), q + 1).ldelim();
            if (m.serverHello != null && Object.hasOwnProperty.call(m, "serverHello"))
                $root.proto.HandshakeMessage.ServerHello.encode(m.serverHello, w.uint32(26).fork(), q + 1).ldelim();
            if (m.clientFinish != null && Object.hasOwnProperty.call(m, "clientFinish"))
                $root.proto.HandshakeMessage.ClientFinish.encode(m.clientFinish, w.uint32(34).fork(), q + 1).ldelim();
            return w;
        };

        HandshakeMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.HandshakeMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 2: {
                        m.clientHello = $root.proto.HandshakeMessage.ClientHello.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.serverHello = $root.proto.HandshakeMessage.ServerHello.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 4: {
                        m.clientFinish = $root.proto.HandshakeMessage.ClientFinish.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        HandshakeMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.HandshakeMessage)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.HandshakeMessage: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.HandshakeMessage();
            if (d.clientHello != null) {
                if (!$util.isObject(d.clientHello))
                    throw TypeError(".proto.HandshakeMessage.clientHello: object expected");
                m.clientHello = $root.proto.HandshakeMessage.ClientHello.fromObject(d.clientHello, n + 1);
            }
            if (d.serverHello != null) {
                if (!$util.isObject(d.serverHello))
                    throw TypeError(".proto.HandshakeMessage.serverHello: object expected");
                m.serverHello = $root.proto.HandshakeMessage.ServerHello.fromObject(d.serverHello, n + 1);
            }
            if (d.clientFinish != null) {
                if (!$util.isObject(d.clientFinish))
                    throw TypeError(".proto.HandshakeMessage.clientFinish: object expected");
                m.clientFinish = $root.proto.HandshakeMessage.ClientFinish.fromObject(d.clientFinish, n + 1);
            }
            return m;
        };

        HandshakeMessage.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (m.clientHello != null && Object.hasOwnProperty.call(m, "clientHello")) {
                d.clientHello = $root.proto.HandshakeMessage.ClientHello.toObject(m.clientHello, o, q + 1);
                if (o.oneofs)
                    d._clientHello = "clientHello";
            }
            if (m.serverHello != null && Object.hasOwnProperty.call(m, "serverHello")) {
                d.serverHello = $root.proto.HandshakeMessage.ServerHello.toObject(m.serverHello, o, q + 1);
                if (o.oneofs)
                    d._serverHello = "serverHello";
            }
            if (m.clientFinish != null && Object.hasOwnProperty.call(m, "clientFinish")) {
                d.clientFinish = $root.proto.HandshakeMessage.ClientFinish.toObject(m.clientFinish, o, q + 1);
                if (o.oneofs)
                    d._clientFinish = "clientFinish";
            }
            return d;
        };

        HandshakeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        HandshakeMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.HandshakeMessage";
        };

        HandshakeMessage.ClientFinish = (function() {

            function ClientFinish(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ClientFinish.prototype["static"] = null;
            ClientFinish.prototype.payload = null;
            ClientFinish.prototype.extendedCiphertext = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientFinish.prototype, "_static", {
                get: $util.oneOfGetter($oneOfFields = ["static"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientFinish.prototype, "_payload", {
                get: $util.oneOfGetter($oneOfFields = ["payload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientFinish.prototype, "_extendedCiphertext", {
                get: $util.oneOfGetter($oneOfFields = ["extendedCiphertext"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            ClientFinish.create = function create(properties) {
                return new ClientFinish(properties);
            };

            ClientFinish.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m["static"] != null && Object.hasOwnProperty.call(m, "static"))
                    w.uint32(10).bytes(m["static"]);
                if (m.payload != null && Object.hasOwnProperty.call(m, "payload"))
                    w.uint32(18).bytes(m.payload);
                if (m.extendedCiphertext != null && Object.hasOwnProperty.call(m, "extendedCiphertext"))
                    w.uint32(26).bytes(m.extendedCiphertext);
                return w;
            };

            ClientFinish.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.HandshakeMessage.ClientFinish();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m["static"] = r.bytes();
                            break;
                        }
                    case 2: {
                            m.payload = r.bytes();
                            break;
                        }
                    case 3: {
                            m.extendedCiphertext = r.bytes();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ClientFinish.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.HandshakeMessage.ClientFinish)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.HandshakeMessage.ClientFinish: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.HandshakeMessage.ClientFinish();
                if (d["static"] != null) {
                    if (typeof d["static"] === "string")
                        $util.base64.decode(d["static"], m["static"] = $util.newBuffer($util.base64.length(d["static"])), 0);
                    else if (d["static"].length >= 0)
                        m["static"] = d["static"];
                }
                if (d.payload != null) {
                    if (typeof d.payload === "string")
                        $util.base64.decode(d.payload, m.payload = $util.newBuffer($util.base64.length(d.payload)), 0);
                    else if (d.payload.length >= 0)
                        m.payload = d.payload;
                }
                if (d.extendedCiphertext != null) {
                    if (typeof d.extendedCiphertext === "string")
                        $util.base64.decode(d.extendedCiphertext, m.extendedCiphertext = $util.newBuffer($util.base64.length(d.extendedCiphertext)), 0);
                    else if (d.extendedCiphertext.length >= 0)
                        m.extendedCiphertext = d.extendedCiphertext;
                }
                return m;
            };

            ClientFinish.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m["static"] != null && Object.hasOwnProperty.call(m, "static")) {
                    d["static"] = o.bytes === String ? $util.base64.encode(m["static"], 0, m["static"].length) : o.bytes === Array ? Array.prototype.slice.call(m["static"]) : m["static"];
                    if (o.oneofs)
                        d._static = "static";
                }
                if (m.payload != null && Object.hasOwnProperty.call(m, "payload")) {
                    d.payload = o.bytes === String ? $util.base64.encode(m.payload, 0, m.payload.length) : o.bytes === Array ? Array.prototype.slice.call(m.payload) : m.payload;
                    if (o.oneofs)
                        d._payload = "payload";
                }
                if (m.extendedCiphertext != null && Object.hasOwnProperty.call(m, "extendedCiphertext")) {
                    d.extendedCiphertext = o.bytes === String ? $util.base64.encode(m.extendedCiphertext, 0, m.extendedCiphertext.length) : o.bytes === Array ? Array.prototype.slice.call(m.extendedCiphertext) : m.extendedCiphertext;
                    if (o.oneofs)
                        d._extendedCiphertext = "extendedCiphertext";
                }
                return d;
            };

            ClientFinish.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ClientFinish.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.HandshakeMessage.ClientFinish";
            };

            return ClientFinish;
        })();

        HandshakeMessage.ClientHello = (function() {

            function ClientHello(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ClientHello.prototype.ephemeral = null;
            ClientHello.prototype["static"] = null;
            ClientHello.prototype.payload = null;
            ClientHello.prototype.useExtended = null;
            ClientHello.prototype.extendedCiphertext = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_ephemeral", {
                get: $util.oneOfGetter($oneOfFields = ["ephemeral"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_static", {
                get: $util.oneOfGetter($oneOfFields = ["static"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_payload", {
                get: $util.oneOfGetter($oneOfFields = ["payload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_useExtended", {
                get: $util.oneOfGetter($oneOfFields = ["useExtended"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_extendedCiphertext", {
                get: $util.oneOfGetter($oneOfFields = ["extendedCiphertext"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            ClientHello.create = function create(properties) {
                return new ClientHello(properties);
            };

            ClientHello.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.ephemeral != null && Object.hasOwnProperty.call(m, "ephemeral"))
                    w.uint32(10).bytes(m.ephemeral);
                if (m["static"] != null && Object.hasOwnProperty.call(m, "static"))
                    w.uint32(18).bytes(m["static"]);
                if (m.payload != null && Object.hasOwnProperty.call(m, "payload"))
                    w.uint32(26).bytes(m.payload);
                if (m.useExtended != null && Object.hasOwnProperty.call(m, "useExtended"))
                    w.uint32(32).bool(m.useExtended);
                if (m.extendedCiphertext != null && Object.hasOwnProperty.call(m, "extendedCiphertext"))
                    w.uint32(42).bytes(m.extendedCiphertext);
                return w;
            };

            ClientHello.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.HandshakeMessage.ClientHello();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.ephemeral = r.bytes();
                            break;
                        }
                    case 2: {
                            m["static"] = r.bytes();
                            break;
                        }
                    case 3: {
                            m.payload = r.bytes();
                            break;
                        }
                    case 4: {
                            m.useExtended = r.bool();
                            break;
                        }
                    case 5: {
                            m.extendedCiphertext = r.bytes();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ClientHello.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.HandshakeMessage.ClientHello)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.HandshakeMessage.ClientHello: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.HandshakeMessage.ClientHello();
                if (d.ephemeral != null) {
                    if (typeof d.ephemeral === "string")
                        $util.base64.decode(d.ephemeral, m.ephemeral = $util.newBuffer($util.base64.length(d.ephemeral)), 0);
                    else if (d.ephemeral.length >= 0)
                        m.ephemeral = d.ephemeral;
                }
                if (d["static"] != null) {
                    if (typeof d["static"] === "string")
                        $util.base64.decode(d["static"], m["static"] = $util.newBuffer($util.base64.length(d["static"])), 0);
                    else if (d["static"].length >= 0)
                        m["static"] = d["static"];
                }
                if (d.payload != null) {
                    if (typeof d.payload === "string")
                        $util.base64.decode(d.payload, m.payload = $util.newBuffer($util.base64.length(d.payload)), 0);
                    else if (d.payload.length >= 0)
                        m.payload = d.payload;
                }
                if (d.useExtended != null) {
                    m.useExtended = Boolean(d.useExtended);
                }
                if (d.extendedCiphertext != null) {
                    if (typeof d.extendedCiphertext === "string")
                        $util.base64.decode(d.extendedCiphertext, m.extendedCiphertext = $util.newBuffer($util.base64.length(d.extendedCiphertext)), 0);
                    else if (d.extendedCiphertext.length >= 0)
                        m.extendedCiphertext = d.extendedCiphertext;
                }
                return m;
            };

            ClientHello.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.ephemeral != null && Object.hasOwnProperty.call(m, "ephemeral")) {
                    d.ephemeral = o.bytes === String ? $util.base64.encode(m.ephemeral, 0, m.ephemeral.length) : o.bytes === Array ? Array.prototype.slice.call(m.ephemeral) : m.ephemeral;
                    if (o.oneofs)
                        d._ephemeral = "ephemeral";
                }
                if (m["static"] != null && Object.hasOwnProperty.call(m, "static")) {
                    d["static"] = o.bytes === String ? $util.base64.encode(m["static"], 0, m["static"].length) : o.bytes === Array ? Array.prototype.slice.call(m["static"]) : m["static"];
                    if (o.oneofs)
                        d._static = "static";
                }
                if (m.payload != null && Object.hasOwnProperty.call(m, "payload")) {
                    d.payload = o.bytes === String ? $util.base64.encode(m.payload, 0, m.payload.length) : o.bytes === Array ? Array.prototype.slice.call(m.payload) : m.payload;
                    if (o.oneofs)
                        d._payload = "payload";
                }
                if (m.useExtended != null && Object.hasOwnProperty.call(m, "useExtended")) {
                    d.useExtended = m.useExtended;
                    if (o.oneofs)
                        d._useExtended = "useExtended";
                }
                if (m.extendedCiphertext != null && Object.hasOwnProperty.call(m, "extendedCiphertext")) {
                    d.extendedCiphertext = o.bytes === String ? $util.base64.encode(m.extendedCiphertext, 0, m.extendedCiphertext.length) : o.bytes === Array ? Array.prototype.slice.call(m.extendedCiphertext) : m.extendedCiphertext;
                    if (o.oneofs)
                        d._extendedCiphertext = "extendedCiphertext";
                }
                return d;
            };

            ClientHello.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ClientHello.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.HandshakeMessage.ClientHello";
            };

            return ClientHello;
        })();

        HandshakeMessage.ServerHello = (function() {

            function ServerHello(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ServerHello.prototype.ephemeral = null;
            ServerHello.prototype["static"] = null;
            ServerHello.prototype.payload = null;
            ServerHello.prototype.extendedStatic = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ServerHello.prototype, "_ephemeral", {
                get: $util.oneOfGetter($oneOfFields = ["ephemeral"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ServerHello.prototype, "_static", {
                get: $util.oneOfGetter($oneOfFields = ["static"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ServerHello.prototype, "_payload", {
                get: $util.oneOfGetter($oneOfFields = ["payload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ServerHello.prototype, "_extendedStatic", {
                get: $util.oneOfGetter($oneOfFields = ["extendedStatic"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            ServerHello.create = function create(properties) {
                return new ServerHello(properties);
            };

            ServerHello.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.ephemeral != null && Object.hasOwnProperty.call(m, "ephemeral"))
                    w.uint32(10).bytes(m.ephemeral);
                if (m["static"] != null && Object.hasOwnProperty.call(m, "static"))
                    w.uint32(18).bytes(m["static"]);
                if (m.payload != null && Object.hasOwnProperty.call(m, "payload"))
                    w.uint32(26).bytes(m.payload);
                if (m.extendedStatic != null && Object.hasOwnProperty.call(m, "extendedStatic"))
                    w.uint32(34).bytes(m.extendedStatic);
                return w;
            };

            ServerHello.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.HandshakeMessage.ServerHello();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.ephemeral = r.bytes();
                            break;
                        }
                    case 2: {
                            m["static"] = r.bytes();
                            break;
                        }
                    case 3: {
                            m.payload = r.bytes();
                            break;
                        }
                    case 4: {
                            m.extendedStatic = r.bytes();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ServerHello.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.HandshakeMessage.ServerHello)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.HandshakeMessage.ServerHello: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.HandshakeMessage.ServerHello();
                if (d.ephemeral != null) {
                    if (typeof d.ephemeral === "string")
                        $util.base64.decode(d.ephemeral, m.ephemeral = $util.newBuffer($util.base64.length(d.ephemeral)), 0);
                    else if (d.ephemeral.length >= 0)
                        m.ephemeral = d.ephemeral;
                }
                if (d["static"] != null) {
                    if (typeof d["static"] === "string")
                        $util.base64.decode(d["static"], m["static"] = $util.newBuffer($util.base64.length(d["static"])), 0);
                    else if (d["static"].length >= 0)
                        m["static"] = d["static"];
                }
                if (d.payload != null) {
                    if (typeof d.payload === "string")
                        $util.base64.decode(d.payload, m.payload = $util.newBuffer($util.base64.length(d.payload)), 0);
                    else if (d.payload.length >= 0)
                        m.payload = d.payload;
                }
                if (d.extendedStatic != null) {
                    if (typeof d.extendedStatic === "string")
                        $util.base64.decode(d.extendedStatic, m.extendedStatic = $util.newBuffer($util.base64.length(d.extendedStatic)), 0);
                    else if (d.extendedStatic.length >= 0)
                        m.extendedStatic = d.extendedStatic;
                }
                return m;
            };

            ServerHello.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.ephemeral != null && Object.hasOwnProperty.call(m, "ephemeral")) {
                    d.ephemeral = o.bytes === String ? $util.base64.encode(m.ephemeral, 0, m.ephemeral.length) : o.bytes === Array ? Array.prototype.slice.call(m.ephemeral) : m.ephemeral;
                    if (o.oneofs)
                        d._ephemeral = "ephemeral";
                }
                if (m["static"] != null && Object.hasOwnProperty.call(m, "static")) {
                    d["static"] = o.bytes === String ? $util.base64.encode(m["static"], 0, m["static"].length) : o.bytes === Array ? Array.prototype.slice.call(m["static"]) : m["static"];
                    if (o.oneofs)
                        d._static = "static";
                }
                if (m.payload != null && Object.hasOwnProperty.call(m, "payload")) {
                    d.payload = o.bytes === String ? $util.base64.encode(m.payload, 0, m.payload.length) : o.bytes === Array ? Array.prototype.slice.call(m.payload) : m.payload;
                    if (o.oneofs)
                        d._payload = "payload";
                }
                if (m.extendedStatic != null && Object.hasOwnProperty.call(m, "extendedStatic")) {
                    d.extendedStatic = o.bytes === String ? $util.base64.encode(m.extendedStatic, 0, m.extendedStatic.length) : o.bytes === Array ? Array.prototype.slice.call(m.extendedStatic) : m.extendedStatic;
                    if (o.oneofs)
                        d._extendedStatic = "extendedStatic";
                }
                return d;
            };

            ServerHello.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ServerHello.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.HandshakeMessage.ServerHello";
            };

            return ServerHello;
        })();

        return HandshakeMessage;
    })();

    proto.HistorySync = (function() {

        const HistorySync = proto.HistorySync || {};

        HistorySync.BotAIWaitListState = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IN_WAITLIST"] = 0;
            values[valuesById[1] = "AI_AVAILABLE"] = 1;
            return values;
        })();

        HistorySync.HistorySyncType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INITIAL_BOOTSTRAP"] = 0;
            values[valuesById[1] = "INITIAL_STATUS_V3"] = 1;
            values[valuesById[2] = "FULL"] = 2;
            values[valuesById[3] = "RECENT"] = 3;
            values[valuesById[4] = "PUSH_NAME"] = 4;
            values[valuesById[5] = "NON_BLOCKING_DATA"] = 5;
            values[valuesById[6] = "ON_DEMAND"] = 6;
            return values;
        })();

        return HistorySync;
    })();

    proto.InteractiveAnnotation = (function() {

        const InteractiveAnnotation = proto.InteractiveAnnotation || {};

        InteractiveAnnotation.StatusLinkType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "RASTERIZED_LINK_PREVIEW"] = 1;
            values[valuesById[2] = "RASTERIZED_LINK_TRUNCATED"] = 2;
            values[valuesById[3] = "RASTERIZED_LINK_FULL_URL"] = 3;
            return values;
        })();

        return InteractiveAnnotation;
    })();

    proto.KeepType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "KEEP_FOR_ALL"] = 1;
        values[valuesById[2] = "UNDO_KEEP_FOR_ALL"] = 2;
        return values;
    })();

    proto.LimitSharing = (function() {

        const LimitSharing = proto.LimitSharing || {};

        LimitSharing.TriggerType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHAT_SETTING"] = 1;
            values[valuesById[2] = "BIZ_SUPPORTS_FB_HOSTING"] = 2;
            values[valuesById[3] = "UNKNOWN_GROUP"] = 3;
            return values;
        })();

        return LimitSharing;
    })();

    proto.MediaRetryNotification = (function() {

        const MediaRetryNotification = proto.MediaRetryNotification || {};

        MediaRetryNotification.ResultType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GENERAL_ERROR"] = 0;
            values[valuesById[1] = "SUCCESS"] = 1;
            values[valuesById[2] = "NOT_FOUND"] = 2;
            values[valuesById[3] = "DECRYPTION_ERROR"] = 3;
            return values;
        })();

        return MediaRetryNotification;
    })();

    proto.MediaVisibility = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DEFAULT"] = 0;
        values[valuesById[1] = "OFF"] = 1;
        values[valuesById[2] = "ON"] = 2;
        return values;
    })();

    proto.Message = (function() {

        const Message = proto.Message || {};

        Message.HistorySyncType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INITIAL_BOOTSTRAP"] = 0;
            values[valuesById[1] = "INITIAL_STATUS_V3"] = 1;
            values[valuesById[2] = "FULL"] = 2;
            values[valuesById[3] = "RECENT"] = 3;
            values[valuesById[4] = "PUSH_NAME"] = 4;
            values[valuesById[5] = "NON_BLOCKING_DATA"] = 5;
            values[valuesById[6] = "ON_DEMAND"] = 6;
            values[valuesById[7] = "NO_HISTORY"] = 7;
            values[valuesById[8] = "MESSAGE_ACCESS_STATUS"] = 8;
            return values;
        })();

        Message.MediaKeyDomain = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSET"] = 0;
            values[valuesById[1] = "E2EE_CHAT"] = 1;
            values[valuesById[2] = "STATUS"] = 2;
            values[valuesById[3] = "CAPI"] = 3;
            values[valuesById[4] = "BOT"] = 4;
            return values;
        })();

        Message.PeerDataOperationRequestType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UPLOAD_STICKER"] = 0;
            values[valuesById[1] = "SEND_RECENT_STICKER_BOOTSTRAP"] = 1;
            values[valuesById[2] = "GENERATE_LINK_PREVIEW"] = 2;
            values[valuesById[3] = "HISTORY_SYNC_ON_DEMAND"] = 3;
            values[valuesById[4] = "PLACEHOLDER_MESSAGE_RESEND"] = 4;
            values[valuesById[5] = "WAFFLE_LINKING_NONCE_FETCH"] = 5;
            values[valuesById[6] = "FULL_HISTORY_SYNC_ON_DEMAND"] = 6;
            values[valuesById[7] = "COMPANION_META_NONCE_FETCH"] = 7;
            values[valuesById[8] = "COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY"] = 8;
            values[valuesById[9] = "COMPANION_CANONICAL_USER_NONCE_FETCH"] = 9;
            values[valuesById[10] = "HISTORY_SYNC_CHUNK_RETRY"] = 10;
            values[valuesById[11] = "GALAXY_FLOW_ACTION"] = 11;
            return values;
        })();

        Message.PollContentType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "TEXT"] = 1;
            values[valuesById[2] = "IMAGE"] = 2;
            return values;
        })();

        Message.PollType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "POLL"] = 0;
            values[valuesById[1] = "QUIZ"] = 1;
            return values;
        })();

        return Message;
    })();

    proto.MessageAddOn = (function() {

        const MessageAddOn = proto.MessageAddOn || {};

        MessageAddOn.MessageAddOnType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNDEFINED"] = 0;
            values[valuesById[1] = "REACTION"] = 1;
            values[valuesById[2] = "EVENT_RESPONSE"] = 2;
            values[valuesById[3] = "POLL_UPDATE"] = 3;
            values[valuesById[4] = "PIN_IN_CHAT"] = 4;
            return values;
        })();

        return MessageAddOn;
    })();

    proto.MessageAssociation = (function() {

        const MessageAssociation = proto.MessageAssociation || {};

        MessageAssociation.AssociationType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "MEDIA_ALBUM"] = 1;
            values[valuesById[2] = "BOT_PLUGIN"] = 2;
            values[valuesById[3] = "EVENT_COVER_IMAGE"] = 3;
            values[valuesById[4] = "STATUS_POLL"] = 4;
            values[valuesById[5] = "HD_VIDEO_DUAL_UPLOAD"] = 5;
            values[valuesById[6] = "STATUS_EXTERNAL_RESHARE"] = 6;
            values[valuesById[7] = "MEDIA_POLL"] = 7;
            values[valuesById[8] = "STATUS_ADD_YOURS"] = 8;
            values[valuesById[9] = "STATUS_NOTIFICATION"] = 9;
            values[valuesById[10] = "HD_IMAGE_DUAL_UPLOAD"] = 10;
            values[valuesById[11] = "STICKER_ANNOTATION"] = 11;
            values[valuesById[12] = "MOTION_PHOTO"] = 12;
            values[valuesById[13] = "STATUS_LINK_ACTION"] = 13;
            values[valuesById[14] = "VIEW_ALL_REPLIES"] = 14;
            values[valuesById[15] = "STATUS_ADD_YOURS_AI_IMAGINE"] = 15;
            values[valuesById[16] = "STATUS_QUESTION"] = 16;
            values[valuesById[17] = "STATUS_ADD_YOURS_DIWALI"] = 17;
            values[valuesById[18] = "STATUS_REACTION"] = 18;
            values[valuesById[19] = "HEVC_VIDEO_DUAL_UPLOAD"] = 19;
            return values;
        })();

        return MessageAssociation;
    })();

    proto.MessageContextInfo = (function() {

        const MessageContextInfo = proto.MessageContextInfo || {};

        MessageContextInfo.MessageAddonExpiryType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "STATIC"] = 1;
            values[valuesById[2] = "DEPENDENT_ON_PARENT"] = 2;
            return values;
        })();

        return MessageContextInfo;
    })();

    proto.MsgOpaqueData = (function() {

        const MsgOpaqueData = proto.MsgOpaqueData || {};

        MsgOpaqueData.PollContentType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "TEXT"] = 1;
            values[valuesById[2] = "IMAGE"] = 2;
            return values;
        })();

        MsgOpaqueData.PollType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "POLL"] = 0;
            values[valuesById[1] = "QUIZ"] = 1;
            return values;
        })();

        return MsgOpaqueData;
    })();

    proto.MutationProps = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[2] = "STAR_ACTION"] = 2;
        values[valuesById[3] = "CONTACT_ACTION"] = 3;
        values[valuesById[4] = "MUTE_ACTION"] = 4;
        values[valuesById[5] = "PIN_ACTION"] = 5;
        values[valuesById[6] = "SECURITY_NOTIFICATION_SETTING"] = 6;
        values[valuesById[7] = "PUSH_NAME_SETTING"] = 7;
        values[valuesById[8] = "QUICK_REPLY_ACTION"] = 8;
        values[valuesById[11] = "RECENT_EMOJI_WEIGHTS_ACTION"] = 11;
        values[valuesById[13] = "LABEL_MESSAGE_ACTION"] = 13;
        values[valuesById[14] = "LABEL_EDIT_ACTION"] = 14;
        values[valuesById[15] = "LABEL_ASSOCIATION_ACTION"] = 15;
        values[valuesById[16] = "LOCALE_SETTING"] = 16;
        values[valuesById[17] = "ARCHIVE_CHAT_ACTION"] = 17;
        values[valuesById[18] = "DELETE_MESSAGE_FOR_ME_ACTION"] = 18;
        values[valuesById[19] = "KEY_EXPIRATION"] = 19;
        values[valuesById[20] = "MARK_CHAT_AS_READ_ACTION"] = 20;
        values[valuesById[21] = "CLEAR_CHAT_ACTION"] = 21;
        values[valuesById[22] = "DELETE_CHAT_ACTION"] = 22;
        values[valuesById[23] = "UNARCHIVE_CHATS_SETTING"] = 23;
        values[valuesById[24] = "PRIMARY_FEATURE"] = 24;
        values[valuesById[26] = "ANDROID_UNSUPPORTED_ACTIONS"] = 26;
        values[valuesById[27] = "AGENT_ACTION"] = 27;
        values[valuesById[28] = "SUBSCRIPTION_ACTION"] = 28;
        values[valuesById[29] = "USER_STATUS_MUTE_ACTION"] = 29;
        values[valuesById[30] = "TIME_FORMAT_ACTION"] = 30;
        values[valuesById[31] = "NUX_ACTION"] = 31;
        values[valuesById[32] = "PRIMARY_VERSION_ACTION"] = 32;
        values[valuesById[33] = "STICKER_ACTION"] = 33;
        values[valuesById[34] = "REMOVE_RECENT_STICKER_ACTION"] = 34;
        values[valuesById[35] = "CHAT_ASSIGNMENT"] = 35;
        values[valuesById[36] = "CHAT_ASSIGNMENT_OPENED_STATUS"] = 36;
        values[valuesById[37] = "PN_FOR_LID_CHAT_ACTION"] = 37;
        values[valuesById[38] = "MARKETING_MESSAGE_ACTION"] = 38;
        values[valuesById[39] = "MARKETING_MESSAGE_BROADCAST_ACTION"] = 39;
        values[valuesById[40] = "EXTERNAL_WEB_BETA_ACTION"] = 40;
        values[valuesById[41] = "PRIVACY_SETTING_RELAY_ALL_CALLS"] = 41;
        values[valuesById[42] = "CALL_LOG_ACTION"] = 42;
        values[valuesById[43] = "UGC_BOT"] = 43;
        values[valuesById[44] = "STATUS_PRIVACY"] = 44;
        values[valuesById[45] = "BOT_WELCOME_REQUEST_ACTION"] = 45;
        values[valuesById[46] = "DELETE_INDIVIDUAL_CALL_LOG"] = 46;
        values[valuesById[47] = "LABEL_REORDERING_ACTION"] = 47;
        values[valuesById[48] = "PAYMENT_INFO_ACTION"] = 48;
        values[valuesById[49] = "CUSTOM_PAYMENT_METHODS_ACTION"] = 49;
        values[valuesById[50] = "LOCK_CHAT_ACTION"] = 50;
        values[valuesById[51] = "CHAT_LOCK_SETTINGS"] = 51;
        values[valuesById[52] = "WAMO_USER_IDENTIFIER_ACTION"] = 52;
        values[valuesById[53] = "PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION"] = 53;
        values[valuesById[54] = "DEVICE_CAPABILITIES"] = 54;
        values[valuesById[55] = "NOTE_EDIT_ACTION"] = 55;
        values[valuesById[56] = "FAVORITES_ACTION"] = 56;
        values[valuesById[57] = "MERCHANT_PAYMENT_PARTNER_ACTION"] = 57;
        values[valuesById[58] = "WAFFLE_ACCOUNT_LINK_STATE_ACTION"] = 58;
        values[valuesById[59] = "USERNAME_CHAT_START_MODE"] = 59;
        values[valuesById[60] = "NOTIFICATION_ACTIVITY_SETTING_ACTION"] = 60;
        values[valuesById[61] = "LID_CONTACT_ACTION"] = 61;
        values[valuesById[62] = "CTWA_PER_CUSTOMER_DATA_SHARING_ACTION"] = 62;
        values[valuesById[63] = "PAYMENT_TOS_ACTION"] = 63;
        values[valuesById[64] = "PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION"] = 64;
        values[valuesById[65] = "BUSINESS_BROADCAST_ASSOCIATION_ACTION"] = 65;
        values[valuesById[66] = "DETECTED_OUTCOMES_STATUS_ACTION"] = 66;
        values[valuesById[68] = "MAIBA_AI_FEATURES_CONTROL_ACTION"] = 68;
        values[valuesById[69] = "BUSINESS_BROADCAST_LIST_ACTION"] = 69;
        values[valuesById[70] = "MUSIC_USER_ID_ACTION"] = 70;
        values[valuesById[71] = "STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION"] = 71;
        values[valuesById[72] = "AVATAR_UPDATED_ACTION"] = 72;
        values[valuesById[73] = "GALAXY_FLOW_ACTION"] = 73;
        values[valuesById[74] = "PRIVATE_PROCESSING_SETTING_ACTION"] = 74;
        values[valuesById[75] = "NEWSLETTER_SAVED_INTERESTS_ACTION"] = 75;
        values[valuesById[76] = "AI_THREAD_RENAME_ACTION"] = 76;
        values[valuesById[77] = "INTERACTIVE_MESSAGE_ACTION"] = 77;
        values[valuesById[10001] = "SHARE_OWN_PN"] = 10001;
        values[valuesById[10002] = "BUSINESS_BROADCAST_ACTION"] = 10002;
        return values;
    })();

    proto.PastParticipant = (function() {

        const PastParticipant = proto.PastParticipant || {};

        PastParticipant.LeaveReason = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LEFT"] = 0;
            values[valuesById[1] = "REMOVED"] = 1;
            return values;
        })();

        return PastParticipant;
    })();

    proto.PatchDebugData = (function() {

        const PatchDebugData = proto.PatchDebugData || {};

        PatchDebugData.Platform = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ANDROID"] = 0;
            values[valuesById[1] = "SMBA"] = 1;
            values[valuesById[2] = "IPHONE"] = 2;
            values[valuesById[3] = "SMBI"] = 3;
            values[valuesById[4] = "WEB"] = 4;
            values[valuesById[5] = "UWP"] = 5;
            values[valuesById[6] = "DARWIN"] = 6;
            values[valuesById[7] = "IPAD"] = 7;
            values[valuesById[8] = "WEAROS"] = 8;
            values[valuesById[9] = "WASG"] = 9;
            values[valuesById[10] = "WEARM"] = 10;
            values[valuesById[11] = "CAPI"] = 11;
            return values;
        })();

        return PatchDebugData;
    })();

    proto.PaymentBackground = (function() {

        const PaymentBackground = proto.PaymentBackground || {};

        PaymentBackground.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "DEFAULT"] = 1;
            return values;
        })();

        return PaymentBackground;
    })();

    proto.PaymentInfo = (function() {

        const PaymentInfo = proto.PaymentInfo || {};

        PaymentInfo.Currency = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_CURRENCY"] = 0;
            values[valuesById[1] = "INR"] = 1;
            return values;
        })();

        PaymentInfo.Status = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_STATUS"] = 0;
            values[valuesById[1] = "PROCESSING"] = 1;
            values[valuesById[2] = "SENT"] = 2;
            values[valuesById[3] = "NEED_TO_ACCEPT"] = 3;
            values[valuesById[4] = "COMPLETE"] = 4;
            values[valuesById[5] = "COULD_NOT_COMPLETE"] = 5;
            values[valuesById[6] = "REFUNDED"] = 6;
            values[valuesById[7] = "EXPIRED"] = 7;
            values[valuesById[8] = "REJECTED"] = 8;
            values[valuesById[9] = "CANCELLED"] = 9;
            values[valuesById[10] = "WAITING_FOR_PAYER"] = 10;
            values[valuesById[11] = "WAITING"] = 11;
            return values;
        })();

        PaymentInfo.TxnStatus = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PENDING_SETUP"] = 1;
            values[valuesById[2] = "PENDING_RECEIVER_SETUP"] = 2;
            values[valuesById[3] = "INIT"] = 3;
            values[valuesById[4] = "SUCCESS"] = 4;
            values[valuesById[5] = "COMPLETED"] = 5;
            values[valuesById[6] = "FAILED"] = 6;
            values[valuesById[7] = "FAILED_RISK"] = 7;
            values[valuesById[8] = "FAILED_PROCESSING"] = 8;
            values[valuesById[9] = "FAILED_RECEIVER_PROCESSING"] = 9;
            values[valuesById[10] = "FAILED_DA"] = 10;
            values[valuesById[11] = "FAILED_DA_FINAL"] = 11;
            values[valuesById[12] = "REFUNDED_TXN"] = 12;
            values[valuesById[13] = "REFUND_FAILED"] = 13;
            values[valuesById[14] = "REFUND_FAILED_PROCESSING"] = 14;
            values[valuesById[15] = "REFUND_FAILED_DA"] = 15;
            values[valuesById[16] = "EXPIRED_TXN"] = 16;
            values[valuesById[17] = "AUTH_CANCELED"] = 17;
            values[valuesById[18] = "AUTH_CANCEL_FAILED_PROCESSING"] = 18;
            values[valuesById[19] = "AUTH_CANCEL_FAILED"] = 19;
            values[valuesById[20] = "COLLECT_INIT"] = 20;
            values[valuesById[21] = "COLLECT_SUCCESS"] = 21;
            values[valuesById[22] = "COLLECT_FAILED"] = 22;
            values[valuesById[23] = "COLLECT_FAILED_RISK"] = 23;
            values[valuesById[24] = "COLLECT_REJECTED"] = 24;
            values[valuesById[25] = "COLLECT_EXPIRED"] = 25;
            values[valuesById[26] = "COLLECT_CANCELED"] = 26;
            values[valuesById[27] = "COLLECT_CANCELLING"] = 27;
            values[valuesById[28] = "IN_REVIEW"] = 28;
            values[valuesById[29] = "REVERSAL_SUCCESS"] = 29;
            values[valuesById[30] = "REVERSAL_PENDING"] = 30;
            values[valuesById[31] = "REFUND_PENDING"] = 31;
            return values;
        })();

        return PaymentInfo;
    })();

    proto.PinInChat = (function() {

        const PinInChat = proto.PinInChat || {};

        PinInChat.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "PIN_FOR_ALL"] = 1;
            values[valuesById[2] = "UNPIN_FOR_ALL"] = 2;
            return values;
        })();

        return PinInChat;
    })();

    proto.PrivacySystemMessage = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "E2EE_MSG"] = 1;
        values[valuesById[2] = "NE2EE_SELF"] = 2;
        values[valuesById[3] = "NE2EE_OTHER"] = 3;
        return values;
    })();

    proto.ProcessedVideo = (function() {

        const ProcessedVideo = proto.ProcessedVideo || {};

        ProcessedVideo.VideoQuality = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNDEFINED"] = 0;
            values[valuesById[1] = "LOW"] = 1;
            values[valuesById[2] = "MID"] = 2;
            values[valuesById[3] = "HIGH"] = 3;
            return values;
        })();

        return ProcessedVideo;
    })();

    proto.SessionTransparencyType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
        values[valuesById[1] = "NY_AI_SAFETY_DISCLAIMER"] = 1;
        return values;
    })();

    proto.StatusAttribution = (function() {

        const StatusAttribution = proto.StatusAttribution || {};

        StatusAttribution.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "RESHARE"] = 1;
            values[valuesById[2] = "EXTERNAL_SHARE"] = 2;
            values[valuesById[3] = "MUSIC"] = 3;
            values[valuesById[4] = "STATUS_MENTION"] = 4;
            values[valuesById[5] = "GROUP_STATUS"] = 5;
            values[valuesById[6] = "RL_ATTRIBUTION"] = 6;
            values[valuesById[7] = "AI_CREATED"] = 7;
            values[valuesById[8] = "LAYOUTS"] = 8;
            return values;
        })();

        return StatusAttribution;
    })();

    proto.SyncdMutation = (function() {

        const SyncdMutation = proto.SyncdMutation || {};

        SyncdMutation.SyncdOperation = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SET"] = 0;
            values[valuesById[1] = "REMOVE"] = 1;
            return values;
        })();

        return SyncdMutation;
    })();

    proto.ThreadID = (function() {

        const ThreadID = proto.ThreadID || {};

        ThreadID.ThreadType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "VIEW_REPLIES"] = 1;
            values[valuesById[2] = "AI_THREAD"] = 2;
            return values;
        })();

        return ThreadID;
    })();

    proto.UserPassword = (function() {

        const UserPassword = proto.UserPassword || {};

        UserPassword.Encoding = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UTF8"] = 0;
            values[valuesById[1] = "UTF8_BROKEN"] = 1;
            return values;
        })();

        UserPassword.Transformer = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "PBKDF2_HMAC_SHA512"] = 1;
            values[valuesById[2] = "PBKDF2_HMAC_SHA384"] = 2;
            return values;
        })();

        return UserPassword;
    })();

    proto.WebFeatures = (function() {

        const WebFeatures = proto.WebFeatures || {};

        WebFeatures.Flag = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NOT_STARTED"] = 0;
            values[valuesById[1] = "FORCE_UPGRADE"] = 1;
            values[valuesById[2] = "DEVELOPMENT"] = 2;
            values[valuesById[3] = "PRODUCTION"] = 3;
            return values;
        })();

        return WebFeatures;
    })();

    proto.WebLinkRenderConfig = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WEBVIEW"] = 0;
        values[valuesById[1] = "SYSTEM"] = 1;
        return values;
    })();

    proto.WebMessageInfo = (function() {

        const WebMessageInfo = proto.WebMessageInfo || {};

        WebMessageInfo.BizPrivacyStatus = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "E2EE"] = 0;
            values[valuesById[2] = "FB"] = 2;
            values[valuesById[1] = "BSP"] = 1;
            values[valuesById[3] = "BSP_AND_FB"] = 3;
            return values;
        })();

        WebMessageInfo.Status = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ERROR"] = 0;
            values[valuesById[1] = "PENDING"] = 1;
            values[valuesById[2] = "SERVER_ACK"] = 2;
            values[valuesById[3] = "DELIVERY_ACK"] = 3;
            values[valuesById[4] = "READ"] = 4;
            values[valuesById[5] = "PLAYED"] = 5;
            return values;
        })();

        WebMessageInfo.StubType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "REVOKE"] = 1;
            values[valuesById[2] = "CIPHERTEXT"] = 2;
            values[valuesById[3] = "FUTUREPROOF"] = 3;
            values[valuesById[4] = "NON_VERIFIED_TRANSITION"] = 4;
            values[valuesById[5] = "UNVERIFIED_TRANSITION"] = 5;
            values[valuesById[6] = "VERIFIED_TRANSITION"] = 6;
            values[valuesById[7] = "VERIFIED_LOW_UNKNOWN"] = 7;
            values[valuesById[8] = "VERIFIED_HIGH"] = 8;
            values[valuesById[9] = "VERIFIED_INITIAL_UNKNOWN"] = 9;
            values[valuesById[10] = "VERIFIED_INITIAL_LOW"] = 10;
            values[valuesById[11] = "VERIFIED_INITIAL_HIGH"] = 11;
            values[valuesById[12] = "VERIFIED_TRANSITION_ANY_TO_NONE"] = 12;
            values[valuesById[13] = "VERIFIED_TRANSITION_ANY_TO_HIGH"] = 13;
            values[valuesById[14] = "VERIFIED_TRANSITION_HIGH_TO_LOW"] = 14;
            values[valuesById[15] = "VERIFIED_TRANSITION_HIGH_TO_UNKNOWN"] = 15;
            values[valuesById[16] = "VERIFIED_TRANSITION_UNKNOWN_TO_LOW"] = 16;
            values[valuesById[17] = "VERIFIED_TRANSITION_LOW_TO_UNKNOWN"] = 17;
            values[valuesById[18] = "VERIFIED_TRANSITION_NONE_TO_LOW"] = 18;
            values[valuesById[19] = "VERIFIED_TRANSITION_NONE_TO_UNKNOWN"] = 19;
            values[valuesById[20] = "GROUP_CREATE"] = 20;
            values[valuesById[21] = "GROUP_CHANGE_SUBJECT"] = 21;
            values[valuesById[22] = "GROUP_CHANGE_ICON"] = 22;
            values[valuesById[23] = "GROUP_CHANGE_INVITE_LINK"] = 23;
            values[valuesById[24] = "GROUP_CHANGE_DESCRIPTION"] = 24;
            values[valuesById[25] = "GROUP_CHANGE_RESTRICT"] = 25;
            values[valuesById[26] = "GROUP_CHANGE_ANNOUNCE"] = 26;
            values[valuesById[27] = "GROUP_PARTICIPANT_ADD"] = 27;
            values[valuesById[28] = "GROUP_PARTICIPANT_REMOVE"] = 28;
            values[valuesById[29] = "GROUP_PARTICIPANT_PROMOTE"] = 29;
            values[valuesById[30] = "GROUP_PARTICIPANT_DEMOTE"] = 30;
            values[valuesById[31] = "GROUP_PARTICIPANT_INVITE"] = 31;
            values[valuesById[32] = "GROUP_PARTICIPANT_LEAVE"] = 32;
            values[valuesById[33] = "GROUP_PARTICIPANT_CHANGE_NUMBER"] = 33;
            values[valuesById[34] = "BROADCAST_CREATE"] = 34;
            values[valuesById[35] = "BROADCAST_ADD"] = 35;
            values[valuesById[36] = "BROADCAST_REMOVE"] = 36;
            values[valuesById[37] = "GENERIC_NOTIFICATION"] = 37;
            values[valuesById[38] = "E2E_IDENTITY_CHANGED"] = 38;
            values[valuesById[39] = "E2E_ENCRYPTED"] = 39;
            values[valuesById[40] = "CALL_MISSED_VOICE"] = 40;
            values[valuesById[41] = "CALL_MISSED_VIDEO"] = 41;
            values[valuesById[42] = "INDIVIDUAL_CHANGE_NUMBER"] = 42;
            values[valuesById[43] = "GROUP_DELETE"] = 43;
            values[valuesById[44] = "GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE"] = 44;
            values[valuesById[45] = "CALL_MISSED_GROUP_VOICE"] = 45;
            values[valuesById[46] = "CALL_MISSED_GROUP_VIDEO"] = 46;
            values[valuesById[47] = "PAYMENT_CIPHERTEXT"] = 47;
            values[valuesById[48] = "PAYMENT_FUTUREPROOF"] = 48;
            values[valuesById[49] = "PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED"] = 49;
            values[valuesById[50] = "PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED"] = 50;
            values[valuesById[51] = "PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED"] = 51;
            values[valuesById[52] = "PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP"] = 52;
            values[valuesById[53] = "PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP"] = 53;
            values[valuesById[54] = "PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER"] = 54;
            values[valuesById[55] = "PAYMENT_ACTION_SEND_PAYMENT_REMINDER"] = 55;
            values[valuesById[56] = "PAYMENT_ACTION_SEND_PAYMENT_INVITATION"] = 56;
            values[valuesById[57] = "PAYMENT_ACTION_REQUEST_DECLINED"] = 57;
            values[valuesById[58] = "PAYMENT_ACTION_REQUEST_EXPIRED"] = 58;
            values[valuesById[59] = "PAYMENT_ACTION_REQUEST_CANCELLED"] = 59;
            values[valuesById[60] = "BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM"] = 60;
            values[valuesById[61] = "BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP"] = 61;
            values[valuesById[62] = "BIZ_INTRO_TOP"] = 62;
            values[valuesById[63] = "BIZ_INTRO_BOTTOM"] = 63;
            values[valuesById[64] = "BIZ_NAME_CHANGE"] = 64;
            values[valuesById[65] = "BIZ_MOVE_TO_CONSUMER_APP"] = 65;
            values[valuesById[66] = "BIZ_TWO_TIER_MIGRATION_TOP"] = 66;
            values[valuesById[67] = "BIZ_TWO_TIER_MIGRATION_BOTTOM"] = 67;
            values[valuesById[68] = "OVERSIZED"] = 68;
            values[valuesById[69] = "GROUP_CHANGE_NO_FREQUENTLY_FORWARDED"] = 69;
            values[valuesById[70] = "GROUP_V4_ADD_INVITE_SENT"] = 70;
            values[valuesById[71] = "GROUP_PARTICIPANT_ADD_REQUEST_JOIN"] = 71;
            values[valuesById[72] = "CHANGE_EPHEMERAL_SETTING"] = 72;
            values[valuesById[73] = "E2E_DEVICE_CHANGED"] = 73;
            values[valuesById[74] = "VIEWED_ONCE"] = 74;
            values[valuesById[75] = "E2E_ENCRYPTED_NOW"] = 75;
            values[valuesById[76] = "BLUE_MSG_BSP_FB_TO_BSP_PREMISE"] = 76;
            values[valuesById[77] = "BLUE_MSG_BSP_FB_TO_SELF_FB"] = 77;
            values[valuesById[78] = "BLUE_MSG_BSP_FB_TO_SELF_PREMISE"] = 78;
            values[valuesById[79] = "BLUE_MSG_BSP_FB_UNVERIFIED"] = 79;
            values[valuesById[80] = "BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED"] = 80;
            values[valuesById[81] = "BLUE_MSG_BSP_FB_VERIFIED"] = 81;
            values[valuesById[82] = "BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED"] = 82;
            values[valuesById[83] = "BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE"] = 83;
            values[valuesById[84] = "BLUE_MSG_BSP_PREMISE_UNVERIFIED"] = 84;
            values[valuesById[85] = "BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED"] = 85;
            values[valuesById[86] = "BLUE_MSG_BSP_PREMISE_VERIFIED"] = 86;
            values[valuesById[87] = "BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED"] = 87;
            values[valuesById[88] = "BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED"] = 88;
            values[valuesById[89] = "BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED"] = 89;
            values[valuesById[90] = "BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED"] = 90;
            values[valuesById[91] = "BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED"] = 91;
            values[valuesById[92] = "BLUE_MSG_SELF_FB_TO_BSP_PREMISE"] = 92;
            values[valuesById[93] = "BLUE_MSG_SELF_FB_TO_SELF_PREMISE"] = 93;
            values[valuesById[94] = "BLUE_MSG_SELF_FB_UNVERIFIED"] = 94;
            values[valuesById[95] = "BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED"] = 95;
            values[valuesById[96] = "BLUE_MSG_SELF_FB_VERIFIED"] = 96;
            values[valuesById[97] = "BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED"] = 97;
            values[valuesById[98] = "BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE"] = 98;
            values[valuesById[99] = "BLUE_MSG_SELF_PREMISE_UNVERIFIED"] = 99;
            values[valuesById[100] = "BLUE_MSG_SELF_PREMISE_VERIFIED"] = 100;
            values[valuesById[101] = "BLUE_MSG_TO_BSP_FB"] = 101;
            values[valuesById[102] = "BLUE_MSG_TO_CONSUMER"] = 102;
            values[valuesById[103] = "BLUE_MSG_TO_SELF_FB"] = 103;
            values[valuesById[104] = "BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED"] = 104;
            values[valuesById[105] = "BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED"] = 105;
            values[valuesById[106] = "BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED"] = 106;
            values[valuesById[107] = "BLUE_MSG_UNVERIFIED_TO_VERIFIED"] = 107;
            values[valuesById[108] = "BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED"] = 108;
            values[valuesById[109] = "BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED"] = 109;
            values[valuesById[110] = "BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED"] = 110;
            values[valuesById[111] = "BLUE_MSG_VERIFIED_TO_UNVERIFIED"] = 111;
            values[valuesById[112] = "BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED"] = 112;
            values[valuesById[113] = "BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED"] = 113;
            values[valuesById[114] = "BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED"] = 114;
            values[valuesById[115] = "BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED"] = 115;
            values[valuesById[116] = "BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED"] = 116;
            values[valuesById[117] = "BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED"] = 117;
            values[valuesById[118] = "E2E_IDENTITY_UNAVAILABLE"] = 118;
            values[valuesById[119] = "GROUP_CREATING"] = 119;
            values[valuesById[120] = "GROUP_CREATE_FAILED"] = 120;
            values[valuesById[121] = "GROUP_BOUNCED"] = 121;
            values[valuesById[122] = "BLOCK_CONTACT"] = 122;
            values[valuesById[123] = "EPHEMERAL_SETTING_NOT_APPLIED"] = 123;
            values[valuesById[124] = "SYNC_FAILED"] = 124;
            values[valuesById[125] = "SYNCING"] = 125;
            values[valuesById[126] = "BIZ_PRIVACY_MODE_INIT_FB"] = 126;
            values[valuesById[127] = "BIZ_PRIVACY_MODE_INIT_BSP"] = 127;
            values[valuesById[128] = "BIZ_PRIVACY_MODE_TO_FB"] = 128;
            values[valuesById[129] = "BIZ_PRIVACY_MODE_TO_BSP"] = 129;
            values[valuesById[130] = "DISAPPEARING_MODE"] = 130;
            values[valuesById[131] = "E2E_DEVICE_FETCH_FAILED"] = 131;
            values[valuesById[132] = "ADMIN_REVOKE"] = 132;
            values[valuesById[133] = "GROUP_INVITE_LINK_GROWTH_LOCKED"] = 133;
            values[valuesById[134] = "COMMUNITY_LINK_PARENT_GROUP"] = 134;
            values[valuesById[135] = "COMMUNITY_LINK_SIBLING_GROUP"] = 135;
            values[valuesById[136] = "COMMUNITY_LINK_SUB_GROUP"] = 136;
            values[valuesById[137] = "COMMUNITY_UNLINK_PARENT_GROUP"] = 137;
            values[valuesById[138] = "COMMUNITY_UNLINK_SIBLING_GROUP"] = 138;
            values[valuesById[139] = "COMMUNITY_UNLINK_SUB_GROUP"] = 139;
            values[valuesById[140] = "GROUP_PARTICIPANT_ACCEPT"] = 140;
            values[valuesById[141] = "GROUP_PARTICIPANT_LINKED_GROUP_JOIN"] = 141;
            values[valuesById[142] = "COMMUNITY_CREATE"] = 142;
            values[valuesById[143] = "EPHEMERAL_KEEP_IN_CHAT"] = 143;
            values[valuesById[144] = "GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST"] = 144;
            values[valuesById[145] = "GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE"] = 145;
            values[valuesById[146] = "INTEGRITY_UNLINK_PARENT_GROUP"] = 146;
            values[valuesById[147] = "COMMUNITY_PARTICIPANT_PROMOTE"] = 147;
            values[valuesById[148] = "COMMUNITY_PARTICIPANT_DEMOTE"] = 148;
            values[valuesById[149] = "COMMUNITY_PARENT_GROUP_DELETED"] = 149;
            values[valuesById[150] = "COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL"] = 150;
            values[valuesById[151] = "GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP"] = 151;
            values[valuesById[152] = "MASKED_THREAD_CREATED"] = 152;
            values[valuesById[153] = "MASKED_THREAD_UNMASKED"] = 153;
            values[valuesById[154] = "BIZ_CHAT_ASSIGNMENT"] = 154;
            values[valuesById[155] = "CHAT_PSA"] = 155;
            values[valuesById[156] = "CHAT_POLL_CREATION_MESSAGE"] = 156;
            values[valuesById[157] = "CAG_MASKED_THREAD_CREATED"] = 157;
            values[valuesById[158] = "COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED"] = 158;
            values[valuesById[159] = "CAG_INVITE_AUTO_ADD"] = 159;
            values[valuesById[160] = "BIZ_CHAT_ASSIGNMENT_UNASSIGN"] = 160;
            values[valuesById[161] = "CAG_INVITE_AUTO_JOINED"] = 161;
            values[valuesById[162] = "SCHEDULED_CALL_START_MESSAGE"] = 162;
            values[valuesById[163] = "COMMUNITY_INVITE_RICH"] = 163;
            values[valuesById[164] = "COMMUNITY_INVITE_AUTO_ADD_RICH"] = 164;
            values[valuesById[165] = "SUB_GROUP_INVITE_RICH"] = 165;
            values[valuesById[166] = "SUB_GROUP_PARTICIPANT_ADD_RICH"] = 166;
            values[valuesById[167] = "COMMUNITY_LINK_PARENT_GROUP_RICH"] = 167;
            values[valuesById[168] = "COMMUNITY_PARTICIPANT_ADD_RICH"] = 168;
            values[valuesById[169] = "SILENCED_UNKNOWN_CALLER_AUDIO"] = 169;
            values[valuesById[170] = "SILENCED_UNKNOWN_CALLER_VIDEO"] = 170;
            values[valuesById[171] = "GROUP_MEMBER_ADD_MODE"] = 171;
            values[valuesById[172] = "GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD"] = 172;
            values[valuesById[173] = "COMMUNITY_CHANGE_DESCRIPTION"] = 173;
            values[valuesById[174] = "SENDER_INVITE"] = 174;
            values[valuesById[175] = "RECEIVER_INVITE"] = 175;
            values[valuesById[176] = "COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS"] = 176;
            values[valuesById[177] = "PINNED_MESSAGE_IN_CHAT"] = 177;
            values[valuesById[178] = "PAYMENT_INVITE_SETUP_INVITER"] = 178;
            values[valuesById[179] = "PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY"] = 179;
            values[valuesById[180] = "PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE"] = 180;
            values[valuesById[181] = "LINKED_GROUP_CALL_START"] = 181;
            values[valuesById[182] = "REPORT_TO_ADMIN_ENABLED_STATUS"] = 182;
            values[valuesById[183] = "EMPTY_SUBGROUP_CREATE"] = 183;
            values[valuesById[184] = "SCHEDULED_CALL_CANCEL"] = 184;
            values[valuesById[185] = "SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH"] = 185;
            values[valuesById[186] = "GROUP_CHANGE_RECENT_HISTORY_SHARING"] = 186;
            values[valuesById[187] = "PAID_MESSAGE_SERVER_CAMPAIGN_ID"] = 187;
            values[valuesById[188] = "GENERAL_CHAT_CREATE"] = 188;
            values[valuesById[189] = "GENERAL_CHAT_ADD"] = 189;
            values[valuesById[190] = "GENERAL_CHAT_AUTO_ADD_DISABLED"] = 190;
            values[valuesById[191] = "SUGGESTED_SUBGROUP_ANNOUNCE"] = 191;
            values[valuesById[192] = "BIZ_BOT_1P_MESSAGING_ENABLED"] = 192;
            values[valuesById[193] = "CHANGE_USERNAME"] = 193;
            values[valuesById[194] = "BIZ_COEX_PRIVACY_INIT_SELF"] = 194;
            values[valuesById[195] = "BIZ_COEX_PRIVACY_TRANSITION_SELF"] = 195;
            values[valuesById[196] = "SUPPORT_AI_EDUCATION"] = 196;
            values[valuesById[197] = "BIZ_BOT_3P_MESSAGING_ENABLED"] = 197;
            values[valuesById[198] = "REMINDER_SETUP_MESSAGE"] = 198;
            values[valuesById[199] = "REMINDER_SENT_MESSAGE"] = 199;
            values[valuesById[200] = "REMINDER_CANCEL_MESSAGE"] = 200;
            values[valuesById[201] = "BIZ_COEX_PRIVACY_INIT"] = 201;
            values[valuesById[202] = "BIZ_COEX_PRIVACY_TRANSITION"] = 202;
            values[valuesById[203] = "GROUP_DEACTIVATED"] = 203;
            values[valuesById[204] = "COMMUNITY_DEACTIVATE_SIBLING_GROUP"] = 204;
            values[valuesById[205] = "EVENT_UPDATED"] = 205;
            values[valuesById[206] = "EVENT_CANCELED"] = 206;
            values[valuesById[207] = "COMMUNITY_OWNER_UPDATED"] = 207;
            values[valuesById[208] = "COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN"] = 208;
            values[valuesById[209] = "CAPI_GROUP_NE2EE_SYSTEM_MESSAGE"] = 209;
            values[valuesById[210] = "STATUS_MENTION"] = 210;
            values[valuesById[211] = "USER_CONTROLS_SYSTEM_MESSAGE"] = 211;
            values[valuesById[212] = "SUPPORT_SYSTEM_MESSAGE"] = 212;
            values[valuesById[213] = "CHANGE_LID"] = 213;
            values[valuesById[214] = "BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE"] = 214;
            values[valuesById[215] = "BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE"] = 215;
            values[valuesById[216] = "CHANGE_LIMIT_SHARING"] = 216;
            values[valuesById[217] = "GROUP_MEMBER_LINK_MODE"] = 217;
            values[valuesById[218] = "BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE"] = 218;
            values[valuesById[219] = "PHONE_NUMBER_HIDING_CHAT_DEPRECATED_MESSAGE"] = 219;
            values[valuesById[220] = "QUARANTINED_MESSAGE"] = 220;
            values[valuesById[221] = "GROUP_MEMBER_SHARE_GROUP_HISTORY_MODE"] = 221;
            return values;
        })();

        return WebMessageInfo;
    })();

    return proto;
})();

export { $root as default };
