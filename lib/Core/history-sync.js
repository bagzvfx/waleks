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

    proto.Account = proto.Account || createEmptyMessage("Account")

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

    proto.CallLogRecord = proto.CallLogRecord || createEmptyMessage("CallLogRecord")

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

    proto.Conversation = proto.Conversation || createEmptyMessage("Conversation")

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

        function DeviceProps(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DeviceProps.prototype.os = null;
        DeviceProps.prototype.version = null;
        DeviceProps.prototype.platformType = null;
        DeviceProps.prototype.requireFullSync = null;
        DeviceProps.prototype.historySyncConfig = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceProps.prototype, "_os", {
            get: $util.oneOfGetter($oneOfFields = ["os"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceProps.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceProps.prototype, "_platformType", {
            get: $util.oneOfGetter($oneOfFields = ["platformType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceProps.prototype, "_requireFullSync", {
            get: $util.oneOfGetter($oneOfFields = ["requireFullSync"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceProps.prototype, "_historySyncConfig", {
            get: $util.oneOfGetter($oneOfFields = ["historySyncConfig"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        DeviceProps.create = function create(properties) {
            return new DeviceProps(properties);
        };

        DeviceProps.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.os != null && Object.hasOwnProperty.call(m, "os"))
                w.uint32(10).string(m.os);
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                $root.proto.DeviceProps.AppVersion.encode(m.version, w.uint32(18).fork(), q + 1).ldelim();
            if (m.platformType != null && Object.hasOwnProperty.call(m, "platformType"))
                w.uint32(24).int32(m.platformType);
            if (m.requireFullSync != null && Object.hasOwnProperty.call(m, "requireFullSync"))
                w.uint32(32).bool(m.requireFullSync);
            if (m.historySyncConfig != null && Object.hasOwnProperty.call(m, "historySyncConfig"))
                $root.proto.DeviceProps.HistorySyncConfig.encode(m.historySyncConfig, w.uint32(42).fork(), q + 1).ldelim();
            return w;
        };

        DeviceProps.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.DeviceProps();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.os = r.string();
                        break;
                    }
                case 2: {
                        m.version = $root.proto.DeviceProps.AppVersion.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.platformType = r.int32();
                        break;
                    }
                case 4: {
                        m.requireFullSync = r.bool();
                        break;
                    }
                case 5: {
                        m.historySyncConfig = $root.proto.DeviceProps.HistorySyncConfig.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        DeviceProps.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.DeviceProps)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.DeviceProps: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.DeviceProps();
            if (d.os != null) {
                m.os = String(d.os);
            }
            if (d.version != null) {
                if (!$util.isObject(d.version))
                    throw TypeError(".proto.DeviceProps.version: object expected");
                m.version = $root.proto.DeviceProps.AppVersion.fromObject(d.version, n + 1);
            }
            switch (d.platformType) {
            default:
                if (typeof d.platformType === "number") {
                    m.platformType = d.platformType;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                m.platformType = 0;
                break;
            case "CHROME":
            case 1:
                m.platformType = 1;
                break;
            case "FIREFOX":
            case 2:
                m.platformType = 2;
                break;
            case "IE":
            case 3:
                m.platformType = 3;
                break;
            case "OPERA":
            case 4:
                m.platformType = 4;
                break;
            case "SAFARI":
            case 5:
                m.platformType = 5;
                break;
            case "EDGE":
            case 6:
                m.platformType = 6;
                break;
            case "DESKTOP":
            case 7:
                m.platformType = 7;
                break;
            case "IPAD":
            case 8:
                m.platformType = 8;
                break;
            case "ANDROID_TABLET":
            case 9:
                m.platformType = 9;
                break;
            case "OHANA":
            case 10:
                m.platformType = 10;
                break;
            case "ALOHA":
            case 11:
                m.platformType = 11;
                break;
            case "CATALINA":
            case 12:
                m.platformType = 12;
                break;
            case "TCL_TV":
            case 13:
                m.platformType = 13;
                break;
            case "IOS_PHONE":
            case 14:
                m.platformType = 14;
                break;
            case "IOS_CATALYST":
            case 15:
                m.platformType = 15;
                break;
            case "ANDROID_PHONE":
            case 16:
                m.platformType = 16;
                break;
            case "ANDROID_AMBIGUOUS":
            case 17:
                m.platformType = 17;
                break;
            case "WEAR_OS":
            case 18:
                m.platformType = 18;
                break;
            case "AR_WRIST":
            case 19:
                m.platformType = 19;
                break;
            case "AR_DEVICE":
            case 20:
                m.platformType = 20;
                break;
            case "UWP":
            case 21:
                m.platformType = 21;
                break;
            case "VR":
            case 22:
                m.platformType = 22;
                break;
            case "CLOUD_API":
            case 23:
                m.platformType = 23;
                break;
            case "SMARTGLASSES":
            case 24:
                m.platformType = 24;
                break;
            }
            if (d.requireFullSync != null) {
                m.requireFullSync = Boolean(d.requireFullSync);
            }
            if (d.historySyncConfig != null) {
                if (!$util.isObject(d.historySyncConfig))
                    throw TypeError(".proto.DeviceProps.historySyncConfig: object expected");
                m.historySyncConfig = $root.proto.DeviceProps.HistorySyncConfig.fromObject(d.historySyncConfig, n + 1);
            }
            return m;
        };

        DeviceProps.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (m.os != null && Object.hasOwnProperty.call(m, "os")) {
                d.os = m.os;
                if (o.oneofs)
                    d._os = "os";
            }
            if (m.version != null && Object.hasOwnProperty.call(m, "version")) {
                d.version = $root.proto.DeviceProps.AppVersion.toObject(m.version, o, q + 1);
                if (o.oneofs)
                    d._version = "version";
            }
            if (m.platformType != null && Object.hasOwnProperty.call(m, "platformType")) {
                d.platformType = o.enums === String ? $root.proto.DeviceProps.PlatformType[m.platformType] === undefined ? m.platformType : $root.proto.DeviceProps.PlatformType[m.platformType] : m.platformType;
                if (o.oneofs)
                    d._platformType = "platformType";
            }
            if (m.requireFullSync != null && Object.hasOwnProperty.call(m, "requireFullSync")) {
                d.requireFullSync = m.requireFullSync;
                if (o.oneofs)
                    d._requireFullSync = "requireFullSync";
            }
            if (m.historySyncConfig != null && Object.hasOwnProperty.call(m, "historySyncConfig")) {
                d.historySyncConfig = $root.proto.DeviceProps.HistorySyncConfig.toObject(m.historySyncConfig, o, q + 1);
                if (o.oneofs)
                    d._historySyncConfig = "historySyncConfig";
            }
            return d;
        };

        DeviceProps.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        DeviceProps.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.DeviceProps";
        };

        DeviceProps.AppVersion = (function() {

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
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.DeviceProps.AppVersion();
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
                if (d instanceof $root.proto.DeviceProps.AppVersion)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.DeviceProps.AppVersion: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.DeviceProps.AppVersion();
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
                return typeUrlPrefix + "/proto.DeviceProps.AppVersion";
            };

            return AppVersion;
        })();

        DeviceProps.HistorySyncConfig = (function() {

            function HistorySyncConfig(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HistorySyncConfig.prototype.fullSyncDaysLimit = null;
            HistorySyncConfig.prototype.fullSyncSizeMbLimit = null;
            HistorySyncConfig.prototype.storageQuotaMb = null;
            HistorySyncConfig.prototype.inlineInitialPayloadInE2EeMsg = null;
            HistorySyncConfig.prototype.recentSyncDaysLimit = null;
            HistorySyncConfig.prototype.supportCallLogHistory = null;
            HistorySyncConfig.prototype.supportBotUserAgentChatHistory = null;
            HistorySyncConfig.prototype.supportCagReactionsAndPolls = null;
            HistorySyncConfig.prototype.supportBizHostedMsg = null;
            HistorySyncConfig.prototype.supportRecentSyncChunkMessageCountTuning = null;
            HistorySyncConfig.prototype.supportHostedGroupMsg = null;
            HistorySyncConfig.prototype.supportFbidBotChatHistory = null;
            HistorySyncConfig.prototype.supportAddOnHistorySyncMigration = null;
            HistorySyncConfig.prototype.supportMessageAssociation = null;
            HistorySyncConfig.prototype.supportGroupHistory = null;
            HistorySyncConfig.prototype.onDemandReady = null;
            HistorySyncConfig.prototype.supportGuestChat = null;
            HistorySyncConfig.prototype.completeOnDemandReady = null;
            HistorySyncConfig.prototype.thumbnailSyncDaysLimit = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_fullSyncDaysLimit", {
                get: $util.oneOfGetter($oneOfFields = ["fullSyncDaysLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_fullSyncSizeMbLimit", {
                get: $util.oneOfGetter($oneOfFields = ["fullSyncSizeMbLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_storageQuotaMb", {
                get: $util.oneOfGetter($oneOfFields = ["storageQuotaMb"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_inlineInitialPayloadInE2EeMsg", {
                get: $util.oneOfGetter($oneOfFields = ["inlineInitialPayloadInE2EeMsg"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_recentSyncDaysLimit", {
                get: $util.oneOfGetter($oneOfFields = ["recentSyncDaysLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportCallLogHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportCallLogHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportBotUserAgentChatHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportBotUserAgentChatHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportCagReactionsAndPolls", {
                get: $util.oneOfGetter($oneOfFields = ["supportCagReactionsAndPolls"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportBizHostedMsg", {
                get: $util.oneOfGetter($oneOfFields = ["supportBizHostedMsg"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportRecentSyncChunkMessageCountTuning", {
                get: $util.oneOfGetter($oneOfFields = ["supportRecentSyncChunkMessageCountTuning"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportHostedGroupMsg", {
                get: $util.oneOfGetter($oneOfFields = ["supportHostedGroupMsg"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportFbidBotChatHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportFbidBotChatHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportAddOnHistorySyncMigration", {
                get: $util.oneOfGetter($oneOfFields = ["supportAddOnHistorySyncMigration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportMessageAssociation", {
                get: $util.oneOfGetter($oneOfFields = ["supportMessageAssociation"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportGroupHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportGroupHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_onDemandReady", {
                get: $util.oneOfGetter($oneOfFields = ["onDemandReady"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportGuestChat", {
                get: $util.oneOfGetter($oneOfFields = ["supportGuestChat"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_completeOnDemandReady", {
                get: $util.oneOfGetter($oneOfFields = ["completeOnDemandReady"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_thumbnailSyncDaysLimit", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailSyncDaysLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            HistorySyncConfig.create = function create(properties) {
                return new HistorySyncConfig(properties);
            };

            HistorySyncConfig.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.fullSyncDaysLimit != null && Object.hasOwnProperty.call(m, "fullSyncDaysLimit"))
                    w.uint32(8).uint32(m.fullSyncDaysLimit);
                if (m.fullSyncSizeMbLimit != null && Object.hasOwnProperty.call(m, "fullSyncSizeMbLimit"))
                    w.uint32(16).uint32(m.fullSyncSizeMbLimit);
                if (m.storageQuotaMb != null && Object.hasOwnProperty.call(m, "storageQuotaMb"))
                    w.uint32(24).uint32(m.storageQuotaMb);
                if (m.inlineInitialPayloadInE2EeMsg != null && Object.hasOwnProperty.call(m, "inlineInitialPayloadInE2EeMsg"))
                    w.uint32(32).bool(m.inlineInitialPayloadInE2EeMsg);
                if (m.recentSyncDaysLimit != null && Object.hasOwnProperty.call(m, "recentSyncDaysLimit"))
                    w.uint32(40).uint32(m.recentSyncDaysLimit);
                if (m.supportCallLogHistory != null && Object.hasOwnProperty.call(m, "supportCallLogHistory"))
                    w.uint32(48).bool(m.supportCallLogHistory);
                if (m.supportBotUserAgentChatHistory != null && Object.hasOwnProperty.call(m, "supportBotUserAgentChatHistory"))
                    w.uint32(56).bool(m.supportBotUserAgentChatHistory);
                if (m.supportCagReactionsAndPolls != null && Object.hasOwnProperty.call(m, "supportCagReactionsAndPolls"))
                    w.uint32(64).bool(m.supportCagReactionsAndPolls);
                if (m.supportBizHostedMsg != null && Object.hasOwnProperty.call(m, "supportBizHostedMsg"))
                    w.uint32(72).bool(m.supportBizHostedMsg);
                if (m.supportRecentSyncChunkMessageCountTuning != null && Object.hasOwnProperty.call(m, "supportRecentSyncChunkMessageCountTuning"))
                    w.uint32(80).bool(m.supportRecentSyncChunkMessageCountTuning);
                if (m.supportHostedGroupMsg != null && Object.hasOwnProperty.call(m, "supportHostedGroupMsg"))
                    w.uint32(88).bool(m.supportHostedGroupMsg);
                if (m.supportFbidBotChatHistory != null && Object.hasOwnProperty.call(m, "supportFbidBotChatHistory"))
                    w.uint32(96).bool(m.supportFbidBotChatHistory);
                if (m.supportAddOnHistorySyncMigration != null && Object.hasOwnProperty.call(m, "supportAddOnHistorySyncMigration"))
                    w.uint32(104).bool(m.supportAddOnHistorySyncMigration);
                if (m.supportMessageAssociation != null && Object.hasOwnProperty.call(m, "supportMessageAssociation"))
                    w.uint32(112).bool(m.supportMessageAssociation);
                if (m.supportGroupHistory != null && Object.hasOwnProperty.call(m, "supportGroupHistory"))
                    w.uint32(120).bool(m.supportGroupHistory);
                if (m.onDemandReady != null && Object.hasOwnProperty.call(m, "onDemandReady"))
                    w.uint32(128).bool(m.onDemandReady);
                if (m.supportGuestChat != null && Object.hasOwnProperty.call(m, "supportGuestChat"))
                    w.uint32(136).bool(m.supportGuestChat);
                if (m.completeOnDemandReady != null && Object.hasOwnProperty.call(m, "completeOnDemandReady"))
                    w.uint32(144).bool(m.completeOnDemandReady);
                if (m.thumbnailSyncDaysLimit != null && Object.hasOwnProperty.call(m, "thumbnailSyncDaysLimit"))
                    w.uint32(152).uint32(m.thumbnailSyncDaysLimit);
                return w;
            };

            HistorySyncConfig.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.DeviceProps.HistorySyncConfig();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.fullSyncDaysLimit = r.uint32();
                            break;
                        }
                    case 2: {
                            m.fullSyncSizeMbLimit = r.uint32();
                            break;
                        }
                    case 3: {
                            m.storageQuotaMb = r.uint32();
                            break;
                        }
                    case 4: {
                            m.inlineInitialPayloadInE2EeMsg = r.bool();
                            break;
                        }
                    case 5: {
                            m.recentSyncDaysLimit = r.uint32();
                            break;
                        }
                    case 6: {
                            m.supportCallLogHistory = r.bool();
                            break;
                        }
                    case 7: {
                            m.supportBotUserAgentChatHistory = r.bool();
                            break;
                        }
                    case 8: {
                            m.supportCagReactionsAndPolls = r.bool();
                            break;
                        }
                    case 9: {
                            m.supportBizHostedMsg = r.bool();
                            break;
                        }
                    case 10: {
                            m.supportRecentSyncChunkMessageCountTuning = r.bool();
                            break;
                        }
                    case 11: {
                            m.supportHostedGroupMsg = r.bool();
                            break;
                        }
                    case 12: {
                            m.supportFbidBotChatHistory = r.bool();
                            break;
                        }
                    case 13: {
                            m.supportAddOnHistorySyncMigration = r.bool();
                            break;
                        }
                    case 14: {
                            m.supportMessageAssociation = r.bool();
                            break;
                        }
                    case 15: {
                            m.supportGroupHistory = r.bool();
                            break;
                        }
                    case 16: {
                            m.onDemandReady = r.bool();
                            break;
                        }
                    case 17: {
                            m.supportGuestChat = r.bool();
                            break;
                        }
                    case 18: {
                            m.completeOnDemandReady = r.bool();
                            break;
                        }
                    case 19: {
                            m.thumbnailSyncDaysLimit = r.uint32();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            HistorySyncConfig.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.DeviceProps.HistorySyncConfig)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.DeviceProps.HistorySyncConfig: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.DeviceProps.HistorySyncConfig();
                if (d.fullSyncDaysLimit != null) {
                    m.fullSyncDaysLimit = d.fullSyncDaysLimit >>> 0;
                }
                if (d.fullSyncSizeMbLimit != null) {
                    m.fullSyncSizeMbLimit = d.fullSyncSizeMbLimit >>> 0;
                }
                if (d.storageQuotaMb != null) {
                    m.storageQuotaMb = d.storageQuotaMb >>> 0;
                }
                if (d.inlineInitialPayloadInE2EeMsg != null) {
                    m.inlineInitialPayloadInE2EeMsg = Boolean(d.inlineInitialPayloadInE2EeMsg);
                }
                if (d.recentSyncDaysLimit != null) {
                    m.recentSyncDaysLimit = d.recentSyncDaysLimit >>> 0;
                }
                if (d.supportCallLogHistory != null) {
                    m.supportCallLogHistory = Boolean(d.supportCallLogHistory);
                }
                if (d.supportBotUserAgentChatHistory != null) {
                    m.supportBotUserAgentChatHistory = Boolean(d.supportBotUserAgentChatHistory);
                }
                if (d.supportCagReactionsAndPolls != null) {
                    m.supportCagReactionsAndPolls = Boolean(d.supportCagReactionsAndPolls);
                }
                if (d.supportBizHostedMsg != null) {
                    m.supportBizHostedMsg = Boolean(d.supportBizHostedMsg);
                }
                if (d.supportRecentSyncChunkMessageCountTuning != null) {
                    m.supportRecentSyncChunkMessageCountTuning = Boolean(d.supportRecentSyncChunkMessageCountTuning);
                }
                if (d.supportHostedGroupMsg != null) {
                    m.supportHostedGroupMsg = Boolean(d.supportHostedGroupMsg);
                }
                if (d.supportFbidBotChatHistory != null) {
                    m.supportFbidBotChatHistory = Boolean(d.supportFbidBotChatHistory);
                }
                if (d.supportAddOnHistorySyncMigration != null) {
                    m.supportAddOnHistorySyncMigration = Boolean(d.supportAddOnHistorySyncMigration);
                }
                if (d.supportMessageAssociation != null) {
                    m.supportMessageAssociation = Boolean(d.supportMessageAssociation);
                }
                if (d.supportGroupHistory != null) {
                    m.supportGroupHistory = Boolean(d.supportGroupHistory);
                }
                if (d.onDemandReady != null) {
                    m.onDemandReady = Boolean(d.onDemandReady);
                }
                if (d.supportGuestChat != null) {
                    m.supportGuestChat = Boolean(d.supportGuestChat);
                }
                if (d.completeOnDemandReady != null) {
                    m.completeOnDemandReady = Boolean(d.completeOnDemandReady);
                }
                if (d.thumbnailSyncDaysLimit != null) {
                    m.thumbnailSyncDaysLimit = d.thumbnailSyncDaysLimit >>> 0;
                }
                return m;
            };

            HistorySyncConfig.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.fullSyncDaysLimit != null && Object.hasOwnProperty.call(m, "fullSyncDaysLimit")) {
                    d.fullSyncDaysLimit = m.fullSyncDaysLimit;
                    if (o.oneofs)
                        d._fullSyncDaysLimit = "fullSyncDaysLimit";
                }
                if (m.fullSyncSizeMbLimit != null && Object.hasOwnProperty.call(m, "fullSyncSizeMbLimit")) {
                    d.fullSyncSizeMbLimit = m.fullSyncSizeMbLimit;
                    if (o.oneofs)
                        d._fullSyncSizeMbLimit = "fullSyncSizeMbLimit";
                }
                if (m.storageQuotaMb != null && Object.hasOwnProperty.call(m, "storageQuotaMb")) {
                    d.storageQuotaMb = m.storageQuotaMb;
                    if (o.oneofs)
                        d._storageQuotaMb = "storageQuotaMb";
                }
                if (m.inlineInitialPayloadInE2EeMsg != null && Object.hasOwnProperty.call(m, "inlineInitialPayloadInE2EeMsg")) {
                    d.inlineInitialPayloadInE2EeMsg = m.inlineInitialPayloadInE2EeMsg;
                    if (o.oneofs)
                        d._inlineInitialPayloadInE2EeMsg = "inlineInitialPayloadInE2EeMsg";
                }
                if (m.recentSyncDaysLimit != null && Object.hasOwnProperty.call(m, "recentSyncDaysLimit")) {
                    d.recentSyncDaysLimit = m.recentSyncDaysLimit;
                    if (o.oneofs)
                        d._recentSyncDaysLimit = "recentSyncDaysLimit";
                }
                if (m.supportCallLogHistory != null && Object.hasOwnProperty.call(m, "supportCallLogHistory")) {
                    d.supportCallLogHistory = m.supportCallLogHistory;
                    if (o.oneofs)
                        d._supportCallLogHistory = "supportCallLogHistory";
                }
                if (m.supportBotUserAgentChatHistory != null && Object.hasOwnProperty.call(m, "supportBotUserAgentChatHistory")) {
                    d.supportBotUserAgentChatHistory = m.supportBotUserAgentChatHistory;
                    if (o.oneofs)
                        d._supportBotUserAgentChatHistory = "supportBotUserAgentChatHistory";
                }
                if (m.supportCagReactionsAndPolls != null && Object.hasOwnProperty.call(m, "supportCagReactionsAndPolls")) {
                    d.supportCagReactionsAndPolls = m.supportCagReactionsAndPolls;
                    if (o.oneofs)
                        d._supportCagReactionsAndPolls = "supportCagReactionsAndPolls";
                }
                if (m.supportBizHostedMsg != null && Object.hasOwnProperty.call(m, "supportBizHostedMsg")) {
                    d.supportBizHostedMsg = m.supportBizHostedMsg;
                    if (o.oneofs)
                        d._supportBizHostedMsg = "supportBizHostedMsg";
                }
                if (m.supportRecentSyncChunkMessageCountTuning != null && Object.hasOwnProperty.call(m, "supportRecentSyncChunkMessageCountTuning")) {
                    d.supportRecentSyncChunkMessageCountTuning = m.supportRecentSyncChunkMessageCountTuning;
                    if (o.oneofs)
                        d._supportRecentSyncChunkMessageCountTuning = "supportRecentSyncChunkMessageCountTuning";
                }
                if (m.supportHostedGroupMsg != null && Object.hasOwnProperty.call(m, "supportHostedGroupMsg")) {
                    d.supportHostedGroupMsg = m.supportHostedGroupMsg;
                    if (o.oneofs)
                        d._supportHostedGroupMsg = "supportHostedGroupMsg";
                }
                if (m.supportFbidBotChatHistory != null && Object.hasOwnProperty.call(m, "supportFbidBotChatHistory")) {
                    d.supportFbidBotChatHistory = m.supportFbidBotChatHistory;
                    if (o.oneofs)
                        d._supportFbidBotChatHistory = "supportFbidBotChatHistory";
                }
                if (m.supportAddOnHistorySyncMigration != null && Object.hasOwnProperty.call(m, "supportAddOnHistorySyncMigration")) {
                    d.supportAddOnHistorySyncMigration = m.supportAddOnHistorySyncMigration;
                    if (o.oneofs)
                        d._supportAddOnHistorySyncMigration = "supportAddOnHistorySyncMigration";
                }
                if (m.supportMessageAssociation != null && Object.hasOwnProperty.call(m, "supportMessageAssociation")) {
                    d.supportMessageAssociation = m.supportMessageAssociation;
                    if (o.oneofs)
                        d._supportMessageAssociation = "supportMessageAssociation";
                }
                if (m.supportGroupHistory != null && Object.hasOwnProperty.call(m, "supportGroupHistory")) {
                    d.supportGroupHistory = m.supportGroupHistory;
                    if (o.oneofs)
                        d._supportGroupHistory = "supportGroupHistory";
                }
                if (m.onDemandReady != null && Object.hasOwnProperty.call(m, "onDemandReady")) {
                    d.onDemandReady = m.onDemandReady;
                    if (o.oneofs)
                        d._onDemandReady = "onDemandReady";
                }
                if (m.supportGuestChat != null && Object.hasOwnProperty.call(m, "supportGuestChat")) {
                    d.supportGuestChat = m.supportGuestChat;
                    if (o.oneofs)
                        d._supportGuestChat = "supportGuestChat";
                }
                if (m.completeOnDemandReady != null && Object.hasOwnProperty.call(m, "completeOnDemandReady")) {
                    d.completeOnDemandReady = m.completeOnDemandReady;
                    if (o.oneofs)
                        d._completeOnDemandReady = "completeOnDemandReady";
                }
                if (m.thumbnailSyncDaysLimit != null && Object.hasOwnProperty.call(m, "thumbnailSyncDaysLimit")) {
                    d.thumbnailSyncDaysLimit = m.thumbnailSyncDaysLimit;
                    if (o.oneofs)
                        d._thumbnailSyncDaysLimit = "thumbnailSyncDaysLimit";
                }
                return d;
            };

            HistorySyncConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            HistorySyncConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.DeviceProps.HistorySyncConfig";
            };

            return HistorySyncConfig;
        })();

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

    proto.GlobalSettings = proto.GlobalSettings || createEmptyMessage("GlobalSettings")

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

        function HistorySync(p) {
            this.conversations = [];
            this.statusV3Messages = [];
            this.pushnames = [];
            this.recentStickers = [];
            this.pastParticipants = [];
            this.callLogRecords = [];
            this.phoneNumberToLidMappings = [];
            this.accounts = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        HistorySync.prototype.syncType = 0;
        HistorySync.prototype.conversations = $util.emptyArray;
        HistorySync.prototype.statusV3Messages = $util.emptyArray;
        HistorySync.prototype.chunkOrder = null;
        HistorySync.prototype.progress = null;
        HistorySync.prototype.pushnames = $util.emptyArray;
        HistorySync.prototype.globalSettings = null;
        HistorySync.prototype.threadIdUserSecret = null;
        HistorySync.prototype.threadDsTimeframeOffset = null;
        HistorySync.prototype.recentStickers = $util.emptyArray;
        HistorySync.prototype.pastParticipants = $util.emptyArray;
        HistorySync.prototype.callLogRecords = $util.emptyArray;
        HistorySync.prototype.aiWaitListState = null;
        HistorySync.prototype.phoneNumberToLidMappings = $util.emptyArray;
        HistorySync.prototype.companionMetaNonce = null;
        HistorySync.prototype.shareableChatIdentifierEncryptionKey = null;
        HistorySync.prototype.accounts = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HistorySync.prototype, "_chunkOrder", {
            get: $util.oneOfGetter($oneOfFields = ["chunkOrder"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HistorySync.prototype, "_progress", {
            get: $util.oneOfGetter($oneOfFields = ["progress"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HistorySync.prototype, "_globalSettings", {
            get: $util.oneOfGetter($oneOfFields = ["globalSettings"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HistorySync.prototype, "_threadIdUserSecret", {
            get: $util.oneOfGetter($oneOfFields = ["threadIdUserSecret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HistorySync.prototype, "_threadDsTimeframeOffset", {
            get: $util.oneOfGetter($oneOfFields = ["threadDsTimeframeOffset"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HistorySync.prototype, "_aiWaitListState", {
            get: $util.oneOfGetter($oneOfFields = ["aiWaitListState"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HistorySync.prototype, "_companionMetaNonce", {
            get: $util.oneOfGetter($oneOfFields = ["companionMetaNonce"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HistorySync.prototype, "_shareableChatIdentifierEncryptionKey", {
            get: $util.oneOfGetter($oneOfFields = ["shareableChatIdentifierEncryptionKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        HistorySync.create = function create(properties) {
            return new HistorySync(properties);
        };

        HistorySync.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.syncType != null && Object.hasOwnProperty.call(m, "syncType"))
                w.uint32(8).int32(m.syncType);
            if (m.conversations != null && m.conversations.length) {
                for (var i = 0; i < m.conversations.length; ++i)
                    $root.proto.Conversation.encode(m.conversations[i], w.uint32(18).fork(), q + 1).ldelim();
            }
            if (m.statusV3Messages != null && m.statusV3Messages.length) {
                for (var i = 0; i < m.statusV3Messages.length; ++i)
                    $root.proto.WebMessageInfo.encode(m.statusV3Messages[i], w.uint32(26).fork(), q + 1).ldelim();
            }
            if (m.chunkOrder != null && Object.hasOwnProperty.call(m, "chunkOrder"))
                w.uint32(40).uint32(m.chunkOrder);
            if (m.progress != null && Object.hasOwnProperty.call(m, "progress"))
                w.uint32(48).uint32(m.progress);
            if (m.pushnames != null && m.pushnames.length) {
                for (var i = 0; i < m.pushnames.length; ++i)
                    $root.proto.Pushname.encode(m.pushnames[i], w.uint32(58).fork(), q + 1).ldelim();
            }
            if (m.globalSettings != null && Object.hasOwnProperty.call(m, "globalSettings"))
                $root.proto.GlobalSettings.encode(m.globalSettings, w.uint32(66).fork(), q + 1).ldelim();
            if (m.threadIdUserSecret != null && Object.hasOwnProperty.call(m, "threadIdUserSecret"))
                w.uint32(74).bytes(m.threadIdUserSecret);
            if (m.threadDsTimeframeOffset != null && Object.hasOwnProperty.call(m, "threadDsTimeframeOffset"))
                w.uint32(80).uint32(m.threadDsTimeframeOffset);
            if (m.recentStickers != null && m.recentStickers.length) {
                for (var i = 0; i < m.recentStickers.length; ++i)
                    $root.proto.StickerMetadata.encode(m.recentStickers[i], w.uint32(90).fork(), q + 1).ldelim();
            }
            if (m.pastParticipants != null && m.pastParticipants.length) {
                for (var i = 0; i < m.pastParticipants.length; ++i)
                    $root.proto.PastParticipants.encode(m.pastParticipants[i], w.uint32(98).fork(), q + 1).ldelim();
            }
            if (m.callLogRecords != null && m.callLogRecords.length) {
                for (var i = 0; i < m.callLogRecords.length; ++i)
                    $root.proto.CallLogRecord.encode(m.callLogRecords[i], w.uint32(106).fork(), q + 1).ldelim();
            }
            if (m.aiWaitListState != null && Object.hasOwnProperty.call(m, "aiWaitListState"))
                w.uint32(112).int32(m.aiWaitListState);
            if (m.phoneNumberToLidMappings != null && m.phoneNumberToLidMappings.length) {
                for (var i = 0; i < m.phoneNumberToLidMappings.length; ++i)
                    $root.proto.PhoneNumberToLIDMapping.encode(m.phoneNumberToLidMappings[i], w.uint32(122).fork(), q + 1).ldelim();
            }
            if (m.companionMetaNonce != null && Object.hasOwnProperty.call(m, "companionMetaNonce"))
                w.uint32(130).string(m.companionMetaNonce);
            if (m.shareableChatIdentifierEncryptionKey != null && Object.hasOwnProperty.call(m, "shareableChatIdentifierEncryptionKey"))
                w.uint32(138).bytes(m.shareableChatIdentifierEncryptionKey);
            if (m.accounts != null && m.accounts.length) {
                for (var i = 0; i < m.accounts.length; ++i)
                    $root.proto.Account.encode(m.accounts[i], w.uint32(146).fork(), q + 1).ldelim();
            }
            return w;
        };

        HistorySync.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.HistorySync();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.syncType = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.conversations && m.conversations.length))
                            m.conversations = [];
                        m.conversations.push($root.proto.Conversation.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 3: {
                        if (!(m.statusV3Messages && m.statusV3Messages.length))
                            m.statusV3Messages = [];
                        m.statusV3Messages.push($root.proto.WebMessageInfo.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 5: {
                        m.chunkOrder = r.uint32();
                        break;
                    }
                case 6: {
                        m.progress = r.uint32();
                        break;
                    }
                case 7: {
                        if (!(m.pushnames && m.pushnames.length))
                            m.pushnames = [];
                        m.pushnames.push($root.proto.Pushname.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 8: {
                        m.globalSettings = $root.proto.GlobalSettings.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 9: {
                        m.threadIdUserSecret = r.bytes();
                        break;
                    }
                case 10: {
                        m.threadDsTimeframeOffset = r.uint32();
                        break;
                    }
                case 11: {
                        if (!(m.recentStickers && m.recentStickers.length))
                            m.recentStickers = [];
                        m.recentStickers.push($root.proto.StickerMetadata.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 12: {
                        if (!(m.pastParticipants && m.pastParticipants.length))
                            m.pastParticipants = [];
                        m.pastParticipants.push($root.proto.PastParticipants.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 13: {
                        if (!(m.callLogRecords && m.callLogRecords.length))
                            m.callLogRecords = [];
                        m.callLogRecords.push($root.proto.CallLogRecord.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 14: {
                        m.aiWaitListState = r.int32();
                        break;
                    }
                case 15: {
                        if (!(m.phoneNumberToLidMappings && m.phoneNumberToLidMappings.length))
                            m.phoneNumberToLidMappings = [];
                        m.phoneNumberToLidMappings.push($root.proto.PhoneNumberToLIDMapping.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 16: {
                        m.companionMetaNonce = r.string();
                        break;
                    }
                case 17: {
                        m.shareableChatIdentifierEncryptionKey = r.bytes();
                        break;
                    }
                case 18: {
                        if (!(m.accounts && m.accounts.length))
                            m.accounts = [];
                        m.accounts.push($root.proto.Account.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        HistorySync.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.HistorySync)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.HistorySync: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.HistorySync();
            switch (d.syncType) {
            default:
                if (typeof d.syncType === "number") {
                    m.syncType = d.syncType;
                    break;
                }
                break;
            case "INITIAL_BOOTSTRAP":
            case 0:
                m.syncType = 0;
                break;
            case "INITIAL_STATUS_V3":
            case 1:
                m.syncType = 1;
                break;
            case "FULL":
            case 2:
                m.syncType = 2;
                break;
            case "RECENT":
            case 3:
                m.syncType = 3;
                break;
            case "PUSH_NAME":
            case 4:
                m.syncType = 4;
                break;
            case "NON_BLOCKING_DATA":
            case 5:
                m.syncType = 5;
                break;
            case "ON_DEMAND":
            case 6:
                m.syncType = 6;
                break;
            }
            if (d.conversations) {
                if (!Array.isArray(d.conversations))
                    throw TypeError(".proto.HistorySync.conversations: array expected");
                m.conversations = [];
                for (var i = 0; i < d.conversations.length; ++i) {
                    if (!$util.isObject(d.conversations[i]))
                        throw TypeError(".proto.HistorySync.conversations: object expected");
                    m.conversations[i] = $root.proto.Conversation.fromObject(d.conversations[i], n + 1);
                }
            }
            if (d.statusV3Messages) {
                if (!Array.isArray(d.statusV3Messages))
                    throw TypeError(".proto.HistorySync.statusV3Messages: array expected");
                m.statusV3Messages = [];
                for (var i = 0; i < d.statusV3Messages.length; ++i) {
                    if (!$util.isObject(d.statusV3Messages[i]))
                        throw TypeError(".proto.HistorySync.statusV3Messages: object expected");
                    m.statusV3Messages[i] = $root.proto.WebMessageInfo.fromObject(d.statusV3Messages[i], n + 1);
                }
            }
            if (d.chunkOrder != null) {
                m.chunkOrder = d.chunkOrder >>> 0;
            }
            if (d.progress != null) {
                m.progress = d.progress >>> 0;
            }
            if (d.pushnames) {
                if (!Array.isArray(d.pushnames))
                    throw TypeError(".proto.HistorySync.pushnames: array expected");
                m.pushnames = [];
                for (var i = 0; i < d.pushnames.length; ++i) {
                    if (!$util.isObject(d.pushnames[i]))
                        throw TypeError(".proto.HistorySync.pushnames: object expected");
                    m.pushnames[i] = $root.proto.Pushname.fromObject(d.pushnames[i], n + 1);
                }
            }
            if (d.globalSettings != null) {
                if (!$util.isObject(d.globalSettings))
                    throw TypeError(".proto.HistorySync.globalSettings: object expected");
                m.globalSettings = $root.proto.GlobalSettings.fromObject(d.globalSettings, n + 1);
            }
            if (d.threadIdUserSecret != null) {
                if (typeof d.threadIdUserSecret === "string")
                    $util.base64.decode(d.threadIdUserSecret, m.threadIdUserSecret = $util.newBuffer($util.base64.length(d.threadIdUserSecret)), 0);
                else if (d.threadIdUserSecret.length >= 0)
                    m.threadIdUserSecret = d.threadIdUserSecret;
            }
            if (d.threadDsTimeframeOffset != null) {
                m.threadDsTimeframeOffset = d.threadDsTimeframeOffset >>> 0;
            }
            if (d.recentStickers) {
                if (!Array.isArray(d.recentStickers))
                    throw TypeError(".proto.HistorySync.recentStickers: array expected");
                m.recentStickers = [];
                for (var i = 0; i < d.recentStickers.length; ++i) {
                    if (!$util.isObject(d.recentStickers[i]))
                        throw TypeError(".proto.HistorySync.recentStickers: object expected");
                    m.recentStickers[i] = $root.proto.StickerMetadata.fromObject(d.recentStickers[i], n + 1);
                }
            }
            if (d.pastParticipants) {
                if (!Array.isArray(d.pastParticipants))
                    throw TypeError(".proto.HistorySync.pastParticipants: array expected");
                m.pastParticipants = [];
                for (var i = 0; i < d.pastParticipants.length; ++i) {
                    if (!$util.isObject(d.pastParticipants[i]))
                        throw TypeError(".proto.HistorySync.pastParticipants: object expected");
                    m.pastParticipants[i] = $root.proto.PastParticipants.fromObject(d.pastParticipants[i], n + 1);
                }
            }
            if (d.callLogRecords) {
                if (!Array.isArray(d.callLogRecords))
                    throw TypeError(".proto.HistorySync.callLogRecords: array expected");
                m.callLogRecords = [];
                for (var i = 0; i < d.callLogRecords.length; ++i) {
                    if (!$util.isObject(d.callLogRecords[i]))
                        throw TypeError(".proto.HistorySync.callLogRecords: object expected");
                    m.callLogRecords[i] = $root.proto.CallLogRecord.fromObject(d.callLogRecords[i], n + 1);
                }
            }
            switch (d.aiWaitListState) {
            default:
                if (typeof d.aiWaitListState === "number") {
                    m.aiWaitListState = d.aiWaitListState;
                    break;
                }
                break;
            case "IN_WAITLIST":
            case 0:
                m.aiWaitListState = 0;
                break;
            case "AI_AVAILABLE":
            case 1:
                m.aiWaitListState = 1;
                break;
            }
            if (d.phoneNumberToLidMappings) {
                if (!Array.isArray(d.phoneNumberToLidMappings))
                    throw TypeError(".proto.HistorySync.phoneNumberToLidMappings: array expected");
                m.phoneNumberToLidMappings = [];
                for (var i = 0; i < d.phoneNumberToLidMappings.length; ++i) {
                    if (!$util.isObject(d.phoneNumberToLidMappings[i]))
                        throw TypeError(".proto.HistorySync.phoneNumberToLidMappings: object expected");
                    m.phoneNumberToLidMappings[i] = $root.proto.PhoneNumberToLIDMapping.fromObject(d.phoneNumberToLidMappings[i], n + 1);
                }
            }
            if (d.companionMetaNonce != null) {
                m.companionMetaNonce = String(d.companionMetaNonce);
            }
            if (d.shareableChatIdentifierEncryptionKey != null) {
                if (typeof d.shareableChatIdentifierEncryptionKey === "string")
                    $util.base64.decode(d.shareableChatIdentifierEncryptionKey, m.shareableChatIdentifierEncryptionKey = $util.newBuffer($util.base64.length(d.shareableChatIdentifierEncryptionKey)), 0);
                else if (d.shareableChatIdentifierEncryptionKey.length >= 0)
                    m.shareableChatIdentifierEncryptionKey = d.shareableChatIdentifierEncryptionKey;
            }
            if (d.accounts) {
                if (!Array.isArray(d.accounts))
                    throw TypeError(".proto.HistorySync.accounts: array expected");
                m.accounts = [];
                for (var i = 0; i < d.accounts.length; ++i) {
                    if (!$util.isObject(d.accounts[i]))
                        throw TypeError(".proto.HistorySync.accounts: object expected");
                    m.accounts[i] = $root.proto.Account.fromObject(d.accounts[i], n + 1);
                }
            }
            return m;
        };

        HistorySync.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.conversations = [];
                d.statusV3Messages = [];
                d.pushnames = [];
                d.recentStickers = [];
                d.pastParticipants = [];
                d.callLogRecords = [];
                d.phoneNumberToLidMappings = [];
                d.accounts = [];
            }
            if (o.defaults) {
                d.syncType = o.enums === String ? "INITIAL_BOOTSTRAP" : 0;
            }
            if (m.syncType != null && Object.hasOwnProperty.call(m, "syncType")) {
                d.syncType = o.enums === String ? $root.proto.HistorySync.HistorySyncType[m.syncType] === undefined ? m.syncType : $root.proto.HistorySync.HistorySyncType[m.syncType] : m.syncType;
            }
            if (m.conversations && m.conversations.length) {
                d.conversations = [];
                for (var j = 0; j < m.conversations.length; ++j) {
                    d.conversations[j] = $root.proto.Conversation.toObject(m.conversations[j], o, q + 1);
                }
            }
            if (m.statusV3Messages && m.statusV3Messages.length) {
                d.statusV3Messages = [];
                for (var j = 0; j < m.statusV3Messages.length; ++j) {
                    d.statusV3Messages[j] = $root.proto.WebMessageInfo.toObject(m.statusV3Messages[j], o, q + 1);
                }
            }
            if (m.chunkOrder != null && Object.hasOwnProperty.call(m, "chunkOrder")) {
                d.chunkOrder = m.chunkOrder;
                if (o.oneofs)
                    d._chunkOrder = "chunkOrder";
            }
            if (m.progress != null && Object.hasOwnProperty.call(m, "progress")) {
                d.progress = m.progress;
                if (o.oneofs)
                    d._progress = "progress";
            }
            if (m.pushnames && m.pushnames.length) {
                d.pushnames = [];
                for (var j = 0; j < m.pushnames.length; ++j) {
                    d.pushnames[j] = $root.proto.Pushname.toObject(m.pushnames[j], o, q + 1);
                }
            }
            if (m.globalSettings != null && Object.hasOwnProperty.call(m, "globalSettings")) {
                d.globalSettings = $root.proto.GlobalSettings.toObject(m.globalSettings, o, q + 1);
                if (o.oneofs)
                    d._globalSettings = "globalSettings";
            }
            if (m.threadIdUserSecret != null && Object.hasOwnProperty.call(m, "threadIdUserSecret")) {
                d.threadIdUserSecret = o.bytes === String ? $util.base64.encode(m.threadIdUserSecret, 0, m.threadIdUserSecret.length) : o.bytes === Array ? Array.prototype.slice.call(m.threadIdUserSecret) : m.threadIdUserSecret;
                if (o.oneofs)
                    d._threadIdUserSecret = "threadIdUserSecret";
            }
            if (m.threadDsTimeframeOffset != null && Object.hasOwnProperty.call(m, "threadDsTimeframeOffset")) {
                d.threadDsTimeframeOffset = m.threadDsTimeframeOffset;
                if (o.oneofs)
                    d._threadDsTimeframeOffset = "threadDsTimeframeOffset";
            }
            if (m.recentStickers && m.recentStickers.length) {
                d.recentStickers = [];
                for (var j = 0; j < m.recentStickers.length; ++j) {
                    d.recentStickers[j] = $root.proto.StickerMetadata.toObject(m.recentStickers[j], o, q + 1);
                }
            }
            if (m.pastParticipants && m.pastParticipants.length) {
                d.pastParticipants = [];
                for (var j = 0; j < m.pastParticipants.length; ++j) {
                    d.pastParticipants[j] = $root.proto.PastParticipants.toObject(m.pastParticipants[j], o, q + 1);
                }
            }
            if (m.callLogRecords && m.callLogRecords.length) {
                d.callLogRecords = [];
                for (var j = 0; j < m.callLogRecords.length; ++j) {
                    d.callLogRecords[j] = $root.proto.CallLogRecord.toObject(m.callLogRecords[j], o, q + 1);
                }
            }
            if (m.aiWaitListState != null && Object.hasOwnProperty.call(m, "aiWaitListState")) {
                d.aiWaitListState = o.enums === String ? $root.proto.HistorySync.BotAIWaitListState[m.aiWaitListState] === undefined ? m.aiWaitListState : $root.proto.HistorySync.BotAIWaitListState[m.aiWaitListState] : m.aiWaitListState;
                if (o.oneofs)
                    d._aiWaitListState = "aiWaitListState";
            }
            if (m.phoneNumberToLidMappings && m.phoneNumberToLidMappings.length) {
                d.phoneNumberToLidMappings = [];
                for (var j = 0; j < m.phoneNumberToLidMappings.length; ++j) {
                    d.phoneNumberToLidMappings[j] = $root.proto.PhoneNumberToLIDMapping.toObject(m.phoneNumberToLidMappings[j], o, q + 1);
                }
            }
            if (m.companionMetaNonce != null && Object.hasOwnProperty.call(m, "companionMetaNonce")) {
                d.companionMetaNonce = m.companionMetaNonce;
                if (o.oneofs)
                    d._companionMetaNonce = "companionMetaNonce";
            }
            if (m.shareableChatIdentifierEncryptionKey != null && Object.hasOwnProperty.call(m, "shareableChatIdentifierEncryptionKey")) {
                d.shareableChatIdentifierEncryptionKey = o.bytes === String ? $util.base64.encode(m.shareableChatIdentifierEncryptionKey, 0, m.shareableChatIdentifierEncryptionKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.shareableChatIdentifierEncryptionKey) : m.shareableChatIdentifierEncryptionKey;
                if (o.oneofs)
                    d._shareableChatIdentifierEncryptionKey = "shareableChatIdentifierEncryptionKey";
            }
            if (m.accounts && m.accounts.length) {
                d.accounts = [];
                for (var j = 0; j < m.accounts.length; ++j) {
                    d.accounts[j] = $root.proto.Account.toObject(m.accounts[j], o, q + 1);
                }
            }
            return d;
        };

        HistorySync.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        HistorySync.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.HistorySync";
        };

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

        Message.FullHistorySyncOnDemandRequestMetadata = (function() {

            function FullHistorySyncOnDemandRequestMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            FullHistorySyncOnDemandRequestMetadata.create = function create(properties) {
                return new FullHistorySyncOnDemandRequestMetadata(properties);
            };

            FullHistorySyncOnDemandRequestMetadata.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            FullHistorySyncOnDemandRequestMetadata.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.FullHistorySyncOnDemandRequestMetadata();
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

            FullHistorySyncOnDemandRequestMetadata.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.FullHistorySyncOnDemandRequestMetadata)
                    return d;
                return new $root.proto.Message.FullHistorySyncOnDemandRequestMetadata();
            };

            FullHistorySyncOnDemandRequestMetadata.toObject = function toObject() {
                return {};
            };

            FullHistorySyncOnDemandRequestMetadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            FullHistorySyncOnDemandRequestMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.FullHistorySyncOnDemandRequestMetadata";
            };

            return FullHistorySyncOnDemandRequestMetadata;
        })();

        Message.HistorySyncMessageAccessStatus = (function() {

            function HistorySyncMessageAccessStatus(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HistorySyncMessageAccessStatus.create = function create(properties) {
                return new HistorySyncMessageAccessStatus(properties);
            };

            HistorySyncMessageAccessStatus.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            HistorySyncMessageAccessStatus.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.HistorySyncMessageAccessStatus();
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

            HistorySyncMessageAccessStatus.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.HistorySyncMessageAccessStatus)
                    return d;
                return new $root.proto.Message.HistorySyncMessageAccessStatus();
            };

            HistorySyncMessageAccessStatus.toObject = function toObject() {
                return {};
            };

            HistorySyncMessageAccessStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            HistorySyncMessageAccessStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.HistorySyncMessageAccessStatus";
            };

            return HistorySyncMessageAccessStatus;
        })();

        Message.HistorySyncNotification = (function() {

            function HistorySyncNotification(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HistorySyncNotification.prototype.fileSha256 = null;
            HistorySyncNotification.prototype.fileLength = null;
            HistorySyncNotification.prototype.mediaKey = null;
            HistorySyncNotification.prototype.fileEncSha256 = null;
            HistorySyncNotification.prototype.directPath = null;
            HistorySyncNotification.prototype.syncType = null;
            HistorySyncNotification.prototype.chunkOrder = null;
            HistorySyncNotification.prototype.originalMessageId = null;
            HistorySyncNotification.prototype.progress = null;
            HistorySyncNotification.prototype.oldestMsgInChunkTimestampSec = null;
            HistorySyncNotification.prototype.initialHistBootstrapInlinePayload = null;
            HistorySyncNotification.prototype.peerDataRequestSessionId = null;
            HistorySyncNotification.prototype.fullHistorySyncOnDemandRequestMetadata = null;
            HistorySyncNotification.prototype.encHandle = null;
            HistorySyncNotification.prototype.messageAccessStatus = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_fileSha256", {
                get: $util.oneOfGetter($oneOfFields = ["fileSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_fileLength", {
                get: $util.oneOfGetter($oneOfFields = ["fileLength"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_mediaKey", {
                get: $util.oneOfGetter($oneOfFields = ["mediaKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_fileEncSha256", {
                get: $util.oneOfGetter($oneOfFields = ["fileEncSha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_directPath", {
                get: $util.oneOfGetter($oneOfFields = ["directPath"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_syncType", {
                get: $util.oneOfGetter($oneOfFields = ["syncType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_chunkOrder", {
                get: $util.oneOfGetter($oneOfFields = ["chunkOrder"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_originalMessageId", {
                get: $util.oneOfGetter($oneOfFields = ["originalMessageId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_progress", {
                get: $util.oneOfGetter($oneOfFields = ["progress"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_oldestMsgInChunkTimestampSec", {
                get: $util.oneOfGetter($oneOfFields = ["oldestMsgInChunkTimestampSec"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_initialHistBootstrapInlinePayload", {
                get: $util.oneOfGetter($oneOfFields = ["initialHistBootstrapInlinePayload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_peerDataRequestSessionId", {
                get: $util.oneOfGetter($oneOfFields = ["peerDataRequestSessionId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_fullHistorySyncOnDemandRequestMetadata", {
                get: $util.oneOfGetter($oneOfFields = ["fullHistorySyncOnDemandRequestMetadata"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_encHandle", {
                get: $util.oneOfGetter($oneOfFields = ["encHandle"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncNotification.prototype, "_messageAccessStatus", {
                get: $util.oneOfGetter($oneOfFields = ["messageAccessStatus"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            HistorySyncNotification.create = function create(properties) {
                return new HistorySyncNotification(properties);
            };

            HistorySyncNotification.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.fileSha256 != null && Object.hasOwnProperty.call(m, "fileSha256"))
                    w.uint32(10).bytes(m.fileSha256);
                if (m.fileLength != null && Object.hasOwnProperty.call(m, "fileLength"))
                    w.uint32(16).uint64(m.fileLength);
                if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey"))
                    w.uint32(26).bytes(m.mediaKey);
                if (m.fileEncSha256 != null && Object.hasOwnProperty.call(m, "fileEncSha256"))
                    w.uint32(34).bytes(m.fileEncSha256);
                if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath"))
                    w.uint32(42).string(m.directPath);
                if (m.syncType != null && Object.hasOwnProperty.call(m, "syncType"))
                    $root.proto.Message.HistorySyncType.encode(m.syncType, w.uint32(50).fork(), q + 1).ldelim();
                if (m.chunkOrder != null && Object.hasOwnProperty.call(m, "chunkOrder"))
                    w.uint32(56).uint32(m.chunkOrder);
                if (m.originalMessageId != null && Object.hasOwnProperty.call(m, "originalMessageId"))
                    w.uint32(66).string(m.originalMessageId);
                if (m.progress != null && Object.hasOwnProperty.call(m, "progress"))
                    w.uint32(72).uint32(m.progress);
                if (m.oldestMsgInChunkTimestampSec != null && Object.hasOwnProperty.call(m, "oldestMsgInChunkTimestampSec"))
                    w.uint32(80).int64(m.oldestMsgInChunkTimestampSec);
                if (m.initialHistBootstrapInlinePayload != null && Object.hasOwnProperty.call(m, "initialHistBootstrapInlinePayload"))
                    w.uint32(90).bytes(m.initialHistBootstrapInlinePayload);
                if (m.peerDataRequestSessionId != null && Object.hasOwnProperty.call(m, "peerDataRequestSessionId"))
                    w.uint32(98).string(m.peerDataRequestSessionId);
                if (m.fullHistorySyncOnDemandRequestMetadata != null && Object.hasOwnProperty.call(m, "fullHistorySyncOnDemandRequestMetadata"))
                    $root.proto.Message.FullHistorySyncOnDemandRequestMetadata.encode(m.fullHistorySyncOnDemandRequestMetadata, w.uint32(106).fork(), q + 1).ldelim();
                if (m.encHandle != null && Object.hasOwnProperty.call(m, "encHandle"))
                    w.uint32(114).string(m.encHandle);
                if (m.messageAccessStatus != null && Object.hasOwnProperty.call(m, "messageAccessStatus"))
                    $root.proto.Message.HistorySyncMessageAccessStatus.encode(m.messageAccessStatus, w.uint32(122).fork(), q + 1).ldelim();
                return w;
            };

            HistorySyncNotification.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.HistorySyncNotification();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.fileSha256 = r.bytes();
                            break;
                        }
                    case 2: {
                            m.fileLength = r.uint64();
                            break;
                        }
                    case 3: {
                            m.mediaKey = r.bytes();
                            break;
                        }
                    case 4: {
                            m.fileEncSha256 = r.bytes();
                            break;
                        }
                    case 5: {
                            m.directPath = r.string();
                            break;
                        }
                    case 6: {
                            m.syncType = $root.proto.Message.HistorySyncType.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 7: {
                            m.chunkOrder = r.uint32();
                            break;
                        }
                    case 8: {
                            m.originalMessageId = r.string();
                            break;
                        }
                    case 9: {
                            m.progress = r.uint32();
                            break;
                        }
                    case 10: {
                            m.oldestMsgInChunkTimestampSec = r.int64();
                            break;
                        }
                    case 11: {
                            m.initialHistBootstrapInlinePayload = r.bytes();
                            break;
                        }
                    case 12: {
                            m.peerDataRequestSessionId = r.string();
                            break;
                        }
                    case 13: {
                            m.fullHistorySyncOnDemandRequestMetadata = $root.proto.Message.FullHistorySyncOnDemandRequestMetadata.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 14: {
                            m.encHandle = r.string();
                            break;
                        }
                    case 15: {
                            m.messageAccessStatus = $root.proto.Message.HistorySyncMessageAccessStatus.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            HistorySyncNotification.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.HistorySyncNotification)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.Message.HistorySyncNotification: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.Message.HistorySyncNotification();
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
                if (d.syncType != null) {
                    if (!$util.isObject(d.syncType))
                        throw TypeError(".proto.Message.HistorySyncNotification.syncType: object expected");
                    m.syncType = $root.proto.Message.HistorySyncType.fromObject(d.syncType, n + 1);
                }
                if (d.chunkOrder != null) {
                    m.chunkOrder = d.chunkOrder >>> 0;
                }
                if (d.originalMessageId != null) {
                    m.originalMessageId = String(d.originalMessageId);
                }
                if (d.progress != null) {
                    m.progress = d.progress >>> 0;
                }
                if (d.oldestMsgInChunkTimestampSec != null) {
                    if ($util.Long)
                        m.oldestMsgInChunkTimestampSec = $util.Long.fromValue(d.oldestMsgInChunkTimestampSec, false);
                    else if (typeof d.oldestMsgInChunkTimestampSec === "string")
                        m.oldestMsgInChunkTimestampSec = parseInt(d.oldestMsgInChunkTimestampSec, 10);
                    else if (typeof d.oldestMsgInChunkTimestampSec === "number")
                        m.oldestMsgInChunkTimestampSec = d.oldestMsgInChunkTimestampSec;
                    else if (typeof d.oldestMsgInChunkTimestampSec === "object")
                        m.oldestMsgInChunkTimestampSec = new $util.LongBits(d.oldestMsgInChunkTimestampSec.low >>> 0, d.oldestMsgInChunkTimestampSec.high >>> 0).toNumber();
                }
                if (d.initialHistBootstrapInlinePayload != null) {
                    if (typeof d.initialHistBootstrapInlinePayload === "string")
                        $util.base64.decode(d.initialHistBootstrapInlinePayload, m.initialHistBootstrapInlinePayload = $util.newBuffer($util.base64.length(d.initialHistBootstrapInlinePayload)), 0);
                    else if (d.initialHistBootstrapInlinePayload.length >= 0)
                        m.initialHistBootstrapInlinePayload = d.initialHistBootstrapInlinePayload;
                }
                if (d.peerDataRequestSessionId != null) {
                    m.peerDataRequestSessionId = String(d.peerDataRequestSessionId);
                }
                if (d.fullHistorySyncOnDemandRequestMetadata != null) {
                    if (!$util.isObject(d.fullHistorySyncOnDemandRequestMetadata))
                        throw TypeError(".proto.Message.HistorySyncNotification.fullHistorySyncOnDemandRequestMetadata: object expected");
                    m.fullHistorySyncOnDemandRequestMetadata = $root.proto.Message.FullHistorySyncOnDemandRequestMetadata.fromObject(d.fullHistorySyncOnDemandRequestMetadata, n + 1);
                }
                if (d.encHandle != null) {
                    m.encHandle = String(d.encHandle);
                }
                if (d.messageAccessStatus != null) {
                    if (!$util.isObject(d.messageAccessStatus))
                        throw TypeError(".proto.Message.HistorySyncNotification.messageAccessStatus: object expected");
                    m.messageAccessStatus = $root.proto.Message.HistorySyncMessageAccessStatus.fromObject(d.messageAccessStatus, n + 1);
                }
                return m;
            };

            HistorySyncNotification.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
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
                if (m.syncType != null && Object.hasOwnProperty.call(m, "syncType")) {
                    d.syncType = $root.proto.Message.HistorySyncType.toObject(m.syncType, o, q + 1);
                    if (o.oneofs)
                        d._syncType = "syncType";
                }
                if (m.chunkOrder != null && Object.hasOwnProperty.call(m, "chunkOrder")) {
                    d.chunkOrder = m.chunkOrder;
                    if (o.oneofs)
                        d._chunkOrder = "chunkOrder";
                }
                if (m.originalMessageId != null && Object.hasOwnProperty.call(m, "originalMessageId")) {
                    d.originalMessageId = m.originalMessageId;
                    if (o.oneofs)
                        d._originalMessageId = "originalMessageId";
                }
                if (m.progress != null && Object.hasOwnProperty.call(m, "progress")) {
                    d.progress = m.progress;
                    if (o.oneofs)
                        d._progress = "progress";
                }
                if (m.oldestMsgInChunkTimestampSec != null && Object.hasOwnProperty.call(m, "oldestMsgInChunkTimestampSec")) {
                    if (typeof BigInt !== "undefined" && o.longs === BigInt)
                        d.oldestMsgInChunkTimestampSec = typeof m.oldestMsgInChunkTimestampSec === "number" ? BigInt(m.oldestMsgInChunkTimestampSec) : $util.Long.fromBits(m.oldestMsgInChunkTimestampSec.low >>> 0, m.oldestMsgInChunkTimestampSec.high >>> 0, false).toBigInt();
                    else if (typeof m.oldestMsgInChunkTimestampSec === "number")
                        d.oldestMsgInChunkTimestampSec = o.longs === String ? String(m.oldestMsgInChunkTimestampSec) : m.oldestMsgInChunkTimestampSec;
                    else
                        d.oldestMsgInChunkTimestampSec = o.longs === String ? longToString(m.oldestMsgInChunkTimestampSec) : o.longs === Number ? longToNumber(m.oldestMsgInChunkTimestampSec) : m.oldestMsgInChunkTimestampSec;
                    if (o.oneofs)
                        d._oldestMsgInChunkTimestampSec = "oldestMsgInChunkTimestampSec";
                }
                if (m.initialHistBootstrapInlinePayload != null && Object.hasOwnProperty.call(m, "initialHistBootstrapInlinePayload")) {
                    d.initialHistBootstrapInlinePayload = o.bytes === String ? $util.base64.encode(m.initialHistBootstrapInlinePayload, 0, m.initialHistBootstrapInlinePayload.length) : o.bytes === Array ? Array.prototype.slice.call(m.initialHistBootstrapInlinePayload) : m.initialHistBootstrapInlinePayload;
                    if (o.oneofs)
                        d._initialHistBootstrapInlinePayload = "initialHistBootstrapInlinePayload";
                }
                if (m.peerDataRequestSessionId != null && Object.hasOwnProperty.call(m, "peerDataRequestSessionId")) {
                    d.peerDataRequestSessionId = m.peerDataRequestSessionId;
                    if (o.oneofs)
                        d._peerDataRequestSessionId = "peerDataRequestSessionId";
                }
                if (m.fullHistorySyncOnDemandRequestMetadata != null && Object.hasOwnProperty.call(m, "fullHistorySyncOnDemandRequestMetadata")) {
                    d.fullHistorySyncOnDemandRequestMetadata = $root.proto.Message.FullHistorySyncOnDemandRequestMetadata.toObject(m.fullHistorySyncOnDemandRequestMetadata, o, q + 1);
                    if (o.oneofs)
                        d._fullHistorySyncOnDemandRequestMetadata = "fullHistorySyncOnDemandRequestMetadata";
                }
                if (m.encHandle != null && Object.hasOwnProperty.call(m, "encHandle")) {
                    d.encHandle = m.encHandle;
                    if (o.oneofs)
                        d._encHandle = "encHandle";
                }
                if (m.messageAccessStatus != null && Object.hasOwnProperty.call(m, "messageAccessStatus")) {
                    d.messageAccessStatus = $root.proto.Message.HistorySyncMessageAccessStatus.toObject(m.messageAccessStatus, o, q + 1);
                    if (o.oneofs)
                        d._messageAccessStatus = "messageAccessStatus";
                }
                return d;
            };

            HistorySyncNotification.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            HistorySyncNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.HistorySyncNotification";
            };

            return HistorySyncNotification;
        })();

        Message.HistorySyncType = (function() {

            function HistorySyncType(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HistorySyncType.create = function create(properties) {
                return new HistorySyncType(properties);
            };

            HistorySyncType.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            HistorySyncType.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.HistorySyncType();
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

            HistorySyncType.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.HistorySyncType)
                    return d;
                return new $root.proto.Message.HistorySyncType();
            };

            HistorySyncType.toObject = function toObject() {
                return {};
            };

            HistorySyncType.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            HistorySyncType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.HistorySyncType";
            };

            return HistorySyncType;
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

    proto.PastParticipants = proto.PastParticipants || createEmptyMessage("PastParticipants")

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

    proto.PhoneNumberToLIDMapping = proto.PhoneNumberToLIDMapping || createEmptyMessage("PhoneNumberToLIDMapping")

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

    proto.Pushname = proto.Pushname || createEmptyMessage("Pushname")

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

    proto.StickerMetadata = proto.StickerMetadata || createEmptyMessage("StickerMetadata")

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

    proto.WebMessageInfo = proto.WebMessageInfo || createEmptyMessage("WebMessageInfo")

    return proto;
})();

export { $root as default };
