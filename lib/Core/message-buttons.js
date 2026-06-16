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

    proto.ClientPayload = (function() {

        const ClientPayload = proto.ClientPayload || {};

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

        ClientPayload.IOSAppExtension = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SHARE_EXTENSION"] = 0;
            values[valuesById[1] = "SERVICE_EXTENSION"] = 1;
            values[valuesById[2] = "INTENTS_EXTENSION"] = 2;
            return values;
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

    proto.ContextInfo = proto.ContextInfo || createEmptyMessage("ContextInfo")

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

        Message.AudioMessage = (function() {

            function AudioMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AudioMessage.create = function create(properties) {
                return new AudioMessage(properties);
            };

            AudioMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            AudioMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.AudioMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AudioMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.AudioMessage)
                    return d;
                return new $root.proto.Message.AudioMessage();
            };

            AudioMessage.toObject = function toObject() {
                return {};
            };

            AudioMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AudioMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.AudioMessage";
            };

            return AudioMessage;
        })();

        Message.ButtonsMessage = (function() {

            function ButtonsMessage(p) {
                this.buttons = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ButtonsMessage.prototype.contentText = null;
            ButtonsMessage.prototype.footerText = null;
            ButtonsMessage.prototype.contextInfo = null;
            ButtonsMessage.prototype.buttons = $util.emptyArray;
            ButtonsMessage.prototype.headerType = null;
            ButtonsMessage.prototype.text = null;
            ButtonsMessage.prototype.documentMessage = null;
            ButtonsMessage.prototype.imageMessage = null;
            ButtonsMessage.prototype.videoMessage = null;
            ButtonsMessage.prototype.locationMessage = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ButtonsMessage.prototype, "_contentText", {
                get: $util.oneOfGetter($oneOfFields = ["contentText"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ButtonsMessage.prototype, "_footerText", {
                get: $util.oneOfGetter($oneOfFields = ["footerText"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ButtonsMessage.prototype, "_contextInfo", {
                get: $util.oneOfGetter($oneOfFields = ["contextInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ButtonsMessage.prototype, "_headerType", {
                get: $util.oneOfGetter($oneOfFields = ["headerType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Object.defineProperty(ButtonsMessage.prototype, "header", {
                get: $util.oneOfGetter($oneOfFields = ["text", "documentMessage", "imageMessage", "videoMessage", "locationMessage"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            ButtonsMessage.create = function create(properties) {
                return new ButtonsMessage(properties);
            };

            ButtonsMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.text != null && Object.hasOwnProperty.call(m, "text"))
                    w.uint32(10).string(m.text);
                if (m.documentMessage != null && Object.hasOwnProperty.call(m, "documentMessage"))
                    $root.proto.Message.DocumentMessage.encode(m.documentMessage, w.uint32(18).fork(), q + 1).ldelim();
                if (m.imageMessage != null && Object.hasOwnProperty.call(m, "imageMessage"))
                    $root.proto.Message.ImageMessage.encode(m.imageMessage, w.uint32(26).fork(), q + 1).ldelim();
                if (m.videoMessage != null && Object.hasOwnProperty.call(m, "videoMessage"))
                    $root.proto.Message.VideoMessage.encode(m.videoMessage, w.uint32(34).fork(), q + 1).ldelim();
                if (m.locationMessage != null && Object.hasOwnProperty.call(m, "locationMessage"))
                    $root.proto.Message.LocationMessage.encode(m.locationMessage, w.uint32(42).fork(), q + 1).ldelim();
                if (m.contentText != null && Object.hasOwnProperty.call(m, "contentText"))
                    w.uint32(50).string(m.contentText);
                if (m.footerText != null && Object.hasOwnProperty.call(m, "footerText"))
                    w.uint32(58).string(m.footerText);
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo"))
                    $root.proto.ContextInfo.encode(m.contextInfo, w.uint32(66).fork(), q + 1).ldelim();
                if (m.buttons != null && m.buttons.length) {
                    for (var i = 0; i < m.buttons.length; ++i)
                        $root.proto.Message.ButtonsMessage.Button.encode(m.buttons[i], w.uint32(74).fork(), q + 1).ldelim();
                }
                if (m.headerType != null && Object.hasOwnProperty.call(m, "headerType"))
                    w.uint32(80).int32(m.headerType);
                return w;
            };

            ButtonsMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ButtonsMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 6: {
                            m.contentText = r.string();
                            break;
                        }
                    case 7: {
                            m.footerText = r.string();
                            break;
                        }
                    case 8: {
                            m.contextInfo = $root.proto.ContextInfo.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 9: {
                            if (!(m.buttons && m.buttons.length))
                                m.buttons = [];
                            m.buttons.push($root.proto.Message.ButtonsMessage.Button.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    case 10: {
                            m.headerType = r.int32();
                            break;
                        }
                    case 1: {
                            m.text = r.string();
                            break;
                        }
                    case 2: {
                            m.documentMessage = $root.proto.Message.DocumentMessage.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 3: {
                            m.imageMessage = $root.proto.Message.ImageMessage.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 4: {
                            m.videoMessage = $root.proto.Message.VideoMessage.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 5: {
                            m.locationMessage = $root.proto.Message.LocationMessage.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ButtonsMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ButtonsMessage)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.Message.ButtonsMessage: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.Message.ButtonsMessage();
                if (d.contentText != null) {
                    m.contentText = String(d.contentText);
                }
                if (d.footerText != null) {
                    m.footerText = String(d.footerText);
                }
                if (d.contextInfo != null) {
                    if (!$util.isObject(d.contextInfo))
                        throw TypeError(".proto.Message.ButtonsMessage.contextInfo: object expected");
                    m.contextInfo = $root.proto.ContextInfo.fromObject(d.contextInfo, n + 1);
                }
                if (d.buttons) {
                    if (!Array.isArray(d.buttons))
                        throw TypeError(".proto.Message.ButtonsMessage.buttons: array expected");
                    m.buttons = [];
                    for (var i = 0; i < d.buttons.length; ++i) {
                        if (!$util.isObject(d.buttons[i]))
                            throw TypeError(".proto.Message.ButtonsMessage.buttons: object expected");
                        m.buttons[i] = $root.proto.Message.ButtonsMessage.Button.fromObject(d.buttons[i], n + 1);
                    }
                }
                switch (d.headerType) {
                default:
                    if (typeof d.headerType === "number") {
                        m.headerType = d.headerType;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    m.headerType = 0;
                    break;
                case "EMPTY":
                case 1:
                    m.headerType = 1;
                    break;
                case "TEXT":
                case 2:
                    m.headerType = 2;
                    break;
                case "DOCUMENT":
                case 3:
                    m.headerType = 3;
                    break;
                case "IMAGE":
                case 4:
                    m.headerType = 4;
                    break;
                case "VIDEO":
                case 5:
                    m.headerType = 5;
                    break;
                case "LOCATION":
                case 6:
                    m.headerType = 6;
                    break;
                }
                if (d.text != null) {
                    m.text = String(d.text);
                }
                if (d.documentMessage != null) {
                    if (!$util.isObject(d.documentMessage))
                        throw TypeError(".proto.Message.ButtonsMessage.documentMessage: object expected");
                    m.documentMessage = $root.proto.Message.DocumentMessage.fromObject(d.documentMessage, n + 1);
                }
                if (d.imageMessage != null) {
                    if (!$util.isObject(d.imageMessage))
                        throw TypeError(".proto.Message.ButtonsMessage.imageMessage: object expected");
                    m.imageMessage = $root.proto.Message.ImageMessage.fromObject(d.imageMessage, n + 1);
                }
                if (d.videoMessage != null) {
                    if (!$util.isObject(d.videoMessage))
                        throw TypeError(".proto.Message.ButtonsMessage.videoMessage: object expected");
                    m.videoMessage = $root.proto.Message.VideoMessage.fromObject(d.videoMessage, n + 1);
                }
                if (d.locationMessage != null) {
                    if (!$util.isObject(d.locationMessage))
                        throw TypeError(".proto.Message.ButtonsMessage.locationMessage: object expected");
                    m.locationMessage = $root.proto.Message.LocationMessage.fromObject(d.locationMessage, n + 1);
                }
                return m;
            };

            ButtonsMessage.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (o.arrays || o.defaults) {
                    d.buttons = [];
                }
                if (m.text != null && Object.hasOwnProperty.call(m, "text")) {
                    d.text = m.text;
                    if (o.oneofs)
                        d.header = "text";
                }
                if (m.documentMessage != null && Object.hasOwnProperty.call(m, "documentMessage")) {
                    d.documentMessage = $root.proto.Message.DocumentMessage.toObject(m.documentMessage, o, q + 1);
                    if (o.oneofs)
                        d.header = "documentMessage";
                }
                if (m.imageMessage != null && Object.hasOwnProperty.call(m, "imageMessage")) {
                    d.imageMessage = $root.proto.Message.ImageMessage.toObject(m.imageMessage, o, q + 1);
                    if (o.oneofs)
                        d.header = "imageMessage";
                }
                if (m.videoMessage != null && Object.hasOwnProperty.call(m, "videoMessage")) {
                    d.videoMessage = $root.proto.Message.VideoMessage.toObject(m.videoMessage, o, q + 1);
                    if (o.oneofs)
                        d.header = "videoMessage";
                }
                if (m.locationMessage != null && Object.hasOwnProperty.call(m, "locationMessage")) {
                    d.locationMessage = $root.proto.Message.LocationMessage.toObject(m.locationMessage, o, q + 1);
                    if (o.oneofs)
                        d.header = "locationMessage";
                }
                if (m.contentText != null && Object.hasOwnProperty.call(m, "contentText")) {
                    d.contentText = m.contentText;
                    if (o.oneofs)
                        d._contentText = "contentText";
                }
                if (m.footerText != null && Object.hasOwnProperty.call(m, "footerText")) {
                    d.footerText = m.footerText;
                    if (o.oneofs)
                        d._footerText = "footerText";
                }
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo")) {
                    d.contextInfo = $root.proto.ContextInfo.toObject(m.contextInfo, o, q + 1);
                    if (o.oneofs)
                        d._contextInfo = "contextInfo";
                }
                if (m.buttons && m.buttons.length) {
                    d.buttons = [];
                    for (var j = 0; j < m.buttons.length; ++j) {
                        d.buttons[j] = $root.proto.Message.ButtonsMessage.Button.toObject(m.buttons[j], o, q + 1);
                    }
                }
                if (m.headerType != null && Object.hasOwnProperty.call(m, "headerType")) {
                    d.headerType = o.enums === String ? $root.proto.Message.ButtonsMessage.HeaderType[m.headerType] === undefined ? m.headerType : $root.proto.Message.ButtonsMessage.HeaderType[m.headerType] : m.headerType;
                    if (o.oneofs)
                        d._headerType = "headerType";
                }
                return d;
            };

            ButtonsMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ButtonsMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ButtonsMessage";
            };

            ButtonsMessage.Button = (function() {

                function Button(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Button.prototype.buttonId = null;
                Button.prototype.buttonText = null;
                Button.prototype.type = null;
                Button.prototype.nativeFlowInfo = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Button.prototype, "_buttonId", {
                    get: $util.oneOfGetter($oneOfFields = ["buttonId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Button.prototype, "_buttonText", {
                    get: $util.oneOfGetter($oneOfFields = ["buttonText"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Button.prototype, "_type", {
                    get: $util.oneOfGetter($oneOfFields = ["type"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Button.prototype, "_nativeFlowInfo", {
                    get: $util.oneOfGetter($oneOfFields = ["nativeFlowInfo"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Button.create = function create(properties) {
                    return new Button(properties);
                };

                Button.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.buttonId != null && Object.hasOwnProperty.call(m, "buttonId"))
                        w.uint32(10).string(m.buttonId);
                    if (m.buttonText != null && Object.hasOwnProperty.call(m, "buttonText"))
                        $root.proto.Message.ButtonsMessage.Button.ButtonText.encode(m.buttonText, w.uint32(18).fork(), q + 1).ldelim();
                    if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                        w.uint32(24).int32(m.type);
                    if (m.nativeFlowInfo != null && Object.hasOwnProperty.call(m, "nativeFlowInfo"))
                        $root.proto.Message.ButtonsMessage.Button.NativeFlowInfo.encode(m.nativeFlowInfo, w.uint32(34).fork(), q + 1).ldelim();
                    return w;
                };

                Button.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ButtonsMessage.Button();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.buttonId = r.string();
                                break;
                            }
                        case 2: {
                                m.buttonText = $root.proto.Message.ButtonsMessage.Button.ButtonText.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        case 3: {
                                m.type = r.int32();
                                break;
                            }
                        case 4: {
                                m.nativeFlowInfo = $root.proto.Message.ButtonsMessage.Button.NativeFlowInfo.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Button.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.ButtonsMessage.Button)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.ButtonsMessage.Button: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.ButtonsMessage.Button();
                    if (d.buttonId != null) {
                        m.buttonId = String(d.buttonId);
                    }
                    if (d.buttonText != null) {
                        if (!$util.isObject(d.buttonText))
                            throw TypeError(".proto.Message.ButtonsMessage.Button.buttonText: object expected");
                        m.buttonText = $root.proto.Message.ButtonsMessage.Button.ButtonText.fromObject(d.buttonText, n + 1);
                    }
                    switch (d.type) {
                    default:
                        if (typeof d.type === "number") {
                            m.type = d.type;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        m.type = 0;
                        break;
                    case "RESPONSE":
                    case 1:
                        m.type = 1;
                        break;
                    case "NATIVE_FLOW":
                    case 2:
                        m.type = 2;
                        break;
                    }
                    if (d.nativeFlowInfo != null) {
                        if (!$util.isObject(d.nativeFlowInfo))
                            throw TypeError(".proto.Message.ButtonsMessage.Button.nativeFlowInfo: object expected");
                        m.nativeFlowInfo = $root.proto.Message.ButtonsMessage.Button.NativeFlowInfo.fromObject(d.nativeFlowInfo, n + 1);
                    }
                    return m;
                };

                Button.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.buttonId != null && Object.hasOwnProperty.call(m, "buttonId")) {
                        d.buttonId = m.buttonId;
                        if (o.oneofs)
                            d._buttonId = "buttonId";
                    }
                    if (m.buttonText != null && Object.hasOwnProperty.call(m, "buttonText")) {
                        d.buttonText = $root.proto.Message.ButtonsMessage.Button.ButtonText.toObject(m.buttonText, o, q + 1);
                        if (o.oneofs)
                            d._buttonText = "buttonText";
                    }
                    if (m.type != null && Object.hasOwnProperty.call(m, "type")) {
                        d.type = o.enums === String ? $root.proto.Message.ButtonsMessage.Button.Type[m.type] === undefined ? m.type : $root.proto.Message.ButtonsMessage.Button.Type[m.type] : m.type;
                        if (o.oneofs)
                            d._type = "type";
                    }
                    if (m.nativeFlowInfo != null && Object.hasOwnProperty.call(m, "nativeFlowInfo")) {
                        d.nativeFlowInfo = $root.proto.Message.ButtonsMessage.Button.NativeFlowInfo.toObject(m.nativeFlowInfo, o, q + 1);
                        if (o.oneofs)
                            d._nativeFlowInfo = "nativeFlowInfo";
                    }
                    return d;
                };

                Button.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Button.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.ButtonsMessage.Button";
                };

                Button.ButtonText = (function() {

                    function ButtonText(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    ButtonText.prototype.displayText = null;

                    let $oneOfFields;

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(ButtonText.prototype, "_displayText", {
                        get: $util.oneOfGetter($oneOfFields = ["displayText"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    ButtonText.create = function create(properties) {
                        return new ButtonText(properties);
                    };

                    ButtonText.encode = function encode(m, w, q) {
                        if (!w)
                            w = $Writer.create();
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        if (m.displayText != null && Object.hasOwnProperty.call(m, "displayText"))
                            w.uint32(10).string(m.displayText);
                        return w;
                    };

                    ButtonText.decode = function decode(r, l, e, n) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (n === undefined)
                            n = 0;
                        if (n > $Reader.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ButtonsMessage.Button.ButtonText();
                        while (r.pos < c) {
                            var t = r.uint32();
                            if (t === e)
                                break;
                            switch (t >>> 3) {
                            case 1: {
                                    m.displayText = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7, n);
                                break;
                            }
                        }
                        return m;
                    };

                    ButtonText.fromObject = function fromObject(d, n) {
                        if (d instanceof $root.proto.Message.ButtonsMessage.Button.ButtonText)
                            return d;
                        if (!$util.isObject(d))
                            throw TypeError(".proto.Message.ButtonsMessage.Button.ButtonText: object expected");
                        if (n === undefined)
                            n = 0;
                        if (n > $util.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var m = new $root.proto.Message.ButtonsMessage.Button.ButtonText();
                        if (d.displayText != null) {
                            m.displayText = String(d.displayText);
                        }
                        return m;
                    };

                    ButtonText.toObject = function toObject(m, o, q) {
                        if (!o)
                            o = {};
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        var d = {};
                        if (m.displayText != null && Object.hasOwnProperty.call(m, "displayText")) {
                            d.displayText = m.displayText;
                            if (o.oneofs)
                                d._displayText = "displayText";
                        }
                        return d;
                    };

                    ButtonText.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    ButtonText.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/proto.Message.ButtonsMessage.Button.ButtonText";
                    };

                    return ButtonText;
                })();

                Button.NativeFlowInfo = (function() {

                    function NativeFlowInfo(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    NativeFlowInfo.prototype.name = null;
                    NativeFlowInfo.prototype.paramsJson = null;

                    let $oneOfFields;

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(NativeFlowInfo.prototype, "_name", {
                        get: $util.oneOfGetter($oneOfFields = ["name"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(NativeFlowInfo.prototype, "_paramsJson", {
                        get: $util.oneOfGetter($oneOfFields = ["paramsJson"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    NativeFlowInfo.create = function create(properties) {
                        return new NativeFlowInfo(properties);
                    };

                    NativeFlowInfo.encode = function encode(m, w, q) {
                        if (!w)
                            w = $Writer.create();
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                            w.uint32(10).string(m.name);
                        if (m.paramsJson != null && Object.hasOwnProperty.call(m, "paramsJson"))
                            w.uint32(18).string(m.paramsJson);
                        return w;
                    };

                    NativeFlowInfo.decode = function decode(r, l, e, n) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (n === undefined)
                            n = 0;
                        if (n > $Reader.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ButtonsMessage.Button.NativeFlowInfo();
                        while (r.pos < c) {
                            var t = r.uint32();
                            if (t === e)
                                break;
                            switch (t >>> 3) {
                            case 1: {
                                    m.name = r.string();
                                    break;
                                }
                            case 2: {
                                    m.paramsJson = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7, n);
                                break;
                            }
                        }
                        return m;
                    };

                    NativeFlowInfo.fromObject = function fromObject(d, n) {
                        if (d instanceof $root.proto.Message.ButtonsMessage.Button.NativeFlowInfo)
                            return d;
                        if (!$util.isObject(d))
                            throw TypeError(".proto.Message.ButtonsMessage.Button.NativeFlowInfo: object expected");
                        if (n === undefined)
                            n = 0;
                        if (n > $util.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var m = new $root.proto.Message.ButtonsMessage.Button.NativeFlowInfo();
                        if (d.name != null) {
                            m.name = String(d.name);
                        }
                        if (d.paramsJson != null) {
                            m.paramsJson = String(d.paramsJson);
                        }
                        return m;
                    };

                    NativeFlowInfo.toObject = function toObject(m, o, q) {
                        if (!o)
                            o = {};
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        var d = {};
                        if (m.name != null && Object.hasOwnProperty.call(m, "name")) {
                            d.name = m.name;
                            if (o.oneofs)
                                d._name = "name";
                        }
                        if (m.paramsJson != null && Object.hasOwnProperty.call(m, "paramsJson")) {
                            d.paramsJson = m.paramsJson;
                            if (o.oneofs)
                                d._paramsJson = "paramsJson";
                        }
                        return d;
                    };

                    NativeFlowInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    NativeFlowInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/proto.Message.ButtonsMessage.Button.NativeFlowInfo";
                    };

                    return NativeFlowInfo;
                })();

                Button.Type = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "RESPONSE"] = 1;
                    values[valuesById[2] = "NATIVE_FLOW"] = 2;
                    return values;
                })();

                return Button;
            })();

            ButtonsMessage.HeaderType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "EMPTY"] = 1;
                values[valuesById[2] = "TEXT"] = 2;
                values[valuesById[3] = "DOCUMENT"] = 3;
                values[valuesById[4] = "IMAGE"] = 4;
                values[valuesById[5] = "VIDEO"] = 5;
                values[valuesById[6] = "LOCATION"] = 6;
                return values;
            })();

            return ButtonsMessage;
        })();

        Message.ButtonsResponseMessage = (function() {

            function ButtonsResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ButtonsResponseMessage.prototype.selectedButtonId = null;
            ButtonsResponseMessage.prototype.contextInfo = null;
            ButtonsResponseMessage.prototype.type = null;
            ButtonsResponseMessage.prototype.selectedDisplayText = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ButtonsResponseMessage.prototype, "_selectedButtonId", {
                get: $util.oneOfGetter($oneOfFields = ["selectedButtonId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ButtonsResponseMessage.prototype, "_contextInfo", {
                get: $util.oneOfGetter($oneOfFields = ["contextInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ButtonsResponseMessage.prototype, "_type", {
                get: $util.oneOfGetter($oneOfFields = ["type"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Object.defineProperty(ButtonsResponseMessage.prototype, "response", {
                get: $util.oneOfGetter($oneOfFields = ["selectedDisplayText"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            ButtonsResponseMessage.create = function create(properties) {
                return new ButtonsResponseMessage(properties);
            };

            ButtonsResponseMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.selectedButtonId != null && Object.hasOwnProperty.call(m, "selectedButtonId"))
                    w.uint32(10).string(m.selectedButtonId);
                if (m.selectedDisplayText != null && Object.hasOwnProperty.call(m, "selectedDisplayText"))
                    w.uint32(18).string(m.selectedDisplayText);
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo"))
                    $root.proto.ContextInfo.encode(m.contextInfo, w.uint32(26).fork(), q + 1).ldelim();
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(32).int32(m.type);
                return w;
            };

            ButtonsResponseMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ButtonsResponseMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.selectedButtonId = r.string();
                            break;
                        }
                    case 3: {
                            m.contextInfo = $root.proto.ContextInfo.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 4: {
                            m.type = r.int32();
                            break;
                        }
                    case 2: {
                            m.selectedDisplayText = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ButtonsResponseMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ButtonsResponseMessage)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.Message.ButtonsResponseMessage: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.Message.ButtonsResponseMessage();
                if (d.selectedButtonId != null) {
                    m.selectedButtonId = String(d.selectedButtonId);
                }
                if (d.contextInfo != null) {
                    if (!$util.isObject(d.contextInfo))
                        throw TypeError(".proto.Message.ButtonsResponseMessage.contextInfo: object expected");
                    m.contextInfo = $root.proto.ContextInfo.fromObject(d.contextInfo, n + 1);
                }
                switch (d.type) {
                default:
                    if (typeof d.type === "number") {
                        m.type = d.type;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    m.type = 0;
                    break;
                case "DISPLAY_TEXT":
                case 1:
                    m.type = 1;
                    break;
                }
                if (d.selectedDisplayText != null) {
                    m.selectedDisplayText = String(d.selectedDisplayText);
                }
                return m;
            };

            ButtonsResponseMessage.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.selectedButtonId != null && Object.hasOwnProperty.call(m, "selectedButtonId")) {
                    d.selectedButtonId = m.selectedButtonId;
                    if (o.oneofs)
                        d._selectedButtonId = "selectedButtonId";
                }
                if (m.selectedDisplayText != null && Object.hasOwnProperty.call(m, "selectedDisplayText")) {
                    d.selectedDisplayText = m.selectedDisplayText;
                    if (o.oneofs)
                        d.response = "selectedDisplayText";
                }
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo")) {
                    d.contextInfo = $root.proto.ContextInfo.toObject(m.contextInfo, o, q + 1);
                    if (o.oneofs)
                        d._contextInfo = "contextInfo";
                }
                if (m.type != null && Object.hasOwnProperty.call(m, "type")) {
                    d.type = o.enums === String ? $root.proto.Message.ButtonsResponseMessage.Type[m.type] === undefined ? m.type : $root.proto.Message.ButtonsResponseMessage.Type[m.type] : m.type;
                    if (o.oneofs)
                        d._type = "type";
                }
                return d;
            };

            ButtonsResponseMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ButtonsResponseMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ButtonsResponseMessage";
            };

            ButtonsResponseMessage.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "DISPLAY_TEXT"] = 1;
                return values;
            })();

            return ButtonsResponseMessage;
        })();

        Message.DocumentMessage = (function() {

            function DocumentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DocumentMessage.create = function create(properties) {
                return new DocumentMessage(properties);
            };

            DocumentMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            DocumentMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.DocumentMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            DocumentMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.DocumentMessage)
                    return d;
                return new $root.proto.Message.DocumentMessage();
            };

            DocumentMessage.toObject = function toObject() {
                return {};
            };

            DocumentMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DocumentMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.DocumentMessage";
            };

            return DocumentMessage;
        })();

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

        Message.ImageMessage = (function() {

            function ImageMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ImageMessage.create = function create(properties) {
                return new ImageMessage(properties);
            };

            ImageMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            ImageMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ImageMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ImageMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ImageMessage)
                    return d;
                return new $root.proto.Message.ImageMessage();
            };

            ImageMessage.toObject = function toObject() {
                return {};
            };

            ImageMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ImageMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ImageMessage";
            };

            ImageMessage.ImageSourceType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "USER_IMAGE"] = 0;
                values[valuesById[1] = "AI_GENERATED"] = 1;
                values[valuesById[2] = "AI_MODIFIED"] = 2;
                values[valuesById[3] = "RASTERIZED_TEXT_STATUS"] = 3;
                return values;
            })();

            return ImageMessage;
        })();

        Message.InteractiveMessage = (function() {

            function InteractiveMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InteractiveMessage.prototype.header = null;
            InteractiveMessage.prototype.body = null;
            InteractiveMessage.prototype.footer = null;
            InteractiveMessage.prototype.contextInfo = null;
            InteractiveMessage.prototype.urlTrackingMap = null;
            InteractiveMessage.prototype.shopStorefrontMessage = null;
            InteractiveMessage.prototype.collectionMessage = null;
            InteractiveMessage.prototype.nativeFlowMessage = null;
            InteractiveMessage.prototype.carouselMessage = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteractiveMessage.prototype, "_header", {
                get: $util.oneOfGetter($oneOfFields = ["header"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteractiveMessage.prototype, "_body", {
                get: $util.oneOfGetter($oneOfFields = ["body"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteractiveMessage.prototype, "_footer", {
                get: $util.oneOfGetter($oneOfFields = ["footer"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteractiveMessage.prototype, "_contextInfo", {
                get: $util.oneOfGetter($oneOfFields = ["contextInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteractiveMessage.prototype, "_urlTrackingMap", {
                get: $util.oneOfGetter($oneOfFields = ["urlTrackingMap"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Object.defineProperty(InteractiveMessage.prototype, "interactiveMessage", {
                get: $util.oneOfGetter($oneOfFields = ["shopStorefrontMessage", "collectionMessage", "nativeFlowMessage", "carouselMessage"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            InteractiveMessage.create = function create(properties) {
                return new InteractiveMessage(properties);
            };

            InteractiveMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.proto.Message.InteractiveMessage.Header.encode(m.header, w.uint32(10).fork(), q + 1).ldelim();
                if (m.body != null && Object.hasOwnProperty.call(m, "body"))
                    $root.proto.Message.InteractiveMessage.Body.encode(m.body, w.uint32(18).fork(), q + 1).ldelim();
                if (m.footer != null && Object.hasOwnProperty.call(m, "footer"))
                    $root.proto.Message.InteractiveMessage.Footer.encode(m.footer, w.uint32(26).fork(), q + 1).ldelim();
                if (m.shopStorefrontMessage != null && Object.hasOwnProperty.call(m, "shopStorefrontMessage"))
                    $root.proto.Message.InteractiveMessage.ShopMessage.encode(m.shopStorefrontMessage, w.uint32(34).fork(), q + 1).ldelim();
                if (m.collectionMessage != null && Object.hasOwnProperty.call(m, "collectionMessage"))
                    $root.proto.Message.InteractiveMessage.CollectionMessage.encode(m.collectionMessage, w.uint32(42).fork(), q + 1).ldelim();
                if (m.nativeFlowMessage != null && Object.hasOwnProperty.call(m, "nativeFlowMessage"))
                    $root.proto.Message.InteractiveMessage.NativeFlowMessage.encode(m.nativeFlowMessage, w.uint32(50).fork(), q + 1).ldelim();
                if (m.carouselMessage != null && Object.hasOwnProperty.call(m, "carouselMessage"))
                    $root.proto.Message.InteractiveMessage.CarouselMessage.encode(m.carouselMessage, w.uint32(58).fork(), q + 1).ldelim();
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo"))
                    $root.proto.ContextInfo.encode(m.contextInfo, w.uint32(122).fork(), q + 1).ldelim();
                if (m.urlTrackingMap != null && Object.hasOwnProperty.call(m, "urlTrackingMap"))
                    $root.proto.UrlTrackingMap.encode(m.urlTrackingMap, w.uint32(130).fork(), q + 1).ldelim();
                return w;
            };

            InteractiveMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InteractiveMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.proto.Message.InteractiveMessage.Header.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 2: {
                            m.body = $root.proto.Message.InteractiveMessage.Body.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 3: {
                            m.footer = $root.proto.Message.InteractiveMessage.Footer.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 15: {
                            m.contextInfo = $root.proto.ContextInfo.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 16: {
                            m.urlTrackingMap = $root.proto.UrlTrackingMap.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 4: {
                            m.shopStorefrontMessage = $root.proto.Message.InteractiveMessage.ShopMessage.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 5: {
                            m.collectionMessage = $root.proto.Message.InteractiveMessage.CollectionMessage.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 6: {
                            m.nativeFlowMessage = $root.proto.Message.InteractiveMessage.NativeFlowMessage.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 7: {
                            m.carouselMessage = $root.proto.Message.InteractiveMessage.CarouselMessage.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            InteractiveMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.InteractiveMessage)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.Message.InteractiveMessage: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.Message.InteractiveMessage();
                if (d.header != null) {
                    if (!$util.isObject(d.header))
                        throw TypeError(".proto.Message.InteractiveMessage.header: object expected");
                    m.header = $root.proto.Message.InteractiveMessage.Header.fromObject(d.header, n + 1);
                }
                if (d.body != null) {
                    if (!$util.isObject(d.body))
                        throw TypeError(".proto.Message.InteractiveMessage.body: object expected");
                    m.body = $root.proto.Message.InteractiveMessage.Body.fromObject(d.body, n + 1);
                }
                if (d.footer != null) {
                    if (!$util.isObject(d.footer))
                        throw TypeError(".proto.Message.InteractiveMessage.footer: object expected");
                    m.footer = $root.proto.Message.InteractiveMessage.Footer.fromObject(d.footer, n + 1);
                }
                if (d.contextInfo != null) {
                    if (!$util.isObject(d.contextInfo))
                        throw TypeError(".proto.Message.InteractiveMessage.contextInfo: object expected");
                    m.contextInfo = $root.proto.ContextInfo.fromObject(d.contextInfo, n + 1);
                }
                if (d.urlTrackingMap != null) {
                    if (!$util.isObject(d.urlTrackingMap))
                        throw TypeError(".proto.Message.InteractiveMessage.urlTrackingMap: object expected");
                    m.urlTrackingMap = $root.proto.UrlTrackingMap.fromObject(d.urlTrackingMap, n + 1);
                }
                if (d.shopStorefrontMessage != null) {
                    if (!$util.isObject(d.shopStorefrontMessage))
                        throw TypeError(".proto.Message.InteractiveMessage.shopStorefrontMessage: object expected");
                    m.shopStorefrontMessage = $root.proto.Message.InteractiveMessage.ShopMessage.fromObject(d.shopStorefrontMessage, n + 1);
                }
                if (d.collectionMessage != null) {
                    if (!$util.isObject(d.collectionMessage))
                        throw TypeError(".proto.Message.InteractiveMessage.collectionMessage: object expected");
                    m.collectionMessage = $root.proto.Message.InteractiveMessage.CollectionMessage.fromObject(d.collectionMessage, n + 1);
                }
                if (d.nativeFlowMessage != null) {
                    if (!$util.isObject(d.nativeFlowMessage))
                        throw TypeError(".proto.Message.InteractiveMessage.nativeFlowMessage: object expected");
                    m.nativeFlowMessage = $root.proto.Message.InteractiveMessage.NativeFlowMessage.fromObject(d.nativeFlowMessage, n + 1);
                }
                if (d.carouselMessage != null) {
                    if (!$util.isObject(d.carouselMessage))
                        throw TypeError(".proto.Message.InteractiveMessage.carouselMessage: object expected");
                    m.carouselMessage = $root.proto.Message.InteractiveMessage.CarouselMessage.fromObject(d.carouselMessage, n + 1);
                }
                return m;
            };

            InteractiveMessage.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.header != null && Object.hasOwnProperty.call(m, "header")) {
                    d.header = $root.proto.Message.InteractiveMessage.Header.toObject(m.header, o, q + 1);
                    if (o.oneofs)
                        d._header = "header";
                }
                if (m.body != null && Object.hasOwnProperty.call(m, "body")) {
                    d.body = $root.proto.Message.InteractiveMessage.Body.toObject(m.body, o, q + 1);
                    if (o.oneofs)
                        d._body = "body";
                }
                if (m.footer != null && Object.hasOwnProperty.call(m, "footer")) {
                    d.footer = $root.proto.Message.InteractiveMessage.Footer.toObject(m.footer, o, q + 1);
                    if (o.oneofs)
                        d._footer = "footer";
                }
                if (m.shopStorefrontMessage != null && Object.hasOwnProperty.call(m, "shopStorefrontMessage")) {
                    d.shopStorefrontMessage = $root.proto.Message.InteractiveMessage.ShopMessage.toObject(m.shopStorefrontMessage, o, q + 1);
                    if (o.oneofs)
                        d.interactiveMessage = "shopStorefrontMessage";
                }
                if (m.collectionMessage != null && Object.hasOwnProperty.call(m, "collectionMessage")) {
                    d.collectionMessage = $root.proto.Message.InteractiveMessage.CollectionMessage.toObject(m.collectionMessage, o, q + 1);
                    if (o.oneofs)
                        d.interactiveMessage = "collectionMessage";
                }
                if (m.nativeFlowMessage != null && Object.hasOwnProperty.call(m, "nativeFlowMessage")) {
                    d.nativeFlowMessage = $root.proto.Message.InteractiveMessage.NativeFlowMessage.toObject(m.nativeFlowMessage, o, q + 1);
                    if (o.oneofs)
                        d.interactiveMessage = "nativeFlowMessage";
                }
                if (m.carouselMessage != null && Object.hasOwnProperty.call(m, "carouselMessage")) {
                    d.carouselMessage = $root.proto.Message.InteractiveMessage.CarouselMessage.toObject(m.carouselMessage, o, q + 1);
                    if (o.oneofs)
                        d.interactiveMessage = "carouselMessage";
                }
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo")) {
                    d.contextInfo = $root.proto.ContextInfo.toObject(m.contextInfo, o, q + 1);
                    if (o.oneofs)
                        d._contextInfo = "contextInfo";
                }
                if (m.urlTrackingMap != null && Object.hasOwnProperty.call(m, "urlTrackingMap")) {
                    d.urlTrackingMap = $root.proto.UrlTrackingMap.toObject(m.urlTrackingMap, o, q + 1);
                    if (o.oneofs)
                        d._urlTrackingMap = "urlTrackingMap";
                }
                return d;
            };

            InteractiveMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InteractiveMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.InteractiveMessage";
            };

            InteractiveMessage.Body = (function() {

                function Body(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Body.prototype.text = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Body.prototype, "_text", {
                    get: $util.oneOfGetter($oneOfFields = ["text"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Body.create = function create(properties) {
                    return new Body(properties);
                };

                Body.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.text != null && Object.hasOwnProperty.call(m, "text"))
                        w.uint32(10).string(m.text);
                    return w;
                };

                Body.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InteractiveMessage.Body();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.text = r.string();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Body.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.InteractiveMessage.Body)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.InteractiveMessage.Body: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.InteractiveMessage.Body();
                    if (d.text != null) {
                        m.text = String(d.text);
                    }
                    return m;
                };

                Body.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.text != null && Object.hasOwnProperty.call(m, "text")) {
                        d.text = m.text;
                        if (o.oneofs)
                            d._text = "text";
                    }
                    return d;
                };

                Body.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Body.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.InteractiveMessage.Body";
                };

                return Body;
            })();

            InteractiveMessage.CarouselMessage = (function() {

                function CarouselMessage(p) {
                    this.cards = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                CarouselMessage.prototype.cards = $util.emptyArray;
                CarouselMessage.prototype.messageVersion = null;
                CarouselMessage.prototype.carouselCardType = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CarouselMessage.prototype, "_messageVersion", {
                    get: $util.oneOfGetter($oneOfFields = ["messageVersion"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CarouselMessage.prototype, "_carouselCardType", {
                    get: $util.oneOfGetter($oneOfFields = ["carouselCardType"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                CarouselMessage.create = function create(properties) {
                    return new CarouselMessage(properties);
                };

                CarouselMessage.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.cards != null && m.cards.length) {
                        for (var i = 0; i < m.cards.length; ++i)
                            $root.proto.Message.InteractiveMessage.encode(m.cards[i], w.uint32(10).fork(), q + 1).ldelim();
                    }
                    if (m.messageVersion != null && Object.hasOwnProperty.call(m, "messageVersion"))
                        w.uint32(16).int32(m.messageVersion);
                    if (m.carouselCardType != null && Object.hasOwnProperty.call(m, "carouselCardType"))
                        w.uint32(24).int32(m.carouselCardType);
                    return w;
                };

                CarouselMessage.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InteractiveMessage.CarouselMessage();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                if (!(m.cards && m.cards.length))
                                    m.cards = [];
                                m.cards.push($root.proto.Message.InteractiveMessage.decode(r, r.uint32(), undefined, n + 1));
                                break;
                            }
                        case 2: {
                                m.messageVersion = r.int32();
                                break;
                            }
                        case 3: {
                                m.carouselCardType = r.int32();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                CarouselMessage.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.InteractiveMessage.CarouselMessage)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.InteractiveMessage.CarouselMessage: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.InteractiveMessage.CarouselMessage();
                    if (d.cards) {
                        if (!Array.isArray(d.cards))
                            throw TypeError(".proto.Message.InteractiveMessage.CarouselMessage.cards: array expected");
                        m.cards = [];
                        for (var i = 0; i < d.cards.length; ++i) {
                            if (!$util.isObject(d.cards[i]))
                                throw TypeError(".proto.Message.InteractiveMessage.CarouselMessage.cards: object expected");
                            m.cards[i] = $root.proto.Message.InteractiveMessage.fromObject(d.cards[i], n + 1);
                        }
                    }
                    if (d.messageVersion != null) {
                        m.messageVersion = d.messageVersion | 0;
                    }
                    switch (d.carouselCardType) {
                    default:
                        if (typeof d.carouselCardType === "number") {
                            m.carouselCardType = d.carouselCardType;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        m.carouselCardType = 0;
                        break;
                    case "HSCROLL_CARDS":
                    case 1:
                        m.carouselCardType = 1;
                        break;
                    case "ALBUM_IMAGE":
                    case 2:
                        m.carouselCardType = 2;
                        break;
                    }
                    return m;
                };

                CarouselMessage.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (o.arrays || o.defaults) {
                        d.cards = [];
                    }
                    if (m.cards && m.cards.length) {
                        d.cards = [];
                        for (var j = 0; j < m.cards.length; ++j) {
                            d.cards[j] = $root.proto.Message.InteractiveMessage.toObject(m.cards[j], o, q + 1);
                        }
                    }
                    if (m.messageVersion != null && Object.hasOwnProperty.call(m, "messageVersion")) {
                        d.messageVersion = m.messageVersion;
                        if (o.oneofs)
                            d._messageVersion = "messageVersion";
                    }
                    if (m.carouselCardType != null && Object.hasOwnProperty.call(m, "carouselCardType")) {
                        d.carouselCardType = o.enums === String ? $root.proto.Message.InteractiveMessage.CarouselMessage.CarouselCardType[m.carouselCardType] === undefined ? m.carouselCardType : $root.proto.Message.InteractiveMessage.CarouselMessage.CarouselCardType[m.carouselCardType] : m.carouselCardType;
                        if (o.oneofs)
                            d._carouselCardType = "carouselCardType";
                    }
                    return d;
                };

                CarouselMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                CarouselMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.InteractiveMessage.CarouselMessage";
                };

                CarouselMessage.CarouselCardType = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "HSCROLL_CARDS"] = 1;
                    values[valuesById[2] = "ALBUM_IMAGE"] = 2;
                    return values;
                })();

                return CarouselMessage;
            })();

            InteractiveMessage.CollectionMessage = (function() {

                function CollectionMessage(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                CollectionMessage.prototype.bizJid = null;
                CollectionMessage.prototype.id = null;
                CollectionMessage.prototype.messageVersion = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CollectionMessage.prototype, "_bizJid", {
                    get: $util.oneOfGetter($oneOfFields = ["bizJid"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CollectionMessage.prototype, "_id", {
                    get: $util.oneOfGetter($oneOfFields = ["id"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CollectionMessage.prototype, "_messageVersion", {
                    get: $util.oneOfGetter($oneOfFields = ["messageVersion"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                CollectionMessage.create = function create(properties) {
                    return new CollectionMessage(properties);
                };

                CollectionMessage.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.bizJid != null && Object.hasOwnProperty.call(m, "bizJid"))
                        w.uint32(10).string(m.bizJid);
                    if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                        w.uint32(18).string(m.id);
                    if (m.messageVersion != null && Object.hasOwnProperty.call(m, "messageVersion"))
                        w.uint32(24).int32(m.messageVersion);
                    return w;
                };

                CollectionMessage.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InteractiveMessage.CollectionMessage();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.bizJid = r.string();
                                break;
                            }
                        case 2: {
                                m.id = r.string();
                                break;
                            }
                        case 3: {
                                m.messageVersion = r.int32();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                CollectionMessage.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.InteractiveMessage.CollectionMessage)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.InteractiveMessage.CollectionMessage: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.InteractiveMessage.CollectionMessage();
                    if (d.bizJid != null) {
                        m.bizJid = String(d.bizJid);
                    }
                    if (d.id != null) {
                        m.id = String(d.id);
                    }
                    if (d.messageVersion != null) {
                        m.messageVersion = d.messageVersion | 0;
                    }
                    return m;
                };

                CollectionMessage.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.bizJid != null && Object.hasOwnProperty.call(m, "bizJid")) {
                        d.bizJid = m.bizJid;
                        if (o.oneofs)
                            d._bizJid = "bizJid";
                    }
                    if (m.id != null && Object.hasOwnProperty.call(m, "id")) {
                        d.id = m.id;
                        if (o.oneofs)
                            d._id = "id";
                    }
                    if (m.messageVersion != null && Object.hasOwnProperty.call(m, "messageVersion")) {
                        d.messageVersion = m.messageVersion;
                        if (o.oneofs)
                            d._messageVersion = "messageVersion";
                    }
                    return d;
                };

                CollectionMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                CollectionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.InteractiveMessage.CollectionMessage";
                };

                return CollectionMessage;
            })();

            InteractiveMessage.Footer = (function() {

                function Footer(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Footer.prototype.text = null;
                Footer.prototype.hasMediaAttachment = null;
                Footer.prototype.audioMessage = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Footer.prototype, "_text", {
                    get: $util.oneOfGetter($oneOfFields = ["text"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Footer.prototype, "_hasMediaAttachment", {
                    get: $util.oneOfGetter($oneOfFields = ["hasMediaAttachment"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Object.defineProperty(Footer.prototype, "media", {
                    get: $util.oneOfGetter($oneOfFields = ["audioMessage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Footer.create = function create(properties) {
                    return new Footer(properties);
                };

                Footer.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.text != null && Object.hasOwnProperty.call(m, "text"))
                        w.uint32(10).string(m.text);
                    if (m.audioMessage != null && Object.hasOwnProperty.call(m, "audioMessage"))
                        $root.proto.Message.AudioMessage.encode(m.audioMessage, w.uint32(18).fork(), q + 1).ldelim();
                    if (m.hasMediaAttachment != null && Object.hasOwnProperty.call(m, "hasMediaAttachment"))
                        w.uint32(24).bool(m.hasMediaAttachment);
                    return w;
                };

                Footer.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InteractiveMessage.Footer();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.text = r.string();
                                break;
                            }
                        case 3: {
                                m.hasMediaAttachment = r.bool();
                                break;
                            }
                        case 2: {
                                m.audioMessage = $root.proto.Message.AudioMessage.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Footer.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.InteractiveMessage.Footer)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.InteractiveMessage.Footer: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.InteractiveMessage.Footer();
                    if (d.text != null) {
                        m.text = String(d.text);
                    }
                    if (d.hasMediaAttachment != null) {
                        m.hasMediaAttachment = Boolean(d.hasMediaAttachment);
                    }
                    if (d.audioMessage != null) {
                        if (!$util.isObject(d.audioMessage))
                            throw TypeError(".proto.Message.InteractiveMessage.Footer.audioMessage: object expected");
                        m.audioMessage = $root.proto.Message.AudioMessage.fromObject(d.audioMessage, n + 1);
                    }
                    return m;
                };

                Footer.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.text != null && Object.hasOwnProperty.call(m, "text")) {
                        d.text = m.text;
                        if (o.oneofs)
                            d._text = "text";
                    }
                    if (m.audioMessage != null && Object.hasOwnProperty.call(m, "audioMessage")) {
                        d.audioMessage = $root.proto.Message.AudioMessage.toObject(m.audioMessage, o, q + 1);
                        if (o.oneofs)
                            d.media = "audioMessage";
                    }
                    if (m.hasMediaAttachment != null && Object.hasOwnProperty.call(m, "hasMediaAttachment")) {
                        d.hasMediaAttachment = m.hasMediaAttachment;
                        if (o.oneofs)
                            d._hasMediaAttachment = "hasMediaAttachment";
                    }
                    return d;
                };

                Footer.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Footer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.InteractiveMessage.Footer";
                };

                return Footer;
            })();

            InteractiveMessage.Header = (function() {

                function Header(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Header.prototype.title = null;
                Header.prototype.subtitle = null;
                Header.prototype.hasMediaAttachment = null;
                Header.prototype.documentMessage = null;
                Header.prototype.imageMessage = null;
                Header.prototype.jpegThumbnail = null;
                Header.prototype.videoMessage = null;
                Header.prototype.locationMessage = null;
                Header.prototype.productMessage = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Header.prototype, "_title", {
                    get: $util.oneOfGetter($oneOfFields = ["title"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Header.prototype, "_subtitle", {
                    get: $util.oneOfGetter($oneOfFields = ["subtitle"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Header.prototype, "_hasMediaAttachment", {
                    get: $util.oneOfGetter($oneOfFields = ["hasMediaAttachment"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Object.defineProperty(Header.prototype, "media", {
                    get: $util.oneOfGetter($oneOfFields = ["documentMessage", "imageMessage", "jpegThumbnail", "videoMessage", "locationMessage", "productMessage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Header.create = function create(properties) {
                    return new Header(properties);
                };

                Header.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                        w.uint32(10).string(m.title);
                    if (m.subtitle != null && Object.hasOwnProperty.call(m, "subtitle"))
                        w.uint32(18).string(m.subtitle);
                    if (m.documentMessage != null && Object.hasOwnProperty.call(m, "documentMessage"))
                        $root.proto.Message.DocumentMessage.encode(m.documentMessage, w.uint32(26).fork(), q + 1).ldelim();
                    if (m.imageMessage != null && Object.hasOwnProperty.call(m, "imageMessage"))
                        $root.proto.Message.ImageMessage.encode(m.imageMessage, w.uint32(34).fork(), q + 1).ldelim();
                    if (m.hasMediaAttachment != null && Object.hasOwnProperty.call(m, "hasMediaAttachment"))
                        w.uint32(40).bool(m.hasMediaAttachment);
                    if (m.jpegThumbnail != null && Object.hasOwnProperty.call(m, "jpegThumbnail"))
                        w.uint32(50).bytes(m.jpegThumbnail);
                    if (m.videoMessage != null && Object.hasOwnProperty.call(m, "videoMessage"))
                        $root.proto.Message.VideoMessage.encode(m.videoMessage, w.uint32(58).fork(), q + 1).ldelim();
                    if (m.locationMessage != null && Object.hasOwnProperty.call(m, "locationMessage"))
                        $root.proto.Message.LocationMessage.encode(m.locationMessage, w.uint32(66).fork(), q + 1).ldelim();
                    if (m.productMessage != null && Object.hasOwnProperty.call(m, "productMessage"))
                        $root.proto.Message.ProductMessage.encode(m.productMessage, w.uint32(74).fork(), q + 1).ldelim();
                    return w;
                };

                Header.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InteractiveMessage.Header();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.title = r.string();
                                break;
                            }
                        case 2: {
                                m.subtitle = r.string();
                                break;
                            }
                        case 5: {
                                m.hasMediaAttachment = r.bool();
                                break;
                            }
                        case 3: {
                                m.documentMessage = $root.proto.Message.DocumentMessage.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        case 4: {
                                m.imageMessage = $root.proto.Message.ImageMessage.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        case 6: {
                                m.jpegThumbnail = r.bytes();
                                break;
                            }
                        case 7: {
                                m.videoMessage = $root.proto.Message.VideoMessage.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        case 8: {
                                m.locationMessage = $root.proto.Message.LocationMessage.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        case 9: {
                                m.productMessage = $root.proto.Message.ProductMessage.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Header.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.InteractiveMessage.Header)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.InteractiveMessage.Header: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.InteractiveMessage.Header();
                    if (d.title != null) {
                        m.title = String(d.title);
                    }
                    if (d.subtitle != null) {
                        m.subtitle = String(d.subtitle);
                    }
                    if (d.hasMediaAttachment != null) {
                        m.hasMediaAttachment = Boolean(d.hasMediaAttachment);
                    }
                    if (d.documentMessage != null) {
                        if (!$util.isObject(d.documentMessage))
                            throw TypeError(".proto.Message.InteractiveMessage.Header.documentMessage: object expected");
                        m.documentMessage = $root.proto.Message.DocumentMessage.fromObject(d.documentMessage, n + 1);
                    }
                    if (d.imageMessage != null) {
                        if (!$util.isObject(d.imageMessage))
                            throw TypeError(".proto.Message.InteractiveMessage.Header.imageMessage: object expected");
                        m.imageMessage = $root.proto.Message.ImageMessage.fromObject(d.imageMessage, n + 1);
                    }
                    if (d.jpegThumbnail != null) {
                        if (typeof d.jpegThumbnail === "string")
                            $util.base64.decode(d.jpegThumbnail, m.jpegThumbnail = $util.newBuffer($util.base64.length(d.jpegThumbnail)), 0);
                        else if (d.jpegThumbnail.length >= 0)
                            m.jpegThumbnail = d.jpegThumbnail;
                    }
                    if (d.videoMessage != null) {
                        if (!$util.isObject(d.videoMessage))
                            throw TypeError(".proto.Message.InteractiveMessage.Header.videoMessage: object expected");
                        m.videoMessage = $root.proto.Message.VideoMessage.fromObject(d.videoMessage, n + 1);
                    }
                    if (d.locationMessage != null) {
                        if (!$util.isObject(d.locationMessage))
                            throw TypeError(".proto.Message.InteractiveMessage.Header.locationMessage: object expected");
                        m.locationMessage = $root.proto.Message.LocationMessage.fromObject(d.locationMessage, n + 1);
                    }
                    if (d.productMessage != null) {
                        if (!$util.isObject(d.productMessage))
                            throw TypeError(".proto.Message.InteractiveMessage.Header.productMessage: object expected");
                        m.productMessage = $root.proto.Message.ProductMessage.fromObject(d.productMessage, n + 1);
                    }
                    return m;
                };

                Header.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.title != null && Object.hasOwnProperty.call(m, "title")) {
                        d.title = m.title;
                        if (o.oneofs)
                            d._title = "title";
                    }
                    if (m.subtitle != null && Object.hasOwnProperty.call(m, "subtitle")) {
                        d.subtitle = m.subtitle;
                        if (o.oneofs)
                            d._subtitle = "subtitle";
                    }
                    if (m.documentMessage != null && Object.hasOwnProperty.call(m, "documentMessage")) {
                        d.documentMessage = $root.proto.Message.DocumentMessage.toObject(m.documentMessage, o, q + 1);
                        if (o.oneofs)
                            d.media = "documentMessage";
                    }
                    if (m.imageMessage != null && Object.hasOwnProperty.call(m, "imageMessage")) {
                        d.imageMessage = $root.proto.Message.ImageMessage.toObject(m.imageMessage, o, q + 1);
                        if (o.oneofs)
                            d.media = "imageMessage";
                    }
                    if (m.hasMediaAttachment != null && Object.hasOwnProperty.call(m, "hasMediaAttachment")) {
                        d.hasMediaAttachment = m.hasMediaAttachment;
                        if (o.oneofs)
                            d._hasMediaAttachment = "hasMediaAttachment";
                    }
                    if (m.jpegThumbnail != null && Object.hasOwnProperty.call(m, "jpegThumbnail")) {
                        d.jpegThumbnail = o.bytes === String ? $util.base64.encode(m.jpegThumbnail, 0, m.jpegThumbnail.length) : o.bytes === Array ? Array.prototype.slice.call(m.jpegThumbnail) : m.jpegThumbnail;
                        if (o.oneofs)
                            d.media = "jpegThumbnail";
                    }
                    if (m.videoMessage != null && Object.hasOwnProperty.call(m, "videoMessage")) {
                        d.videoMessage = $root.proto.Message.VideoMessage.toObject(m.videoMessage, o, q + 1);
                        if (o.oneofs)
                            d.media = "videoMessage";
                    }
                    if (m.locationMessage != null && Object.hasOwnProperty.call(m, "locationMessage")) {
                        d.locationMessage = $root.proto.Message.LocationMessage.toObject(m.locationMessage, o, q + 1);
                        if (o.oneofs)
                            d.media = "locationMessage";
                    }
                    if (m.productMessage != null && Object.hasOwnProperty.call(m, "productMessage")) {
                        d.productMessage = $root.proto.Message.ProductMessage.toObject(m.productMessage, o, q + 1);
                        if (o.oneofs)
                            d.media = "productMessage";
                    }
                    return d;
                };

                Header.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.InteractiveMessage.Header";
                };

                return Header;
            })();

            InteractiveMessage.NativeFlowMessage = (function() {

                function NativeFlowMessage(p) {
                    this.buttons = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                NativeFlowMessage.prototype.buttons = $util.emptyArray;
                NativeFlowMessage.prototype.messageParamsJson = null;
                NativeFlowMessage.prototype.messageVersion = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(NativeFlowMessage.prototype, "_messageParamsJson", {
                    get: $util.oneOfGetter($oneOfFields = ["messageParamsJson"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(NativeFlowMessage.prototype, "_messageVersion", {
                    get: $util.oneOfGetter($oneOfFields = ["messageVersion"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                NativeFlowMessage.create = function create(properties) {
                    return new NativeFlowMessage(properties);
                };

                NativeFlowMessage.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.buttons != null && m.buttons.length) {
                        for (var i = 0; i < m.buttons.length; ++i)
                            $root.proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton.encode(m.buttons[i], w.uint32(10).fork(), q + 1).ldelim();
                    }
                    if (m.messageParamsJson != null && Object.hasOwnProperty.call(m, "messageParamsJson"))
                        w.uint32(18).string(m.messageParamsJson);
                    if (m.messageVersion != null && Object.hasOwnProperty.call(m, "messageVersion"))
                        w.uint32(24).int32(m.messageVersion);
                    return w;
                };

                NativeFlowMessage.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InteractiveMessage.NativeFlowMessage();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                if (!(m.buttons && m.buttons.length))
                                    m.buttons = [];
                                m.buttons.push($root.proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton.decode(r, r.uint32(), undefined, n + 1));
                                break;
                            }
                        case 2: {
                                m.messageParamsJson = r.string();
                                break;
                            }
                        case 3: {
                                m.messageVersion = r.int32();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                NativeFlowMessage.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.InteractiveMessage.NativeFlowMessage)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.InteractiveMessage.NativeFlowMessage: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.InteractiveMessage.NativeFlowMessage();
                    if (d.buttons) {
                        if (!Array.isArray(d.buttons))
                            throw TypeError(".proto.Message.InteractiveMessage.NativeFlowMessage.buttons: array expected");
                        m.buttons = [];
                        for (var i = 0; i < d.buttons.length; ++i) {
                            if (!$util.isObject(d.buttons[i]))
                                throw TypeError(".proto.Message.InteractiveMessage.NativeFlowMessage.buttons: object expected");
                            m.buttons[i] = $root.proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton.fromObject(d.buttons[i], n + 1);
                        }
                    }
                    if (d.messageParamsJson != null) {
                        m.messageParamsJson = String(d.messageParamsJson);
                    }
                    if (d.messageVersion != null) {
                        m.messageVersion = d.messageVersion | 0;
                    }
                    return m;
                };

                NativeFlowMessage.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (o.arrays || o.defaults) {
                        d.buttons = [];
                    }
                    if (m.buttons && m.buttons.length) {
                        d.buttons = [];
                        for (var j = 0; j < m.buttons.length; ++j) {
                            d.buttons[j] = $root.proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton.toObject(m.buttons[j], o, q + 1);
                        }
                    }
                    if (m.messageParamsJson != null && Object.hasOwnProperty.call(m, "messageParamsJson")) {
                        d.messageParamsJson = m.messageParamsJson;
                        if (o.oneofs)
                            d._messageParamsJson = "messageParamsJson";
                    }
                    if (m.messageVersion != null && Object.hasOwnProperty.call(m, "messageVersion")) {
                        d.messageVersion = m.messageVersion;
                        if (o.oneofs)
                            d._messageVersion = "messageVersion";
                    }
                    return d;
                };

                NativeFlowMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                NativeFlowMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.InteractiveMessage.NativeFlowMessage";
                };

                NativeFlowMessage.NativeFlowButton = (function() {

                    function NativeFlowButton(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    NativeFlowButton.prototype.name = null;
                    NativeFlowButton.prototype.buttonParamsJson = null;

                    let $oneOfFields;

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(NativeFlowButton.prototype, "_name", {
                        get: $util.oneOfGetter($oneOfFields = ["name"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(NativeFlowButton.prototype, "_buttonParamsJson", {
                        get: $util.oneOfGetter($oneOfFields = ["buttonParamsJson"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    NativeFlowButton.create = function create(properties) {
                        return new NativeFlowButton(properties);
                    };

                    NativeFlowButton.encode = function encode(m, w, q) {
                        if (!w)
                            w = $Writer.create();
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                            w.uint32(10).string(m.name);
                        if (m.buttonParamsJson != null && Object.hasOwnProperty.call(m, "buttonParamsJson"))
                            w.uint32(18).string(m.buttonParamsJson);
                        return w;
                    };

                    NativeFlowButton.decode = function decode(r, l, e, n) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (n === undefined)
                            n = 0;
                        if (n > $Reader.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton();
                        while (r.pos < c) {
                            var t = r.uint32();
                            if (t === e)
                                break;
                            switch (t >>> 3) {
                            case 1: {
                                    m.name = r.string();
                                    break;
                                }
                            case 2: {
                                    m.buttonParamsJson = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7, n);
                                break;
                            }
                        }
                        return m;
                    };

                    NativeFlowButton.fromObject = function fromObject(d, n) {
                        if (d instanceof $root.proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton)
                            return d;
                        if (!$util.isObject(d))
                            throw TypeError(".proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton: object expected");
                        if (n === undefined)
                            n = 0;
                        if (n > $util.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var m = new $root.proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton();
                        if (d.name != null) {
                            m.name = String(d.name);
                        }
                        if (d.buttonParamsJson != null) {
                            m.buttonParamsJson = String(d.buttonParamsJson);
                        }
                        return m;
                    };

                    NativeFlowButton.toObject = function toObject(m, o, q) {
                        if (!o)
                            o = {};
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        var d = {};
                        if (m.name != null && Object.hasOwnProperty.call(m, "name")) {
                            d.name = m.name;
                            if (o.oneofs)
                                d._name = "name";
                        }
                        if (m.buttonParamsJson != null && Object.hasOwnProperty.call(m, "buttonParamsJson")) {
                            d.buttonParamsJson = m.buttonParamsJson;
                            if (o.oneofs)
                                d._buttonParamsJson = "buttonParamsJson";
                        }
                        return d;
                    };

                    NativeFlowButton.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    NativeFlowButton.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton";
                    };

                    return NativeFlowButton;
                })();

                return NativeFlowMessage;
            })();

            InteractiveMessage.ShopMessage = (function() {

                function ShopMessage(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                ShopMessage.prototype.id = null;
                ShopMessage.prototype.surface = null;
                ShopMessage.prototype.messageVersion = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ShopMessage.prototype, "_id", {
                    get: $util.oneOfGetter($oneOfFields = ["id"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ShopMessage.prototype, "_surface", {
                    get: $util.oneOfGetter($oneOfFields = ["surface"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ShopMessage.prototype, "_messageVersion", {
                    get: $util.oneOfGetter($oneOfFields = ["messageVersion"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                ShopMessage.create = function create(properties) {
                    return new ShopMessage(properties);
                };

                ShopMessage.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                        w.uint32(10).string(m.id);
                    if (m.surface != null && Object.hasOwnProperty.call(m, "surface"))
                        w.uint32(16).int32(m.surface);
                    if (m.messageVersion != null && Object.hasOwnProperty.call(m, "messageVersion"))
                        w.uint32(24).int32(m.messageVersion);
                    return w;
                };

                ShopMessage.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InteractiveMessage.ShopMessage();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.id = r.string();
                                break;
                            }
                        case 2: {
                                m.surface = r.int32();
                                break;
                            }
                        case 3: {
                                m.messageVersion = r.int32();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                ShopMessage.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.InteractiveMessage.ShopMessage)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.InteractiveMessage.ShopMessage: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.InteractiveMessage.ShopMessage();
                    if (d.id != null) {
                        m.id = String(d.id);
                    }
                    switch (d.surface) {
                    default:
                        if (typeof d.surface === "number") {
                            m.surface = d.surface;
                            break;
                        }
                        break;
                    case "UNKNOWN_SURFACE":
                    case 0:
                        m.surface = 0;
                        break;
                    case "FB":
                    case 1:
                        m.surface = 1;
                        break;
                    case "IG":
                    case 2:
                        m.surface = 2;
                        break;
                    case "WA":
                    case 3:
                        m.surface = 3;
                        break;
                    }
                    if (d.messageVersion != null) {
                        m.messageVersion = d.messageVersion | 0;
                    }
                    return m;
                };

                ShopMessage.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.id != null && Object.hasOwnProperty.call(m, "id")) {
                        d.id = m.id;
                        if (o.oneofs)
                            d._id = "id";
                    }
                    if (m.surface != null && Object.hasOwnProperty.call(m, "surface")) {
                        d.surface = o.enums === String ? $root.proto.Message.InteractiveMessage.ShopMessage.Surface[m.surface] === undefined ? m.surface : $root.proto.Message.InteractiveMessage.ShopMessage.Surface[m.surface] : m.surface;
                        if (o.oneofs)
                            d._surface = "surface";
                    }
                    if (m.messageVersion != null && Object.hasOwnProperty.call(m, "messageVersion")) {
                        d.messageVersion = m.messageVersion;
                        if (o.oneofs)
                            d._messageVersion = "messageVersion";
                    }
                    return d;
                };

                ShopMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                ShopMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.InteractiveMessage.ShopMessage";
                };

                ShopMessage.Surface = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN_SURFACE"] = 0;
                    values[valuesById[1] = "FB"] = 1;
                    values[valuesById[2] = "IG"] = 2;
                    values[valuesById[3] = "WA"] = 3;
                    return values;
                })();

                return ShopMessage;
            })();

            return InteractiveMessage;
        })();

        Message.InteractiveResponseMessage = (function() {

            function InteractiveResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InteractiveResponseMessage.prototype.body = null;
            InteractiveResponseMessage.prototype.contextInfo = null;
            InteractiveResponseMessage.prototype.nativeFlowResponseMessage = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteractiveResponseMessage.prototype, "_body", {
                get: $util.oneOfGetter($oneOfFields = ["body"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteractiveResponseMessage.prototype, "_contextInfo", {
                get: $util.oneOfGetter($oneOfFields = ["contextInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Object.defineProperty(InteractiveResponseMessage.prototype, "interactiveResponseMessage", {
                get: $util.oneOfGetter($oneOfFields = ["nativeFlowResponseMessage"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            InteractiveResponseMessage.create = function create(properties) {
                return new InteractiveResponseMessage(properties);
            };

            InteractiveResponseMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.body != null && Object.hasOwnProperty.call(m, "body"))
                    $root.proto.Message.InteractiveResponseMessage.Body.encode(m.body, w.uint32(10).fork(), q + 1).ldelim();
                if (m.nativeFlowResponseMessage != null && Object.hasOwnProperty.call(m, "nativeFlowResponseMessage"))
                    $root.proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage.encode(m.nativeFlowResponseMessage, w.uint32(18).fork(), q + 1).ldelim();
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo"))
                    $root.proto.ContextInfo.encode(m.contextInfo, w.uint32(122).fork(), q + 1).ldelim();
                return w;
            };

            InteractiveResponseMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InteractiveResponseMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.body = $root.proto.Message.InteractiveResponseMessage.Body.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 15: {
                            m.contextInfo = $root.proto.ContextInfo.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 2: {
                            m.nativeFlowResponseMessage = $root.proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            InteractiveResponseMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.InteractiveResponseMessage)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.Message.InteractiveResponseMessage: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.Message.InteractiveResponseMessage();
                if (d.body != null) {
                    if (!$util.isObject(d.body))
                        throw TypeError(".proto.Message.InteractiveResponseMessage.body: object expected");
                    m.body = $root.proto.Message.InteractiveResponseMessage.Body.fromObject(d.body, n + 1);
                }
                if (d.contextInfo != null) {
                    if (!$util.isObject(d.contextInfo))
                        throw TypeError(".proto.Message.InteractiveResponseMessage.contextInfo: object expected");
                    m.contextInfo = $root.proto.ContextInfo.fromObject(d.contextInfo, n + 1);
                }
                if (d.nativeFlowResponseMessage != null) {
                    if (!$util.isObject(d.nativeFlowResponseMessage))
                        throw TypeError(".proto.Message.InteractiveResponseMessage.nativeFlowResponseMessage: object expected");
                    m.nativeFlowResponseMessage = $root.proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage.fromObject(d.nativeFlowResponseMessage, n + 1);
                }
                return m;
            };

            InteractiveResponseMessage.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.body != null && Object.hasOwnProperty.call(m, "body")) {
                    d.body = $root.proto.Message.InteractiveResponseMessage.Body.toObject(m.body, o, q + 1);
                    if (o.oneofs)
                        d._body = "body";
                }
                if (m.nativeFlowResponseMessage != null && Object.hasOwnProperty.call(m, "nativeFlowResponseMessage")) {
                    d.nativeFlowResponseMessage = $root.proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage.toObject(m.nativeFlowResponseMessage, o, q + 1);
                    if (o.oneofs)
                        d.interactiveResponseMessage = "nativeFlowResponseMessage";
                }
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo")) {
                    d.contextInfo = $root.proto.ContextInfo.toObject(m.contextInfo, o, q + 1);
                    if (o.oneofs)
                        d._contextInfo = "contextInfo";
                }
                return d;
            };

            InteractiveResponseMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InteractiveResponseMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.InteractiveResponseMessage";
            };

            InteractiveResponseMessage.Body = (function() {

                function Body(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Body.prototype.text = null;
                Body.prototype.format = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Body.prototype, "_text", {
                    get: $util.oneOfGetter($oneOfFields = ["text"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Body.prototype, "_format", {
                    get: $util.oneOfGetter($oneOfFields = ["format"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Body.create = function create(properties) {
                    return new Body(properties);
                };

                Body.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.text != null && Object.hasOwnProperty.call(m, "text"))
                        w.uint32(10).string(m.text);
                    if (m.format != null && Object.hasOwnProperty.call(m, "format"))
                        w.uint32(16).int32(m.format);
                    return w;
                };

                Body.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InteractiveResponseMessage.Body();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.text = r.string();
                                break;
                            }
                        case 2: {
                                m.format = r.int32();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Body.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.InteractiveResponseMessage.Body)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.InteractiveResponseMessage.Body: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.InteractiveResponseMessage.Body();
                    if (d.text != null) {
                        m.text = String(d.text);
                    }
                    switch (d.format) {
                    default:
                        if (typeof d.format === "number") {
                            m.format = d.format;
                            break;
                        }
                        break;
                    case "DEFAULT":
                    case 0:
                        m.format = 0;
                        break;
                    case "EXTENSIONS_1":
                    case 1:
                        m.format = 1;
                        break;
                    }
                    return m;
                };

                Body.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.text != null && Object.hasOwnProperty.call(m, "text")) {
                        d.text = m.text;
                        if (o.oneofs)
                            d._text = "text";
                    }
                    if (m.format != null && Object.hasOwnProperty.call(m, "format")) {
                        d.format = o.enums === String ? $root.proto.Message.InteractiveResponseMessage.Body.Format[m.format] === undefined ? m.format : $root.proto.Message.InteractiveResponseMessage.Body.Format[m.format] : m.format;
                        if (o.oneofs)
                            d._format = "format";
                    }
                    return d;
                };

                Body.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Body.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.InteractiveResponseMessage.Body";
                };

                Body.Format = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "DEFAULT"] = 0;
                    values[valuesById[1] = "EXTENSIONS_1"] = 1;
                    return values;
                })();

                return Body;
            })();

            InteractiveResponseMessage.NativeFlowResponseMessage = (function() {

                function NativeFlowResponseMessage(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                NativeFlowResponseMessage.prototype.name = null;
                NativeFlowResponseMessage.prototype.paramsJson = null;
                NativeFlowResponseMessage.prototype.version = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(NativeFlowResponseMessage.prototype, "_name", {
                    get: $util.oneOfGetter($oneOfFields = ["name"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(NativeFlowResponseMessage.prototype, "_paramsJson", {
                    get: $util.oneOfGetter($oneOfFields = ["paramsJson"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(NativeFlowResponseMessage.prototype, "_version", {
                    get: $util.oneOfGetter($oneOfFields = ["version"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                NativeFlowResponseMessage.create = function create(properties) {
                    return new NativeFlowResponseMessage(properties);
                };

                NativeFlowResponseMessage.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                        w.uint32(10).string(m.name);
                    if (m.paramsJson != null && Object.hasOwnProperty.call(m, "paramsJson"))
                        w.uint32(18).string(m.paramsJson);
                    if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                        w.uint32(24).int32(m.version);
                    return w;
                };

                NativeFlowResponseMessage.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.name = r.string();
                                break;
                            }
                        case 2: {
                                m.paramsJson = r.string();
                                break;
                            }
                        case 3: {
                                m.version = r.int32();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                NativeFlowResponseMessage.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage();
                    if (d.name != null) {
                        m.name = String(d.name);
                    }
                    if (d.paramsJson != null) {
                        m.paramsJson = String(d.paramsJson);
                    }
                    if (d.version != null) {
                        m.version = d.version | 0;
                    }
                    return m;
                };

                NativeFlowResponseMessage.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.name != null && Object.hasOwnProperty.call(m, "name")) {
                        d.name = m.name;
                        if (o.oneofs)
                            d._name = "name";
                    }
                    if (m.paramsJson != null && Object.hasOwnProperty.call(m, "paramsJson")) {
                        d.paramsJson = m.paramsJson;
                        if (o.oneofs)
                            d._paramsJson = "paramsJson";
                    }
                    if (m.version != null && Object.hasOwnProperty.call(m, "version")) {
                        d.version = m.version;
                        if (o.oneofs)
                            d._version = "version";
                    }
                    return d;
                };

                NativeFlowResponseMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                NativeFlowResponseMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage";
                };

                return NativeFlowResponseMessage;
            })();

            return InteractiveResponseMessage;
        })();

        Message.ListMessage = (function() {

            function ListMessage(p) {
                this.sections = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ListMessage.prototype.title = null;
            ListMessage.prototype.description = null;
            ListMessage.prototype.buttonText = null;
            ListMessage.prototype.listType = null;
            ListMessage.prototype.sections = $util.emptyArray;
            ListMessage.prototype.productListInfo = null;
            ListMessage.prototype.footerText = null;
            ListMessage.prototype.contextInfo = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ListMessage.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ListMessage.prototype, "_description", {
                get: $util.oneOfGetter($oneOfFields = ["description"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ListMessage.prototype, "_buttonText", {
                get: $util.oneOfGetter($oneOfFields = ["buttonText"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ListMessage.prototype, "_listType", {
                get: $util.oneOfGetter($oneOfFields = ["listType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ListMessage.prototype, "_productListInfo", {
                get: $util.oneOfGetter($oneOfFields = ["productListInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ListMessage.prototype, "_footerText", {
                get: $util.oneOfGetter($oneOfFields = ["footerText"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ListMessage.prototype, "_contextInfo", {
                get: $util.oneOfGetter($oneOfFields = ["contextInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            ListMessage.create = function create(properties) {
                return new ListMessage(properties);
            };

            ListMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                    w.uint32(10).string(m.title);
                if (m.description != null && Object.hasOwnProperty.call(m, "description"))
                    w.uint32(18).string(m.description);
                if (m.buttonText != null && Object.hasOwnProperty.call(m, "buttonText"))
                    w.uint32(26).string(m.buttonText);
                if (m.listType != null && Object.hasOwnProperty.call(m, "listType"))
                    w.uint32(32).int32(m.listType);
                if (m.sections != null && m.sections.length) {
                    for (var i = 0; i < m.sections.length; ++i)
                        $root.proto.Message.ListMessage.Section.encode(m.sections[i], w.uint32(42).fork(), q + 1).ldelim();
                }
                if (m.productListInfo != null && Object.hasOwnProperty.call(m, "productListInfo"))
                    $root.proto.Message.ListMessage.ProductListInfo.encode(m.productListInfo, w.uint32(50).fork(), q + 1).ldelim();
                if (m.footerText != null && Object.hasOwnProperty.call(m, "footerText"))
                    w.uint32(58).string(m.footerText);
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo"))
                    $root.proto.ContextInfo.encode(m.contextInfo, w.uint32(66).fork(), q + 1).ldelim();
                return w;
            };

            ListMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ListMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.title = r.string();
                            break;
                        }
                    case 2: {
                            m.description = r.string();
                            break;
                        }
                    case 3: {
                            m.buttonText = r.string();
                            break;
                        }
                    case 4: {
                            m.listType = r.int32();
                            break;
                        }
                    case 5: {
                            if (!(m.sections && m.sections.length))
                                m.sections = [];
                            m.sections.push($root.proto.Message.ListMessage.Section.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    case 6: {
                            m.productListInfo = $root.proto.Message.ListMessage.ProductListInfo.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 7: {
                            m.footerText = r.string();
                            break;
                        }
                    case 8: {
                            m.contextInfo = $root.proto.ContextInfo.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ListMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ListMessage)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.Message.ListMessage: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.Message.ListMessage();
                if (d.title != null) {
                    m.title = String(d.title);
                }
                if (d.description != null) {
                    m.description = String(d.description);
                }
                if (d.buttonText != null) {
                    m.buttonText = String(d.buttonText);
                }
                switch (d.listType) {
                default:
                    if (typeof d.listType === "number") {
                        m.listType = d.listType;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    m.listType = 0;
                    break;
                case "SINGLE_SELECT":
                case 1:
                    m.listType = 1;
                    break;
                case "PRODUCT_LIST":
                case 2:
                    m.listType = 2;
                    break;
                }
                if (d.sections) {
                    if (!Array.isArray(d.sections))
                        throw TypeError(".proto.Message.ListMessage.sections: array expected");
                    m.sections = [];
                    for (var i = 0; i < d.sections.length; ++i) {
                        if (!$util.isObject(d.sections[i]))
                            throw TypeError(".proto.Message.ListMessage.sections: object expected");
                        m.sections[i] = $root.proto.Message.ListMessage.Section.fromObject(d.sections[i], n + 1);
                    }
                }
                if (d.productListInfo != null) {
                    if (!$util.isObject(d.productListInfo))
                        throw TypeError(".proto.Message.ListMessage.productListInfo: object expected");
                    m.productListInfo = $root.proto.Message.ListMessage.ProductListInfo.fromObject(d.productListInfo, n + 1);
                }
                if (d.footerText != null) {
                    m.footerText = String(d.footerText);
                }
                if (d.contextInfo != null) {
                    if (!$util.isObject(d.contextInfo))
                        throw TypeError(".proto.Message.ListMessage.contextInfo: object expected");
                    m.contextInfo = $root.proto.ContextInfo.fromObject(d.contextInfo, n + 1);
                }
                return m;
            };

            ListMessage.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (o.arrays || o.defaults) {
                    d.sections = [];
                }
                if (m.title != null && Object.hasOwnProperty.call(m, "title")) {
                    d.title = m.title;
                    if (o.oneofs)
                        d._title = "title";
                }
                if (m.description != null && Object.hasOwnProperty.call(m, "description")) {
                    d.description = m.description;
                    if (o.oneofs)
                        d._description = "description";
                }
                if (m.buttonText != null && Object.hasOwnProperty.call(m, "buttonText")) {
                    d.buttonText = m.buttonText;
                    if (o.oneofs)
                        d._buttonText = "buttonText";
                }
                if (m.listType != null && Object.hasOwnProperty.call(m, "listType")) {
                    d.listType = o.enums === String ? $root.proto.Message.ListMessage.ListType[m.listType] === undefined ? m.listType : $root.proto.Message.ListMessage.ListType[m.listType] : m.listType;
                    if (o.oneofs)
                        d._listType = "listType";
                }
                if (m.sections && m.sections.length) {
                    d.sections = [];
                    for (var j = 0; j < m.sections.length; ++j) {
                        d.sections[j] = $root.proto.Message.ListMessage.Section.toObject(m.sections[j], o, q + 1);
                    }
                }
                if (m.productListInfo != null && Object.hasOwnProperty.call(m, "productListInfo")) {
                    d.productListInfo = $root.proto.Message.ListMessage.ProductListInfo.toObject(m.productListInfo, o, q + 1);
                    if (o.oneofs)
                        d._productListInfo = "productListInfo";
                }
                if (m.footerText != null && Object.hasOwnProperty.call(m, "footerText")) {
                    d.footerText = m.footerText;
                    if (o.oneofs)
                        d._footerText = "footerText";
                }
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo")) {
                    d.contextInfo = $root.proto.ContextInfo.toObject(m.contextInfo, o, q + 1);
                    if (o.oneofs)
                        d._contextInfo = "contextInfo";
                }
                return d;
            };

            ListMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ListMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ListMessage";
            };

            ListMessage.ListType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "SINGLE_SELECT"] = 1;
                values[valuesById[2] = "PRODUCT_LIST"] = 2;
                return values;
            })();

            ListMessage.Product = (function() {

                function Product(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Product.prototype.productId = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Product.prototype, "_productId", {
                    get: $util.oneOfGetter($oneOfFields = ["productId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Product.create = function create(properties) {
                    return new Product(properties);
                };

                Product.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.productId != null && Object.hasOwnProperty.call(m, "productId"))
                        w.uint32(10).string(m.productId);
                    return w;
                };

                Product.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ListMessage.Product();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.productId = r.string();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Product.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.ListMessage.Product)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.ListMessage.Product: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.ListMessage.Product();
                    if (d.productId != null) {
                        m.productId = String(d.productId);
                    }
                    return m;
                };

                Product.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.productId != null && Object.hasOwnProperty.call(m, "productId")) {
                        d.productId = m.productId;
                        if (o.oneofs)
                            d._productId = "productId";
                    }
                    return d;
                };

                Product.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Product.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.ListMessage.Product";
                };

                return Product;
            })();

            ListMessage.ProductListHeaderImage = (function() {

                function ProductListHeaderImage(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                ProductListHeaderImage.prototype.productId = null;
                ProductListHeaderImage.prototype.jpegThumbnail = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ProductListHeaderImage.prototype, "_productId", {
                    get: $util.oneOfGetter($oneOfFields = ["productId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ProductListHeaderImage.prototype, "_jpegThumbnail", {
                    get: $util.oneOfGetter($oneOfFields = ["jpegThumbnail"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                ProductListHeaderImage.create = function create(properties) {
                    return new ProductListHeaderImage(properties);
                };

                ProductListHeaderImage.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.productId != null && Object.hasOwnProperty.call(m, "productId"))
                        w.uint32(10).string(m.productId);
                    if (m.jpegThumbnail != null && Object.hasOwnProperty.call(m, "jpegThumbnail"))
                        w.uint32(18).bytes(m.jpegThumbnail);
                    return w;
                };

                ProductListHeaderImage.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ListMessage.ProductListHeaderImage();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.productId = r.string();
                                break;
                            }
                        case 2: {
                                m.jpegThumbnail = r.bytes();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                ProductListHeaderImage.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.ListMessage.ProductListHeaderImage)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.ListMessage.ProductListHeaderImage: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.ListMessage.ProductListHeaderImage();
                    if (d.productId != null) {
                        m.productId = String(d.productId);
                    }
                    if (d.jpegThumbnail != null) {
                        if (typeof d.jpegThumbnail === "string")
                            $util.base64.decode(d.jpegThumbnail, m.jpegThumbnail = $util.newBuffer($util.base64.length(d.jpegThumbnail)), 0);
                        else if (d.jpegThumbnail.length >= 0)
                            m.jpegThumbnail = d.jpegThumbnail;
                    }
                    return m;
                };

                ProductListHeaderImage.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.productId != null && Object.hasOwnProperty.call(m, "productId")) {
                        d.productId = m.productId;
                        if (o.oneofs)
                            d._productId = "productId";
                    }
                    if (m.jpegThumbnail != null && Object.hasOwnProperty.call(m, "jpegThumbnail")) {
                        d.jpegThumbnail = o.bytes === String ? $util.base64.encode(m.jpegThumbnail, 0, m.jpegThumbnail.length) : o.bytes === Array ? Array.prototype.slice.call(m.jpegThumbnail) : m.jpegThumbnail;
                        if (o.oneofs)
                            d._jpegThumbnail = "jpegThumbnail";
                    }
                    return d;
                };

                ProductListHeaderImage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                ProductListHeaderImage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.ListMessage.ProductListHeaderImage";
                };

                return ProductListHeaderImage;
            })();

            ListMessage.ProductListInfo = (function() {

                function ProductListInfo(p) {
                    this.productSections = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                ProductListInfo.prototype.productSections = $util.emptyArray;
                ProductListInfo.prototype.headerImage = null;
                ProductListInfo.prototype.businessOwnerJid = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ProductListInfo.prototype, "_headerImage", {
                    get: $util.oneOfGetter($oneOfFields = ["headerImage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ProductListInfo.prototype, "_businessOwnerJid", {
                    get: $util.oneOfGetter($oneOfFields = ["businessOwnerJid"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                ProductListInfo.create = function create(properties) {
                    return new ProductListInfo(properties);
                };

                ProductListInfo.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.productSections != null && m.productSections.length) {
                        for (var i = 0; i < m.productSections.length; ++i)
                            $root.proto.Message.ListMessage.ProductSection.encode(m.productSections[i], w.uint32(10).fork(), q + 1).ldelim();
                    }
                    if (m.headerImage != null && Object.hasOwnProperty.call(m, "headerImage"))
                        $root.proto.Message.ListMessage.ProductListHeaderImage.encode(m.headerImage, w.uint32(18).fork(), q + 1).ldelim();
                    if (m.businessOwnerJid != null && Object.hasOwnProperty.call(m, "businessOwnerJid"))
                        w.uint32(26).string(m.businessOwnerJid);
                    return w;
                };

                ProductListInfo.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ListMessage.ProductListInfo();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                if (!(m.productSections && m.productSections.length))
                                    m.productSections = [];
                                m.productSections.push($root.proto.Message.ListMessage.ProductSection.decode(r, r.uint32(), undefined, n + 1));
                                break;
                            }
                        case 2: {
                                m.headerImage = $root.proto.Message.ListMessage.ProductListHeaderImage.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        case 3: {
                                m.businessOwnerJid = r.string();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                ProductListInfo.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.ListMessage.ProductListInfo)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.ListMessage.ProductListInfo: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.ListMessage.ProductListInfo();
                    if (d.productSections) {
                        if (!Array.isArray(d.productSections))
                            throw TypeError(".proto.Message.ListMessage.ProductListInfo.productSections: array expected");
                        m.productSections = [];
                        for (var i = 0; i < d.productSections.length; ++i) {
                            if (!$util.isObject(d.productSections[i]))
                                throw TypeError(".proto.Message.ListMessage.ProductListInfo.productSections: object expected");
                            m.productSections[i] = $root.proto.Message.ListMessage.ProductSection.fromObject(d.productSections[i], n + 1);
                        }
                    }
                    if (d.headerImage != null) {
                        if (!$util.isObject(d.headerImage))
                            throw TypeError(".proto.Message.ListMessage.ProductListInfo.headerImage: object expected");
                        m.headerImage = $root.proto.Message.ListMessage.ProductListHeaderImage.fromObject(d.headerImage, n + 1);
                    }
                    if (d.businessOwnerJid != null) {
                        m.businessOwnerJid = String(d.businessOwnerJid);
                    }
                    return m;
                };

                ProductListInfo.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (o.arrays || o.defaults) {
                        d.productSections = [];
                    }
                    if (m.productSections && m.productSections.length) {
                        d.productSections = [];
                        for (var j = 0; j < m.productSections.length; ++j) {
                            d.productSections[j] = $root.proto.Message.ListMessage.ProductSection.toObject(m.productSections[j], o, q + 1);
                        }
                    }
                    if (m.headerImage != null && Object.hasOwnProperty.call(m, "headerImage")) {
                        d.headerImage = $root.proto.Message.ListMessage.ProductListHeaderImage.toObject(m.headerImage, o, q + 1);
                        if (o.oneofs)
                            d._headerImage = "headerImage";
                    }
                    if (m.businessOwnerJid != null && Object.hasOwnProperty.call(m, "businessOwnerJid")) {
                        d.businessOwnerJid = m.businessOwnerJid;
                        if (o.oneofs)
                            d._businessOwnerJid = "businessOwnerJid";
                    }
                    return d;
                };

                ProductListInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                ProductListInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.ListMessage.ProductListInfo";
                };

                return ProductListInfo;
            })();

            ListMessage.ProductSection = (function() {

                function ProductSection(p) {
                    this.products = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                ProductSection.prototype.title = null;
                ProductSection.prototype.products = $util.emptyArray;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ProductSection.prototype, "_title", {
                    get: $util.oneOfGetter($oneOfFields = ["title"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                ProductSection.create = function create(properties) {
                    return new ProductSection(properties);
                };

                ProductSection.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                        w.uint32(10).string(m.title);
                    if (m.products != null && m.products.length) {
                        for (var i = 0; i < m.products.length; ++i)
                            $root.proto.Message.ListMessage.Product.encode(m.products[i], w.uint32(18).fork(), q + 1).ldelim();
                    }
                    return w;
                };

                ProductSection.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ListMessage.ProductSection();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.title = r.string();
                                break;
                            }
                        case 2: {
                                if (!(m.products && m.products.length))
                                    m.products = [];
                                m.products.push($root.proto.Message.ListMessage.Product.decode(r, r.uint32(), undefined, n + 1));
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                ProductSection.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.ListMessage.ProductSection)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.ListMessage.ProductSection: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.ListMessage.ProductSection();
                    if (d.title != null) {
                        m.title = String(d.title);
                    }
                    if (d.products) {
                        if (!Array.isArray(d.products))
                            throw TypeError(".proto.Message.ListMessage.ProductSection.products: array expected");
                        m.products = [];
                        for (var i = 0; i < d.products.length; ++i) {
                            if (!$util.isObject(d.products[i]))
                                throw TypeError(".proto.Message.ListMessage.ProductSection.products: object expected");
                            m.products[i] = $root.proto.Message.ListMessage.Product.fromObject(d.products[i], n + 1);
                        }
                    }
                    return m;
                };

                ProductSection.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (o.arrays || o.defaults) {
                        d.products = [];
                    }
                    if (m.title != null && Object.hasOwnProperty.call(m, "title")) {
                        d.title = m.title;
                        if (o.oneofs)
                            d._title = "title";
                    }
                    if (m.products && m.products.length) {
                        d.products = [];
                        for (var j = 0; j < m.products.length; ++j) {
                            d.products[j] = $root.proto.Message.ListMessage.Product.toObject(m.products[j], o, q + 1);
                        }
                    }
                    return d;
                };

                ProductSection.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                ProductSection.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.ListMessage.ProductSection";
                };

                return ProductSection;
            })();

            ListMessage.Row = (function() {

                function Row(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Row.prototype.title = null;
                Row.prototype.description = null;
                Row.prototype.rowId = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Row.prototype, "_title", {
                    get: $util.oneOfGetter($oneOfFields = ["title"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Row.prototype, "_description", {
                    get: $util.oneOfGetter($oneOfFields = ["description"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Row.prototype, "_rowId", {
                    get: $util.oneOfGetter($oneOfFields = ["rowId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Row.create = function create(properties) {
                    return new Row(properties);
                };

                Row.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                        w.uint32(10).string(m.title);
                    if (m.description != null && Object.hasOwnProperty.call(m, "description"))
                        w.uint32(18).string(m.description);
                    if (m.rowId != null && Object.hasOwnProperty.call(m, "rowId"))
                        w.uint32(26).string(m.rowId);
                    return w;
                };

                Row.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ListMessage.Row();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.title = r.string();
                                break;
                            }
                        case 2: {
                                m.description = r.string();
                                break;
                            }
                        case 3: {
                                m.rowId = r.string();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Row.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.ListMessage.Row)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.ListMessage.Row: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.ListMessage.Row();
                    if (d.title != null) {
                        m.title = String(d.title);
                    }
                    if (d.description != null) {
                        m.description = String(d.description);
                    }
                    if (d.rowId != null) {
                        m.rowId = String(d.rowId);
                    }
                    return m;
                };

                Row.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.title != null && Object.hasOwnProperty.call(m, "title")) {
                        d.title = m.title;
                        if (o.oneofs)
                            d._title = "title";
                    }
                    if (m.description != null && Object.hasOwnProperty.call(m, "description")) {
                        d.description = m.description;
                        if (o.oneofs)
                            d._description = "description";
                    }
                    if (m.rowId != null && Object.hasOwnProperty.call(m, "rowId")) {
                        d.rowId = m.rowId;
                        if (o.oneofs)
                            d._rowId = "rowId";
                    }
                    return d;
                };

                Row.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Row.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.ListMessage.Row";
                };

                return Row;
            })();

            ListMessage.Section = (function() {

                function Section(p) {
                    this.rows = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Section.prototype.title = null;
                Section.prototype.rows = $util.emptyArray;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Section.prototype, "_title", {
                    get: $util.oneOfGetter($oneOfFields = ["title"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Section.create = function create(properties) {
                    return new Section(properties);
                };

                Section.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                        w.uint32(10).string(m.title);
                    if (m.rows != null && m.rows.length) {
                        for (var i = 0; i < m.rows.length; ++i)
                            $root.proto.Message.ListMessage.Row.encode(m.rows[i], w.uint32(18).fork(), q + 1).ldelim();
                    }
                    return w;
                };

                Section.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ListMessage.Section();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.title = r.string();
                                break;
                            }
                        case 2: {
                                if (!(m.rows && m.rows.length))
                                    m.rows = [];
                                m.rows.push($root.proto.Message.ListMessage.Row.decode(r, r.uint32(), undefined, n + 1));
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Section.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.ListMessage.Section)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.ListMessage.Section: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.ListMessage.Section();
                    if (d.title != null) {
                        m.title = String(d.title);
                    }
                    if (d.rows) {
                        if (!Array.isArray(d.rows))
                            throw TypeError(".proto.Message.ListMessage.Section.rows: array expected");
                        m.rows = [];
                        for (var i = 0; i < d.rows.length; ++i) {
                            if (!$util.isObject(d.rows[i]))
                                throw TypeError(".proto.Message.ListMessage.Section.rows: object expected");
                            m.rows[i] = $root.proto.Message.ListMessage.Row.fromObject(d.rows[i], n + 1);
                        }
                    }
                    return m;
                };

                Section.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (o.arrays || o.defaults) {
                        d.rows = [];
                    }
                    if (m.title != null && Object.hasOwnProperty.call(m, "title")) {
                        d.title = m.title;
                        if (o.oneofs)
                            d._title = "title";
                    }
                    if (m.rows && m.rows.length) {
                        d.rows = [];
                        for (var j = 0; j < m.rows.length; ++j) {
                            d.rows[j] = $root.proto.Message.ListMessage.Row.toObject(m.rows[j], o, q + 1);
                        }
                    }
                    return d;
                };

                Section.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Section.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.ListMessage.Section";
                };

                return Section;
            })();

            return ListMessage;
        })();

        Message.ListResponseMessage = (function() {

            function ListResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ListResponseMessage.prototype.title = null;
            ListResponseMessage.prototype.listType = null;
            ListResponseMessage.prototype.singleSelectReply = null;
            ListResponseMessage.prototype.contextInfo = null;
            ListResponseMessage.prototype.description = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ListResponseMessage.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ListResponseMessage.prototype, "_listType", {
                get: $util.oneOfGetter($oneOfFields = ["listType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ListResponseMessage.prototype, "_singleSelectReply", {
                get: $util.oneOfGetter($oneOfFields = ["singleSelectReply"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ListResponseMessage.prototype, "_contextInfo", {
                get: $util.oneOfGetter($oneOfFields = ["contextInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ListResponseMessage.prototype, "_description", {
                get: $util.oneOfGetter($oneOfFields = ["description"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            ListResponseMessage.create = function create(properties) {
                return new ListResponseMessage(properties);
            };

            ListResponseMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                    w.uint32(10).string(m.title);
                if (m.listType != null && Object.hasOwnProperty.call(m, "listType"))
                    w.uint32(16).int32(m.listType);
                if (m.singleSelectReply != null && Object.hasOwnProperty.call(m, "singleSelectReply"))
                    $root.proto.Message.ListResponseMessage.SingleSelectReply.encode(m.singleSelectReply, w.uint32(26).fork(), q + 1).ldelim();
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo"))
                    $root.proto.ContextInfo.encode(m.contextInfo, w.uint32(34).fork(), q + 1).ldelim();
                if (m.description != null && Object.hasOwnProperty.call(m, "description"))
                    w.uint32(42).string(m.description);
                return w;
            };

            ListResponseMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ListResponseMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.title = r.string();
                            break;
                        }
                    case 2: {
                            m.listType = r.int32();
                            break;
                        }
                    case 3: {
                            m.singleSelectReply = $root.proto.Message.ListResponseMessage.SingleSelectReply.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 4: {
                            m.contextInfo = $root.proto.ContextInfo.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 5: {
                            m.description = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ListResponseMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ListResponseMessage)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.Message.ListResponseMessage: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.Message.ListResponseMessage();
                if (d.title != null) {
                    m.title = String(d.title);
                }
                switch (d.listType) {
                default:
                    if (typeof d.listType === "number") {
                        m.listType = d.listType;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    m.listType = 0;
                    break;
                case "SINGLE_SELECT":
                case 1:
                    m.listType = 1;
                    break;
                }
                if (d.singleSelectReply != null) {
                    if (!$util.isObject(d.singleSelectReply))
                        throw TypeError(".proto.Message.ListResponseMessage.singleSelectReply: object expected");
                    m.singleSelectReply = $root.proto.Message.ListResponseMessage.SingleSelectReply.fromObject(d.singleSelectReply, n + 1);
                }
                if (d.contextInfo != null) {
                    if (!$util.isObject(d.contextInfo))
                        throw TypeError(".proto.Message.ListResponseMessage.contextInfo: object expected");
                    m.contextInfo = $root.proto.ContextInfo.fromObject(d.contextInfo, n + 1);
                }
                if (d.description != null) {
                    m.description = String(d.description);
                }
                return m;
            };

            ListResponseMessage.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.title != null && Object.hasOwnProperty.call(m, "title")) {
                    d.title = m.title;
                    if (o.oneofs)
                        d._title = "title";
                }
                if (m.listType != null && Object.hasOwnProperty.call(m, "listType")) {
                    d.listType = o.enums === String ? $root.proto.Message.ListResponseMessage.ListType[m.listType] === undefined ? m.listType : $root.proto.Message.ListResponseMessage.ListType[m.listType] : m.listType;
                    if (o.oneofs)
                        d._listType = "listType";
                }
                if (m.singleSelectReply != null && Object.hasOwnProperty.call(m, "singleSelectReply")) {
                    d.singleSelectReply = $root.proto.Message.ListResponseMessage.SingleSelectReply.toObject(m.singleSelectReply, o, q + 1);
                    if (o.oneofs)
                        d._singleSelectReply = "singleSelectReply";
                }
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo")) {
                    d.contextInfo = $root.proto.ContextInfo.toObject(m.contextInfo, o, q + 1);
                    if (o.oneofs)
                        d._contextInfo = "contextInfo";
                }
                if (m.description != null && Object.hasOwnProperty.call(m, "description")) {
                    d.description = m.description;
                    if (o.oneofs)
                        d._description = "description";
                }
                return d;
            };

            ListResponseMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ListResponseMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ListResponseMessage";
            };

            ListResponseMessage.ListType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "SINGLE_SELECT"] = 1;
                return values;
            })();

            ListResponseMessage.SingleSelectReply = (function() {

                function SingleSelectReply(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                SingleSelectReply.prototype.selectedRowId = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SingleSelectReply.prototype, "_selectedRowId", {
                    get: $util.oneOfGetter($oneOfFields = ["selectedRowId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                SingleSelectReply.create = function create(properties) {
                    return new SingleSelectReply(properties);
                };

                SingleSelectReply.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.selectedRowId != null && Object.hasOwnProperty.call(m, "selectedRowId"))
                        w.uint32(10).string(m.selectedRowId);
                    return w;
                };

                SingleSelectReply.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ListResponseMessage.SingleSelectReply();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.selectedRowId = r.string();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                SingleSelectReply.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.Message.ListResponseMessage.SingleSelectReply)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.Message.ListResponseMessage.SingleSelectReply: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.Message.ListResponseMessage.SingleSelectReply();
                    if (d.selectedRowId != null) {
                        m.selectedRowId = String(d.selectedRowId);
                    }
                    return m;
                };

                SingleSelectReply.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.selectedRowId != null && Object.hasOwnProperty.call(m, "selectedRowId")) {
                        d.selectedRowId = m.selectedRowId;
                        if (o.oneofs)
                            d._selectedRowId = "selectedRowId";
                    }
                    return d;
                };

                SingleSelectReply.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                SingleSelectReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.Message.ListResponseMessage.SingleSelectReply";
                };

                return SingleSelectReply;
            })();

            return ListResponseMessage;
        })();

        Message.LocationMessage = (function() {

            function LocationMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LocationMessage.create = function create(properties) {
                return new LocationMessage(properties);
            };

            LocationMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            LocationMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.LocationMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            LocationMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.LocationMessage)
                    return d;
                return new $root.proto.Message.LocationMessage();
            };

            LocationMessage.toObject = function toObject() {
                return {};
            };

            LocationMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            LocationMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.LocationMessage";
            };

            return LocationMessage;
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

        Message.ProductMessage = (function() {

            function ProductMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ProductMessage.create = function create(properties) {
                return new ProductMessage(properties);
            };

            ProductMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            ProductMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ProductMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ProductMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ProductMessage)
                    return d;
                return new $root.proto.Message.ProductMessage();
            };

            ProductMessage.toObject = function toObject() {
                return {};
            };

            ProductMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ProductMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ProductMessage";
            };

            return ProductMessage;
        })();

        Message.VideoMessage = (function() {

            function VideoMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            VideoMessage.create = function create(properties) {
                return new VideoMessage(properties);
            };

            VideoMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            VideoMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.VideoMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            VideoMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.VideoMessage)
                    return d;
                return new $root.proto.Message.VideoMessage();
            };

            VideoMessage.toObject = function toObject() {
                return {};
            };

            VideoMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            VideoMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.VideoMessage";
            };

            VideoMessage.Attribution = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "GIPHY"] = 1;
                values[valuesById[2] = "TENOR"] = 2;
                values[valuesById[3] = "KLIPY"] = 3;
                return values;
            })();

            VideoMessage.VideoSourceType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "USER_VIDEO"] = 0;
                values[valuesById[1] = "AI_GENERATED"] = 1;
                return values;
            })();

            return VideoMessage;
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

    proto.UrlTrackingMap = proto.UrlTrackingMap || createEmptyMessage("UrlTrackingMap")

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
