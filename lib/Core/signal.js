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

    proto.SenderKeyDistributionMessage = (function() {

        function SenderKeyDistributionMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SenderKeyDistributionMessage.prototype.id = null;
        SenderKeyDistributionMessage.prototype.iteration = null;
        SenderKeyDistributionMessage.prototype.chainKey = null;
        SenderKeyDistributionMessage.prototype.signingKey = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_iteration", {
            get: $util.oneOfGetter($oneOfFields = ["iteration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_chainKey", {
            get: $util.oneOfGetter($oneOfFields = ["chainKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_signingKey", {
            get: $util.oneOfGetter($oneOfFields = ["signingKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SenderKeyDistributionMessage.create = function create(properties) {
            return new SenderKeyDistributionMessage(properties);
        };

        SenderKeyDistributionMessage.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).uint32(m.id);
            if (m.iteration != null && Object.hasOwnProperty.call(m, "iteration"))
                w.uint32(16).uint32(m.iteration);
            if (m.chainKey != null && Object.hasOwnProperty.call(m, "chainKey"))
                w.uint32(26).bytes(m.chainKey);
            if (m.signingKey != null && Object.hasOwnProperty.call(m, "signingKey"))
                w.uint32(34).bytes(m.signingKey);
            return w;
        };

        SenderKeyDistributionMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.SenderKeyDistributionMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.id = r.uint32();
                        break;
                    }
                case 2: {
                        m.iteration = r.uint32();
                        break;
                    }
                case 3: {
                        m.chainKey = r.bytes();
                        break;
                    }
                case 4: {
                        m.signingKey = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SenderKeyDistributionMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.SenderKeyDistributionMessage)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.SenderKeyDistributionMessage: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.SenderKeyDistributionMessage();
            if (d.id != null) {
                m.id = d.id >>> 0;
            }
            if (d.iteration != null) {
                m.iteration = d.iteration >>> 0;
            }
            if (d.chainKey != null) {
                if (typeof d.chainKey === "string")
                    $util.base64.decode(d.chainKey, m.chainKey = $util.newBuffer($util.base64.length(d.chainKey)), 0);
                else if (d.chainKey.length >= 0)
                    m.chainKey = d.chainKey;
            }
            if (d.signingKey != null) {
                if (typeof d.signingKey === "string")
                    $util.base64.decode(d.signingKey, m.signingKey = $util.newBuffer($util.base64.length(d.signingKey)), 0);
                else if (d.signingKey.length >= 0)
                    m.signingKey = d.signingKey;
            }
            return m;
        };

        SenderKeyDistributionMessage.toObject = function toObject(m, o, q) {
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
            if (m.iteration != null && Object.hasOwnProperty.call(m, "iteration")) {
                d.iteration = m.iteration;
                if (o.oneofs)
                    d._iteration = "iteration";
            }
            if (m.chainKey != null && Object.hasOwnProperty.call(m, "chainKey")) {
                d.chainKey = o.bytes === String ? $util.base64.encode(m.chainKey, 0, m.chainKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.chainKey) : m.chainKey;
                if (o.oneofs)
                    d._chainKey = "chainKey";
            }
            if (m.signingKey != null && Object.hasOwnProperty.call(m, "signingKey")) {
                d.signingKey = o.bytes === String ? $util.base64.encode(m.signingKey, 0, m.signingKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.signingKey) : m.signingKey;
                if (o.oneofs)
                    d._signingKey = "signingKey";
            }
            return d;
        };

        SenderKeyDistributionMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SenderKeyDistributionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.SenderKeyDistributionMessage";
        };

        return SenderKeyDistributionMessage;
    })();

    proto.SenderKeyMessage = (function() {

        function SenderKeyMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SenderKeyMessage.prototype.id = null;
        SenderKeyMessage.prototype.iteration = null;
        SenderKeyMessage.prototype.ciphertext = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyMessage.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyMessage.prototype, "_iteration", {
            get: $util.oneOfGetter($oneOfFields = ["iteration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyMessage.prototype, "_ciphertext", {
            get: $util.oneOfGetter($oneOfFields = ["ciphertext"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SenderKeyMessage.create = function create(properties) {
            return new SenderKeyMessage(properties);
        };

        SenderKeyMessage.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).uint32(m.id);
            if (m.iteration != null && Object.hasOwnProperty.call(m, "iteration"))
                w.uint32(16).uint32(m.iteration);
            if (m.ciphertext != null && Object.hasOwnProperty.call(m, "ciphertext"))
                w.uint32(26).bytes(m.ciphertext);
            return w;
        };

        SenderKeyMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.SenderKeyMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.id = r.uint32();
                        break;
                    }
                case 2: {
                        m.iteration = r.uint32();
                        break;
                    }
                case 3: {
                        m.ciphertext = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SenderKeyMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.SenderKeyMessage)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.SenderKeyMessage: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.SenderKeyMessage();
            if (d.id != null) {
                m.id = d.id >>> 0;
            }
            if (d.iteration != null) {
                m.iteration = d.iteration >>> 0;
            }
            if (d.ciphertext != null) {
                if (typeof d.ciphertext === "string")
                    $util.base64.decode(d.ciphertext, m.ciphertext = $util.newBuffer($util.base64.length(d.ciphertext)), 0);
                else if (d.ciphertext.length >= 0)
                    m.ciphertext = d.ciphertext;
            }
            return m;
        };

        SenderKeyMessage.toObject = function toObject(m, o, q) {
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
            if (m.iteration != null && Object.hasOwnProperty.call(m, "iteration")) {
                d.iteration = m.iteration;
                if (o.oneofs)
                    d._iteration = "iteration";
            }
            if (m.ciphertext != null && Object.hasOwnProperty.call(m, "ciphertext")) {
                d.ciphertext = o.bytes === String ? $util.base64.encode(m.ciphertext, 0, m.ciphertext.length) : o.bytes === Array ? Array.prototype.slice.call(m.ciphertext) : m.ciphertext;
                if (o.oneofs)
                    d._ciphertext = "ciphertext";
            }
            return d;
        };

        SenderKeyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SenderKeyMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.SenderKeyMessage";
        };

        return SenderKeyMessage;
    })();

    proto.SessionTransparencyType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
        values[valuesById[1] = "NY_AI_SAFETY_DISCLAIMER"] = 1;
        return values;
    })();

    proto.SignalMessage = (function() {

        function SignalMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SignalMessage.prototype.ratchetKey = null;
        SignalMessage.prototype.counter = null;
        SignalMessage.prototype.previousCounter = null;
        SignalMessage.prototype.ciphertext = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_ratchetKey", {
            get: $util.oneOfGetter($oneOfFields = ["ratchetKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_counter", {
            get: $util.oneOfGetter($oneOfFields = ["counter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_previousCounter", {
            get: $util.oneOfGetter($oneOfFields = ["previousCounter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_ciphertext", {
            get: $util.oneOfGetter($oneOfFields = ["ciphertext"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SignalMessage.create = function create(properties) {
            return new SignalMessage(properties);
        };

        SignalMessage.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.ratchetKey != null && Object.hasOwnProperty.call(m, "ratchetKey"))
                w.uint32(10).bytes(m.ratchetKey);
            if (m.counter != null && Object.hasOwnProperty.call(m, "counter"))
                w.uint32(16).uint32(m.counter);
            if (m.previousCounter != null && Object.hasOwnProperty.call(m, "previousCounter"))
                w.uint32(24).uint32(m.previousCounter);
            if (m.ciphertext != null && Object.hasOwnProperty.call(m, "ciphertext"))
                w.uint32(34).bytes(m.ciphertext);
            return w;
        };

        SignalMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.SignalMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.ratchetKey = r.bytes();
                        break;
                    }
                case 2: {
                        m.counter = r.uint32();
                        break;
                    }
                case 3: {
                        m.previousCounter = r.uint32();
                        break;
                    }
                case 4: {
                        m.ciphertext = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SignalMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.SignalMessage)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.SignalMessage: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.SignalMessage();
            if (d.ratchetKey != null) {
                if (typeof d.ratchetKey === "string")
                    $util.base64.decode(d.ratchetKey, m.ratchetKey = $util.newBuffer($util.base64.length(d.ratchetKey)), 0);
                else if (d.ratchetKey.length >= 0)
                    m.ratchetKey = d.ratchetKey;
            }
            if (d.counter != null) {
                m.counter = d.counter >>> 0;
            }
            if (d.previousCounter != null) {
                m.previousCounter = d.previousCounter >>> 0;
            }
            if (d.ciphertext != null) {
                if (typeof d.ciphertext === "string")
                    $util.base64.decode(d.ciphertext, m.ciphertext = $util.newBuffer($util.base64.length(d.ciphertext)), 0);
                else if (d.ciphertext.length >= 0)
                    m.ciphertext = d.ciphertext;
            }
            return m;
        };

        SignalMessage.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (m.ratchetKey != null && Object.hasOwnProperty.call(m, "ratchetKey")) {
                d.ratchetKey = o.bytes === String ? $util.base64.encode(m.ratchetKey, 0, m.ratchetKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.ratchetKey) : m.ratchetKey;
                if (o.oneofs)
                    d._ratchetKey = "ratchetKey";
            }
            if (m.counter != null && Object.hasOwnProperty.call(m, "counter")) {
                d.counter = m.counter;
                if (o.oneofs)
                    d._counter = "counter";
            }
            if (m.previousCounter != null && Object.hasOwnProperty.call(m, "previousCounter")) {
                d.previousCounter = m.previousCounter;
                if (o.oneofs)
                    d._previousCounter = "previousCounter";
            }
            if (m.ciphertext != null && Object.hasOwnProperty.call(m, "ciphertext")) {
                d.ciphertext = o.bytes === String ? $util.base64.encode(m.ciphertext, 0, m.ciphertext.length) : o.bytes === Array ? Array.prototype.slice.call(m.ciphertext) : m.ciphertext;
                if (o.oneofs)
                    d._ciphertext = "ciphertext";
            }
            return d;
        };

        SignalMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SignalMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.SignalMessage";
        };

        return SignalMessage;
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
