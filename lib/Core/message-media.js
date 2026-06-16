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

    proto.InteractiveAnnotation = proto.InteractiveAnnotation || createEmptyMessage("InteractiveAnnotation")

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

            AudioMessage.prototype.url = null;
            AudioMessage.prototype.mimetype = null;
            AudioMessage.prototype.fileSha256 = null;
            AudioMessage.prototype.fileLength = null;
            AudioMessage.prototype.seconds = null;
            AudioMessage.prototype.ptt = null;
            AudioMessage.prototype.mediaKey = null;
            AudioMessage.prototype.fileEncSha256 = null;
            AudioMessage.prototype.directPath = null;
            AudioMessage.prototype.mediaKeyTimestamp = null;
            AudioMessage.prototype.contextInfo = null;
            AudioMessage.prototype.streamingSidecar = null;
            AudioMessage.prototype.waveform = null;
            AudioMessage.prototype.backgroundArgb = null;
            AudioMessage.prototype.viewOnce = null;
            AudioMessage.prototype.accessibilityLabel = null;
            AudioMessage.prototype.mediaKeyDomain = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_url", {
                get: $util.oneOfGetter($oneOfFields = ["url"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_mimetype", {
                get: $util.oneOfGetter($oneOfFields = ["mimetype"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_fileSha256", {
                get: $util.oneOfGetter($oneOfFields = ["fileSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_fileLength", {
                get: $util.oneOfGetter($oneOfFields = ["fileLength"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_seconds", {
                get: $util.oneOfGetter($oneOfFields = ["seconds"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_ptt", {
                get: $util.oneOfGetter($oneOfFields = ["ptt"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_mediaKey", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_fileEncSha256", {
                get: $util.oneOfGetter($oneOfFields = ["fileEncSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_directPath", {
                get: $util.oneOfGetter($oneOfFields = ["directPath"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_mediaKeyTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKeyTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_contextInfo", {
                get: $util.oneOfGetter($oneOfFields = ["contextInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_streamingSidecar", {
                get: $util.oneOfGetter($oneOfFields = ["streamingSidecar"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_waveform", {
                get: $util.oneOfGetter($oneOfFields = ["waveform"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_backgroundArgb", {
                get: $util.oneOfGetter($oneOfFields = ["backgroundArgb"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_viewOnce", {
                get: $util.oneOfGetter($oneOfFields = ["viewOnce"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_accessibilityLabel", {
                get: $util.oneOfGetter($oneOfFields = ["accessibilityLabel"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AudioMessage.prototype, "_mediaKeyDomain", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKeyDomain"]),
                set: $util.oneOfSetter($oneOfFields)
            });

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
                if (m.url != null && Object.hasOwnProperty.call(m, "url"))
                    w.uint32(10).string(m.url);
                if (m.mimetype != null && Object.hasOwnProperty.call(m, "mimetype"))
                    w.uint32(18).string(m.mimetype);
                if (m.fileSha256 != null && Object.hasOwnProperty.call(m, "fileSha256"))
                    w.uint32(26).bytes(m.fileSha256);
                if (m.fileLength != null && Object.hasOwnProperty.call(m, "fileLength"))
                    w.uint32(32).uint64(m.fileLength);
                if (m.seconds != null && Object.hasOwnProperty.call(m, "seconds"))
                    w.uint32(40).uint32(m.seconds);
                if (m.ptt != null && Object.hasOwnProperty.call(m, "ptt"))
                    w.uint32(48).bool(m.ptt);
                if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey"))
                    w.uint32(58).bytes(m.mediaKey);
                if (m.fileEncSha256 != null && Object.hasOwnProperty.call(m, "fileEncSha256"))
                    w.uint32(66).bytes(m.fileEncSha256);
                if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath"))
                    w.uint32(74).string(m.directPath);
                if (m.mediaKeyTimestamp != null && Object.hasOwnProperty.call(m, "mediaKeyTimestamp"))
                    w.uint32(80).int64(m.mediaKeyTimestamp);
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo"))
                    $root.proto.ContextInfo.encode(m.contextInfo, w.uint32(138).fork(), q + 1).ldelim();
                if (m.streamingSidecar != null && Object.hasOwnProperty.call(m, "streamingSidecar"))
                    w.uint32(146).bytes(m.streamingSidecar);
                if (m.waveform != null && Object.hasOwnProperty.call(m, "waveform"))
                    w.uint32(154).bytes(m.waveform);
                if (m.backgroundArgb != null && Object.hasOwnProperty.call(m, "backgroundArgb"))
                    w.uint32(165).fixed32(m.backgroundArgb);
                if (m.viewOnce != null && Object.hasOwnProperty.call(m, "viewOnce"))
                    w.uint32(168).bool(m.viewOnce);
                if (m.accessibilityLabel != null && Object.hasOwnProperty.call(m, "accessibilityLabel"))
                    w.uint32(178).string(m.accessibilityLabel);
                if (m.mediaKeyDomain != null && Object.hasOwnProperty.call(m, "mediaKeyDomain"))
                    $root.proto.Message.MediaKeyDomain.encode(m.mediaKeyDomain, w.uint32(186).fork(), q + 1).ldelim();
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
                    case 1: {
                            m.url = r.string();
                            break;
                        }
                    case 2: {
                            m.mimetype = r.string();
                            break;
                        }
                    case 3: {
                            m.fileSha256 = r.bytes();
                            break;
                        }
                    case 4: {
                            m.fileLength = r.uint64();
                            break;
                        }
                    case 5: {
                            m.seconds = r.uint32();
                            break;
                        }
                    case 6: {
                            m.ptt = r.bool();
                            break;
                        }
                    case 7: {
                            m.mediaKey = r.bytes();
                            break;
                        }
                    case 8: {
                            m.fileEncSha256 = r.bytes();
                            break;
                        }
                    case 9: {
                            m.directPath = r.string();
                            break;
                        }
                    case 10: {
                            m.mediaKeyTimestamp = r.int64();
                            break;
                        }
                    case 17: {
                            m.contextInfo = $root.proto.ContextInfo.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 18: {
                            m.streamingSidecar = r.bytes();
                            break;
                        }
                    case 19: {
                            m.waveform = r.bytes();
                            break;
                        }
                    case 20: {
                            m.backgroundArgb = r.fixed32();
                            break;
                        }
                    case 21: {
                            m.viewOnce = r.bool();
                            break;
                        }
                    case 22: {
                            m.accessibilityLabel = r.string();
                            break;
                        }
                    case 23: {
                            m.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
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
                if (!$util.isObject(d))
                    throw TypeError(".proto.Message.AudioMessage: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.Message.AudioMessage();
                if (d.url != null) {
                    m.url = String(d.url);
                }
                if (d.mimetype != null) {
                    m.mimetype = String(d.mimetype);
                }
                if (d.fileSha256 != null) {
                    if (typeof d.fileSha256 === "string")
                        $util.base64.decode(d.fileSha256, m.fileSha256 = $util.newBuffer($util.base64.length(d.fileSha256)), 0);
                    else if (d.fileSha256.length >= 0)
                        m.fileSha256 = d.fileSha256;
                }
                if (d.fileLength != null) {
                    if ($util.Long)
                        m.fileLength = $util.Long.fromValue(d.fileLength, true);
                    else if (typeof d.fileLength === "string")
                        m.fileLength = parseInt(d.fileLength, 10);
                    else if (typeof d.fileLength === "number")
                        m.fileLength = d.fileLength;
                    else if (typeof d.fileLength === "object")
                        m.fileLength = new $util.LongBits(d.fileLength.low >>> 0, d.fileLength.high >>> 0).toNumber(true);
                }
                if (d.seconds != null) {
                    m.seconds = d.seconds >>> 0;
                }
                if (d.ptt != null) {
                    m.ptt = Boolean(d.ptt);
                }
                if (d.mediaKey != null) {
                    if (typeof d.mediaKey === "string")
                        $util.base64.decode(d.mediaKey, m.mediaKey = $util.newBuffer($util.base64.length(d.mediaKey)), 0);
                    else if (d.mediaKey.length >= 0)
                        m.mediaKey = d.mediaKey;
                }
                if (d.fileEncSha256 != null) {
                    if (typeof d.fileEncSha256 === "string")
                        $util.base64.decode(d.fileEncSha256, m.fileEncSha256 = $util.newBuffer($util.base64.length(d.fileEncSha256)), 0);
                    else if (d.fileEncSha256.length >= 0)
                        m.fileEncSha256 = d.fileEncSha256;
                }
                if (d.directPath != null) {
                    m.directPath = String(d.directPath);
                }
                if (d.mediaKeyTimestamp != null) {
                    if ($util.Long)
                        m.mediaKeyTimestamp = $util.Long.fromValue(d.mediaKeyTimestamp, false);
                    else if (typeof d.mediaKeyTimestamp === "string")
                        m.mediaKeyTimestamp = parseInt(d.mediaKeyTimestamp, 10);
                    else if (typeof d.mediaKeyTimestamp === "number")
                        m.mediaKeyTimestamp = d.mediaKeyTimestamp;
                    else if (typeof d.mediaKeyTimestamp === "object")
                        m.mediaKeyTimestamp = new $util.LongBits(d.mediaKeyTimestamp.low >>> 0, d.mediaKeyTimestamp.high >>> 0).toNumber();
                }
                if (d.contextInfo != null) {
                    if (!$util.isObject(d.contextInfo))
                        throw TypeError(".proto.Message.AudioMessage.contextInfo: object expected");
                    m.contextInfo = $root.proto.ContextInfo.fromObject(d.contextInfo, n + 1);
                }
                if (d.streamingSidecar != null) {
                    if (typeof d.streamingSidecar === "string")
                        $util.base64.decode(d.streamingSidecar, m.streamingSidecar = $util.newBuffer($util.base64.length(d.streamingSidecar)), 0);
                    else if (d.streamingSidecar.length >= 0)
                        m.streamingSidecar = d.streamingSidecar;
                }
                if (d.waveform != null) {
                    if (typeof d.waveform === "string")
                        $util.base64.decode(d.waveform, m.waveform = $util.newBuffer($util.base64.length(d.waveform)), 0);
                    else if (d.waveform.length >= 0)
                        m.waveform = d.waveform;
                }
                if (d.backgroundArgb != null) {
                    m.backgroundArgb = d.backgroundArgb >>> 0;
                }
                if (d.viewOnce != null) {
                    m.viewOnce = Boolean(d.viewOnce);
                }
                if (d.accessibilityLabel != null) {
                    m.accessibilityLabel = String(d.accessibilityLabel);
                }
                if (d.mediaKeyDomain != null) {
                    if (!$util.isObject(d.mediaKeyDomain))
                        throw TypeError(".proto.Message.AudioMessage.mediaKeyDomain: object expected");
                    m.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.fromObject(d.mediaKeyDomain, n + 1);
                }
                return m;
            };

            AudioMessage.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.url != null && Object.hasOwnProperty.call(m, "url")) {
                    d.url = m.url;
                    if (o.oneofs)
                        d._url = "url";
                }
                if (m.mimetype != null && Object.hasOwnProperty.call(m, "mimetype")) {
                    d.mimetype = m.mimetype;
                    if (o.oneofs)
                        d._mimetype = "mimetype";
                }
                if (m.fileSha256 != null && Object.hasOwnProperty.call(m, "fileSha256")) {
                    d.fileSha256 = o.bytes === String ? $util.base64.encode(m.fileSha256, 0, m.fileSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileSha256) : m.fileSha256;
                    if (o.oneofs)
                        d._fileSha256 = "fileSha256";
                }
                if (m.fileLength != null && Object.hasOwnProperty.call(m, "fileLength")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.fileLength = typeof m.fileLength === "number" ? BigInt(m.fileLength) : $util.Long.fromBits(m.fileLength.low >>> 0, m.fileLength.high >>> 0, true).toBigInt();
                    else if (typeof m.fileLength === "number")
                        d.fileLength = o.longs === String ? String(m.fileLength) : m.fileLength;
                    else
                        d.fileLength = o.longs === String ? longToString(m.fileLength, true) : o.longs === Number ? longToNumber(m.fileLength, true) : m.fileLength;
                    if (o.oneofs)
                        d._fileLength = "fileLength";
                }
                if (m.seconds != null && Object.hasOwnProperty.call(m, "seconds")) {
                    d.seconds = m.seconds;
                    if (o.oneofs)
                        d._seconds = "seconds";
                }
                if (m.ptt != null && Object.hasOwnProperty.call(m, "ptt")) {
                    d.ptt = m.ptt;
                    if (o.oneofs)
                        d._ptt = "ptt";
                }
                if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey")) {
                    d.mediaKey = o.bytes === String ? $util.base64.encode(m.mediaKey, 0, m.mediaKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.mediaKey) : m.mediaKey;
                    if (o.oneofs)
                        d._mediaKey = "mediaKey";
                }
                if (m.fileEncSha256 != null && Object.hasOwnProperty.call(m, "fileEncSha256")) {
                    d.fileEncSha256 = o.bytes === String ? $util.base64.encode(m.fileEncSha256, 0, m.fileEncSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileEncSha256) : m.fileEncSha256;
                    if (o.oneofs)
                        d._fileEncSha256 = "fileEncSha256";
                }
                if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath")) {
                    d.directPath = m.directPath;
                    if (o.oneofs)
                        d._directPath = "directPath";
                }
                if (m.mediaKeyTimestamp != null && Object.hasOwnProperty.call(m, "mediaKeyTimestamp")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.mediaKeyTimestamp = typeof m.mediaKeyTimestamp === "number" ? BigInt(m.mediaKeyTimestamp) : $util.Long.fromBits(m.mediaKeyTimestamp.low >>> 0, m.mediaKeyTimestamp.high >>> 0, false).toBigInt();
                    else if (typeof m.mediaKeyTimestamp === "number")
                        d.mediaKeyTimestamp = o.longs === String ? String(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
                    else
                        d.mediaKeyTimestamp = o.longs === String ? longToString(m.mediaKeyTimestamp) : o.longs === Number ? longToNumber(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
                    if (o.oneofs)
                        d._mediaKeyTimestamp = "mediaKeyTimestamp";
                }
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo")) {
                    d.contextInfo = $root.proto.ContextInfo.toObject(m.contextInfo, o, q + 1);
                    if (o.oneofs)
                        d._contextInfo = "contextInfo";
                }
                if (m.streamingSidecar != null && Object.hasOwnProperty.call(m, "streamingSidecar")) {
                    d.streamingSidecar = o.bytes === String ? $util.base64.encode(m.streamingSidecar, 0, m.streamingSidecar.length) : o.bytes === Array ? Array.prototype.slice.call(m.streamingSidecar) : m.streamingSidecar;
                    if (o.oneofs)
                        d._streamingSidecar = "streamingSidecar";
                }
                if (m.waveform != null && Object.hasOwnProperty.call(m, "waveform")) {
                    d.waveform = o.bytes === String ? $util.base64.encode(m.waveform, 0, m.waveform.length) : o.bytes === Array ? Array.prototype.slice.call(m.waveform) : m.waveform;
                    if (o.oneofs)
                        d._waveform = "waveform";
                }
                if (m.backgroundArgb != null && Object.hasOwnProperty.call(m, "backgroundArgb")) {
                    d.backgroundArgb = m.backgroundArgb;
                    if (o.oneofs)
                        d._backgroundArgb = "backgroundArgb";
                }
                if (m.viewOnce != null && Object.hasOwnProperty.call(m, "viewOnce")) {
                    d.viewOnce = m.viewOnce;
                    if (o.oneofs)
                        d._viewOnce = "viewOnce";
                }
                if (m.accessibilityLabel != null && Object.hasOwnProperty.call(m, "accessibilityLabel")) {
                    d.accessibilityLabel = m.accessibilityLabel;
                    if (o.oneofs)
                        d._accessibilityLabel = "accessibilityLabel";
                }
                if (m.mediaKeyDomain != null && Object.hasOwnProperty.call(m, "mediaKeyDomain")) {
                    d.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.toObject(m.mediaKeyDomain, o, q + 1);
                    if (o.oneofs)
                        d._mediaKeyDomain = "mediaKeyDomain";
                }
                return d;
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

        Message.DocumentMessage = (function() {

            function DocumentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DocumentMessage.prototype.url = null;
            DocumentMessage.prototype.mimetype = null;
            DocumentMessage.prototype.title = null;
            DocumentMessage.prototype.fileSha256 = null;
            DocumentMessage.prototype.fileLength = null;
            DocumentMessage.prototype.pageCount = null;
            DocumentMessage.prototype.mediaKey = null;
            DocumentMessage.prototype.fileName = null;
            DocumentMessage.prototype.fileEncSha256 = null;
            DocumentMessage.prototype.directPath = null;
            DocumentMessage.prototype.mediaKeyTimestamp = null;
            DocumentMessage.prototype.contactVcard = null;
            DocumentMessage.prototype.thumbnailDirectPath = null;
            DocumentMessage.prototype.thumbnailSha256 = null;
            DocumentMessage.prototype.thumbnailEncSha256 = null;
            DocumentMessage.prototype.jpegThumbnail = null;
            DocumentMessage.prototype.contextInfo = null;
            DocumentMessage.prototype.thumbnailHeight = null;
            DocumentMessage.prototype.thumbnailWidth = null;
            DocumentMessage.prototype.caption = null;
            DocumentMessage.prototype.accessibilityLabel = null;
            DocumentMessage.prototype.mediaKeyDomain = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_url", {
                get: $util.oneOfGetter($oneOfFields = ["url"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_mimetype", {
                get: $util.oneOfGetter($oneOfFields = ["mimetype"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_fileSha256", {
                get: $util.oneOfGetter($oneOfFields = ["fileSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_fileLength", {
                get: $util.oneOfGetter($oneOfFields = ["fileLength"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_pageCount", {
                get: $util.oneOfGetter($oneOfFields = ["pageCount"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_mediaKey", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_fileName", {
                get: $util.oneOfGetter($oneOfFields = ["fileName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_fileEncSha256", {
                get: $util.oneOfGetter($oneOfFields = ["fileEncSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_directPath", {
                get: $util.oneOfGetter($oneOfFields = ["directPath"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_mediaKeyTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKeyTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_contactVcard", {
                get: $util.oneOfGetter($oneOfFields = ["contactVcard"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_thumbnailDirectPath", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailDirectPath"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_thumbnailSha256", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_thumbnailEncSha256", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailEncSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_jpegThumbnail", {
                get: $util.oneOfGetter($oneOfFields = ["jpegThumbnail"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_contextInfo", {
                get: $util.oneOfGetter($oneOfFields = ["contextInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_thumbnailHeight", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailHeight"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_thumbnailWidth", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailWidth"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_caption", {
                get: $util.oneOfGetter($oneOfFields = ["caption"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_accessibilityLabel", {
                get: $util.oneOfGetter($oneOfFields = ["accessibilityLabel"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DocumentMessage.prototype, "_mediaKeyDomain", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKeyDomain"]),
                set: $util.oneOfSetter($oneOfFields)
            });

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
                if (m.url != null && Object.hasOwnProperty.call(m, "url"))
                    w.uint32(10).string(m.url);
                if (m.mimetype != null && Object.hasOwnProperty.call(m, "mimetype"))
                    w.uint32(18).string(m.mimetype);
                if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                    w.uint32(26).string(m.title);
                if (m.fileSha256 != null && Object.hasOwnProperty.call(m, "fileSha256"))
                    w.uint32(34).bytes(m.fileSha256);
                if (m.fileLength != null && Object.hasOwnProperty.call(m, "fileLength"))
                    w.uint32(40).uint64(m.fileLength);
                if (m.pageCount != null && Object.hasOwnProperty.call(m, "pageCount"))
                    w.uint32(48).uint32(m.pageCount);
                if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey"))
                    w.uint32(58).bytes(m.mediaKey);
                if (m.fileName != null && Object.hasOwnProperty.call(m, "fileName"))
                    w.uint32(66).string(m.fileName);
                if (m.fileEncSha256 != null && Object.hasOwnProperty.call(m, "fileEncSha256"))
                    w.uint32(74).bytes(m.fileEncSha256);
                if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath"))
                    w.uint32(82).string(m.directPath);
                if (m.mediaKeyTimestamp != null && Object.hasOwnProperty.call(m, "mediaKeyTimestamp"))
                    w.uint32(88).int64(m.mediaKeyTimestamp);
                if (m.contactVcard != null && Object.hasOwnProperty.call(m, "contactVcard"))
                    w.uint32(96).bool(m.contactVcard);
                if (m.thumbnailDirectPath != null && Object.hasOwnProperty.call(m, "thumbnailDirectPath"))
                    w.uint32(106).string(m.thumbnailDirectPath);
                if (m.thumbnailSha256 != null && Object.hasOwnProperty.call(m, "thumbnailSha256"))
                    w.uint32(114).bytes(m.thumbnailSha256);
                if (m.thumbnailEncSha256 != null && Object.hasOwnProperty.call(m, "thumbnailEncSha256"))
                    w.uint32(122).bytes(m.thumbnailEncSha256);
                if (m.jpegThumbnail != null && Object.hasOwnProperty.call(m, "jpegThumbnail"))
                    w.uint32(130).bytes(m.jpegThumbnail);
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo"))
                    $root.proto.ContextInfo.encode(m.contextInfo, w.uint32(138).fork(), q + 1).ldelim();
                if (m.thumbnailHeight != null && Object.hasOwnProperty.call(m, "thumbnailHeight"))
                    w.uint32(144).uint32(m.thumbnailHeight);
                if (m.thumbnailWidth != null && Object.hasOwnProperty.call(m, "thumbnailWidth"))
                    w.uint32(152).uint32(m.thumbnailWidth);
                if (m.caption != null && Object.hasOwnProperty.call(m, "caption"))
                    w.uint32(162).string(m.caption);
                if (m.accessibilityLabel != null && Object.hasOwnProperty.call(m, "accessibilityLabel"))
                    w.uint32(170).string(m.accessibilityLabel);
                if (m.mediaKeyDomain != null && Object.hasOwnProperty.call(m, "mediaKeyDomain"))
                    $root.proto.Message.MediaKeyDomain.encode(m.mediaKeyDomain, w.uint32(178).fork(), q + 1).ldelim();
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
                    case 1: {
                            m.url = r.string();
                            break;
                        }
                    case 2: {
                            m.mimetype = r.string();
                            break;
                        }
                    case 3: {
                            m.title = r.string();
                            break;
                        }
                    case 4: {
                            m.fileSha256 = r.bytes();
                            break;
                        }
                    case 5: {
                            m.fileLength = r.uint64();
                            break;
                        }
                    case 6: {
                            m.pageCount = r.uint32();
                            break;
                        }
                    case 7: {
                            m.mediaKey = r.bytes();
                            break;
                        }
                    case 8: {
                            m.fileName = r.string();
                            break;
                        }
                    case 9: {
                            m.fileEncSha256 = r.bytes();
                            break;
                        }
                    case 10: {
                            m.directPath = r.string();
                            break;
                        }
                    case 11: {
                            m.mediaKeyTimestamp = r.int64();
                            break;
                        }
                    case 12: {
                            m.contactVcard = r.bool();
                            break;
                        }
                    case 13: {
                            m.thumbnailDirectPath = r.string();
                            break;
                        }
                    case 14: {
                            m.thumbnailSha256 = r.bytes();
                            break;
                        }
                    case 15: {
                            m.thumbnailEncSha256 = r.bytes();
                            break;
                        }
                    case 16: {
                            m.jpegThumbnail = r.bytes();
                            break;
                        }
                    case 17: {
                            m.contextInfo = $root.proto.ContextInfo.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 18: {
                            m.thumbnailHeight = r.uint32();
                            break;
                        }
                    case 19: {
                            m.thumbnailWidth = r.uint32();
                            break;
                        }
                    case 20: {
                            m.caption = r.string();
                            break;
                        }
                    case 21: {
                            m.accessibilityLabel = r.string();
                            break;
                        }
                    case 22: {
                            m.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
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
                if (!$util.isObject(d))
                    throw TypeError(".proto.Message.DocumentMessage: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.Message.DocumentMessage();
                if (d.url != null) {
                    m.url = String(d.url);
                }
                if (d.mimetype != null) {
                    m.mimetype = String(d.mimetype);
                }
                if (d.title != null) {
                    m.title = String(d.title);
                }
                if (d.fileSha256 != null) {
                    if (typeof d.fileSha256 === "string")
                        $util.base64.decode(d.fileSha256, m.fileSha256 = $util.newBuffer($util.base64.length(d.fileSha256)), 0);
                    else if (d.fileSha256.length >= 0)
                        m.fileSha256 = d.fileSha256;
                }
                if (d.fileLength != null) {
                    if ($util.Long)
                        m.fileLength = $util.Long.fromValue(d.fileLength, true);
                    else if (typeof d.fileLength === "string")
                        m.fileLength = parseInt(d.fileLength, 10);
                    else if (typeof d.fileLength === "number")
                        m.fileLength = d.fileLength;
                    else if (typeof d.fileLength === "object")
                        m.fileLength = new $util.LongBits(d.fileLength.low >>> 0, d.fileLength.high >>> 0).toNumber(true);
                }
                if (d.pageCount != null) {
                    m.pageCount = d.pageCount >>> 0;
                }
                if (d.mediaKey != null) {
                    if (typeof d.mediaKey === "string")
                        $util.base64.decode(d.mediaKey, m.mediaKey = $util.newBuffer($util.base64.length(d.mediaKey)), 0);
                    else if (d.mediaKey.length >= 0)
                        m.mediaKey = d.mediaKey;
                }
                if (d.fileName != null) {
                    m.fileName = String(d.fileName);
                }
                if (d.fileEncSha256 != null) {
                    if (typeof d.fileEncSha256 === "string")
                        $util.base64.decode(d.fileEncSha256, m.fileEncSha256 = $util.newBuffer($util.base64.length(d.fileEncSha256)), 0);
                    else if (d.fileEncSha256.length >= 0)
                        m.fileEncSha256 = d.fileEncSha256;
                }
                if (d.directPath != null) {
                    m.directPath = String(d.directPath);
                }
                if (d.mediaKeyTimestamp != null) {
                    if ($util.Long)
                        m.mediaKeyTimestamp = $util.Long.fromValue(d.mediaKeyTimestamp, false);
                    else if (typeof d.mediaKeyTimestamp === "string")
                        m.mediaKeyTimestamp = parseInt(d.mediaKeyTimestamp, 10);
                    else if (typeof d.mediaKeyTimestamp === "number")
                        m.mediaKeyTimestamp = d.mediaKeyTimestamp;
                    else if (typeof d.mediaKeyTimestamp === "object")
                        m.mediaKeyTimestamp = new $util.LongBits(d.mediaKeyTimestamp.low >>> 0, d.mediaKeyTimestamp.high >>> 0).toNumber();
                }
                if (d.contactVcard != null) {
                    m.contactVcard = Boolean(d.contactVcard);
                }
                if (d.thumbnailDirectPath != null) {
                    m.thumbnailDirectPath = String(d.thumbnailDirectPath);
                }
                if (d.thumbnailSha256 != null) {
                    if (typeof d.thumbnailSha256 === "string")
                        $util.base64.decode(d.thumbnailSha256, m.thumbnailSha256 = $util.newBuffer($util.base64.length(d.thumbnailSha256)), 0);
                    else if (d.thumbnailSha256.length >= 0)
                        m.thumbnailSha256 = d.thumbnailSha256;
                }
                if (d.thumbnailEncSha256 != null) {
                    if (typeof d.thumbnailEncSha256 === "string")
                        $util.base64.decode(d.thumbnailEncSha256, m.thumbnailEncSha256 = $util.newBuffer($util.base64.length(d.thumbnailEncSha256)), 0);
                    else if (d.thumbnailEncSha256.length >= 0)
                        m.thumbnailEncSha256 = d.thumbnailEncSha256;
                }
                if (d.jpegThumbnail != null) {
                    if (typeof d.jpegThumbnail === "string")
                        $util.base64.decode(d.jpegThumbnail, m.jpegThumbnail = $util.newBuffer($util.base64.length(d.jpegThumbnail)), 0);
                    else if (d.jpegThumbnail.length >= 0)
                        m.jpegThumbnail = d.jpegThumbnail;
                }
                if (d.contextInfo != null) {
                    if (!$util.isObject(d.contextInfo))
                        throw TypeError(".proto.Message.DocumentMessage.contextInfo: object expected");
                    m.contextInfo = $root.proto.ContextInfo.fromObject(d.contextInfo, n + 1);
                }
                if (d.thumbnailHeight != null) {
                    m.thumbnailHeight = d.thumbnailHeight >>> 0;
                }
                if (d.thumbnailWidth != null) {
                    m.thumbnailWidth = d.thumbnailWidth >>> 0;
                }
                if (d.caption != null) {
                    m.caption = String(d.caption);
                }
                if (d.accessibilityLabel != null) {
                    m.accessibilityLabel = String(d.accessibilityLabel);
                }
                if (d.mediaKeyDomain != null) {
                    if (!$util.isObject(d.mediaKeyDomain))
                        throw TypeError(".proto.Message.DocumentMessage.mediaKeyDomain: object expected");
                    m.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.fromObject(d.mediaKeyDomain, n + 1);
                }
                return m;
            };

            DocumentMessage.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.url != null && Object.hasOwnProperty.call(m, "url")) {
                    d.url = m.url;
                    if (o.oneofs)
                        d._url = "url";
                }
                if (m.mimetype != null && Object.hasOwnProperty.call(m, "mimetype")) {
                    d.mimetype = m.mimetype;
                    if (o.oneofs)
                        d._mimetype = "mimetype";
                }
                if (m.title != null && Object.hasOwnProperty.call(m, "title")) {
                    d.title = m.title;
                    if (o.oneofs)
                        d._title = "title";
                }
                if (m.fileSha256 != null && Object.hasOwnProperty.call(m, "fileSha256")) {
                    d.fileSha256 = o.bytes === String ? $util.base64.encode(m.fileSha256, 0, m.fileSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileSha256) : m.fileSha256;
                    if (o.oneofs)
                        d._fileSha256 = "fileSha256";
                }
                if (m.fileLength != null && Object.hasOwnProperty.call(m, "fileLength")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.fileLength = typeof m.fileLength === "number" ? BigInt(m.fileLength) : $util.Long.fromBits(m.fileLength.low >>> 0, m.fileLength.high >>> 0, true).toBigInt();
                    else if (typeof m.fileLength === "number")
                        d.fileLength = o.longs === String ? String(m.fileLength) : m.fileLength;
                    else
                        d.fileLength = o.longs === String ? longToString(m.fileLength, true) : o.longs === Number ? longToNumber(m.fileLength, true) : m.fileLength;
                    if (o.oneofs)
                        d._fileLength = "fileLength";
                }
                if (m.pageCount != null && Object.hasOwnProperty.call(m, "pageCount")) {
                    d.pageCount = m.pageCount;
                    if (o.oneofs)
                        d._pageCount = "pageCount";
                }
                if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey")) {
                    d.mediaKey = o.bytes === String ? $util.base64.encode(m.mediaKey, 0, m.mediaKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.mediaKey) : m.mediaKey;
                    if (o.oneofs)
                        d._mediaKey = "mediaKey";
                }
                if (m.fileName != null && Object.hasOwnProperty.call(m, "fileName")) {
                    d.fileName = m.fileName;
                    if (o.oneofs)
                        d._fileName = "fileName";
                }
                if (m.fileEncSha256 != null && Object.hasOwnProperty.call(m, "fileEncSha256")) {
                    d.fileEncSha256 = o.bytes === String ? $util.base64.encode(m.fileEncSha256, 0, m.fileEncSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileEncSha256) : m.fileEncSha256;
                    if (o.oneofs)
                        d._fileEncSha256 = "fileEncSha256";
                }
                if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath")) {
                    d.directPath = m.directPath;
                    if (o.oneofs)
                        d._directPath = "directPath";
                }
                if (m.mediaKeyTimestamp != null && Object.hasOwnProperty.call(m, "mediaKeyTimestamp")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.mediaKeyTimestamp = typeof m.mediaKeyTimestamp === "number" ? BigInt(m.mediaKeyTimestamp) : $util.Long.fromBits(m.mediaKeyTimestamp.low >>> 0, m.mediaKeyTimestamp.high >>> 0, false).toBigInt();
                    else if (typeof m.mediaKeyTimestamp === "number")
                        d.mediaKeyTimestamp = o.longs === String ? String(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
                    else
                        d.mediaKeyTimestamp = o.longs === String ? longToString(m.mediaKeyTimestamp) : o.longs === Number ? longToNumber(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
                    if (o.oneofs)
                        d._mediaKeyTimestamp = "mediaKeyTimestamp";
                }
                if (m.contactVcard != null && Object.hasOwnProperty.call(m, "contactVcard")) {
                    d.contactVcard = m.contactVcard;
                    if (o.oneofs)
                        d._contactVcard = "contactVcard";
                }
                if (m.thumbnailDirectPath != null && Object.hasOwnProperty.call(m, "thumbnailDirectPath")) {
                    d.thumbnailDirectPath = m.thumbnailDirectPath;
                    if (o.oneofs)
                        d._thumbnailDirectPath = "thumbnailDirectPath";
                }
                if (m.thumbnailSha256 != null && Object.hasOwnProperty.call(m, "thumbnailSha256")) {
                    d.thumbnailSha256 = o.bytes === String ? $util.base64.encode(m.thumbnailSha256, 0, m.thumbnailSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.thumbnailSha256) : m.thumbnailSha256;
                    if (o.oneofs)
                        d._thumbnailSha256 = "thumbnailSha256";
                }
                if (m.thumbnailEncSha256 != null && Object.hasOwnProperty.call(m, "thumbnailEncSha256")) {
                    d.thumbnailEncSha256 = o.bytes === String ? $util.base64.encode(m.thumbnailEncSha256, 0, m.thumbnailEncSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.thumbnailEncSha256) : m.thumbnailEncSha256;
                    if (o.oneofs)
                        d._thumbnailEncSha256 = "thumbnailEncSha256";
                }
                if (m.jpegThumbnail != null && Object.hasOwnProperty.call(m, "jpegThumbnail")) {
                    d.jpegThumbnail = o.bytes === String ? $util.base64.encode(m.jpegThumbnail, 0, m.jpegThumbnail.length) : o.bytes === Array ? Array.prototype.slice.call(m.jpegThumbnail) : m.jpegThumbnail;
                    if (o.oneofs)
                        d._jpegThumbnail = "jpegThumbnail";
                }
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo")) {
                    d.contextInfo = $root.proto.ContextInfo.toObject(m.contextInfo, o, q + 1);
                    if (o.oneofs)
                        d._contextInfo = "contextInfo";
                }
                if (m.thumbnailHeight != null && Object.hasOwnProperty.call(m, "thumbnailHeight")) {
                    d.thumbnailHeight = m.thumbnailHeight;
                    if (o.oneofs)
                        d._thumbnailHeight = "thumbnailHeight";
                }
                if (m.thumbnailWidth != null && Object.hasOwnProperty.call(m, "thumbnailWidth")) {
                    d.thumbnailWidth = m.thumbnailWidth;
                    if (o.oneofs)
                        d._thumbnailWidth = "thumbnailWidth";
                }
                if (m.caption != null && Object.hasOwnProperty.call(m, "caption")) {
                    d.caption = m.caption;
                    if (o.oneofs)
                        d._caption = "caption";
                }
                if (m.accessibilityLabel != null && Object.hasOwnProperty.call(m, "accessibilityLabel")) {
                    d.accessibilityLabel = m.accessibilityLabel;
                    if (o.oneofs)
                        d._accessibilityLabel = "accessibilityLabel";
                }
                if (m.mediaKeyDomain != null && Object.hasOwnProperty.call(m, "mediaKeyDomain")) {
                    d.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.toObject(m.mediaKeyDomain, o, q + 1);
                    if (o.oneofs)
                        d._mediaKeyDomain = "mediaKeyDomain";
                }
                return d;
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
                this.interactiveAnnotations = [];
                this.scanLengths = [];
                this.annotations = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ImageMessage.prototype.url = null;
            ImageMessage.prototype.mimetype = null;
            ImageMessage.prototype.caption = null;
            ImageMessage.prototype.fileSha256 = null;
            ImageMessage.prototype.fileLength = null;
            ImageMessage.prototype.height = null;
            ImageMessage.prototype.width = null;
            ImageMessage.prototype.mediaKey = null;
            ImageMessage.prototype.fileEncSha256 = null;
            ImageMessage.prototype.interactiveAnnotations = $util.emptyArray;
            ImageMessage.prototype.directPath = null;
            ImageMessage.prototype.mediaKeyTimestamp = null;
            ImageMessage.prototype.jpegThumbnail = null;
            ImageMessage.prototype.contextInfo = null;
            ImageMessage.prototype.firstScanSidecar = null;
            ImageMessage.prototype.firstScanLength = null;
            ImageMessage.prototype.experimentGroupId = null;
            ImageMessage.prototype.scansSidecar = null;
            ImageMessage.prototype.scanLengths = $util.emptyArray;
            ImageMessage.prototype.midQualityFileSha256 = null;
            ImageMessage.prototype.midQualityFileEncSha256 = null;
            ImageMessage.prototype.viewOnce = null;
            ImageMessage.prototype.thumbnailDirectPath = null;
            ImageMessage.prototype.thumbnailSha256 = null;
            ImageMessage.prototype.thumbnailEncSha256 = null;
            ImageMessage.prototype.staticUrl = null;
            ImageMessage.prototype.annotations = $util.emptyArray;
            ImageMessage.prototype.imageSourceType = null;
            ImageMessage.prototype.accessibilityLabel = null;
            ImageMessage.prototype.mediaKeyDomain = null;
            ImageMessage.prototype.qrUrl = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_url", {
                get: $util.oneOfGetter($oneOfFields = ["url"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_mimetype", {
                get: $util.oneOfGetter($oneOfFields = ["mimetype"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_caption", {
                get: $util.oneOfGetter($oneOfFields = ["caption"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_fileSha256", {
                get: $util.oneOfGetter($oneOfFields = ["fileSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_fileLength", {
                get: $util.oneOfGetter($oneOfFields = ["fileLength"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_height", {
                get: $util.oneOfGetter($oneOfFields = ["height"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_width", {
                get: $util.oneOfGetter($oneOfFields = ["width"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_mediaKey", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_fileEncSha256", {
                get: $util.oneOfGetter($oneOfFields = ["fileEncSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_directPath", {
                get: $util.oneOfGetter($oneOfFields = ["directPath"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_mediaKeyTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKeyTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_jpegThumbnail", {
                get: $util.oneOfGetter($oneOfFields = ["jpegThumbnail"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_contextInfo", {
                get: $util.oneOfGetter($oneOfFields = ["contextInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_firstScanSidecar", {
                get: $util.oneOfGetter($oneOfFields = ["firstScanSidecar"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_firstScanLength", {
                get: $util.oneOfGetter($oneOfFields = ["firstScanLength"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_experimentGroupId", {
                get: $util.oneOfGetter($oneOfFields = ["experimentGroupId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_scansSidecar", {
                get: $util.oneOfGetter($oneOfFields = ["scansSidecar"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_midQualityFileSha256", {
                get: $util.oneOfGetter($oneOfFields = ["midQualityFileSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_midQualityFileEncSha256", {
                get: $util.oneOfGetter($oneOfFields = ["midQualityFileEncSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_viewOnce", {
                get: $util.oneOfGetter($oneOfFields = ["viewOnce"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_thumbnailDirectPath", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailDirectPath"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_thumbnailSha256", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_thumbnailEncSha256", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailEncSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_staticUrl", {
                get: $util.oneOfGetter($oneOfFields = ["staticUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_imageSourceType", {
                get: $util.oneOfGetter($oneOfFields = ["imageSourceType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_accessibilityLabel", {
                get: $util.oneOfGetter($oneOfFields = ["accessibilityLabel"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_mediaKeyDomain", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKeyDomain"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ImageMessage.prototype, "_qrUrl", {
                get: $util.oneOfGetter($oneOfFields = ["qrUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

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
                if (m.url != null && Object.hasOwnProperty.call(m, "url"))
                    w.uint32(10).string(m.url);
                if (m.mimetype != null && Object.hasOwnProperty.call(m, "mimetype"))
                    w.uint32(18).string(m.mimetype);
                if (m.caption != null && Object.hasOwnProperty.call(m, "caption"))
                    w.uint32(26).string(m.caption);
                if (m.fileSha256 != null && Object.hasOwnProperty.call(m, "fileSha256"))
                    w.uint32(34).bytes(m.fileSha256);
                if (m.fileLength != null && Object.hasOwnProperty.call(m, "fileLength"))
                    w.uint32(40).uint64(m.fileLength);
                if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                    w.uint32(48).uint32(m.height);
                if (m.width != null && Object.hasOwnProperty.call(m, "width"))
                    w.uint32(56).uint32(m.width);
                if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey"))
                    w.uint32(66).bytes(m.mediaKey);
                if (m.fileEncSha256 != null && Object.hasOwnProperty.call(m, "fileEncSha256"))
                    w.uint32(74).bytes(m.fileEncSha256);
                if (m.interactiveAnnotations != null && m.interactiveAnnotations.length) {
                    for (var i = 0; i < m.interactiveAnnotations.length; ++i)
                        $root.proto.InteractiveAnnotation.encode(m.interactiveAnnotations[i], w.uint32(82).fork(), q + 1).ldelim();
                }
                if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath"))
                    w.uint32(90).string(m.directPath);
                if (m.mediaKeyTimestamp != null && Object.hasOwnProperty.call(m, "mediaKeyTimestamp"))
                    w.uint32(96).int64(m.mediaKeyTimestamp);
                if (m.jpegThumbnail != null && Object.hasOwnProperty.call(m, "jpegThumbnail"))
                    w.uint32(130).bytes(m.jpegThumbnail);
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo"))
                    $root.proto.ContextInfo.encode(m.contextInfo, w.uint32(138).fork(), q + 1).ldelim();
                if (m.firstScanSidecar != null && Object.hasOwnProperty.call(m, "firstScanSidecar"))
                    w.uint32(146).bytes(m.firstScanSidecar);
                if (m.firstScanLength != null && Object.hasOwnProperty.call(m, "firstScanLength"))
                    w.uint32(152).uint32(m.firstScanLength);
                if (m.experimentGroupId != null && Object.hasOwnProperty.call(m, "experimentGroupId"))
                    w.uint32(160).uint32(m.experimentGroupId);
                if (m.scansSidecar != null && Object.hasOwnProperty.call(m, "scansSidecar"))
                    w.uint32(170).bytes(m.scansSidecar);
                if (m.scanLengths != null && m.scanLengths.length) {
                    w.uint32(178).fork();
                    for (var i = 0; i < m.scanLengths.length; ++i)
                        w.uint32(m.scanLengths[i]);
                    w.ldelim();
                }
                if (m.midQualityFileSha256 != null && Object.hasOwnProperty.call(m, "midQualityFileSha256"))
                    w.uint32(186).bytes(m.midQualityFileSha256);
                if (m.midQualityFileEncSha256 != null && Object.hasOwnProperty.call(m, "midQualityFileEncSha256"))
                    w.uint32(194).bytes(m.midQualityFileEncSha256);
                if (m.viewOnce != null && Object.hasOwnProperty.call(m, "viewOnce"))
                    w.uint32(200).bool(m.viewOnce);
                if (m.thumbnailDirectPath != null && Object.hasOwnProperty.call(m, "thumbnailDirectPath"))
                    w.uint32(210).string(m.thumbnailDirectPath);
                if (m.thumbnailSha256 != null && Object.hasOwnProperty.call(m, "thumbnailSha256"))
                    w.uint32(218).bytes(m.thumbnailSha256);
                if (m.thumbnailEncSha256 != null && Object.hasOwnProperty.call(m, "thumbnailEncSha256"))
                    w.uint32(226).bytes(m.thumbnailEncSha256);
                if (m.staticUrl != null && Object.hasOwnProperty.call(m, "staticUrl"))
                    w.uint32(234).string(m.staticUrl);
                if (m.annotations != null && m.annotations.length) {
                    for (var i = 0; i < m.annotations.length; ++i)
                        $root.proto.InteractiveAnnotation.encode(m.annotations[i], w.uint32(242).fork(), q + 1).ldelim();
                }
                if (m.imageSourceType != null && Object.hasOwnProperty.call(m, "imageSourceType"))
                    w.uint32(248).int32(m.imageSourceType);
                if (m.accessibilityLabel != null && Object.hasOwnProperty.call(m, "accessibilityLabel"))
                    w.uint32(258).string(m.accessibilityLabel);
                if (m.mediaKeyDomain != null && Object.hasOwnProperty.call(m, "mediaKeyDomain"))
                    $root.proto.Message.MediaKeyDomain.encode(m.mediaKeyDomain, w.uint32(266).fork(), q + 1).ldelim();
                if (m.qrUrl != null && Object.hasOwnProperty.call(m, "qrUrl"))
                    w.uint32(274).string(m.qrUrl);
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
                    case 1: {
                            m.url = r.string();
                            break;
                        }
                    case 2: {
                            m.mimetype = r.string();
                            break;
                        }
                    case 3: {
                            m.caption = r.string();
                            break;
                        }
                    case 4: {
                            m.fileSha256 = r.bytes();
                            break;
                        }
                    case 5: {
                            m.fileLength = r.uint64();
                            break;
                        }
                    case 6: {
                            m.height = r.uint32();
                            break;
                        }
                    case 7: {
                            m.width = r.uint32();
                            break;
                        }
                    case 8: {
                            m.mediaKey = r.bytes();
                            break;
                        }
                    case 9: {
                            m.fileEncSha256 = r.bytes();
                            break;
                        }
                    case 10: {
                            if (!(m.interactiveAnnotations && m.interactiveAnnotations.length))
                                m.interactiveAnnotations = [];
                            m.interactiveAnnotations.push($root.proto.InteractiveAnnotation.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    case 11: {
                            m.directPath = r.string();
                            break;
                        }
                    case 12: {
                            m.mediaKeyTimestamp = r.int64();
                            break;
                        }
                    case 16: {
                            m.jpegThumbnail = r.bytes();
                            break;
                        }
                    case 17: {
                            m.contextInfo = $root.proto.ContextInfo.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 18: {
                            m.firstScanSidecar = r.bytes();
                            break;
                        }
                    case 19: {
                            m.firstScanLength = r.uint32();
                            break;
                        }
                    case 20: {
                            m.experimentGroupId = r.uint32();
                            break;
                        }
                    case 21: {
                            m.scansSidecar = r.bytes();
                            break;
                        }
                    case 22: {
                            if (!(m.scanLengths && m.scanLengths.length))
                                m.scanLengths = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.scanLengths.push(r.uint32());
                            } else
                                m.scanLengths.push(r.uint32());
                            break;
                        }
                    case 23: {
                            m.midQualityFileSha256 = r.bytes();
                            break;
                        }
                    case 24: {
                            m.midQualityFileEncSha256 = r.bytes();
                            break;
                        }
                    case 25: {
                            m.viewOnce = r.bool();
                            break;
                        }
                    case 26: {
                            m.thumbnailDirectPath = r.string();
                            break;
                        }
                    case 27: {
                            m.thumbnailSha256 = r.bytes();
                            break;
                        }
                    case 28: {
                            m.thumbnailEncSha256 = r.bytes();
                            break;
                        }
                    case 29: {
                            m.staticUrl = r.string();
                            break;
                        }
                    case 30: {
                            if (!(m.annotations && m.annotations.length))
                                m.annotations = [];
                            m.annotations.push($root.proto.InteractiveAnnotation.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    case 31: {
                            m.imageSourceType = r.int32();
                            break;
                        }
                    case 32: {
                            m.accessibilityLabel = r.string();
                            break;
                        }
                    case 33: {
                            m.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 34: {
                            m.qrUrl = r.string();
                            break;
                        }
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
                if (!$util.isObject(d))
                    throw TypeError(".proto.Message.ImageMessage: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.Message.ImageMessage();
                if (d.url != null) {
                    m.url = String(d.url);
                }
                if (d.mimetype != null) {
                    m.mimetype = String(d.mimetype);
                }
                if (d.caption != null) {
                    m.caption = String(d.caption);
                }
                if (d.fileSha256 != null) {
                    if (typeof d.fileSha256 === "string")
                        $util.base64.decode(d.fileSha256, m.fileSha256 = $util.newBuffer($util.base64.length(d.fileSha256)), 0);
                    else if (d.fileSha256.length >= 0)
                        m.fileSha256 = d.fileSha256;
                }
                if (d.fileLength != null) {
                    if ($util.Long)
                        m.fileLength = $util.Long.fromValue(d.fileLength, true);
                    else if (typeof d.fileLength === "string")
                        m.fileLength = parseInt(d.fileLength, 10);
                    else if (typeof d.fileLength === "number")
                        m.fileLength = d.fileLength;
                    else if (typeof d.fileLength === "object")
                        m.fileLength = new $util.LongBits(d.fileLength.low >>> 0, d.fileLength.high >>> 0).toNumber(true);
                }
                if (d.height != null) {
                    m.height = d.height >>> 0;
                }
                if (d.width != null) {
                    m.width = d.width >>> 0;
                }
                if (d.mediaKey != null) {
                    if (typeof d.mediaKey === "string")
                        $util.base64.decode(d.mediaKey, m.mediaKey = $util.newBuffer($util.base64.length(d.mediaKey)), 0);
                    else if (d.mediaKey.length >= 0)
                        m.mediaKey = d.mediaKey;
                }
                if (d.fileEncSha256 != null) {
                    if (typeof d.fileEncSha256 === "string")
                        $util.base64.decode(d.fileEncSha256, m.fileEncSha256 = $util.newBuffer($util.base64.length(d.fileEncSha256)), 0);
                    else if (d.fileEncSha256.length >= 0)
                        m.fileEncSha256 = d.fileEncSha256;
                }
                if (d.interactiveAnnotations) {
                    if (!Array.isArray(d.interactiveAnnotations))
                        throw TypeError(".proto.Message.ImageMessage.interactiveAnnotations: array expected");
                    m.interactiveAnnotations = [];
                    for (var i = 0; i < d.interactiveAnnotations.length; ++i) {
                        if (!$util.isObject(d.interactiveAnnotations[i]))
                            throw TypeError(".proto.Message.ImageMessage.interactiveAnnotations: object expected");
                        m.interactiveAnnotations[i] = $root.proto.InteractiveAnnotation.fromObject(d.interactiveAnnotations[i], n + 1);
                    }
                }
                if (d.directPath != null) {
                    m.directPath = String(d.directPath);
                }
                if (d.mediaKeyTimestamp != null) {
                    if ($util.Long)
                        m.mediaKeyTimestamp = $util.Long.fromValue(d.mediaKeyTimestamp, false);
                    else if (typeof d.mediaKeyTimestamp === "string")
                        m.mediaKeyTimestamp = parseInt(d.mediaKeyTimestamp, 10);
                    else if (typeof d.mediaKeyTimestamp === "number")
                        m.mediaKeyTimestamp = d.mediaKeyTimestamp;
                    else if (typeof d.mediaKeyTimestamp === "object")
                        m.mediaKeyTimestamp = new $util.LongBits(d.mediaKeyTimestamp.low >>> 0, d.mediaKeyTimestamp.high >>> 0).toNumber();
                }
                if (d.jpegThumbnail != null) {
                    if (typeof d.jpegThumbnail === "string")
                        $util.base64.decode(d.jpegThumbnail, m.jpegThumbnail = $util.newBuffer($util.base64.length(d.jpegThumbnail)), 0);
                    else if (d.jpegThumbnail.length >= 0)
                        m.jpegThumbnail = d.jpegThumbnail;
                }
                if (d.contextInfo != null) {
                    if (!$util.isObject(d.contextInfo))
                        throw TypeError(".proto.Message.ImageMessage.contextInfo: object expected");
                    m.contextInfo = $root.proto.ContextInfo.fromObject(d.contextInfo, n + 1);
                }
                if (d.firstScanSidecar != null) {
                    if (typeof d.firstScanSidecar === "string")
                        $util.base64.decode(d.firstScanSidecar, m.firstScanSidecar = $util.newBuffer($util.base64.length(d.firstScanSidecar)), 0);
                    else if (d.firstScanSidecar.length >= 0)
                        m.firstScanSidecar = d.firstScanSidecar;
                }
                if (d.firstScanLength != null) {
                    m.firstScanLength = d.firstScanLength >>> 0;
                }
                if (d.experimentGroupId != null) {
                    m.experimentGroupId = d.experimentGroupId >>> 0;
                }
                if (d.scansSidecar != null) {
                    if (typeof d.scansSidecar === "string")
                        $util.base64.decode(d.scansSidecar, m.scansSidecar = $util.newBuffer($util.base64.length(d.scansSidecar)), 0);
                    else if (d.scansSidecar.length >= 0)
                        m.scansSidecar = d.scansSidecar;
                }
                if (d.scanLengths) {
                    if (!Array.isArray(d.scanLengths))
                        throw TypeError(".proto.Message.ImageMessage.scanLengths: array expected");
                    m.scanLengths = [];
                    for (var i = 0; i < d.scanLengths.length; ++i) {
                        m.scanLengths[i] = d.scanLengths[i] >>> 0;
                    }
                }
                if (d.midQualityFileSha256 != null) {
                    if (typeof d.midQualityFileSha256 === "string")
                        $util.base64.decode(d.midQualityFileSha256, m.midQualityFileSha256 = $util.newBuffer($util.base64.length(d.midQualityFileSha256)), 0);
                    else if (d.midQualityFileSha256.length >= 0)
                        m.midQualityFileSha256 = d.midQualityFileSha256;
                }
                if (d.midQualityFileEncSha256 != null) {
                    if (typeof d.midQualityFileEncSha256 === "string")
                        $util.base64.decode(d.midQualityFileEncSha256, m.midQualityFileEncSha256 = $util.newBuffer($util.base64.length(d.midQualityFileEncSha256)), 0);
                    else if (d.midQualityFileEncSha256.length >= 0)
                        m.midQualityFileEncSha256 = d.midQualityFileEncSha256;
                }
                if (d.viewOnce != null) {
                    m.viewOnce = Boolean(d.viewOnce);
                }
                if (d.thumbnailDirectPath != null) {
                    m.thumbnailDirectPath = String(d.thumbnailDirectPath);
                }
                if (d.thumbnailSha256 != null) {
                    if (typeof d.thumbnailSha256 === "string")
                        $util.base64.decode(d.thumbnailSha256, m.thumbnailSha256 = $util.newBuffer($util.base64.length(d.thumbnailSha256)), 0);
                    else if (d.thumbnailSha256.length >= 0)
                        m.thumbnailSha256 = d.thumbnailSha256;
                }
                if (d.thumbnailEncSha256 != null) {
                    if (typeof d.thumbnailEncSha256 === "string")
                        $util.base64.decode(d.thumbnailEncSha256, m.thumbnailEncSha256 = $util.newBuffer($util.base64.length(d.thumbnailEncSha256)), 0);
                    else if (d.thumbnailEncSha256.length >= 0)
                        m.thumbnailEncSha256 = d.thumbnailEncSha256;
                }
                if (d.staticUrl != null) {
                    m.staticUrl = String(d.staticUrl);
                }
                if (d.annotations) {
                    if (!Array.isArray(d.annotations))
                        throw TypeError(".proto.Message.ImageMessage.annotations: array expected");
                    m.annotations = [];
                    for (var i = 0; i < d.annotations.length; ++i) {
                        if (!$util.isObject(d.annotations[i]))
                            throw TypeError(".proto.Message.ImageMessage.annotations: object expected");
                        m.annotations[i] = $root.proto.InteractiveAnnotation.fromObject(d.annotations[i], n + 1);
                    }
                }
                switch (d.imageSourceType) {
                default:
                    if (typeof d.imageSourceType === "number") {
                        m.imageSourceType = d.imageSourceType;
                        break;
                    }
                    break;
                case "USER_IMAGE":
                case 0:
                    m.imageSourceType = 0;
                    break;
                case "AI_GENERATED":
                case 1:
                    m.imageSourceType = 1;
                    break;
                case "AI_MODIFIED":
                case 2:
                    m.imageSourceType = 2;
                    break;
                case "RASTERIZED_TEXT_STATUS":
                case 3:
                    m.imageSourceType = 3;
                    break;
                }
                if (d.accessibilityLabel != null) {
                    m.accessibilityLabel = String(d.accessibilityLabel);
                }
                if (d.mediaKeyDomain != null) {
                    if (!$util.isObject(d.mediaKeyDomain))
                        throw TypeError(".proto.Message.ImageMessage.mediaKeyDomain: object expected");
                    m.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.fromObject(d.mediaKeyDomain, n + 1);
                }
                if (d.qrUrl != null) {
                    m.qrUrl = String(d.qrUrl);
                }
                return m;
            };

            ImageMessage.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (o.arrays || o.defaults) {
                    d.interactiveAnnotations = [];
                    d.scanLengths = [];
                    d.annotations = [];
                }
                if (m.url != null && Object.hasOwnProperty.call(m, "url")) {
                    d.url = m.url;
                    if (o.oneofs)
                        d._url = "url";
                }
                if (m.mimetype != null && Object.hasOwnProperty.call(m, "mimetype")) {
                    d.mimetype = m.mimetype;
                    if (o.oneofs)
                        d._mimetype = "mimetype";
                }
                if (m.caption != null && Object.hasOwnProperty.call(m, "caption")) {
                    d.caption = m.caption;
                    if (o.oneofs)
                        d._caption = "caption";
                }
                if (m.fileSha256 != null && Object.hasOwnProperty.call(m, "fileSha256")) {
                    d.fileSha256 = o.bytes === String ? $util.base64.encode(m.fileSha256, 0, m.fileSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileSha256) : m.fileSha256;
                    if (o.oneofs)
                        d._fileSha256 = "fileSha256";
                }
                if (m.fileLength != null && Object.hasOwnProperty.call(m, "fileLength")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.fileLength = typeof m.fileLength === "number" ? BigInt(m.fileLength) : $util.Long.fromBits(m.fileLength.low >>> 0, m.fileLength.high >>> 0, true).toBigInt();
                    else if (typeof m.fileLength === "number")
                        d.fileLength = o.longs === String ? String(m.fileLength) : m.fileLength;
                    else
                        d.fileLength = o.longs === String ? longToString(m.fileLength, true) : o.longs === Number ? longToNumber(m.fileLength, true) : m.fileLength;
                    if (o.oneofs)
                        d._fileLength = "fileLength";
                }
                if (m.height != null && Object.hasOwnProperty.call(m, "height")) {
                    d.height = m.height;
                    if (o.oneofs)
                        d._height = "height";
                }
                if (m.width != null && Object.hasOwnProperty.call(m, "width")) {
                    d.width = m.width;
                    if (o.oneofs)
                        d._width = "width";
                }
                if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey")) {
                    d.mediaKey = o.bytes === String ? $util.base64.encode(m.mediaKey, 0, m.mediaKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.mediaKey) : m.mediaKey;
                    if (o.oneofs)
                        d._mediaKey = "mediaKey";
                }
                if (m.fileEncSha256 != null && Object.hasOwnProperty.call(m, "fileEncSha256")) {
                    d.fileEncSha256 = o.bytes === String ? $util.base64.encode(m.fileEncSha256, 0, m.fileEncSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileEncSha256) : m.fileEncSha256;
                    if (o.oneofs)
                        d._fileEncSha256 = "fileEncSha256";
                }
                if (m.interactiveAnnotations && m.interactiveAnnotations.length) {
                    d.interactiveAnnotations = [];
                    for (var j = 0; j < m.interactiveAnnotations.length; ++j) {
                        d.interactiveAnnotations[j] = $root.proto.InteractiveAnnotation.toObject(m.interactiveAnnotations[j], o, q + 1);
                    }
                }
                if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath")) {
                    d.directPath = m.directPath;
                    if (o.oneofs)
                        d._directPath = "directPath";
                }
                if (m.mediaKeyTimestamp != null && Object.hasOwnProperty.call(m, "mediaKeyTimestamp")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.mediaKeyTimestamp = typeof m.mediaKeyTimestamp === "number" ? BigInt(m.mediaKeyTimestamp) : $util.Long.fromBits(m.mediaKeyTimestamp.low >>> 0, m.mediaKeyTimestamp.high >>> 0, false).toBigInt();
                    else if (typeof m.mediaKeyTimestamp === "number")
                        d.mediaKeyTimestamp = o.longs === String ? String(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
                    else
                        d.mediaKeyTimestamp = o.longs === String ? longToString(m.mediaKeyTimestamp) : o.longs === Number ? longToNumber(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
                    if (o.oneofs)
                        d._mediaKeyTimestamp = "mediaKeyTimestamp";
                }
                if (m.jpegThumbnail != null && Object.hasOwnProperty.call(m, "jpegThumbnail")) {
                    d.jpegThumbnail = o.bytes === String ? $util.base64.encode(m.jpegThumbnail, 0, m.jpegThumbnail.length) : o.bytes === Array ? Array.prototype.slice.call(m.jpegThumbnail) : m.jpegThumbnail;
                    if (o.oneofs)
                        d._jpegThumbnail = "jpegThumbnail";
                }
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo")) {
                    d.contextInfo = $root.proto.ContextInfo.toObject(m.contextInfo, o, q + 1);
                    if (o.oneofs)
                        d._contextInfo = "contextInfo";
                }
                if (m.firstScanSidecar != null && Object.hasOwnProperty.call(m, "firstScanSidecar")) {
                    d.firstScanSidecar = o.bytes === String ? $util.base64.encode(m.firstScanSidecar, 0, m.firstScanSidecar.length) : o.bytes === Array ? Array.prototype.slice.call(m.firstScanSidecar) : m.firstScanSidecar;
                    if (o.oneofs)
                        d._firstScanSidecar = "firstScanSidecar";
                }
                if (m.firstScanLength != null && Object.hasOwnProperty.call(m, "firstScanLength")) {
                    d.firstScanLength = m.firstScanLength;
                    if (o.oneofs)
                        d._firstScanLength = "firstScanLength";
                }
                if (m.experimentGroupId != null && Object.hasOwnProperty.call(m, "experimentGroupId")) {
                    d.experimentGroupId = m.experimentGroupId;
                    if (o.oneofs)
                        d._experimentGroupId = "experimentGroupId";
                }
                if (m.scansSidecar != null && Object.hasOwnProperty.call(m, "scansSidecar")) {
                    d.scansSidecar = o.bytes === String ? $util.base64.encode(m.scansSidecar, 0, m.scansSidecar.length) : o.bytes === Array ? Array.prototype.slice.call(m.scansSidecar) : m.scansSidecar;
                    if (o.oneofs)
                        d._scansSidecar = "scansSidecar";
                }
                if (m.scanLengths && m.scanLengths.length) {
                    d.scanLengths = [];
                    for (var j = 0; j < m.scanLengths.length; ++j) {
                        d.scanLengths[j] = m.scanLengths[j];
                    }
                }
                if (m.midQualityFileSha256 != null && Object.hasOwnProperty.call(m, "midQualityFileSha256")) {
                    d.midQualityFileSha256 = o.bytes === String ? $util.base64.encode(m.midQualityFileSha256, 0, m.midQualityFileSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.midQualityFileSha256) : m.midQualityFileSha256;
                    if (o.oneofs)
                        d._midQualityFileSha256 = "midQualityFileSha256";
                }
                if (m.midQualityFileEncSha256 != null && Object.hasOwnProperty.call(m, "midQualityFileEncSha256")) {
                    d.midQualityFileEncSha256 = o.bytes === String ? $util.base64.encode(m.midQualityFileEncSha256, 0, m.midQualityFileEncSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.midQualityFileEncSha256) : m.midQualityFileEncSha256;
                    if (o.oneofs)
                        d._midQualityFileEncSha256 = "midQualityFileEncSha256";
                }
                if (m.viewOnce != null && Object.hasOwnProperty.call(m, "viewOnce")) {
                    d.viewOnce = m.viewOnce;
                    if (o.oneofs)
                        d._viewOnce = "viewOnce";
                }
                if (m.thumbnailDirectPath != null && Object.hasOwnProperty.call(m, "thumbnailDirectPath")) {
                    d.thumbnailDirectPath = m.thumbnailDirectPath;
                    if (o.oneofs)
                        d._thumbnailDirectPath = "thumbnailDirectPath";
                }
                if (m.thumbnailSha256 != null && Object.hasOwnProperty.call(m, "thumbnailSha256")) {
                    d.thumbnailSha256 = o.bytes === String ? $util.base64.encode(m.thumbnailSha256, 0, m.thumbnailSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.thumbnailSha256) : m.thumbnailSha256;
                    if (o.oneofs)
                        d._thumbnailSha256 = "thumbnailSha256";
                }
                if (m.thumbnailEncSha256 != null && Object.hasOwnProperty.call(m, "thumbnailEncSha256")) {
                    d.thumbnailEncSha256 = o.bytes === String ? $util.base64.encode(m.thumbnailEncSha256, 0, m.thumbnailEncSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.thumbnailEncSha256) : m.thumbnailEncSha256;
                    if (o.oneofs)
                        d._thumbnailEncSha256 = "thumbnailEncSha256";
                }
                if (m.staticUrl != null && Object.hasOwnProperty.call(m, "staticUrl")) {
                    d.staticUrl = m.staticUrl;
                    if (o.oneofs)
                        d._staticUrl = "staticUrl";
                }
                if (m.annotations && m.annotations.length) {
                    d.annotations = [];
                    for (var j = 0; j < m.annotations.length; ++j) {
                        d.annotations[j] = $root.proto.InteractiveAnnotation.toObject(m.annotations[j], o, q + 1);
                    }
                }
                if (m.imageSourceType != null && Object.hasOwnProperty.call(m, "imageSourceType")) {
                    d.imageSourceType = o.enums === String ? $root.proto.Message.ImageMessage.ImageSourceType[m.imageSourceType] === undefined ? m.imageSourceType : $root.proto.Message.ImageMessage.ImageSourceType[m.imageSourceType] : m.imageSourceType;
                    if (o.oneofs)
                        d._imageSourceType = "imageSourceType";
                }
                if (m.accessibilityLabel != null && Object.hasOwnProperty.call(m, "accessibilityLabel")) {
                    d.accessibilityLabel = m.accessibilityLabel;
                    if (o.oneofs)
                        d._accessibilityLabel = "accessibilityLabel";
                }
                if (m.mediaKeyDomain != null && Object.hasOwnProperty.call(m, "mediaKeyDomain")) {
                    d.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.toObject(m.mediaKeyDomain, o, q + 1);
                    if (o.oneofs)
                        d._mediaKeyDomain = "mediaKeyDomain";
                }
                if (m.qrUrl != null && Object.hasOwnProperty.call(m, "qrUrl")) {
                    d.qrUrl = m.qrUrl;
                    if (o.oneofs)
                        d._qrUrl = "qrUrl";
                }
                return d;
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

        Message.MediaKeyDomain = (function() {

            function MediaKeyDomain(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MediaKeyDomain.create = function create(properties) {
                return new MediaKeyDomain(properties);
            };

            MediaKeyDomain.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            MediaKeyDomain.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.MediaKeyDomain();
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

            MediaKeyDomain.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.MediaKeyDomain)
                    return d;
                return new $root.proto.Message.MediaKeyDomain();
            };

            MediaKeyDomain.toObject = function toObject() {
                return {};
            };

            MediaKeyDomain.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            MediaKeyDomain.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.MediaKeyDomain";
            };

            return MediaKeyDomain;
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

        Message.StickerMessage = (function() {

            function StickerMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StickerMessage.prototype.url = null;
            StickerMessage.prototype.fileSha256 = null;
            StickerMessage.prototype.fileEncSha256 = null;
            StickerMessage.prototype.mediaKey = null;
            StickerMessage.prototype.mimetype = null;
            StickerMessage.prototype.height = null;
            StickerMessage.prototype.width = null;
            StickerMessage.prototype.directPath = null;
            StickerMessage.prototype.fileLength = null;
            StickerMessage.prototype.mediaKeyTimestamp = null;
            StickerMessage.prototype.firstFrameLength = null;
            StickerMessage.prototype.firstFrameSidecar = null;
            StickerMessage.prototype.isAnimated = null;
            StickerMessage.prototype.pngThumbnail = null;
            StickerMessage.prototype.contextInfo = null;
            StickerMessage.prototype.stickerSentTs = null;
            StickerMessage.prototype.isAvatar = null;
            StickerMessage.prototype.isAiSticker = null;
            StickerMessage.prototype.isLottie = null;
            StickerMessage.prototype.accessibilityLabel = null;
            StickerMessage.prototype.mediaKeyDomain = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_url", {
                get: $util.oneOfGetter($oneOfFields = ["url"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_fileSha256", {
                get: $util.oneOfGetter($oneOfFields = ["fileSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_fileEncSha256", {
                get: $util.oneOfGetter($oneOfFields = ["fileEncSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_mediaKey", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_mimetype", {
                get: $util.oneOfGetter($oneOfFields = ["mimetype"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_height", {
                get: $util.oneOfGetter($oneOfFields = ["height"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_width", {
                get: $util.oneOfGetter($oneOfFields = ["width"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_directPath", {
                get: $util.oneOfGetter($oneOfFields = ["directPath"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_fileLength", {
                get: $util.oneOfGetter($oneOfFields = ["fileLength"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_mediaKeyTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKeyTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_firstFrameLength", {
                get: $util.oneOfGetter($oneOfFields = ["firstFrameLength"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_firstFrameSidecar", {
                get: $util.oneOfGetter($oneOfFields = ["firstFrameSidecar"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_isAnimated", {
                get: $util.oneOfGetter($oneOfFields = ["isAnimated"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_pngThumbnail", {
                get: $util.oneOfGetter($oneOfFields = ["pngThumbnail"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_contextInfo", {
                get: $util.oneOfGetter($oneOfFields = ["contextInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_stickerSentTs", {
                get: $util.oneOfGetter($oneOfFields = ["stickerSentTs"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_isAvatar", {
                get: $util.oneOfGetter($oneOfFields = ["isAvatar"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_isAiSticker", {
                get: $util.oneOfGetter($oneOfFields = ["isAiSticker"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_isLottie", {
                get: $util.oneOfGetter($oneOfFields = ["isLottie"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_accessibilityLabel", {
                get: $util.oneOfGetter($oneOfFields = ["accessibilityLabel"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StickerMessage.prototype, "_mediaKeyDomain", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKeyDomain"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            StickerMessage.create = function create(properties) {
                return new StickerMessage(properties);
            };

            StickerMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.url != null && Object.hasOwnProperty.call(m, "url"))
                    w.uint32(10).string(m.url);
                if (m.fileSha256 != null && Object.hasOwnProperty.call(m, "fileSha256"))
                    w.uint32(18).bytes(m.fileSha256);
                if (m.fileEncSha256 != null && Object.hasOwnProperty.call(m, "fileEncSha256"))
                    w.uint32(26).bytes(m.fileEncSha256);
                if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey"))
                    w.uint32(34).bytes(m.mediaKey);
                if (m.mimetype != null && Object.hasOwnProperty.call(m, "mimetype"))
                    w.uint32(42).string(m.mimetype);
                if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                    w.uint32(48).uint32(m.height);
                if (m.width != null && Object.hasOwnProperty.call(m, "width"))
                    w.uint32(56).uint32(m.width);
                if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath"))
                    w.uint32(66).string(m.directPath);
                if (m.fileLength != null && Object.hasOwnProperty.call(m, "fileLength"))
                    w.uint32(72).uint64(m.fileLength);
                if (m.mediaKeyTimestamp != null && Object.hasOwnProperty.call(m, "mediaKeyTimestamp"))
                    w.uint32(80).int64(m.mediaKeyTimestamp);
                if (m.firstFrameLength != null && Object.hasOwnProperty.call(m, "firstFrameLength"))
                    w.uint32(88).uint32(m.firstFrameLength);
                if (m.firstFrameSidecar != null && Object.hasOwnProperty.call(m, "firstFrameSidecar"))
                    w.uint32(98).bytes(m.firstFrameSidecar);
                if (m.isAnimated != null && Object.hasOwnProperty.call(m, "isAnimated"))
                    w.uint32(104).bool(m.isAnimated);
                if (m.pngThumbnail != null && Object.hasOwnProperty.call(m, "pngThumbnail"))
                    w.uint32(130).bytes(m.pngThumbnail);
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo"))
                    $root.proto.ContextInfo.encode(m.contextInfo, w.uint32(138).fork(), q + 1).ldelim();
                if (m.stickerSentTs != null && Object.hasOwnProperty.call(m, "stickerSentTs"))
                    w.uint32(144).int64(m.stickerSentTs);
                if (m.isAvatar != null && Object.hasOwnProperty.call(m, "isAvatar"))
                    w.uint32(152).bool(m.isAvatar);
                if (m.isAiSticker != null && Object.hasOwnProperty.call(m, "isAiSticker"))
                    w.uint32(160).bool(m.isAiSticker);
                if (m.isLottie != null && Object.hasOwnProperty.call(m, "isLottie"))
                    w.uint32(168).bool(m.isLottie);
                if (m.accessibilityLabel != null && Object.hasOwnProperty.call(m, "accessibilityLabel"))
                    w.uint32(178).string(m.accessibilityLabel);
                if (m.mediaKeyDomain != null && Object.hasOwnProperty.call(m, "mediaKeyDomain"))
                    $root.proto.Message.MediaKeyDomain.encode(m.mediaKeyDomain, w.uint32(186).fork(), q + 1).ldelim();
                return w;
            };

            StickerMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.StickerMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.url = r.string();
                            break;
                        }
                    case 2: {
                            m.fileSha256 = r.bytes();
                            break;
                        }
                    case 3: {
                            m.fileEncSha256 = r.bytes();
                            break;
                        }
                    case 4: {
                            m.mediaKey = r.bytes();
                            break;
                        }
                    case 5: {
                            m.mimetype = r.string();
                            break;
                        }
                    case 6: {
                            m.height = r.uint32();
                            break;
                        }
                    case 7: {
                            m.width = r.uint32();
                            break;
                        }
                    case 8: {
                            m.directPath = r.string();
                            break;
                        }
                    case 9: {
                            m.fileLength = r.uint64();
                            break;
                        }
                    case 10: {
                            m.mediaKeyTimestamp = r.int64();
                            break;
                        }
                    case 11: {
                            m.firstFrameLength = r.uint32();
                            break;
                        }
                    case 12: {
                            m.firstFrameSidecar = r.bytes();
                            break;
                        }
                    case 13: {
                            m.isAnimated = r.bool();
                            break;
                        }
                    case 16: {
                            m.pngThumbnail = r.bytes();
                            break;
                        }
                    case 17: {
                            m.contextInfo = $root.proto.ContextInfo.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 18: {
                            m.stickerSentTs = r.int64();
                            break;
                        }
                    case 19: {
                            m.isAvatar = r.bool();
                            break;
                        }
                    case 20: {
                            m.isAiSticker = r.bool();
                            break;
                        }
                    case 21: {
                            m.isLottie = r.bool();
                            break;
                        }
                    case 22: {
                            m.accessibilityLabel = r.string();
                            break;
                        }
                    case 23: {
                            m.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            StickerMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.StickerMessage)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.Message.StickerMessage: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.Message.StickerMessage();
                if (d.url != null) {
                    m.url = String(d.url);
                }
                if (d.fileSha256 != null) {
                    if (typeof d.fileSha256 === "string")
                        $util.base64.decode(d.fileSha256, m.fileSha256 = $util.newBuffer($util.base64.length(d.fileSha256)), 0);
                    else if (d.fileSha256.length >= 0)
                        m.fileSha256 = d.fileSha256;
                }
                if (d.fileEncSha256 != null) {
                    if (typeof d.fileEncSha256 === "string")
                        $util.base64.decode(d.fileEncSha256, m.fileEncSha256 = $util.newBuffer($util.base64.length(d.fileEncSha256)), 0);
                    else if (d.fileEncSha256.length >= 0)
                        m.fileEncSha256 = d.fileEncSha256;
                }
                if (d.mediaKey != null) {
                    if (typeof d.mediaKey === "string")
                        $util.base64.decode(d.mediaKey, m.mediaKey = $util.newBuffer($util.base64.length(d.mediaKey)), 0);
                    else if (d.mediaKey.length >= 0)
                        m.mediaKey = d.mediaKey;
                }
                if (d.mimetype != null) {
                    m.mimetype = String(d.mimetype);
                }
                if (d.height != null) {
                    m.height = d.height >>> 0;
                }
                if (d.width != null) {
                    m.width = d.width >>> 0;
                }
                if (d.directPath != null) {
                    m.directPath = String(d.directPath);
                }
                if (d.fileLength != null) {
                    if ($util.Long)
                        m.fileLength = $util.Long.fromValue(d.fileLength, true);
                    else if (typeof d.fileLength === "string")
                        m.fileLength = parseInt(d.fileLength, 10);
                    else if (typeof d.fileLength === "number")
                        m.fileLength = d.fileLength;
                    else if (typeof d.fileLength === "object")
                        m.fileLength = new $util.LongBits(d.fileLength.low >>> 0, d.fileLength.high >>> 0).toNumber(true);
                }
                if (d.mediaKeyTimestamp != null) {
                    if ($util.Long)
                        m.mediaKeyTimestamp = $util.Long.fromValue(d.mediaKeyTimestamp, false);
                    else if (typeof d.mediaKeyTimestamp === "string")
                        m.mediaKeyTimestamp = parseInt(d.mediaKeyTimestamp, 10);
                    else if (typeof d.mediaKeyTimestamp === "number")
                        m.mediaKeyTimestamp = d.mediaKeyTimestamp;
                    else if (typeof d.mediaKeyTimestamp === "object")
                        m.mediaKeyTimestamp = new $util.LongBits(d.mediaKeyTimestamp.low >>> 0, d.mediaKeyTimestamp.high >>> 0).toNumber();
                }
                if (d.firstFrameLength != null) {
                    m.firstFrameLength = d.firstFrameLength >>> 0;
                }
                if (d.firstFrameSidecar != null) {
                    if (typeof d.firstFrameSidecar === "string")
                        $util.base64.decode(d.firstFrameSidecar, m.firstFrameSidecar = $util.newBuffer($util.base64.length(d.firstFrameSidecar)), 0);
                    else if (d.firstFrameSidecar.length >= 0)
                        m.firstFrameSidecar = d.firstFrameSidecar;
                }
                if (d.isAnimated != null) {
                    m.isAnimated = Boolean(d.isAnimated);
                }
                if (d.pngThumbnail != null) {
                    if (typeof d.pngThumbnail === "string")
                        $util.base64.decode(d.pngThumbnail, m.pngThumbnail = $util.newBuffer($util.base64.length(d.pngThumbnail)), 0);
                    else if (d.pngThumbnail.length >= 0)
                        m.pngThumbnail = d.pngThumbnail;
                }
                if (d.contextInfo != null) {
                    if (!$util.isObject(d.contextInfo))
                        throw TypeError(".proto.Message.StickerMessage.contextInfo: object expected");
                    m.contextInfo = $root.proto.ContextInfo.fromObject(d.contextInfo, n + 1);
                }
                if (d.stickerSentTs != null) {
                    if ($util.Long)
                        m.stickerSentTs = $util.Long.fromValue(d.stickerSentTs, false);
                    else if (typeof d.stickerSentTs === "string")
                        m.stickerSentTs = parseInt(d.stickerSentTs, 10);
                    else if (typeof d.stickerSentTs === "number")
                        m.stickerSentTs = d.stickerSentTs;
                    else if (typeof d.stickerSentTs === "object")
                        m.stickerSentTs = new $util.LongBits(d.stickerSentTs.low >>> 0, d.stickerSentTs.high >>> 0).toNumber();
                }
                if (d.isAvatar != null) {
                    m.isAvatar = Boolean(d.isAvatar);
                }
                if (d.isAiSticker != null) {
                    m.isAiSticker = Boolean(d.isAiSticker);
                }
                if (d.isLottie != null) {
                    m.isLottie = Boolean(d.isLottie);
                }
                if (d.accessibilityLabel != null) {
                    m.accessibilityLabel = String(d.accessibilityLabel);
                }
                if (d.mediaKeyDomain != null) {
                    if (!$util.isObject(d.mediaKeyDomain))
                        throw TypeError(".proto.Message.StickerMessage.mediaKeyDomain: object expected");
                    m.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.fromObject(d.mediaKeyDomain, n + 1);
                }
                return m;
            };

            StickerMessage.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.url != null && Object.hasOwnProperty.call(m, "url")) {
                    d.url = m.url;
                    if (o.oneofs)
                        d._url = "url";
                }
                if (m.fileSha256 != null && Object.hasOwnProperty.call(m, "fileSha256")) {
                    d.fileSha256 = o.bytes === String ? $util.base64.encode(m.fileSha256, 0, m.fileSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileSha256) : m.fileSha256;
                    if (o.oneofs)
                        d._fileSha256 = "fileSha256";
                }
                if (m.fileEncSha256 != null && Object.hasOwnProperty.call(m, "fileEncSha256")) {
                    d.fileEncSha256 = o.bytes === String ? $util.base64.encode(m.fileEncSha256, 0, m.fileEncSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileEncSha256) : m.fileEncSha256;
                    if (o.oneofs)
                        d._fileEncSha256 = "fileEncSha256";
                }
                if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey")) {
                    d.mediaKey = o.bytes === String ? $util.base64.encode(m.mediaKey, 0, m.mediaKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.mediaKey) : m.mediaKey;
                    if (o.oneofs)
                        d._mediaKey = "mediaKey";
                }
                if (m.mimetype != null && Object.hasOwnProperty.call(m, "mimetype")) {
                    d.mimetype = m.mimetype;
                    if (o.oneofs)
                        d._mimetype = "mimetype";
                }
                if (m.height != null && Object.hasOwnProperty.call(m, "height")) {
                    d.height = m.height;
                    if (o.oneofs)
                        d._height = "height";
                }
                if (m.width != null && Object.hasOwnProperty.call(m, "width")) {
                    d.width = m.width;
                    if (o.oneofs)
                        d._width = "width";
                }
                if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath")) {
                    d.directPath = m.directPath;
                    if (o.oneofs)
                        d._directPath = "directPath";
                }
                if (m.fileLength != null && Object.hasOwnProperty.call(m, "fileLength")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.fileLength = typeof m.fileLength === "number" ? BigInt(m.fileLength) : $util.Long.fromBits(m.fileLength.low >>> 0, m.fileLength.high >>> 0, true).toBigInt();
                    else if (typeof m.fileLength === "number")
                        d.fileLength = o.longs === String ? String(m.fileLength) : m.fileLength;
                    else
                        d.fileLength = o.longs === String ? longToString(m.fileLength, true) : o.longs === Number ? longToNumber(m.fileLength, true) : m.fileLength;
                    if (o.oneofs)
                        d._fileLength = "fileLength";
                }
                if (m.mediaKeyTimestamp != null && Object.hasOwnProperty.call(m, "mediaKeyTimestamp")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.mediaKeyTimestamp = typeof m.mediaKeyTimestamp === "number" ? BigInt(m.mediaKeyTimestamp) : $util.Long.fromBits(m.mediaKeyTimestamp.low >>> 0, m.mediaKeyTimestamp.high >>> 0, false).toBigInt();
                    else if (typeof m.mediaKeyTimestamp === "number")
                        d.mediaKeyTimestamp = o.longs === String ? String(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
                    else
                        d.mediaKeyTimestamp = o.longs === String ? longToString(m.mediaKeyTimestamp) : o.longs === Number ? longToNumber(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
                    if (o.oneofs)
                        d._mediaKeyTimestamp = "mediaKeyTimestamp";
                }
                if (m.firstFrameLength != null && Object.hasOwnProperty.call(m, "firstFrameLength")) {
                    d.firstFrameLength = m.firstFrameLength;
                    if (o.oneofs)
                        d._firstFrameLength = "firstFrameLength";
                }
                if (m.firstFrameSidecar != null && Object.hasOwnProperty.call(m, "firstFrameSidecar")) {
                    d.firstFrameSidecar = o.bytes === String ? $util.base64.encode(m.firstFrameSidecar, 0, m.firstFrameSidecar.length) : o.bytes === Array ? Array.prototype.slice.call(m.firstFrameSidecar) : m.firstFrameSidecar;
                    if (o.oneofs)
                        d._firstFrameSidecar = "firstFrameSidecar";
                }
                if (m.isAnimated != null && Object.hasOwnProperty.call(m, "isAnimated")) {
                    d.isAnimated = m.isAnimated;
                    if (o.oneofs)
                        d._isAnimated = "isAnimated";
                }
                if (m.pngThumbnail != null && Object.hasOwnProperty.call(m, "pngThumbnail")) {
                    d.pngThumbnail = o.bytes === String ? $util.base64.encode(m.pngThumbnail, 0, m.pngThumbnail.length) : o.bytes === Array ? Array.prototype.slice.call(m.pngThumbnail) : m.pngThumbnail;
                    if (o.oneofs)
                        d._pngThumbnail = "pngThumbnail";
                }
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo")) {
                    d.contextInfo = $root.proto.ContextInfo.toObject(m.contextInfo, o, q + 1);
                    if (o.oneofs)
                        d._contextInfo = "contextInfo";
                }
                if (m.stickerSentTs != null && Object.hasOwnProperty.call(m, "stickerSentTs")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.stickerSentTs = typeof m.stickerSentTs === "number" ? BigInt(m.stickerSentTs) : $util.Long.fromBits(m.stickerSentTs.low >>> 0, m.stickerSentTs.high >>> 0, false).toBigInt();
                    else if (typeof m.stickerSentTs === "number")
                        d.stickerSentTs = o.longs === String ? String(m.stickerSentTs) : m.stickerSentTs;
                    else
                        d.stickerSentTs = o.longs === String ? longToString(m.stickerSentTs) : o.longs === Number ? longToNumber(m.stickerSentTs) : m.stickerSentTs;
                    if (o.oneofs)
                        d._stickerSentTs = "stickerSentTs";
                }
                if (m.isAvatar != null && Object.hasOwnProperty.call(m, "isAvatar")) {
                    d.isAvatar = m.isAvatar;
                    if (o.oneofs)
                        d._isAvatar = "isAvatar";
                }
                if (m.isAiSticker != null && Object.hasOwnProperty.call(m, "isAiSticker")) {
                    d.isAiSticker = m.isAiSticker;
                    if (o.oneofs)
                        d._isAiSticker = "isAiSticker";
                }
                if (m.isLottie != null && Object.hasOwnProperty.call(m, "isLottie")) {
                    d.isLottie = m.isLottie;
                    if (o.oneofs)
                        d._isLottie = "isLottie";
                }
                if (m.accessibilityLabel != null && Object.hasOwnProperty.call(m, "accessibilityLabel")) {
                    d.accessibilityLabel = m.accessibilityLabel;
                    if (o.oneofs)
                        d._accessibilityLabel = "accessibilityLabel";
                }
                if (m.mediaKeyDomain != null && Object.hasOwnProperty.call(m, "mediaKeyDomain")) {
                    d.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.toObject(m.mediaKeyDomain, o, q + 1);
                    if (o.oneofs)
                        d._mediaKeyDomain = "mediaKeyDomain";
                }
                return d;
            };

            StickerMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StickerMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.StickerMessage";
            };

            return StickerMessage;
        })();

        Message.VideoMessage = (function() {

            function VideoMessage(p) {
                this.interactiveAnnotations = [];
                this.annotations = [];
                this.processedVideos = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            VideoMessage.prototype.url = null;
            VideoMessage.prototype.mimetype = null;
            VideoMessage.prototype.fileSha256 = null;
            VideoMessage.prototype.fileLength = null;
            VideoMessage.prototype.seconds = null;
            VideoMessage.prototype.mediaKey = null;
            VideoMessage.prototype.caption = null;
            VideoMessage.prototype.gifPlayback = null;
            VideoMessage.prototype.height = null;
            VideoMessage.prototype.width = null;
            VideoMessage.prototype.fileEncSha256 = null;
            VideoMessage.prototype.interactiveAnnotations = $util.emptyArray;
            VideoMessage.prototype.directPath = null;
            VideoMessage.prototype.mediaKeyTimestamp = null;
            VideoMessage.prototype.jpegThumbnail = null;
            VideoMessage.prototype.contextInfo = null;
            VideoMessage.prototype.streamingSidecar = null;
            VideoMessage.prototype.gifAttribution = null;
            VideoMessage.prototype.viewOnce = null;
            VideoMessage.prototype.thumbnailDirectPath = null;
            VideoMessage.prototype.thumbnailSha256 = null;
            VideoMessage.prototype.thumbnailEncSha256 = null;
            VideoMessage.prototype.staticUrl = null;
            VideoMessage.prototype.annotations = $util.emptyArray;
            VideoMessage.prototype.accessibilityLabel = null;
            VideoMessage.prototype.processedVideos = $util.emptyArray;
            VideoMessage.prototype.externalShareFullVideoDurationInSeconds = null;
            VideoMessage.prototype.motionPhotoPresentationOffsetMs = null;
            VideoMessage.prototype.metadataUrl = null;
            VideoMessage.prototype.videoSourceType = null;
            VideoMessage.prototype.mediaKeyDomain = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_url", {
                get: $util.oneOfGetter($oneOfFields = ["url"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_mimetype", {
                get: $util.oneOfGetter($oneOfFields = ["mimetype"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_fileSha256", {
                get: $util.oneOfGetter($oneOfFields = ["fileSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_fileLength", {
                get: $util.oneOfGetter($oneOfFields = ["fileLength"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_seconds", {
                get: $util.oneOfGetter($oneOfFields = ["seconds"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_mediaKey", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_caption", {
                get: $util.oneOfGetter($oneOfFields = ["caption"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_gifPlayback", {
                get: $util.oneOfGetter($oneOfFields = ["gifPlayback"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_height", {
                get: $util.oneOfGetter($oneOfFields = ["height"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_width", {
                get: $util.oneOfGetter($oneOfFields = ["width"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_fileEncSha256", {
                get: $util.oneOfGetter($oneOfFields = ["fileEncSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_directPath", {
                get: $util.oneOfGetter($oneOfFields = ["directPath"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_mediaKeyTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKeyTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_jpegThumbnail", {
                get: $util.oneOfGetter($oneOfFields = ["jpegThumbnail"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_contextInfo", {
                get: $util.oneOfGetter($oneOfFields = ["contextInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_streamingSidecar", {
                get: $util.oneOfGetter($oneOfFields = ["streamingSidecar"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_gifAttribution", {
                get: $util.oneOfGetter($oneOfFields = ["gifAttribution"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_viewOnce", {
                get: $util.oneOfGetter($oneOfFields = ["viewOnce"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_thumbnailDirectPath", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailDirectPath"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_thumbnailSha256", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_thumbnailEncSha256", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailEncSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_staticUrl", {
                get: $util.oneOfGetter($oneOfFields = ["staticUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_accessibilityLabel", {
                get: $util.oneOfGetter($oneOfFields = ["accessibilityLabel"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_externalShareFullVideoDurationInSeconds", {
                get: $util.oneOfGetter($oneOfFields = ["externalShareFullVideoDurationInSeconds"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_motionPhotoPresentationOffsetMs", {
                get: $util.oneOfGetter($oneOfFields = ["motionPhotoPresentationOffsetMs"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_metadataUrl", {
                get: $util.oneOfGetter($oneOfFields = ["metadataUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_videoSourceType", {
                get: $util.oneOfGetter($oneOfFields = ["videoSourceType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(VideoMessage.prototype, "_mediaKeyDomain", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKeyDomain"]),
                set: $util.oneOfSetter($oneOfFields)
            });

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
                if (m.url != null && Object.hasOwnProperty.call(m, "url"))
                    w.uint32(10).string(m.url);
                if (m.mimetype != null && Object.hasOwnProperty.call(m, "mimetype"))
                    w.uint32(18).string(m.mimetype);
                if (m.fileSha256 != null && Object.hasOwnProperty.call(m, "fileSha256"))
                    w.uint32(26).bytes(m.fileSha256);
                if (m.fileLength != null && Object.hasOwnProperty.call(m, "fileLength"))
                    w.uint32(32).uint64(m.fileLength);
                if (m.seconds != null && Object.hasOwnProperty.call(m, "seconds"))
                    w.uint32(40).uint32(m.seconds);
                if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey"))
                    w.uint32(50).bytes(m.mediaKey);
                if (m.caption != null && Object.hasOwnProperty.call(m, "caption"))
                    w.uint32(58).string(m.caption);
                if (m.gifPlayback != null && Object.hasOwnProperty.call(m, "gifPlayback"))
                    w.uint32(64).bool(m.gifPlayback);
                if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                    w.uint32(72).uint32(m.height);
                if (m.width != null && Object.hasOwnProperty.call(m, "width"))
                    w.uint32(80).uint32(m.width);
                if (m.fileEncSha256 != null && Object.hasOwnProperty.call(m, "fileEncSha256"))
                    w.uint32(90).bytes(m.fileEncSha256);
                if (m.interactiveAnnotations != null && m.interactiveAnnotations.length) {
                    for (var i = 0; i < m.interactiveAnnotations.length; ++i)
                        $root.proto.InteractiveAnnotation.encode(m.interactiveAnnotations[i], w.uint32(98).fork(), q + 1).ldelim();
                }
                if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath"))
                    w.uint32(106).string(m.directPath);
                if (m.mediaKeyTimestamp != null && Object.hasOwnProperty.call(m, "mediaKeyTimestamp"))
                    w.uint32(112).int64(m.mediaKeyTimestamp);
                if (m.jpegThumbnail != null && Object.hasOwnProperty.call(m, "jpegThumbnail"))
                    w.uint32(130).bytes(m.jpegThumbnail);
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo"))
                    $root.proto.ContextInfo.encode(m.contextInfo, w.uint32(138).fork(), q + 1).ldelim();
                if (m.streamingSidecar != null && Object.hasOwnProperty.call(m, "streamingSidecar"))
                    w.uint32(146).bytes(m.streamingSidecar);
                if (m.gifAttribution != null && Object.hasOwnProperty.call(m, "gifAttribution"))
                    w.uint32(152).int32(m.gifAttribution);
                if (m.viewOnce != null && Object.hasOwnProperty.call(m, "viewOnce"))
                    w.uint32(160).bool(m.viewOnce);
                if (m.thumbnailDirectPath != null && Object.hasOwnProperty.call(m, "thumbnailDirectPath"))
                    w.uint32(170).string(m.thumbnailDirectPath);
                if (m.thumbnailSha256 != null && Object.hasOwnProperty.call(m, "thumbnailSha256"))
                    w.uint32(178).bytes(m.thumbnailSha256);
                if (m.thumbnailEncSha256 != null && Object.hasOwnProperty.call(m, "thumbnailEncSha256"))
                    w.uint32(186).bytes(m.thumbnailEncSha256);
                if (m.staticUrl != null && Object.hasOwnProperty.call(m, "staticUrl"))
                    w.uint32(194).string(m.staticUrl);
                if (m.annotations != null && m.annotations.length) {
                    for (var i = 0; i < m.annotations.length; ++i)
                        $root.proto.InteractiveAnnotation.encode(m.annotations[i], w.uint32(202).fork(), q + 1).ldelim();
                }
                if (m.accessibilityLabel != null && Object.hasOwnProperty.call(m, "accessibilityLabel"))
                    w.uint32(210).string(m.accessibilityLabel);
                if (m.processedVideos != null && m.processedVideos.length) {
                    for (var i = 0; i < m.processedVideos.length; ++i)
                        $root.proto.ProcessedVideo.encode(m.processedVideos[i], w.uint32(218).fork(), q + 1).ldelim();
                }
                if (m.externalShareFullVideoDurationInSeconds != null && Object.hasOwnProperty.call(m, "externalShareFullVideoDurationInSeconds"))
                    w.uint32(224).uint32(m.externalShareFullVideoDurationInSeconds);
                if (m.motionPhotoPresentationOffsetMs != null && Object.hasOwnProperty.call(m, "motionPhotoPresentationOffsetMs"))
                    w.uint32(232).uint64(m.motionPhotoPresentationOffsetMs);
                if (m.metadataUrl != null && Object.hasOwnProperty.call(m, "metadataUrl"))
                    w.uint32(242).string(m.metadataUrl);
                if (m.videoSourceType != null && Object.hasOwnProperty.call(m, "videoSourceType"))
                    w.uint32(248).int32(m.videoSourceType);
                if (m.mediaKeyDomain != null && Object.hasOwnProperty.call(m, "mediaKeyDomain"))
                    $root.proto.Message.MediaKeyDomain.encode(m.mediaKeyDomain, w.uint32(258).fork(), q + 1).ldelim();
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
                    case 1: {
                            m.url = r.string();
                            break;
                        }
                    case 2: {
                            m.mimetype = r.string();
                            break;
                        }
                    case 3: {
                            m.fileSha256 = r.bytes();
                            break;
                        }
                    case 4: {
                            m.fileLength = r.uint64();
                            break;
                        }
                    case 5: {
                            m.seconds = r.uint32();
                            break;
                        }
                    case 6: {
                            m.mediaKey = r.bytes();
                            break;
                        }
                    case 7: {
                            m.caption = r.string();
                            break;
                        }
                    case 8: {
                            m.gifPlayback = r.bool();
                            break;
                        }
                    case 9: {
                            m.height = r.uint32();
                            break;
                        }
                    case 10: {
                            m.width = r.uint32();
                            break;
                        }
                    case 11: {
                            m.fileEncSha256 = r.bytes();
                            break;
                        }
                    case 12: {
                            if (!(m.interactiveAnnotations && m.interactiveAnnotations.length))
                                m.interactiveAnnotations = [];
                            m.interactiveAnnotations.push($root.proto.InteractiveAnnotation.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    case 13: {
                            m.directPath = r.string();
                            break;
                        }
                    case 14: {
                            m.mediaKeyTimestamp = r.int64();
                            break;
                        }
                    case 16: {
                            m.jpegThumbnail = r.bytes();
                            break;
                        }
                    case 17: {
                            m.contextInfo = $root.proto.ContextInfo.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 18: {
                            m.streamingSidecar = r.bytes();
                            break;
                        }
                    case 19: {
                            m.gifAttribution = r.int32();
                            break;
                        }
                    case 20: {
                            m.viewOnce = r.bool();
                            break;
                        }
                    case 21: {
                            m.thumbnailDirectPath = r.string();
                            break;
                        }
                    case 22: {
                            m.thumbnailSha256 = r.bytes();
                            break;
                        }
                    case 23: {
                            m.thumbnailEncSha256 = r.bytes();
                            break;
                        }
                    case 24: {
                            m.staticUrl = r.string();
                            break;
                        }
                    case 25: {
                            if (!(m.annotations && m.annotations.length))
                                m.annotations = [];
                            m.annotations.push($root.proto.InteractiveAnnotation.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    case 26: {
                            m.accessibilityLabel = r.string();
                            break;
                        }
                    case 27: {
                            if (!(m.processedVideos && m.processedVideos.length))
                                m.processedVideos = [];
                            m.processedVideos.push($root.proto.ProcessedVideo.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    case 28: {
                            m.externalShareFullVideoDurationInSeconds = r.uint32();
                            break;
                        }
                    case 29: {
                            m.motionPhotoPresentationOffsetMs = r.uint64();
                            break;
                        }
                    case 30: {
                            m.metadataUrl = r.string();
                            break;
                        }
                    case 31: {
                            m.videoSourceType = r.int32();
                            break;
                        }
                    case 32: {
                            m.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
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
                if (!$util.isObject(d))
                    throw TypeError(".proto.Message.VideoMessage: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.Message.VideoMessage();
                if (d.url != null) {
                    m.url = String(d.url);
                }
                if (d.mimetype != null) {
                    m.mimetype = String(d.mimetype);
                }
                if (d.fileSha256 != null) {
                    if (typeof d.fileSha256 === "string")
                        $util.base64.decode(d.fileSha256, m.fileSha256 = $util.newBuffer($util.base64.length(d.fileSha256)), 0);
                    else if (d.fileSha256.length >= 0)
                        m.fileSha256 = d.fileSha256;
                }
                if (d.fileLength != null) {
                    if ($util.Long)
                        m.fileLength = $util.Long.fromValue(d.fileLength, true);
                    else if (typeof d.fileLength === "string")
                        m.fileLength = parseInt(d.fileLength, 10);
                    else if (typeof d.fileLength === "number")
                        m.fileLength = d.fileLength;
                    else if (typeof d.fileLength === "object")
                        m.fileLength = new $util.LongBits(d.fileLength.low >>> 0, d.fileLength.high >>> 0).toNumber(true);
                }
                if (d.seconds != null) {
                    m.seconds = d.seconds >>> 0;
                }
                if (d.mediaKey != null) {
                    if (typeof d.mediaKey === "string")
                        $util.base64.decode(d.mediaKey, m.mediaKey = $util.newBuffer($util.base64.length(d.mediaKey)), 0);
                    else if (d.mediaKey.length >= 0)
                        m.mediaKey = d.mediaKey;
                }
                if (d.caption != null) {
                    m.caption = String(d.caption);
                }
                if (d.gifPlayback != null) {
                    m.gifPlayback = Boolean(d.gifPlayback);
                }
                if (d.height != null) {
                    m.height = d.height >>> 0;
                }
                if (d.width != null) {
                    m.width = d.width >>> 0;
                }
                if (d.fileEncSha256 != null) {
                    if (typeof d.fileEncSha256 === "string")
                        $util.base64.decode(d.fileEncSha256, m.fileEncSha256 = $util.newBuffer($util.base64.length(d.fileEncSha256)), 0);
                    else if (d.fileEncSha256.length >= 0)
                        m.fileEncSha256 = d.fileEncSha256;
                }
                if (d.interactiveAnnotations) {
                    if (!Array.isArray(d.interactiveAnnotations))
                        throw TypeError(".proto.Message.VideoMessage.interactiveAnnotations: array expected");
                    m.interactiveAnnotations = [];
                    for (var i = 0; i < d.interactiveAnnotations.length; ++i) {
                        if (!$util.isObject(d.interactiveAnnotations[i]))
                            throw TypeError(".proto.Message.VideoMessage.interactiveAnnotations: object expected");
                        m.interactiveAnnotations[i] = $root.proto.InteractiveAnnotation.fromObject(d.interactiveAnnotations[i], n + 1);
                    }
                }
                if (d.directPath != null) {
                    m.directPath = String(d.directPath);
                }
                if (d.mediaKeyTimestamp != null) {
                    if ($util.Long)
                        m.mediaKeyTimestamp = $util.Long.fromValue(d.mediaKeyTimestamp, false);
                    else if (typeof d.mediaKeyTimestamp === "string")
                        m.mediaKeyTimestamp = parseInt(d.mediaKeyTimestamp, 10);
                    else if (typeof d.mediaKeyTimestamp === "number")
                        m.mediaKeyTimestamp = d.mediaKeyTimestamp;
                    else if (typeof d.mediaKeyTimestamp === "object")
                        m.mediaKeyTimestamp = new $util.LongBits(d.mediaKeyTimestamp.low >>> 0, d.mediaKeyTimestamp.high >>> 0).toNumber();
                }
                if (d.jpegThumbnail != null) {
                    if (typeof d.jpegThumbnail === "string")
                        $util.base64.decode(d.jpegThumbnail, m.jpegThumbnail = $util.newBuffer($util.base64.length(d.jpegThumbnail)), 0);
                    else if (d.jpegThumbnail.length >= 0)
                        m.jpegThumbnail = d.jpegThumbnail;
                }
                if (d.contextInfo != null) {
                    if (!$util.isObject(d.contextInfo))
                        throw TypeError(".proto.Message.VideoMessage.contextInfo: object expected");
                    m.contextInfo = $root.proto.ContextInfo.fromObject(d.contextInfo, n + 1);
                }
                if (d.streamingSidecar != null) {
                    if (typeof d.streamingSidecar === "string")
                        $util.base64.decode(d.streamingSidecar, m.streamingSidecar = $util.newBuffer($util.base64.length(d.streamingSidecar)), 0);
                    else if (d.streamingSidecar.length >= 0)
                        m.streamingSidecar = d.streamingSidecar;
                }
                switch (d.gifAttribution) {
                default:
                    if (typeof d.gifAttribution === "number") {
                        m.gifAttribution = d.gifAttribution;
                        break;
                    }
                    break;
                case "NONE":
                case 0:
                    m.gifAttribution = 0;
                    break;
                case "GIPHY":
                case 1:
                    m.gifAttribution = 1;
                    break;
                case "TENOR":
                case 2:
                    m.gifAttribution = 2;
                    break;
                case "KLIPY":
                case 3:
                    m.gifAttribution = 3;
                    break;
                }
                if (d.viewOnce != null) {
                    m.viewOnce = Boolean(d.viewOnce);
                }
                if (d.thumbnailDirectPath != null) {
                    m.thumbnailDirectPath = String(d.thumbnailDirectPath);
                }
                if (d.thumbnailSha256 != null) {
                    if (typeof d.thumbnailSha256 === "string")
                        $util.base64.decode(d.thumbnailSha256, m.thumbnailSha256 = $util.newBuffer($util.base64.length(d.thumbnailSha256)), 0);
                    else if (d.thumbnailSha256.length >= 0)
                        m.thumbnailSha256 = d.thumbnailSha256;
                }
                if (d.thumbnailEncSha256 != null) {
                    if (typeof d.thumbnailEncSha256 === "string")
                        $util.base64.decode(d.thumbnailEncSha256, m.thumbnailEncSha256 = $util.newBuffer($util.base64.length(d.thumbnailEncSha256)), 0);
                    else if (d.thumbnailEncSha256.length >= 0)
                        m.thumbnailEncSha256 = d.thumbnailEncSha256;
                }
                if (d.staticUrl != null) {
                    m.staticUrl = String(d.staticUrl);
                }
                if (d.annotations) {
                    if (!Array.isArray(d.annotations))
                        throw TypeError(".proto.Message.VideoMessage.annotations: array expected");
                    m.annotations = [];
                    for (var i = 0; i < d.annotations.length; ++i) {
                        if (!$util.isObject(d.annotations[i]))
                            throw TypeError(".proto.Message.VideoMessage.annotations: object expected");
                        m.annotations[i] = $root.proto.InteractiveAnnotation.fromObject(d.annotations[i], n + 1);
                    }
                }
                if (d.accessibilityLabel != null) {
                    m.accessibilityLabel = String(d.accessibilityLabel);
                }
                if (d.processedVideos) {
                    if (!Array.isArray(d.processedVideos))
                        throw TypeError(".proto.Message.VideoMessage.processedVideos: array expected");
                    m.processedVideos = [];
                    for (var i = 0; i < d.processedVideos.length; ++i) {
                        if (!$util.isObject(d.processedVideos[i]))
                            throw TypeError(".proto.Message.VideoMessage.processedVideos: object expected");
                        m.processedVideos[i] = $root.proto.ProcessedVideo.fromObject(d.processedVideos[i], n + 1);
                    }
                }
                if (d.externalShareFullVideoDurationInSeconds != null) {
                    m.externalShareFullVideoDurationInSeconds = d.externalShareFullVideoDurationInSeconds >>> 0;
                }
                if (d.motionPhotoPresentationOffsetMs != null) {
                    if ($util.Long)
                        m.motionPhotoPresentationOffsetMs = $util.Long.fromValue(d.motionPhotoPresentationOffsetMs, true);
                    else if (typeof d.motionPhotoPresentationOffsetMs === "string")
                        m.motionPhotoPresentationOffsetMs = parseInt(d.motionPhotoPresentationOffsetMs, 10);
                    else if (typeof d.motionPhotoPresentationOffsetMs === "number")
                        m.motionPhotoPresentationOffsetMs = d.motionPhotoPresentationOffsetMs;
                    else if (typeof d.motionPhotoPresentationOffsetMs === "object")
                        m.motionPhotoPresentationOffsetMs = new $util.LongBits(d.motionPhotoPresentationOffsetMs.low >>> 0, d.motionPhotoPresentationOffsetMs.high >>> 0).toNumber(true);
                }
                if (d.metadataUrl != null) {
                    m.metadataUrl = String(d.metadataUrl);
                }
                switch (d.videoSourceType) {
                default:
                    if (typeof d.videoSourceType === "number") {
                        m.videoSourceType = d.videoSourceType;
                        break;
                    }
                    break;
                case "USER_VIDEO":
                case 0:
                    m.videoSourceType = 0;
                    break;
                case "AI_GENERATED":
                case 1:
                    m.videoSourceType = 1;
                    break;
                }
                if (d.mediaKeyDomain != null) {
                    if (!$util.isObject(d.mediaKeyDomain))
                        throw TypeError(".proto.Message.VideoMessage.mediaKeyDomain: object expected");
                    m.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.fromObject(d.mediaKeyDomain, n + 1);
                }
                return m;
            };

            VideoMessage.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (o.arrays || o.defaults) {
                    d.interactiveAnnotations = [];
                    d.annotations = [];
                    d.processedVideos = [];
                }
                if (m.url != null && Object.hasOwnProperty.call(m, "url")) {
                    d.url = m.url;
                    if (o.oneofs)
                        d._url = "url";
                }
                if (m.mimetype != null && Object.hasOwnProperty.call(m, "mimetype")) {
                    d.mimetype = m.mimetype;
                    if (o.oneofs)
                        d._mimetype = "mimetype";
                }
                if (m.fileSha256 != null && Object.hasOwnProperty.call(m, "fileSha256")) {
                    d.fileSha256 = o.bytes === String ? $util.base64.encode(m.fileSha256, 0, m.fileSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileSha256) : m.fileSha256;
                    if (o.oneofs)
                        d._fileSha256 = "fileSha256";
                }
                if (m.fileLength != null && Object.hasOwnProperty.call(m, "fileLength")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.fileLength = typeof m.fileLength === "number" ? BigInt(m.fileLength) : $util.Long.fromBits(m.fileLength.low >>> 0, m.fileLength.high >>> 0, true).toBigInt();
                    else if (typeof m.fileLength === "number")
                        d.fileLength = o.longs === String ? String(m.fileLength) : m.fileLength;
                    else
                        d.fileLength = o.longs === String ? longToString(m.fileLength, true) : o.longs === Number ? longToNumber(m.fileLength, true) : m.fileLength;
                    if (o.oneofs)
                        d._fileLength = "fileLength";
                }
                if (m.seconds != null && Object.hasOwnProperty.call(m, "seconds")) {
                    d.seconds = m.seconds;
                    if (o.oneofs)
                        d._seconds = "seconds";
                }
                if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey")) {
                    d.mediaKey = o.bytes === String ? $util.base64.encode(m.mediaKey, 0, m.mediaKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.mediaKey) : m.mediaKey;
                    if (o.oneofs)
                        d._mediaKey = "mediaKey";
                }
                if (m.caption != null && Object.hasOwnProperty.call(m, "caption")) {
                    d.caption = m.caption;
                    if (o.oneofs)
                        d._caption = "caption";
                }
                if (m.gifPlayback != null && Object.hasOwnProperty.call(m, "gifPlayback")) {
                    d.gifPlayback = m.gifPlayback;
                    if (o.oneofs)
                        d._gifPlayback = "gifPlayback";
                }
                if (m.height != null && Object.hasOwnProperty.call(m, "height")) {
                    d.height = m.height;
                    if (o.oneofs)
                        d._height = "height";
                }
                if (m.width != null && Object.hasOwnProperty.call(m, "width")) {
                    d.width = m.width;
                    if (o.oneofs)
                        d._width = "width";
                }
                if (m.fileEncSha256 != null && Object.hasOwnProperty.call(m, "fileEncSha256")) {
                    d.fileEncSha256 = o.bytes === String ? $util.base64.encode(m.fileEncSha256, 0, m.fileEncSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileEncSha256) : m.fileEncSha256;
                    if (o.oneofs)
                        d._fileEncSha256 = "fileEncSha256";
                }
                if (m.interactiveAnnotations && m.interactiveAnnotations.length) {
                    d.interactiveAnnotations = [];
                    for (var j = 0; j < m.interactiveAnnotations.length; ++j) {
                        d.interactiveAnnotations[j] = $root.proto.InteractiveAnnotation.toObject(m.interactiveAnnotations[j], o, q + 1);
                    }
                }
                if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath")) {
                    d.directPath = m.directPath;
                    if (o.oneofs)
                        d._directPath = "directPath";
                }
                if (m.mediaKeyTimestamp != null && Object.hasOwnProperty.call(m, "mediaKeyTimestamp")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.mediaKeyTimestamp = typeof m.mediaKeyTimestamp === "number" ? BigInt(m.mediaKeyTimestamp) : $util.Long.fromBits(m.mediaKeyTimestamp.low >>> 0, m.mediaKeyTimestamp.high >>> 0, false).toBigInt();
                    else if (typeof m.mediaKeyTimestamp === "number")
                        d.mediaKeyTimestamp = o.longs === String ? String(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
                    else
                        d.mediaKeyTimestamp = o.longs === String ? longToString(m.mediaKeyTimestamp) : o.longs === Number ? longToNumber(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
                    if (o.oneofs)
                        d._mediaKeyTimestamp = "mediaKeyTimestamp";
                }
                if (m.jpegThumbnail != null && Object.hasOwnProperty.call(m, "jpegThumbnail")) {
                    d.jpegThumbnail = o.bytes === String ? $util.base64.encode(m.jpegThumbnail, 0, m.jpegThumbnail.length) : o.bytes === Array ? Array.prototype.slice.call(m.jpegThumbnail) : m.jpegThumbnail;
                    if (o.oneofs)
                        d._jpegThumbnail = "jpegThumbnail";
                }
                if (m.contextInfo != null && Object.hasOwnProperty.call(m, "contextInfo")) {
                    d.contextInfo = $root.proto.ContextInfo.toObject(m.contextInfo, o, q + 1);
                    if (o.oneofs)
                        d._contextInfo = "contextInfo";
                }
                if (m.streamingSidecar != null && Object.hasOwnProperty.call(m, "streamingSidecar")) {
                    d.streamingSidecar = o.bytes === String ? $util.base64.encode(m.streamingSidecar, 0, m.streamingSidecar.length) : o.bytes === Array ? Array.prototype.slice.call(m.streamingSidecar) : m.streamingSidecar;
                    if (o.oneofs)
                        d._streamingSidecar = "streamingSidecar";
                }
                if (m.gifAttribution != null && Object.hasOwnProperty.call(m, "gifAttribution")) {
                    d.gifAttribution = o.enums === String ? $root.proto.Message.VideoMessage.Attribution[m.gifAttribution] === undefined ? m.gifAttribution : $root.proto.Message.VideoMessage.Attribution[m.gifAttribution] : m.gifAttribution;
                    if (o.oneofs)
                        d._gifAttribution = "gifAttribution";
                }
                if (m.viewOnce != null && Object.hasOwnProperty.call(m, "viewOnce")) {
                    d.viewOnce = m.viewOnce;
                    if (o.oneofs)
                        d._viewOnce = "viewOnce";
                }
                if (m.thumbnailDirectPath != null && Object.hasOwnProperty.call(m, "thumbnailDirectPath")) {
                    d.thumbnailDirectPath = m.thumbnailDirectPath;
                    if (o.oneofs)
                        d._thumbnailDirectPath = "thumbnailDirectPath";
                }
                if (m.thumbnailSha256 != null && Object.hasOwnProperty.call(m, "thumbnailSha256")) {
                    d.thumbnailSha256 = o.bytes === String ? $util.base64.encode(m.thumbnailSha256, 0, m.thumbnailSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.thumbnailSha256) : m.thumbnailSha256;
                    if (o.oneofs)
                        d._thumbnailSha256 = "thumbnailSha256";
                }
                if (m.thumbnailEncSha256 != null && Object.hasOwnProperty.call(m, "thumbnailEncSha256")) {
                    d.thumbnailEncSha256 = o.bytes === String ? $util.base64.encode(m.thumbnailEncSha256, 0, m.thumbnailEncSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.thumbnailEncSha256) : m.thumbnailEncSha256;
                    if (o.oneofs)
                        d._thumbnailEncSha256 = "thumbnailEncSha256";
                }
                if (m.staticUrl != null && Object.hasOwnProperty.call(m, "staticUrl")) {
                    d.staticUrl = m.staticUrl;
                    if (o.oneofs)
                        d._staticUrl = "staticUrl";
                }
                if (m.annotations && m.annotations.length) {
                    d.annotations = [];
                    for (var j = 0; j < m.annotations.length; ++j) {
                        d.annotations[j] = $root.proto.InteractiveAnnotation.toObject(m.annotations[j], o, q + 1);
                    }
                }
                if (m.accessibilityLabel != null && Object.hasOwnProperty.call(m, "accessibilityLabel")) {
                    d.accessibilityLabel = m.accessibilityLabel;
                    if (o.oneofs)
                        d._accessibilityLabel = "accessibilityLabel";
                }
                if (m.processedVideos && m.processedVideos.length) {
                    d.processedVideos = [];
                    for (var j = 0; j < m.processedVideos.length; ++j) {
                        d.processedVideos[j] = $root.proto.ProcessedVideo.toObject(m.processedVideos[j], o, q + 1);
                    }
                }
                if (m.externalShareFullVideoDurationInSeconds != null && Object.hasOwnProperty.call(m, "externalShareFullVideoDurationInSeconds")) {
                    d.externalShareFullVideoDurationInSeconds = m.externalShareFullVideoDurationInSeconds;
                    if (o.oneofs)
                        d._externalShareFullVideoDurationInSeconds = "externalShareFullVideoDurationInSeconds";
                }
                if (m.motionPhotoPresentationOffsetMs != null && Object.hasOwnProperty.call(m, "motionPhotoPresentationOffsetMs")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.motionPhotoPresentationOffsetMs = typeof m.motionPhotoPresentationOffsetMs === "number" ? BigInt(m.motionPhotoPresentationOffsetMs) : $util.Long.fromBits(m.motionPhotoPresentationOffsetMs.low >>> 0, m.motionPhotoPresentationOffsetMs.high >>> 0, true).toBigInt();
                    else if (typeof m.motionPhotoPresentationOffsetMs === "number")
                        d.motionPhotoPresentationOffsetMs = o.longs === String ? String(m.motionPhotoPresentationOffsetMs) : m.motionPhotoPresentationOffsetMs;
                    else
                        d.motionPhotoPresentationOffsetMs = o.longs === String ? longToString(m.motionPhotoPresentationOffsetMs, true) : o.longs === Number ? longToNumber(m.motionPhotoPresentationOffsetMs, true) : m.motionPhotoPresentationOffsetMs;
                    if (o.oneofs)
                        d._motionPhotoPresentationOffsetMs = "motionPhotoPresentationOffsetMs";
                }
                if (m.metadataUrl != null && Object.hasOwnProperty.call(m, "metadataUrl")) {
                    d.metadataUrl = m.metadataUrl;
                    if (o.oneofs)
                        d._metadataUrl = "metadataUrl";
                }
                if (m.videoSourceType != null && Object.hasOwnProperty.call(m, "videoSourceType")) {
                    d.videoSourceType = o.enums === String ? $root.proto.Message.VideoMessage.VideoSourceType[m.videoSourceType] === undefined ? m.videoSourceType : $root.proto.Message.VideoMessage.VideoSourceType[m.videoSourceType] : m.videoSourceType;
                    if (o.oneofs)
                        d._videoSourceType = "videoSourceType";
                }
                if (m.mediaKeyDomain != null && Object.hasOwnProperty.call(m, "mediaKeyDomain")) {
                    d.mediaKeyDomain = $root.proto.Message.MediaKeyDomain.toObject(m.mediaKeyDomain, o, q + 1);
                    if (o.oneofs)
                        d._mediaKeyDomain = "mediaKeyDomain";
                }
                return d;
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

    proto.ProcessedVideo = proto.ProcessedVideo || createEmptyMessage("ProcessedVideo")

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
