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

    proto.AIRichResponseMessage = proto.AIRichResponseMessage || createEmptyMessage("AIRichResponseMessage")

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

    proto.ActionLink = proto.ActionLink || createEmptyMessage("ActionLink")

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

    proto.BotMessageSharingInfo = proto.BotMessageSharingInfo || createEmptyMessage("BotMessageSharingInfo")

    proto.BotMetadata = proto.BotMetadata || createEmptyMessage("BotMetadata")

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

    proto.Citation = proto.Citation || createEmptyMessage("Citation")

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

    proto.CommentMetadata = proto.CommentMetadata || createEmptyMessage("CommentMetadata")

    proto.ContextInfo = (function() {

        function ContextInfo(p) {
            this.mentionedJid = [];
            this.groupMentions = [];
            this.statusAttributions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ContextInfo.prototype.stanzaId = null;
        ContextInfo.prototype.participant = null;
        ContextInfo.prototype.quotedMessage = null;
        ContextInfo.prototype.remoteJid = null;
        ContextInfo.prototype.mentionedJid = $util.emptyArray;
        ContextInfo.prototype.conversionSource = null;
        ContextInfo.prototype.conversionData = null;
        ContextInfo.prototype.conversionDelaySeconds = null;
        ContextInfo.prototype.forwardingScore = null;
        ContextInfo.prototype.isForwarded = null;
        ContextInfo.prototype.quotedAd = null;
        ContextInfo.prototype.placeholderKey = null;
        ContextInfo.prototype.expiration = null;
        ContextInfo.prototype.ephemeralSettingTimestamp = null;
        ContextInfo.prototype.ephemeralSharedSecret = null;
        ContextInfo.prototype.externalAdReply = null;
        ContextInfo.prototype.entryPointConversionSource = null;
        ContextInfo.prototype.entryPointConversionApp = null;
        ContextInfo.prototype.entryPointConversionDelaySeconds = null;
        ContextInfo.prototype.disappearingMode = null;
        ContextInfo.prototype.actionLink = null;
        ContextInfo.prototype.groupSubject = null;
        ContextInfo.prototype.parentGroupJid = null;
        ContextInfo.prototype.trustBannerType = null;
        ContextInfo.prototype.trustBannerAction = null;
        ContextInfo.prototype.isSampled = null;
        ContextInfo.prototype.groupMentions = $util.emptyArray;
        ContextInfo.prototype.utm = null;
        ContextInfo.prototype.forwardedNewsletterMessageInfo = null;
        ContextInfo.prototype.businessMessageForwardInfo = null;
        ContextInfo.prototype.smbClientCampaignId = null;
        ContextInfo.prototype.smbServerCampaignId = null;
        ContextInfo.prototype.dataSharingContext = null;
        ContextInfo.prototype.alwaysShowAdAttribution = null;
        ContextInfo.prototype.featureEligibilities = null;
        ContextInfo.prototype.entryPointConversionExternalSource = null;
        ContextInfo.prototype.entryPointConversionExternalMedium = null;
        ContextInfo.prototype.ctwaSignals = null;
        ContextInfo.prototype.ctwaPayload = null;
        ContextInfo.prototype.forwardedAiBotMessageInfo = null;
        ContextInfo.prototype.statusAttributionType = null;
        ContextInfo.prototype.urlTrackingMap = null;
        ContextInfo.prototype.pairedMediaType = null;
        ContextInfo.prototype.rankingVersion = null;
        ContextInfo.prototype.memberLabel = null;
        ContextInfo.prototype.isQuestion = null;
        ContextInfo.prototype.statusSourceType = null;
        ContextInfo.prototype.statusAttributions = $util.emptyArray;
        ContextInfo.prototype.isGroupStatus = null;
        ContextInfo.prototype.forwardOrigin = null;
        ContextInfo.prototype.questionReplyQuotedMessage = null;
        ContextInfo.prototype.statusAudienceMetadata = null;
        ContextInfo.prototype.nonJidMentions = null;
        ContextInfo.prototype.quotedType = null;
        ContextInfo.prototype.botMessageSharingInfo = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_stanzaId", {
            get: $util.oneOfGetter($oneOfFields = ["stanzaId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_participant", {
            get: $util.oneOfGetter($oneOfFields = ["participant"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_quotedMessage", {
            get: $util.oneOfGetter($oneOfFields = ["quotedMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_remoteJid", {
            get: $util.oneOfGetter($oneOfFields = ["remoteJid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_conversionSource", {
            get: $util.oneOfGetter($oneOfFields = ["conversionSource"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_conversionData", {
            get: $util.oneOfGetter($oneOfFields = ["conversionData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_conversionDelaySeconds", {
            get: $util.oneOfGetter($oneOfFields = ["conversionDelaySeconds"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_forwardingScore", {
            get: $util.oneOfGetter($oneOfFields = ["forwardingScore"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_isForwarded", {
            get: $util.oneOfGetter($oneOfFields = ["isForwarded"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_quotedAd", {
            get: $util.oneOfGetter($oneOfFields = ["quotedAd"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_placeholderKey", {
            get: $util.oneOfGetter($oneOfFields = ["placeholderKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_expiration", {
            get: $util.oneOfGetter($oneOfFields = ["expiration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_ephemeralSettingTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["ephemeralSettingTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_ephemeralSharedSecret", {
            get: $util.oneOfGetter($oneOfFields = ["ephemeralSharedSecret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_externalAdReply", {
            get: $util.oneOfGetter($oneOfFields = ["externalAdReply"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_entryPointConversionSource", {
            get: $util.oneOfGetter($oneOfFields = ["entryPointConversionSource"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_entryPointConversionApp", {
            get: $util.oneOfGetter($oneOfFields = ["entryPointConversionApp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_entryPointConversionDelaySeconds", {
            get: $util.oneOfGetter($oneOfFields = ["entryPointConversionDelaySeconds"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_disappearingMode", {
            get: $util.oneOfGetter($oneOfFields = ["disappearingMode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_actionLink", {
            get: $util.oneOfGetter($oneOfFields = ["actionLink"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_groupSubject", {
            get: $util.oneOfGetter($oneOfFields = ["groupSubject"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_parentGroupJid", {
            get: $util.oneOfGetter($oneOfFields = ["parentGroupJid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_trustBannerType", {
            get: $util.oneOfGetter($oneOfFields = ["trustBannerType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_trustBannerAction", {
            get: $util.oneOfGetter($oneOfFields = ["trustBannerAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_isSampled", {
            get: $util.oneOfGetter($oneOfFields = ["isSampled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_utm", {
            get: $util.oneOfGetter($oneOfFields = ["utm"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_forwardedNewsletterMessageInfo", {
            get: $util.oneOfGetter($oneOfFields = ["forwardedNewsletterMessageInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_businessMessageForwardInfo", {
            get: $util.oneOfGetter($oneOfFields = ["businessMessageForwardInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_smbClientCampaignId", {
            get: $util.oneOfGetter($oneOfFields = ["smbClientCampaignId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_smbServerCampaignId", {
            get: $util.oneOfGetter($oneOfFields = ["smbServerCampaignId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_dataSharingContext", {
            get: $util.oneOfGetter($oneOfFields = ["dataSharingContext"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_alwaysShowAdAttribution", {
            get: $util.oneOfGetter($oneOfFields = ["alwaysShowAdAttribution"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_featureEligibilities", {
            get: $util.oneOfGetter($oneOfFields = ["featureEligibilities"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_entryPointConversionExternalSource", {
            get: $util.oneOfGetter($oneOfFields = ["entryPointConversionExternalSource"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_entryPointConversionExternalMedium", {
            get: $util.oneOfGetter($oneOfFields = ["entryPointConversionExternalMedium"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_ctwaSignals", {
            get: $util.oneOfGetter($oneOfFields = ["ctwaSignals"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_ctwaPayload", {
            get: $util.oneOfGetter($oneOfFields = ["ctwaPayload"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_forwardedAiBotMessageInfo", {
            get: $util.oneOfGetter($oneOfFields = ["forwardedAiBotMessageInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_statusAttributionType", {
            get: $util.oneOfGetter($oneOfFields = ["statusAttributionType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_urlTrackingMap", {
            get: $util.oneOfGetter($oneOfFields = ["urlTrackingMap"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_pairedMediaType", {
            get: $util.oneOfGetter($oneOfFields = ["pairedMediaType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_rankingVersion", {
            get: $util.oneOfGetter($oneOfFields = ["rankingVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_memberLabel", {
            get: $util.oneOfGetter($oneOfFields = ["memberLabel"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_isQuestion", {
            get: $util.oneOfGetter($oneOfFields = ["isQuestion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_statusSourceType", {
            get: $util.oneOfGetter($oneOfFields = ["statusSourceType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_isGroupStatus", {
            get: $util.oneOfGetter($oneOfFields = ["isGroupStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_forwardOrigin", {
            get: $util.oneOfGetter($oneOfFields = ["forwardOrigin"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_questionReplyQuotedMessage", {
            get: $util.oneOfGetter($oneOfFields = ["questionReplyQuotedMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_statusAudienceMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["statusAudienceMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_nonJidMentions", {
            get: $util.oneOfGetter($oneOfFields = ["nonJidMentions"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_quotedType", {
            get: $util.oneOfGetter($oneOfFields = ["quotedType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContextInfo.prototype, "_botMessageSharingInfo", {
            get: $util.oneOfGetter($oneOfFields = ["botMessageSharingInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ContextInfo.create = function create(properties) {
            return new ContextInfo(properties);
        };

        ContextInfo.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.stanzaId != null && Object.hasOwnProperty.call(m, "stanzaId"))
                w.uint32(10).string(m.stanzaId);
            if (m.participant != null && Object.hasOwnProperty.call(m, "participant"))
                w.uint32(18).string(m.participant);
            if (m.quotedMessage != null && Object.hasOwnProperty.call(m, "quotedMessage"))
                $root.proto.Message.encode(m.quotedMessage, w.uint32(26).fork(), q + 1).ldelim();
            if (m.remoteJid != null && Object.hasOwnProperty.call(m, "remoteJid"))
                w.uint32(34).string(m.remoteJid);
            if (m.mentionedJid != null && m.mentionedJid.length) {
                for (var i = 0; i < m.mentionedJid.length; ++i)
                    w.uint32(122).string(m.mentionedJid[i]);
            }
            if (m.conversionSource != null && Object.hasOwnProperty.call(m, "conversionSource"))
                w.uint32(146).string(m.conversionSource);
            if (m.conversionData != null && Object.hasOwnProperty.call(m, "conversionData"))
                w.uint32(154).bytes(m.conversionData);
            if (m.conversionDelaySeconds != null && Object.hasOwnProperty.call(m, "conversionDelaySeconds"))
                w.uint32(160).uint32(m.conversionDelaySeconds);
            if (m.forwardingScore != null && Object.hasOwnProperty.call(m, "forwardingScore"))
                w.uint32(168).uint32(m.forwardingScore);
            if (m.isForwarded != null && Object.hasOwnProperty.call(m, "isForwarded"))
                w.uint32(176).bool(m.isForwarded);
            if (m.quotedAd != null && Object.hasOwnProperty.call(m, "quotedAd"))
                $root.proto.ContextInfo.AdReplyInfo.encode(m.quotedAd, w.uint32(186).fork(), q + 1).ldelim();
            if (m.placeholderKey != null && Object.hasOwnProperty.call(m, "placeholderKey"))
                $root.proto.MessageKey.encode(m.placeholderKey, w.uint32(194).fork(), q + 1).ldelim();
            if (m.expiration != null && Object.hasOwnProperty.call(m, "expiration"))
                w.uint32(200).uint32(m.expiration);
            if (m.ephemeralSettingTimestamp != null && Object.hasOwnProperty.call(m, "ephemeralSettingTimestamp"))
                w.uint32(208).int64(m.ephemeralSettingTimestamp);
            if (m.ephemeralSharedSecret != null && Object.hasOwnProperty.call(m, "ephemeralSharedSecret"))
                w.uint32(218).bytes(m.ephemeralSharedSecret);
            if (m.externalAdReply != null && Object.hasOwnProperty.call(m, "externalAdReply"))
                $root.proto.ContextInfo.ExternalAdReplyInfo.encode(m.externalAdReply, w.uint32(226).fork(), q + 1).ldelim();
            if (m.entryPointConversionSource != null && Object.hasOwnProperty.call(m, "entryPointConversionSource"))
                w.uint32(234).string(m.entryPointConversionSource);
            if (m.entryPointConversionApp != null && Object.hasOwnProperty.call(m, "entryPointConversionApp"))
                w.uint32(242).string(m.entryPointConversionApp);
            if (m.entryPointConversionDelaySeconds != null && Object.hasOwnProperty.call(m, "entryPointConversionDelaySeconds"))
                w.uint32(248).uint32(m.entryPointConversionDelaySeconds);
            if (m.disappearingMode != null && Object.hasOwnProperty.call(m, "disappearingMode"))
                $root.proto.DisappearingMode.encode(m.disappearingMode, w.uint32(258).fork(), q + 1).ldelim();
            if (m.actionLink != null && Object.hasOwnProperty.call(m, "actionLink"))
                $root.proto.ActionLink.encode(m.actionLink, w.uint32(266).fork(), q + 1).ldelim();
            if (m.groupSubject != null && Object.hasOwnProperty.call(m, "groupSubject"))
                w.uint32(274).string(m.groupSubject);
            if (m.parentGroupJid != null && Object.hasOwnProperty.call(m, "parentGroupJid"))
                w.uint32(282).string(m.parentGroupJid);
            if (m.trustBannerType != null && Object.hasOwnProperty.call(m, "trustBannerType"))
                w.uint32(298).string(m.trustBannerType);
            if (m.trustBannerAction != null && Object.hasOwnProperty.call(m, "trustBannerAction"))
                w.uint32(304).uint32(m.trustBannerAction);
            if (m.isSampled != null && Object.hasOwnProperty.call(m, "isSampled"))
                w.uint32(312).bool(m.isSampled);
            if (m.groupMentions != null && m.groupMentions.length) {
                for (var i = 0; i < m.groupMentions.length; ++i)
                    $root.proto.GroupMention.encode(m.groupMentions[i], w.uint32(322).fork(), q + 1).ldelim();
            }
            if (m.utm != null && Object.hasOwnProperty.call(m, "utm"))
                $root.proto.ContextInfo.UTMInfo.encode(m.utm, w.uint32(330).fork(), q + 1).ldelim();
            if (m.forwardedNewsletterMessageInfo != null && Object.hasOwnProperty.call(m, "forwardedNewsletterMessageInfo"))
                $root.proto.ContextInfo.ForwardedNewsletterMessageInfo.encode(m.forwardedNewsletterMessageInfo, w.uint32(346).fork(), q + 1).ldelim();
            if (m.businessMessageForwardInfo != null && Object.hasOwnProperty.call(m, "businessMessageForwardInfo"))
                $root.proto.ContextInfo.BusinessMessageForwardInfo.encode(m.businessMessageForwardInfo, w.uint32(354).fork(), q + 1).ldelim();
            if (m.smbClientCampaignId != null && Object.hasOwnProperty.call(m, "smbClientCampaignId"))
                w.uint32(362).string(m.smbClientCampaignId);
            if (m.smbServerCampaignId != null && Object.hasOwnProperty.call(m, "smbServerCampaignId"))
                w.uint32(370).string(m.smbServerCampaignId);
            if (m.dataSharingContext != null && Object.hasOwnProperty.call(m, "dataSharingContext"))
                $root.proto.ContextInfo.DataSharingContext.encode(m.dataSharingContext, w.uint32(378).fork(), q + 1).ldelim();
            if (m.alwaysShowAdAttribution != null && Object.hasOwnProperty.call(m, "alwaysShowAdAttribution"))
                w.uint32(384).bool(m.alwaysShowAdAttribution);
            if (m.featureEligibilities != null && Object.hasOwnProperty.call(m, "featureEligibilities"))
                $root.proto.ContextInfo.FeatureEligibilities.encode(m.featureEligibilities, w.uint32(394).fork(), q + 1).ldelim();
            if (m.entryPointConversionExternalSource != null && Object.hasOwnProperty.call(m, "entryPointConversionExternalSource"))
                w.uint32(402).string(m.entryPointConversionExternalSource);
            if (m.entryPointConversionExternalMedium != null && Object.hasOwnProperty.call(m, "entryPointConversionExternalMedium"))
                w.uint32(410).string(m.entryPointConversionExternalMedium);
            if (m.ctwaSignals != null && Object.hasOwnProperty.call(m, "ctwaSignals"))
                w.uint32(434).string(m.ctwaSignals);
            if (m.ctwaPayload != null && Object.hasOwnProperty.call(m, "ctwaPayload"))
                w.uint32(442).bytes(m.ctwaPayload);
            if (m.forwardedAiBotMessageInfo != null && Object.hasOwnProperty.call(m, "forwardedAiBotMessageInfo"))
                $root.proto.ForwardedAIBotMessageInfo.encode(m.forwardedAiBotMessageInfo, w.uint32(450).fork(), q + 1).ldelim();
            if (m.statusAttributionType != null && Object.hasOwnProperty.call(m, "statusAttributionType"))
                w.uint32(456).int32(m.statusAttributionType);
            if (m.urlTrackingMap != null && Object.hasOwnProperty.call(m, "urlTrackingMap"))
                $root.proto.UrlTrackingMap.encode(m.urlTrackingMap, w.uint32(466).fork(), q + 1).ldelim();
            if (m.pairedMediaType != null && Object.hasOwnProperty.call(m, "pairedMediaType"))
                w.uint32(472).int32(m.pairedMediaType);
            if (m.rankingVersion != null && Object.hasOwnProperty.call(m, "rankingVersion"))
                w.uint32(480).uint32(m.rankingVersion);
            if (m.memberLabel != null && Object.hasOwnProperty.call(m, "memberLabel"))
                $root.proto.MemberLabel.encode(m.memberLabel, w.uint32(498).fork(), q + 1).ldelim();
            if (m.isQuestion != null && Object.hasOwnProperty.call(m, "isQuestion"))
                w.uint32(504).bool(m.isQuestion);
            if (m.statusSourceType != null && Object.hasOwnProperty.call(m, "statusSourceType"))
                w.uint32(512).int32(m.statusSourceType);
            if (m.statusAttributions != null && m.statusAttributions.length) {
                for (var i = 0; i < m.statusAttributions.length; ++i)
                    $root.proto.StatusAttribution.encode(m.statusAttributions[i], w.uint32(522).fork(), q + 1).ldelim();
            }
            if (m.isGroupStatus != null && Object.hasOwnProperty.call(m, "isGroupStatus"))
                w.uint32(528).bool(m.isGroupStatus);
            if (m.forwardOrigin != null && Object.hasOwnProperty.call(m, "forwardOrigin"))
                w.uint32(536).int32(m.forwardOrigin);
            if (m.questionReplyQuotedMessage != null && Object.hasOwnProperty.call(m, "questionReplyQuotedMessage"))
                $root.proto.ContextInfo.QuestionReplyQuotedMessage.encode(m.questionReplyQuotedMessage, w.uint32(546).fork(), q + 1).ldelim();
            if (m.statusAudienceMetadata != null && Object.hasOwnProperty.call(m, "statusAudienceMetadata"))
                $root.proto.ContextInfo.StatusAudienceMetadata.encode(m.statusAudienceMetadata, w.uint32(554).fork(), q + 1).ldelim();
            if (m.nonJidMentions != null && Object.hasOwnProperty.call(m, "nonJidMentions"))
                w.uint32(560).uint32(m.nonJidMentions);
            if (m.quotedType != null && Object.hasOwnProperty.call(m, "quotedType"))
                w.uint32(568).int32(m.quotedType);
            if (m.botMessageSharingInfo != null && Object.hasOwnProperty.call(m, "botMessageSharingInfo"))
                $root.proto.BotMessageSharingInfo.encode(m.botMessageSharingInfo, w.uint32(578).fork(), q + 1).ldelim();
            return w;
        };

        ContextInfo.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ContextInfo();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.stanzaId = r.string();
                        break;
                    }
                case 2: {
                        m.participant = r.string();
                        break;
                    }
                case 3: {
                        m.quotedMessage = $root.proto.Message.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 4: {
                        m.remoteJid = r.string();
                        break;
                    }
                case 15: {
                        if (!(m.mentionedJid && m.mentionedJid.length))
                            m.mentionedJid = [];
                        m.mentionedJid.push(r.string());
                        break;
                    }
                case 18: {
                        m.conversionSource = r.string();
                        break;
                    }
                case 19: {
                        m.conversionData = r.bytes();
                        break;
                    }
                case 20: {
                        m.conversionDelaySeconds = r.uint32();
                        break;
                    }
                case 21: {
                        m.forwardingScore = r.uint32();
                        break;
                    }
                case 22: {
                        m.isForwarded = r.bool();
                        break;
                    }
                case 23: {
                        m.quotedAd = $root.proto.ContextInfo.AdReplyInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 24: {
                        m.placeholderKey = $root.proto.MessageKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 25: {
                        m.expiration = r.uint32();
                        break;
                    }
                case 26: {
                        m.ephemeralSettingTimestamp = r.int64();
                        break;
                    }
                case 27: {
                        m.ephemeralSharedSecret = r.bytes();
                        break;
                    }
                case 28: {
                        m.externalAdReply = $root.proto.ContextInfo.ExternalAdReplyInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 29: {
                        m.entryPointConversionSource = r.string();
                        break;
                    }
                case 30: {
                        m.entryPointConversionApp = r.string();
                        break;
                    }
                case 31: {
                        m.entryPointConversionDelaySeconds = r.uint32();
                        break;
                    }
                case 32: {
                        m.disappearingMode = $root.proto.DisappearingMode.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 33: {
                        m.actionLink = $root.proto.ActionLink.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 34: {
                        m.groupSubject = r.string();
                        break;
                    }
                case 35: {
                        m.parentGroupJid = r.string();
                        break;
                    }
                case 37: {
                        m.trustBannerType = r.string();
                        break;
                    }
                case 38: {
                        m.trustBannerAction = r.uint32();
                        break;
                    }
                case 39: {
                        m.isSampled = r.bool();
                        break;
                    }
                case 40: {
                        if (!(m.groupMentions && m.groupMentions.length))
                            m.groupMentions = [];
                        m.groupMentions.push($root.proto.GroupMention.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 41: {
                        m.utm = $root.proto.ContextInfo.UTMInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 43: {
                        m.forwardedNewsletterMessageInfo = $root.proto.ContextInfo.ForwardedNewsletterMessageInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 44: {
                        m.businessMessageForwardInfo = $root.proto.ContextInfo.BusinessMessageForwardInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 45: {
                        m.smbClientCampaignId = r.string();
                        break;
                    }
                case 46: {
                        m.smbServerCampaignId = r.string();
                        break;
                    }
                case 47: {
                        m.dataSharingContext = $root.proto.ContextInfo.DataSharingContext.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 48: {
                        m.alwaysShowAdAttribution = r.bool();
                        break;
                    }
                case 49: {
                        m.featureEligibilities = $root.proto.ContextInfo.FeatureEligibilities.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 50: {
                        m.entryPointConversionExternalSource = r.string();
                        break;
                    }
                case 51: {
                        m.entryPointConversionExternalMedium = r.string();
                        break;
                    }
                case 54: {
                        m.ctwaSignals = r.string();
                        break;
                    }
                case 55: {
                        m.ctwaPayload = r.bytes();
                        break;
                    }
                case 56: {
                        m.forwardedAiBotMessageInfo = $root.proto.ForwardedAIBotMessageInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 57: {
                        m.statusAttributionType = r.int32();
                        break;
                    }
                case 58: {
                        m.urlTrackingMap = $root.proto.UrlTrackingMap.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 59: {
                        m.pairedMediaType = r.int32();
                        break;
                    }
                case 60: {
                        m.rankingVersion = r.uint32();
                        break;
                    }
                case 62: {
                        m.memberLabel = $root.proto.MemberLabel.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 63: {
                        m.isQuestion = r.bool();
                        break;
                    }
                case 64: {
                        m.statusSourceType = r.int32();
                        break;
                    }
                case 65: {
                        if (!(m.statusAttributions && m.statusAttributions.length))
                            m.statusAttributions = [];
                        m.statusAttributions.push($root.proto.StatusAttribution.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 66: {
                        m.isGroupStatus = r.bool();
                        break;
                    }
                case 67: {
                        m.forwardOrigin = r.int32();
                        break;
                    }
                case 68: {
                        m.questionReplyQuotedMessage = $root.proto.ContextInfo.QuestionReplyQuotedMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 69: {
                        m.statusAudienceMetadata = $root.proto.ContextInfo.StatusAudienceMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 70: {
                        m.nonJidMentions = r.uint32();
                        break;
                    }
                case 71: {
                        m.quotedType = r.int32();
                        break;
                    }
                case 72: {
                        m.botMessageSharingInfo = $root.proto.BotMessageSharingInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ContextInfo.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.ContextInfo)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.ContextInfo: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.ContextInfo();
            if (d.stanzaId != null) {
                m.stanzaId = String(d.stanzaId);
            }
            if (d.participant != null) {
                m.participant = String(d.participant);
            }
            if (d.quotedMessage != null) {
                if (!$util.isObject(d.quotedMessage))
                    throw TypeError(".proto.ContextInfo.quotedMessage: object expected");
                m.quotedMessage = $root.proto.Message.fromObject(d.quotedMessage, n + 1);
            }
            if (d.remoteJid != null) {
                m.remoteJid = String(d.remoteJid);
            }
            if (d.mentionedJid) {
                if (!Array.isArray(d.mentionedJid))
                    throw TypeError(".proto.ContextInfo.mentionedJid: array expected");
                m.mentionedJid = [];
                for (var i = 0; i < d.mentionedJid.length; ++i) {
                    m.mentionedJid[i] = String(d.mentionedJid[i]);
                }
            }
            if (d.conversionSource != null) {
                m.conversionSource = String(d.conversionSource);
            }
            if (d.conversionData != null) {
                if (typeof d.conversionData === "string")
                    $util.base64.decode(d.conversionData, m.conversionData = $util.newBuffer($util.base64.length(d.conversionData)), 0);
                else if (d.conversionData.length >= 0)
                    m.conversionData = d.conversionData;
            }
            if (d.conversionDelaySeconds != null) {
                m.conversionDelaySeconds = d.conversionDelaySeconds >>> 0;
            }
            if (d.forwardingScore != null) {
                m.forwardingScore = d.forwardingScore >>> 0;
            }
            if (d.isForwarded != null) {
                m.isForwarded = Boolean(d.isForwarded);
            }
            if (d.quotedAd != null) {
                if (!$util.isObject(d.quotedAd))
                    throw TypeError(".proto.ContextInfo.quotedAd: object expected");
                m.quotedAd = $root.proto.ContextInfo.AdReplyInfo.fromObject(d.quotedAd, n + 1);
            }
            if (d.placeholderKey != null) {
                if (!$util.isObject(d.placeholderKey))
                    throw TypeError(".proto.ContextInfo.placeholderKey: object expected");
                m.placeholderKey = $root.proto.MessageKey.fromObject(d.placeholderKey, n + 1);
            }
            if (d.expiration != null) {
                m.expiration = d.expiration >>> 0;
            }
            if (d.ephemeralSettingTimestamp != null) {
                if ($util.Long)
                    m.ephemeralSettingTimestamp = $util.Long.fromValue(d.ephemeralSettingTimestamp, false);
                else if (typeof d.ephemeralSettingTimestamp === "string")
                    m.ephemeralSettingTimestamp = parseInt(d.ephemeralSettingTimestamp, 10);
                else if (typeof d.ephemeralSettingTimestamp === "number")
                    m.ephemeralSettingTimestamp = d.ephemeralSettingTimestamp;
                else if (typeof d.ephemeralSettingTimestamp === "object")
                    m.ephemeralSettingTimestamp = new $util.LongBits(d.ephemeralSettingTimestamp.low >>> 0, d.ephemeralSettingTimestamp.high >>> 0).toNumber();
            }
            if (d.ephemeralSharedSecret != null) {
                if (typeof d.ephemeralSharedSecret === "string")
                    $util.base64.decode(d.ephemeralSharedSecret, m.ephemeralSharedSecret = $util.newBuffer($util.base64.length(d.ephemeralSharedSecret)), 0);
                else if (d.ephemeralSharedSecret.length >= 0)
                    m.ephemeralSharedSecret = d.ephemeralSharedSecret;
            }
            if (d.externalAdReply != null) {
                if (!$util.isObject(d.externalAdReply))
                    throw TypeError(".proto.ContextInfo.externalAdReply: object expected");
                m.externalAdReply = $root.proto.ContextInfo.ExternalAdReplyInfo.fromObject(d.externalAdReply, n + 1);
            }
            if (d.entryPointConversionSource != null) {
                m.entryPointConversionSource = String(d.entryPointConversionSource);
            }
            if (d.entryPointConversionApp != null) {
                m.entryPointConversionApp = String(d.entryPointConversionApp);
            }
            if (d.entryPointConversionDelaySeconds != null) {
                m.entryPointConversionDelaySeconds = d.entryPointConversionDelaySeconds >>> 0;
            }
            if (d.disappearingMode != null) {
                if (!$util.isObject(d.disappearingMode))
                    throw TypeError(".proto.ContextInfo.disappearingMode: object expected");
                m.disappearingMode = $root.proto.DisappearingMode.fromObject(d.disappearingMode, n + 1);
            }
            if (d.actionLink != null) {
                if (!$util.isObject(d.actionLink))
                    throw TypeError(".proto.ContextInfo.actionLink: object expected");
                m.actionLink = $root.proto.ActionLink.fromObject(d.actionLink, n + 1);
            }
            if (d.groupSubject != null) {
                m.groupSubject = String(d.groupSubject);
            }
            if (d.parentGroupJid != null) {
                m.parentGroupJid = String(d.parentGroupJid);
            }
            if (d.trustBannerType != null) {
                m.trustBannerType = String(d.trustBannerType);
            }
            if (d.trustBannerAction != null) {
                m.trustBannerAction = d.trustBannerAction >>> 0;
            }
            if (d.isSampled != null) {
                m.isSampled = Boolean(d.isSampled);
            }
            if (d.groupMentions) {
                if (!Array.isArray(d.groupMentions))
                    throw TypeError(".proto.ContextInfo.groupMentions: array expected");
                m.groupMentions = [];
                for (var i = 0; i < d.groupMentions.length; ++i) {
                    if (!$util.isObject(d.groupMentions[i]))
                        throw TypeError(".proto.ContextInfo.groupMentions: object expected");
                    m.groupMentions[i] = $root.proto.GroupMention.fromObject(d.groupMentions[i], n + 1);
                }
            }
            if (d.utm != null) {
                if (!$util.isObject(d.utm))
                    throw TypeError(".proto.ContextInfo.utm: object expected");
                m.utm = $root.proto.ContextInfo.UTMInfo.fromObject(d.utm, n + 1);
            }
            if (d.forwardedNewsletterMessageInfo != null) {
                if (!$util.isObject(d.forwardedNewsletterMessageInfo))
                    throw TypeError(".proto.ContextInfo.forwardedNewsletterMessageInfo: object expected");
                m.forwardedNewsletterMessageInfo = $root.proto.ContextInfo.ForwardedNewsletterMessageInfo.fromObject(d.forwardedNewsletterMessageInfo, n + 1);
            }
            if (d.businessMessageForwardInfo != null) {
                if (!$util.isObject(d.businessMessageForwardInfo))
                    throw TypeError(".proto.ContextInfo.businessMessageForwardInfo: object expected");
                m.businessMessageForwardInfo = $root.proto.ContextInfo.BusinessMessageForwardInfo.fromObject(d.businessMessageForwardInfo, n + 1);
            }
            if (d.smbClientCampaignId != null) {
                m.smbClientCampaignId = String(d.smbClientCampaignId);
            }
            if (d.smbServerCampaignId != null) {
                m.smbServerCampaignId = String(d.smbServerCampaignId);
            }
            if (d.dataSharingContext != null) {
                if (!$util.isObject(d.dataSharingContext))
                    throw TypeError(".proto.ContextInfo.dataSharingContext: object expected");
                m.dataSharingContext = $root.proto.ContextInfo.DataSharingContext.fromObject(d.dataSharingContext, n + 1);
            }
            if (d.alwaysShowAdAttribution != null) {
                m.alwaysShowAdAttribution = Boolean(d.alwaysShowAdAttribution);
            }
            if (d.featureEligibilities != null) {
                if (!$util.isObject(d.featureEligibilities))
                    throw TypeError(".proto.ContextInfo.featureEligibilities: object expected");
                m.featureEligibilities = $root.proto.ContextInfo.FeatureEligibilities.fromObject(d.featureEligibilities, n + 1);
            }
            if (d.entryPointConversionExternalSource != null) {
                m.entryPointConversionExternalSource = String(d.entryPointConversionExternalSource);
            }
            if (d.entryPointConversionExternalMedium != null) {
                m.entryPointConversionExternalMedium = String(d.entryPointConversionExternalMedium);
            }
            if (d.ctwaSignals != null) {
                m.ctwaSignals = String(d.ctwaSignals);
            }
            if (d.ctwaPayload != null) {
                if (typeof d.ctwaPayload === "string")
                    $util.base64.decode(d.ctwaPayload, m.ctwaPayload = $util.newBuffer($util.base64.length(d.ctwaPayload)), 0);
                else if (d.ctwaPayload.length >= 0)
                    m.ctwaPayload = d.ctwaPayload;
            }
            if (d.forwardedAiBotMessageInfo != null) {
                if (!$util.isObject(d.forwardedAiBotMessageInfo))
                    throw TypeError(".proto.ContextInfo.forwardedAiBotMessageInfo: object expected");
                m.forwardedAiBotMessageInfo = $root.proto.ForwardedAIBotMessageInfo.fromObject(d.forwardedAiBotMessageInfo, n + 1);
            }
            switch (d.statusAttributionType) {
            default:
                if (typeof d.statusAttributionType === "number") {
                    m.statusAttributionType = d.statusAttributionType;
                    break;
                }
                break;
            case "NONE":
            case 0:
                m.statusAttributionType = 0;
                break;
            case "RESHARED_FROM_MENTION":
            case 1:
                m.statusAttributionType = 1;
                break;
            case "RESHARED_FROM_POST":
            case 2:
                m.statusAttributionType = 2;
                break;
            case "RESHARED_FROM_POST_MANY_TIMES":
            case 3:
                m.statusAttributionType = 3;
                break;
            case "FORWARDED_FROM_STATUS":
            case 4:
                m.statusAttributionType = 4;
                break;
            }
            if (d.urlTrackingMap != null) {
                if (!$util.isObject(d.urlTrackingMap))
                    throw TypeError(".proto.ContextInfo.urlTrackingMap: object expected");
                m.urlTrackingMap = $root.proto.UrlTrackingMap.fromObject(d.urlTrackingMap, n + 1);
            }
            switch (d.pairedMediaType) {
            default:
                if (typeof d.pairedMediaType === "number") {
                    m.pairedMediaType = d.pairedMediaType;
                    break;
                }
                break;
            case "NOT_PAIRED_MEDIA":
            case 0:
                m.pairedMediaType = 0;
                break;
            case "SD_VIDEO_PARENT":
            case 1:
                m.pairedMediaType = 1;
                break;
            case "HD_VIDEO_CHILD":
            case 2:
                m.pairedMediaType = 2;
                break;
            case "SD_IMAGE_PARENT":
            case 3:
                m.pairedMediaType = 3;
                break;
            case "HD_IMAGE_CHILD":
            case 4:
                m.pairedMediaType = 4;
                break;
            case "MOTION_PHOTO_PARENT":
            case 5:
                m.pairedMediaType = 5;
                break;
            case "MOTION_PHOTO_CHILD":
            case 6:
                m.pairedMediaType = 6;
                break;
            case "HEVC_VIDEO_PARENT":
            case 7:
                m.pairedMediaType = 7;
                break;
            case "HEVC_VIDEO_CHILD":
            case 8:
                m.pairedMediaType = 8;
                break;
            }
            if (d.rankingVersion != null) {
                m.rankingVersion = d.rankingVersion >>> 0;
            }
            if (d.memberLabel != null) {
                if (!$util.isObject(d.memberLabel))
                    throw TypeError(".proto.ContextInfo.memberLabel: object expected");
                m.memberLabel = $root.proto.MemberLabel.fromObject(d.memberLabel, n + 1);
            }
            if (d.isQuestion != null) {
                m.isQuestion = Boolean(d.isQuestion);
            }
            switch (d.statusSourceType) {
            default:
                if (typeof d.statusSourceType === "number") {
                    m.statusSourceType = d.statusSourceType;
                    break;
                }
                break;
            case "IMAGE":
            case 0:
                m.statusSourceType = 0;
                break;
            case "VIDEO":
            case 1:
                m.statusSourceType = 1;
                break;
            case "GIF":
            case 2:
                m.statusSourceType = 2;
                break;
            case "AUDIO":
            case 3:
                m.statusSourceType = 3;
                break;
            case "TEXT":
            case 4:
                m.statusSourceType = 4;
                break;
            case "MUSIC_STANDALONE":
            case 5:
                m.statusSourceType = 5;
                break;
            }
            if (d.statusAttributions) {
                if (!Array.isArray(d.statusAttributions))
                    throw TypeError(".proto.ContextInfo.statusAttributions: array expected");
                m.statusAttributions = [];
                for (var i = 0; i < d.statusAttributions.length; ++i) {
                    if (!$util.isObject(d.statusAttributions[i]))
                        throw TypeError(".proto.ContextInfo.statusAttributions: object expected");
                    m.statusAttributions[i] = $root.proto.StatusAttribution.fromObject(d.statusAttributions[i], n + 1);
                }
            }
            if (d.isGroupStatus != null) {
                m.isGroupStatus = Boolean(d.isGroupStatus);
            }
            switch (d.forwardOrigin) {
            default:
                if (typeof d.forwardOrigin === "number") {
                    m.forwardOrigin = d.forwardOrigin;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                m.forwardOrigin = 0;
                break;
            case "CHAT":
            case 1:
                m.forwardOrigin = 1;
                break;
            case "STATUS":
            case 2:
                m.forwardOrigin = 2;
                break;
            case "CHANNELS":
            case 3:
                m.forwardOrigin = 3;
                break;
            case "META_AI":
            case 4:
                m.forwardOrigin = 4;
                break;
            case "UGC":
            case 5:
                m.forwardOrigin = 5;
                break;
            }
            if (d.questionReplyQuotedMessage != null) {
                if (!$util.isObject(d.questionReplyQuotedMessage))
                    throw TypeError(".proto.ContextInfo.questionReplyQuotedMessage: object expected");
                m.questionReplyQuotedMessage = $root.proto.ContextInfo.QuestionReplyQuotedMessage.fromObject(d.questionReplyQuotedMessage, n + 1);
            }
            if (d.statusAudienceMetadata != null) {
                if (!$util.isObject(d.statusAudienceMetadata))
                    throw TypeError(".proto.ContextInfo.statusAudienceMetadata: object expected");
                m.statusAudienceMetadata = $root.proto.ContextInfo.StatusAudienceMetadata.fromObject(d.statusAudienceMetadata, n + 1);
            }
            if (d.nonJidMentions != null) {
                m.nonJidMentions = d.nonJidMentions >>> 0;
            }
            switch (d.quotedType) {
            default:
                if (typeof d.quotedType === "number") {
                    m.quotedType = d.quotedType;
                    break;
                }
                break;
            case "EXPLICIT":
            case 0:
                m.quotedType = 0;
                break;
            case "AUTO":
            case 1:
                m.quotedType = 1;
                break;
            }
            if (d.botMessageSharingInfo != null) {
                if (!$util.isObject(d.botMessageSharingInfo))
                    throw TypeError(".proto.ContextInfo.botMessageSharingInfo: object expected");
                m.botMessageSharingInfo = $root.proto.BotMessageSharingInfo.fromObject(d.botMessageSharingInfo, n + 1);
            }
            return m;
        };

        ContextInfo.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.mentionedJid = [];
                d.groupMentions = [];
                d.statusAttributions = [];
            }
            if (m.stanzaId != null && Object.hasOwnProperty.call(m, "stanzaId")) {
                d.stanzaId = m.stanzaId;
                if (o.oneofs)
                    d._stanzaId = "stanzaId";
            }
            if (m.participant != null && Object.hasOwnProperty.call(m, "participant")) {
                d.participant = m.participant;
                if (o.oneofs)
                    d._participant = "participant";
            }
            if (m.quotedMessage != null && Object.hasOwnProperty.call(m, "quotedMessage")) {
                d.quotedMessage = $root.proto.Message.toObject(m.quotedMessage, o, q + 1);
                if (o.oneofs)
                    d._quotedMessage = "quotedMessage";
            }
            if (m.remoteJid != null && Object.hasOwnProperty.call(m, "remoteJid")) {
                d.remoteJid = m.remoteJid;
                if (o.oneofs)
                    d._remoteJid = "remoteJid";
            }
            if (m.mentionedJid && m.mentionedJid.length) {
                d.mentionedJid = [];
                for (var j = 0; j < m.mentionedJid.length; ++j) {
                    d.mentionedJid[j] = m.mentionedJid[j];
                }
            }
            if (m.conversionSource != null && Object.hasOwnProperty.call(m, "conversionSource")) {
                d.conversionSource = m.conversionSource;
                if (o.oneofs)
                    d._conversionSource = "conversionSource";
            }
            if (m.conversionData != null && Object.hasOwnProperty.call(m, "conversionData")) {
                d.conversionData = o.bytes === String ? $util.base64.encode(m.conversionData, 0, m.conversionData.length) : o.bytes === Array ? Array.prototype.slice.call(m.conversionData) : m.conversionData;
                if (o.oneofs)
                    d._conversionData = "conversionData";
            }
            if (m.conversionDelaySeconds != null && Object.hasOwnProperty.call(m, "conversionDelaySeconds")) {
                d.conversionDelaySeconds = m.conversionDelaySeconds;
                if (o.oneofs)
                    d._conversionDelaySeconds = "conversionDelaySeconds";
            }
            if (m.forwardingScore != null && Object.hasOwnProperty.call(m, "forwardingScore")) {
                d.forwardingScore = m.forwardingScore;
                if (o.oneofs)
                    d._forwardingScore = "forwardingScore";
            }
            if (m.isForwarded != null && Object.hasOwnProperty.call(m, "isForwarded")) {
                d.isForwarded = m.isForwarded;
                if (o.oneofs)
                    d._isForwarded = "isForwarded";
            }
            if (m.quotedAd != null && Object.hasOwnProperty.call(m, "quotedAd")) {
                d.quotedAd = $root.proto.ContextInfo.AdReplyInfo.toObject(m.quotedAd, o, q + 1);
                if (o.oneofs)
                    d._quotedAd = "quotedAd";
            }
            if (m.placeholderKey != null && Object.hasOwnProperty.call(m, "placeholderKey")) {
                d.placeholderKey = $root.proto.MessageKey.toObject(m.placeholderKey, o, q + 1);
                if (o.oneofs)
                    d._placeholderKey = "placeholderKey";
            }
            if (m.expiration != null && Object.hasOwnProperty.call(m, "expiration")) {
                d.expiration = m.expiration;
                if (o.oneofs)
                    d._expiration = "expiration";
            }
            if (m.ephemeralSettingTimestamp != null && Object.hasOwnProperty.call(m, "ephemeralSettingTimestamp")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.ephemeralSettingTimestamp = typeof m.ephemeralSettingTimestamp === "number" ? BigInt(m.ephemeralSettingTimestamp) : $util.Long.fromBits(m.ephemeralSettingTimestamp.low >>> 0, m.ephemeralSettingTimestamp.high >>> 0, false).toBigInt();
                else if (typeof m.ephemeralSettingTimestamp === "number")
                    d.ephemeralSettingTimestamp = o.longs === String ? String(m.ephemeralSettingTimestamp) : m.ephemeralSettingTimestamp;
                else
                    d.ephemeralSettingTimestamp = o.longs === String ? longToString(m.ephemeralSettingTimestamp) : o.longs === Number ? longToNumber(m.ephemeralSettingTimestamp) : m.ephemeralSettingTimestamp;
                if (o.oneofs)
                    d._ephemeralSettingTimestamp = "ephemeralSettingTimestamp";
            }
            if (m.ephemeralSharedSecret != null && Object.hasOwnProperty.call(m, "ephemeralSharedSecret")) {
                d.ephemeralSharedSecret = o.bytes === String ? $util.base64.encode(m.ephemeralSharedSecret, 0, m.ephemeralSharedSecret.length) : o.bytes === Array ? Array.prototype.slice.call(m.ephemeralSharedSecret) : m.ephemeralSharedSecret;
                if (o.oneofs)
                    d._ephemeralSharedSecret = "ephemeralSharedSecret";
            }
            if (m.externalAdReply != null && Object.hasOwnProperty.call(m, "externalAdReply")) {
                d.externalAdReply = $root.proto.ContextInfo.ExternalAdReplyInfo.toObject(m.externalAdReply, o, q + 1);
                if (o.oneofs)
                    d._externalAdReply = "externalAdReply";
            }
            if (m.entryPointConversionSource != null && Object.hasOwnProperty.call(m, "entryPointConversionSource")) {
                d.entryPointConversionSource = m.entryPointConversionSource;
                if (o.oneofs)
                    d._entryPointConversionSource = "entryPointConversionSource";
            }
            if (m.entryPointConversionApp != null && Object.hasOwnProperty.call(m, "entryPointConversionApp")) {
                d.entryPointConversionApp = m.entryPointConversionApp;
                if (o.oneofs)
                    d._entryPointConversionApp = "entryPointConversionApp";
            }
            if (m.entryPointConversionDelaySeconds != null && Object.hasOwnProperty.call(m, "entryPointConversionDelaySeconds")) {
                d.entryPointConversionDelaySeconds = m.entryPointConversionDelaySeconds;
                if (o.oneofs)
                    d._entryPointConversionDelaySeconds = "entryPointConversionDelaySeconds";
            }
            if (m.disappearingMode != null && Object.hasOwnProperty.call(m, "disappearingMode")) {
                d.disappearingMode = $root.proto.DisappearingMode.toObject(m.disappearingMode, o, q + 1);
                if (o.oneofs)
                    d._disappearingMode = "disappearingMode";
            }
            if (m.actionLink != null && Object.hasOwnProperty.call(m, "actionLink")) {
                d.actionLink = $root.proto.ActionLink.toObject(m.actionLink, o, q + 1);
                if (o.oneofs)
                    d._actionLink = "actionLink";
            }
            if (m.groupSubject != null && Object.hasOwnProperty.call(m, "groupSubject")) {
                d.groupSubject = m.groupSubject;
                if (o.oneofs)
                    d._groupSubject = "groupSubject";
            }
            if (m.parentGroupJid != null && Object.hasOwnProperty.call(m, "parentGroupJid")) {
                d.parentGroupJid = m.parentGroupJid;
                if (o.oneofs)
                    d._parentGroupJid = "parentGroupJid";
            }
            if (m.trustBannerType != null && Object.hasOwnProperty.call(m, "trustBannerType")) {
                d.trustBannerType = m.trustBannerType;
                if (o.oneofs)
                    d._trustBannerType = "trustBannerType";
            }
            if (m.trustBannerAction != null && Object.hasOwnProperty.call(m, "trustBannerAction")) {
                d.trustBannerAction = m.trustBannerAction;
                if (o.oneofs)
                    d._trustBannerAction = "trustBannerAction";
            }
            if (m.isSampled != null && Object.hasOwnProperty.call(m, "isSampled")) {
                d.isSampled = m.isSampled;
                if (o.oneofs)
                    d._isSampled = "isSampled";
            }
            if (m.groupMentions && m.groupMentions.length) {
                d.groupMentions = [];
                for (var j = 0; j < m.groupMentions.length; ++j) {
                    d.groupMentions[j] = $root.proto.GroupMention.toObject(m.groupMentions[j], o, q + 1);
                }
            }
            if (m.utm != null && Object.hasOwnProperty.call(m, "utm")) {
                d.utm = $root.proto.ContextInfo.UTMInfo.toObject(m.utm, o, q + 1);
                if (o.oneofs)
                    d._utm = "utm";
            }
            if (m.forwardedNewsletterMessageInfo != null && Object.hasOwnProperty.call(m, "forwardedNewsletterMessageInfo")) {
                d.forwardedNewsletterMessageInfo = $root.proto.ContextInfo.ForwardedNewsletterMessageInfo.toObject(m.forwardedNewsletterMessageInfo, o, q + 1);
                if (o.oneofs)
                    d._forwardedNewsletterMessageInfo = "forwardedNewsletterMessageInfo";
            }
            if (m.businessMessageForwardInfo != null && Object.hasOwnProperty.call(m, "businessMessageForwardInfo")) {
                d.businessMessageForwardInfo = $root.proto.ContextInfo.BusinessMessageForwardInfo.toObject(m.businessMessageForwardInfo, o, q + 1);
                if (o.oneofs)
                    d._businessMessageForwardInfo = "businessMessageForwardInfo";
            }
            if (m.smbClientCampaignId != null && Object.hasOwnProperty.call(m, "smbClientCampaignId")) {
                d.smbClientCampaignId = m.smbClientCampaignId;
                if (o.oneofs)
                    d._smbClientCampaignId = "smbClientCampaignId";
            }
            if (m.smbServerCampaignId != null && Object.hasOwnProperty.call(m, "smbServerCampaignId")) {
                d.smbServerCampaignId = m.smbServerCampaignId;
                if (o.oneofs)
                    d._smbServerCampaignId = "smbServerCampaignId";
            }
            if (m.dataSharingContext != null && Object.hasOwnProperty.call(m, "dataSharingContext")) {
                d.dataSharingContext = $root.proto.ContextInfo.DataSharingContext.toObject(m.dataSharingContext, o, q + 1);
                if (o.oneofs)
                    d._dataSharingContext = "dataSharingContext";
            }
            if (m.alwaysShowAdAttribution != null && Object.hasOwnProperty.call(m, "alwaysShowAdAttribution")) {
                d.alwaysShowAdAttribution = m.alwaysShowAdAttribution;
                if (o.oneofs)
                    d._alwaysShowAdAttribution = "alwaysShowAdAttribution";
            }
            if (m.featureEligibilities != null && Object.hasOwnProperty.call(m, "featureEligibilities")) {
                d.featureEligibilities = $root.proto.ContextInfo.FeatureEligibilities.toObject(m.featureEligibilities, o, q + 1);
                if (o.oneofs)
                    d._featureEligibilities = "featureEligibilities";
            }
            if (m.entryPointConversionExternalSource != null && Object.hasOwnProperty.call(m, "entryPointConversionExternalSource")) {
                d.entryPointConversionExternalSource = m.entryPointConversionExternalSource;
                if (o.oneofs)
                    d._entryPointConversionExternalSource = "entryPointConversionExternalSource";
            }
            if (m.entryPointConversionExternalMedium != null && Object.hasOwnProperty.call(m, "entryPointConversionExternalMedium")) {
                d.entryPointConversionExternalMedium = m.entryPointConversionExternalMedium;
                if (o.oneofs)
                    d._entryPointConversionExternalMedium = "entryPointConversionExternalMedium";
            }
            if (m.ctwaSignals != null && Object.hasOwnProperty.call(m, "ctwaSignals")) {
                d.ctwaSignals = m.ctwaSignals;
                if (o.oneofs)
                    d._ctwaSignals = "ctwaSignals";
            }
            if (m.ctwaPayload != null && Object.hasOwnProperty.call(m, "ctwaPayload")) {
                d.ctwaPayload = o.bytes === String ? $util.base64.encode(m.ctwaPayload, 0, m.ctwaPayload.length) : o.bytes === Array ? Array.prototype.slice.call(m.ctwaPayload) : m.ctwaPayload;
                if (o.oneofs)
                    d._ctwaPayload = "ctwaPayload";
            }
            if (m.forwardedAiBotMessageInfo != null && Object.hasOwnProperty.call(m, "forwardedAiBotMessageInfo")) {
                d.forwardedAiBotMessageInfo = $root.proto.ForwardedAIBotMessageInfo.toObject(m.forwardedAiBotMessageInfo, o, q + 1);
                if (o.oneofs)
                    d._forwardedAiBotMessageInfo = "forwardedAiBotMessageInfo";
            }
            if (m.statusAttributionType != null && Object.hasOwnProperty.call(m, "statusAttributionType")) {
                d.statusAttributionType = o.enums === String ? $root.proto.ContextInfo.StatusAttributionType[m.statusAttributionType] === undefined ? m.statusAttributionType : $root.proto.ContextInfo.StatusAttributionType[m.statusAttributionType] : m.statusAttributionType;
                if (o.oneofs)
                    d._statusAttributionType = "statusAttributionType";
            }
            if (m.urlTrackingMap != null && Object.hasOwnProperty.call(m, "urlTrackingMap")) {
                d.urlTrackingMap = $root.proto.UrlTrackingMap.toObject(m.urlTrackingMap, o, q + 1);
                if (o.oneofs)
                    d._urlTrackingMap = "urlTrackingMap";
            }
            if (m.pairedMediaType != null && Object.hasOwnProperty.call(m, "pairedMediaType")) {
                d.pairedMediaType = o.enums === String ? $root.proto.ContextInfo.PairedMediaType[m.pairedMediaType] === undefined ? m.pairedMediaType : $root.proto.ContextInfo.PairedMediaType[m.pairedMediaType] : m.pairedMediaType;
                if (o.oneofs)
                    d._pairedMediaType = "pairedMediaType";
            }
            if (m.rankingVersion != null && Object.hasOwnProperty.call(m, "rankingVersion")) {
                d.rankingVersion = m.rankingVersion;
                if (o.oneofs)
                    d._rankingVersion = "rankingVersion";
            }
            if (m.memberLabel != null && Object.hasOwnProperty.call(m, "memberLabel")) {
                d.memberLabel = $root.proto.MemberLabel.toObject(m.memberLabel, o, q + 1);
                if (o.oneofs)
                    d._memberLabel = "memberLabel";
            }
            if (m.isQuestion != null && Object.hasOwnProperty.call(m, "isQuestion")) {
                d.isQuestion = m.isQuestion;
                if (o.oneofs)
                    d._isQuestion = "isQuestion";
            }
            if (m.statusSourceType != null && Object.hasOwnProperty.call(m, "statusSourceType")) {
                d.statusSourceType = o.enums === String ? $root.proto.ContextInfo.StatusSourceType[m.statusSourceType] === undefined ? m.statusSourceType : $root.proto.ContextInfo.StatusSourceType[m.statusSourceType] : m.statusSourceType;
                if (o.oneofs)
                    d._statusSourceType = "statusSourceType";
            }
            if (m.statusAttributions && m.statusAttributions.length) {
                d.statusAttributions = [];
                for (var j = 0; j < m.statusAttributions.length; ++j) {
                    d.statusAttributions[j] = $root.proto.StatusAttribution.toObject(m.statusAttributions[j], o, q + 1);
                }
            }
            if (m.isGroupStatus != null && Object.hasOwnProperty.call(m, "isGroupStatus")) {
                d.isGroupStatus = m.isGroupStatus;
                if (o.oneofs)
                    d._isGroupStatus = "isGroupStatus";
            }
            if (m.forwardOrigin != null && Object.hasOwnProperty.call(m, "forwardOrigin")) {
                d.forwardOrigin = o.enums === String ? $root.proto.ContextInfo.ForwardOrigin[m.forwardOrigin] === undefined ? m.forwardOrigin : $root.proto.ContextInfo.ForwardOrigin[m.forwardOrigin] : m.forwardOrigin;
                if (o.oneofs)
                    d._forwardOrigin = "forwardOrigin";
            }
            if (m.questionReplyQuotedMessage != null && Object.hasOwnProperty.call(m, "questionReplyQuotedMessage")) {
                d.questionReplyQuotedMessage = $root.proto.ContextInfo.QuestionReplyQuotedMessage.toObject(m.questionReplyQuotedMessage, o, q + 1);
                if (o.oneofs)
                    d._questionReplyQuotedMessage = "questionReplyQuotedMessage";
            }
            if (m.statusAudienceMetadata != null && Object.hasOwnProperty.call(m, "statusAudienceMetadata")) {
                d.statusAudienceMetadata = $root.proto.ContextInfo.StatusAudienceMetadata.toObject(m.statusAudienceMetadata, o, q + 1);
                if (o.oneofs)
                    d._statusAudienceMetadata = "statusAudienceMetadata";
            }
            if (m.nonJidMentions != null && Object.hasOwnProperty.call(m, "nonJidMentions")) {
                d.nonJidMentions = m.nonJidMentions;
                if (o.oneofs)
                    d._nonJidMentions = "nonJidMentions";
            }
            if (m.quotedType != null && Object.hasOwnProperty.call(m, "quotedType")) {
                d.quotedType = o.enums === String ? $root.proto.ContextInfo.QuotedType[m.quotedType] === undefined ? m.quotedType : $root.proto.ContextInfo.QuotedType[m.quotedType] : m.quotedType;
                if (o.oneofs)
                    d._quotedType = "quotedType";
            }
            if (m.botMessageSharingInfo != null && Object.hasOwnProperty.call(m, "botMessageSharingInfo")) {
                d.botMessageSharingInfo = $root.proto.BotMessageSharingInfo.toObject(m.botMessageSharingInfo, o, q + 1);
                if (o.oneofs)
                    d._botMessageSharingInfo = "botMessageSharingInfo";
            }
            return d;
        };

        ContextInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ContextInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ContextInfo";
        };

        ContextInfo.AdReplyInfo = (function() {

            function AdReplyInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AdReplyInfo.prototype.advertiserName = null;
            AdReplyInfo.prototype.mediaType = null;
            AdReplyInfo.prototype.jpegThumbnail = null;
            AdReplyInfo.prototype.caption = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AdReplyInfo.prototype, "_advertiserName", {
                get: $util.oneOfGetter($oneOfFields = ["advertiserName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AdReplyInfo.prototype, "_mediaType", {
                get: $util.oneOfGetter($oneOfFields = ["mediaType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AdReplyInfo.prototype, "_jpegThumbnail", {
                get: $util.oneOfGetter($oneOfFields = ["jpegThumbnail"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AdReplyInfo.prototype, "_caption", {
                get: $util.oneOfGetter($oneOfFields = ["caption"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AdReplyInfo.create = function create(properties) {
                return new AdReplyInfo(properties);
            };

            AdReplyInfo.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.advertiserName != null && Object.hasOwnProperty.call(m, "advertiserName"))
                    w.uint32(10).string(m.advertiserName);
                if (m.mediaType != null && Object.hasOwnProperty.call(m, "mediaType"))
                    w.uint32(16).int32(m.mediaType);
                if (m.jpegThumbnail != null && Object.hasOwnProperty.call(m, "jpegThumbnail"))
                    w.uint32(130).bytes(m.jpegThumbnail);
                if (m.caption != null && Object.hasOwnProperty.call(m, "caption"))
                    w.uint32(138).string(m.caption);
                return w;
            };

            AdReplyInfo.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ContextInfo.AdReplyInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.advertiserName = r.string();
                            break;
                        }
                    case 2: {
                            m.mediaType = r.int32();
                            break;
                        }
                    case 16: {
                            m.jpegThumbnail = r.bytes();
                            break;
                        }
                    case 17: {
                            m.caption = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AdReplyInfo.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ContextInfo.AdReplyInfo)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ContextInfo.AdReplyInfo: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ContextInfo.AdReplyInfo();
                if (d.advertiserName != null) {
                    m.advertiserName = String(d.advertiserName);
                }
                switch (d.mediaType) {
                default:
                    if (typeof d.mediaType === "number") {
                        m.mediaType = d.mediaType;
                        break;
                    }
                    break;
                case "NONE":
                case 0:
                    m.mediaType = 0;
                    break;
                case "IMAGE":
                case 1:
                    m.mediaType = 1;
                    break;
                case "VIDEO":
                case 2:
                    m.mediaType = 2;
                    break;
                }
                if (d.jpegThumbnail != null) {
                    if (typeof d.jpegThumbnail === "string")
                        $util.base64.decode(d.jpegThumbnail, m.jpegThumbnail = $util.newBuffer($util.base64.length(d.jpegThumbnail)), 0);
                    else if (d.jpegThumbnail.length >= 0)
                        m.jpegThumbnail = d.jpegThumbnail;
                }
                if (d.caption != null) {
                    m.caption = String(d.caption);
                }
                return m;
            };

            AdReplyInfo.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.advertiserName != null && Object.hasOwnProperty.call(m, "advertiserName")) {
                    d.advertiserName = m.advertiserName;
                    if (o.oneofs)
                        d._advertiserName = "advertiserName";
                }
                if (m.mediaType != null && Object.hasOwnProperty.call(m, "mediaType")) {
                    d.mediaType = o.enums === String ? $root.proto.ContextInfo.AdReplyInfo.MediaType[m.mediaType] === undefined ? m.mediaType : $root.proto.ContextInfo.AdReplyInfo.MediaType[m.mediaType] : m.mediaType;
                    if (o.oneofs)
                        d._mediaType = "mediaType";
                }
                if (m.jpegThumbnail != null && Object.hasOwnProperty.call(m, "jpegThumbnail")) {
                    d.jpegThumbnail = o.bytes === String ? $util.base64.encode(m.jpegThumbnail, 0, m.jpegThumbnail.length) : o.bytes === Array ? Array.prototype.slice.call(m.jpegThumbnail) : m.jpegThumbnail;
                    if (o.oneofs)
                        d._jpegThumbnail = "jpegThumbnail";
                }
                if (m.caption != null && Object.hasOwnProperty.call(m, "caption")) {
                    d.caption = m.caption;
                    if (o.oneofs)
                        d._caption = "caption";
                }
                return d;
            };

            AdReplyInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AdReplyInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ContextInfo.AdReplyInfo";
            };

            AdReplyInfo.MediaType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "IMAGE"] = 1;
                values[valuesById[2] = "VIDEO"] = 2;
                return values;
            })();

            return AdReplyInfo;
        })();

        ContextInfo.BusinessMessageForwardInfo = (function() {

            function BusinessMessageForwardInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BusinessMessageForwardInfo.prototype.businessOwnerJid = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BusinessMessageForwardInfo.prototype, "_businessOwnerJid", {
                get: $util.oneOfGetter($oneOfFields = ["businessOwnerJid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            BusinessMessageForwardInfo.create = function create(properties) {
                return new BusinessMessageForwardInfo(properties);
            };

            BusinessMessageForwardInfo.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.businessOwnerJid != null && Object.hasOwnProperty.call(m, "businessOwnerJid"))
                    w.uint32(10).string(m.businessOwnerJid);
                return w;
            };

            BusinessMessageForwardInfo.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ContextInfo.BusinessMessageForwardInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
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

            BusinessMessageForwardInfo.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ContextInfo.BusinessMessageForwardInfo)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ContextInfo.BusinessMessageForwardInfo: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ContextInfo.BusinessMessageForwardInfo();
                if (d.businessOwnerJid != null) {
                    m.businessOwnerJid = String(d.businessOwnerJid);
                }
                return m;
            };

            BusinessMessageForwardInfo.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.businessOwnerJid != null && Object.hasOwnProperty.call(m, "businessOwnerJid")) {
                    d.businessOwnerJid = m.businessOwnerJid;
                    if (o.oneofs)
                        d._businessOwnerJid = "businessOwnerJid";
                }
                return d;
            };

            BusinessMessageForwardInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            BusinessMessageForwardInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ContextInfo.BusinessMessageForwardInfo";
            };

            return BusinessMessageForwardInfo;
        })();

        ContextInfo.DataSharingContext = (function() {

            function DataSharingContext(p) {
                this.parameters = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DataSharingContext.prototype.showMmDisclosure = null;
            DataSharingContext.prototype.encryptedSignalTokenConsented = null;
            DataSharingContext.prototype.parameters = $util.emptyArray;
            DataSharingContext.prototype.dataSharingFlags = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DataSharingContext.prototype, "_showMmDisclosure", {
                get: $util.oneOfGetter($oneOfFields = ["showMmDisclosure"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DataSharingContext.prototype, "_encryptedSignalTokenConsented", {
                get: $util.oneOfGetter($oneOfFields = ["encryptedSignalTokenConsented"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DataSharingContext.prototype, "_dataSharingFlags", {
                get: $util.oneOfGetter($oneOfFields = ["dataSharingFlags"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            DataSharingContext.create = function create(properties) {
                return new DataSharingContext(properties);
            };

            DataSharingContext.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.showMmDisclosure != null && Object.hasOwnProperty.call(m, "showMmDisclosure"))
                    w.uint32(8).bool(m.showMmDisclosure);
                if (m.encryptedSignalTokenConsented != null && Object.hasOwnProperty.call(m, "encryptedSignalTokenConsented"))
                    w.uint32(18).string(m.encryptedSignalTokenConsented);
                if (m.parameters != null && m.parameters.length) {
                    for (var i = 0; i < m.parameters.length; ++i)
                        $root.proto.ContextInfo.DataSharingContext.Parameters.encode(m.parameters[i], w.uint32(26).fork(), q + 1).ldelim();
                }
                if (m.dataSharingFlags != null && Object.hasOwnProperty.call(m, "dataSharingFlags"))
                    w.uint32(32).int32(m.dataSharingFlags);
                return w;
            };

            DataSharingContext.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ContextInfo.DataSharingContext();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.showMmDisclosure = r.bool();
                            break;
                        }
                    case 2: {
                            m.encryptedSignalTokenConsented = r.string();
                            break;
                        }
                    case 3: {
                            if (!(m.parameters && m.parameters.length))
                                m.parameters = [];
                            m.parameters.push($root.proto.ContextInfo.DataSharingContext.Parameters.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    case 4: {
                            m.dataSharingFlags = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            DataSharingContext.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ContextInfo.DataSharingContext)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ContextInfo.DataSharingContext: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ContextInfo.DataSharingContext();
                if (d.showMmDisclosure != null) {
                    m.showMmDisclosure = Boolean(d.showMmDisclosure);
                }
                if (d.encryptedSignalTokenConsented != null) {
                    m.encryptedSignalTokenConsented = String(d.encryptedSignalTokenConsented);
                }
                if (d.parameters) {
                    if (!Array.isArray(d.parameters))
                        throw TypeError(".proto.ContextInfo.DataSharingContext.parameters: array expected");
                    m.parameters = [];
                    for (var i = 0; i < d.parameters.length; ++i) {
                        if (!$util.isObject(d.parameters[i]))
                            throw TypeError(".proto.ContextInfo.DataSharingContext.parameters: object expected");
                        m.parameters[i] = $root.proto.ContextInfo.DataSharingContext.Parameters.fromObject(d.parameters[i], n + 1);
                    }
                }
                if (d.dataSharingFlags != null) {
                    m.dataSharingFlags = d.dataSharingFlags | 0;
                }
                return m;
            };

            DataSharingContext.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (o.arrays || o.defaults) {
                    d.parameters = [];
                }
                if (m.showMmDisclosure != null && Object.hasOwnProperty.call(m, "showMmDisclosure")) {
                    d.showMmDisclosure = m.showMmDisclosure;
                    if (o.oneofs)
                        d._showMmDisclosure = "showMmDisclosure";
                }
                if (m.encryptedSignalTokenConsented != null && Object.hasOwnProperty.call(m, "encryptedSignalTokenConsented")) {
                    d.encryptedSignalTokenConsented = m.encryptedSignalTokenConsented;
                    if (o.oneofs)
                        d._encryptedSignalTokenConsented = "encryptedSignalTokenConsented";
                }
                if (m.parameters && m.parameters.length) {
                    d.parameters = [];
                    for (var j = 0; j < m.parameters.length; ++j) {
                        d.parameters[j] = $root.proto.ContextInfo.DataSharingContext.Parameters.toObject(m.parameters[j], o, q + 1);
                    }
                }
                if (m.dataSharingFlags != null && Object.hasOwnProperty.call(m, "dataSharingFlags")) {
                    d.dataSharingFlags = m.dataSharingFlags;
                    if (o.oneofs)
                        d._dataSharingFlags = "dataSharingFlags";
                }
                return d;
            };

            DataSharingContext.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DataSharingContext.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ContextInfo.DataSharingContext";
            };

            DataSharingContext.DataSharingFlags = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SHOW_MM_DISCLOSURE_ON_CLICK"] = 1;
                values[valuesById[2] = "SHOW_MM_DISCLOSURE_ON_READ"] = 2;
                return values;
            })();

            DataSharingContext.Parameters = (function() {

                function Parameters(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Parameters.prototype.key = null;
                Parameters.prototype.stringData = null;
                Parameters.prototype.intData = null;
                Parameters.prototype.floatData = null;
                Parameters.prototype.contents = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Parameters.prototype, "_key", {
                    get: $util.oneOfGetter($oneOfFields = ["key"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Parameters.prototype, "_stringData", {
                    get: $util.oneOfGetter($oneOfFields = ["stringData"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Parameters.prototype, "_intData", {
                    get: $util.oneOfGetter($oneOfFields = ["intData"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Parameters.prototype, "_floatData", {
                    get: $util.oneOfGetter($oneOfFields = ["floatData"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Parameters.prototype, "_contents", {
                    get: $util.oneOfGetter($oneOfFields = ["contents"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Parameters.create = function create(properties) {
                    return new Parameters(properties);
                };

                Parameters.encode = function encode(m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                        w.uint32(10).string(m.key);
                    if (m.stringData != null && Object.hasOwnProperty.call(m, "stringData"))
                        w.uint32(18).string(m.stringData);
                    if (m.intData != null && Object.hasOwnProperty.call(m, "intData"))
                        w.uint32(24).int64(m.intData);
                    if (m.floatData != null && Object.hasOwnProperty.call(m, "floatData"))
                        w.uint32(37).float(m.floatData);
                    if (m.contents != null && Object.hasOwnProperty.call(m, "contents"))
                        $root.proto.ContextInfo.DataSharingContext.Parameters.encode(m.contents, w.uint32(42).fork(), q + 1).ldelim();
                    return w;
                };

                Parameters.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ContextInfo.DataSharingContext.Parameters();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.key = r.string();
                                break;
                            }
                        case 2: {
                                m.stringData = r.string();
                                break;
                            }
                        case 3: {
                                m.intData = r.int64();
                                break;
                            }
                        case 4: {
                                m.floatData = r.float();
                                break;
                            }
                        case 5: {
                                m.contents = $root.proto.ContextInfo.DataSharingContext.Parameters.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Parameters.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.proto.ContextInfo.DataSharingContext.Parameters)
                        return d;
                    if (!$util.isObject(d))
                        throw TypeError(".proto.ContextInfo.DataSharingContext.Parameters: object expected");
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.proto.ContextInfo.DataSharingContext.Parameters();
                    if (d.key != null) {
                        m.key = String(d.key);
                    }
                    if (d.stringData != null) {
                        m.stringData = String(d.stringData);
                    }
                    if (d.intData != null) {
                        if ($util.Long)
                            m.intData = $util.Long.fromValue(d.intData, false);
                        else if (typeof d.intData === "string")
                            m.intData = parseInt(d.intData, 10);
                        else if (typeof d.intData === "number")
                            m.intData = d.intData;
                        else if (typeof d.intData === "object")
                            m.intData = new $util.LongBits(d.intData.low >>> 0, d.intData.high >>> 0).toNumber();
                    }
                    if (d.floatData != null) {
                        m.floatData = Number(d.floatData);
                    }
                    if (d.contents != null) {
                        if (!$util.isObject(d.contents))
                            throw TypeError(".proto.ContextInfo.DataSharingContext.Parameters.contents: object expected");
                        m.contents = $root.proto.ContextInfo.DataSharingContext.Parameters.fromObject(d.contents, n + 1);
                    }
                    return m;
                };

                Parameters.toObject = function toObject(m, o, q) {
                    if (!o)
                        o = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var d = {};
                    if (m.key != null && Object.hasOwnProperty.call(m, "key")) {
                        d.key = m.key;
                        if (o.oneofs)
                            d._key = "key";
                    }
                    if (m.stringData != null && Object.hasOwnProperty.call(m, "stringData")) {
                        d.stringData = m.stringData;
                        if (o.oneofs)
                            d._stringData = "stringData";
                    }
                    if (m.intData != null && Object.hasOwnProperty.call(m, "intData")) {
                        if (typeof BigInt !== "undefined" && o.longs === BigInt)
                            d.intData = typeof m.intData === "number" ? BigInt(m.intData) : $util.Long.fromBits(m.intData.low >>> 0, m.intData.high >>> 0, false).toBigInt();
                        else if (typeof m.intData === "number")
                            d.intData = o.longs === String ? String(m.intData) : m.intData;
                        else
                            d.intData = o.longs === String ? longToString(m.intData) : o.longs === Number ? longToNumber(m.intData) : m.intData;
                        if (o.oneofs)
                            d._intData = "intData";
                    }
                    if (m.floatData != null && Object.hasOwnProperty.call(m, "floatData")) {
                        d.floatData = o.json && !isFinite(m.floatData) ? String(m.floatData) : m.floatData;
                        if (o.oneofs)
                            d._floatData = "floatData";
                    }
                    if (m.contents != null && Object.hasOwnProperty.call(m, "contents")) {
                        d.contents = $root.proto.ContextInfo.DataSharingContext.Parameters.toObject(m.contents, o, q + 1);
                        if (o.oneofs)
                            d._contents = "contents";
                    }
                    return d;
                };

                Parameters.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Parameters.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/proto.ContextInfo.DataSharingContext.Parameters";
                };

                return Parameters;
            })();

            return DataSharingContext;
        })();

        ContextInfo.ExternalAdReplyInfo = (function() {

            function ExternalAdReplyInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ExternalAdReplyInfo.prototype.title = null;
            ExternalAdReplyInfo.prototype.body = null;
            ExternalAdReplyInfo.prototype.mediaType = null;
            ExternalAdReplyInfo.prototype.thumbnailUrl = null;
            ExternalAdReplyInfo.prototype.mediaUrl = null;
            ExternalAdReplyInfo.prototype.thumbnail = null;
            ExternalAdReplyInfo.prototype.sourceType = null;
            ExternalAdReplyInfo.prototype.sourceId = null;
            ExternalAdReplyInfo.prototype.sourceUrl = null;
            ExternalAdReplyInfo.prototype.containsAutoReply = null;
            ExternalAdReplyInfo.prototype.renderLargerThumbnail = null;
            ExternalAdReplyInfo.prototype.showAdAttribution = null;
            ExternalAdReplyInfo.prototype.ctwaClid = null;
            ExternalAdReplyInfo.prototype.ref = null;
            ExternalAdReplyInfo.prototype.clickToWhatsappCall = null;
            ExternalAdReplyInfo.prototype.adContextPreviewDismissed = null;
            ExternalAdReplyInfo.prototype.sourceApp = null;
            ExternalAdReplyInfo.prototype.automatedGreetingMessageShown = null;
            ExternalAdReplyInfo.prototype.greetingMessageBody = null;
            ExternalAdReplyInfo.prototype.ctaPayload = null;
            ExternalAdReplyInfo.prototype.disableNudge = null;
            ExternalAdReplyInfo.prototype.originalImageUrl = null;
            ExternalAdReplyInfo.prototype.automatedGreetingMessageCtaType = null;
            ExternalAdReplyInfo.prototype.wtwaAdFormat = null;
            ExternalAdReplyInfo.prototype.adType = null;
            ExternalAdReplyInfo.prototype.wtwaWebsiteUrl = null;
            ExternalAdReplyInfo.prototype.adPreviewUrl = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_body", {
                get: $util.oneOfGetter($oneOfFields = ["body"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_mediaType", {
                get: $util.oneOfGetter($oneOfFields = ["mediaType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_thumbnailUrl", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_mediaUrl", {
                get: $util.oneOfGetter($oneOfFields = ["mediaUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_thumbnail", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnail"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_sourceType", {
                get: $util.oneOfGetter($oneOfFields = ["sourceType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_sourceId", {
                get: $util.oneOfGetter($oneOfFields = ["sourceId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_sourceUrl", {
                get: $util.oneOfGetter($oneOfFields = ["sourceUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_containsAutoReply", {
                get: $util.oneOfGetter($oneOfFields = ["containsAutoReply"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_renderLargerThumbnail", {
                get: $util.oneOfGetter($oneOfFields = ["renderLargerThumbnail"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_showAdAttribution", {
                get: $util.oneOfGetter($oneOfFields = ["showAdAttribution"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_ctwaClid", {
                get: $util.oneOfGetter($oneOfFields = ["ctwaClid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_ref", {
                get: $util.oneOfGetter($oneOfFields = ["ref"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_clickToWhatsappCall", {
                get: $util.oneOfGetter($oneOfFields = ["clickToWhatsappCall"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_adContextPreviewDismissed", {
                get: $util.oneOfGetter($oneOfFields = ["adContextPreviewDismissed"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_sourceApp", {
                get: $util.oneOfGetter($oneOfFields = ["sourceApp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_automatedGreetingMessageShown", {
                get: $util.oneOfGetter($oneOfFields = ["automatedGreetingMessageShown"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_greetingMessageBody", {
                get: $util.oneOfGetter($oneOfFields = ["greetingMessageBody"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_ctaPayload", {
                get: $util.oneOfGetter($oneOfFields = ["ctaPayload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_disableNudge", {
                get: $util.oneOfGetter($oneOfFields = ["disableNudge"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_originalImageUrl", {
                get: $util.oneOfGetter($oneOfFields = ["originalImageUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_automatedGreetingMessageCtaType", {
                get: $util.oneOfGetter($oneOfFields = ["automatedGreetingMessageCtaType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_wtwaAdFormat", {
                get: $util.oneOfGetter($oneOfFields = ["wtwaAdFormat"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_adType", {
                get: $util.oneOfGetter($oneOfFields = ["adType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_wtwaWebsiteUrl", {
                get: $util.oneOfGetter($oneOfFields = ["wtwaWebsiteUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalAdReplyInfo.prototype, "_adPreviewUrl", {
                get: $util.oneOfGetter($oneOfFields = ["adPreviewUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            ExternalAdReplyInfo.create = function create(properties) {
                return new ExternalAdReplyInfo(properties);
            };

            ExternalAdReplyInfo.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                    w.uint32(10).string(m.title);
                if (m.body != null && Object.hasOwnProperty.call(m, "body"))
                    w.uint32(18).string(m.body);
                if (m.mediaType != null && Object.hasOwnProperty.call(m, "mediaType"))
                    w.uint32(24).int32(m.mediaType);
                if (m.thumbnailUrl != null && Object.hasOwnProperty.call(m, "thumbnailUrl"))
                    w.uint32(34).string(m.thumbnailUrl);
                if (m.mediaUrl != null && Object.hasOwnProperty.call(m, "mediaUrl"))
                    w.uint32(42).string(m.mediaUrl);
                if (m.thumbnail != null && Object.hasOwnProperty.call(m, "thumbnail"))
                    w.uint32(50).bytes(m.thumbnail);
                if (m.sourceType != null && Object.hasOwnProperty.call(m, "sourceType"))
                    w.uint32(58).string(m.sourceType);
                if (m.sourceId != null && Object.hasOwnProperty.call(m, "sourceId"))
                    w.uint32(66).string(m.sourceId);
                if (m.sourceUrl != null && Object.hasOwnProperty.call(m, "sourceUrl"))
                    w.uint32(74).string(m.sourceUrl);
                if (m.containsAutoReply != null && Object.hasOwnProperty.call(m, "containsAutoReply"))
                    w.uint32(80).bool(m.containsAutoReply);
                if (m.renderLargerThumbnail != null && Object.hasOwnProperty.call(m, "renderLargerThumbnail"))
                    w.uint32(88).bool(m.renderLargerThumbnail);
                if (m.showAdAttribution != null && Object.hasOwnProperty.call(m, "showAdAttribution"))
                    w.uint32(96).bool(m.showAdAttribution);
                if (m.ctwaClid != null && Object.hasOwnProperty.call(m, "ctwaClid"))
                    w.uint32(106).string(m.ctwaClid);
                if (m.ref != null && Object.hasOwnProperty.call(m, "ref"))
                    w.uint32(114).string(m.ref);
                if (m.clickToWhatsappCall != null && Object.hasOwnProperty.call(m, "clickToWhatsappCall"))
                    w.uint32(120).bool(m.clickToWhatsappCall);
                if (m.adContextPreviewDismissed != null && Object.hasOwnProperty.call(m, "adContextPreviewDismissed"))
                    w.uint32(128).bool(m.adContextPreviewDismissed);
                if (m.sourceApp != null && Object.hasOwnProperty.call(m, "sourceApp"))
                    w.uint32(138).string(m.sourceApp);
                if (m.automatedGreetingMessageShown != null && Object.hasOwnProperty.call(m, "automatedGreetingMessageShown"))
                    w.uint32(144).bool(m.automatedGreetingMessageShown);
                if (m.greetingMessageBody != null && Object.hasOwnProperty.call(m, "greetingMessageBody"))
                    w.uint32(154).string(m.greetingMessageBody);
                if (m.ctaPayload != null && Object.hasOwnProperty.call(m, "ctaPayload"))
                    w.uint32(162).string(m.ctaPayload);
                if (m.disableNudge != null && Object.hasOwnProperty.call(m, "disableNudge"))
                    w.uint32(168).bool(m.disableNudge);
                if (m.originalImageUrl != null && Object.hasOwnProperty.call(m, "originalImageUrl"))
                    w.uint32(178).string(m.originalImageUrl);
                if (m.automatedGreetingMessageCtaType != null && Object.hasOwnProperty.call(m, "automatedGreetingMessageCtaType"))
                    w.uint32(186).string(m.automatedGreetingMessageCtaType);
                if (m.wtwaAdFormat != null && Object.hasOwnProperty.call(m, "wtwaAdFormat"))
                    w.uint32(192).bool(m.wtwaAdFormat);
                if (m.adType != null && Object.hasOwnProperty.call(m, "adType"))
                    w.uint32(200).int32(m.adType);
                if (m.wtwaWebsiteUrl != null && Object.hasOwnProperty.call(m, "wtwaWebsiteUrl"))
                    w.uint32(210).string(m.wtwaWebsiteUrl);
                if (m.adPreviewUrl != null && Object.hasOwnProperty.call(m, "adPreviewUrl"))
                    w.uint32(218).string(m.adPreviewUrl);
                return w;
            };

            ExternalAdReplyInfo.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ContextInfo.ExternalAdReplyInfo();
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
                            m.body = r.string();
                            break;
                        }
                    case 3: {
                            m.mediaType = r.int32();
                            break;
                        }
                    case 4: {
                            m.thumbnailUrl = r.string();
                            break;
                        }
                    case 5: {
                            m.mediaUrl = r.string();
                            break;
                        }
                    case 6: {
                            m.thumbnail = r.bytes();
                            break;
                        }
                    case 7: {
                            m.sourceType = r.string();
                            break;
                        }
                    case 8: {
                            m.sourceId = r.string();
                            break;
                        }
                    case 9: {
                            m.sourceUrl = r.string();
                            break;
                        }
                    case 10: {
                            m.containsAutoReply = r.bool();
                            break;
                        }
                    case 11: {
                            m.renderLargerThumbnail = r.bool();
                            break;
                        }
                    case 12: {
                            m.showAdAttribution = r.bool();
                            break;
                        }
                    case 13: {
                            m.ctwaClid = r.string();
                            break;
                        }
                    case 14: {
                            m.ref = r.string();
                            break;
                        }
                    case 15: {
                            m.clickToWhatsappCall = r.bool();
                            break;
                        }
                    case 16: {
                            m.adContextPreviewDismissed = r.bool();
                            break;
                        }
                    case 17: {
                            m.sourceApp = r.string();
                            break;
                        }
                    case 18: {
                            m.automatedGreetingMessageShown = r.bool();
                            break;
                        }
                    case 19: {
                            m.greetingMessageBody = r.string();
                            break;
                        }
                    case 20: {
                            m.ctaPayload = r.string();
                            break;
                        }
                    case 21: {
                            m.disableNudge = r.bool();
                            break;
                        }
                    case 22: {
                            m.originalImageUrl = r.string();
                            break;
                        }
                    case 23: {
                            m.automatedGreetingMessageCtaType = r.string();
                            break;
                        }
                    case 24: {
                            m.wtwaAdFormat = r.bool();
                            break;
                        }
                    case 25: {
                            m.adType = r.int32();
                            break;
                        }
                    case 26: {
                            m.wtwaWebsiteUrl = r.string();
                            break;
                        }
                    case 27: {
                            m.adPreviewUrl = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ExternalAdReplyInfo.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ContextInfo.ExternalAdReplyInfo)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ContextInfo.ExternalAdReplyInfo: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ContextInfo.ExternalAdReplyInfo();
                if (d.title != null) {
                    m.title = String(d.title);
                }
                if (d.body != null) {
                    m.body = String(d.body);
                }
                switch (d.mediaType) {
                default:
                    if (typeof d.mediaType === "number") {
                        m.mediaType = d.mediaType;
                        break;
                    }
                    break;
                case "NONE":
                case 0:
                    m.mediaType = 0;
                    break;
                case "IMAGE":
                case 1:
                    m.mediaType = 1;
                    break;
                case "VIDEO":
                case 2:
                    m.mediaType = 2;
                    break;
                }
                if (d.thumbnailUrl != null) {
                    m.thumbnailUrl = String(d.thumbnailUrl);
                }
                if (d.mediaUrl != null) {
                    m.mediaUrl = String(d.mediaUrl);
                }
                if (d.thumbnail != null) {
                    if (typeof d.thumbnail === "string")
                        $util.base64.decode(d.thumbnail, m.thumbnail = $util.newBuffer($util.base64.length(d.thumbnail)), 0);
                    else if (d.thumbnail.length >= 0)
                        m.thumbnail = d.thumbnail;
                }
                if (d.sourceType != null) {
                    m.sourceType = String(d.sourceType);
                }
                if (d.sourceId != null) {
                    m.sourceId = String(d.sourceId);
                }
                if (d.sourceUrl != null) {
                    m.sourceUrl = String(d.sourceUrl);
                }
                if (d.containsAutoReply != null) {
                    m.containsAutoReply = Boolean(d.containsAutoReply);
                }
                if (d.renderLargerThumbnail != null) {
                    m.renderLargerThumbnail = Boolean(d.renderLargerThumbnail);
                }
                if (d.showAdAttribution != null) {
                    m.showAdAttribution = Boolean(d.showAdAttribution);
                }
                if (d.ctwaClid != null) {
                    m.ctwaClid = String(d.ctwaClid);
                }
                if (d.ref != null) {
                    m.ref = String(d.ref);
                }
                if (d.clickToWhatsappCall != null) {
                    m.clickToWhatsappCall = Boolean(d.clickToWhatsappCall);
                }
                if (d.adContextPreviewDismissed != null) {
                    m.adContextPreviewDismissed = Boolean(d.adContextPreviewDismissed);
                }
                if (d.sourceApp != null) {
                    m.sourceApp = String(d.sourceApp);
                }
                if (d.automatedGreetingMessageShown != null) {
                    m.automatedGreetingMessageShown = Boolean(d.automatedGreetingMessageShown);
                }
                if (d.greetingMessageBody != null) {
                    m.greetingMessageBody = String(d.greetingMessageBody);
                }
                if (d.ctaPayload != null) {
                    m.ctaPayload = String(d.ctaPayload);
                }
                if (d.disableNudge != null) {
                    m.disableNudge = Boolean(d.disableNudge);
                }
                if (d.originalImageUrl != null) {
                    m.originalImageUrl = String(d.originalImageUrl);
                }
                if (d.automatedGreetingMessageCtaType != null) {
                    m.automatedGreetingMessageCtaType = String(d.automatedGreetingMessageCtaType);
                }
                if (d.wtwaAdFormat != null) {
                    m.wtwaAdFormat = Boolean(d.wtwaAdFormat);
                }
                switch (d.adType) {
                default:
                    if (typeof d.adType === "number") {
                        m.adType = d.adType;
                        break;
                    }
                    break;
                case "CTWA":
                case 0:
                    m.adType = 0;
                    break;
                case "CAWC":
                case 1:
                    m.adType = 1;
                    break;
                }
                if (d.wtwaWebsiteUrl != null) {
                    m.wtwaWebsiteUrl = String(d.wtwaWebsiteUrl);
                }
                if (d.adPreviewUrl != null) {
                    m.adPreviewUrl = String(d.adPreviewUrl);
                }
                return m;
            };

            ExternalAdReplyInfo.toObject = function toObject(m, o, q) {
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
                if (m.body != null && Object.hasOwnProperty.call(m, "body")) {
                    d.body = m.body;
                    if (o.oneofs)
                        d._body = "body";
                }
                if (m.mediaType != null && Object.hasOwnProperty.call(m, "mediaType")) {
                    d.mediaType = o.enums === String ? $root.proto.ContextInfo.ExternalAdReplyInfo.MediaType[m.mediaType] === undefined ? m.mediaType : $root.proto.ContextInfo.ExternalAdReplyInfo.MediaType[m.mediaType] : m.mediaType;
                    if (o.oneofs)
                        d._mediaType = "mediaType";
                }
                if (m.thumbnailUrl != null && Object.hasOwnProperty.call(m, "thumbnailUrl")) {
                    d.thumbnailUrl = m.thumbnailUrl;
                    if (o.oneofs)
                        d._thumbnailUrl = "thumbnailUrl";
                }
                if (m.mediaUrl != null && Object.hasOwnProperty.call(m, "mediaUrl")) {
                    d.mediaUrl = m.mediaUrl;
                    if (o.oneofs)
                        d._mediaUrl = "mediaUrl";
                }
                if (m.thumbnail != null && Object.hasOwnProperty.call(m, "thumbnail")) {
                    d.thumbnail = o.bytes === String ? $util.base64.encode(m.thumbnail, 0, m.thumbnail.length) : o.bytes === Array ? Array.prototype.slice.call(m.thumbnail) : m.thumbnail;
                    if (o.oneofs)
                        d._thumbnail = "thumbnail";
                }
                if (m.sourceType != null && Object.hasOwnProperty.call(m, "sourceType")) {
                    d.sourceType = m.sourceType;
                    if (o.oneofs)
                        d._sourceType = "sourceType";
                }
                if (m.sourceId != null && Object.hasOwnProperty.call(m, "sourceId")) {
                    d.sourceId = m.sourceId;
                    if (o.oneofs)
                        d._sourceId = "sourceId";
                }
                if (m.sourceUrl != null && Object.hasOwnProperty.call(m, "sourceUrl")) {
                    d.sourceUrl = m.sourceUrl;
                    if (o.oneofs)
                        d._sourceUrl = "sourceUrl";
                }
                if (m.containsAutoReply != null && Object.hasOwnProperty.call(m, "containsAutoReply")) {
                    d.containsAutoReply = m.containsAutoReply;
                    if (o.oneofs)
                        d._containsAutoReply = "containsAutoReply";
                }
                if (m.renderLargerThumbnail != null && Object.hasOwnProperty.call(m, "renderLargerThumbnail")) {
                    d.renderLargerThumbnail = m.renderLargerThumbnail;
                    if (o.oneofs)
                        d._renderLargerThumbnail = "renderLargerThumbnail";
                }
                if (m.showAdAttribution != null && Object.hasOwnProperty.call(m, "showAdAttribution")) {
                    d.showAdAttribution = m.showAdAttribution;
                    if (o.oneofs)
                        d._showAdAttribution = "showAdAttribution";
                }
                if (m.ctwaClid != null && Object.hasOwnProperty.call(m, "ctwaClid")) {
                    d.ctwaClid = m.ctwaClid;
                    if (o.oneofs)
                        d._ctwaClid = "ctwaClid";
                }
                if (m.ref != null && Object.hasOwnProperty.call(m, "ref")) {
                    d.ref = m.ref;
                    if (o.oneofs)
                        d._ref = "ref";
                }
                if (m.clickToWhatsappCall != null && Object.hasOwnProperty.call(m, "clickToWhatsappCall")) {
                    d.clickToWhatsappCall = m.clickToWhatsappCall;
                    if (o.oneofs)
                        d._clickToWhatsappCall = "clickToWhatsappCall";
                }
                if (m.adContextPreviewDismissed != null && Object.hasOwnProperty.call(m, "adContextPreviewDismissed")) {
                    d.adContextPreviewDismissed = m.adContextPreviewDismissed;
                    if (o.oneofs)
                        d._adContextPreviewDismissed = "adContextPreviewDismissed";
                }
                if (m.sourceApp != null && Object.hasOwnProperty.call(m, "sourceApp")) {
                    d.sourceApp = m.sourceApp;
                    if (o.oneofs)
                        d._sourceApp = "sourceApp";
                }
                if (m.automatedGreetingMessageShown != null && Object.hasOwnProperty.call(m, "automatedGreetingMessageShown")) {
                    d.automatedGreetingMessageShown = m.automatedGreetingMessageShown;
                    if (o.oneofs)
                        d._automatedGreetingMessageShown = "automatedGreetingMessageShown";
                }
                if (m.greetingMessageBody != null && Object.hasOwnProperty.call(m, "greetingMessageBody")) {
                    d.greetingMessageBody = m.greetingMessageBody;
                    if (o.oneofs)
                        d._greetingMessageBody = "greetingMessageBody";
                }
                if (m.ctaPayload != null && Object.hasOwnProperty.call(m, "ctaPayload")) {
                    d.ctaPayload = m.ctaPayload;
                    if (o.oneofs)
                        d._ctaPayload = "ctaPayload";
                }
                if (m.disableNudge != null && Object.hasOwnProperty.call(m, "disableNudge")) {
                    d.disableNudge = m.disableNudge;
                    if (o.oneofs)
                        d._disableNudge = "disableNudge";
                }
                if (m.originalImageUrl != null && Object.hasOwnProperty.call(m, "originalImageUrl")) {
                    d.originalImageUrl = m.originalImageUrl;
                    if (o.oneofs)
                        d._originalImageUrl = "originalImageUrl";
                }
                if (m.automatedGreetingMessageCtaType != null && Object.hasOwnProperty.call(m, "automatedGreetingMessageCtaType")) {
                    d.automatedGreetingMessageCtaType = m.automatedGreetingMessageCtaType;
                    if (o.oneofs)
                        d._automatedGreetingMessageCtaType = "automatedGreetingMessageCtaType";
                }
                if (m.wtwaAdFormat != null && Object.hasOwnProperty.call(m, "wtwaAdFormat")) {
                    d.wtwaAdFormat = m.wtwaAdFormat;
                    if (o.oneofs)
                        d._wtwaAdFormat = "wtwaAdFormat";
                }
                if (m.adType != null && Object.hasOwnProperty.call(m, "adType")) {
                    d.adType = o.enums === String ? $root.proto.ContextInfo.ExternalAdReplyInfo.AdType[m.adType] === undefined ? m.adType : $root.proto.ContextInfo.ExternalAdReplyInfo.AdType[m.adType] : m.adType;
                    if (o.oneofs)
                        d._adType = "adType";
                }
                if (m.wtwaWebsiteUrl != null && Object.hasOwnProperty.call(m, "wtwaWebsiteUrl")) {
                    d.wtwaWebsiteUrl = m.wtwaWebsiteUrl;
                    if (o.oneofs)
                        d._wtwaWebsiteUrl = "wtwaWebsiteUrl";
                }
                if (m.adPreviewUrl != null && Object.hasOwnProperty.call(m, "adPreviewUrl")) {
                    d.adPreviewUrl = m.adPreviewUrl;
                    if (o.oneofs)
                        d._adPreviewUrl = "adPreviewUrl";
                }
                return d;
            };

            ExternalAdReplyInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ExternalAdReplyInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ContextInfo.ExternalAdReplyInfo";
            };

            ExternalAdReplyInfo.AdType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CTWA"] = 0;
                values[valuesById[1] = "CAWC"] = 1;
                return values;
            })();

            ExternalAdReplyInfo.MediaType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "IMAGE"] = 1;
                values[valuesById[2] = "VIDEO"] = 2;
                return values;
            })();

            return ExternalAdReplyInfo;
        })();

        ContextInfo.FeatureEligibilities = (function() {

            function FeatureEligibilities(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            FeatureEligibilities.prototype.cannotBeReactedTo = null;
            FeatureEligibilities.prototype.cannotBeRanked = null;
            FeatureEligibilities.prototype.canRequestFeedback = null;
            FeatureEligibilities.prototype.canBeReshared = null;
            FeatureEligibilities.prototype.canReceiveMultiReact = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(FeatureEligibilities.prototype, "_cannotBeReactedTo", {
                get: $util.oneOfGetter($oneOfFields = ["cannotBeReactedTo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(FeatureEligibilities.prototype, "_cannotBeRanked", {
                get: $util.oneOfGetter($oneOfFields = ["cannotBeRanked"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(FeatureEligibilities.prototype, "_canRequestFeedback", {
                get: $util.oneOfGetter($oneOfFields = ["canRequestFeedback"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(FeatureEligibilities.prototype, "_canBeReshared", {
                get: $util.oneOfGetter($oneOfFields = ["canBeReshared"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(FeatureEligibilities.prototype, "_canReceiveMultiReact", {
                get: $util.oneOfGetter($oneOfFields = ["canReceiveMultiReact"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            FeatureEligibilities.create = function create(properties) {
                return new FeatureEligibilities(properties);
            };

            FeatureEligibilities.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.cannotBeReactedTo != null && Object.hasOwnProperty.call(m, "cannotBeReactedTo"))
                    w.uint32(8).bool(m.cannotBeReactedTo);
                if (m.cannotBeRanked != null && Object.hasOwnProperty.call(m, "cannotBeRanked"))
                    w.uint32(16).bool(m.cannotBeRanked);
                if (m.canRequestFeedback != null && Object.hasOwnProperty.call(m, "canRequestFeedback"))
                    w.uint32(24).bool(m.canRequestFeedback);
                if (m.canBeReshared != null && Object.hasOwnProperty.call(m, "canBeReshared"))
                    w.uint32(32).bool(m.canBeReshared);
                if (m.canReceiveMultiReact != null && Object.hasOwnProperty.call(m, "canReceiveMultiReact"))
                    w.uint32(40).bool(m.canReceiveMultiReact);
                return w;
            };

            FeatureEligibilities.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ContextInfo.FeatureEligibilities();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.cannotBeReactedTo = r.bool();
                            break;
                        }
                    case 2: {
                            m.cannotBeRanked = r.bool();
                            break;
                        }
                    case 3: {
                            m.canRequestFeedback = r.bool();
                            break;
                        }
                    case 4: {
                            m.canBeReshared = r.bool();
                            break;
                        }
                    case 5: {
                            m.canReceiveMultiReact = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            FeatureEligibilities.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ContextInfo.FeatureEligibilities)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ContextInfo.FeatureEligibilities: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ContextInfo.FeatureEligibilities();
                if (d.cannotBeReactedTo != null) {
                    m.cannotBeReactedTo = Boolean(d.cannotBeReactedTo);
                }
                if (d.cannotBeRanked != null) {
                    m.cannotBeRanked = Boolean(d.cannotBeRanked);
                }
                if (d.canRequestFeedback != null) {
                    m.canRequestFeedback = Boolean(d.canRequestFeedback);
                }
                if (d.canBeReshared != null) {
                    m.canBeReshared = Boolean(d.canBeReshared);
                }
                if (d.canReceiveMultiReact != null) {
                    m.canReceiveMultiReact = Boolean(d.canReceiveMultiReact);
                }
                return m;
            };

            FeatureEligibilities.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.cannotBeReactedTo != null && Object.hasOwnProperty.call(m, "cannotBeReactedTo")) {
                    d.cannotBeReactedTo = m.cannotBeReactedTo;
                    if (o.oneofs)
                        d._cannotBeReactedTo = "cannotBeReactedTo";
                }
                if (m.cannotBeRanked != null && Object.hasOwnProperty.call(m, "cannotBeRanked")) {
                    d.cannotBeRanked = m.cannotBeRanked;
                    if (o.oneofs)
                        d._cannotBeRanked = "cannotBeRanked";
                }
                if (m.canRequestFeedback != null && Object.hasOwnProperty.call(m, "canRequestFeedback")) {
                    d.canRequestFeedback = m.canRequestFeedback;
                    if (o.oneofs)
                        d._canRequestFeedback = "canRequestFeedback";
                }
                if (m.canBeReshared != null && Object.hasOwnProperty.call(m, "canBeReshared")) {
                    d.canBeReshared = m.canBeReshared;
                    if (o.oneofs)
                        d._canBeReshared = "canBeReshared";
                }
                if (m.canReceiveMultiReact != null && Object.hasOwnProperty.call(m, "canReceiveMultiReact")) {
                    d.canReceiveMultiReact = m.canReceiveMultiReact;
                    if (o.oneofs)
                        d._canReceiveMultiReact = "canReceiveMultiReact";
                }
                return d;
            };

            FeatureEligibilities.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            FeatureEligibilities.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ContextInfo.FeatureEligibilities";
            };

            return FeatureEligibilities;
        })();

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

        ContextInfo.ForwardedNewsletterMessageInfo = (function() {

            function ForwardedNewsletterMessageInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ForwardedNewsletterMessageInfo.prototype.newsletterJid = null;
            ForwardedNewsletterMessageInfo.prototype.serverMessageId = null;
            ForwardedNewsletterMessageInfo.prototype.newsletterName = null;
            ForwardedNewsletterMessageInfo.prototype.contentType = null;
            ForwardedNewsletterMessageInfo.prototype.accessibilityText = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ForwardedNewsletterMessageInfo.prototype, "_newsletterJid", {
                get: $util.oneOfGetter($oneOfFields = ["newsletterJid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ForwardedNewsletterMessageInfo.prototype, "_serverMessageId", {
                get: $util.oneOfGetter($oneOfFields = ["serverMessageId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ForwardedNewsletterMessageInfo.prototype, "_newsletterName", {
                get: $util.oneOfGetter($oneOfFields = ["newsletterName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ForwardedNewsletterMessageInfo.prototype, "_contentType", {
                get: $util.oneOfGetter($oneOfFields = ["contentType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ForwardedNewsletterMessageInfo.prototype, "_accessibilityText", {
                get: $util.oneOfGetter($oneOfFields = ["accessibilityText"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            ForwardedNewsletterMessageInfo.create = function create(properties) {
                return new ForwardedNewsletterMessageInfo(properties);
            };

            ForwardedNewsletterMessageInfo.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.newsletterJid != null && Object.hasOwnProperty.call(m, "newsletterJid"))
                    w.uint32(10).string(m.newsletterJid);
                if (m.serverMessageId != null && Object.hasOwnProperty.call(m, "serverMessageId"))
                    w.uint32(16).int32(m.serverMessageId);
                if (m.newsletterName != null && Object.hasOwnProperty.call(m, "newsletterName"))
                    w.uint32(26).string(m.newsletterName);
                if (m.contentType != null && Object.hasOwnProperty.call(m, "contentType"))
                    w.uint32(32).int32(m.contentType);
                if (m.accessibilityText != null && Object.hasOwnProperty.call(m, "accessibilityText"))
                    w.uint32(42).string(m.accessibilityText);
                return w;
            };

            ForwardedNewsletterMessageInfo.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ContextInfo.ForwardedNewsletterMessageInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.newsletterJid = r.string();
                            break;
                        }
                    case 2: {
                            m.serverMessageId = r.int32();
                            break;
                        }
                    case 3: {
                            m.newsletterName = r.string();
                            break;
                        }
                    case 4: {
                            m.contentType = r.int32();
                            break;
                        }
                    case 5: {
                            m.accessibilityText = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ForwardedNewsletterMessageInfo.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ContextInfo.ForwardedNewsletterMessageInfo)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ContextInfo.ForwardedNewsletterMessageInfo: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ContextInfo.ForwardedNewsletterMessageInfo();
                if (d.newsletterJid != null) {
                    m.newsletterJid = String(d.newsletterJid);
                }
                if (d.serverMessageId != null) {
                    m.serverMessageId = d.serverMessageId | 0;
                }
                if (d.newsletterName != null) {
                    m.newsletterName = String(d.newsletterName);
                }
                switch (d.contentType) {
                default:
                    if (typeof d.contentType === "number") {
                        m.contentType = d.contentType;
                        break;
                    }
                    break;
                case "UPDATE":
                case 1:
                    m.contentType = 1;
                    break;
                case "UPDATE_CARD":
                case 2:
                    m.contentType = 2;
                    break;
                case "LINK_CARD":
                case 3:
                    m.contentType = 3;
                    break;
                }
                if (d.accessibilityText != null) {
                    m.accessibilityText = String(d.accessibilityText);
                }
                return m;
            };

            ForwardedNewsletterMessageInfo.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.newsletterJid != null && Object.hasOwnProperty.call(m, "newsletterJid")) {
                    d.newsletterJid = m.newsletterJid;
                    if (o.oneofs)
                        d._newsletterJid = "newsletterJid";
                }
                if (m.serverMessageId != null && Object.hasOwnProperty.call(m, "serverMessageId")) {
                    d.serverMessageId = m.serverMessageId;
                    if (o.oneofs)
                        d._serverMessageId = "serverMessageId";
                }
                if (m.newsletterName != null && Object.hasOwnProperty.call(m, "newsletterName")) {
                    d.newsletterName = m.newsletterName;
                    if (o.oneofs)
                        d._newsletterName = "newsletterName";
                }
                if (m.contentType != null && Object.hasOwnProperty.call(m, "contentType")) {
                    d.contentType = o.enums === String ? $root.proto.ContextInfo.ForwardedNewsletterMessageInfo.ContentType[m.contentType] === undefined ? m.contentType : $root.proto.ContextInfo.ForwardedNewsletterMessageInfo.ContentType[m.contentType] : m.contentType;
                    if (o.oneofs)
                        d._contentType = "contentType";
                }
                if (m.accessibilityText != null && Object.hasOwnProperty.call(m, "accessibilityText")) {
                    d.accessibilityText = m.accessibilityText;
                    if (o.oneofs)
                        d._accessibilityText = "accessibilityText";
                }
                return d;
            };

            ForwardedNewsletterMessageInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ForwardedNewsletterMessageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ContextInfo.ForwardedNewsletterMessageInfo";
            };

            ForwardedNewsletterMessageInfo.ContentType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "UPDATE"] = 1;
                values[valuesById[2] = "UPDATE_CARD"] = 2;
                values[valuesById[3] = "LINK_CARD"] = 3;
                return values;
            })();

            return ForwardedNewsletterMessageInfo;
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

        ContextInfo.QuestionReplyQuotedMessage = (function() {

            function QuestionReplyQuotedMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            QuestionReplyQuotedMessage.prototype.serverQuestionId = null;
            QuestionReplyQuotedMessage.prototype.quotedQuestion = null;
            QuestionReplyQuotedMessage.prototype.quotedResponse = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(QuestionReplyQuotedMessage.prototype, "_serverQuestionId", {
                get: $util.oneOfGetter($oneOfFields = ["serverQuestionId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(QuestionReplyQuotedMessage.prototype, "_quotedQuestion", {
                get: $util.oneOfGetter($oneOfFields = ["quotedQuestion"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(QuestionReplyQuotedMessage.prototype, "_quotedResponse", {
                get: $util.oneOfGetter($oneOfFields = ["quotedResponse"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            QuestionReplyQuotedMessage.create = function create(properties) {
                return new QuestionReplyQuotedMessage(properties);
            };

            QuestionReplyQuotedMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.serverQuestionId != null && Object.hasOwnProperty.call(m, "serverQuestionId"))
                    w.uint32(8).int32(m.serverQuestionId);
                if (m.quotedQuestion != null && Object.hasOwnProperty.call(m, "quotedQuestion"))
                    $root.proto.Message.encode(m.quotedQuestion, w.uint32(18).fork(), q + 1).ldelim();
                if (m.quotedResponse != null && Object.hasOwnProperty.call(m, "quotedResponse"))
                    $root.proto.Message.encode(m.quotedResponse, w.uint32(26).fork(), q + 1).ldelim();
                return w;
            };

            QuestionReplyQuotedMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ContextInfo.QuestionReplyQuotedMessage();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.serverQuestionId = r.int32();
                            break;
                        }
                    case 2: {
                            m.quotedQuestion = $root.proto.Message.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 3: {
                            m.quotedResponse = $root.proto.Message.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            QuestionReplyQuotedMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ContextInfo.QuestionReplyQuotedMessage)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ContextInfo.QuestionReplyQuotedMessage: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ContextInfo.QuestionReplyQuotedMessage();
                if (d.serverQuestionId != null) {
                    m.serverQuestionId = d.serverQuestionId | 0;
                }
                if (d.quotedQuestion != null) {
                    if (!$util.isObject(d.quotedQuestion))
                        throw TypeError(".proto.ContextInfo.QuestionReplyQuotedMessage.quotedQuestion: object expected");
                    m.quotedQuestion = $root.proto.Message.fromObject(d.quotedQuestion, n + 1);
                }
                if (d.quotedResponse != null) {
                    if (!$util.isObject(d.quotedResponse))
                        throw TypeError(".proto.ContextInfo.QuestionReplyQuotedMessage.quotedResponse: object expected");
                    m.quotedResponse = $root.proto.Message.fromObject(d.quotedResponse, n + 1);
                }
                return m;
            };

            QuestionReplyQuotedMessage.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.serverQuestionId != null && Object.hasOwnProperty.call(m, "serverQuestionId")) {
                    d.serverQuestionId = m.serverQuestionId;
                    if (o.oneofs)
                        d._serverQuestionId = "serverQuestionId";
                }
                if (m.quotedQuestion != null && Object.hasOwnProperty.call(m, "quotedQuestion")) {
                    d.quotedQuestion = $root.proto.Message.toObject(m.quotedQuestion, o, q + 1);
                    if (o.oneofs)
                        d._quotedQuestion = "quotedQuestion";
                }
                if (m.quotedResponse != null && Object.hasOwnProperty.call(m, "quotedResponse")) {
                    d.quotedResponse = $root.proto.Message.toObject(m.quotedResponse, o, q + 1);
                    if (o.oneofs)
                        d._quotedResponse = "quotedResponse";
                }
                return d;
            };

            QuestionReplyQuotedMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            QuestionReplyQuotedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ContextInfo.QuestionReplyQuotedMessage";
            };

            return QuestionReplyQuotedMessage;
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

        ContextInfo.StatusAudienceMetadata = (function() {

            function StatusAudienceMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusAudienceMetadata.prototype.audienceType = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StatusAudienceMetadata.prototype, "_audienceType", {
                get: $util.oneOfGetter($oneOfFields = ["audienceType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            StatusAudienceMetadata.create = function create(properties) {
                return new StatusAudienceMetadata(properties);
            };

            StatusAudienceMetadata.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.audienceType != null && Object.hasOwnProperty.call(m, "audienceType"))
                    w.uint32(8).int32(m.audienceType);
                return w;
            };

            StatusAudienceMetadata.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ContextInfo.StatusAudienceMetadata();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.audienceType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            StatusAudienceMetadata.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ContextInfo.StatusAudienceMetadata)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ContextInfo.StatusAudienceMetadata: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ContextInfo.StatusAudienceMetadata();
                switch (d.audienceType) {
                default:
                    if (typeof d.audienceType === "number") {
                        m.audienceType = d.audienceType;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    m.audienceType = 0;
                    break;
                case "CLOSE_FRIENDS":
                case 1:
                    m.audienceType = 1;
                    break;
                }
                return m;
            };

            StatusAudienceMetadata.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.audienceType != null && Object.hasOwnProperty.call(m, "audienceType")) {
                    d.audienceType = o.enums === String ? $root.proto.ContextInfo.StatusAudienceMetadata.AudienceType[m.audienceType] === undefined ? m.audienceType : $root.proto.ContextInfo.StatusAudienceMetadata.AudienceType[m.audienceType] : m.audienceType;
                    if (o.oneofs)
                        d._audienceType = "audienceType";
                }
                return d;
            };

            StatusAudienceMetadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StatusAudienceMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ContextInfo.StatusAudienceMetadata";
            };

            StatusAudienceMetadata.AudienceType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "CLOSE_FRIENDS"] = 1;
                return values;
            })();

            return StatusAudienceMetadata;
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

        ContextInfo.UTMInfo = (function() {

            function UTMInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            UTMInfo.prototype.utmSource = null;
            UTMInfo.prototype.utmCampaign = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UTMInfo.prototype, "_utmSource", {
                get: $util.oneOfGetter($oneOfFields = ["utmSource"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UTMInfo.prototype, "_utmCampaign", {
                get: $util.oneOfGetter($oneOfFields = ["utmCampaign"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            UTMInfo.create = function create(properties) {
                return new UTMInfo(properties);
            };

            UTMInfo.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (m.utmSource != null && Object.hasOwnProperty.call(m, "utmSource"))
                    w.uint32(10).string(m.utmSource);
                if (m.utmCampaign != null && Object.hasOwnProperty.call(m, "utmCampaign"))
                    w.uint32(18).string(m.utmCampaign);
                return w;
            };

            UTMInfo.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ContextInfo.UTMInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.utmSource = r.string();
                            break;
                        }
                    case 2: {
                            m.utmCampaign = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            UTMInfo.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.ContextInfo.UTMInfo)
                    return d;
                if (!$util.isObject(d))
                    throw TypeError(".proto.ContextInfo.UTMInfo: object expected");
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.proto.ContextInfo.UTMInfo();
                if (d.utmSource != null) {
                    m.utmSource = String(d.utmSource);
                }
                if (d.utmCampaign != null) {
                    m.utmCampaign = String(d.utmCampaign);
                }
                return m;
            };

            UTMInfo.toObject = function toObject(m, o, q) {
                if (!o)
                    o = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var d = {};
                if (m.utmSource != null && Object.hasOwnProperty.call(m, "utmSource")) {
                    d.utmSource = m.utmSource;
                    if (o.oneofs)
                        d._utmSource = "utmSource";
                }
                if (m.utmCampaign != null && Object.hasOwnProperty.call(m, "utmCampaign")) {
                    d.utmCampaign = m.utmCampaign;
                    if (o.oneofs)
                        d._utmCampaign = "utmCampaign";
                }
                return d;
            };

            UTMInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UTMInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ContextInfo.UTMInfo";
            };

            return UTMInfo;
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

    proto.DeviceListMetadata = proto.DeviceListMetadata || createEmptyMessage("DeviceListMetadata")

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

    proto.DisappearingMode = proto.DisappearingMode || createEmptyMessage("DisappearingMode")

    proto.EventAdditionalMetadata = proto.EventAdditionalMetadata || createEmptyMessage("EventAdditionalMetadata")

    proto.EventResponse = proto.EventResponse || createEmptyMessage("EventResponse")

    proto.ForwardedAIBotMessageInfo = proto.ForwardedAIBotMessageInfo || createEmptyMessage("ForwardedAIBotMessageInfo")

    proto.GroupHistoryBundleInfo = proto.GroupHistoryBundleInfo || createEmptyMessage("GroupHistoryBundleInfo")

    proto.GroupHistoryIndividualMessageInfo = proto.GroupHistoryIndividualMessageInfo || createEmptyMessage("GroupHistoryIndividualMessageInfo")

    proto.GroupMention = proto.GroupMention || createEmptyMessage("GroupMention")

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

    proto.InteractiveMessageAdditionalMetadata = proto.InteractiveMessageAdditionalMetadata || createEmptyMessage("InteractiveMessageAdditionalMetadata")

    proto.KeepInChat = (function() {

        function KeepInChat(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        KeepInChat.prototype.keepType = null;
        KeepInChat.prototype.serverTimestamp = null;
        KeepInChat.prototype.key = null;
        KeepInChat.prototype.deviceJid = null;
        KeepInChat.prototype.clientTimestampMs = null;
        KeepInChat.prototype.serverTimestampMs = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeepInChat.prototype, "_keepType", {
            get: $util.oneOfGetter($oneOfFields = ["keepType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeepInChat.prototype, "_serverTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["serverTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeepInChat.prototype, "_key", {
            get: $util.oneOfGetter($oneOfFields = ["key"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeepInChat.prototype, "_deviceJid", {
            get: $util.oneOfGetter($oneOfFields = ["deviceJid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeepInChat.prototype, "_clientTimestampMs", {
            get: $util.oneOfGetter($oneOfFields = ["clientTimestampMs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeepInChat.prototype, "_serverTimestampMs", {
            get: $util.oneOfGetter($oneOfFields = ["serverTimestampMs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        KeepInChat.create = function create(properties) {
            return new KeepInChat(properties);
        };

        KeepInChat.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.keepType != null && Object.hasOwnProperty.call(m, "keepType"))
                $root.proto.KeepType.encode(m.keepType, w.uint32(10).fork(), q + 1).ldelim();
            if (m.serverTimestamp != null && Object.hasOwnProperty.call(m, "serverTimestamp"))
                w.uint32(16).int64(m.serverTimestamp);
            if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                $root.proto.MessageKey.encode(m.key, w.uint32(26).fork(), q + 1).ldelim();
            if (m.deviceJid != null && Object.hasOwnProperty.call(m, "deviceJid"))
                w.uint32(34).string(m.deviceJid);
            if (m.clientTimestampMs != null && Object.hasOwnProperty.call(m, "clientTimestampMs"))
                w.uint32(40).int64(m.clientTimestampMs);
            if (m.serverTimestampMs != null && Object.hasOwnProperty.call(m, "serverTimestampMs"))
                w.uint32(48).int64(m.serverTimestampMs);
            return w;
        };

        KeepInChat.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.KeepInChat();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.keepType = $root.proto.KeepType.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.serverTimestamp = r.int64();
                        break;
                    }
                case 3: {
                        m.key = $root.proto.MessageKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 4: {
                        m.deviceJid = r.string();
                        break;
                    }
                case 5: {
                        m.clientTimestampMs = r.int64();
                        break;
                    }
                case 6: {
                        m.serverTimestampMs = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        KeepInChat.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.KeepInChat)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.KeepInChat: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.KeepInChat();
            if (d.keepType != null) {
                if (!$util.isObject(d.keepType))
                    throw TypeError(".proto.KeepInChat.keepType: object expected");
                m.keepType = $root.proto.KeepType.fromObject(d.keepType, n + 1);
            }
            if (d.serverTimestamp != null) {
                if ($util.Long)
                    m.serverTimestamp = $util.Long.fromValue(d.serverTimestamp, false);
                else if (typeof d.serverTimestamp === "string")
                    m.serverTimestamp = parseInt(d.serverTimestamp, 10);
                else if (typeof d.serverTimestamp === "number")
                    m.serverTimestamp = d.serverTimestamp;
                else if (typeof d.serverTimestamp === "object")
                    m.serverTimestamp = new $util.LongBits(d.serverTimestamp.low >>> 0, d.serverTimestamp.high >>> 0).toNumber();
            }
            if (d.key != null) {
                if (!$util.isObject(d.key))
                    throw TypeError(".proto.KeepInChat.key: object expected");
                m.key = $root.proto.MessageKey.fromObject(d.key, n + 1);
            }
            if (d.deviceJid != null) {
                m.deviceJid = String(d.deviceJid);
            }
            if (d.clientTimestampMs != null) {
                if ($util.Long)
                    m.clientTimestampMs = $util.Long.fromValue(d.clientTimestampMs, false);
                else if (typeof d.clientTimestampMs === "string")
                    m.clientTimestampMs = parseInt(d.clientTimestampMs, 10);
                else if (typeof d.clientTimestampMs === "number")
                    m.clientTimestampMs = d.clientTimestampMs;
                else if (typeof d.clientTimestampMs === "object")
                    m.clientTimestampMs = new $util.LongBits(d.clientTimestampMs.low >>> 0, d.clientTimestampMs.high >>> 0).toNumber();
            }
            if (d.serverTimestampMs != null) {
                if ($util.Long)
                    m.serverTimestampMs = $util.Long.fromValue(d.serverTimestampMs, false);
                else if (typeof d.serverTimestampMs === "string")
                    m.serverTimestampMs = parseInt(d.serverTimestampMs, 10);
                else if (typeof d.serverTimestampMs === "number")
                    m.serverTimestampMs = d.serverTimestampMs;
                else if (typeof d.serverTimestampMs === "object")
                    m.serverTimestampMs = new $util.LongBits(d.serverTimestampMs.low >>> 0, d.serverTimestampMs.high >>> 0).toNumber();
            }
            return m;
        };

        KeepInChat.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (m.keepType != null && Object.hasOwnProperty.call(m, "keepType")) {
                d.keepType = $root.proto.KeepType.toObject(m.keepType, o, q + 1);
                if (o.oneofs)
                    d._keepType = "keepType";
            }
            if (m.serverTimestamp != null && Object.hasOwnProperty.call(m, "serverTimestamp")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.serverTimestamp = typeof m.serverTimestamp === "number" ? BigInt(m.serverTimestamp) : $util.Long.fromBits(m.serverTimestamp.low >>> 0, m.serverTimestamp.high >>> 0, false).toBigInt();
                else if (typeof m.serverTimestamp === "number")
                    d.serverTimestamp = o.longs === String ? String(m.serverTimestamp) : m.serverTimestamp;
                else
                    d.serverTimestamp = o.longs === String ? longToString(m.serverTimestamp) : o.longs === Number ? longToNumber(m.serverTimestamp) : m.serverTimestamp;
                if (o.oneofs)
                    d._serverTimestamp = "serverTimestamp";
            }
            if (m.key != null && Object.hasOwnProperty.call(m, "key")) {
                d.key = $root.proto.MessageKey.toObject(m.key, o, q + 1);
                if (o.oneofs)
                    d._key = "key";
            }
            if (m.deviceJid != null && Object.hasOwnProperty.call(m, "deviceJid")) {
                d.deviceJid = m.deviceJid;
                if (o.oneofs)
                    d._deviceJid = "deviceJid";
            }
            if (m.clientTimestampMs != null && Object.hasOwnProperty.call(m, "clientTimestampMs")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.clientTimestampMs = typeof m.clientTimestampMs === "number" ? BigInt(m.clientTimestampMs) : $util.Long.fromBits(m.clientTimestampMs.low >>> 0, m.clientTimestampMs.high >>> 0, false).toBigInt();
                else if (typeof m.clientTimestampMs === "number")
                    d.clientTimestampMs = o.longs === String ? String(m.clientTimestampMs) : m.clientTimestampMs;
                else
                    d.clientTimestampMs = o.longs === String ? longToString(m.clientTimestampMs) : o.longs === Number ? longToNumber(m.clientTimestampMs) : m.clientTimestampMs;
                if (o.oneofs)
                    d._clientTimestampMs = "clientTimestampMs";
            }
            if (m.serverTimestampMs != null && Object.hasOwnProperty.call(m, "serverTimestampMs")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.serverTimestampMs = typeof m.serverTimestampMs === "number" ? BigInt(m.serverTimestampMs) : $util.Long.fromBits(m.serverTimestampMs.low >>> 0, m.serverTimestampMs.high >>> 0, false).toBigInt();
                else if (typeof m.serverTimestampMs === "number")
                    d.serverTimestampMs = o.longs === String ? String(m.serverTimestampMs) : m.serverTimestampMs;
                else
                    d.serverTimestampMs = o.longs === String ? longToString(m.serverTimestampMs) : o.longs === Number ? longToNumber(m.serverTimestampMs) : m.serverTimestampMs;
                if (o.oneofs)
                    d._serverTimestampMs = "serverTimestampMs";
            }
            return d;
        };

        KeepInChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        KeepInChat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.KeepInChat";
        };

        return KeepInChat;
    })();

    proto.KeepType = proto.KeepType || createEmptyMessage("KeepType")

    proto.LegacyMessage = proto.LegacyMessage || createEmptyMessage("LegacyMessage")

    proto.LimitSharing = proto.LimitSharing || createEmptyMessage("LimitSharing")

    proto.MediaData = proto.MediaData || createEmptyMessage("MediaData")

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

    proto.MemberLabel = proto.MemberLabel || createEmptyMessage("MemberLabel")

    proto.Message = (function() {

        function Message(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Message.prototype.conversation = null;
        Message.prototype.senderKeyDistributionMessage = null;
        Message.prototype.imageMessage = null;
        Message.prototype.contactMessage = null;
        Message.prototype.locationMessage = null;
        Message.prototype.extendedTextMessage = null;
        Message.prototype.documentMessage = null;
        Message.prototype.audioMessage = null;
        Message.prototype.videoMessage = null;
        Message.prototype.call = null;
        Message.prototype.chat = null;
        Message.prototype.protocolMessage = null;
        Message.prototype.contactsArrayMessage = null;
        Message.prototype.highlyStructuredMessage = null;
        Message.prototype.fastRatchetKeySenderKeyDistributionMessage = null;
        Message.prototype.sendPaymentMessage = null;
        Message.prototype.liveLocationMessage = null;
        Message.prototype.requestPaymentMessage = null;
        Message.prototype.declinePaymentRequestMessage = null;
        Message.prototype.cancelPaymentRequestMessage = null;
        Message.prototype.templateMessage = null;
        Message.prototype.stickerMessage = null;
        Message.prototype.groupInviteMessage = null;
        Message.prototype.templateButtonReplyMessage = null;
        Message.prototype.productMessage = null;
        Message.prototype.deviceSentMessage = null;
        Message.prototype.messageContextInfo = null;
        Message.prototype.listMessage = null;
        Message.prototype.viewOnceMessage = null;
        Message.prototype.orderMessage = null;
        Message.prototype.listResponseMessage = null;
        Message.prototype.ephemeralMessage = null;
        Message.prototype.invoiceMessage = null;
        Message.prototype.buttonsMessage = null;
        Message.prototype.buttonsResponseMessage = null;
        Message.prototype.paymentInviteMessage = null;
        Message.prototype.interactiveMessage = null;
        Message.prototype.reactionMessage = null;
        Message.prototype.stickerSyncRmrMessage = null;
        Message.prototype.interactiveResponseMessage = null;
        Message.prototype.pollCreationMessage = null;
        Message.prototype.pollUpdateMessage = null;
        Message.prototype.keepInChatMessage = null;
        Message.prototype.documentWithCaptionMessage = null;
        Message.prototype.requestPhoneNumberMessage = null;
        Message.prototype.viewOnceMessageV2 = null;
        Message.prototype.encReactionMessage = null;
        Message.prototype.editedMessage = null;
        Message.prototype.viewOnceMessageV2Extension = null;
        Message.prototype.pollCreationMessageV2 = null;
        Message.prototype.scheduledCallCreationMessage = null;
        Message.prototype.groupMentionedMessage = null;
        Message.prototype.pinInChatMessage = null;
        Message.prototype.pollCreationMessageV3 = null;
        Message.prototype.scheduledCallEditMessage = null;
        Message.prototype.ptvMessage = null;
        Message.prototype.botInvokeMessage = null;
        Message.prototype.callLogMesssage = null;
        Message.prototype.messageHistoryBundle = null;
        Message.prototype.encCommentMessage = null;
        Message.prototype.bcallMessage = null;
        Message.prototype.lottieStickerMessage = null;
        Message.prototype.eventMessage = null;
        Message.prototype.encEventResponseMessage = null;
        Message.prototype.commentMessage = null;
        Message.prototype.newsletterAdminInviteMessage = null;
        Message.prototype.placeholderMessage = null;
        Message.prototype.secretEncryptedMessage = null;
        Message.prototype.albumMessage = null;
        Message.prototype.eventCoverImage = null;
        Message.prototype.stickerPackMessage = null;
        Message.prototype.statusMentionMessage = null;
        Message.prototype.pollResultSnapshotMessage = null;
        Message.prototype.pollCreationOptionImageMessage = null;
        Message.prototype.associatedChildMessage = null;
        Message.prototype.groupStatusMentionMessage = null;
        Message.prototype.pollCreationMessageV4 = null;
        Message.prototype.statusAddYours = null;
        Message.prototype.groupStatusMessage = null;
        Message.prototype.richResponseMessage = null;
        Message.prototype.statusNotificationMessage = null;
        Message.prototype.limitSharingMessage = null;
        Message.prototype.botTaskMessage = null;
        Message.prototype.questionMessage = null;
        Message.prototype.messageHistoryNotice = null;
        Message.prototype.groupStatusMessageV2 = null;
        Message.prototype.botForwardedMessage = null;
        Message.prototype.statusQuestionAnswerMessage = null;
        Message.prototype.questionReplyMessage = null;
        Message.prototype.questionResponseMessage = null;
        Message.prototype.statusQuotedMessage = null;
        Message.prototype.statusStickerInteractionMessage = null;
        Message.prototype.pollCreationMessageV5 = null;
        Message.prototype.newsletterFollowerInviteMessageV2 = null;
        Message.prototype.pollResultSnapshotMessageV3 = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_conversation", {
            get: $util.oneOfGetter($oneOfFields = ["conversation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_senderKeyDistributionMessage", {
            get: $util.oneOfGetter($oneOfFields = ["senderKeyDistributionMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_imageMessage", {
            get: $util.oneOfGetter($oneOfFields = ["imageMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_contactMessage", {
            get: $util.oneOfGetter($oneOfFields = ["contactMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_locationMessage", {
            get: $util.oneOfGetter($oneOfFields = ["locationMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_extendedTextMessage", {
            get: $util.oneOfGetter($oneOfFields = ["extendedTextMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_documentMessage", {
            get: $util.oneOfGetter($oneOfFields = ["documentMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_audioMessage", {
            get: $util.oneOfGetter($oneOfFields = ["audioMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_videoMessage", {
            get: $util.oneOfGetter($oneOfFields = ["videoMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_call", {
            get: $util.oneOfGetter($oneOfFields = ["call"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_chat", {
            get: $util.oneOfGetter($oneOfFields = ["chat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_protocolMessage", {
            get: $util.oneOfGetter($oneOfFields = ["protocolMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_contactsArrayMessage", {
            get: $util.oneOfGetter($oneOfFields = ["contactsArrayMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_highlyStructuredMessage", {
            get: $util.oneOfGetter($oneOfFields = ["highlyStructuredMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_fastRatchetKeySenderKeyDistributionMessage", {
            get: $util.oneOfGetter($oneOfFields = ["fastRatchetKeySenderKeyDistributionMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_sendPaymentMessage", {
            get: $util.oneOfGetter($oneOfFields = ["sendPaymentMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_liveLocationMessage", {
            get: $util.oneOfGetter($oneOfFields = ["liveLocationMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_requestPaymentMessage", {
            get: $util.oneOfGetter($oneOfFields = ["requestPaymentMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_declinePaymentRequestMessage", {
            get: $util.oneOfGetter($oneOfFields = ["declinePaymentRequestMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_cancelPaymentRequestMessage", {
            get: $util.oneOfGetter($oneOfFields = ["cancelPaymentRequestMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_templateMessage", {
            get: $util.oneOfGetter($oneOfFields = ["templateMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_stickerMessage", {
            get: $util.oneOfGetter($oneOfFields = ["stickerMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_groupInviteMessage", {
            get: $util.oneOfGetter($oneOfFields = ["groupInviteMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_templateButtonReplyMessage", {
            get: $util.oneOfGetter($oneOfFields = ["templateButtonReplyMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_productMessage", {
            get: $util.oneOfGetter($oneOfFields = ["productMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_deviceSentMessage", {
            get: $util.oneOfGetter($oneOfFields = ["deviceSentMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_messageContextInfo", {
            get: $util.oneOfGetter($oneOfFields = ["messageContextInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_listMessage", {
            get: $util.oneOfGetter($oneOfFields = ["listMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_viewOnceMessage", {
            get: $util.oneOfGetter($oneOfFields = ["viewOnceMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_orderMessage", {
            get: $util.oneOfGetter($oneOfFields = ["orderMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_listResponseMessage", {
            get: $util.oneOfGetter($oneOfFields = ["listResponseMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_ephemeralMessage", {
            get: $util.oneOfGetter($oneOfFields = ["ephemeralMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_invoiceMessage", {
            get: $util.oneOfGetter($oneOfFields = ["invoiceMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_buttonsMessage", {
            get: $util.oneOfGetter($oneOfFields = ["buttonsMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_buttonsResponseMessage", {
            get: $util.oneOfGetter($oneOfFields = ["buttonsResponseMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_paymentInviteMessage", {
            get: $util.oneOfGetter($oneOfFields = ["paymentInviteMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_interactiveMessage", {
            get: $util.oneOfGetter($oneOfFields = ["interactiveMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_reactionMessage", {
            get: $util.oneOfGetter($oneOfFields = ["reactionMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_stickerSyncRmrMessage", {
            get: $util.oneOfGetter($oneOfFields = ["stickerSyncRmrMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_interactiveResponseMessage", {
            get: $util.oneOfGetter($oneOfFields = ["interactiveResponseMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_pollCreationMessage", {
            get: $util.oneOfGetter($oneOfFields = ["pollCreationMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_pollUpdateMessage", {
            get: $util.oneOfGetter($oneOfFields = ["pollUpdateMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_keepInChatMessage", {
            get: $util.oneOfGetter($oneOfFields = ["keepInChatMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_documentWithCaptionMessage", {
            get: $util.oneOfGetter($oneOfFields = ["documentWithCaptionMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_requestPhoneNumberMessage", {
            get: $util.oneOfGetter($oneOfFields = ["requestPhoneNumberMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_viewOnceMessageV2", {
            get: $util.oneOfGetter($oneOfFields = ["viewOnceMessageV2"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_encReactionMessage", {
            get: $util.oneOfGetter($oneOfFields = ["encReactionMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_editedMessage", {
            get: $util.oneOfGetter($oneOfFields = ["editedMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_viewOnceMessageV2Extension", {
            get: $util.oneOfGetter($oneOfFields = ["viewOnceMessageV2Extension"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_pollCreationMessageV2", {
            get: $util.oneOfGetter($oneOfFields = ["pollCreationMessageV2"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_scheduledCallCreationMessage", {
            get: $util.oneOfGetter($oneOfFields = ["scheduledCallCreationMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_groupMentionedMessage", {
            get: $util.oneOfGetter($oneOfFields = ["groupMentionedMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_pinInChatMessage", {
            get: $util.oneOfGetter($oneOfFields = ["pinInChatMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_pollCreationMessageV3", {
            get: $util.oneOfGetter($oneOfFields = ["pollCreationMessageV3"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_scheduledCallEditMessage", {
            get: $util.oneOfGetter($oneOfFields = ["scheduledCallEditMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_ptvMessage", {
            get: $util.oneOfGetter($oneOfFields = ["ptvMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_botInvokeMessage", {
            get: $util.oneOfGetter($oneOfFields = ["botInvokeMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_callLogMesssage", {
            get: $util.oneOfGetter($oneOfFields = ["callLogMesssage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_messageHistoryBundle", {
            get: $util.oneOfGetter($oneOfFields = ["messageHistoryBundle"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_encCommentMessage", {
            get: $util.oneOfGetter($oneOfFields = ["encCommentMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_bcallMessage", {
            get: $util.oneOfGetter($oneOfFields = ["bcallMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_lottieStickerMessage", {
            get: $util.oneOfGetter($oneOfFields = ["lottieStickerMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_eventMessage", {
            get: $util.oneOfGetter($oneOfFields = ["eventMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_encEventResponseMessage", {
            get: $util.oneOfGetter($oneOfFields = ["encEventResponseMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_commentMessage", {
            get: $util.oneOfGetter($oneOfFields = ["commentMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_newsletterAdminInviteMessage", {
            get: $util.oneOfGetter($oneOfFields = ["newsletterAdminInviteMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_placeholderMessage", {
            get: $util.oneOfGetter($oneOfFields = ["placeholderMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_secretEncryptedMessage", {
            get: $util.oneOfGetter($oneOfFields = ["secretEncryptedMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_albumMessage", {
            get: $util.oneOfGetter($oneOfFields = ["albumMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_eventCoverImage", {
            get: $util.oneOfGetter($oneOfFields = ["eventCoverImage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_stickerPackMessage", {
            get: $util.oneOfGetter($oneOfFields = ["stickerPackMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_statusMentionMessage", {
            get: $util.oneOfGetter($oneOfFields = ["statusMentionMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_pollResultSnapshotMessage", {
            get: $util.oneOfGetter($oneOfFields = ["pollResultSnapshotMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_pollCreationOptionImageMessage", {
            get: $util.oneOfGetter($oneOfFields = ["pollCreationOptionImageMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_associatedChildMessage", {
            get: $util.oneOfGetter($oneOfFields = ["associatedChildMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_groupStatusMentionMessage", {
            get: $util.oneOfGetter($oneOfFields = ["groupStatusMentionMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_pollCreationMessageV4", {
            get: $util.oneOfGetter($oneOfFields = ["pollCreationMessageV4"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_statusAddYours", {
            get: $util.oneOfGetter($oneOfFields = ["statusAddYours"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_groupStatusMessage", {
            get: $util.oneOfGetter($oneOfFields = ["groupStatusMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_richResponseMessage", {
            get: $util.oneOfGetter($oneOfFields = ["richResponseMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_statusNotificationMessage", {
            get: $util.oneOfGetter($oneOfFields = ["statusNotificationMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_limitSharingMessage", {
            get: $util.oneOfGetter($oneOfFields = ["limitSharingMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_botTaskMessage", {
            get: $util.oneOfGetter($oneOfFields = ["botTaskMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_questionMessage", {
            get: $util.oneOfGetter($oneOfFields = ["questionMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_messageHistoryNotice", {
            get: $util.oneOfGetter($oneOfFields = ["messageHistoryNotice"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_groupStatusMessageV2", {
            get: $util.oneOfGetter($oneOfFields = ["groupStatusMessageV2"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_botForwardedMessage", {
            get: $util.oneOfGetter($oneOfFields = ["botForwardedMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_statusQuestionAnswerMessage", {
            get: $util.oneOfGetter($oneOfFields = ["statusQuestionAnswerMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_questionReplyMessage", {
            get: $util.oneOfGetter($oneOfFields = ["questionReplyMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_questionResponseMessage", {
            get: $util.oneOfGetter($oneOfFields = ["questionResponseMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_statusQuotedMessage", {
            get: $util.oneOfGetter($oneOfFields = ["statusQuotedMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_statusStickerInteractionMessage", {
            get: $util.oneOfGetter($oneOfFields = ["statusStickerInteractionMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_pollCreationMessageV5", {
            get: $util.oneOfGetter($oneOfFields = ["pollCreationMessageV5"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_newsletterFollowerInviteMessageV2", {
            get: $util.oneOfGetter($oneOfFields = ["newsletterFollowerInviteMessageV2"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Message.prototype, "_pollResultSnapshotMessageV3", {
            get: $util.oneOfGetter($oneOfFields = ["pollResultSnapshotMessageV3"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Message.create = function create(properties) {
            return new Message(properties);
        };

        Message.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.conversation != null && Object.hasOwnProperty.call(m, "conversation"))
                w.uint32(10).string(m.conversation);
            if (m.senderKeyDistributionMessage != null && Object.hasOwnProperty.call(m, "senderKeyDistributionMessage"))
                $root.proto.Message.SenderKeyDistributionMessage.encode(m.senderKeyDistributionMessage, w.uint32(18).fork(), q + 1).ldelim();
            if (m.imageMessage != null && Object.hasOwnProperty.call(m, "imageMessage"))
                $root.proto.Message.ImageMessage.encode(m.imageMessage, w.uint32(26).fork(), q + 1).ldelim();
            if (m.contactMessage != null && Object.hasOwnProperty.call(m, "contactMessage"))
                $root.proto.Message.ContactMessage.encode(m.contactMessage, w.uint32(34).fork(), q + 1).ldelim();
            if (m.locationMessage != null && Object.hasOwnProperty.call(m, "locationMessage"))
                $root.proto.Message.LocationMessage.encode(m.locationMessage, w.uint32(42).fork(), q + 1).ldelim();
            if (m.extendedTextMessage != null && Object.hasOwnProperty.call(m, "extendedTextMessage"))
                $root.proto.Message.ExtendedTextMessage.encode(m.extendedTextMessage, w.uint32(50).fork(), q + 1).ldelim();
            if (m.documentMessage != null && Object.hasOwnProperty.call(m, "documentMessage"))
                $root.proto.Message.DocumentMessage.encode(m.documentMessage, w.uint32(58).fork(), q + 1).ldelim();
            if (m.audioMessage != null && Object.hasOwnProperty.call(m, "audioMessage"))
                $root.proto.Message.AudioMessage.encode(m.audioMessage, w.uint32(66).fork(), q + 1).ldelim();
            if (m.videoMessage != null && Object.hasOwnProperty.call(m, "videoMessage"))
                $root.proto.Message.VideoMessage.encode(m.videoMessage, w.uint32(74).fork(), q + 1).ldelim();
            if (m.call != null && Object.hasOwnProperty.call(m, "call"))
                $root.proto.Message.Call.encode(m.call, w.uint32(82).fork(), q + 1).ldelim();
            if (m.chat != null && Object.hasOwnProperty.call(m, "chat"))
                $root.proto.Message.Chat.encode(m.chat, w.uint32(90).fork(), q + 1).ldelim();
            if (m.protocolMessage != null && Object.hasOwnProperty.call(m, "protocolMessage"))
                $root.proto.Message.ProtocolMessage.encode(m.protocolMessage, w.uint32(98).fork(), q + 1).ldelim();
            if (m.contactsArrayMessage != null && Object.hasOwnProperty.call(m, "contactsArrayMessage"))
                $root.proto.Message.ContactsArrayMessage.encode(m.contactsArrayMessage, w.uint32(106).fork(), q + 1).ldelim();
            if (m.highlyStructuredMessage != null && Object.hasOwnProperty.call(m, "highlyStructuredMessage"))
                $root.proto.Message.HighlyStructuredMessage.encode(m.highlyStructuredMessage, w.uint32(114).fork(), q + 1).ldelim();
            if (m.fastRatchetKeySenderKeyDistributionMessage != null && Object.hasOwnProperty.call(m, "fastRatchetKeySenderKeyDistributionMessage"))
                $root.proto.Message.SenderKeyDistributionMessage.encode(m.fastRatchetKeySenderKeyDistributionMessage, w.uint32(122).fork(), q + 1).ldelim();
            if (m.sendPaymentMessage != null && Object.hasOwnProperty.call(m, "sendPaymentMessage"))
                $root.proto.Message.SendPaymentMessage.encode(m.sendPaymentMessage, w.uint32(130).fork(), q + 1).ldelim();
            if (m.liveLocationMessage != null && Object.hasOwnProperty.call(m, "liveLocationMessage"))
                $root.proto.Message.LiveLocationMessage.encode(m.liveLocationMessage, w.uint32(146).fork(), q + 1).ldelim();
            if (m.requestPaymentMessage != null && Object.hasOwnProperty.call(m, "requestPaymentMessage"))
                $root.proto.Message.RequestPaymentMessage.encode(m.requestPaymentMessage, w.uint32(178).fork(), q + 1).ldelim();
            if (m.declinePaymentRequestMessage != null && Object.hasOwnProperty.call(m, "declinePaymentRequestMessage"))
                $root.proto.Message.DeclinePaymentRequestMessage.encode(m.declinePaymentRequestMessage, w.uint32(186).fork(), q + 1).ldelim();
            if (m.cancelPaymentRequestMessage != null && Object.hasOwnProperty.call(m, "cancelPaymentRequestMessage"))
                $root.proto.Message.CancelPaymentRequestMessage.encode(m.cancelPaymentRequestMessage, w.uint32(194).fork(), q + 1).ldelim();
            if (m.templateMessage != null && Object.hasOwnProperty.call(m, "templateMessage"))
                $root.proto.Message.TemplateMessage.encode(m.templateMessage, w.uint32(202).fork(), q + 1).ldelim();
            if (m.stickerMessage != null && Object.hasOwnProperty.call(m, "stickerMessage"))
                $root.proto.Message.StickerMessage.encode(m.stickerMessage, w.uint32(210).fork(), q + 1).ldelim();
            if (m.groupInviteMessage != null && Object.hasOwnProperty.call(m, "groupInviteMessage"))
                $root.proto.Message.GroupInviteMessage.encode(m.groupInviteMessage, w.uint32(226).fork(), q + 1).ldelim();
            if (m.templateButtonReplyMessage != null && Object.hasOwnProperty.call(m, "templateButtonReplyMessage"))
                $root.proto.Message.TemplateButtonReplyMessage.encode(m.templateButtonReplyMessage, w.uint32(234).fork(), q + 1).ldelim();
            if (m.productMessage != null && Object.hasOwnProperty.call(m, "productMessage"))
                $root.proto.Message.ProductMessage.encode(m.productMessage, w.uint32(242).fork(), q + 1).ldelim();
            if (m.deviceSentMessage != null && Object.hasOwnProperty.call(m, "deviceSentMessage"))
                $root.proto.Message.DeviceSentMessage.encode(m.deviceSentMessage, w.uint32(250).fork(), q + 1).ldelim();
            if (m.messageContextInfo != null && Object.hasOwnProperty.call(m, "messageContextInfo"))
                $root.proto.MessageContextInfo.encode(m.messageContextInfo, w.uint32(282).fork(), q + 1).ldelim();
            if (m.listMessage != null && Object.hasOwnProperty.call(m, "listMessage"))
                $root.proto.Message.ListMessage.encode(m.listMessage, w.uint32(290).fork(), q + 1).ldelim();
            if (m.viewOnceMessage != null && Object.hasOwnProperty.call(m, "viewOnceMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.viewOnceMessage, w.uint32(298).fork(), q + 1).ldelim();
            if (m.orderMessage != null && Object.hasOwnProperty.call(m, "orderMessage"))
                $root.proto.Message.OrderMessage.encode(m.orderMessage, w.uint32(306).fork(), q + 1).ldelim();
            if (m.listResponseMessage != null && Object.hasOwnProperty.call(m, "listResponseMessage"))
                $root.proto.Message.ListResponseMessage.encode(m.listResponseMessage, w.uint32(314).fork(), q + 1).ldelim();
            if (m.ephemeralMessage != null && Object.hasOwnProperty.call(m, "ephemeralMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.ephemeralMessage, w.uint32(322).fork(), q + 1).ldelim();
            if (m.invoiceMessage != null && Object.hasOwnProperty.call(m, "invoiceMessage"))
                $root.proto.Message.InvoiceMessage.encode(m.invoiceMessage, w.uint32(330).fork(), q + 1).ldelim();
            if (m.buttonsMessage != null && Object.hasOwnProperty.call(m, "buttonsMessage"))
                $root.proto.Message.ButtonsMessage.encode(m.buttonsMessage, w.uint32(338).fork(), q + 1).ldelim();
            if (m.buttonsResponseMessage != null && Object.hasOwnProperty.call(m, "buttonsResponseMessage"))
                $root.proto.Message.ButtonsResponseMessage.encode(m.buttonsResponseMessage, w.uint32(346).fork(), q + 1).ldelim();
            if (m.paymentInviteMessage != null && Object.hasOwnProperty.call(m, "paymentInviteMessage"))
                $root.proto.Message.PaymentInviteMessage.encode(m.paymentInviteMessage, w.uint32(354).fork(), q + 1).ldelim();
            if (m.interactiveMessage != null && Object.hasOwnProperty.call(m, "interactiveMessage"))
                $root.proto.Message.InteractiveMessage.encode(m.interactiveMessage, w.uint32(362).fork(), q + 1).ldelim();
            if (m.reactionMessage != null && Object.hasOwnProperty.call(m, "reactionMessage"))
                $root.proto.Message.ReactionMessage.encode(m.reactionMessage, w.uint32(370).fork(), q + 1).ldelim();
            if (m.stickerSyncRmrMessage != null && Object.hasOwnProperty.call(m, "stickerSyncRmrMessage"))
                $root.proto.Message.StickerSyncRMRMessage.encode(m.stickerSyncRmrMessage, w.uint32(378).fork(), q + 1).ldelim();
            if (m.interactiveResponseMessage != null && Object.hasOwnProperty.call(m, "interactiveResponseMessage"))
                $root.proto.Message.InteractiveResponseMessage.encode(m.interactiveResponseMessage, w.uint32(386).fork(), q + 1).ldelim();
            if (m.pollCreationMessage != null && Object.hasOwnProperty.call(m, "pollCreationMessage"))
                $root.proto.Message.PollCreationMessage.encode(m.pollCreationMessage, w.uint32(394).fork(), q + 1).ldelim();
            if (m.pollUpdateMessage != null && Object.hasOwnProperty.call(m, "pollUpdateMessage"))
                $root.proto.Message.PollUpdateMessage.encode(m.pollUpdateMessage, w.uint32(402).fork(), q + 1).ldelim();
            if (m.keepInChatMessage != null && Object.hasOwnProperty.call(m, "keepInChatMessage"))
                $root.proto.Message.KeepInChatMessage.encode(m.keepInChatMessage, w.uint32(410).fork(), q + 1).ldelim();
            if (m.documentWithCaptionMessage != null && Object.hasOwnProperty.call(m, "documentWithCaptionMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.documentWithCaptionMessage, w.uint32(426).fork(), q + 1).ldelim();
            if (m.requestPhoneNumberMessage != null && Object.hasOwnProperty.call(m, "requestPhoneNumberMessage"))
                $root.proto.Message.RequestPhoneNumberMessage.encode(m.requestPhoneNumberMessage, w.uint32(434).fork(), q + 1).ldelim();
            if (m.viewOnceMessageV2 != null && Object.hasOwnProperty.call(m, "viewOnceMessageV2"))
                $root.proto.Message.FutureProofMessage.encode(m.viewOnceMessageV2, w.uint32(442).fork(), q + 1).ldelim();
            if (m.encReactionMessage != null && Object.hasOwnProperty.call(m, "encReactionMessage"))
                $root.proto.Message.EncReactionMessage.encode(m.encReactionMessage, w.uint32(450).fork(), q + 1).ldelim();
            if (m.editedMessage != null && Object.hasOwnProperty.call(m, "editedMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.editedMessage, w.uint32(466).fork(), q + 1).ldelim();
            if (m.viewOnceMessageV2Extension != null && Object.hasOwnProperty.call(m, "viewOnceMessageV2Extension"))
                $root.proto.Message.FutureProofMessage.encode(m.viewOnceMessageV2Extension, w.uint32(474).fork(), q + 1).ldelim();
            if (m.pollCreationMessageV2 != null && Object.hasOwnProperty.call(m, "pollCreationMessageV2"))
                $root.proto.Message.PollCreationMessage.encode(m.pollCreationMessageV2, w.uint32(482).fork(), q + 1).ldelim();
            if (m.scheduledCallCreationMessage != null && Object.hasOwnProperty.call(m, "scheduledCallCreationMessage"))
                $root.proto.Message.ScheduledCallCreationMessage.encode(m.scheduledCallCreationMessage, w.uint32(490).fork(), q + 1).ldelim();
            if (m.groupMentionedMessage != null && Object.hasOwnProperty.call(m, "groupMentionedMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.groupMentionedMessage, w.uint32(498).fork(), q + 1).ldelim();
            if (m.pinInChatMessage != null && Object.hasOwnProperty.call(m, "pinInChatMessage"))
                $root.proto.Message.PinInChatMessage.encode(m.pinInChatMessage, w.uint32(506).fork(), q + 1).ldelim();
            if (m.pollCreationMessageV3 != null && Object.hasOwnProperty.call(m, "pollCreationMessageV3"))
                $root.proto.Message.PollCreationMessage.encode(m.pollCreationMessageV3, w.uint32(514).fork(), q + 1).ldelim();
            if (m.scheduledCallEditMessage != null && Object.hasOwnProperty.call(m, "scheduledCallEditMessage"))
                $root.proto.Message.ScheduledCallEditMessage.encode(m.scheduledCallEditMessage, w.uint32(522).fork(), q + 1).ldelim();
            if (m.ptvMessage != null && Object.hasOwnProperty.call(m, "ptvMessage"))
                $root.proto.Message.VideoMessage.encode(m.ptvMessage, w.uint32(530).fork(), q + 1).ldelim();
            if (m.botInvokeMessage != null && Object.hasOwnProperty.call(m, "botInvokeMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.botInvokeMessage, w.uint32(538).fork(), q + 1).ldelim();
            if (m.callLogMesssage != null && Object.hasOwnProperty.call(m, "callLogMesssage"))
                $root.proto.Message.CallLogMessage.encode(m.callLogMesssage, w.uint32(554).fork(), q + 1).ldelim();
            if (m.messageHistoryBundle != null && Object.hasOwnProperty.call(m, "messageHistoryBundle"))
                $root.proto.Message.MessageHistoryBundle.encode(m.messageHistoryBundle, w.uint32(562).fork(), q + 1).ldelim();
            if (m.encCommentMessage != null && Object.hasOwnProperty.call(m, "encCommentMessage"))
                $root.proto.Message.EncCommentMessage.encode(m.encCommentMessage, w.uint32(570).fork(), q + 1).ldelim();
            if (m.bcallMessage != null && Object.hasOwnProperty.call(m, "bcallMessage"))
                $root.proto.Message.BCallMessage.encode(m.bcallMessage, w.uint32(578).fork(), q + 1).ldelim();
            if (m.lottieStickerMessage != null && Object.hasOwnProperty.call(m, "lottieStickerMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.lottieStickerMessage, w.uint32(594).fork(), q + 1).ldelim();
            if (m.eventMessage != null && Object.hasOwnProperty.call(m, "eventMessage"))
                $root.proto.Message.EventMessage.encode(m.eventMessage, w.uint32(602).fork(), q + 1).ldelim();
            if (m.encEventResponseMessage != null && Object.hasOwnProperty.call(m, "encEventResponseMessage"))
                $root.proto.Message.EncEventResponseMessage.encode(m.encEventResponseMessage, w.uint32(610).fork(), q + 1).ldelim();
            if (m.commentMessage != null && Object.hasOwnProperty.call(m, "commentMessage"))
                $root.proto.Message.CommentMessage.encode(m.commentMessage, w.uint32(618).fork(), q + 1).ldelim();
            if (m.newsletterAdminInviteMessage != null && Object.hasOwnProperty.call(m, "newsletterAdminInviteMessage"))
                $root.proto.Message.NewsletterAdminInviteMessage.encode(m.newsletterAdminInviteMessage, w.uint32(626).fork(), q + 1).ldelim();
            if (m.placeholderMessage != null && Object.hasOwnProperty.call(m, "placeholderMessage"))
                $root.proto.Message.PlaceholderMessage.encode(m.placeholderMessage, w.uint32(642).fork(), q + 1).ldelim();
            if (m.secretEncryptedMessage != null && Object.hasOwnProperty.call(m, "secretEncryptedMessage"))
                $root.proto.Message.SecretEncryptedMessage.encode(m.secretEncryptedMessage, w.uint32(658).fork(), q + 1).ldelim();
            if (m.albumMessage != null && Object.hasOwnProperty.call(m, "albumMessage"))
                $root.proto.Message.AlbumMessage.encode(m.albumMessage, w.uint32(666).fork(), q + 1).ldelim();
            if (m.eventCoverImage != null && Object.hasOwnProperty.call(m, "eventCoverImage"))
                $root.proto.Message.FutureProofMessage.encode(m.eventCoverImage, w.uint32(682).fork(), q + 1).ldelim();
            if (m.stickerPackMessage != null && Object.hasOwnProperty.call(m, "stickerPackMessage"))
                $root.proto.Message.StickerPackMessage.encode(m.stickerPackMessage, w.uint32(690).fork(), q + 1).ldelim();
            if (m.statusMentionMessage != null && Object.hasOwnProperty.call(m, "statusMentionMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.statusMentionMessage, w.uint32(698).fork(), q + 1).ldelim();
            if (m.pollResultSnapshotMessage != null && Object.hasOwnProperty.call(m, "pollResultSnapshotMessage"))
                $root.proto.Message.PollResultSnapshotMessage.encode(m.pollResultSnapshotMessage, w.uint32(706).fork(), q + 1).ldelim();
            if (m.pollCreationOptionImageMessage != null && Object.hasOwnProperty.call(m, "pollCreationOptionImageMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.pollCreationOptionImageMessage, w.uint32(722).fork(), q + 1).ldelim();
            if (m.associatedChildMessage != null && Object.hasOwnProperty.call(m, "associatedChildMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.associatedChildMessage, w.uint32(730).fork(), q + 1).ldelim();
            if (m.groupStatusMentionMessage != null && Object.hasOwnProperty.call(m, "groupStatusMentionMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.groupStatusMentionMessage, w.uint32(738).fork(), q + 1).ldelim();
            if (m.pollCreationMessageV4 != null && Object.hasOwnProperty.call(m, "pollCreationMessageV4"))
                $root.proto.Message.FutureProofMessage.encode(m.pollCreationMessageV4, w.uint32(746).fork(), q + 1).ldelim();
            if (m.statusAddYours != null && Object.hasOwnProperty.call(m, "statusAddYours"))
                $root.proto.Message.FutureProofMessage.encode(m.statusAddYours, w.uint32(762).fork(), q + 1).ldelim();
            if (m.groupStatusMessage != null && Object.hasOwnProperty.call(m, "groupStatusMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.groupStatusMessage, w.uint32(770).fork(), q + 1).ldelim();
            if (m.richResponseMessage != null && Object.hasOwnProperty.call(m, "richResponseMessage"))
                $root.proto.AIRichResponseMessage.encode(m.richResponseMessage, w.uint32(778).fork(), q + 1).ldelim();
            if (m.statusNotificationMessage != null && Object.hasOwnProperty.call(m, "statusNotificationMessage"))
                $root.proto.Message.StatusNotificationMessage.encode(m.statusNotificationMessage, w.uint32(786).fork(), q + 1).ldelim();
            if (m.limitSharingMessage != null && Object.hasOwnProperty.call(m, "limitSharingMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.limitSharingMessage, w.uint32(794).fork(), q + 1).ldelim();
            if (m.botTaskMessage != null && Object.hasOwnProperty.call(m, "botTaskMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.botTaskMessage, w.uint32(802).fork(), q + 1).ldelim();
            if (m.questionMessage != null && Object.hasOwnProperty.call(m, "questionMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.questionMessage, w.uint32(810).fork(), q + 1).ldelim();
            if (m.messageHistoryNotice != null && Object.hasOwnProperty.call(m, "messageHistoryNotice"))
                $root.proto.Message.MessageHistoryNotice.encode(m.messageHistoryNotice, w.uint32(818).fork(), q + 1).ldelim();
            if (m.groupStatusMessageV2 != null && Object.hasOwnProperty.call(m, "groupStatusMessageV2"))
                $root.proto.Message.FutureProofMessage.encode(m.groupStatusMessageV2, w.uint32(826).fork(), q + 1).ldelim();
            if (m.botForwardedMessage != null && Object.hasOwnProperty.call(m, "botForwardedMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.botForwardedMessage, w.uint32(834).fork(), q + 1).ldelim();
            if (m.statusQuestionAnswerMessage != null && Object.hasOwnProperty.call(m, "statusQuestionAnswerMessage"))
                $root.proto.Message.StatusQuestionAnswerMessage.encode(m.statusQuestionAnswerMessage, w.uint32(842).fork(), q + 1).ldelim();
            if (m.questionReplyMessage != null && Object.hasOwnProperty.call(m, "questionReplyMessage"))
                $root.proto.Message.FutureProofMessage.encode(m.questionReplyMessage, w.uint32(850).fork(), q + 1).ldelim();
            if (m.questionResponseMessage != null && Object.hasOwnProperty.call(m, "questionResponseMessage"))
                $root.proto.Message.QuestionResponseMessage.encode(m.questionResponseMessage, w.uint32(858).fork(), q + 1).ldelim();
            if (m.statusQuotedMessage != null && Object.hasOwnProperty.call(m, "statusQuotedMessage"))
                $root.proto.Message.StatusQuotedMessage.encode(m.statusQuotedMessage, w.uint32(874).fork(), q + 1).ldelim();
            if (m.statusStickerInteractionMessage != null && Object.hasOwnProperty.call(m, "statusStickerInteractionMessage"))
                $root.proto.Message.StatusStickerInteractionMessage.encode(m.statusStickerInteractionMessage, w.uint32(882).fork(), q + 1).ldelim();
            if (m.pollCreationMessageV5 != null && Object.hasOwnProperty.call(m, "pollCreationMessageV5"))
                $root.proto.Message.PollCreationMessage.encode(m.pollCreationMessageV5, w.uint32(890).fork(), q + 1).ldelim();
            if (m.newsletterFollowerInviteMessageV2 != null && Object.hasOwnProperty.call(m, "newsletterFollowerInviteMessageV2"))
                $root.proto.Message.NewsletterFollowerInviteMessage.encode(m.newsletterFollowerInviteMessageV2, w.uint32(906).fork(), q + 1).ldelim();
            if (m.pollResultSnapshotMessageV3 != null && Object.hasOwnProperty.call(m, "pollResultSnapshotMessageV3"))
                $root.proto.Message.PollResultSnapshotMessage.encode(m.pollResultSnapshotMessageV3, w.uint32(914).fork(), q + 1).ldelim();
            return w;
        };

        Message.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.conversation = r.string();
                        break;
                    }
                case 2: {
                        m.senderKeyDistributionMessage = $root.proto.Message.SenderKeyDistributionMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.imageMessage = $root.proto.Message.ImageMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 4: {
                        m.contactMessage = $root.proto.Message.ContactMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 5: {
                        m.locationMessage = $root.proto.Message.LocationMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 6: {
                        m.extendedTextMessage = $root.proto.Message.ExtendedTextMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 7: {
                        m.documentMessage = $root.proto.Message.DocumentMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 8: {
                        m.audioMessage = $root.proto.Message.AudioMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 9: {
                        m.videoMessage = $root.proto.Message.VideoMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 10: {
                        m.call = $root.proto.Message.Call.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 11: {
                        m.chat = $root.proto.Message.Chat.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 12: {
                        m.protocolMessage = $root.proto.Message.ProtocolMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 13: {
                        m.contactsArrayMessage = $root.proto.Message.ContactsArrayMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 14: {
                        m.highlyStructuredMessage = $root.proto.Message.HighlyStructuredMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 15: {
                        m.fastRatchetKeySenderKeyDistributionMessage = $root.proto.Message.SenderKeyDistributionMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 16: {
                        m.sendPaymentMessage = $root.proto.Message.SendPaymentMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 18: {
                        m.liveLocationMessage = $root.proto.Message.LiveLocationMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 22: {
                        m.requestPaymentMessage = $root.proto.Message.RequestPaymentMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 23: {
                        m.declinePaymentRequestMessage = $root.proto.Message.DeclinePaymentRequestMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 24: {
                        m.cancelPaymentRequestMessage = $root.proto.Message.CancelPaymentRequestMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 25: {
                        m.templateMessage = $root.proto.Message.TemplateMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 26: {
                        m.stickerMessage = $root.proto.Message.StickerMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 28: {
                        m.groupInviteMessage = $root.proto.Message.GroupInviteMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 29: {
                        m.templateButtonReplyMessage = $root.proto.Message.TemplateButtonReplyMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 30: {
                        m.productMessage = $root.proto.Message.ProductMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 31: {
                        m.deviceSentMessage = $root.proto.Message.DeviceSentMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 35: {
                        m.messageContextInfo = $root.proto.MessageContextInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 36: {
                        m.listMessage = $root.proto.Message.ListMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 37: {
                        m.viewOnceMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 38: {
                        m.orderMessage = $root.proto.Message.OrderMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 39: {
                        m.listResponseMessage = $root.proto.Message.ListResponseMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 40: {
                        m.ephemeralMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 41: {
                        m.invoiceMessage = $root.proto.Message.InvoiceMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 42: {
                        m.buttonsMessage = $root.proto.Message.ButtonsMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 43: {
                        m.buttonsResponseMessage = $root.proto.Message.ButtonsResponseMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 44: {
                        m.paymentInviteMessage = $root.proto.Message.PaymentInviteMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 45: {
                        m.interactiveMessage = $root.proto.Message.InteractiveMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 46: {
                        m.reactionMessage = $root.proto.Message.ReactionMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 47: {
                        m.stickerSyncRmrMessage = $root.proto.Message.StickerSyncRMRMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 48: {
                        m.interactiveResponseMessage = $root.proto.Message.InteractiveResponseMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 49: {
                        m.pollCreationMessage = $root.proto.Message.PollCreationMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 50: {
                        m.pollUpdateMessage = $root.proto.Message.PollUpdateMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 51: {
                        m.keepInChatMessage = $root.proto.Message.KeepInChatMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 53: {
                        m.documentWithCaptionMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 54: {
                        m.requestPhoneNumberMessage = $root.proto.Message.RequestPhoneNumberMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 55: {
                        m.viewOnceMessageV2 = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 56: {
                        m.encReactionMessage = $root.proto.Message.EncReactionMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 58: {
                        m.editedMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 59: {
                        m.viewOnceMessageV2Extension = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 60: {
                        m.pollCreationMessageV2 = $root.proto.Message.PollCreationMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 61: {
                        m.scheduledCallCreationMessage = $root.proto.Message.ScheduledCallCreationMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 62: {
                        m.groupMentionedMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 63: {
                        m.pinInChatMessage = $root.proto.Message.PinInChatMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 64: {
                        m.pollCreationMessageV3 = $root.proto.Message.PollCreationMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 65: {
                        m.scheduledCallEditMessage = $root.proto.Message.ScheduledCallEditMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 66: {
                        m.ptvMessage = $root.proto.Message.VideoMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 67: {
                        m.botInvokeMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 69: {
                        m.callLogMesssage = $root.proto.Message.CallLogMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 70: {
                        m.messageHistoryBundle = $root.proto.Message.MessageHistoryBundle.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 71: {
                        m.encCommentMessage = $root.proto.Message.EncCommentMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 72: {
                        m.bcallMessage = $root.proto.Message.BCallMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 74: {
                        m.lottieStickerMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 75: {
                        m.eventMessage = $root.proto.Message.EventMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 76: {
                        m.encEventResponseMessage = $root.proto.Message.EncEventResponseMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 77: {
                        m.commentMessage = $root.proto.Message.CommentMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 78: {
                        m.newsletterAdminInviteMessage = $root.proto.Message.NewsletterAdminInviteMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 80: {
                        m.placeholderMessage = $root.proto.Message.PlaceholderMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 82: {
                        m.secretEncryptedMessage = $root.proto.Message.SecretEncryptedMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 83: {
                        m.albumMessage = $root.proto.Message.AlbumMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 85: {
                        m.eventCoverImage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 86: {
                        m.stickerPackMessage = $root.proto.Message.StickerPackMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 87: {
                        m.statusMentionMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 88: {
                        m.pollResultSnapshotMessage = $root.proto.Message.PollResultSnapshotMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 90: {
                        m.pollCreationOptionImageMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 91: {
                        m.associatedChildMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 92: {
                        m.groupStatusMentionMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 93: {
                        m.pollCreationMessageV4 = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 95: {
                        m.statusAddYours = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 96: {
                        m.groupStatusMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 97: {
                        m.richResponseMessage = $root.proto.AIRichResponseMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 98: {
                        m.statusNotificationMessage = $root.proto.Message.StatusNotificationMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 99: {
                        m.limitSharingMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 100: {
                        m.botTaskMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 101: {
                        m.questionMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 102: {
                        m.messageHistoryNotice = $root.proto.Message.MessageHistoryNotice.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 103: {
                        m.groupStatusMessageV2 = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 104: {
                        m.botForwardedMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 105: {
                        m.statusQuestionAnswerMessage = $root.proto.Message.StatusQuestionAnswerMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 106: {
                        m.questionReplyMessage = $root.proto.Message.FutureProofMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 107: {
                        m.questionResponseMessage = $root.proto.Message.QuestionResponseMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 109: {
                        m.statusQuotedMessage = $root.proto.Message.StatusQuotedMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 110: {
                        m.statusStickerInteractionMessage = $root.proto.Message.StatusStickerInteractionMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 111: {
                        m.pollCreationMessageV5 = $root.proto.Message.PollCreationMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 113: {
                        m.newsletterFollowerInviteMessageV2 = $root.proto.Message.NewsletterFollowerInviteMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 114: {
                        m.pollResultSnapshotMessageV3 = $root.proto.Message.PollResultSnapshotMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        Message.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.Message)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.Message: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.Message();
            if (d.conversation != null) {
                m.conversation = String(d.conversation);
            }
            if (d.senderKeyDistributionMessage != null) {
                if (!$util.isObject(d.senderKeyDistributionMessage))
                    throw TypeError(".proto.Message.senderKeyDistributionMessage: object expected");
                m.senderKeyDistributionMessage = $root.proto.Message.SenderKeyDistributionMessage.fromObject(d.senderKeyDistributionMessage, n + 1);
            }
            if (d.imageMessage != null) {
                if (!$util.isObject(d.imageMessage))
                    throw TypeError(".proto.Message.imageMessage: object expected");
                m.imageMessage = $root.proto.Message.ImageMessage.fromObject(d.imageMessage, n + 1);
            }
            if (d.contactMessage != null) {
                if (!$util.isObject(d.contactMessage))
                    throw TypeError(".proto.Message.contactMessage: object expected");
                m.contactMessage = $root.proto.Message.ContactMessage.fromObject(d.contactMessage, n + 1);
            }
            if (d.locationMessage != null) {
                if (!$util.isObject(d.locationMessage))
                    throw TypeError(".proto.Message.locationMessage: object expected");
                m.locationMessage = $root.proto.Message.LocationMessage.fromObject(d.locationMessage, n + 1);
            }
            if (d.extendedTextMessage != null) {
                if (!$util.isObject(d.extendedTextMessage))
                    throw TypeError(".proto.Message.extendedTextMessage: object expected");
                m.extendedTextMessage = $root.proto.Message.ExtendedTextMessage.fromObject(d.extendedTextMessage, n + 1);
            }
            if (d.documentMessage != null) {
                if (!$util.isObject(d.documentMessage))
                    throw TypeError(".proto.Message.documentMessage: object expected");
                m.documentMessage = $root.proto.Message.DocumentMessage.fromObject(d.documentMessage, n + 1);
            }
            if (d.audioMessage != null) {
                if (!$util.isObject(d.audioMessage))
                    throw TypeError(".proto.Message.audioMessage: object expected");
                m.audioMessage = $root.proto.Message.AudioMessage.fromObject(d.audioMessage, n + 1);
            }
            if (d.videoMessage != null) {
                if (!$util.isObject(d.videoMessage))
                    throw TypeError(".proto.Message.videoMessage: object expected");
                m.videoMessage = $root.proto.Message.VideoMessage.fromObject(d.videoMessage, n + 1);
            }
            if (d.call != null) {
                if (!$util.isObject(d.call))
                    throw TypeError(".proto.Message.call: object expected");
                m.call = $root.proto.Message.Call.fromObject(d.call, n + 1);
            }
            if (d.chat != null) {
                if (!$util.isObject(d.chat))
                    throw TypeError(".proto.Message.chat: object expected");
                m.chat = $root.proto.Message.Chat.fromObject(d.chat, n + 1);
            }
            if (d.protocolMessage != null) {
                if (!$util.isObject(d.protocolMessage))
                    throw TypeError(".proto.Message.protocolMessage: object expected");
                m.protocolMessage = $root.proto.Message.ProtocolMessage.fromObject(d.protocolMessage, n + 1);
            }
            if (d.contactsArrayMessage != null) {
                if (!$util.isObject(d.contactsArrayMessage))
                    throw TypeError(".proto.Message.contactsArrayMessage: object expected");
                m.contactsArrayMessage = $root.proto.Message.ContactsArrayMessage.fromObject(d.contactsArrayMessage, n + 1);
            }
            if (d.highlyStructuredMessage != null) {
                if (!$util.isObject(d.highlyStructuredMessage))
                    throw TypeError(".proto.Message.highlyStructuredMessage: object expected");
                m.highlyStructuredMessage = $root.proto.Message.HighlyStructuredMessage.fromObject(d.highlyStructuredMessage, n + 1);
            }
            if (d.fastRatchetKeySenderKeyDistributionMessage != null) {
                if (!$util.isObject(d.fastRatchetKeySenderKeyDistributionMessage))
                    throw TypeError(".proto.Message.fastRatchetKeySenderKeyDistributionMessage: object expected");
                m.fastRatchetKeySenderKeyDistributionMessage = $root.proto.Message.SenderKeyDistributionMessage.fromObject(d.fastRatchetKeySenderKeyDistributionMessage, n + 1);
            }
            if (d.sendPaymentMessage != null) {
                if (!$util.isObject(d.sendPaymentMessage))
                    throw TypeError(".proto.Message.sendPaymentMessage: object expected");
                m.sendPaymentMessage = $root.proto.Message.SendPaymentMessage.fromObject(d.sendPaymentMessage, n + 1);
            }
            if (d.liveLocationMessage != null) {
                if (!$util.isObject(d.liveLocationMessage))
                    throw TypeError(".proto.Message.liveLocationMessage: object expected");
                m.liveLocationMessage = $root.proto.Message.LiveLocationMessage.fromObject(d.liveLocationMessage, n + 1);
            }
            if (d.requestPaymentMessage != null) {
                if (!$util.isObject(d.requestPaymentMessage))
                    throw TypeError(".proto.Message.requestPaymentMessage: object expected");
                m.requestPaymentMessage = $root.proto.Message.RequestPaymentMessage.fromObject(d.requestPaymentMessage, n + 1);
            }
            if (d.declinePaymentRequestMessage != null) {
                if (!$util.isObject(d.declinePaymentRequestMessage))
                    throw TypeError(".proto.Message.declinePaymentRequestMessage: object expected");
                m.declinePaymentRequestMessage = $root.proto.Message.DeclinePaymentRequestMessage.fromObject(d.declinePaymentRequestMessage, n + 1);
            }
            if (d.cancelPaymentRequestMessage != null) {
                if (!$util.isObject(d.cancelPaymentRequestMessage))
                    throw TypeError(".proto.Message.cancelPaymentRequestMessage: object expected");
                m.cancelPaymentRequestMessage = $root.proto.Message.CancelPaymentRequestMessage.fromObject(d.cancelPaymentRequestMessage, n + 1);
            }
            if (d.templateMessage != null) {
                if (!$util.isObject(d.templateMessage))
                    throw TypeError(".proto.Message.templateMessage: object expected");
                m.templateMessage = $root.proto.Message.TemplateMessage.fromObject(d.templateMessage, n + 1);
            }
            if (d.stickerMessage != null) {
                if (!$util.isObject(d.stickerMessage))
                    throw TypeError(".proto.Message.stickerMessage: object expected");
                m.stickerMessage = $root.proto.Message.StickerMessage.fromObject(d.stickerMessage, n + 1);
            }
            if (d.groupInviteMessage != null) {
                if (!$util.isObject(d.groupInviteMessage))
                    throw TypeError(".proto.Message.groupInviteMessage: object expected");
                m.groupInviteMessage = $root.proto.Message.GroupInviteMessage.fromObject(d.groupInviteMessage, n + 1);
            }
            if (d.templateButtonReplyMessage != null) {
                if (!$util.isObject(d.templateButtonReplyMessage))
                    throw TypeError(".proto.Message.templateButtonReplyMessage: object expected");
                m.templateButtonReplyMessage = $root.proto.Message.TemplateButtonReplyMessage.fromObject(d.templateButtonReplyMessage, n + 1);
            }
            if (d.productMessage != null) {
                if (!$util.isObject(d.productMessage))
                    throw TypeError(".proto.Message.productMessage: object expected");
                m.productMessage = $root.proto.Message.ProductMessage.fromObject(d.productMessage, n + 1);
            }
            if (d.deviceSentMessage != null) {
                if (!$util.isObject(d.deviceSentMessage))
                    throw TypeError(".proto.Message.deviceSentMessage: object expected");
                m.deviceSentMessage = $root.proto.Message.DeviceSentMessage.fromObject(d.deviceSentMessage, n + 1);
            }
            if (d.messageContextInfo != null) {
                if (!$util.isObject(d.messageContextInfo))
                    throw TypeError(".proto.Message.messageContextInfo: object expected");
                m.messageContextInfo = $root.proto.MessageContextInfo.fromObject(d.messageContextInfo, n + 1);
            }
            if (d.listMessage != null) {
                if (!$util.isObject(d.listMessage))
                    throw TypeError(".proto.Message.listMessage: object expected");
                m.listMessage = $root.proto.Message.ListMessage.fromObject(d.listMessage, n + 1);
            }
            if (d.viewOnceMessage != null) {
                if (!$util.isObject(d.viewOnceMessage))
                    throw TypeError(".proto.Message.viewOnceMessage: object expected");
                m.viewOnceMessage = $root.proto.Message.FutureProofMessage.fromObject(d.viewOnceMessage, n + 1);
            }
            if (d.orderMessage != null) {
                if (!$util.isObject(d.orderMessage))
                    throw TypeError(".proto.Message.orderMessage: object expected");
                m.orderMessage = $root.proto.Message.OrderMessage.fromObject(d.orderMessage, n + 1);
            }
            if (d.listResponseMessage != null) {
                if (!$util.isObject(d.listResponseMessage))
                    throw TypeError(".proto.Message.listResponseMessage: object expected");
                m.listResponseMessage = $root.proto.Message.ListResponseMessage.fromObject(d.listResponseMessage, n + 1);
            }
            if (d.ephemeralMessage != null) {
                if (!$util.isObject(d.ephemeralMessage))
                    throw TypeError(".proto.Message.ephemeralMessage: object expected");
                m.ephemeralMessage = $root.proto.Message.FutureProofMessage.fromObject(d.ephemeralMessage, n + 1);
            }
            if (d.invoiceMessage != null) {
                if (!$util.isObject(d.invoiceMessage))
                    throw TypeError(".proto.Message.invoiceMessage: object expected");
                m.invoiceMessage = $root.proto.Message.InvoiceMessage.fromObject(d.invoiceMessage, n + 1);
            }
            if (d.buttonsMessage != null) {
                if (!$util.isObject(d.buttonsMessage))
                    throw TypeError(".proto.Message.buttonsMessage: object expected");
                m.buttonsMessage = $root.proto.Message.ButtonsMessage.fromObject(d.buttonsMessage, n + 1);
            }
            if (d.buttonsResponseMessage != null) {
                if (!$util.isObject(d.buttonsResponseMessage))
                    throw TypeError(".proto.Message.buttonsResponseMessage: object expected");
                m.buttonsResponseMessage = $root.proto.Message.ButtonsResponseMessage.fromObject(d.buttonsResponseMessage, n + 1);
            }
            if (d.paymentInviteMessage != null) {
                if (!$util.isObject(d.paymentInviteMessage))
                    throw TypeError(".proto.Message.paymentInviteMessage: object expected");
                m.paymentInviteMessage = $root.proto.Message.PaymentInviteMessage.fromObject(d.paymentInviteMessage, n + 1);
            }
            if (d.interactiveMessage != null) {
                if (!$util.isObject(d.interactiveMessage))
                    throw TypeError(".proto.Message.interactiveMessage: object expected");
                m.interactiveMessage = $root.proto.Message.InteractiveMessage.fromObject(d.interactiveMessage, n + 1);
            }
            if (d.reactionMessage != null) {
                if (!$util.isObject(d.reactionMessage))
                    throw TypeError(".proto.Message.reactionMessage: object expected");
                m.reactionMessage = $root.proto.Message.ReactionMessage.fromObject(d.reactionMessage, n + 1);
            }
            if (d.stickerSyncRmrMessage != null) {
                if (!$util.isObject(d.stickerSyncRmrMessage))
                    throw TypeError(".proto.Message.stickerSyncRmrMessage: object expected");
                m.stickerSyncRmrMessage = $root.proto.Message.StickerSyncRMRMessage.fromObject(d.stickerSyncRmrMessage, n + 1);
            }
            if (d.interactiveResponseMessage != null) {
                if (!$util.isObject(d.interactiveResponseMessage))
                    throw TypeError(".proto.Message.interactiveResponseMessage: object expected");
                m.interactiveResponseMessage = $root.proto.Message.InteractiveResponseMessage.fromObject(d.interactiveResponseMessage, n + 1);
            }
            if (d.pollCreationMessage != null) {
                if (!$util.isObject(d.pollCreationMessage))
                    throw TypeError(".proto.Message.pollCreationMessage: object expected");
                m.pollCreationMessage = $root.proto.Message.PollCreationMessage.fromObject(d.pollCreationMessage, n + 1);
            }
            if (d.pollUpdateMessage != null) {
                if (!$util.isObject(d.pollUpdateMessage))
                    throw TypeError(".proto.Message.pollUpdateMessage: object expected");
                m.pollUpdateMessage = $root.proto.Message.PollUpdateMessage.fromObject(d.pollUpdateMessage, n + 1);
            }
            if (d.keepInChatMessage != null) {
                if (!$util.isObject(d.keepInChatMessage))
                    throw TypeError(".proto.Message.keepInChatMessage: object expected");
                m.keepInChatMessage = $root.proto.Message.KeepInChatMessage.fromObject(d.keepInChatMessage, n + 1);
            }
            if (d.documentWithCaptionMessage != null) {
                if (!$util.isObject(d.documentWithCaptionMessage))
                    throw TypeError(".proto.Message.documentWithCaptionMessage: object expected");
                m.documentWithCaptionMessage = $root.proto.Message.FutureProofMessage.fromObject(d.documentWithCaptionMessage, n + 1);
            }
            if (d.requestPhoneNumberMessage != null) {
                if (!$util.isObject(d.requestPhoneNumberMessage))
                    throw TypeError(".proto.Message.requestPhoneNumberMessage: object expected");
                m.requestPhoneNumberMessage = $root.proto.Message.RequestPhoneNumberMessage.fromObject(d.requestPhoneNumberMessage, n + 1);
            }
            if (d.viewOnceMessageV2 != null) {
                if (!$util.isObject(d.viewOnceMessageV2))
                    throw TypeError(".proto.Message.viewOnceMessageV2: object expected");
                m.viewOnceMessageV2 = $root.proto.Message.FutureProofMessage.fromObject(d.viewOnceMessageV2, n + 1);
            }
            if (d.encReactionMessage != null) {
                if (!$util.isObject(d.encReactionMessage))
                    throw TypeError(".proto.Message.encReactionMessage: object expected");
                m.encReactionMessage = $root.proto.Message.EncReactionMessage.fromObject(d.encReactionMessage, n + 1);
            }
            if (d.editedMessage != null) {
                if (!$util.isObject(d.editedMessage))
                    throw TypeError(".proto.Message.editedMessage: object expected");
                m.editedMessage = $root.proto.Message.FutureProofMessage.fromObject(d.editedMessage, n + 1);
            }
            if (d.viewOnceMessageV2Extension != null) {
                if (!$util.isObject(d.viewOnceMessageV2Extension))
                    throw TypeError(".proto.Message.viewOnceMessageV2Extension: object expected");
                m.viewOnceMessageV2Extension = $root.proto.Message.FutureProofMessage.fromObject(d.viewOnceMessageV2Extension, n + 1);
            }
            if (d.pollCreationMessageV2 != null) {
                if (!$util.isObject(d.pollCreationMessageV2))
                    throw TypeError(".proto.Message.pollCreationMessageV2: object expected");
                m.pollCreationMessageV2 = $root.proto.Message.PollCreationMessage.fromObject(d.pollCreationMessageV2, n + 1);
            }
            if (d.scheduledCallCreationMessage != null) {
                if (!$util.isObject(d.scheduledCallCreationMessage))
                    throw TypeError(".proto.Message.scheduledCallCreationMessage: object expected");
                m.scheduledCallCreationMessage = $root.proto.Message.ScheduledCallCreationMessage.fromObject(d.scheduledCallCreationMessage, n + 1);
            }
            if (d.groupMentionedMessage != null) {
                if (!$util.isObject(d.groupMentionedMessage))
                    throw TypeError(".proto.Message.groupMentionedMessage: object expected");
                m.groupMentionedMessage = $root.proto.Message.FutureProofMessage.fromObject(d.groupMentionedMessage, n + 1);
            }
            if (d.pinInChatMessage != null) {
                if (!$util.isObject(d.pinInChatMessage))
                    throw TypeError(".proto.Message.pinInChatMessage: object expected");
                m.pinInChatMessage = $root.proto.Message.PinInChatMessage.fromObject(d.pinInChatMessage, n + 1);
            }
            if (d.pollCreationMessageV3 != null) {
                if (!$util.isObject(d.pollCreationMessageV3))
                    throw TypeError(".proto.Message.pollCreationMessageV3: object expected");
                m.pollCreationMessageV3 = $root.proto.Message.PollCreationMessage.fromObject(d.pollCreationMessageV3, n + 1);
            }
            if (d.scheduledCallEditMessage != null) {
                if (!$util.isObject(d.scheduledCallEditMessage))
                    throw TypeError(".proto.Message.scheduledCallEditMessage: object expected");
                m.scheduledCallEditMessage = $root.proto.Message.ScheduledCallEditMessage.fromObject(d.scheduledCallEditMessage, n + 1);
            }
            if (d.ptvMessage != null) {
                if (!$util.isObject(d.ptvMessage))
                    throw TypeError(".proto.Message.ptvMessage: object expected");
                m.ptvMessage = $root.proto.Message.VideoMessage.fromObject(d.ptvMessage, n + 1);
            }
            if (d.botInvokeMessage != null) {
                if (!$util.isObject(d.botInvokeMessage))
                    throw TypeError(".proto.Message.botInvokeMessage: object expected");
                m.botInvokeMessage = $root.proto.Message.FutureProofMessage.fromObject(d.botInvokeMessage, n + 1);
            }
            if (d.callLogMesssage != null) {
                if (!$util.isObject(d.callLogMesssage))
                    throw TypeError(".proto.Message.callLogMesssage: object expected");
                m.callLogMesssage = $root.proto.Message.CallLogMessage.fromObject(d.callLogMesssage, n + 1);
            }
            if (d.messageHistoryBundle != null) {
                if (!$util.isObject(d.messageHistoryBundle))
                    throw TypeError(".proto.Message.messageHistoryBundle: object expected");
                m.messageHistoryBundle = $root.proto.Message.MessageHistoryBundle.fromObject(d.messageHistoryBundle, n + 1);
            }
            if (d.encCommentMessage != null) {
                if (!$util.isObject(d.encCommentMessage))
                    throw TypeError(".proto.Message.encCommentMessage: object expected");
                m.encCommentMessage = $root.proto.Message.EncCommentMessage.fromObject(d.encCommentMessage, n + 1);
            }
            if (d.bcallMessage != null) {
                if (!$util.isObject(d.bcallMessage))
                    throw TypeError(".proto.Message.bcallMessage: object expected");
                m.bcallMessage = $root.proto.Message.BCallMessage.fromObject(d.bcallMessage, n + 1);
            }
            if (d.lottieStickerMessage != null) {
                if (!$util.isObject(d.lottieStickerMessage))
                    throw TypeError(".proto.Message.lottieStickerMessage: object expected");
                m.lottieStickerMessage = $root.proto.Message.FutureProofMessage.fromObject(d.lottieStickerMessage, n + 1);
            }
            if (d.eventMessage != null) {
                if (!$util.isObject(d.eventMessage))
                    throw TypeError(".proto.Message.eventMessage: object expected");
                m.eventMessage = $root.proto.Message.EventMessage.fromObject(d.eventMessage, n + 1);
            }
            if (d.encEventResponseMessage != null) {
                if (!$util.isObject(d.encEventResponseMessage))
                    throw TypeError(".proto.Message.encEventResponseMessage: object expected");
                m.encEventResponseMessage = $root.proto.Message.EncEventResponseMessage.fromObject(d.encEventResponseMessage, n + 1);
            }
            if (d.commentMessage != null) {
                if (!$util.isObject(d.commentMessage))
                    throw TypeError(".proto.Message.commentMessage: object expected");
                m.commentMessage = $root.proto.Message.CommentMessage.fromObject(d.commentMessage, n + 1);
            }
            if (d.newsletterAdminInviteMessage != null) {
                if (!$util.isObject(d.newsletterAdminInviteMessage))
                    throw TypeError(".proto.Message.newsletterAdminInviteMessage: object expected");
                m.newsletterAdminInviteMessage = $root.proto.Message.NewsletterAdminInviteMessage.fromObject(d.newsletterAdminInviteMessage, n + 1);
            }
            if (d.placeholderMessage != null) {
                if (!$util.isObject(d.placeholderMessage))
                    throw TypeError(".proto.Message.placeholderMessage: object expected");
                m.placeholderMessage = $root.proto.Message.PlaceholderMessage.fromObject(d.placeholderMessage, n + 1);
            }
            if (d.secretEncryptedMessage != null) {
                if (!$util.isObject(d.secretEncryptedMessage))
                    throw TypeError(".proto.Message.secretEncryptedMessage: object expected");
                m.secretEncryptedMessage = $root.proto.Message.SecretEncryptedMessage.fromObject(d.secretEncryptedMessage, n + 1);
            }
            if (d.albumMessage != null) {
                if (!$util.isObject(d.albumMessage))
                    throw TypeError(".proto.Message.albumMessage: object expected");
                m.albumMessage = $root.proto.Message.AlbumMessage.fromObject(d.albumMessage, n + 1);
            }
            if (d.eventCoverImage != null) {
                if (!$util.isObject(d.eventCoverImage))
                    throw TypeError(".proto.Message.eventCoverImage: object expected");
                m.eventCoverImage = $root.proto.Message.FutureProofMessage.fromObject(d.eventCoverImage, n + 1);
            }
            if (d.stickerPackMessage != null) {
                if (!$util.isObject(d.stickerPackMessage))
                    throw TypeError(".proto.Message.stickerPackMessage: object expected");
                m.stickerPackMessage = $root.proto.Message.StickerPackMessage.fromObject(d.stickerPackMessage, n + 1);
            }
            if (d.statusMentionMessage != null) {
                if (!$util.isObject(d.statusMentionMessage))
                    throw TypeError(".proto.Message.statusMentionMessage: object expected");
                m.statusMentionMessage = $root.proto.Message.FutureProofMessage.fromObject(d.statusMentionMessage, n + 1);
            }
            if (d.pollResultSnapshotMessage != null) {
                if (!$util.isObject(d.pollResultSnapshotMessage))
                    throw TypeError(".proto.Message.pollResultSnapshotMessage: object expected");
                m.pollResultSnapshotMessage = $root.proto.Message.PollResultSnapshotMessage.fromObject(d.pollResultSnapshotMessage, n + 1);
            }
            if (d.pollCreationOptionImageMessage != null) {
                if (!$util.isObject(d.pollCreationOptionImageMessage))
                    throw TypeError(".proto.Message.pollCreationOptionImageMessage: object expected");
                m.pollCreationOptionImageMessage = $root.proto.Message.FutureProofMessage.fromObject(d.pollCreationOptionImageMessage, n + 1);
            }
            if (d.associatedChildMessage != null) {
                if (!$util.isObject(d.associatedChildMessage))
                    throw TypeError(".proto.Message.associatedChildMessage: object expected");
                m.associatedChildMessage = $root.proto.Message.FutureProofMessage.fromObject(d.associatedChildMessage, n + 1);
            }
            if (d.groupStatusMentionMessage != null) {
                if (!$util.isObject(d.groupStatusMentionMessage))
                    throw TypeError(".proto.Message.groupStatusMentionMessage: object expected");
                m.groupStatusMentionMessage = $root.proto.Message.FutureProofMessage.fromObject(d.groupStatusMentionMessage, n + 1);
            }
            if (d.pollCreationMessageV4 != null) {
                if (!$util.isObject(d.pollCreationMessageV4))
                    throw TypeError(".proto.Message.pollCreationMessageV4: object expected");
                m.pollCreationMessageV4 = $root.proto.Message.FutureProofMessage.fromObject(d.pollCreationMessageV4, n + 1);
            }
            if (d.statusAddYours != null) {
                if (!$util.isObject(d.statusAddYours))
                    throw TypeError(".proto.Message.statusAddYours: object expected");
                m.statusAddYours = $root.proto.Message.FutureProofMessage.fromObject(d.statusAddYours, n + 1);
            }
            if (d.groupStatusMessage != null) {
                if (!$util.isObject(d.groupStatusMessage))
                    throw TypeError(".proto.Message.groupStatusMessage: object expected");
                m.groupStatusMessage = $root.proto.Message.FutureProofMessage.fromObject(d.groupStatusMessage, n + 1);
            }
            if (d.richResponseMessage != null) {
                if (!$util.isObject(d.richResponseMessage))
                    throw TypeError(".proto.Message.richResponseMessage: object expected");
                m.richResponseMessage = $root.proto.AIRichResponseMessage.fromObject(d.richResponseMessage, n + 1);
            }
            if (d.statusNotificationMessage != null) {
                if (!$util.isObject(d.statusNotificationMessage))
                    throw TypeError(".proto.Message.statusNotificationMessage: object expected");
                m.statusNotificationMessage = $root.proto.Message.StatusNotificationMessage.fromObject(d.statusNotificationMessage, n + 1);
            }
            if (d.limitSharingMessage != null) {
                if (!$util.isObject(d.limitSharingMessage))
                    throw TypeError(".proto.Message.limitSharingMessage: object expected");
                m.limitSharingMessage = $root.proto.Message.FutureProofMessage.fromObject(d.limitSharingMessage, n + 1);
            }
            if (d.botTaskMessage != null) {
                if (!$util.isObject(d.botTaskMessage))
                    throw TypeError(".proto.Message.botTaskMessage: object expected");
                m.botTaskMessage = $root.proto.Message.FutureProofMessage.fromObject(d.botTaskMessage, n + 1);
            }
            if (d.questionMessage != null) {
                if (!$util.isObject(d.questionMessage))
                    throw TypeError(".proto.Message.questionMessage: object expected");
                m.questionMessage = $root.proto.Message.FutureProofMessage.fromObject(d.questionMessage, n + 1);
            }
            if (d.messageHistoryNotice != null) {
                if (!$util.isObject(d.messageHistoryNotice))
                    throw TypeError(".proto.Message.messageHistoryNotice: object expected");
                m.messageHistoryNotice = $root.proto.Message.MessageHistoryNotice.fromObject(d.messageHistoryNotice, n + 1);
            }
            if (d.groupStatusMessageV2 != null) {
                if (!$util.isObject(d.groupStatusMessageV2))
                    throw TypeError(".proto.Message.groupStatusMessageV2: object expected");
                m.groupStatusMessageV2 = $root.proto.Message.FutureProofMessage.fromObject(d.groupStatusMessageV2, n + 1);
            }
            if (d.botForwardedMessage != null) {
                if (!$util.isObject(d.botForwardedMessage))
                    throw TypeError(".proto.Message.botForwardedMessage: object expected");
                m.botForwardedMessage = $root.proto.Message.FutureProofMessage.fromObject(d.botForwardedMessage, n + 1);
            }
            if (d.statusQuestionAnswerMessage != null) {
                if (!$util.isObject(d.statusQuestionAnswerMessage))
                    throw TypeError(".proto.Message.statusQuestionAnswerMessage: object expected");
                m.statusQuestionAnswerMessage = $root.proto.Message.StatusQuestionAnswerMessage.fromObject(d.statusQuestionAnswerMessage, n + 1);
            }
            if (d.questionReplyMessage != null) {
                if (!$util.isObject(d.questionReplyMessage))
                    throw TypeError(".proto.Message.questionReplyMessage: object expected");
                m.questionReplyMessage = $root.proto.Message.FutureProofMessage.fromObject(d.questionReplyMessage, n + 1);
            }
            if (d.questionResponseMessage != null) {
                if (!$util.isObject(d.questionResponseMessage))
                    throw TypeError(".proto.Message.questionResponseMessage: object expected");
                m.questionResponseMessage = $root.proto.Message.QuestionResponseMessage.fromObject(d.questionResponseMessage, n + 1);
            }
            if (d.statusQuotedMessage != null) {
                if (!$util.isObject(d.statusQuotedMessage))
                    throw TypeError(".proto.Message.statusQuotedMessage: object expected");
                m.statusQuotedMessage = $root.proto.Message.StatusQuotedMessage.fromObject(d.statusQuotedMessage, n + 1);
            }
            if (d.statusStickerInteractionMessage != null) {
                if (!$util.isObject(d.statusStickerInteractionMessage))
                    throw TypeError(".proto.Message.statusStickerInteractionMessage: object expected");
                m.statusStickerInteractionMessage = $root.proto.Message.StatusStickerInteractionMessage.fromObject(d.statusStickerInteractionMessage, n + 1);
            }
            if (d.pollCreationMessageV5 != null) {
                if (!$util.isObject(d.pollCreationMessageV5))
                    throw TypeError(".proto.Message.pollCreationMessageV5: object expected");
                m.pollCreationMessageV5 = $root.proto.Message.PollCreationMessage.fromObject(d.pollCreationMessageV5, n + 1);
            }
            if (d.newsletterFollowerInviteMessageV2 != null) {
                if (!$util.isObject(d.newsletterFollowerInviteMessageV2))
                    throw TypeError(".proto.Message.newsletterFollowerInviteMessageV2: object expected");
                m.newsletterFollowerInviteMessageV2 = $root.proto.Message.NewsletterFollowerInviteMessage.fromObject(d.newsletterFollowerInviteMessageV2, n + 1);
            }
            if (d.pollResultSnapshotMessageV3 != null) {
                if (!$util.isObject(d.pollResultSnapshotMessageV3))
                    throw TypeError(".proto.Message.pollResultSnapshotMessageV3: object expected");
                m.pollResultSnapshotMessageV3 = $root.proto.Message.PollResultSnapshotMessage.fromObject(d.pollResultSnapshotMessageV3, n + 1);
            }
            return m;
        };

        Message.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (m.conversation != null && Object.hasOwnProperty.call(m, "conversation")) {
                d.conversation = m.conversation;
                if (o.oneofs)
                    d._conversation = "conversation";
            }
            if (m.senderKeyDistributionMessage != null && Object.hasOwnProperty.call(m, "senderKeyDistributionMessage")) {
                d.senderKeyDistributionMessage = $root.proto.Message.SenderKeyDistributionMessage.toObject(m.senderKeyDistributionMessage, o, q + 1);
                if (o.oneofs)
                    d._senderKeyDistributionMessage = "senderKeyDistributionMessage";
            }
            if (m.imageMessage != null && Object.hasOwnProperty.call(m, "imageMessage")) {
                d.imageMessage = $root.proto.Message.ImageMessage.toObject(m.imageMessage, o, q + 1);
                if (o.oneofs)
                    d._imageMessage = "imageMessage";
            }
            if (m.contactMessage != null && Object.hasOwnProperty.call(m, "contactMessage")) {
                d.contactMessage = $root.proto.Message.ContactMessage.toObject(m.contactMessage, o, q + 1);
                if (o.oneofs)
                    d._contactMessage = "contactMessage";
            }
            if (m.locationMessage != null && Object.hasOwnProperty.call(m, "locationMessage")) {
                d.locationMessage = $root.proto.Message.LocationMessage.toObject(m.locationMessage, o, q + 1);
                if (o.oneofs)
                    d._locationMessage = "locationMessage";
            }
            if (m.extendedTextMessage != null && Object.hasOwnProperty.call(m, "extendedTextMessage")) {
                d.extendedTextMessage = $root.proto.Message.ExtendedTextMessage.toObject(m.extendedTextMessage, o, q + 1);
                if (o.oneofs)
                    d._extendedTextMessage = "extendedTextMessage";
            }
            if (m.documentMessage != null && Object.hasOwnProperty.call(m, "documentMessage")) {
                d.documentMessage = $root.proto.Message.DocumentMessage.toObject(m.documentMessage, o, q + 1);
                if (o.oneofs)
                    d._documentMessage = "documentMessage";
            }
            if (m.audioMessage != null && Object.hasOwnProperty.call(m, "audioMessage")) {
                d.audioMessage = $root.proto.Message.AudioMessage.toObject(m.audioMessage, o, q + 1);
                if (o.oneofs)
                    d._audioMessage = "audioMessage";
            }
            if (m.videoMessage != null && Object.hasOwnProperty.call(m, "videoMessage")) {
                d.videoMessage = $root.proto.Message.VideoMessage.toObject(m.videoMessage, o, q + 1);
                if (o.oneofs)
                    d._videoMessage = "videoMessage";
            }
            if (m.call != null && Object.hasOwnProperty.call(m, "call")) {
                d.call = $root.proto.Message.Call.toObject(m.call, o, q + 1);
                if (o.oneofs)
                    d._call = "call";
            }
            if (m.chat != null && Object.hasOwnProperty.call(m, "chat")) {
                d.chat = $root.proto.Message.Chat.toObject(m.chat, o, q + 1);
                if (o.oneofs)
                    d._chat = "chat";
            }
            if (m.protocolMessage != null && Object.hasOwnProperty.call(m, "protocolMessage")) {
                d.protocolMessage = $root.proto.Message.ProtocolMessage.toObject(m.protocolMessage, o, q + 1);
                if (o.oneofs)
                    d._protocolMessage = "protocolMessage";
            }
            if (m.contactsArrayMessage != null && Object.hasOwnProperty.call(m, "contactsArrayMessage")) {
                d.contactsArrayMessage = $root.proto.Message.ContactsArrayMessage.toObject(m.contactsArrayMessage, o, q + 1);
                if (o.oneofs)
                    d._contactsArrayMessage = "contactsArrayMessage";
            }
            if (m.highlyStructuredMessage != null && Object.hasOwnProperty.call(m, "highlyStructuredMessage")) {
                d.highlyStructuredMessage = $root.proto.Message.HighlyStructuredMessage.toObject(m.highlyStructuredMessage, o, q + 1);
                if (o.oneofs)
                    d._highlyStructuredMessage = "highlyStructuredMessage";
            }
            if (m.fastRatchetKeySenderKeyDistributionMessage != null && Object.hasOwnProperty.call(m, "fastRatchetKeySenderKeyDistributionMessage")) {
                d.fastRatchetKeySenderKeyDistributionMessage = $root.proto.Message.SenderKeyDistributionMessage.toObject(m.fastRatchetKeySenderKeyDistributionMessage, o, q + 1);
                if (o.oneofs)
                    d._fastRatchetKeySenderKeyDistributionMessage = "fastRatchetKeySenderKeyDistributionMessage";
            }
            if (m.sendPaymentMessage != null && Object.hasOwnProperty.call(m, "sendPaymentMessage")) {
                d.sendPaymentMessage = $root.proto.Message.SendPaymentMessage.toObject(m.sendPaymentMessage, o, q + 1);
                if (o.oneofs)
                    d._sendPaymentMessage = "sendPaymentMessage";
            }
            if (m.liveLocationMessage != null && Object.hasOwnProperty.call(m, "liveLocationMessage")) {
                d.liveLocationMessage = $root.proto.Message.LiveLocationMessage.toObject(m.liveLocationMessage, o, q + 1);
                if (o.oneofs)
                    d._liveLocationMessage = "liveLocationMessage";
            }
            if (m.requestPaymentMessage != null && Object.hasOwnProperty.call(m, "requestPaymentMessage")) {
                d.requestPaymentMessage = $root.proto.Message.RequestPaymentMessage.toObject(m.requestPaymentMessage, o, q + 1);
                if (o.oneofs)
                    d._requestPaymentMessage = "requestPaymentMessage";
            }
            if (m.declinePaymentRequestMessage != null && Object.hasOwnProperty.call(m, "declinePaymentRequestMessage")) {
                d.declinePaymentRequestMessage = $root.proto.Message.DeclinePaymentRequestMessage.toObject(m.declinePaymentRequestMessage, o, q + 1);
                if (o.oneofs)
                    d._declinePaymentRequestMessage = "declinePaymentRequestMessage";
            }
            if (m.cancelPaymentRequestMessage != null && Object.hasOwnProperty.call(m, "cancelPaymentRequestMessage")) {
                d.cancelPaymentRequestMessage = $root.proto.Message.CancelPaymentRequestMessage.toObject(m.cancelPaymentRequestMessage, o, q + 1);
                if (o.oneofs)
                    d._cancelPaymentRequestMessage = "cancelPaymentRequestMessage";
            }
            if (m.templateMessage != null && Object.hasOwnProperty.call(m, "templateMessage")) {
                d.templateMessage = $root.proto.Message.TemplateMessage.toObject(m.templateMessage, o, q + 1);
                if (o.oneofs)
                    d._templateMessage = "templateMessage";
            }
            if (m.stickerMessage != null && Object.hasOwnProperty.call(m, "stickerMessage")) {
                d.stickerMessage = $root.proto.Message.StickerMessage.toObject(m.stickerMessage, o, q + 1);
                if (o.oneofs)
                    d._stickerMessage = "stickerMessage";
            }
            if (m.groupInviteMessage != null && Object.hasOwnProperty.call(m, "groupInviteMessage")) {
                d.groupInviteMessage = $root.proto.Message.GroupInviteMessage.toObject(m.groupInviteMessage, o, q + 1);
                if (o.oneofs)
                    d._groupInviteMessage = "groupInviteMessage";
            }
            if (m.templateButtonReplyMessage != null && Object.hasOwnProperty.call(m, "templateButtonReplyMessage")) {
                d.templateButtonReplyMessage = $root.proto.Message.TemplateButtonReplyMessage.toObject(m.templateButtonReplyMessage, o, q + 1);
                if (o.oneofs)
                    d._templateButtonReplyMessage = "templateButtonReplyMessage";
            }
            if (m.productMessage != null && Object.hasOwnProperty.call(m, "productMessage")) {
                d.productMessage = $root.proto.Message.ProductMessage.toObject(m.productMessage, o, q + 1);
                if (o.oneofs)
                    d._productMessage = "productMessage";
            }
            if (m.deviceSentMessage != null && Object.hasOwnProperty.call(m, "deviceSentMessage")) {
                d.deviceSentMessage = $root.proto.Message.DeviceSentMessage.toObject(m.deviceSentMessage, o, q + 1);
                if (o.oneofs)
                    d._deviceSentMessage = "deviceSentMessage";
            }
            if (m.messageContextInfo != null && Object.hasOwnProperty.call(m, "messageContextInfo")) {
                d.messageContextInfo = $root.proto.MessageContextInfo.toObject(m.messageContextInfo, o, q + 1);
                if (o.oneofs)
                    d._messageContextInfo = "messageContextInfo";
            }
            if (m.listMessage != null && Object.hasOwnProperty.call(m, "listMessage")) {
                d.listMessage = $root.proto.Message.ListMessage.toObject(m.listMessage, o, q + 1);
                if (o.oneofs)
                    d._listMessage = "listMessage";
            }
            if (m.viewOnceMessage != null && Object.hasOwnProperty.call(m, "viewOnceMessage")) {
                d.viewOnceMessage = $root.proto.Message.FutureProofMessage.toObject(m.viewOnceMessage, o, q + 1);
                if (o.oneofs)
                    d._viewOnceMessage = "viewOnceMessage";
            }
            if (m.orderMessage != null && Object.hasOwnProperty.call(m, "orderMessage")) {
                d.orderMessage = $root.proto.Message.OrderMessage.toObject(m.orderMessage, o, q + 1);
                if (o.oneofs)
                    d._orderMessage = "orderMessage";
            }
            if (m.listResponseMessage != null && Object.hasOwnProperty.call(m, "listResponseMessage")) {
                d.listResponseMessage = $root.proto.Message.ListResponseMessage.toObject(m.listResponseMessage, o, q + 1);
                if (o.oneofs)
                    d._listResponseMessage = "listResponseMessage";
            }
            if (m.ephemeralMessage != null && Object.hasOwnProperty.call(m, "ephemeralMessage")) {
                d.ephemeralMessage = $root.proto.Message.FutureProofMessage.toObject(m.ephemeralMessage, o, q + 1);
                if (o.oneofs)
                    d._ephemeralMessage = "ephemeralMessage";
            }
            if (m.invoiceMessage != null && Object.hasOwnProperty.call(m, "invoiceMessage")) {
                d.invoiceMessage = $root.proto.Message.InvoiceMessage.toObject(m.invoiceMessage, o, q + 1);
                if (o.oneofs)
                    d._invoiceMessage = "invoiceMessage";
            }
            if (m.buttonsMessage != null && Object.hasOwnProperty.call(m, "buttonsMessage")) {
                d.buttonsMessage = $root.proto.Message.ButtonsMessage.toObject(m.buttonsMessage, o, q + 1);
                if (o.oneofs)
                    d._buttonsMessage = "buttonsMessage";
            }
            if (m.buttonsResponseMessage != null && Object.hasOwnProperty.call(m, "buttonsResponseMessage")) {
                d.buttonsResponseMessage = $root.proto.Message.ButtonsResponseMessage.toObject(m.buttonsResponseMessage, o, q + 1);
                if (o.oneofs)
                    d._buttonsResponseMessage = "buttonsResponseMessage";
            }
            if (m.paymentInviteMessage != null && Object.hasOwnProperty.call(m, "paymentInviteMessage")) {
                d.paymentInviteMessage = $root.proto.Message.PaymentInviteMessage.toObject(m.paymentInviteMessage, o, q + 1);
                if (o.oneofs)
                    d._paymentInviteMessage = "paymentInviteMessage";
            }
            if (m.interactiveMessage != null && Object.hasOwnProperty.call(m, "interactiveMessage")) {
                d.interactiveMessage = $root.proto.Message.InteractiveMessage.toObject(m.interactiveMessage, o, q + 1);
                if (o.oneofs)
                    d._interactiveMessage = "interactiveMessage";
            }
            if (m.reactionMessage != null && Object.hasOwnProperty.call(m, "reactionMessage")) {
                d.reactionMessage = $root.proto.Message.ReactionMessage.toObject(m.reactionMessage, o, q + 1);
                if (o.oneofs)
                    d._reactionMessage = "reactionMessage";
            }
            if (m.stickerSyncRmrMessage != null && Object.hasOwnProperty.call(m, "stickerSyncRmrMessage")) {
                d.stickerSyncRmrMessage = $root.proto.Message.StickerSyncRMRMessage.toObject(m.stickerSyncRmrMessage, o, q + 1);
                if (o.oneofs)
                    d._stickerSyncRmrMessage = "stickerSyncRmrMessage";
            }
            if (m.interactiveResponseMessage != null && Object.hasOwnProperty.call(m, "interactiveResponseMessage")) {
                d.interactiveResponseMessage = $root.proto.Message.InteractiveResponseMessage.toObject(m.interactiveResponseMessage, o, q + 1);
                if (o.oneofs)
                    d._interactiveResponseMessage = "interactiveResponseMessage";
            }
            if (m.pollCreationMessage != null && Object.hasOwnProperty.call(m, "pollCreationMessage")) {
                d.pollCreationMessage = $root.proto.Message.PollCreationMessage.toObject(m.pollCreationMessage, o, q + 1);
                if (o.oneofs)
                    d._pollCreationMessage = "pollCreationMessage";
            }
            if (m.pollUpdateMessage != null && Object.hasOwnProperty.call(m, "pollUpdateMessage")) {
                d.pollUpdateMessage = $root.proto.Message.PollUpdateMessage.toObject(m.pollUpdateMessage, o, q + 1);
                if (o.oneofs)
                    d._pollUpdateMessage = "pollUpdateMessage";
            }
            if (m.keepInChatMessage != null && Object.hasOwnProperty.call(m, "keepInChatMessage")) {
                d.keepInChatMessage = $root.proto.Message.KeepInChatMessage.toObject(m.keepInChatMessage, o, q + 1);
                if (o.oneofs)
                    d._keepInChatMessage = "keepInChatMessage";
            }
            if (m.documentWithCaptionMessage != null && Object.hasOwnProperty.call(m, "documentWithCaptionMessage")) {
                d.documentWithCaptionMessage = $root.proto.Message.FutureProofMessage.toObject(m.documentWithCaptionMessage, o, q + 1);
                if (o.oneofs)
                    d._documentWithCaptionMessage = "documentWithCaptionMessage";
            }
            if (m.requestPhoneNumberMessage != null && Object.hasOwnProperty.call(m, "requestPhoneNumberMessage")) {
                d.requestPhoneNumberMessage = $root.proto.Message.RequestPhoneNumberMessage.toObject(m.requestPhoneNumberMessage, o, q + 1);
                if (o.oneofs)
                    d._requestPhoneNumberMessage = "requestPhoneNumberMessage";
            }
            if (m.viewOnceMessageV2 != null && Object.hasOwnProperty.call(m, "viewOnceMessageV2")) {
                d.viewOnceMessageV2 = $root.proto.Message.FutureProofMessage.toObject(m.viewOnceMessageV2, o, q + 1);
                if (o.oneofs)
                    d._viewOnceMessageV2 = "viewOnceMessageV2";
            }
            if (m.encReactionMessage != null && Object.hasOwnProperty.call(m, "encReactionMessage")) {
                d.encReactionMessage = $root.proto.Message.EncReactionMessage.toObject(m.encReactionMessage, o, q + 1);
                if (o.oneofs)
                    d._encReactionMessage = "encReactionMessage";
            }
            if (m.editedMessage != null && Object.hasOwnProperty.call(m, "editedMessage")) {
                d.editedMessage = $root.proto.Message.FutureProofMessage.toObject(m.editedMessage, o, q + 1);
                if (o.oneofs)
                    d._editedMessage = "editedMessage";
            }
            if (m.viewOnceMessageV2Extension != null && Object.hasOwnProperty.call(m, "viewOnceMessageV2Extension")) {
                d.viewOnceMessageV2Extension = $root.proto.Message.FutureProofMessage.toObject(m.viewOnceMessageV2Extension, o, q + 1);
                if (o.oneofs)
                    d._viewOnceMessageV2Extension = "viewOnceMessageV2Extension";
            }
            if (m.pollCreationMessageV2 != null && Object.hasOwnProperty.call(m, "pollCreationMessageV2")) {
                d.pollCreationMessageV2 = $root.proto.Message.PollCreationMessage.toObject(m.pollCreationMessageV2, o, q + 1);
                if (o.oneofs)
                    d._pollCreationMessageV2 = "pollCreationMessageV2";
            }
            if (m.scheduledCallCreationMessage != null && Object.hasOwnProperty.call(m, "scheduledCallCreationMessage")) {
                d.scheduledCallCreationMessage = $root.proto.Message.ScheduledCallCreationMessage.toObject(m.scheduledCallCreationMessage, o, q + 1);
                if (o.oneofs)
                    d._scheduledCallCreationMessage = "scheduledCallCreationMessage";
            }
            if (m.groupMentionedMessage != null && Object.hasOwnProperty.call(m, "groupMentionedMessage")) {
                d.groupMentionedMessage = $root.proto.Message.FutureProofMessage.toObject(m.groupMentionedMessage, o, q + 1);
                if (o.oneofs)
                    d._groupMentionedMessage = "groupMentionedMessage";
            }
            if (m.pinInChatMessage != null && Object.hasOwnProperty.call(m, "pinInChatMessage")) {
                d.pinInChatMessage = $root.proto.Message.PinInChatMessage.toObject(m.pinInChatMessage, o, q + 1);
                if (o.oneofs)
                    d._pinInChatMessage = "pinInChatMessage";
            }
            if (m.pollCreationMessageV3 != null && Object.hasOwnProperty.call(m, "pollCreationMessageV3")) {
                d.pollCreationMessageV3 = $root.proto.Message.PollCreationMessage.toObject(m.pollCreationMessageV3, o, q + 1);
                if (o.oneofs)
                    d._pollCreationMessageV3 = "pollCreationMessageV3";
            }
            if (m.scheduledCallEditMessage != null && Object.hasOwnProperty.call(m, "scheduledCallEditMessage")) {
                d.scheduledCallEditMessage = $root.proto.Message.ScheduledCallEditMessage.toObject(m.scheduledCallEditMessage, o, q + 1);
                if (o.oneofs)
                    d._scheduledCallEditMessage = "scheduledCallEditMessage";
            }
            if (m.ptvMessage != null && Object.hasOwnProperty.call(m, "ptvMessage")) {
                d.ptvMessage = $root.proto.Message.VideoMessage.toObject(m.ptvMessage, o, q + 1);
                if (o.oneofs)
                    d._ptvMessage = "ptvMessage";
            }
            if (m.botInvokeMessage != null && Object.hasOwnProperty.call(m, "botInvokeMessage")) {
                d.botInvokeMessage = $root.proto.Message.FutureProofMessage.toObject(m.botInvokeMessage, o, q + 1);
                if (o.oneofs)
                    d._botInvokeMessage = "botInvokeMessage";
            }
            if (m.callLogMesssage != null && Object.hasOwnProperty.call(m, "callLogMesssage")) {
                d.callLogMesssage = $root.proto.Message.CallLogMessage.toObject(m.callLogMesssage, o, q + 1);
                if (o.oneofs)
                    d._callLogMesssage = "callLogMesssage";
            }
            if (m.messageHistoryBundle != null && Object.hasOwnProperty.call(m, "messageHistoryBundle")) {
                d.messageHistoryBundle = $root.proto.Message.MessageHistoryBundle.toObject(m.messageHistoryBundle, o, q + 1);
                if (o.oneofs)
                    d._messageHistoryBundle = "messageHistoryBundle";
            }
            if (m.encCommentMessage != null && Object.hasOwnProperty.call(m, "encCommentMessage")) {
                d.encCommentMessage = $root.proto.Message.EncCommentMessage.toObject(m.encCommentMessage, o, q + 1);
                if (o.oneofs)
                    d._encCommentMessage = "encCommentMessage";
            }
            if (m.bcallMessage != null && Object.hasOwnProperty.call(m, "bcallMessage")) {
                d.bcallMessage = $root.proto.Message.BCallMessage.toObject(m.bcallMessage, o, q + 1);
                if (o.oneofs)
                    d._bcallMessage = "bcallMessage";
            }
            if (m.lottieStickerMessage != null && Object.hasOwnProperty.call(m, "lottieStickerMessage")) {
                d.lottieStickerMessage = $root.proto.Message.FutureProofMessage.toObject(m.lottieStickerMessage, o, q + 1);
                if (o.oneofs)
                    d._lottieStickerMessage = "lottieStickerMessage";
            }
            if (m.eventMessage != null && Object.hasOwnProperty.call(m, "eventMessage")) {
                d.eventMessage = $root.proto.Message.EventMessage.toObject(m.eventMessage, o, q + 1);
                if (o.oneofs)
                    d._eventMessage = "eventMessage";
            }
            if (m.encEventResponseMessage != null && Object.hasOwnProperty.call(m, "encEventResponseMessage")) {
                d.encEventResponseMessage = $root.proto.Message.EncEventResponseMessage.toObject(m.encEventResponseMessage, o, q + 1);
                if (o.oneofs)
                    d._encEventResponseMessage = "encEventResponseMessage";
            }
            if (m.commentMessage != null && Object.hasOwnProperty.call(m, "commentMessage")) {
                d.commentMessage = $root.proto.Message.CommentMessage.toObject(m.commentMessage, o, q + 1);
                if (o.oneofs)
                    d._commentMessage = "commentMessage";
            }
            if (m.newsletterAdminInviteMessage != null && Object.hasOwnProperty.call(m, "newsletterAdminInviteMessage")) {
                d.newsletterAdminInviteMessage = $root.proto.Message.NewsletterAdminInviteMessage.toObject(m.newsletterAdminInviteMessage, o, q + 1);
                if (o.oneofs)
                    d._newsletterAdminInviteMessage = "newsletterAdminInviteMessage";
            }
            if (m.placeholderMessage != null && Object.hasOwnProperty.call(m, "placeholderMessage")) {
                d.placeholderMessage = $root.proto.Message.PlaceholderMessage.toObject(m.placeholderMessage, o, q + 1);
                if (o.oneofs)
                    d._placeholderMessage = "placeholderMessage";
            }
            if (m.secretEncryptedMessage != null && Object.hasOwnProperty.call(m, "secretEncryptedMessage")) {
                d.secretEncryptedMessage = $root.proto.Message.SecretEncryptedMessage.toObject(m.secretEncryptedMessage, o, q + 1);
                if (o.oneofs)
                    d._secretEncryptedMessage = "secretEncryptedMessage";
            }
            if (m.albumMessage != null && Object.hasOwnProperty.call(m, "albumMessage")) {
                d.albumMessage = $root.proto.Message.AlbumMessage.toObject(m.albumMessage, o, q + 1);
                if (o.oneofs)
                    d._albumMessage = "albumMessage";
            }
            if (m.eventCoverImage != null && Object.hasOwnProperty.call(m, "eventCoverImage")) {
                d.eventCoverImage = $root.proto.Message.FutureProofMessage.toObject(m.eventCoverImage, o, q + 1);
                if (o.oneofs)
                    d._eventCoverImage = "eventCoverImage";
            }
            if (m.stickerPackMessage != null && Object.hasOwnProperty.call(m, "stickerPackMessage")) {
                d.stickerPackMessage = $root.proto.Message.StickerPackMessage.toObject(m.stickerPackMessage, o, q + 1);
                if (o.oneofs)
                    d._stickerPackMessage = "stickerPackMessage";
            }
            if (m.statusMentionMessage != null && Object.hasOwnProperty.call(m, "statusMentionMessage")) {
                d.statusMentionMessage = $root.proto.Message.FutureProofMessage.toObject(m.statusMentionMessage, o, q + 1);
                if (o.oneofs)
                    d._statusMentionMessage = "statusMentionMessage";
            }
            if (m.pollResultSnapshotMessage != null && Object.hasOwnProperty.call(m, "pollResultSnapshotMessage")) {
                d.pollResultSnapshotMessage = $root.proto.Message.PollResultSnapshotMessage.toObject(m.pollResultSnapshotMessage, o, q + 1);
                if (o.oneofs)
                    d._pollResultSnapshotMessage = "pollResultSnapshotMessage";
            }
            if (m.pollCreationOptionImageMessage != null && Object.hasOwnProperty.call(m, "pollCreationOptionImageMessage")) {
                d.pollCreationOptionImageMessage = $root.proto.Message.FutureProofMessage.toObject(m.pollCreationOptionImageMessage, o, q + 1);
                if (o.oneofs)
                    d._pollCreationOptionImageMessage = "pollCreationOptionImageMessage";
            }
            if (m.associatedChildMessage != null && Object.hasOwnProperty.call(m, "associatedChildMessage")) {
                d.associatedChildMessage = $root.proto.Message.FutureProofMessage.toObject(m.associatedChildMessage, o, q + 1);
                if (o.oneofs)
                    d._associatedChildMessage = "associatedChildMessage";
            }
            if (m.groupStatusMentionMessage != null && Object.hasOwnProperty.call(m, "groupStatusMentionMessage")) {
                d.groupStatusMentionMessage = $root.proto.Message.FutureProofMessage.toObject(m.groupStatusMentionMessage, o, q + 1);
                if (o.oneofs)
                    d._groupStatusMentionMessage = "groupStatusMentionMessage";
            }
            if (m.pollCreationMessageV4 != null && Object.hasOwnProperty.call(m, "pollCreationMessageV4")) {
                d.pollCreationMessageV4 = $root.proto.Message.FutureProofMessage.toObject(m.pollCreationMessageV4, o, q + 1);
                if (o.oneofs)
                    d._pollCreationMessageV4 = "pollCreationMessageV4";
            }
            if (m.statusAddYours != null && Object.hasOwnProperty.call(m, "statusAddYours")) {
                d.statusAddYours = $root.proto.Message.FutureProofMessage.toObject(m.statusAddYours, o, q + 1);
                if (o.oneofs)
                    d._statusAddYours = "statusAddYours";
            }
            if (m.groupStatusMessage != null && Object.hasOwnProperty.call(m, "groupStatusMessage")) {
                d.groupStatusMessage = $root.proto.Message.FutureProofMessage.toObject(m.groupStatusMessage, o, q + 1);
                if (o.oneofs)
                    d._groupStatusMessage = "groupStatusMessage";
            }
            if (m.richResponseMessage != null && Object.hasOwnProperty.call(m, "richResponseMessage")) {
                d.richResponseMessage = $root.proto.AIRichResponseMessage.toObject(m.richResponseMessage, o, q + 1);
                if (o.oneofs)
                    d._richResponseMessage = "richResponseMessage";
            }
            if (m.statusNotificationMessage != null && Object.hasOwnProperty.call(m, "statusNotificationMessage")) {
                d.statusNotificationMessage = $root.proto.Message.StatusNotificationMessage.toObject(m.statusNotificationMessage, o, q + 1);
                if (o.oneofs)
                    d._statusNotificationMessage = "statusNotificationMessage";
            }
            if (m.limitSharingMessage != null && Object.hasOwnProperty.call(m, "limitSharingMessage")) {
                d.limitSharingMessage = $root.proto.Message.FutureProofMessage.toObject(m.limitSharingMessage, o, q + 1);
                if (o.oneofs)
                    d._limitSharingMessage = "limitSharingMessage";
            }
            if (m.botTaskMessage != null && Object.hasOwnProperty.call(m, "botTaskMessage")) {
                d.botTaskMessage = $root.proto.Message.FutureProofMessage.toObject(m.botTaskMessage, o, q + 1);
                if (o.oneofs)
                    d._botTaskMessage = "botTaskMessage";
            }
            if (m.questionMessage != null && Object.hasOwnProperty.call(m, "questionMessage")) {
                d.questionMessage = $root.proto.Message.FutureProofMessage.toObject(m.questionMessage, o, q + 1);
                if (o.oneofs)
                    d._questionMessage = "questionMessage";
            }
            if (m.messageHistoryNotice != null && Object.hasOwnProperty.call(m, "messageHistoryNotice")) {
                d.messageHistoryNotice = $root.proto.Message.MessageHistoryNotice.toObject(m.messageHistoryNotice, o, q + 1);
                if (o.oneofs)
                    d._messageHistoryNotice = "messageHistoryNotice";
            }
            if (m.groupStatusMessageV2 != null && Object.hasOwnProperty.call(m, "groupStatusMessageV2")) {
                d.groupStatusMessageV2 = $root.proto.Message.FutureProofMessage.toObject(m.groupStatusMessageV2, o, q + 1);
                if (o.oneofs)
                    d._groupStatusMessageV2 = "groupStatusMessageV2";
            }
            if (m.botForwardedMessage != null && Object.hasOwnProperty.call(m, "botForwardedMessage")) {
                d.botForwardedMessage = $root.proto.Message.FutureProofMessage.toObject(m.botForwardedMessage, o, q + 1);
                if (o.oneofs)
                    d._botForwardedMessage = "botForwardedMessage";
            }
            if (m.statusQuestionAnswerMessage != null && Object.hasOwnProperty.call(m, "statusQuestionAnswerMessage")) {
                d.statusQuestionAnswerMessage = $root.proto.Message.StatusQuestionAnswerMessage.toObject(m.statusQuestionAnswerMessage, o, q + 1);
                if (o.oneofs)
                    d._statusQuestionAnswerMessage = "statusQuestionAnswerMessage";
            }
            if (m.questionReplyMessage != null && Object.hasOwnProperty.call(m, "questionReplyMessage")) {
                d.questionReplyMessage = $root.proto.Message.FutureProofMessage.toObject(m.questionReplyMessage, o, q + 1);
                if (o.oneofs)
                    d._questionReplyMessage = "questionReplyMessage";
            }
            if (m.questionResponseMessage != null && Object.hasOwnProperty.call(m, "questionResponseMessage")) {
                d.questionResponseMessage = $root.proto.Message.QuestionResponseMessage.toObject(m.questionResponseMessage, o, q + 1);
                if (o.oneofs)
                    d._questionResponseMessage = "questionResponseMessage";
            }
            if (m.statusQuotedMessage != null && Object.hasOwnProperty.call(m, "statusQuotedMessage")) {
                d.statusQuotedMessage = $root.proto.Message.StatusQuotedMessage.toObject(m.statusQuotedMessage, o, q + 1);
                if (o.oneofs)
                    d._statusQuotedMessage = "statusQuotedMessage";
            }
            if (m.statusStickerInteractionMessage != null && Object.hasOwnProperty.call(m, "statusStickerInteractionMessage")) {
                d.statusStickerInteractionMessage = $root.proto.Message.StatusStickerInteractionMessage.toObject(m.statusStickerInteractionMessage, o, q + 1);
                if (o.oneofs)
                    d._statusStickerInteractionMessage = "statusStickerInteractionMessage";
            }
            if (m.pollCreationMessageV5 != null && Object.hasOwnProperty.call(m, "pollCreationMessageV5")) {
                d.pollCreationMessageV5 = $root.proto.Message.PollCreationMessage.toObject(m.pollCreationMessageV5, o, q + 1);
                if (o.oneofs)
                    d._pollCreationMessageV5 = "pollCreationMessageV5";
            }
            if (m.newsletterFollowerInviteMessageV2 != null && Object.hasOwnProperty.call(m, "newsletterFollowerInviteMessageV2")) {
                d.newsletterFollowerInviteMessageV2 = $root.proto.Message.NewsletterFollowerInviteMessage.toObject(m.newsletterFollowerInviteMessageV2, o, q + 1);
                if (o.oneofs)
                    d._newsletterFollowerInviteMessageV2 = "newsletterFollowerInviteMessageV2";
            }
            if (m.pollResultSnapshotMessageV3 != null && Object.hasOwnProperty.call(m, "pollResultSnapshotMessageV3")) {
                d.pollResultSnapshotMessageV3 = $root.proto.Message.PollResultSnapshotMessage.toObject(m.pollResultSnapshotMessageV3, o, q + 1);
                if (o.oneofs)
                    d._pollResultSnapshotMessageV3 = "pollResultSnapshotMessageV3";
            }
            return d;
        };

        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Message";
        };

        Message.AlbumMessage = (function() {

            function AlbumMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AlbumMessage.create = function create(properties) {
                return new AlbumMessage(properties);
            };

            AlbumMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            AlbumMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.AlbumMessage();
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

            AlbumMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.AlbumMessage)
                    return d;
                return new $root.proto.Message.AlbumMessage();
            };

            AlbumMessage.toObject = function toObject() {
                return {};
            };

            AlbumMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AlbumMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.AlbumMessage";
            };

            return AlbumMessage;
        })();

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

        Message.BCallMessage = (function() {

            function BCallMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BCallMessage.create = function create(properties) {
                return new BCallMessage(properties);
            };

            BCallMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            BCallMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.BCallMessage();
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

            BCallMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.BCallMessage)
                    return d;
                return new $root.proto.Message.BCallMessage();
            };

            BCallMessage.toObject = function toObject() {
                return {};
            };

            BCallMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            BCallMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.BCallMessage";
            };

            BCallMessage.MediaType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "AUDIO"] = 1;
                values[valuesById[2] = "VIDEO"] = 2;
                return values;
            })();

            return BCallMessage;
        })();

        Message.ButtonsMessage = (function() {

            function ButtonsMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

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
                return new $root.proto.Message.ButtonsMessage();
            };

            ButtonsMessage.toObject = function toObject() {
                return {};
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
                return new $root.proto.Message.ButtonsResponseMessage();
            };

            ButtonsResponseMessage.toObject = function toObject() {
                return {};
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

        Message.Call = (function() {

            function Call(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Call.create = function create(properties) {
                return new Call(properties);
            };

            Call.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            Call.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.Call();
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

            Call.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.Call)
                    return d;
                return new $root.proto.Message.Call();
            };

            Call.toObject = function toObject() {
                return {};
            };

            Call.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Call.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.Call";
            };

            return Call;
        })();

        Message.CallLogMessage = (function() {

            function CallLogMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CallLogMessage.create = function create(properties) {
                return new CallLogMessage(properties);
            };

            CallLogMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            CallLogMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.CallLogMessage();
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

            CallLogMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.CallLogMessage)
                    return d;
                return new $root.proto.Message.CallLogMessage();
            };

            CallLogMessage.toObject = function toObject() {
                return {};
            };

            CallLogMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            CallLogMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.CallLogMessage";
            };

            CallLogMessage.CallOutcome = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CONNECTED"] = 0;
                values[valuesById[1] = "MISSED"] = 1;
                values[valuesById[2] = "FAILED"] = 2;
                values[valuesById[3] = "REJECTED"] = 3;
                values[valuesById[4] = "ACCEPTED_ELSEWHERE"] = 4;
                values[valuesById[5] = "ONGOING"] = 5;
                values[valuesById[6] = "SILENCED_BY_DND"] = 6;
                values[valuesById[7] = "SILENCED_UNKNOWN_CALLER"] = 7;
                return values;
            })();

            CallLogMessage.CallType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "REGULAR"] = 0;
                values[valuesById[1] = "SCHEDULED_CALL"] = 1;
                values[valuesById[2] = "VOICE_CHAT"] = 2;
                return values;
            })();

            return CallLogMessage;
        })();

        Message.CancelPaymentRequestMessage = (function() {

            function CancelPaymentRequestMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CancelPaymentRequestMessage.create = function create(properties) {
                return new CancelPaymentRequestMessage(properties);
            };

            CancelPaymentRequestMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            CancelPaymentRequestMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.CancelPaymentRequestMessage();
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

            CancelPaymentRequestMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.CancelPaymentRequestMessage)
                    return d;
                return new $root.proto.Message.CancelPaymentRequestMessage();
            };

            CancelPaymentRequestMessage.toObject = function toObject() {
                return {};
            };

            CancelPaymentRequestMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            CancelPaymentRequestMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.CancelPaymentRequestMessage";
            };

            return CancelPaymentRequestMessage;
        })();

        Message.Chat = (function() {

            function Chat(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Chat.create = function create(properties) {
                return new Chat(properties);
            };

            Chat.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            Chat.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.Chat();
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

            Chat.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.Chat)
                    return d;
                return new $root.proto.Message.Chat();
            };

            Chat.toObject = function toObject() {
                return {};
            };

            Chat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Chat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.Chat";
            };

            return Chat;
        })();

        Message.CloudAPIThreadControlNotification = (function() {

            const CloudAPIThreadControlNotification = {};

            CloudAPIThreadControlNotification.CloudAPIThreadControl = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "CONTROL_PASSED"] = 1;
                values[valuesById[2] = "CONTROL_TAKEN"] = 2;
                return values;
            })();

            return CloudAPIThreadControlNotification;
        })();

        Message.CommentMessage = (function() {

            function CommentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CommentMessage.create = function create(properties) {
                return new CommentMessage(properties);
            };

            CommentMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            CommentMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.CommentMessage();
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

            CommentMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.CommentMessage)
                    return d;
                return new $root.proto.Message.CommentMessage();
            };

            CommentMessage.toObject = function toObject() {
                return {};
            };

            CommentMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            CommentMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.CommentMessage";
            };

            return CommentMessage;
        })();

        Message.ContactMessage = (function() {

            function ContactMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ContactMessage.create = function create(properties) {
                return new ContactMessage(properties);
            };

            ContactMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            ContactMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ContactMessage();
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

            ContactMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ContactMessage)
                    return d;
                return new $root.proto.Message.ContactMessage();
            };

            ContactMessage.toObject = function toObject() {
                return {};
            };

            ContactMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ContactMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ContactMessage";
            };

            return ContactMessage;
        })();

        Message.ContactsArrayMessage = (function() {

            function ContactsArrayMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ContactsArrayMessage.create = function create(properties) {
                return new ContactsArrayMessage(properties);
            };

            ContactsArrayMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            ContactsArrayMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ContactsArrayMessage();
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

            ContactsArrayMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ContactsArrayMessage)
                    return d;
                return new $root.proto.Message.ContactsArrayMessage();
            };

            ContactsArrayMessage.toObject = function toObject() {
                return {};
            };

            ContactsArrayMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ContactsArrayMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ContactsArrayMessage";
            };

            return ContactsArrayMessage;
        })();

        Message.DeclinePaymentRequestMessage = (function() {

            function DeclinePaymentRequestMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DeclinePaymentRequestMessage.create = function create(properties) {
                return new DeclinePaymentRequestMessage(properties);
            };

            DeclinePaymentRequestMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            DeclinePaymentRequestMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.DeclinePaymentRequestMessage();
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

            DeclinePaymentRequestMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.DeclinePaymentRequestMessage)
                    return d;
                return new $root.proto.Message.DeclinePaymentRequestMessage();
            };

            DeclinePaymentRequestMessage.toObject = function toObject() {
                return {};
            };

            DeclinePaymentRequestMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DeclinePaymentRequestMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.DeclinePaymentRequestMessage";
            };

            return DeclinePaymentRequestMessage;
        })();

        Message.DeviceSentMessage = (function() {

            function DeviceSentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DeviceSentMessage.create = function create(properties) {
                return new DeviceSentMessage(properties);
            };

            DeviceSentMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            DeviceSentMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.DeviceSentMessage();
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

            DeviceSentMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.DeviceSentMessage)
                    return d;
                return new $root.proto.Message.DeviceSentMessage();
            };

            DeviceSentMessage.toObject = function toObject() {
                return {};
            };

            DeviceSentMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DeviceSentMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.DeviceSentMessage";
            };

            return DeviceSentMessage;
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

        Message.EncCommentMessage = (function() {

            function EncCommentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            EncCommentMessage.create = function create(properties) {
                return new EncCommentMessage(properties);
            };

            EncCommentMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            EncCommentMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.EncCommentMessage();
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

            EncCommentMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.EncCommentMessage)
                    return d;
                return new $root.proto.Message.EncCommentMessage();
            };

            EncCommentMessage.toObject = function toObject() {
                return {};
            };

            EncCommentMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            EncCommentMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.EncCommentMessage";
            };

            return EncCommentMessage;
        })();

        Message.EncEventResponseMessage = (function() {

            function EncEventResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            EncEventResponseMessage.create = function create(properties) {
                return new EncEventResponseMessage(properties);
            };

            EncEventResponseMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            EncEventResponseMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.EncEventResponseMessage();
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

            EncEventResponseMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.EncEventResponseMessage)
                    return d;
                return new $root.proto.Message.EncEventResponseMessage();
            };

            EncEventResponseMessage.toObject = function toObject() {
                return {};
            };

            EncEventResponseMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            EncEventResponseMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.EncEventResponseMessage";
            };

            return EncEventResponseMessage;
        })();

        Message.EncReactionMessage = (function() {

            function EncReactionMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            EncReactionMessage.create = function create(properties) {
                return new EncReactionMessage(properties);
            };

            EncReactionMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            EncReactionMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.EncReactionMessage();
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

            EncReactionMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.EncReactionMessage)
                    return d;
                return new $root.proto.Message.EncReactionMessage();
            };

            EncReactionMessage.toObject = function toObject() {
                return {};
            };

            EncReactionMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            EncReactionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.EncReactionMessage";
            };

            return EncReactionMessage;
        })();

        Message.EventMessage = (function() {

            function EventMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            EventMessage.create = function create(properties) {
                return new EventMessage(properties);
            };

            EventMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            EventMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.EventMessage();
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

            EventMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.EventMessage)
                    return d;
                return new $root.proto.Message.EventMessage();
            };

            EventMessage.toObject = function toObject() {
                return {};
            };

            EventMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            EventMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.EventMessage";
            };

            return EventMessage;
        })();

        Message.EventResponseMessage = (function() {

            const EventResponseMessage = {};

            EventResponseMessage.EventResponseType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "GOING"] = 1;
                values[valuesById[2] = "NOT_GOING"] = 2;
                values[valuesById[3] = "MAYBE"] = 3;
                return values;
            })();

            return EventResponseMessage;
        })();

        Message.ExtendedTextMessage = (function() {

            function ExtendedTextMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ExtendedTextMessage.create = function create(properties) {
                return new ExtendedTextMessage(properties);
            };

            ExtendedTextMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            ExtendedTextMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ExtendedTextMessage();
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

            ExtendedTextMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ExtendedTextMessage)
                    return d;
                return new $root.proto.Message.ExtendedTextMessage();
            };

            ExtendedTextMessage.toObject = function toObject() {
                return {};
            };

            ExtendedTextMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ExtendedTextMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ExtendedTextMessage";
            };

            ExtendedTextMessage.FontType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SYSTEM"] = 0;
                values[valuesById[1] = "SYSTEM_TEXT"] = 1;
                values[valuesById[2] = "FB_SCRIPT"] = 2;
                values[valuesById[6] = "SYSTEM_BOLD"] = 6;
                values[valuesById[7] = "MORNINGBREEZE_REGULAR"] = 7;
                values[valuesById[8] = "CALISTOGA_REGULAR"] = 8;
                values[valuesById[9] = "EXO2_EXTRABOLD"] = 9;
                values[valuesById[10] = "COURIERPRIME_BOLD"] = 10;
                return values;
            })();

            ExtendedTextMessage.InviteLinkGroupType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DEFAULT"] = 0;
                values[valuesById[1] = "PARENT"] = 1;
                values[valuesById[2] = "SUB"] = 2;
                values[valuesById[3] = "DEFAULT_SUB"] = 3;
                return values;
            })();

            ExtendedTextMessage.PreviewType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "VIDEO"] = 1;
                values[valuesById[4] = "PLACEHOLDER"] = 4;
                values[valuesById[5] = "IMAGE"] = 5;
                values[valuesById[6] = "PAYMENT_LINKS"] = 6;
                values[valuesById[7] = "PROFILE"] = 7;
                return values;
            })();

            return ExtendedTextMessage;
        })();

        Message.FutureProofMessage = (function() {

            function FutureProofMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            FutureProofMessage.create = function create(properties) {
                return new FutureProofMessage(properties);
            };

            FutureProofMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            FutureProofMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.FutureProofMessage();
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

            FutureProofMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.FutureProofMessage)
                    return d;
                return new $root.proto.Message.FutureProofMessage();
            };

            FutureProofMessage.toObject = function toObject() {
                return {};
            };

            FutureProofMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            FutureProofMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.FutureProofMessage";
            };

            return FutureProofMessage;
        })();

        Message.GroupInviteMessage = (function() {

            function GroupInviteMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            GroupInviteMessage.create = function create(properties) {
                return new GroupInviteMessage(properties);
            };

            GroupInviteMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            GroupInviteMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.GroupInviteMessage();
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

            GroupInviteMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.GroupInviteMessage)
                    return d;
                return new $root.proto.Message.GroupInviteMessage();
            };

            GroupInviteMessage.toObject = function toObject() {
                return {};
            };

            GroupInviteMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GroupInviteMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.GroupInviteMessage";
            };

            GroupInviteMessage.GroupType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DEFAULT"] = 0;
                values[valuesById[1] = "PARENT"] = 1;
                return values;
            })();

            return GroupInviteMessage;
        })();

        Message.HighlyStructuredMessage = (function() {

            function HighlyStructuredMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HighlyStructuredMessage.create = function create(properties) {
                return new HighlyStructuredMessage(properties);
            };

            HighlyStructuredMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            HighlyStructuredMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.HighlyStructuredMessage();
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

            HighlyStructuredMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.HighlyStructuredMessage)
                    return d;
                return new $root.proto.Message.HighlyStructuredMessage();
            };

            HighlyStructuredMessage.toObject = function toObject() {
                return {};
            };

            HighlyStructuredMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            HighlyStructuredMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.HighlyStructuredMessage";
            };

            return HighlyStructuredMessage;
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
                return new $root.proto.Message.InteractiveMessage();
            };

            InteractiveMessage.toObject = function toObject() {
                return {};
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

            return InteractiveMessage;
        })();

        Message.InteractiveResponseMessage = (function() {

            function InteractiveResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

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
                return new $root.proto.Message.InteractiveResponseMessage();
            };

            InteractiveResponseMessage.toObject = function toObject() {
                return {};
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

            return InteractiveResponseMessage;
        })();

        Message.InvoiceMessage = (function() {

            function InvoiceMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InvoiceMessage.create = function create(properties) {
                return new InvoiceMessage(properties);
            };

            InvoiceMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            InvoiceMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.InvoiceMessage();
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

            InvoiceMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.InvoiceMessage)
                    return d;
                return new $root.proto.Message.InvoiceMessage();
            };

            InvoiceMessage.toObject = function toObject() {
                return {};
            };

            InvoiceMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InvoiceMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.InvoiceMessage";
            };

            InvoiceMessage.AttachmentType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "IMAGE"] = 0;
                values[valuesById[1] = "PDF"] = 1;
                return values;
            })();

            return InvoiceMessage;
        })();

        Message.KeepInChatMessage = (function() {

            function KeepInChatMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            KeepInChatMessage.create = function create(properties) {
                return new KeepInChatMessage(properties);
            };

            KeepInChatMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            KeepInChatMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.KeepInChatMessage();
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

            KeepInChatMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.KeepInChatMessage)
                    return d;
                return new $root.proto.Message.KeepInChatMessage();
            };

            KeepInChatMessage.toObject = function toObject() {
                return {};
            };

            KeepInChatMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            KeepInChatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.KeepInChatMessage";
            };

            return KeepInChatMessage;
        })();

        Message.LinkPreviewMetadata = (function() {

            const LinkPreviewMetadata = {};

            LinkPreviewMetadata.SocialMediaPostType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "REEL"] = 1;
                values[valuesById[2] = "LIVE_VIDEO"] = 2;
                values[valuesById[3] = "LONG_VIDEO"] = 3;
                values[valuesById[4] = "SINGLE_IMAGE"] = 4;
                values[valuesById[5] = "CAROUSEL"] = 5;
                return values;
            })();

            return LinkPreviewMetadata;
        })();

        Message.ListMessage = (function() {

            function ListMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

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
                return new $root.proto.Message.ListMessage();
            };

            ListMessage.toObject = function toObject() {
                return {};
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

            return ListMessage;
        })();

        Message.ListResponseMessage = (function() {

            function ListResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

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
                return new $root.proto.Message.ListResponseMessage();
            };

            ListResponseMessage.toObject = function toObject() {
                return {};
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

            return ListResponseMessage;
        })();

        Message.LiveLocationMessage = (function() {

            function LiveLocationMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LiveLocationMessage.create = function create(properties) {
                return new LiveLocationMessage(properties);
            };

            LiveLocationMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            LiveLocationMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.LiveLocationMessage();
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

            LiveLocationMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.LiveLocationMessage)
                    return d;
                return new $root.proto.Message.LiveLocationMessage();
            };

            LiveLocationMessage.toObject = function toObject() {
                return {};
            };

            LiveLocationMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            LiveLocationMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.LiveLocationMessage";
            };

            return LiveLocationMessage;
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

        Message.MessageHistoryBundle = (function() {

            function MessageHistoryBundle(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MessageHistoryBundle.create = function create(properties) {
                return new MessageHistoryBundle(properties);
            };

            MessageHistoryBundle.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            MessageHistoryBundle.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.MessageHistoryBundle();
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

            MessageHistoryBundle.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.MessageHistoryBundle)
                    return d;
                return new $root.proto.Message.MessageHistoryBundle();
            };

            MessageHistoryBundle.toObject = function toObject() {
                return {};
            };

            MessageHistoryBundle.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            MessageHistoryBundle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.MessageHistoryBundle";
            };

            return MessageHistoryBundle;
        })();

        Message.MessageHistoryNotice = (function() {

            function MessageHistoryNotice(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MessageHistoryNotice.create = function create(properties) {
                return new MessageHistoryNotice(properties);
            };

            MessageHistoryNotice.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            MessageHistoryNotice.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.MessageHistoryNotice();
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

            MessageHistoryNotice.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.MessageHistoryNotice)
                    return d;
                return new $root.proto.Message.MessageHistoryNotice();
            };

            MessageHistoryNotice.toObject = function toObject() {
                return {};
            };

            MessageHistoryNotice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            MessageHistoryNotice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.MessageHistoryNotice";
            };

            return MessageHistoryNotice;
        })();

        Message.NewsletterAdminInviteMessage = (function() {

            function NewsletterAdminInviteMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            NewsletterAdminInviteMessage.create = function create(properties) {
                return new NewsletterAdminInviteMessage(properties);
            };

            NewsletterAdminInviteMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            NewsletterAdminInviteMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.NewsletterAdminInviteMessage();
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

            NewsletterAdminInviteMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.NewsletterAdminInviteMessage)
                    return d;
                return new $root.proto.Message.NewsletterAdminInviteMessage();
            };

            NewsletterAdminInviteMessage.toObject = function toObject() {
                return {};
            };

            NewsletterAdminInviteMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            NewsletterAdminInviteMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.NewsletterAdminInviteMessage";
            };

            return NewsletterAdminInviteMessage;
        })();

        Message.NewsletterFollowerInviteMessage = (function() {

            function NewsletterFollowerInviteMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            NewsletterFollowerInviteMessage.create = function create(properties) {
                return new NewsletterFollowerInviteMessage(properties);
            };

            NewsletterFollowerInviteMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            NewsletterFollowerInviteMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.NewsletterFollowerInviteMessage();
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

            NewsletterFollowerInviteMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.NewsletterFollowerInviteMessage)
                    return d;
                return new $root.proto.Message.NewsletterFollowerInviteMessage();
            };

            NewsletterFollowerInviteMessage.toObject = function toObject() {
                return {};
            };

            NewsletterFollowerInviteMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            NewsletterFollowerInviteMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.NewsletterFollowerInviteMessage";
            };

            return NewsletterFollowerInviteMessage;
        })();

        Message.OrderMessage = (function() {

            function OrderMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            OrderMessage.create = function create(properties) {
                return new OrderMessage(properties);
            };

            OrderMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            OrderMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.OrderMessage();
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

            OrderMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.OrderMessage)
                    return d;
                return new $root.proto.Message.OrderMessage();
            };

            OrderMessage.toObject = function toObject() {
                return {};
            };

            OrderMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            OrderMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.OrderMessage";
            };

            OrderMessage.OrderStatus = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "INQUIRY"] = 1;
                values[valuesById[2] = "ACCEPTED"] = 2;
                values[valuesById[3] = "DECLINED"] = 3;
                return values;
            })();

            OrderMessage.OrderSurface = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "CATALOG"] = 1;
                return values;
            })();

            return OrderMessage;
        })();

        Message.PaymentInviteMessage = (function() {

            function PaymentInviteMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PaymentInviteMessage.create = function create(properties) {
                return new PaymentInviteMessage(properties);
            };

            PaymentInviteMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            PaymentInviteMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.PaymentInviteMessage();
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

            PaymentInviteMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.PaymentInviteMessage)
                    return d;
                return new $root.proto.Message.PaymentInviteMessage();
            };

            PaymentInviteMessage.toObject = function toObject() {
                return {};
            };

            PaymentInviteMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            PaymentInviteMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.PaymentInviteMessage";
            };

            PaymentInviteMessage.ServiceType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "FBPAY"] = 1;
                values[valuesById[2] = "NOVI"] = 2;
                values[valuesById[3] = "UPI"] = 3;
                return values;
            })();

            return PaymentInviteMessage;
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

        Message.PinInChatMessage = (function() {

            function PinInChatMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PinInChatMessage.create = function create(properties) {
                return new PinInChatMessage(properties);
            };

            PinInChatMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            PinInChatMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.PinInChatMessage();
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

            PinInChatMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.PinInChatMessage)
                    return d;
                return new $root.proto.Message.PinInChatMessage();
            };

            PinInChatMessage.toObject = function toObject() {
                return {};
            };

            PinInChatMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            PinInChatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.PinInChatMessage";
            };

            PinInChatMessage.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
                values[valuesById[1] = "PIN_FOR_ALL"] = 1;
                values[valuesById[2] = "UNPIN_FOR_ALL"] = 2;
                return values;
            })();

            return PinInChatMessage;
        })();

        Message.PlaceholderMessage = (function() {

            function PlaceholderMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PlaceholderMessage.create = function create(properties) {
                return new PlaceholderMessage(properties);
            };

            PlaceholderMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            PlaceholderMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.PlaceholderMessage();
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

            PlaceholderMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.PlaceholderMessage)
                    return d;
                return new $root.proto.Message.PlaceholderMessage();
            };

            PlaceholderMessage.toObject = function toObject() {
                return {};
            };

            PlaceholderMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            PlaceholderMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.PlaceholderMessage";
            };

            PlaceholderMessage.PlaceholderType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "MASK_LINKED_DEVICES"] = 0;
                return values;
            })();

            return PlaceholderMessage;
        })();

        Message.PollContentType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "TEXT"] = 1;
            values[valuesById[2] = "IMAGE"] = 2;
            return values;
        })();

        Message.PollCreationMessage = (function() {

            function PollCreationMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PollCreationMessage.create = function create(properties) {
                return new PollCreationMessage(properties);
            };

            PollCreationMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            PollCreationMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.PollCreationMessage();
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

            PollCreationMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.PollCreationMessage)
                    return d;
                return new $root.proto.Message.PollCreationMessage();
            };

            PollCreationMessage.toObject = function toObject() {
                return {};
            };

            PollCreationMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            PollCreationMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.PollCreationMessage";
            };

            return PollCreationMessage;
        })();

        Message.PollResultSnapshotMessage = (function() {

            function PollResultSnapshotMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PollResultSnapshotMessage.create = function create(properties) {
                return new PollResultSnapshotMessage(properties);
            };

            PollResultSnapshotMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            PollResultSnapshotMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.PollResultSnapshotMessage();
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

            PollResultSnapshotMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.PollResultSnapshotMessage)
                    return d;
                return new $root.proto.Message.PollResultSnapshotMessage();
            };

            PollResultSnapshotMessage.toObject = function toObject() {
                return {};
            };

            PollResultSnapshotMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            PollResultSnapshotMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.PollResultSnapshotMessage";
            };

            return PollResultSnapshotMessage;
        })();

        Message.PollType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "POLL"] = 0;
            values[valuesById[1] = "QUIZ"] = 1;
            return values;
        })();

        Message.PollUpdateMessage = (function() {

            function PollUpdateMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PollUpdateMessage.create = function create(properties) {
                return new PollUpdateMessage(properties);
            };

            PollUpdateMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            PollUpdateMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.PollUpdateMessage();
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

            PollUpdateMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.PollUpdateMessage)
                    return d;
                return new $root.proto.Message.PollUpdateMessage();
            };

            PollUpdateMessage.toObject = function toObject() {
                return {};
            };

            PollUpdateMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            PollUpdateMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.PollUpdateMessage";
            };

            return PollUpdateMessage;
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

        Message.ProtocolMessage = (function() {

            function ProtocolMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ProtocolMessage.create = function create(properties) {
                return new ProtocolMessage(properties);
            };

            ProtocolMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            ProtocolMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ProtocolMessage();
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

            ProtocolMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ProtocolMessage)
                    return d;
                return new $root.proto.Message.ProtocolMessage();
            };

            ProtocolMessage.toObject = function toObject() {
                return {};
            };

            ProtocolMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ProtocolMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ProtocolMessage";
            };

            ProtocolMessage.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "REVOKE"] = 0;
                values[valuesById[3] = "EPHEMERAL_SETTING"] = 3;
                values[valuesById[4] = "EPHEMERAL_SYNC_RESPONSE"] = 4;
                values[valuesById[5] = "HISTORY_SYNC_NOTIFICATION"] = 5;
                values[valuesById[6] = "APP_STATE_SYNC_KEY_SHARE"] = 6;
                values[valuesById[7] = "APP_STATE_SYNC_KEY_REQUEST"] = 7;
                values[valuesById[8] = "MSG_FANOUT_BACKFILL_REQUEST"] = 8;
                values[valuesById[9] = "INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC"] = 9;
                values[valuesById[10] = "APP_STATE_FATAL_EXCEPTION_NOTIFICATION"] = 10;
                values[valuesById[11] = "SHARE_PHONE_NUMBER"] = 11;
                values[valuesById[14] = "MESSAGE_EDIT"] = 14;
                values[valuesById[16] = "PEER_DATA_OPERATION_REQUEST_MESSAGE"] = 16;
                values[valuesById[17] = "PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE"] = 17;
                values[valuesById[18] = "REQUEST_WELCOME_MESSAGE"] = 18;
                values[valuesById[19] = "BOT_FEEDBACK_MESSAGE"] = 19;
                values[valuesById[20] = "MEDIA_NOTIFY_MESSAGE"] = 20;
                values[valuesById[21] = "CLOUD_API_THREAD_CONTROL_NOTIFICATION"] = 21;
                values[valuesById[22] = "LID_MIGRATION_MAPPING_SYNC"] = 22;
                values[valuesById[23] = "REMINDER_MESSAGE"] = 23;
                values[valuesById[24] = "BOT_MEMU_ONBOARDING_MESSAGE"] = 24;
                values[valuesById[25] = "STATUS_MENTION_MESSAGE"] = 25;
                values[valuesById[26] = "STOP_GENERATION_MESSAGE"] = 26;
                values[valuesById[27] = "LIMIT_SHARING"] = 27;
                values[valuesById[28] = "AI_PSI_METADATA"] = 28;
                values[valuesById[29] = "AI_QUERY_FANOUT"] = 29;
                values[valuesById[30] = "GROUP_MEMBER_LABEL_CHANGE"] = 30;
                return values;
            })();

            return ProtocolMessage;
        })();

        Message.QuestionResponseMessage = (function() {

            function QuestionResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            QuestionResponseMessage.create = function create(properties) {
                return new QuestionResponseMessage(properties);
            };

            QuestionResponseMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            QuestionResponseMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.QuestionResponseMessage();
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

            QuestionResponseMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.QuestionResponseMessage)
                    return d;
                return new $root.proto.Message.QuestionResponseMessage();
            };

            QuestionResponseMessage.toObject = function toObject() {
                return {};
            };

            QuestionResponseMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            QuestionResponseMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.QuestionResponseMessage";
            };

            return QuestionResponseMessage;
        })();

        Message.ReactionMessage = (function() {

            function ReactionMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ReactionMessage.create = function create(properties) {
                return new ReactionMessage(properties);
            };

            ReactionMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            ReactionMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ReactionMessage();
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

            ReactionMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ReactionMessage)
                    return d;
                return new $root.proto.Message.ReactionMessage();
            };

            ReactionMessage.toObject = function toObject() {
                return {};
            };

            ReactionMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ReactionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ReactionMessage";
            };

            return ReactionMessage;
        })();

        Message.RequestPaymentMessage = (function() {

            function RequestPaymentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            RequestPaymentMessage.create = function create(properties) {
                return new RequestPaymentMessage(properties);
            };

            RequestPaymentMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            RequestPaymentMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.RequestPaymentMessage();
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

            RequestPaymentMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.RequestPaymentMessage)
                    return d;
                return new $root.proto.Message.RequestPaymentMessage();
            };

            RequestPaymentMessage.toObject = function toObject() {
                return {};
            };

            RequestPaymentMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            RequestPaymentMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.RequestPaymentMessage";
            };

            return RequestPaymentMessage;
        })();

        Message.RequestPhoneNumberMessage = (function() {

            function RequestPhoneNumberMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            RequestPhoneNumberMessage.create = function create(properties) {
                return new RequestPhoneNumberMessage(properties);
            };

            RequestPhoneNumberMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            RequestPhoneNumberMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.RequestPhoneNumberMessage();
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

            RequestPhoneNumberMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.RequestPhoneNumberMessage)
                    return d;
                return new $root.proto.Message.RequestPhoneNumberMessage();
            };

            RequestPhoneNumberMessage.toObject = function toObject() {
                return {};
            };

            RequestPhoneNumberMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            RequestPhoneNumberMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.RequestPhoneNumberMessage";
            };

            return RequestPhoneNumberMessage;
        })();

        Message.RequestWelcomeMessageMetadata = (function() {

            const RequestWelcomeMessageMetadata = {};

            RequestWelcomeMessageMetadata.LocalChatState = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "EMPTY"] = 0;
                values[valuesById[1] = "NON_EMPTY"] = 1;
                return values;
            })();

            return RequestWelcomeMessageMetadata;
        })();

        Message.ScheduledCallCreationMessage = (function() {

            function ScheduledCallCreationMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ScheduledCallCreationMessage.create = function create(properties) {
                return new ScheduledCallCreationMessage(properties);
            };

            ScheduledCallCreationMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            ScheduledCallCreationMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ScheduledCallCreationMessage();
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

            ScheduledCallCreationMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ScheduledCallCreationMessage)
                    return d;
                return new $root.proto.Message.ScheduledCallCreationMessage();
            };

            ScheduledCallCreationMessage.toObject = function toObject() {
                return {};
            };

            ScheduledCallCreationMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ScheduledCallCreationMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ScheduledCallCreationMessage";
            };

            ScheduledCallCreationMessage.CallType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "VOICE"] = 1;
                values[valuesById[2] = "VIDEO"] = 2;
                return values;
            })();

            return ScheduledCallCreationMessage;
        })();

        Message.ScheduledCallEditMessage = (function() {

            function ScheduledCallEditMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ScheduledCallEditMessage.create = function create(properties) {
                return new ScheduledCallEditMessage(properties);
            };

            ScheduledCallEditMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            ScheduledCallEditMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.ScheduledCallEditMessage();
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

            ScheduledCallEditMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.ScheduledCallEditMessage)
                    return d;
                return new $root.proto.Message.ScheduledCallEditMessage();
            };

            ScheduledCallEditMessage.toObject = function toObject() {
                return {};
            };

            ScheduledCallEditMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ScheduledCallEditMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.ScheduledCallEditMessage";
            };

            ScheduledCallEditMessage.EditType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "CANCEL"] = 1;
                return values;
            })();

            return ScheduledCallEditMessage;
        })();

        Message.SecretEncryptedMessage = (function() {

            function SecretEncryptedMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SecretEncryptedMessage.create = function create(properties) {
                return new SecretEncryptedMessage(properties);
            };

            SecretEncryptedMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            SecretEncryptedMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.SecretEncryptedMessage();
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

            SecretEncryptedMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.SecretEncryptedMessage)
                    return d;
                return new $root.proto.Message.SecretEncryptedMessage();
            };

            SecretEncryptedMessage.toObject = function toObject() {
                return {};
            };

            SecretEncryptedMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SecretEncryptedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.SecretEncryptedMessage";
            };

            SecretEncryptedMessage.SecretEncType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "EVENT_EDIT"] = 1;
                values[valuesById[2] = "MESSAGE_EDIT"] = 2;
                return values;
            })();

            return SecretEncryptedMessage;
        })();

        Message.SendPaymentMessage = (function() {

            function SendPaymentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SendPaymentMessage.create = function create(properties) {
                return new SendPaymentMessage(properties);
            };

            SendPaymentMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            SendPaymentMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.SendPaymentMessage();
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

            SendPaymentMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.SendPaymentMessage)
                    return d;
                return new $root.proto.Message.SendPaymentMessage();
            };

            SendPaymentMessage.toObject = function toObject() {
                return {};
            };

            SendPaymentMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SendPaymentMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.SendPaymentMessage";
            };

            return SendPaymentMessage;
        })();

        Message.SenderKeyDistributionMessage = (function() {

            function SenderKeyDistributionMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

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
                return w;
            };

            SenderKeyDistributionMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.SenderKeyDistributionMessage();
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

            SenderKeyDistributionMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.SenderKeyDistributionMessage)
                    return d;
                return new $root.proto.Message.SenderKeyDistributionMessage();
            };

            SenderKeyDistributionMessage.toObject = function toObject() {
                return {};
            };

            SenderKeyDistributionMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SenderKeyDistributionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.SenderKeyDistributionMessage";
            };

            return SenderKeyDistributionMessage;
        })();

        Message.StatusNotificationMessage = (function() {

            function StatusNotificationMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusNotificationMessage.create = function create(properties) {
                return new StatusNotificationMessage(properties);
            };

            StatusNotificationMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            StatusNotificationMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.StatusNotificationMessage();
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

            StatusNotificationMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.StatusNotificationMessage)
                    return d;
                return new $root.proto.Message.StatusNotificationMessage();
            };

            StatusNotificationMessage.toObject = function toObject() {
                return {};
            };

            StatusNotificationMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StatusNotificationMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.StatusNotificationMessage";
            };

            StatusNotificationMessage.StatusNotificationType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "STATUS_ADD_YOURS"] = 1;
                values[valuesById[2] = "STATUS_RESHARE"] = 2;
                values[valuesById[3] = "STATUS_QUESTION_ANSWER_RESHARE"] = 3;
                return values;
            })();

            return StatusNotificationMessage;
        })();

        Message.StatusQuestionAnswerMessage = (function() {

            function StatusQuestionAnswerMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusQuestionAnswerMessage.create = function create(properties) {
                return new StatusQuestionAnswerMessage(properties);
            };

            StatusQuestionAnswerMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            StatusQuestionAnswerMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.StatusQuestionAnswerMessage();
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

            StatusQuestionAnswerMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.StatusQuestionAnswerMessage)
                    return d;
                return new $root.proto.Message.StatusQuestionAnswerMessage();
            };

            StatusQuestionAnswerMessage.toObject = function toObject() {
                return {};
            };

            StatusQuestionAnswerMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StatusQuestionAnswerMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.StatusQuestionAnswerMessage";
            };

            return StatusQuestionAnswerMessage;
        })();

        Message.StatusQuotedMessage = (function() {

            function StatusQuotedMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusQuotedMessage.create = function create(properties) {
                return new StatusQuotedMessage(properties);
            };

            StatusQuotedMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            StatusQuotedMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.StatusQuotedMessage();
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

            StatusQuotedMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.StatusQuotedMessage)
                    return d;
                return new $root.proto.Message.StatusQuotedMessage();
            };

            StatusQuotedMessage.toObject = function toObject() {
                return {};
            };

            StatusQuotedMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StatusQuotedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.StatusQuotedMessage";
            };

            StatusQuotedMessage.StatusQuotedMessageType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "QUESTION_ANSWER"] = 1;
                return values;
            })();

            return StatusQuotedMessage;
        })();

        Message.StatusStickerInteractionMessage = (function() {

            function StatusStickerInteractionMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusStickerInteractionMessage.create = function create(properties) {
                return new StatusStickerInteractionMessage(properties);
            };

            StatusStickerInteractionMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            StatusStickerInteractionMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.StatusStickerInteractionMessage();
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

            StatusStickerInteractionMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.StatusStickerInteractionMessage)
                    return d;
                return new $root.proto.Message.StatusStickerInteractionMessage();
            };

            StatusStickerInteractionMessage.toObject = function toObject() {
                return {};
            };

            StatusStickerInteractionMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StatusStickerInteractionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.StatusStickerInteractionMessage";
            };

            StatusStickerInteractionMessage.StatusStickerType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "REACTION"] = 1;
                return values;
            })();

            return StatusStickerInteractionMessage;
        })();

        Message.StickerMessage = (function() {

            function StickerMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

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
                return new $root.proto.Message.StickerMessage();
            };

            StickerMessage.toObject = function toObject() {
                return {};
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

        Message.StickerPackMessage = (function() {

            function StickerPackMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StickerPackMessage.create = function create(properties) {
                return new StickerPackMessage(properties);
            };

            StickerPackMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            StickerPackMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.StickerPackMessage();
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

            StickerPackMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.StickerPackMessage)
                    return d;
                return new $root.proto.Message.StickerPackMessage();
            };

            StickerPackMessage.toObject = function toObject() {
                return {};
            };

            StickerPackMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StickerPackMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.StickerPackMessage";
            };

            StickerPackMessage.StickerPackOrigin = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "FIRST_PARTY"] = 0;
                values[valuesById[1] = "THIRD_PARTY"] = 1;
                values[valuesById[2] = "USER_CREATED"] = 2;
                return values;
            })();

            return StickerPackMessage;
        })();

        Message.StickerSyncRMRMessage = (function() {

            function StickerSyncRMRMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StickerSyncRMRMessage.create = function create(properties) {
                return new StickerSyncRMRMessage(properties);
            };

            StickerSyncRMRMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            StickerSyncRMRMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.StickerSyncRMRMessage();
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

            StickerSyncRMRMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.StickerSyncRMRMessage)
                    return d;
                return new $root.proto.Message.StickerSyncRMRMessage();
            };

            StickerSyncRMRMessage.toObject = function toObject() {
                return {};
            };

            StickerSyncRMRMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StickerSyncRMRMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.StickerSyncRMRMessage";
            };

            return StickerSyncRMRMessage;
        })();

        Message.TemplateButtonReplyMessage = (function() {

            function TemplateButtonReplyMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            TemplateButtonReplyMessage.create = function create(properties) {
                return new TemplateButtonReplyMessage(properties);
            };

            TemplateButtonReplyMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            TemplateButtonReplyMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.TemplateButtonReplyMessage();
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

            TemplateButtonReplyMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.TemplateButtonReplyMessage)
                    return d;
                return new $root.proto.Message.TemplateButtonReplyMessage();
            };

            TemplateButtonReplyMessage.toObject = function toObject() {
                return {};
            };

            TemplateButtonReplyMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            TemplateButtonReplyMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.TemplateButtonReplyMessage";
            };

            return TemplateButtonReplyMessage;
        })();

        Message.TemplateMessage = (function() {

            function TemplateMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            TemplateMessage.create = function create(properties) {
                return new TemplateMessage(properties);
            };

            TemplateMessage.encode = function encode(m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return w;
            };

            TemplateMessage.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.Message.TemplateMessage();
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

            TemplateMessage.fromObject = function fromObject(d, n) {
                if (d instanceof $root.proto.Message.TemplateMessage)
                    return d;
                return new $root.proto.Message.TemplateMessage();
            };

            TemplateMessage.toObject = function toObject() {
                return {};
            };

            TemplateMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            TemplateMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Message.TemplateMessage";
            };

            return TemplateMessage;
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

        function MessageAddOn(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MessageAddOn.prototype.messageAddOnType = null;
        MessageAddOn.prototype.messageAddOn = null;
        MessageAddOn.prototype.senderTimestampMs = null;
        MessageAddOn.prototype.serverTimestampMs = null;
        MessageAddOn.prototype.status = null;
        MessageAddOn.prototype.addOnContextInfo = null;
        MessageAddOn.prototype.messageAddOnKey = null;
        MessageAddOn.prototype.legacyMessage = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAddOn.prototype, "_messageAddOnType", {
            get: $util.oneOfGetter($oneOfFields = ["messageAddOnType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAddOn.prototype, "_messageAddOn", {
            get: $util.oneOfGetter($oneOfFields = ["messageAddOn"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAddOn.prototype, "_senderTimestampMs", {
            get: $util.oneOfGetter($oneOfFields = ["senderTimestampMs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAddOn.prototype, "_serverTimestampMs", {
            get: $util.oneOfGetter($oneOfFields = ["serverTimestampMs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAddOn.prototype, "_status", {
            get: $util.oneOfGetter($oneOfFields = ["status"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAddOn.prototype, "_addOnContextInfo", {
            get: $util.oneOfGetter($oneOfFields = ["addOnContextInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAddOn.prototype, "_messageAddOnKey", {
            get: $util.oneOfGetter($oneOfFields = ["messageAddOnKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAddOn.prototype, "_legacyMessage", {
            get: $util.oneOfGetter($oneOfFields = ["legacyMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MessageAddOn.create = function create(properties) {
            return new MessageAddOn(properties);
        };

        MessageAddOn.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.messageAddOnType != null && Object.hasOwnProperty.call(m, "messageAddOnType"))
                w.uint32(8).int32(m.messageAddOnType);
            if (m.messageAddOn != null && Object.hasOwnProperty.call(m, "messageAddOn"))
                $root.proto.Message.encode(m.messageAddOn, w.uint32(18).fork(), q + 1).ldelim();
            if (m.senderTimestampMs != null && Object.hasOwnProperty.call(m, "senderTimestampMs"))
                w.uint32(24).int64(m.senderTimestampMs);
            if (m.serverTimestampMs != null && Object.hasOwnProperty.call(m, "serverTimestampMs"))
                w.uint32(32).int64(m.serverTimestampMs);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(40).int32(m.status);
            if (m.addOnContextInfo != null && Object.hasOwnProperty.call(m, "addOnContextInfo"))
                $root.proto.MessageAddOnContextInfo.encode(m.addOnContextInfo, w.uint32(50).fork(), q + 1).ldelim();
            if (m.messageAddOnKey != null && Object.hasOwnProperty.call(m, "messageAddOnKey"))
                $root.proto.MessageKey.encode(m.messageAddOnKey, w.uint32(58).fork(), q + 1).ldelim();
            if (m.legacyMessage != null && Object.hasOwnProperty.call(m, "legacyMessage"))
                $root.proto.LegacyMessage.encode(m.legacyMessage, w.uint32(66).fork(), q + 1).ldelim();
            return w;
        };

        MessageAddOn.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.MessageAddOn();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.messageAddOnType = r.int32();
                        break;
                    }
                case 2: {
                        m.messageAddOn = $root.proto.Message.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.senderTimestampMs = r.int64();
                        break;
                    }
                case 4: {
                        m.serverTimestampMs = r.int64();
                        break;
                    }
                case 5: {
                        m.status = r.int32();
                        break;
                    }
                case 6: {
                        m.addOnContextInfo = $root.proto.MessageAddOnContextInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 7: {
                        m.messageAddOnKey = $root.proto.MessageKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 8: {
                        m.legacyMessage = $root.proto.LegacyMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MessageAddOn.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.MessageAddOn)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.MessageAddOn: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.MessageAddOn();
            switch (d.messageAddOnType) {
            default:
                if (typeof d.messageAddOnType === "number") {
                    m.messageAddOnType = d.messageAddOnType;
                    break;
                }
                break;
            case "UNDEFINED":
            case 0:
                m.messageAddOnType = 0;
                break;
            case "REACTION":
            case 1:
                m.messageAddOnType = 1;
                break;
            case "EVENT_RESPONSE":
            case 2:
                m.messageAddOnType = 2;
                break;
            case "POLL_UPDATE":
            case 3:
                m.messageAddOnType = 3;
                break;
            case "PIN_IN_CHAT":
            case 4:
                m.messageAddOnType = 4;
                break;
            }
            if (d.messageAddOn != null) {
                if (!$util.isObject(d.messageAddOn))
                    throw TypeError(".proto.MessageAddOn.messageAddOn: object expected");
                m.messageAddOn = $root.proto.Message.fromObject(d.messageAddOn, n + 1);
            }
            if (d.senderTimestampMs != null) {
                if ($util.Long)
                    m.senderTimestampMs = $util.Long.fromValue(d.senderTimestampMs, false);
                else if (typeof d.senderTimestampMs === "string")
                    m.senderTimestampMs = parseInt(d.senderTimestampMs, 10);
                else if (typeof d.senderTimestampMs === "number")
                    m.senderTimestampMs = d.senderTimestampMs;
                else if (typeof d.senderTimestampMs === "object")
                    m.senderTimestampMs = new $util.LongBits(d.senderTimestampMs.low >>> 0, d.senderTimestampMs.high >>> 0).toNumber();
            }
            if (d.serverTimestampMs != null) {
                if ($util.Long)
                    m.serverTimestampMs = $util.Long.fromValue(d.serverTimestampMs, false);
                else if (typeof d.serverTimestampMs === "string")
                    m.serverTimestampMs = parseInt(d.serverTimestampMs, 10);
                else if (typeof d.serverTimestampMs === "number")
                    m.serverTimestampMs = d.serverTimestampMs;
                else if (typeof d.serverTimestampMs === "object")
                    m.serverTimestampMs = new $util.LongBits(d.serverTimestampMs.low >>> 0, d.serverTimestampMs.high >>> 0).toNumber();
            }
            switch (d.status) {
            default:
                if (typeof d.status === "number") {
                    m.status = d.status;
                    break;
                }
                break;
            case "ERROR":
            case 0:
                m.status = 0;
                break;
            case "PENDING":
            case 1:
                m.status = 1;
                break;
            case "SERVER_ACK":
            case 2:
                m.status = 2;
                break;
            case "DELIVERY_ACK":
            case 3:
                m.status = 3;
                break;
            case "READ":
            case 4:
                m.status = 4;
                break;
            case "PLAYED":
            case 5:
                m.status = 5;
                break;
            }
            if (d.addOnContextInfo != null) {
                if (!$util.isObject(d.addOnContextInfo))
                    throw TypeError(".proto.MessageAddOn.addOnContextInfo: object expected");
                m.addOnContextInfo = $root.proto.MessageAddOnContextInfo.fromObject(d.addOnContextInfo, n + 1);
            }
            if (d.messageAddOnKey != null) {
                if (!$util.isObject(d.messageAddOnKey))
                    throw TypeError(".proto.MessageAddOn.messageAddOnKey: object expected");
                m.messageAddOnKey = $root.proto.MessageKey.fromObject(d.messageAddOnKey, n + 1);
            }
            if (d.legacyMessage != null) {
                if (!$util.isObject(d.legacyMessage))
                    throw TypeError(".proto.MessageAddOn.legacyMessage: object expected");
                m.legacyMessage = $root.proto.LegacyMessage.fromObject(d.legacyMessage, n + 1);
            }
            return m;
        };

        MessageAddOn.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (m.messageAddOnType != null && Object.hasOwnProperty.call(m, "messageAddOnType")) {
                d.messageAddOnType = o.enums === String ? $root.proto.MessageAddOn.MessageAddOnType[m.messageAddOnType] === undefined ? m.messageAddOnType : $root.proto.MessageAddOn.MessageAddOnType[m.messageAddOnType] : m.messageAddOnType;
                if (o.oneofs)
                    d._messageAddOnType = "messageAddOnType";
            }
            if (m.messageAddOn != null && Object.hasOwnProperty.call(m, "messageAddOn")) {
                d.messageAddOn = $root.proto.Message.toObject(m.messageAddOn, o, q + 1);
                if (o.oneofs)
                    d._messageAddOn = "messageAddOn";
            }
            if (m.senderTimestampMs != null && Object.hasOwnProperty.call(m, "senderTimestampMs")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.senderTimestampMs = typeof m.senderTimestampMs === "number" ? BigInt(m.senderTimestampMs) : $util.Long.fromBits(m.senderTimestampMs.low >>> 0, m.senderTimestampMs.high >>> 0, false).toBigInt();
                else if (typeof m.senderTimestampMs === "number")
                    d.senderTimestampMs = o.longs === String ? String(m.senderTimestampMs) : m.senderTimestampMs;
                else
                    d.senderTimestampMs = o.longs === String ? longToString(m.senderTimestampMs) : o.longs === Number ? longToNumber(m.senderTimestampMs) : m.senderTimestampMs;
                if (o.oneofs)
                    d._senderTimestampMs = "senderTimestampMs";
            }
            if (m.serverTimestampMs != null && Object.hasOwnProperty.call(m, "serverTimestampMs")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.serverTimestampMs = typeof m.serverTimestampMs === "number" ? BigInt(m.serverTimestampMs) : $util.Long.fromBits(m.serverTimestampMs.low >>> 0, m.serverTimestampMs.high >>> 0, false).toBigInt();
                else if (typeof m.serverTimestampMs === "number")
                    d.serverTimestampMs = o.longs === String ? String(m.serverTimestampMs) : m.serverTimestampMs;
                else
                    d.serverTimestampMs = o.longs === String ? longToString(m.serverTimestampMs) : o.longs === Number ? longToNumber(m.serverTimestampMs) : m.serverTimestampMs;
                if (o.oneofs)
                    d._serverTimestampMs = "serverTimestampMs";
            }
            if (m.status != null && Object.hasOwnProperty.call(m, "status")) {
                d.status = o.enums === String ? $root.proto.WebMessageInfo.Status[m.status] === undefined ? m.status : $root.proto.WebMessageInfo.Status[m.status] : m.status;
                if (o.oneofs)
                    d._status = "status";
            }
            if (m.addOnContextInfo != null && Object.hasOwnProperty.call(m, "addOnContextInfo")) {
                d.addOnContextInfo = $root.proto.MessageAddOnContextInfo.toObject(m.addOnContextInfo, o, q + 1);
                if (o.oneofs)
                    d._addOnContextInfo = "addOnContextInfo";
            }
            if (m.messageAddOnKey != null && Object.hasOwnProperty.call(m, "messageAddOnKey")) {
                d.messageAddOnKey = $root.proto.MessageKey.toObject(m.messageAddOnKey, o, q + 1);
                if (o.oneofs)
                    d._messageAddOnKey = "messageAddOnKey";
            }
            if (m.legacyMessage != null && Object.hasOwnProperty.call(m, "legacyMessage")) {
                d.legacyMessage = $root.proto.LegacyMessage.toObject(m.legacyMessage, o, q + 1);
                if (o.oneofs)
                    d._legacyMessage = "legacyMessage";
            }
            return d;
        };

        MessageAddOn.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MessageAddOn.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.MessageAddOn";
        };

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

    proto.MessageAddOnContextInfo = (function() {

        function MessageAddOnContextInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MessageAddOnContextInfo.prototype.messageAddOnDurationInSecs = null;
        MessageAddOnContextInfo.prototype.messageAddOnExpiryType = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAddOnContextInfo.prototype, "_messageAddOnDurationInSecs", {
            get: $util.oneOfGetter($oneOfFields = ["messageAddOnDurationInSecs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAddOnContextInfo.prototype, "_messageAddOnExpiryType", {
            get: $util.oneOfGetter($oneOfFields = ["messageAddOnExpiryType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MessageAddOnContextInfo.create = function create(properties) {
            return new MessageAddOnContextInfo(properties);
        };

        MessageAddOnContextInfo.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.messageAddOnDurationInSecs != null && Object.hasOwnProperty.call(m, "messageAddOnDurationInSecs"))
                w.uint32(8).uint32(m.messageAddOnDurationInSecs);
            if (m.messageAddOnExpiryType != null && Object.hasOwnProperty.call(m, "messageAddOnExpiryType"))
                w.uint32(16).int32(m.messageAddOnExpiryType);
            return w;
        };

        MessageAddOnContextInfo.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.MessageAddOnContextInfo();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.messageAddOnDurationInSecs = r.uint32();
                        break;
                    }
                case 2: {
                        m.messageAddOnExpiryType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MessageAddOnContextInfo.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.MessageAddOnContextInfo)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.MessageAddOnContextInfo: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.MessageAddOnContextInfo();
            if (d.messageAddOnDurationInSecs != null) {
                m.messageAddOnDurationInSecs = d.messageAddOnDurationInSecs >>> 0;
            }
            switch (d.messageAddOnExpiryType) {
            default:
                if (typeof d.messageAddOnExpiryType === "number") {
                    m.messageAddOnExpiryType = d.messageAddOnExpiryType;
                    break;
                }
                break;
            case "STATIC":
            case 1:
                m.messageAddOnExpiryType = 1;
                break;
            case "DEPENDENT_ON_PARENT":
            case 2:
                m.messageAddOnExpiryType = 2;
                break;
            }
            return m;
        };

        MessageAddOnContextInfo.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (m.messageAddOnDurationInSecs != null && Object.hasOwnProperty.call(m, "messageAddOnDurationInSecs")) {
                d.messageAddOnDurationInSecs = m.messageAddOnDurationInSecs;
                if (o.oneofs)
                    d._messageAddOnDurationInSecs = "messageAddOnDurationInSecs";
            }
            if (m.messageAddOnExpiryType != null && Object.hasOwnProperty.call(m, "messageAddOnExpiryType")) {
                d.messageAddOnExpiryType = o.enums === String ? $root.proto.MessageContextInfo.MessageAddonExpiryType[m.messageAddOnExpiryType] === undefined ? m.messageAddOnExpiryType : $root.proto.MessageContextInfo.MessageAddonExpiryType[m.messageAddOnExpiryType] : m.messageAddOnExpiryType;
                if (o.oneofs)
                    d._messageAddOnExpiryType = "messageAddOnExpiryType";
            }
            return d;
        };

        MessageAddOnContextInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MessageAddOnContextInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.MessageAddOnContextInfo";
        };

        return MessageAddOnContextInfo;
    })();

    proto.MessageAssociation = (function() {

        function MessageAssociation(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MessageAssociation.prototype.associationType = null;
        MessageAssociation.prototype.parentMessageKey = null;
        MessageAssociation.prototype.messageIndex = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAssociation.prototype, "_associationType", {
            get: $util.oneOfGetter($oneOfFields = ["associationType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAssociation.prototype, "_parentMessageKey", {
            get: $util.oneOfGetter($oneOfFields = ["parentMessageKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageAssociation.prototype, "_messageIndex", {
            get: $util.oneOfGetter($oneOfFields = ["messageIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MessageAssociation.create = function create(properties) {
            return new MessageAssociation(properties);
        };

        MessageAssociation.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.associationType != null && Object.hasOwnProperty.call(m, "associationType"))
                w.uint32(8).int32(m.associationType);
            if (m.parentMessageKey != null && Object.hasOwnProperty.call(m, "parentMessageKey"))
                $root.proto.MessageKey.encode(m.parentMessageKey, w.uint32(18).fork(), q + 1).ldelim();
            if (m.messageIndex != null && Object.hasOwnProperty.call(m, "messageIndex"))
                w.uint32(24).int32(m.messageIndex);
            return w;
        };

        MessageAssociation.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.MessageAssociation();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.associationType = r.int32();
                        break;
                    }
                case 2: {
                        m.parentMessageKey = $root.proto.MessageKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.messageIndex = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MessageAssociation.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.MessageAssociation)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.MessageAssociation: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.MessageAssociation();
            switch (d.associationType) {
            default:
                if (typeof d.associationType === "number") {
                    m.associationType = d.associationType;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                m.associationType = 0;
                break;
            case "MEDIA_ALBUM":
            case 1:
                m.associationType = 1;
                break;
            case "BOT_PLUGIN":
            case 2:
                m.associationType = 2;
                break;
            case "EVENT_COVER_IMAGE":
            case 3:
                m.associationType = 3;
                break;
            case "STATUS_POLL":
            case 4:
                m.associationType = 4;
                break;
            case "HD_VIDEO_DUAL_UPLOAD":
            case 5:
                m.associationType = 5;
                break;
            case "STATUS_EXTERNAL_RESHARE":
            case 6:
                m.associationType = 6;
                break;
            case "MEDIA_POLL":
            case 7:
                m.associationType = 7;
                break;
            case "STATUS_ADD_YOURS":
            case 8:
                m.associationType = 8;
                break;
            case "STATUS_NOTIFICATION":
            case 9:
                m.associationType = 9;
                break;
            case "HD_IMAGE_DUAL_UPLOAD":
            case 10:
                m.associationType = 10;
                break;
            case "STICKER_ANNOTATION":
            case 11:
                m.associationType = 11;
                break;
            case "MOTION_PHOTO":
            case 12:
                m.associationType = 12;
                break;
            case "STATUS_LINK_ACTION":
            case 13:
                m.associationType = 13;
                break;
            case "VIEW_ALL_REPLIES":
            case 14:
                m.associationType = 14;
                break;
            case "STATUS_ADD_YOURS_AI_IMAGINE":
            case 15:
                m.associationType = 15;
                break;
            case "STATUS_QUESTION":
            case 16:
                m.associationType = 16;
                break;
            case "STATUS_ADD_YOURS_DIWALI":
            case 17:
                m.associationType = 17;
                break;
            case "STATUS_REACTION":
            case 18:
                m.associationType = 18;
                break;
            case "HEVC_VIDEO_DUAL_UPLOAD":
            case 19:
                m.associationType = 19;
                break;
            }
            if (d.parentMessageKey != null) {
                if (!$util.isObject(d.parentMessageKey))
                    throw TypeError(".proto.MessageAssociation.parentMessageKey: object expected");
                m.parentMessageKey = $root.proto.MessageKey.fromObject(d.parentMessageKey, n + 1);
            }
            if (d.messageIndex != null) {
                m.messageIndex = d.messageIndex | 0;
            }
            return m;
        };

        MessageAssociation.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (m.associationType != null && Object.hasOwnProperty.call(m, "associationType")) {
                d.associationType = o.enums === String ? $root.proto.MessageAssociation.AssociationType[m.associationType] === undefined ? m.associationType : $root.proto.MessageAssociation.AssociationType[m.associationType] : m.associationType;
                if (o.oneofs)
                    d._associationType = "associationType";
            }
            if (m.parentMessageKey != null && Object.hasOwnProperty.call(m, "parentMessageKey")) {
                d.parentMessageKey = $root.proto.MessageKey.toObject(m.parentMessageKey, o, q + 1);
                if (o.oneofs)
                    d._parentMessageKey = "parentMessageKey";
            }
            if (m.messageIndex != null && Object.hasOwnProperty.call(m, "messageIndex")) {
                d.messageIndex = m.messageIndex;
                if (o.oneofs)
                    d._messageIndex = "messageIndex";
            }
            return d;
        };

        MessageAssociation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MessageAssociation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.MessageAssociation";
        };

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

        function MessageContextInfo(p) {
            this.threadId = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MessageContextInfo.prototype.deviceListMetadata = null;
        MessageContextInfo.prototype.deviceListMetadataVersion = null;
        MessageContextInfo.prototype.messageSecret = null;
        MessageContextInfo.prototype.paddingBytes = null;
        MessageContextInfo.prototype.messageAddOnDurationInSecs = null;
        MessageContextInfo.prototype.botMessageSecret = null;
        MessageContextInfo.prototype.botMetadata = null;
        MessageContextInfo.prototype.reportingTokenVersion = null;
        MessageContextInfo.prototype.messageAddOnExpiryType = null;
        MessageContextInfo.prototype.messageAssociation = null;
        MessageContextInfo.prototype.capiCreatedGroup = null;
        MessageContextInfo.prototype.supportPayload = null;
        MessageContextInfo.prototype.limitSharing = null;
        MessageContextInfo.prototype.limitSharingV2 = null;
        MessageContextInfo.prototype.threadId = $util.emptyArray;
        MessageContextInfo.prototype.weblinkRenderConfig = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_deviceListMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["deviceListMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_deviceListMetadataVersion", {
            get: $util.oneOfGetter($oneOfFields = ["deviceListMetadataVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_messageSecret", {
            get: $util.oneOfGetter($oneOfFields = ["messageSecret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_paddingBytes", {
            get: $util.oneOfGetter($oneOfFields = ["paddingBytes"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_messageAddOnDurationInSecs", {
            get: $util.oneOfGetter($oneOfFields = ["messageAddOnDurationInSecs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_botMessageSecret", {
            get: $util.oneOfGetter($oneOfFields = ["botMessageSecret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_botMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_reportingTokenVersion", {
            get: $util.oneOfGetter($oneOfFields = ["reportingTokenVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_messageAddOnExpiryType", {
            get: $util.oneOfGetter($oneOfFields = ["messageAddOnExpiryType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_messageAssociation", {
            get: $util.oneOfGetter($oneOfFields = ["messageAssociation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_capiCreatedGroup", {
            get: $util.oneOfGetter($oneOfFields = ["capiCreatedGroup"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_supportPayload", {
            get: $util.oneOfGetter($oneOfFields = ["supportPayload"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_limitSharing", {
            get: $util.oneOfGetter($oneOfFields = ["limitSharing"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_limitSharingV2", {
            get: $util.oneOfGetter($oneOfFields = ["limitSharingV2"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageContextInfo.prototype, "_weblinkRenderConfig", {
            get: $util.oneOfGetter($oneOfFields = ["weblinkRenderConfig"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MessageContextInfo.create = function create(properties) {
            return new MessageContextInfo(properties);
        };

        MessageContextInfo.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.deviceListMetadata != null && Object.hasOwnProperty.call(m, "deviceListMetadata"))
                $root.proto.DeviceListMetadata.encode(m.deviceListMetadata, w.uint32(10).fork(), q + 1).ldelim();
            if (m.deviceListMetadataVersion != null && Object.hasOwnProperty.call(m, "deviceListMetadataVersion"))
                w.uint32(16).int32(m.deviceListMetadataVersion);
            if (m.messageSecret != null && Object.hasOwnProperty.call(m, "messageSecret"))
                w.uint32(26).bytes(m.messageSecret);
            if (m.paddingBytes != null && Object.hasOwnProperty.call(m, "paddingBytes"))
                w.uint32(34).bytes(m.paddingBytes);
            if (m.messageAddOnDurationInSecs != null && Object.hasOwnProperty.call(m, "messageAddOnDurationInSecs"))
                w.uint32(40).uint32(m.messageAddOnDurationInSecs);
            if (m.botMessageSecret != null && Object.hasOwnProperty.call(m, "botMessageSecret"))
                w.uint32(50).bytes(m.botMessageSecret);
            if (m.botMetadata != null && Object.hasOwnProperty.call(m, "botMetadata"))
                $root.proto.BotMetadata.encode(m.botMetadata, w.uint32(58).fork(), q + 1).ldelim();
            if (m.reportingTokenVersion != null && Object.hasOwnProperty.call(m, "reportingTokenVersion"))
                w.uint32(64).int32(m.reportingTokenVersion);
            if (m.messageAddOnExpiryType != null && Object.hasOwnProperty.call(m, "messageAddOnExpiryType"))
                w.uint32(72).int32(m.messageAddOnExpiryType);
            if (m.messageAssociation != null && Object.hasOwnProperty.call(m, "messageAssociation"))
                $root.proto.MessageAssociation.encode(m.messageAssociation, w.uint32(82).fork(), q + 1).ldelim();
            if (m.capiCreatedGroup != null && Object.hasOwnProperty.call(m, "capiCreatedGroup"))
                w.uint32(88).bool(m.capiCreatedGroup);
            if (m.supportPayload != null && Object.hasOwnProperty.call(m, "supportPayload"))
                w.uint32(98).string(m.supportPayload);
            if (m.limitSharing != null && Object.hasOwnProperty.call(m, "limitSharing"))
                $root.proto.LimitSharing.encode(m.limitSharing, w.uint32(106).fork(), q + 1).ldelim();
            if (m.limitSharingV2 != null && Object.hasOwnProperty.call(m, "limitSharingV2"))
                $root.proto.LimitSharing.encode(m.limitSharingV2, w.uint32(114).fork(), q + 1).ldelim();
            if (m.threadId != null && m.threadId.length) {
                for (var i = 0; i < m.threadId.length; ++i)
                    $root.proto.ThreadID.encode(m.threadId[i], w.uint32(122).fork(), q + 1).ldelim();
            }
            if (m.weblinkRenderConfig != null && Object.hasOwnProperty.call(m, "weblinkRenderConfig"))
                $root.proto.WebLinkRenderConfig.encode(m.weblinkRenderConfig, w.uint32(130).fork(), q + 1).ldelim();
            return w;
        };

        MessageContextInfo.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.MessageContextInfo();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.deviceListMetadata = $root.proto.DeviceListMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.deviceListMetadataVersion = r.int32();
                        break;
                    }
                case 3: {
                        m.messageSecret = r.bytes();
                        break;
                    }
                case 4: {
                        m.paddingBytes = r.bytes();
                        break;
                    }
                case 5: {
                        m.messageAddOnDurationInSecs = r.uint32();
                        break;
                    }
                case 6: {
                        m.botMessageSecret = r.bytes();
                        break;
                    }
                case 7: {
                        m.botMetadata = $root.proto.BotMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 8: {
                        m.reportingTokenVersion = r.int32();
                        break;
                    }
                case 9: {
                        m.messageAddOnExpiryType = r.int32();
                        break;
                    }
                case 10: {
                        m.messageAssociation = $root.proto.MessageAssociation.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 11: {
                        m.capiCreatedGroup = r.bool();
                        break;
                    }
                case 12: {
                        m.supportPayload = r.string();
                        break;
                    }
                case 13: {
                        m.limitSharing = $root.proto.LimitSharing.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 14: {
                        m.limitSharingV2 = $root.proto.LimitSharing.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 15: {
                        if (!(m.threadId && m.threadId.length))
                            m.threadId = [];
                        m.threadId.push($root.proto.ThreadID.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 16: {
                        m.weblinkRenderConfig = $root.proto.WebLinkRenderConfig.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MessageContextInfo.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.MessageContextInfo)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.MessageContextInfo: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.MessageContextInfo();
            if (d.deviceListMetadata != null) {
                if (!$util.isObject(d.deviceListMetadata))
                    throw TypeError(".proto.MessageContextInfo.deviceListMetadata: object expected");
                m.deviceListMetadata = $root.proto.DeviceListMetadata.fromObject(d.deviceListMetadata, n + 1);
            }
            if (d.deviceListMetadataVersion != null) {
                m.deviceListMetadataVersion = d.deviceListMetadataVersion | 0;
            }
            if (d.messageSecret != null) {
                if (typeof d.messageSecret === "string")
                    $util.base64.decode(d.messageSecret, m.messageSecret = $util.newBuffer($util.base64.length(d.messageSecret)), 0);
                else if (d.messageSecret.length >= 0)
                    m.messageSecret = d.messageSecret;
            }
            if (d.paddingBytes != null) {
                if (typeof d.paddingBytes === "string")
                    $util.base64.decode(d.paddingBytes, m.paddingBytes = $util.newBuffer($util.base64.length(d.paddingBytes)), 0);
                else if (d.paddingBytes.length >= 0)
                    m.paddingBytes = d.paddingBytes;
            }
            if (d.messageAddOnDurationInSecs != null) {
                m.messageAddOnDurationInSecs = d.messageAddOnDurationInSecs >>> 0;
            }
            if (d.botMessageSecret != null) {
                if (typeof d.botMessageSecret === "string")
                    $util.base64.decode(d.botMessageSecret, m.botMessageSecret = $util.newBuffer($util.base64.length(d.botMessageSecret)), 0);
                else if (d.botMessageSecret.length >= 0)
                    m.botMessageSecret = d.botMessageSecret;
            }
            if (d.botMetadata != null) {
                if (!$util.isObject(d.botMetadata))
                    throw TypeError(".proto.MessageContextInfo.botMetadata: object expected");
                m.botMetadata = $root.proto.BotMetadata.fromObject(d.botMetadata, n + 1);
            }
            if (d.reportingTokenVersion != null) {
                m.reportingTokenVersion = d.reportingTokenVersion | 0;
            }
            switch (d.messageAddOnExpiryType) {
            default:
                if (typeof d.messageAddOnExpiryType === "number") {
                    m.messageAddOnExpiryType = d.messageAddOnExpiryType;
                    break;
                }
                break;
            case "STATIC":
            case 1:
                m.messageAddOnExpiryType = 1;
                break;
            case "DEPENDENT_ON_PARENT":
            case 2:
                m.messageAddOnExpiryType = 2;
                break;
            }
            if (d.messageAssociation != null) {
                if (!$util.isObject(d.messageAssociation))
                    throw TypeError(".proto.MessageContextInfo.messageAssociation: object expected");
                m.messageAssociation = $root.proto.MessageAssociation.fromObject(d.messageAssociation, n + 1);
            }
            if (d.capiCreatedGroup != null) {
                m.capiCreatedGroup = Boolean(d.capiCreatedGroup);
            }
            if (d.supportPayload != null) {
                m.supportPayload = String(d.supportPayload);
            }
            if (d.limitSharing != null) {
                if (!$util.isObject(d.limitSharing))
                    throw TypeError(".proto.MessageContextInfo.limitSharing: object expected");
                m.limitSharing = $root.proto.LimitSharing.fromObject(d.limitSharing, n + 1);
            }
            if (d.limitSharingV2 != null) {
                if (!$util.isObject(d.limitSharingV2))
                    throw TypeError(".proto.MessageContextInfo.limitSharingV2: object expected");
                m.limitSharingV2 = $root.proto.LimitSharing.fromObject(d.limitSharingV2, n + 1);
            }
            if (d.threadId) {
                if (!Array.isArray(d.threadId))
                    throw TypeError(".proto.MessageContextInfo.threadId: array expected");
                m.threadId = [];
                for (var i = 0; i < d.threadId.length; ++i) {
                    if (!$util.isObject(d.threadId[i]))
                        throw TypeError(".proto.MessageContextInfo.threadId: object expected");
                    m.threadId[i] = $root.proto.ThreadID.fromObject(d.threadId[i], n + 1);
                }
            }
            if (d.weblinkRenderConfig != null) {
                if (!$util.isObject(d.weblinkRenderConfig))
                    throw TypeError(".proto.MessageContextInfo.weblinkRenderConfig: object expected");
                m.weblinkRenderConfig = $root.proto.WebLinkRenderConfig.fromObject(d.weblinkRenderConfig, n + 1);
            }
            return m;
        };

        MessageContextInfo.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.threadId = [];
            }
            if (m.deviceListMetadata != null && Object.hasOwnProperty.call(m, "deviceListMetadata")) {
                d.deviceListMetadata = $root.proto.DeviceListMetadata.toObject(m.deviceListMetadata, o, q + 1);
                if (o.oneofs)
                    d._deviceListMetadata = "deviceListMetadata";
            }
            if (m.deviceListMetadataVersion != null && Object.hasOwnProperty.call(m, "deviceListMetadataVersion")) {
                d.deviceListMetadataVersion = m.deviceListMetadataVersion;
                if (o.oneofs)
                    d._deviceListMetadataVersion = "deviceListMetadataVersion";
            }
            if (m.messageSecret != null && Object.hasOwnProperty.call(m, "messageSecret")) {
                d.messageSecret = o.bytes === String ? $util.base64.encode(m.messageSecret, 0, m.messageSecret.length) : o.bytes === Array ? Array.prototype.slice.call(m.messageSecret) : m.messageSecret;
                if (o.oneofs)
                    d._messageSecret = "messageSecret";
            }
            if (m.paddingBytes != null && Object.hasOwnProperty.call(m, "paddingBytes")) {
                d.paddingBytes = o.bytes === String ? $util.base64.encode(m.paddingBytes, 0, m.paddingBytes.length) : o.bytes === Array ? Array.prototype.slice.call(m.paddingBytes) : m.paddingBytes;
                if (o.oneofs)
                    d._paddingBytes = "paddingBytes";
            }
            if (m.messageAddOnDurationInSecs != null && Object.hasOwnProperty.call(m, "messageAddOnDurationInSecs")) {
                d.messageAddOnDurationInSecs = m.messageAddOnDurationInSecs;
                if (o.oneofs)
                    d._messageAddOnDurationInSecs = "messageAddOnDurationInSecs";
            }
            if (m.botMessageSecret != null && Object.hasOwnProperty.call(m, "botMessageSecret")) {
                d.botMessageSecret = o.bytes === String ? $util.base64.encode(m.botMessageSecret, 0, m.botMessageSecret.length) : o.bytes === Array ? Array.prototype.slice.call(m.botMessageSecret) : m.botMessageSecret;
                if (o.oneofs)
                    d._botMessageSecret = "botMessageSecret";
            }
            if (m.botMetadata != null && Object.hasOwnProperty.call(m, "botMetadata")) {
                d.botMetadata = $root.proto.BotMetadata.toObject(m.botMetadata, o, q + 1);
                if (o.oneofs)
                    d._botMetadata = "botMetadata";
            }
            if (m.reportingTokenVersion != null && Object.hasOwnProperty.call(m, "reportingTokenVersion")) {
                d.reportingTokenVersion = m.reportingTokenVersion;
                if (o.oneofs)
                    d._reportingTokenVersion = "reportingTokenVersion";
            }
            if (m.messageAddOnExpiryType != null && Object.hasOwnProperty.call(m, "messageAddOnExpiryType")) {
                d.messageAddOnExpiryType = o.enums === String ? $root.proto.MessageContextInfo.MessageAddonExpiryType[m.messageAddOnExpiryType] === undefined ? m.messageAddOnExpiryType : $root.proto.MessageContextInfo.MessageAddonExpiryType[m.messageAddOnExpiryType] : m.messageAddOnExpiryType;
                if (o.oneofs)
                    d._messageAddOnExpiryType = "messageAddOnExpiryType";
            }
            if (m.messageAssociation != null && Object.hasOwnProperty.call(m, "messageAssociation")) {
                d.messageAssociation = $root.proto.MessageAssociation.toObject(m.messageAssociation, o, q + 1);
                if (o.oneofs)
                    d._messageAssociation = "messageAssociation";
            }
            if (m.capiCreatedGroup != null && Object.hasOwnProperty.call(m, "capiCreatedGroup")) {
                d.capiCreatedGroup = m.capiCreatedGroup;
                if (o.oneofs)
                    d._capiCreatedGroup = "capiCreatedGroup";
            }
            if (m.supportPayload != null && Object.hasOwnProperty.call(m, "supportPayload")) {
                d.supportPayload = m.supportPayload;
                if (o.oneofs)
                    d._supportPayload = "supportPayload";
            }
            if (m.limitSharing != null && Object.hasOwnProperty.call(m, "limitSharing")) {
                d.limitSharing = $root.proto.LimitSharing.toObject(m.limitSharing, o, q + 1);
                if (o.oneofs)
                    d._limitSharing = "limitSharing";
            }
            if (m.limitSharingV2 != null && Object.hasOwnProperty.call(m, "limitSharingV2")) {
                d.limitSharingV2 = $root.proto.LimitSharing.toObject(m.limitSharingV2, o, q + 1);
                if (o.oneofs)
                    d._limitSharingV2 = "limitSharingV2";
            }
            if (m.threadId && m.threadId.length) {
                d.threadId = [];
                for (var j = 0; j < m.threadId.length; ++j) {
                    d.threadId[j] = $root.proto.ThreadID.toObject(m.threadId[j], o, q + 1);
                }
            }
            if (m.weblinkRenderConfig != null && Object.hasOwnProperty.call(m, "weblinkRenderConfig")) {
                d.weblinkRenderConfig = $root.proto.WebLinkRenderConfig.toObject(m.weblinkRenderConfig, o, q + 1);
                if (o.oneofs)
                    d._weblinkRenderConfig = "weblinkRenderConfig";
            }
            return d;
        };

        MessageContextInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MessageContextInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.MessageContextInfo";
        };

        MessageContextInfo.MessageAddonExpiryType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "STATIC"] = 1;
            values[valuesById[2] = "DEPENDENT_ON_PARENT"] = 2;
            return values;
        })();

        return MessageContextInfo;
    })();

    proto.MessageKey = (function() {

        function MessageKey(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MessageKey.prototype.remoteJid = null;
        MessageKey.prototype.fromMe = null;
        MessageKey.prototype.id = null;
        MessageKey.prototype.participant = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageKey.prototype, "_remoteJid", {
            get: $util.oneOfGetter($oneOfFields = ["remoteJid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageKey.prototype, "_fromMe", {
            get: $util.oneOfGetter($oneOfFields = ["fromMe"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageKey.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageKey.prototype, "_participant", {
            get: $util.oneOfGetter($oneOfFields = ["participant"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MessageKey.create = function create(properties) {
            return new MessageKey(properties);
        };

        MessageKey.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.remoteJid != null && Object.hasOwnProperty.call(m, "remoteJid"))
                w.uint32(10).string(m.remoteJid);
            if (m.fromMe != null && Object.hasOwnProperty.call(m, "fromMe"))
                w.uint32(16).bool(m.fromMe);
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(26).string(m.id);
            if (m.participant != null && Object.hasOwnProperty.call(m, "participant"))
                w.uint32(34).string(m.participant);
            return w;
        };

        MessageKey.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.MessageKey();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.remoteJid = r.string();
                        break;
                    }
                case 2: {
                        m.fromMe = r.bool();
                        break;
                    }
                case 3: {
                        m.id = r.string();
                        break;
                    }
                case 4: {
                        m.participant = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MessageKey.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.MessageKey)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.MessageKey: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.MessageKey();
            if (d.remoteJid != null) {
                m.remoteJid = String(d.remoteJid);
            }
            if (d.fromMe != null) {
                m.fromMe = Boolean(d.fromMe);
            }
            if (d.id != null) {
                m.id = String(d.id);
            }
            if (d.participant != null) {
                m.participant = String(d.participant);
            }
            return m;
        };

        MessageKey.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (m.remoteJid != null && Object.hasOwnProperty.call(m, "remoteJid")) {
                d.remoteJid = m.remoteJid;
                if (o.oneofs)
                    d._remoteJid = "remoteJid";
            }
            if (m.fromMe != null && Object.hasOwnProperty.call(m, "fromMe")) {
                d.fromMe = m.fromMe;
                if (o.oneofs)
                    d._fromMe = "fromMe";
            }
            if (m.id != null && Object.hasOwnProperty.call(m, "id")) {
                d.id = m.id;
                if (o.oneofs)
                    d._id = "id";
            }
            if (m.participant != null && Object.hasOwnProperty.call(m, "participant")) {
                d.participant = m.participant;
                if (o.oneofs)
                    d._participant = "participant";
            }
            return d;
        };

        MessageKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MessageKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.MessageKey";
        };

        return MessageKey;
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

    proto.PaymentInfo = proto.PaymentInfo || createEmptyMessage("PaymentInfo")

    proto.PhotoChange = proto.PhotoChange || createEmptyMessage("PhotoChange")

    proto.PinInChat = (function() {

        function PinInChat(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PinInChat.prototype.type = null;
        PinInChat.prototype.key = null;
        PinInChat.prototype.senderTimestampMs = null;
        PinInChat.prototype.serverTimestampMs = null;
        PinInChat.prototype.messageAddOnContextInfo = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PinInChat.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PinInChat.prototype, "_key", {
            get: $util.oneOfGetter($oneOfFields = ["key"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PinInChat.prototype, "_senderTimestampMs", {
            get: $util.oneOfGetter($oneOfFields = ["senderTimestampMs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PinInChat.prototype, "_serverTimestampMs", {
            get: $util.oneOfGetter($oneOfFields = ["serverTimestampMs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PinInChat.prototype, "_messageAddOnContextInfo", {
            get: $util.oneOfGetter($oneOfFields = ["messageAddOnContextInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PinInChat.create = function create(properties) {
            return new PinInChat(properties);
        };

        PinInChat.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                $root.proto.MessageKey.encode(m.key, w.uint32(18).fork(), q + 1).ldelim();
            if (m.senderTimestampMs != null && Object.hasOwnProperty.call(m, "senderTimestampMs"))
                w.uint32(24).int64(m.senderTimestampMs);
            if (m.serverTimestampMs != null && Object.hasOwnProperty.call(m, "serverTimestampMs"))
                w.uint32(32).int64(m.serverTimestampMs);
            if (m.messageAddOnContextInfo != null && Object.hasOwnProperty.call(m, "messageAddOnContextInfo"))
                $root.proto.MessageAddOnContextInfo.encode(m.messageAddOnContextInfo, w.uint32(42).fork(), q + 1).ldelim();
            return w;
        };

        PinInChat.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.PinInChat();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.type = r.int32();
                        break;
                    }
                case 2: {
                        m.key = $root.proto.MessageKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.senderTimestampMs = r.int64();
                        break;
                    }
                case 4: {
                        m.serverTimestampMs = r.int64();
                        break;
                    }
                case 5: {
                        m.messageAddOnContextInfo = $root.proto.MessageAddOnContextInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PinInChat.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.PinInChat)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.PinInChat: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.PinInChat();
            switch (d.type) {
            default:
                if (typeof d.type === "number") {
                    m.type = d.type;
                    break;
                }
                break;
            case "UNKNOWN_TYPE":
            case 0:
                m.type = 0;
                break;
            case "PIN_FOR_ALL":
            case 1:
                m.type = 1;
                break;
            case "UNPIN_FOR_ALL":
            case 2:
                m.type = 2;
                break;
            }
            if (d.key != null) {
                if (!$util.isObject(d.key))
                    throw TypeError(".proto.PinInChat.key: object expected");
                m.key = $root.proto.MessageKey.fromObject(d.key, n + 1);
            }
            if (d.senderTimestampMs != null) {
                if ($util.Long)
                    m.senderTimestampMs = $util.Long.fromValue(d.senderTimestampMs, false);
                else if (typeof d.senderTimestampMs === "string")
                    m.senderTimestampMs = parseInt(d.senderTimestampMs, 10);
                else if (typeof d.senderTimestampMs === "number")
                    m.senderTimestampMs = d.senderTimestampMs;
                else if (typeof d.senderTimestampMs === "object")
                    m.senderTimestampMs = new $util.LongBits(d.senderTimestampMs.low >>> 0, d.senderTimestampMs.high >>> 0).toNumber();
            }
            if (d.serverTimestampMs != null) {
                if ($util.Long)
                    m.serverTimestampMs = $util.Long.fromValue(d.serverTimestampMs, false);
                else if (typeof d.serverTimestampMs === "string")
                    m.serverTimestampMs = parseInt(d.serverTimestampMs, 10);
                else if (typeof d.serverTimestampMs === "number")
                    m.serverTimestampMs = d.serverTimestampMs;
                else if (typeof d.serverTimestampMs === "object")
                    m.serverTimestampMs = new $util.LongBits(d.serverTimestampMs.low >>> 0, d.serverTimestampMs.high >>> 0).toNumber();
            }
            if (d.messageAddOnContextInfo != null) {
                if (!$util.isObject(d.messageAddOnContextInfo))
                    throw TypeError(".proto.PinInChat.messageAddOnContextInfo: object expected");
                m.messageAddOnContextInfo = $root.proto.MessageAddOnContextInfo.fromObject(d.messageAddOnContextInfo, n + 1);
            }
            return m;
        };

        PinInChat.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (m.type != null && Object.hasOwnProperty.call(m, "type")) {
                d.type = o.enums === String ? $root.proto.PinInChat.Type[m.type] === undefined ? m.type : $root.proto.PinInChat.Type[m.type] : m.type;
                if (o.oneofs)
                    d._type = "type";
            }
            if (m.key != null && Object.hasOwnProperty.call(m, "key")) {
                d.key = $root.proto.MessageKey.toObject(m.key, o, q + 1);
                if (o.oneofs)
                    d._key = "key";
            }
            if (m.senderTimestampMs != null && Object.hasOwnProperty.call(m, "senderTimestampMs")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.senderTimestampMs = typeof m.senderTimestampMs === "number" ? BigInt(m.senderTimestampMs) : $util.Long.fromBits(m.senderTimestampMs.low >>> 0, m.senderTimestampMs.high >>> 0, false).toBigInt();
                else if (typeof m.senderTimestampMs === "number")
                    d.senderTimestampMs = o.longs === String ? String(m.senderTimestampMs) : m.senderTimestampMs;
                else
                    d.senderTimestampMs = o.longs === String ? longToString(m.senderTimestampMs) : o.longs === Number ? longToNumber(m.senderTimestampMs) : m.senderTimestampMs;
                if (o.oneofs)
                    d._senderTimestampMs = "senderTimestampMs";
            }
            if (m.serverTimestampMs != null && Object.hasOwnProperty.call(m, "serverTimestampMs")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.serverTimestampMs = typeof m.serverTimestampMs === "number" ? BigInt(m.serverTimestampMs) : $util.Long.fromBits(m.serverTimestampMs.low >>> 0, m.serverTimestampMs.high >>> 0, false).toBigInt();
                else if (typeof m.serverTimestampMs === "number")
                    d.serverTimestampMs = o.longs === String ? String(m.serverTimestampMs) : m.serverTimestampMs;
                else
                    d.serverTimestampMs = o.longs === String ? longToString(m.serverTimestampMs) : o.longs === Number ? longToNumber(m.serverTimestampMs) : m.serverTimestampMs;
                if (o.oneofs)
                    d._serverTimestampMs = "serverTimestampMs";
            }
            if (m.messageAddOnContextInfo != null && Object.hasOwnProperty.call(m, "messageAddOnContextInfo")) {
                d.messageAddOnContextInfo = $root.proto.MessageAddOnContextInfo.toObject(m.messageAddOnContextInfo, o, q + 1);
                if (o.oneofs)
                    d._messageAddOnContextInfo = "messageAddOnContextInfo";
            }
            return d;
        };

        PinInChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PinInChat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.PinInChat";
        };

        PinInChat.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "PIN_FOR_ALL"] = 1;
            values[valuesById[2] = "UNPIN_FOR_ALL"] = 2;
            return values;
        })();

        return PinInChat;
    })();

    proto.PollAdditionalMetadata = proto.PollAdditionalMetadata || createEmptyMessage("PollAdditionalMetadata")

    proto.PollUpdate = proto.PollUpdate || createEmptyMessage("PollUpdate")

    proto.PremiumMessageInfo = proto.PremiumMessageInfo || createEmptyMessage("PremiumMessageInfo")

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

    proto.QuarantinedMessage = proto.QuarantinedMessage || createEmptyMessage("QuarantinedMessage")

    proto.Reaction = proto.Reaction || createEmptyMessage("Reaction")

    proto.ReportingTokenInfo = proto.ReportingTokenInfo || createEmptyMessage("ReportingTokenInfo")

    proto.SessionTransparencyType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
        values[valuesById[1] = "NY_AI_SAFETY_DISCLAIMER"] = 1;
        return values;
    })();

    proto.StatusAttribution = proto.StatusAttribution || createEmptyMessage("StatusAttribution")

    proto.StatusMentionMessage = proto.StatusMentionMessage || createEmptyMessage("StatusMentionMessage")

    proto.StatusPSA = proto.StatusPSA || createEmptyMessage("StatusPSA")

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

    proto.ThreadID = proto.ThreadID || createEmptyMessage("ThreadID")

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

    proto.UserReceipt = proto.UserReceipt || createEmptyMessage("UserReceipt")

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

    proto.WebLinkRenderConfig = proto.WebLinkRenderConfig || createEmptyMessage("WebLinkRenderConfig")

    proto.WebMessageInfo = (function() {

        function WebMessageInfo(p) {
            this.messageStubParameters = [];
            this.labels = [];
            this.userReceipt = [];
            this.reactions = [];
            this.pollUpdates = [];
            this.eventResponses = [];
            this.statusMentions = [];
            this.messageAddOns = [];
            this.statusMentionSources = [];
            this.supportAiCitations = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        WebMessageInfo.prototype.key = null;
        WebMessageInfo.prototype.message = null;
        WebMessageInfo.prototype.messageTimestamp = null;
        WebMessageInfo.prototype.status = null;
        WebMessageInfo.prototype.participant = null;
        WebMessageInfo.prototype.messageC2STimestamp = null;
        WebMessageInfo.prototype.ignore = null;
        WebMessageInfo.prototype.starred = null;
        WebMessageInfo.prototype.broadcast = null;
        WebMessageInfo.prototype.pushName = null;
        WebMessageInfo.prototype.mediaCiphertextSha256 = null;
        WebMessageInfo.prototype.multicast = null;
        WebMessageInfo.prototype.urlText = null;
        WebMessageInfo.prototype.urlNumber = null;
        WebMessageInfo.prototype.messageStubType = null;
        WebMessageInfo.prototype.clearMedia = null;
        WebMessageInfo.prototype.messageStubParameters = $util.emptyArray;
        WebMessageInfo.prototype.duration = null;
        WebMessageInfo.prototype.labels = $util.emptyArray;
        WebMessageInfo.prototype.paymentInfo = null;
        WebMessageInfo.prototype.finalLiveLocation = null;
        WebMessageInfo.prototype.quotedPaymentInfo = null;
        WebMessageInfo.prototype.ephemeralStartTimestamp = null;
        WebMessageInfo.prototype.ephemeralDuration = null;
        WebMessageInfo.prototype.ephemeralOffToOn = null;
        WebMessageInfo.prototype.ephemeralOutOfSync = null;
        WebMessageInfo.prototype.bizPrivacyStatus = null;
        WebMessageInfo.prototype.verifiedBizName = null;
        WebMessageInfo.prototype.mediaData = null;
        WebMessageInfo.prototype.photoChange = null;
        WebMessageInfo.prototype.userReceipt = $util.emptyArray;
        WebMessageInfo.prototype.reactions = $util.emptyArray;
        WebMessageInfo.prototype.quotedStickerData = null;
        WebMessageInfo.prototype.futureproofData = null;
        WebMessageInfo.prototype.statusPsa = null;
        WebMessageInfo.prototype.pollUpdates = $util.emptyArray;
        WebMessageInfo.prototype.pollAdditionalMetadata = null;
        WebMessageInfo.prototype.agentId = null;
        WebMessageInfo.prototype.statusAlreadyViewed = null;
        WebMessageInfo.prototype.messageSecret = null;
        WebMessageInfo.prototype.keepInChat = null;
        WebMessageInfo.prototype.originalSelfAuthorUserJidString = null;
        WebMessageInfo.prototype.revokeMessageTimestamp = null;
        WebMessageInfo.prototype.pinInChat = null;
        WebMessageInfo.prototype.premiumMessageInfo = null;
        WebMessageInfo.prototype.is1PBizBotMessage = null;
        WebMessageInfo.prototype.isGroupHistoryMessage = null;
        WebMessageInfo.prototype.botMessageInvokerJid = null;
        WebMessageInfo.prototype.commentMetadata = null;
        WebMessageInfo.prototype.eventResponses = $util.emptyArray;
        WebMessageInfo.prototype.reportingTokenInfo = null;
        WebMessageInfo.prototype.newsletterServerId = null;
        WebMessageInfo.prototype.eventAdditionalMetadata = null;
        WebMessageInfo.prototype.isMentionedInStatus = null;
        WebMessageInfo.prototype.statusMentions = $util.emptyArray;
        WebMessageInfo.prototype.targetMessageId = null;
        WebMessageInfo.prototype.messageAddOns = $util.emptyArray;
        WebMessageInfo.prototype.statusMentionMessageInfo = null;
        WebMessageInfo.prototype.isSupportAiMessage = null;
        WebMessageInfo.prototype.statusMentionSources = $util.emptyArray;
        WebMessageInfo.prototype.supportAiCitations = $util.emptyArray;
        WebMessageInfo.prototype.botTargetId = null;
        WebMessageInfo.prototype.groupHistoryIndividualMessageInfo = null;
        WebMessageInfo.prototype.groupHistoryBundleInfo = null;
        WebMessageInfo.prototype.interactiveMessageAdditionalMetadata = null;
        WebMessageInfo.prototype.quarantinedMessage = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_message", {
            get: $util.oneOfGetter($oneOfFields = ["message"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_messageTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["messageTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_status", {
            get: $util.oneOfGetter($oneOfFields = ["status"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_participant", {
            get: $util.oneOfGetter($oneOfFields = ["participant"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_messageC2STimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["messageC2STimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_ignore", {
            get: $util.oneOfGetter($oneOfFields = ["ignore"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_starred", {
            get: $util.oneOfGetter($oneOfFields = ["starred"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_broadcast", {
            get: $util.oneOfGetter($oneOfFields = ["broadcast"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_pushName", {
            get: $util.oneOfGetter($oneOfFields = ["pushName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_mediaCiphertextSha256", {
            get: $util.oneOfGetter($oneOfFields = ["mediaCiphertextSha256"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_multicast", {
            get: $util.oneOfGetter($oneOfFields = ["multicast"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_urlText", {
            get: $util.oneOfGetter($oneOfFields = ["urlText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_urlNumber", {
            get: $util.oneOfGetter($oneOfFields = ["urlNumber"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_messageStubType", {
            get: $util.oneOfGetter($oneOfFields = ["messageStubType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_clearMedia", {
            get: $util.oneOfGetter($oneOfFields = ["clearMedia"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_duration", {
            get: $util.oneOfGetter($oneOfFields = ["duration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_paymentInfo", {
            get: $util.oneOfGetter($oneOfFields = ["paymentInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_finalLiveLocation", {
            get: $util.oneOfGetter($oneOfFields = ["finalLiveLocation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_quotedPaymentInfo", {
            get: $util.oneOfGetter($oneOfFields = ["quotedPaymentInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_ephemeralStartTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["ephemeralStartTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_ephemeralDuration", {
            get: $util.oneOfGetter($oneOfFields = ["ephemeralDuration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_ephemeralOffToOn", {
            get: $util.oneOfGetter($oneOfFields = ["ephemeralOffToOn"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_ephemeralOutOfSync", {
            get: $util.oneOfGetter($oneOfFields = ["ephemeralOutOfSync"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_bizPrivacyStatus", {
            get: $util.oneOfGetter($oneOfFields = ["bizPrivacyStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_verifiedBizName", {
            get: $util.oneOfGetter($oneOfFields = ["verifiedBizName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_mediaData", {
            get: $util.oneOfGetter($oneOfFields = ["mediaData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_photoChange", {
            get: $util.oneOfGetter($oneOfFields = ["photoChange"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_quotedStickerData", {
            get: $util.oneOfGetter($oneOfFields = ["quotedStickerData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_futureproofData", {
            get: $util.oneOfGetter($oneOfFields = ["futureproofData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_statusPsa", {
            get: $util.oneOfGetter($oneOfFields = ["statusPsa"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_pollAdditionalMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["pollAdditionalMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_agentId", {
            get: $util.oneOfGetter($oneOfFields = ["agentId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_statusAlreadyViewed", {
            get: $util.oneOfGetter($oneOfFields = ["statusAlreadyViewed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_messageSecret", {
            get: $util.oneOfGetter($oneOfFields = ["messageSecret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_keepInChat", {
            get: $util.oneOfGetter($oneOfFields = ["keepInChat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_originalSelfAuthorUserJidString", {
            get: $util.oneOfGetter($oneOfFields = ["originalSelfAuthorUserJidString"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_revokeMessageTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["revokeMessageTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_pinInChat", {
            get: $util.oneOfGetter($oneOfFields = ["pinInChat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_premiumMessageInfo", {
            get: $util.oneOfGetter($oneOfFields = ["premiumMessageInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_is1PBizBotMessage", {
            get: $util.oneOfGetter($oneOfFields = ["is1PBizBotMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_isGroupHistoryMessage", {
            get: $util.oneOfGetter($oneOfFields = ["isGroupHistoryMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_botMessageInvokerJid", {
            get: $util.oneOfGetter($oneOfFields = ["botMessageInvokerJid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_commentMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["commentMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_reportingTokenInfo", {
            get: $util.oneOfGetter($oneOfFields = ["reportingTokenInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_newsletterServerId", {
            get: $util.oneOfGetter($oneOfFields = ["newsletterServerId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_eventAdditionalMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["eventAdditionalMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_isMentionedInStatus", {
            get: $util.oneOfGetter($oneOfFields = ["isMentionedInStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_targetMessageId", {
            get: $util.oneOfGetter($oneOfFields = ["targetMessageId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_statusMentionMessageInfo", {
            get: $util.oneOfGetter($oneOfFields = ["statusMentionMessageInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_isSupportAiMessage", {
            get: $util.oneOfGetter($oneOfFields = ["isSupportAiMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_botTargetId", {
            get: $util.oneOfGetter($oneOfFields = ["botTargetId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_groupHistoryIndividualMessageInfo", {
            get: $util.oneOfGetter($oneOfFields = ["groupHistoryIndividualMessageInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_groupHistoryBundleInfo", {
            get: $util.oneOfGetter($oneOfFields = ["groupHistoryBundleInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_interactiveMessageAdditionalMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["interactiveMessageAdditionalMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WebMessageInfo.prototype, "_quarantinedMessage", {
            get: $util.oneOfGetter($oneOfFields = ["quarantinedMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        WebMessageInfo.create = function create(properties) {
            return new WebMessageInfo(properties);
        };

        WebMessageInfo.encode = function encode(m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                $root.proto.MessageKey.encode(m.key, w.uint32(10).fork(), q + 1).ldelim();
            if (m.message != null && Object.hasOwnProperty.call(m, "message"))
                $root.proto.Message.encode(m.message, w.uint32(18).fork(), q + 1).ldelim();
            if (m.messageTimestamp != null && Object.hasOwnProperty.call(m, "messageTimestamp"))
                w.uint32(24).uint64(m.messageTimestamp);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(32).int32(m.status);
            if (m.participant != null && Object.hasOwnProperty.call(m, "participant"))
                w.uint32(42).string(m.participant);
            if (m.messageC2STimestamp != null && Object.hasOwnProperty.call(m, "messageC2STimestamp"))
                w.uint32(48).uint64(m.messageC2STimestamp);
            if (m.ignore != null && Object.hasOwnProperty.call(m, "ignore"))
                w.uint32(128).bool(m.ignore);
            if (m.starred != null && Object.hasOwnProperty.call(m, "starred"))
                w.uint32(136).bool(m.starred);
            if (m.broadcast != null && Object.hasOwnProperty.call(m, "broadcast"))
                w.uint32(144).bool(m.broadcast);
            if (m.pushName != null && Object.hasOwnProperty.call(m, "pushName"))
                w.uint32(154).string(m.pushName);
            if (m.mediaCiphertextSha256 != null && Object.hasOwnProperty.call(m, "mediaCiphertextSha256"))
                w.uint32(162).bytes(m.mediaCiphertextSha256);
            if (m.multicast != null && Object.hasOwnProperty.call(m, "multicast"))
                w.uint32(168).bool(m.multicast);
            if (m.urlText != null && Object.hasOwnProperty.call(m, "urlText"))
                w.uint32(176).bool(m.urlText);
            if (m.urlNumber != null && Object.hasOwnProperty.call(m, "urlNumber"))
                w.uint32(184).bool(m.urlNumber);
            if (m.messageStubType != null && Object.hasOwnProperty.call(m, "messageStubType"))
                w.uint32(192).int32(m.messageStubType);
            if (m.clearMedia != null && Object.hasOwnProperty.call(m, "clearMedia"))
                w.uint32(200).bool(m.clearMedia);
            if (m.messageStubParameters != null && m.messageStubParameters.length) {
                for (var i = 0; i < m.messageStubParameters.length; ++i)
                    w.uint32(210).string(m.messageStubParameters[i]);
            }
            if (m.duration != null && Object.hasOwnProperty.call(m, "duration"))
                w.uint32(216).uint32(m.duration);
            if (m.labels != null && m.labels.length) {
                for (var i = 0; i < m.labels.length; ++i)
                    w.uint32(226).string(m.labels[i]);
            }
            if (m.paymentInfo != null && Object.hasOwnProperty.call(m, "paymentInfo"))
                $root.proto.PaymentInfo.encode(m.paymentInfo, w.uint32(234).fork(), q + 1).ldelim();
            if (m.finalLiveLocation != null && Object.hasOwnProperty.call(m, "finalLiveLocation"))
                $root.proto.Message.LiveLocationMessage.encode(m.finalLiveLocation, w.uint32(242).fork(), q + 1).ldelim();
            if (m.quotedPaymentInfo != null && Object.hasOwnProperty.call(m, "quotedPaymentInfo"))
                $root.proto.PaymentInfo.encode(m.quotedPaymentInfo, w.uint32(250).fork(), q + 1).ldelim();
            if (m.ephemeralStartTimestamp != null && Object.hasOwnProperty.call(m, "ephemeralStartTimestamp"))
                w.uint32(256).uint64(m.ephemeralStartTimestamp);
            if (m.ephemeralDuration != null && Object.hasOwnProperty.call(m, "ephemeralDuration"))
                w.uint32(264).uint32(m.ephemeralDuration);
            if (m.ephemeralOffToOn != null && Object.hasOwnProperty.call(m, "ephemeralOffToOn"))
                w.uint32(272).bool(m.ephemeralOffToOn);
            if (m.ephemeralOutOfSync != null && Object.hasOwnProperty.call(m, "ephemeralOutOfSync"))
                w.uint32(280).bool(m.ephemeralOutOfSync);
            if (m.bizPrivacyStatus != null && Object.hasOwnProperty.call(m, "bizPrivacyStatus"))
                w.uint32(288).int32(m.bizPrivacyStatus);
            if (m.verifiedBizName != null && Object.hasOwnProperty.call(m, "verifiedBizName"))
                w.uint32(298).string(m.verifiedBizName);
            if (m.mediaData != null && Object.hasOwnProperty.call(m, "mediaData"))
                $root.proto.MediaData.encode(m.mediaData, w.uint32(306).fork(), q + 1).ldelim();
            if (m.photoChange != null && Object.hasOwnProperty.call(m, "photoChange"))
                $root.proto.PhotoChange.encode(m.photoChange, w.uint32(314).fork(), q + 1).ldelim();
            if (m.userReceipt != null && m.userReceipt.length) {
                for (var i = 0; i < m.userReceipt.length; ++i)
                    $root.proto.UserReceipt.encode(m.userReceipt[i], w.uint32(322).fork(), q + 1).ldelim();
            }
            if (m.reactions != null && m.reactions.length) {
                for (var i = 0; i < m.reactions.length; ++i)
                    $root.proto.Reaction.encode(m.reactions[i], w.uint32(330).fork(), q + 1).ldelim();
            }
            if (m.quotedStickerData != null && Object.hasOwnProperty.call(m, "quotedStickerData"))
                $root.proto.MediaData.encode(m.quotedStickerData, w.uint32(338).fork(), q + 1).ldelim();
            if (m.futureproofData != null && Object.hasOwnProperty.call(m, "futureproofData"))
                w.uint32(346).bytes(m.futureproofData);
            if (m.statusPsa != null && Object.hasOwnProperty.call(m, "statusPsa"))
                $root.proto.StatusPSA.encode(m.statusPsa, w.uint32(354).fork(), q + 1).ldelim();
            if (m.pollUpdates != null && m.pollUpdates.length) {
                for (var i = 0; i < m.pollUpdates.length; ++i)
                    $root.proto.PollUpdate.encode(m.pollUpdates[i], w.uint32(362).fork(), q + 1).ldelim();
            }
            if (m.pollAdditionalMetadata != null && Object.hasOwnProperty.call(m, "pollAdditionalMetadata"))
                $root.proto.PollAdditionalMetadata.encode(m.pollAdditionalMetadata, w.uint32(370).fork(), q + 1).ldelim();
            if (m.agentId != null && Object.hasOwnProperty.call(m, "agentId"))
                w.uint32(378).string(m.agentId);
            if (m.statusAlreadyViewed != null && Object.hasOwnProperty.call(m, "statusAlreadyViewed"))
                w.uint32(384).bool(m.statusAlreadyViewed);
            if (m.messageSecret != null && Object.hasOwnProperty.call(m, "messageSecret"))
                w.uint32(394).bytes(m.messageSecret);
            if (m.keepInChat != null && Object.hasOwnProperty.call(m, "keepInChat"))
                $root.proto.KeepInChat.encode(m.keepInChat, w.uint32(402).fork(), q + 1).ldelim();
            if (m.originalSelfAuthorUserJidString != null && Object.hasOwnProperty.call(m, "originalSelfAuthorUserJidString"))
                w.uint32(410).string(m.originalSelfAuthorUserJidString);
            if (m.revokeMessageTimestamp != null && Object.hasOwnProperty.call(m, "revokeMessageTimestamp"))
                w.uint32(416).uint64(m.revokeMessageTimestamp);
            if (m.pinInChat != null && Object.hasOwnProperty.call(m, "pinInChat"))
                $root.proto.PinInChat.encode(m.pinInChat, w.uint32(434).fork(), q + 1).ldelim();
            if (m.premiumMessageInfo != null && Object.hasOwnProperty.call(m, "premiumMessageInfo"))
                $root.proto.PremiumMessageInfo.encode(m.premiumMessageInfo, w.uint32(442).fork(), q + 1).ldelim();
            if (m.is1PBizBotMessage != null && Object.hasOwnProperty.call(m, "is1PBizBotMessage"))
                w.uint32(448).bool(m.is1PBizBotMessage);
            if (m.isGroupHistoryMessage != null && Object.hasOwnProperty.call(m, "isGroupHistoryMessage"))
                w.uint32(456).bool(m.isGroupHistoryMessage);
            if (m.botMessageInvokerJid != null && Object.hasOwnProperty.call(m, "botMessageInvokerJid"))
                w.uint32(466).string(m.botMessageInvokerJid);
            if (m.commentMetadata != null && Object.hasOwnProperty.call(m, "commentMetadata"))
                $root.proto.CommentMetadata.encode(m.commentMetadata, w.uint32(474).fork(), q + 1).ldelim();
            if (m.eventResponses != null && m.eventResponses.length) {
                for (var i = 0; i < m.eventResponses.length; ++i)
                    $root.proto.EventResponse.encode(m.eventResponses[i], w.uint32(490).fork(), q + 1).ldelim();
            }
            if (m.reportingTokenInfo != null && Object.hasOwnProperty.call(m, "reportingTokenInfo"))
                $root.proto.ReportingTokenInfo.encode(m.reportingTokenInfo, w.uint32(498).fork(), q + 1).ldelim();
            if (m.newsletterServerId != null && Object.hasOwnProperty.call(m, "newsletterServerId"))
                w.uint32(504).uint64(m.newsletterServerId);
            if (m.eventAdditionalMetadata != null && Object.hasOwnProperty.call(m, "eventAdditionalMetadata"))
                $root.proto.EventAdditionalMetadata.encode(m.eventAdditionalMetadata, w.uint32(514).fork(), q + 1).ldelim();
            if (m.isMentionedInStatus != null && Object.hasOwnProperty.call(m, "isMentionedInStatus"))
                w.uint32(520).bool(m.isMentionedInStatus);
            if (m.statusMentions != null && m.statusMentions.length) {
                for (var i = 0; i < m.statusMentions.length; ++i)
                    w.uint32(530).string(m.statusMentions[i]);
            }
            if (m.targetMessageId != null && Object.hasOwnProperty.call(m, "targetMessageId"))
                $root.proto.MessageKey.encode(m.targetMessageId, w.uint32(538).fork(), q + 1).ldelim();
            if (m.messageAddOns != null && m.messageAddOns.length) {
                for (var i = 0; i < m.messageAddOns.length; ++i)
                    $root.proto.MessageAddOn.encode(m.messageAddOns[i], w.uint32(546).fork(), q + 1).ldelim();
            }
            if (m.statusMentionMessageInfo != null && Object.hasOwnProperty.call(m, "statusMentionMessageInfo"))
                $root.proto.StatusMentionMessage.encode(m.statusMentionMessageInfo, w.uint32(554).fork(), q + 1).ldelim();
            if (m.isSupportAiMessage != null && Object.hasOwnProperty.call(m, "isSupportAiMessage"))
                w.uint32(560).bool(m.isSupportAiMessage);
            if (m.statusMentionSources != null && m.statusMentionSources.length) {
                for (var i = 0; i < m.statusMentionSources.length; ++i)
                    w.uint32(570).string(m.statusMentionSources[i]);
            }
            if (m.supportAiCitations != null && m.supportAiCitations.length) {
                for (var i = 0; i < m.supportAiCitations.length; ++i)
                    $root.proto.Citation.encode(m.supportAiCitations[i], w.uint32(578).fork(), q + 1).ldelim();
            }
            if (m.botTargetId != null && Object.hasOwnProperty.call(m, "botTargetId"))
                w.uint32(586).string(m.botTargetId);
            if (m.groupHistoryIndividualMessageInfo != null && Object.hasOwnProperty.call(m, "groupHistoryIndividualMessageInfo"))
                $root.proto.GroupHistoryIndividualMessageInfo.encode(m.groupHistoryIndividualMessageInfo, w.uint32(594).fork(), q + 1).ldelim();
            if (m.groupHistoryBundleInfo != null && Object.hasOwnProperty.call(m, "groupHistoryBundleInfo"))
                $root.proto.GroupHistoryBundleInfo.encode(m.groupHistoryBundleInfo, w.uint32(602).fork(), q + 1).ldelim();
            if (m.interactiveMessageAdditionalMetadata != null && Object.hasOwnProperty.call(m, "interactiveMessageAdditionalMetadata"))
                $root.proto.InteractiveMessageAdditionalMetadata.encode(m.interactiveMessageAdditionalMetadata, w.uint32(610).fork(), q + 1).ldelim();
            if (m.quarantinedMessage != null && Object.hasOwnProperty.call(m, "quarantinedMessage"))
                $root.proto.QuarantinedMessage.encode(m.quarantinedMessage, w.uint32(618).fork(), q + 1).ldelim();
            return w;
        };

        WebMessageInfo.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.WebMessageInfo();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.key = $root.proto.MessageKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.message = $root.proto.Message.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.messageTimestamp = r.uint64();
                        break;
                    }
                case 4: {
                        m.status = r.int32();
                        break;
                    }
                case 5: {
                        m.participant = r.string();
                        break;
                    }
                case 6: {
                        m.messageC2STimestamp = r.uint64();
                        break;
                    }
                case 16: {
                        m.ignore = r.bool();
                        break;
                    }
                case 17: {
                        m.starred = r.bool();
                        break;
                    }
                case 18: {
                        m.broadcast = r.bool();
                        break;
                    }
                case 19: {
                        m.pushName = r.string();
                        break;
                    }
                case 20: {
                        m.mediaCiphertextSha256 = r.bytes();
                        break;
                    }
                case 21: {
                        m.multicast = r.bool();
                        break;
                    }
                case 22: {
                        m.urlText = r.bool();
                        break;
                    }
                case 23: {
                        m.urlNumber = r.bool();
                        break;
                    }
                case 24: {
                        m.messageStubType = r.int32();
                        break;
                    }
                case 25: {
                        m.clearMedia = r.bool();
                        break;
                    }
                case 26: {
                        if (!(m.messageStubParameters && m.messageStubParameters.length))
                            m.messageStubParameters = [];
                        m.messageStubParameters.push(r.string());
                        break;
                    }
                case 27: {
                        m.duration = r.uint32();
                        break;
                    }
                case 28: {
                        if (!(m.labels && m.labels.length))
                            m.labels = [];
                        m.labels.push(r.string());
                        break;
                    }
                case 29: {
                        m.paymentInfo = $root.proto.PaymentInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 30: {
                        m.finalLiveLocation = $root.proto.Message.LiveLocationMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 31: {
                        m.quotedPaymentInfo = $root.proto.PaymentInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 32: {
                        m.ephemeralStartTimestamp = r.uint64();
                        break;
                    }
                case 33: {
                        m.ephemeralDuration = r.uint32();
                        break;
                    }
                case 34: {
                        m.ephemeralOffToOn = r.bool();
                        break;
                    }
                case 35: {
                        m.ephemeralOutOfSync = r.bool();
                        break;
                    }
                case 36: {
                        m.bizPrivacyStatus = r.int32();
                        break;
                    }
                case 37: {
                        m.verifiedBizName = r.string();
                        break;
                    }
                case 38: {
                        m.mediaData = $root.proto.MediaData.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 39: {
                        m.photoChange = $root.proto.PhotoChange.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 40: {
                        if (!(m.userReceipt && m.userReceipt.length))
                            m.userReceipt = [];
                        m.userReceipt.push($root.proto.UserReceipt.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 41: {
                        if (!(m.reactions && m.reactions.length))
                            m.reactions = [];
                        m.reactions.push($root.proto.Reaction.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 42: {
                        m.quotedStickerData = $root.proto.MediaData.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 43: {
                        m.futureproofData = r.bytes();
                        break;
                    }
                case 44: {
                        m.statusPsa = $root.proto.StatusPSA.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 45: {
                        if (!(m.pollUpdates && m.pollUpdates.length))
                            m.pollUpdates = [];
                        m.pollUpdates.push($root.proto.PollUpdate.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 46: {
                        m.pollAdditionalMetadata = $root.proto.PollAdditionalMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 47: {
                        m.agentId = r.string();
                        break;
                    }
                case 48: {
                        m.statusAlreadyViewed = r.bool();
                        break;
                    }
                case 49: {
                        m.messageSecret = r.bytes();
                        break;
                    }
                case 50: {
                        m.keepInChat = $root.proto.KeepInChat.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 51: {
                        m.originalSelfAuthorUserJidString = r.string();
                        break;
                    }
                case 52: {
                        m.revokeMessageTimestamp = r.uint64();
                        break;
                    }
                case 54: {
                        m.pinInChat = $root.proto.PinInChat.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 55: {
                        m.premiumMessageInfo = $root.proto.PremiumMessageInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 56: {
                        m.is1PBizBotMessage = r.bool();
                        break;
                    }
                case 57: {
                        m.isGroupHistoryMessage = r.bool();
                        break;
                    }
                case 58: {
                        m.botMessageInvokerJid = r.string();
                        break;
                    }
                case 59: {
                        m.commentMetadata = $root.proto.CommentMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 61: {
                        if (!(m.eventResponses && m.eventResponses.length))
                            m.eventResponses = [];
                        m.eventResponses.push($root.proto.EventResponse.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 62: {
                        m.reportingTokenInfo = $root.proto.ReportingTokenInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 63: {
                        m.newsletterServerId = r.uint64();
                        break;
                    }
                case 64: {
                        m.eventAdditionalMetadata = $root.proto.EventAdditionalMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 65: {
                        m.isMentionedInStatus = r.bool();
                        break;
                    }
                case 66: {
                        if (!(m.statusMentions && m.statusMentions.length))
                            m.statusMentions = [];
                        m.statusMentions.push(r.string());
                        break;
                    }
                case 67: {
                        m.targetMessageId = $root.proto.MessageKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 68: {
                        if (!(m.messageAddOns && m.messageAddOns.length))
                            m.messageAddOns = [];
                        m.messageAddOns.push($root.proto.MessageAddOn.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 69: {
                        m.statusMentionMessageInfo = $root.proto.StatusMentionMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 70: {
                        m.isSupportAiMessage = r.bool();
                        break;
                    }
                case 71: {
                        if (!(m.statusMentionSources && m.statusMentionSources.length))
                            m.statusMentionSources = [];
                        m.statusMentionSources.push(r.string());
                        break;
                    }
                case 72: {
                        if (!(m.supportAiCitations && m.supportAiCitations.length))
                            m.supportAiCitations = [];
                        m.supportAiCitations.push($root.proto.Citation.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 73: {
                        m.botTargetId = r.string();
                        break;
                    }
                case 74: {
                        m.groupHistoryIndividualMessageInfo = $root.proto.GroupHistoryIndividualMessageInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 75: {
                        m.groupHistoryBundleInfo = $root.proto.GroupHistoryBundleInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 76: {
                        m.interactiveMessageAdditionalMetadata = $root.proto.InteractiveMessageAdditionalMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 77: {
                        m.quarantinedMessage = $root.proto.QuarantinedMessage.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        WebMessageInfo.fromObject = function fromObject(d, n) {
            if (d instanceof $root.proto.WebMessageInfo)
                return d;
            if (!$util.isObject(d))
                throw TypeError(".proto.WebMessageInfo: object expected");
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.proto.WebMessageInfo();
            if (d.key != null) {
                if (!$util.isObject(d.key))
                    throw TypeError(".proto.WebMessageInfo.key: object expected");
                m.key = $root.proto.MessageKey.fromObject(d.key, n + 1);
            }
            if (d.message != null) {
                if (!$util.isObject(d.message))
                    throw TypeError(".proto.WebMessageInfo.message: object expected");
                m.message = $root.proto.Message.fromObject(d.message, n + 1);
            }
            if (d.messageTimestamp != null) {
                if ($util.Long)
                    m.messageTimestamp = $util.Long.fromValue(d.messageTimestamp, true);
                else if (typeof d.messageTimestamp === "string")
                    m.messageTimestamp = parseInt(d.messageTimestamp, 10);
                else if (typeof d.messageTimestamp === "number")
                    m.messageTimestamp = d.messageTimestamp;
                else if (typeof d.messageTimestamp === "object")
                    m.messageTimestamp = new $util.LongBits(d.messageTimestamp.low >>> 0, d.messageTimestamp.high >>> 0).toNumber(true);
            }
            switch (d.status) {
            default:
                if (typeof d.status === "number") {
                    m.status = d.status;
                    break;
                }
                break;
            case "ERROR":
            case 0:
                m.status = 0;
                break;
            case "PENDING":
            case 1:
                m.status = 1;
                break;
            case "SERVER_ACK":
            case 2:
                m.status = 2;
                break;
            case "DELIVERY_ACK":
            case 3:
                m.status = 3;
                break;
            case "READ":
            case 4:
                m.status = 4;
                break;
            case "PLAYED":
            case 5:
                m.status = 5;
                break;
            }
            if (d.participant != null) {
                m.participant = String(d.participant);
            }
            if (d.messageC2STimestamp != null) {
                if ($util.Long)
                    m.messageC2STimestamp = $util.Long.fromValue(d.messageC2STimestamp, true);
                else if (typeof d.messageC2STimestamp === "string")
                    m.messageC2STimestamp = parseInt(d.messageC2STimestamp, 10);
                else if (typeof d.messageC2STimestamp === "number")
                    m.messageC2STimestamp = d.messageC2STimestamp;
                else if (typeof d.messageC2STimestamp === "object")
                    m.messageC2STimestamp = new $util.LongBits(d.messageC2STimestamp.low >>> 0, d.messageC2STimestamp.high >>> 0).toNumber(true);
            }
            if (d.ignore != null) {
                m.ignore = Boolean(d.ignore);
            }
            if (d.starred != null) {
                m.starred = Boolean(d.starred);
            }
            if (d.broadcast != null) {
                m.broadcast = Boolean(d.broadcast);
            }
            if (d.pushName != null) {
                m.pushName = String(d.pushName);
            }
            if (d.mediaCiphertextSha256 != null) {
                if (typeof d.mediaCiphertextSha256 === "string")
                    $util.base64.decode(d.mediaCiphertextSha256, m.mediaCiphertextSha256 = $util.newBuffer($util.base64.length(d.mediaCiphertextSha256)), 0);
                else if (d.mediaCiphertextSha256.length >= 0)
                    m.mediaCiphertextSha256 = d.mediaCiphertextSha256;
            }
            if (d.multicast != null) {
                m.multicast = Boolean(d.multicast);
            }
            if (d.urlText != null) {
                m.urlText = Boolean(d.urlText);
            }
            if (d.urlNumber != null) {
                m.urlNumber = Boolean(d.urlNumber);
            }
            switch (d.messageStubType) {
            default:
                if (typeof d.messageStubType === "number") {
                    m.messageStubType = d.messageStubType;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                m.messageStubType = 0;
                break;
            case "REVOKE":
            case 1:
                m.messageStubType = 1;
                break;
            case "CIPHERTEXT":
            case 2:
                m.messageStubType = 2;
                break;
            case "FUTUREPROOF":
            case 3:
                m.messageStubType = 3;
                break;
            case "NON_VERIFIED_TRANSITION":
            case 4:
                m.messageStubType = 4;
                break;
            case "UNVERIFIED_TRANSITION":
            case 5:
                m.messageStubType = 5;
                break;
            case "VERIFIED_TRANSITION":
            case 6:
                m.messageStubType = 6;
                break;
            case "VERIFIED_LOW_UNKNOWN":
            case 7:
                m.messageStubType = 7;
                break;
            case "VERIFIED_HIGH":
            case 8:
                m.messageStubType = 8;
                break;
            case "VERIFIED_INITIAL_UNKNOWN":
            case 9:
                m.messageStubType = 9;
                break;
            case "VERIFIED_INITIAL_LOW":
            case 10:
                m.messageStubType = 10;
                break;
            case "VERIFIED_INITIAL_HIGH":
            case 11:
                m.messageStubType = 11;
                break;
            case "VERIFIED_TRANSITION_ANY_TO_NONE":
            case 12:
                m.messageStubType = 12;
                break;
            case "VERIFIED_TRANSITION_ANY_TO_HIGH":
            case 13:
                m.messageStubType = 13;
                break;
            case "VERIFIED_TRANSITION_HIGH_TO_LOW":
            case 14:
                m.messageStubType = 14;
                break;
            case "VERIFIED_TRANSITION_HIGH_TO_UNKNOWN":
            case 15:
                m.messageStubType = 15;
                break;
            case "VERIFIED_TRANSITION_UNKNOWN_TO_LOW":
            case 16:
                m.messageStubType = 16;
                break;
            case "VERIFIED_TRANSITION_LOW_TO_UNKNOWN":
            case 17:
                m.messageStubType = 17;
                break;
            case "VERIFIED_TRANSITION_NONE_TO_LOW":
            case 18:
                m.messageStubType = 18;
                break;
            case "VERIFIED_TRANSITION_NONE_TO_UNKNOWN":
            case 19:
                m.messageStubType = 19;
                break;
            case "GROUP_CREATE":
            case 20:
                m.messageStubType = 20;
                break;
            case "GROUP_CHANGE_SUBJECT":
            case 21:
                m.messageStubType = 21;
                break;
            case "GROUP_CHANGE_ICON":
            case 22:
                m.messageStubType = 22;
                break;
            case "GROUP_CHANGE_INVITE_LINK":
            case 23:
                m.messageStubType = 23;
                break;
            case "GROUP_CHANGE_DESCRIPTION":
            case 24:
                m.messageStubType = 24;
                break;
            case "GROUP_CHANGE_RESTRICT":
            case 25:
                m.messageStubType = 25;
                break;
            case "GROUP_CHANGE_ANNOUNCE":
            case 26:
                m.messageStubType = 26;
                break;
            case "GROUP_PARTICIPANT_ADD":
            case 27:
                m.messageStubType = 27;
                break;
            case "GROUP_PARTICIPANT_REMOVE":
            case 28:
                m.messageStubType = 28;
                break;
            case "GROUP_PARTICIPANT_PROMOTE":
            case 29:
                m.messageStubType = 29;
                break;
            case "GROUP_PARTICIPANT_DEMOTE":
            case 30:
                m.messageStubType = 30;
                break;
            case "GROUP_PARTICIPANT_INVITE":
            case 31:
                m.messageStubType = 31;
                break;
            case "GROUP_PARTICIPANT_LEAVE":
            case 32:
                m.messageStubType = 32;
                break;
            case "GROUP_PARTICIPANT_CHANGE_NUMBER":
            case 33:
                m.messageStubType = 33;
                break;
            case "BROADCAST_CREATE":
            case 34:
                m.messageStubType = 34;
                break;
            case "BROADCAST_ADD":
            case 35:
                m.messageStubType = 35;
                break;
            case "BROADCAST_REMOVE":
            case 36:
                m.messageStubType = 36;
                break;
            case "GENERIC_NOTIFICATION":
            case 37:
                m.messageStubType = 37;
                break;
            case "E2E_IDENTITY_CHANGED":
            case 38:
                m.messageStubType = 38;
                break;
            case "E2E_ENCRYPTED":
            case 39:
                m.messageStubType = 39;
                break;
            case "CALL_MISSED_VOICE":
            case 40:
                m.messageStubType = 40;
                break;
            case "CALL_MISSED_VIDEO":
            case 41:
                m.messageStubType = 41;
                break;
            case "INDIVIDUAL_CHANGE_NUMBER":
            case 42:
                m.messageStubType = 42;
                break;
            case "GROUP_DELETE":
            case 43:
                m.messageStubType = 43;
                break;
            case "GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE":
            case 44:
                m.messageStubType = 44;
                break;
            case "CALL_MISSED_GROUP_VOICE":
            case 45:
                m.messageStubType = 45;
                break;
            case "CALL_MISSED_GROUP_VIDEO":
            case 46:
                m.messageStubType = 46;
                break;
            case "PAYMENT_CIPHERTEXT":
            case 47:
                m.messageStubType = 47;
                break;
            case "PAYMENT_FUTUREPROOF":
            case 48:
                m.messageStubType = 48;
                break;
            case "PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED":
            case 49:
                m.messageStubType = 49;
                break;
            case "PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED":
            case 50:
                m.messageStubType = 50;
                break;
            case "PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED":
            case 51:
                m.messageStubType = 51;
                break;
            case "PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP":
            case 52:
                m.messageStubType = 52;
                break;
            case "PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP":
            case 53:
                m.messageStubType = 53;
                break;
            case "PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER":
            case 54:
                m.messageStubType = 54;
                break;
            case "PAYMENT_ACTION_SEND_PAYMENT_REMINDER":
            case 55:
                m.messageStubType = 55;
                break;
            case "PAYMENT_ACTION_SEND_PAYMENT_INVITATION":
            case 56:
                m.messageStubType = 56;
                break;
            case "PAYMENT_ACTION_REQUEST_DECLINED":
            case 57:
                m.messageStubType = 57;
                break;
            case "PAYMENT_ACTION_REQUEST_EXPIRED":
            case 58:
                m.messageStubType = 58;
                break;
            case "PAYMENT_ACTION_REQUEST_CANCELLED":
            case 59:
                m.messageStubType = 59;
                break;
            case "BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM":
            case 60:
                m.messageStubType = 60;
                break;
            case "BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP":
            case 61:
                m.messageStubType = 61;
                break;
            case "BIZ_INTRO_TOP":
            case 62:
                m.messageStubType = 62;
                break;
            case "BIZ_INTRO_BOTTOM":
            case 63:
                m.messageStubType = 63;
                break;
            case "BIZ_NAME_CHANGE":
            case 64:
                m.messageStubType = 64;
                break;
            case "BIZ_MOVE_TO_CONSUMER_APP":
            case 65:
                m.messageStubType = 65;
                break;
            case "BIZ_TWO_TIER_MIGRATION_TOP":
            case 66:
                m.messageStubType = 66;
                break;
            case "BIZ_TWO_TIER_MIGRATION_BOTTOM":
            case 67:
                m.messageStubType = 67;
                break;
            case "OVERSIZED":
            case 68:
                m.messageStubType = 68;
                break;
            case "GROUP_CHANGE_NO_FREQUENTLY_FORWARDED":
            case 69:
                m.messageStubType = 69;
                break;
            case "GROUP_V4_ADD_INVITE_SENT":
            case 70:
                m.messageStubType = 70;
                break;
            case "GROUP_PARTICIPANT_ADD_REQUEST_JOIN":
            case 71:
                m.messageStubType = 71;
                break;
            case "CHANGE_EPHEMERAL_SETTING":
            case 72:
                m.messageStubType = 72;
                break;
            case "E2E_DEVICE_CHANGED":
            case 73:
                m.messageStubType = 73;
                break;
            case "VIEWED_ONCE":
            case 74:
                m.messageStubType = 74;
                break;
            case "E2E_ENCRYPTED_NOW":
            case 75:
                m.messageStubType = 75;
                break;
            case "BLUE_MSG_BSP_FB_TO_BSP_PREMISE":
            case 76:
                m.messageStubType = 76;
                break;
            case "BLUE_MSG_BSP_FB_TO_SELF_FB":
            case 77:
                m.messageStubType = 77;
                break;
            case "BLUE_MSG_BSP_FB_TO_SELF_PREMISE":
            case 78:
                m.messageStubType = 78;
                break;
            case "BLUE_MSG_BSP_FB_UNVERIFIED":
            case 79:
                m.messageStubType = 79;
                break;
            case "BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED":
            case 80:
                m.messageStubType = 80;
                break;
            case "BLUE_MSG_BSP_FB_VERIFIED":
            case 81:
                m.messageStubType = 81;
                break;
            case "BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED":
            case 82:
                m.messageStubType = 82;
                break;
            case "BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE":
            case 83:
                m.messageStubType = 83;
                break;
            case "BLUE_MSG_BSP_PREMISE_UNVERIFIED":
            case 84:
                m.messageStubType = 84;
                break;
            case "BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED":
            case 85:
                m.messageStubType = 85;
                break;
            case "BLUE_MSG_BSP_PREMISE_VERIFIED":
            case 86:
                m.messageStubType = 86;
                break;
            case "BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED":
            case 87:
                m.messageStubType = 87;
                break;
            case "BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED":
            case 88:
                m.messageStubType = 88;
                break;
            case "BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED":
            case 89:
                m.messageStubType = 89;
                break;
            case "BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED":
            case 90:
                m.messageStubType = 90;
                break;
            case "BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED":
            case 91:
                m.messageStubType = 91;
                break;
            case "BLUE_MSG_SELF_FB_TO_BSP_PREMISE":
            case 92:
                m.messageStubType = 92;
                break;
            case "BLUE_MSG_SELF_FB_TO_SELF_PREMISE":
            case 93:
                m.messageStubType = 93;
                break;
            case "BLUE_MSG_SELF_FB_UNVERIFIED":
            case 94:
                m.messageStubType = 94;
                break;
            case "BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED":
            case 95:
                m.messageStubType = 95;
                break;
            case "BLUE_MSG_SELF_FB_VERIFIED":
            case 96:
                m.messageStubType = 96;
                break;
            case "BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED":
            case 97:
                m.messageStubType = 97;
                break;
            case "BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE":
            case 98:
                m.messageStubType = 98;
                break;
            case "BLUE_MSG_SELF_PREMISE_UNVERIFIED":
            case 99:
                m.messageStubType = 99;
                break;
            case "BLUE_MSG_SELF_PREMISE_VERIFIED":
            case 100:
                m.messageStubType = 100;
                break;
            case "BLUE_MSG_TO_BSP_FB":
            case 101:
                m.messageStubType = 101;
                break;
            case "BLUE_MSG_TO_CONSUMER":
            case 102:
                m.messageStubType = 102;
                break;
            case "BLUE_MSG_TO_SELF_FB":
            case 103:
                m.messageStubType = 103;
                break;
            case "BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED":
            case 104:
                m.messageStubType = 104;
                break;
            case "BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED":
            case 105:
                m.messageStubType = 105;
                break;
            case "BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED":
            case 106:
                m.messageStubType = 106;
                break;
            case "BLUE_MSG_UNVERIFIED_TO_VERIFIED":
            case 107:
                m.messageStubType = 107;
                break;
            case "BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED":
            case 108:
                m.messageStubType = 108;
                break;
            case "BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED":
            case 109:
                m.messageStubType = 109;
                break;
            case "BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED":
            case 110:
                m.messageStubType = 110;
                break;
            case "BLUE_MSG_VERIFIED_TO_UNVERIFIED":
            case 111:
                m.messageStubType = 111;
                break;
            case "BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED":
            case 112:
                m.messageStubType = 112;
                break;
            case "BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED":
            case 113:
                m.messageStubType = 113;
                break;
            case "BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED":
            case 114:
                m.messageStubType = 114;
                break;
            case "BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED":
            case 115:
                m.messageStubType = 115;
                break;
            case "BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED":
            case 116:
                m.messageStubType = 116;
                break;
            case "BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED":
            case 117:
                m.messageStubType = 117;
                break;
            case "E2E_IDENTITY_UNAVAILABLE":
            case 118:
                m.messageStubType = 118;
                break;
            case "GROUP_CREATING":
            case 119:
                m.messageStubType = 119;
                break;
            case "GROUP_CREATE_FAILED":
            case 120:
                m.messageStubType = 120;
                break;
            case "GROUP_BOUNCED":
            case 121:
                m.messageStubType = 121;
                break;
            case "BLOCK_CONTACT":
            case 122:
                m.messageStubType = 122;
                break;
            case "EPHEMERAL_SETTING_NOT_APPLIED":
            case 123:
                m.messageStubType = 123;
                break;
            case "SYNC_FAILED":
            case 124:
                m.messageStubType = 124;
                break;
            case "SYNCING":
            case 125:
                m.messageStubType = 125;
                break;
            case "BIZ_PRIVACY_MODE_INIT_FB":
            case 126:
                m.messageStubType = 126;
                break;
            case "BIZ_PRIVACY_MODE_INIT_BSP":
            case 127:
                m.messageStubType = 127;
                break;
            case "BIZ_PRIVACY_MODE_TO_FB":
            case 128:
                m.messageStubType = 128;
                break;
            case "BIZ_PRIVACY_MODE_TO_BSP":
            case 129:
                m.messageStubType = 129;
                break;
            case "DISAPPEARING_MODE":
            case 130:
                m.messageStubType = 130;
                break;
            case "E2E_DEVICE_FETCH_FAILED":
            case 131:
                m.messageStubType = 131;
                break;
            case "ADMIN_REVOKE":
            case 132:
                m.messageStubType = 132;
                break;
            case "GROUP_INVITE_LINK_GROWTH_LOCKED":
            case 133:
                m.messageStubType = 133;
                break;
            case "COMMUNITY_LINK_PARENT_GROUP":
            case 134:
                m.messageStubType = 134;
                break;
            case "COMMUNITY_LINK_SIBLING_GROUP":
            case 135:
                m.messageStubType = 135;
                break;
            case "COMMUNITY_LINK_SUB_GROUP":
            case 136:
                m.messageStubType = 136;
                break;
            case "COMMUNITY_UNLINK_PARENT_GROUP":
            case 137:
                m.messageStubType = 137;
                break;
            case "COMMUNITY_UNLINK_SIBLING_GROUP":
            case 138:
                m.messageStubType = 138;
                break;
            case "COMMUNITY_UNLINK_SUB_GROUP":
            case 139:
                m.messageStubType = 139;
                break;
            case "GROUP_PARTICIPANT_ACCEPT":
            case 140:
                m.messageStubType = 140;
                break;
            case "GROUP_PARTICIPANT_LINKED_GROUP_JOIN":
            case 141:
                m.messageStubType = 141;
                break;
            case "COMMUNITY_CREATE":
            case 142:
                m.messageStubType = 142;
                break;
            case "EPHEMERAL_KEEP_IN_CHAT":
            case 143:
                m.messageStubType = 143;
                break;
            case "GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST":
            case 144:
                m.messageStubType = 144;
                break;
            case "GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE":
            case 145:
                m.messageStubType = 145;
                break;
            case "INTEGRITY_UNLINK_PARENT_GROUP":
            case 146:
                m.messageStubType = 146;
                break;
            case "COMMUNITY_PARTICIPANT_PROMOTE":
            case 147:
                m.messageStubType = 147;
                break;
            case "COMMUNITY_PARTICIPANT_DEMOTE":
            case 148:
                m.messageStubType = 148;
                break;
            case "COMMUNITY_PARENT_GROUP_DELETED":
            case 149:
                m.messageStubType = 149;
                break;
            case "COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL":
            case 150:
                m.messageStubType = 150;
                break;
            case "GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP":
            case 151:
                m.messageStubType = 151;
                break;
            case "MASKED_THREAD_CREATED":
            case 152:
                m.messageStubType = 152;
                break;
            case "MASKED_THREAD_UNMASKED":
            case 153:
                m.messageStubType = 153;
                break;
            case "BIZ_CHAT_ASSIGNMENT":
            case 154:
                m.messageStubType = 154;
                break;
            case "CHAT_PSA":
            case 155:
                m.messageStubType = 155;
                break;
            case "CHAT_POLL_CREATION_MESSAGE":
            case 156:
                m.messageStubType = 156;
                break;
            case "CAG_MASKED_THREAD_CREATED":
            case 157:
                m.messageStubType = 157;
                break;
            case "COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED":
            case 158:
                m.messageStubType = 158;
                break;
            case "CAG_INVITE_AUTO_ADD":
            case 159:
                m.messageStubType = 159;
                break;
            case "BIZ_CHAT_ASSIGNMENT_UNASSIGN":
            case 160:
                m.messageStubType = 160;
                break;
            case "CAG_INVITE_AUTO_JOINED":
            case 161:
                m.messageStubType = 161;
                break;
            case "SCHEDULED_CALL_START_MESSAGE":
            case 162:
                m.messageStubType = 162;
                break;
            case "COMMUNITY_INVITE_RICH":
            case 163:
                m.messageStubType = 163;
                break;
            case "COMMUNITY_INVITE_AUTO_ADD_RICH":
            case 164:
                m.messageStubType = 164;
                break;
            case "SUB_GROUP_INVITE_RICH":
            case 165:
                m.messageStubType = 165;
                break;
            case "SUB_GROUP_PARTICIPANT_ADD_RICH":
            case 166:
                m.messageStubType = 166;
                break;
            case "COMMUNITY_LINK_PARENT_GROUP_RICH":
            case 167:
                m.messageStubType = 167;
                break;
            case "COMMUNITY_PARTICIPANT_ADD_RICH":
            case 168:
                m.messageStubType = 168;
                break;
            case "SILENCED_UNKNOWN_CALLER_AUDIO":
            case 169:
                m.messageStubType = 169;
                break;
            case "SILENCED_UNKNOWN_CALLER_VIDEO":
            case 170:
                m.messageStubType = 170;
                break;
            case "GROUP_MEMBER_ADD_MODE":
            case 171:
                m.messageStubType = 171;
                break;
            case "GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD":
            case 172:
                m.messageStubType = 172;
                break;
            case "COMMUNITY_CHANGE_DESCRIPTION":
            case 173:
                m.messageStubType = 173;
                break;
            case "SENDER_INVITE":
            case 174:
                m.messageStubType = 174;
                break;
            case "RECEIVER_INVITE":
            case 175:
                m.messageStubType = 175;
                break;
            case "COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS":
            case 176:
                m.messageStubType = 176;
                break;
            case "PINNED_MESSAGE_IN_CHAT":
            case 177:
                m.messageStubType = 177;
                break;
            case "PAYMENT_INVITE_SETUP_INVITER":
            case 178:
                m.messageStubType = 178;
                break;
            case "PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY":
            case 179:
                m.messageStubType = 179;
                break;
            case "PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE":
            case 180:
                m.messageStubType = 180;
                break;
            case "LINKED_GROUP_CALL_START":
            case 181:
                m.messageStubType = 181;
                break;
            case "REPORT_TO_ADMIN_ENABLED_STATUS":
            case 182:
                m.messageStubType = 182;
                break;
            case "EMPTY_SUBGROUP_CREATE":
            case 183:
                m.messageStubType = 183;
                break;
            case "SCHEDULED_CALL_CANCEL":
            case 184:
                m.messageStubType = 184;
                break;
            case "SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH":
            case 185:
                m.messageStubType = 185;
                break;
            case "GROUP_CHANGE_RECENT_HISTORY_SHARING":
            case 186:
                m.messageStubType = 186;
                break;
            case "PAID_MESSAGE_SERVER_CAMPAIGN_ID":
            case 187:
                m.messageStubType = 187;
                break;
            case "GENERAL_CHAT_CREATE":
            case 188:
                m.messageStubType = 188;
                break;
            case "GENERAL_CHAT_ADD":
            case 189:
                m.messageStubType = 189;
                break;
            case "GENERAL_CHAT_AUTO_ADD_DISABLED":
            case 190:
                m.messageStubType = 190;
                break;
            case "SUGGESTED_SUBGROUP_ANNOUNCE":
            case 191:
                m.messageStubType = 191;
                break;
            case "BIZ_BOT_1P_MESSAGING_ENABLED":
            case 192:
                m.messageStubType = 192;
                break;
            case "CHANGE_USERNAME":
            case 193:
                m.messageStubType = 193;
                break;
            case "BIZ_COEX_PRIVACY_INIT_SELF":
            case 194:
                m.messageStubType = 194;
                break;
            case "BIZ_COEX_PRIVACY_TRANSITION_SELF":
            case 195:
                m.messageStubType = 195;
                break;
            case "SUPPORT_AI_EDUCATION":
            case 196:
                m.messageStubType = 196;
                break;
            case "BIZ_BOT_3P_MESSAGING_ENABLED":
            case 197:
                m.messageStubType = 197;
                break;
            case "REMINDER_SETUP_MESSAGE":
            case 198:
                m.messageStubType = 198;
                break;
            case "REMINDER_SENT_MESSAGE":
            case 199:
                m.messageStubType = 199;
                break;
            case "REMINDER_CANCEL_MESSAGE":
            case 200:
                m.messageStubType = 200;
                break;
            case "BIZ_COEX_PRIVACY_INIT":
            case 201:
                m.messageStubType = 201;
                break;
            case "BIZ_COEX_PRIVACY_TRANSITION":
            case 202:
                m.messageStubType = 202;
                break;
            case "GROUP_DEACTIVATED":
            case 203:
                m.messageStubType = 203;
                break;
            case "COMMUNITY_DEACTIVATE_SIBLING_GROUP":
            case 204:
                m.messageStubType = 204;
                break;
            case "EVENT_UPDATED":
            case 205:
                m.messageStubType = 205;
                break;
            case "EVENT_CANCELED":
            case 206:
                m.messageStubType = 206;
                break;
            case "COMMUNITY_OWNER_UPDATED":
            case 207:
                m.messageStubType = 207;
                break;
            case "COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN":
            case 208:
                m.messageStubType = 208;
                break;
            case "CAPI_GROUP_NE2EE_SYSTEM_MESSAGE":
            case 209:
                m.messageStubType = 209;
                break;
            case "STATUS_MENTION":
            case 210:
                m.messageStubType = 210;
                break;
            case "USER_CONTROLS_SYSTEM_MESSAGE":
            case 211:
                m.messageStubType = 211;
                break;
            case "SUPPORT_SYSTEM_MESSAGE":
            case 212:
                m.messageStubType = 212;
                break;
            case "CHANGE_LID":
            case 213:
                m.messageStubType = 213;
                break;
            case "BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE":
            case 214:
                m.messageStubType = 214;
                break;
            case "BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE":
            case 215:
                m.messageStubType = 215;
                break;
            case "CHANGE_LIMIT_SHARING":
            case 216:
                m.messageStubType = 216;
                break;
            case "GROUP_MEMBER_LINK_MODE":
            case 217:
                m.messageStubType = 217;
                break;
            case "BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE":
            case 218:
                m.messageStubType = 218;
                break;
            case "PHONE_NUMBER_HIDING_CHAT_DEPRECATED_MESSAGE":
            case 219:
                m.messageStubType = 219;
                break;
            case "QUARANTINED_MESSAGE":
            case 220:
                m.messageStubType = 220;
                break;
            case "GROUP_MEMBER_SHARE_GROUP_HISTORY_MODE":
            case 221:
                m.messageStubType = 221;
                break;
            }
            if (d.clearMedia != null) {
                m.clearMedia = Boolean(d.clearMedia);
            }
            if (d.messageStubParameters) {
                if (!Array.isArray(d.messageStubParameters))
                    throw TypeError(".proto.WebMessageInfo.messageStubParameters: array expected");
                m.messageStubParameters = [];
                for (var i = 0; i < d.messageStubParameters.length; ++i) {
                    m.messageStubParameters[i] = String(d.messageStubParameters[i]);
                }
            }
            if (d.duration != null) {
                m.duration = d.duration >>> 0;
            }
            if (d.labels) {
                if (!Array.isArray(d.labels))
                    throw TypeError(".proto.WebMessageInfo.labels: array expected");
                m.labels = [];
                for (var i = 0; i < d.labels.length; ++i) {
                    m.labels[i] = String(d.labels[i]);
                }
            }
            if (d.paymentInfo != null) {
                if (!$util.isObject(d.paymentInfo))
                    throw TypeError(".proto.WebMessageInfo.paymentInfo: object expected");
                m.paymentInfo = $root.proto.PaymentInfo.fromObject(d.paymentInfo, n + 1);
            }
            if (d.finalLiveLocation != null) {
                if (!$util.isObject(d.finalLiveLocation))
                    throw TypeError(".proto.WebMessageInfo.finalLiveLocation: object expected");
                m.finalLiveLocation = $root.proto.Message.LiveLocationMessage.fromObject(d.finalLiveLocation, n + 1);
            }
            if (d.quotedPaymentInfo != null) {
                if (!$util.isObject(d.quotedPaymentInfo))
                    throw TypeError(".proto.WebMessageInfo.quotedPaymentInfo: object expected");
                m.quotedPaymentInfo = $root.proto.PaymentInfo.fromObject(d.quotedPaymentInfo, n + 1);
            }
            if (d.ephemeralStartTimestamp != null) {
                if ($util.Long)
                    m.ephemeralStartTimestamp = $util.Long.fromValue(d.ephemeralStartTimestamp, true);
                else if (typeof d.ephemeralStartTimestamp === "string")
                    m.ephemeralStartTimestamp = parseInt(d.ephemeralStartTimestamp, 10);
                else if (typeof d.ephemeralStartTimestamp === "number")
                    m.ephemeralStartTimestamp = d.ephemeralStartTimestamp;
                else if (typeof d.ephemeralStartTimestamp === "object")
                    m.ephemeralStartTimestamp = new $util.LongBits(d.ephemeralStartTimestamp.low >>> 0, d.ephemeralStartTimestamp.high >>> 0).toNumber(true);
            }
            if (d.ephemeralDuration != null) {
                m.ephemeralDuration = d.ephemeralDuration >>> 0;
            }
            if (d.ephemeralOffToOn != null) {
                m.ephemeralOffToOn = Boolean(d.ephemeralOffToOn);
            }
            if (d.ephemeralOutOfSync != null) {
                m.ephemeralOutOfSync = Boolean(d.ephemeralOutOfSync);
            }
            switch (d.bizPrivacyStatus) {
            default:
                if (typeof d.bizPrivacyStatus === "number") {
                    m.bizPrivacyStatus = d.bizPrivacyStatus;
                    break;
                }
                break;
            case "E2EE":
            case 0:
                m.bizPrivacyStatus = 0;
                break;
            case "FB":
            case 2:
                m.bizPrivacyStatus = 2;
                break;
            case "BSP":
            case 1:
                m.bizPrivacyStatus = 1;
                break;
            case "BSP_AND_FB":
            case 3:
                m.bizPrivacyStatus = 3;
                break;
            }
            if (d.verifiedBizName != null) {
                m.verifiedBizName = String(d.verifiedBizName);
            }
            if (d.mediaData != null) {
                if (!$util.isObject(d.mediaData))
                    throw TypeError(".proto.WebMessageInfo.mediaData: object expected");
                m.mediaData = $root.proto.MediaData.fromObject(d.mediaData, n + 1);
            }
            if (d.photoChange != null) {
                if (!$util.isObject(d.photoChange))
                    throw TypeError(".proto.WebMessageInfo.photoChange: object expected");
                m.photoChange = $root.proto.PhotoChange.fromObject(d.photoChange, n + 1);
            }
            if (d.userReceipt) {
                if (!Array.isArray(d.userReceipt))
                    throw TypeError(".proto.WebMessageInfo.userReceipt: array expected");
                m.userReceipt = [];
                for (var i = 0; i < d.userReceipt.length; ++i) {
                    if (!$util.isObject(d.userReceipt[i]))
                        throw TypeError(".proto.WebMessageInfo.userReceipt: object expected");
                    m.userReceipt[i] = $root.proto.UserReceipt.fromObject(d.userReceipt[i], n + 1);
                }
            }
            if (d.reactions) {
                if (!Array.isArray(d.reactions))
                    throw TypeError(".proto.WebMessageInfo.reactions: array expected");
                m.reactions = [];
                for (var i = 0; i < d.reactions.length; ++i) {
                    if (!$util.isObject(d.reactions[i]))
                        throw TypeError(".proto.WebMessageInfo.reactions: object expected");
                    m.reactions[i] = $root.proto.Reaction.fromObject(d.reactions[i], n + 1);
                }
            }
            if (d.quotedStickerData != null) {
                if (!$util.isObject(d.quotedStickerData))
                    throw TypeError(".proto.WebMessageInfo.quotedStickerData: object expected");
                m.quotedStickerData = $root.proto.MediaData.fromObject(d.quotedStickerData, n + 1);
            }
            if (d.futureproofData != null) {
                if (typeof d.futureproofData === "string")
                    $util.base64.decode(d.futureproofData, m.futureproofData = $util.newBuffer($util.base64.length(d.futureproofData)), 0);
                else if (d.futureproofData.length >= 0)
                    m.futureproofData = d.futureproofData;
            }
            if (d.statusPsa != null) {
                if (!$util.isObject(d.statusPsa))
                    throw TypeError(".proto.WebMessageInfo.statusPsa: object expected");
                m.statusPsa = $root.proto.StatusPSA.fromObject(d.statusPsa, n + 1);
            }
            if (d.pollUpdates) {
                if (!Array.isArray(d.pollUpdates))
                    throw TypeError(".proto.WebMessageInfo.pollUpdates: array expected");
                m.pollUpdates = [];
                for (var i = 0; i < d.pollUpdates.length; ++i) {
                    if (!$util.isObject(d.pollUpdates[i]))
                        throw TypeError(".proto.WebMessageInfo.pollUpdates: object expected");
                    m.pollUpdates[i] = $root.proto.PollUpdate.fromObject(d.pollUpdates[i], n + 1);
                }
            }
            if (d.pollAdditionalMetadata != null) {
                if (!$util.isObject(d.pollAdditionalMetadata))
                    throw TypeError(".proto.WebMessageInfo.pollAdditionalMetadata: object expected");
                m.pollAdditionalMetadata = $root.proto.PollAdditionalMetadata.fromObject(d.pollAdditionalMetadata, n + 1);
            }
            if (d.agentId != null) {
                m.agentId = String(d.agentId);
            }
            if (d.statusAlreadyViewed != null) {
                m.statusAlreadyViewed = Boolean(d.statusAlreadyViewed);
            }
            if (d.messageSecret != null) {
                if (typeof d.messageSecret === "string")
                    $util.base64.decode(d.messageSecret, m.messageSecret = $util.newBuffer($util.base64.length(d.messageSecret)), 0);
                else if (d.messageSecret.length >= 0)
                    m.messageSecret = d.messageSecret;
            }
            if (d.keepInChat != null) {
                if (!$util.isObject(d.keepInChat))
                    throw TypeError(".proto.WebMessageInfo.keepInChat: object expected");
                m.keepInChat = $root.proto.KeepInChat.fromObject(d.keepInChat, n + 1);
            }
            if (d.originalSelfAuthorUserJidString != null) {
                m.originalSelfAuthorUserJidString = String(d.originalSelfAuthorUserJidString);
            }
            if (d.revokeMessageTimestamp != null) {
                if ($util.Long)
                    m.revokeMessageTimestamp = $util.Long.fromValue(d.revokeMessageTimestamp, true);
                else if (typeof d.revokeMessageTimestamp === "string")
                    m.revokeMessageTimestamp = parseInt(d.revokeMessageTimestamp, 10);
                else if (typeof d.revokeMessageTimestamp === "number")
                    m.revokeMessageTimestamp = d.revokeMessageTimestamp;
                else if (typeof d.revokeMessageTimestamp === "object")
                    m.revokeMessageTimestamp = new $util.LongBits(d.revokeMessageTimestamp.low >>> 0, d.revokeMessageTimestamp.high >>> 0).toNumber(true);
            }
            if (d.pinInChat != null) {
                if (!$util.isObject(d.pinInChat))
                    throw TypeError(".proto.WebMessageInfo.pinInChat: object expected");
                m.pinInChat = $root.proto.PinInChat.fromObject(d.pinInChat, n + 1);
            }
            if (d.premiumMessageInfo != null) {
                if (!$util.isObject(d.premiumMessageInfo))
                    throw TypeError(".proto.WebMessageInfo.premiumMessageInfo: object expected");
                m.premiumMessageInfo = $root.proto.PremiumMessageInfo.fromObject(d.premiumMessageInfo, n + 1);
            }
            if (d.is1PBizBotMessage != null) {
                m.is1PBizBotMessage = Boolean(d.is1PBizBotMessage);
            }
            if (d.isGroupHistoryMessage != null) {
                m.isGroupHistoryMessage = Boolean(d.isGroupHistoryMessage);
            }
            if (d.botMessageInvokerJid != null) {
                m.botMessageInvokerJid = String(d.botMessageInvokerJid);
            }
            if (d.commentMetadata != null) {
                if (!$util.isObject(d.commentMetadata))
                    throw TypeError(".proto.WebMessageInfo.commentMetadata: object expected");
                m.commentMetadata = $root.proto.CommentMetadata.fromObject(d.commentMetadata, n + 1);
            }
            if (d.eventResponses) {
                if (!Array.isArray(d.eventResponses))
                    throw TypeError(".proto.WebMessageInfo.eventResponses: array expected");
                m.eventResponses = [];
                for (var i = 0; i < d.eventResponses.length; ++i) {
                    if (!$util.isObject(d.eventResponses[i]))
                        throw TypeError(".proto.WebMessageInfo.eventResponses: object expected");
                    m.eventResponses[i] = $root.proto.EventResponse.fromObject(d.eventResponses[i], n + 1);
                }
            }
            if (d.reportingTokenInfo != null) {
                if (!$util.isObject(d.reportingTokenInfo))
                    throw TypeError(".proto.WebMessageInfo.reportingTokenInfo: object expected");
                m.reportingTokenInfo = $root.proto.ReportingTokenInfo.fromObject(d.reportingTokenInfo, n + 1);
            }
            if (d.newsletterServerId != null) {
                if ($util.Long)
                    m.newsletterServerId = $util.Long.fromValue(d.newsletterServerId, true);
                else if (typeof d.newsletterServerId === "string")
                    m.newsletterServerId = parseInt(d.newsletterServerId, 10);
                else if (typeof d.newsletterServerId === "number")
                    m.newsletterServerId = d.newsletterServerId;
                else if (typeof d.newsletterServerId === "object")
                    m.newsletterServerId = new $util.LongBits(d.newsletterServerId.low >>> 0, d.newsletterServerId.high >>> 0).toNumber(true);
            }
            if (d.eventAdditionalMetadata != null) {
                if (!$util.isObject(d.eventAdditionalMetadata))
                    throw TypeError(".proto.WebMessageInfo.eventAdditionalMetadata: object expected");
                m.eventAdditionalMetadata = $root.proto.EventAdditionalMetadata.fromObject(d.eventAdditionalMetadata, n + 1);
            }
            if (d.isMentionedInStatus != null) {
                m.isMentionedInStatus = Boolean(d.isMentionedInStatus);
            }
            if (d.statusMentions) {
                if (!Array.isArray(d.statusMentions))
                    throw TypeError(".proto.WebMessageInfo.statusMentions: array expected");
                m.statusMentions = [];
                for (var i = 0; i < d.statusMentions.length; ++i) {
                    m.statusMentions[i] = String(d.statusMentions[i]);
                }
            }
            if (d.targetMessageId != null) {
                if (!$util.isObject(d.targetMessageId))
                    throw TypeError(".proto.WebMessageInfo.targetMessageId: object expected");
                m.targetMessageId = $root.proto.MessageKey.fromObject(d.targetMessageId, n + 1);
            }
            if (d.messageAddOns) {
                if (!Array.isArray(d.messageAddOns))
                    throw TypeError(".proto.WebMessageInfo.messageAddOns: array expected");
                m.messageAddOns = [];
                for (var i = 0; i < d.messageAddOns.length; ++i) {
                    if (!$util.isObject(d.messageAddOns[i]))
                        throw TypeError(".proto.WebMessageInfo.messageAddOns: object expected");
                    m.messageAddOns[i] = $root.proto.MessageAddOn.fromObject(d.messageAddOns[i], n + 1);
                }
            }
            if (d.statusMentionMessageInfo != null) {
                if (!$util.isObject(d.statusMentionMessageInfo))
                    throw TypeError(".proto.WebMessageInfo.statusMentionMessageInfo: object expected");
                m.statusMentionMessageInfo = $root.proto.StatusMentionMessage.fromObject(d.statusMentionMessageInfo, n + 1);
            }
            if (d.isSupportAiMessage != null) {
                m.isSupportAiMessage = Boolean(d.isSupportAiMessage);
            }
            if (d.statusMentionSources) {
                if (!Array.isArray(d.statusMentionSources))
                    throw TypeError(".proto.WebMessageInfo.statusMentionSources: array expected");
                m.statusMentionSources = [];
                for (var i = 0; i < d.statusMentionSources.length; ++i) {
                    m.statusMentionSources[i] = String(d.statusMentionSources[i]);
                }
            }
            if (d.supportAiCitations) {
                if (!Array.isArray(d.supportAiCitations))
                    throw TypeError(".proto.WebMessageInfo.supportAiCitations: array expected");
                m.supportAiCitations = [];
                for (var i = 0; i < d.supportAiCitations.length; ++i) {
                    if (!$util.isObject(d.supportAiCitations[i]))
                        throw TypeError(".proto.WebMessageInfo.supportAiCitations: object expected");
                    m.supportAiCitations[i] = $root.proto.Citation.fromObject(d.supportAiCitations[i], n + 1);
                }
            }
            if (d.botTargetId != null) {
                m.botTargetId = String(d.botTargetId);
            }
            if (d.groupHistoryIndividualMessageInfo != null) {
                if (!$util.isObject(d.groupHistoryIndividualMessageInfo))
                    throw TypeError(".proto.WebMessageInfo.groupHistoryIndividualMessageInfo: object expected");
                m.groupHistoryIndividualMessageInfo = $root.proto.GroupHistoryIndividualMessageInfo.fromObject(d.groupHistoryIndividualMessageInfo, n + 1);
            }
            if (d.groupHistoryBundleInfo != null) {
                if (!$util.isObject(d.groupHistoryBundleInfo))
                    throw TypeError(".proto.WebMessageInfo.groupHistoryBundleInfo: object expected");
                m.groupHistoryBundleInfo = $root.proto.GroupHistoryBundleInfo.fromObject(d.groupHistoryBundleInfo, n + 1);
            }
            if (d.interactiveMessageAdditionalMetadata != null) {
                if (!$util.isObject(d.interactiveMessageAdditionalMetadata))
                    throw TypeError(".proto.WebMessageInfo.interactiveMessageAdditionalMetadata: object expected");
                m.interactiveMessageAdditionalMetadata = $root.proto.InteractiveMessageAdditionalMetadata.fromObject(d.interactiveMessageAdditionalMetadata, n + 1);
            }
            if (d.quarantinedMessage != null) {
                if (!$util.isObject(d.quarantinedMessage))
                    throw TypeError(".proto.WebMessageInfo.quarantinedMessage: object expected");
                m.quarantinedMessage = $root.proto.QuarantinedMessage.fromObject(d.quarantinedMessage, n + 1);
            }
            return m;
        };

        WebMessageInfo.toObject = function toObject(m, o, q) {
            if (!o)
                o = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.messageStubParameters = [];
                d.labels = [];
                d.userReceipt = [];
                d.reactions = [];
                d.pollUpdates = [];
                d.eventResponses = [];
                d.statusMentions = [];
                d.messageAddOns = [];
                d.statusMentionSources = [];
                d.supportAiCitations = [];
            }
            if (o.defaults) {
                d.key = null;
            }
            if (m.key != null && Object.hasOwnProperty.call(m, "key")) {
                d.key = $root.proto.MessageKey.toObject(m.key, o, q + 1);
            }
            if (m.message != null && Object.hasOwnProperty.call(m, "message")) {
                d.message = $root.proto.Message.toObject(m.message, o, q + 1);
                if (o.oneofs)
                    d._message = "message";
            }
            if (m.messageTimestamp != null && Object.hasOwnProperty.call(m, "messageTimestamp")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.messageTimestamp = typeof m.messageTimestamp === "number" ? BigInt(m.messageTimestamp) : $util.Long.fromBits(m.messageTimestamp.low >>> 0, m.messageTimestamp.high >>> 0, true).toBigInt();
                else if (typeof m.messageTimestamp === "number")
                    d.messageTimestamp = o.longs === String ? String(m.messageTimestamp) : m.messageTimestamp;
                else
                    d.messageTimestamp = o.longs === String ? longToString(m.messageTimestamp, true) : o.longs === Number ? longToNumber(m.messageTimestamp, true) : m.messageTimestamp;
                if (o.oneofs)
                    d._messageTimestamp = "messageTimestamp";
            }
            if (m.status != null && Object.hasOwnProperty.call(m, "status")) {
                d.status = o.enums === String ? $root.proto.WebMessageInfo.Status[m.status] === undefined ? m.status : $root.proto.WebMessageInfo.Status[m.status] : m.status;
                if (o.oneofs)
                    d._status = "status";
            }
            if (m.participant != null && Object.hasOwnProperty.call(m, "participant")) {
                d.participant = m.participant;
                if (o.oneofs)
                    d._participant = "participant";
            }
            if (m.messageC2STimestamp != null && Object.hasOwnProperty.call(m, "messageC2STimestamp")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.messageC2STimestamp = typeof m.messageC2STimestamp === "number" ? BigInt(m.messageC2STimestamp) : $util.Long.fromBits(m.messageC2STimestamp.low >>> 0, m.messageC2STimestamp.high >>> 0, true).toBigInt();
                else if (typeof m.messageC2STimestamp === "number")
                    d.messageC2STimestamp = o.longs === String ? String(m.messageC2STimestamp) : m.messageC2STimestamp;
                else
                    d.messageC2STimestamp = o.longs === String ? longToString(m.messageC2STimestamp, true) : o.longs === Number ? longToNumber(m.messageC2STimestamp, true) : m.messageC2STimestamp;
                if (o.oneofs)
                    d._messageC2STimestamp = "messageC2STimestamp";
            }
            if (m.ignore != null && Object.hasOwnProperty.call(m, "ignore")) {
                d.ignore = m.ignore;
                if (o.oneofs)
                    d._ignore = "ignore";
            }
            if (m.starred != null && Object.hasOwnProperty.call(m, "starred")) {
                d.starred = m.starred;
                if (o.oneofs)
                    d._starred = "starred";
            }
            if (m.broadcast != null && Object.hasOwnProperty.call(m, "broadcast")) {
                d.broadcast = m.broadcast;
                if (o.oneofs)
                    d._broadcast = "broadcast";
            }
            if (m.pushName != null && Object.hasOwnProperty.call(m, "pushName")) {
                d.pushName = m.pushName;
                if (o.oneofs)
                    d._pushName = "pushName";
            }
            if (m.mediaCiphertextSha256 != null && Object.hasOwnProperty.call(m, "mediaCiphertextSha256")) {
                d.mediaCiphertextSha256 = o.bytes === String ? $util.base64.encode(m.mediaCiphertextSha256, 0, m.mediaCiphertextSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.mediaCiphertextSha256) : m.mediaCiphertextSha256;
                if (o.oneofs)
                    d._mediaCiphertextSha256 = "mediaCiphertextSha256";
            }
            if (m.multicast != null && Object.hasOwnProperty.call(m, "multicast")) {
                d.multicast = m.multicast;
                if (o.oneofs)
                    d._multicast = "multicast";
            }
            if (m.urlText != null && Object.hasOwnProperty.call(m, "urlText")) {
                d.urlText = m.urlText;
                if (o.oneofs)
                    d._urlText = "urlText";
            }
            if (m.urlNumber != null && Object.hasOwnProperty.call(m, "urlNumber")) {
                d.urlNumber = m.urlNumber;
                if (o.oneofs)
                    d._urlNumber = "urlNumber";
            }
            if (m.messageStubType != null && Object.hasOwnProperty.call(m, "messageStubType")) {
                d.messageStubType = o.enums === String ? $root.proto.WebMessageInfo.StubType[m.messageStubType] === undefined ? m.messageStubType : $root.proto.WebMessageInfo.StubType[m.messageStubType] : m.messageStubType;
                if (o.oneofs)
                    d._messageStubType = "messageStubType";
            }
            if (m.clearMedia != null && Object.hasOwnProperty.call(m, "clearMedia")) {
                d.clearMedia = m.clearMedia;
                if (o.oneofs)
                    d._clearMedia = "clearMedia";
            }
            if (m.messageStubParameters && m.messageStubParameters.length) {
                d.messageStubParameters = [];
                for (var j = 0; j < m.messageStubParameters.length; ++j) {
                    d.messageStubParameters[j] = m.messageStubParameters[j];
                }
            }
            if (m.duration != null && Object.hasOwnProperty.call(m, "duration")) {
                d.duration = m.duration;
                if (o.oneofs)
                    d._duration = "duration";
            }
            if (m.labels && m.labels.length) {
                d.labels = [];
                for (var j = 0; j < m.labels.length; ++j) {
                    d.labels[j] = m.labels[j];
                }
            }
            if (m.paymentInfo != null && Object.hasOwnProperty.call(m, "paymentInfo")) {
                d.paymentInfo = $root.proto.PaymentInfo.toObject(m.paymentInfo, o, q + 1);
                if (o.oneofs)
                    d._paymentInfo = "paymentInfo";
            }
            if (m.finalLiveLocation != null && Object.hasOwnProperty.call(m, "finalLiveLocation")) {
                d.finalLiveLocation = $root.proto.Message.LiveLocationMessage.toObject(m.finalLiveLocation, o, q + 1);
                if (o.oneofs)
                    d._finalLiveLocation = "finalLiveLocation";
            }
            if (m.quotedPaymentInfo != null && Object.hasOwnProperty.call(m, "quotedPaymentInfo")) {
                d.quotedPaymentInfo = $root.proto.PaymentInfo.toObject(m.quotedPaymentInfo, o, q + 1);
                if (o.oneofs)
                    d._quotedPaymentInfo = "quotedPaymentInfo";
            }
            if (m.ephemeralStartTimestamp != null && Object.hasOwnProperty.call(m, "ephemeralStartTimestamp")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.ephemeralStartTimestamp = typeof m.ephemeralStartTimestamp === "number" ? BigInt(m.ephemeralStartTimestamp) : $util.Long.fromBits(m.ephemeralStartTimestamp.low >>> 0, m.ephemeralStartTimestamp.high >>> 0, true).toBigInt();
                else if (typeof m.ephemeralStartTimestamp === "number")
                    d.ephemeralStartTimestamp = o.longs === String ? String(m.ephemeralStartTimestamp) : m.ephemeralStartTimestamp;
                else
                    d.ephemeralStartTimestamp = o.longs === String ? longToString(m.ephemeralStartTimestamp, true) : o.longs === Number ? longToNumber(m.ephemeralStartTimestamp, true) : m.ephemeralStartTimestamp;
                if (o.oneofs)
                    d._ephemeralStartTimestamp = "ephemeralStartTimestamp";
            }
            if (m.ephemeralDuration != null && Object.hasOwnProperty.call(m, "ephemeralDuration")) {
                d.ephemeralDuration = m.ephemeralDuration;
                if (o.oneofs)
                    d._ephemeralDuration = "ephemeralDuration";
            }
            if (m.ephemeralOffToOn != null && Object.hasOwnProperty.call(m, "ephemeralOffToOn")) {
                d.ephemeralOffToOn = m.ephemeralOffToOn;
                if (o.oneofs)
                    d._ephemeralOffToOn = "ephemeralOffToOn";
            }
            if (m.ephemeralOutOfSync != null && Object.hasOwnProperty.call(m, "ephemeralOutOfSync")) {
                d.ephemeralOutOfSync = m.ephemeralOutOfSync;
                if (o.oneofs)
                    d._ephemeralOutOfSync = "ephemeralOutOfSync";
            }
            if (m.bizPrivacyStatus != null && Object.hasOwnProperty.call(m, "bizPrivacyStatus")) {
                d.bizPrivacyStatus = o.enums === String ? $root.proto.WebMessageInfo.BizPrivacyStatus[m.bizPrivacyStatus] === undefined ? m.bizPrivacyStatus : $root.proto.WebMessageInfo.BizPrivacyStatus[m.bizPrivacyStatus] : m.bizPrivacyStatus;
                if (o.oneofs)
                    d._bizPrivacyStatus = "bizPrivacyStatus";
            }
            if (m.verifiedBizName != null && Object.hasOwnProperty.call(m, "verifiedBizName")) {
                d.verifiedBizName = m.verifiedBizName;
                if (o.oneofs)
                    d._verifiedBizName = "verifiedBizName";
            }
            if (m.mediaData != null && Object.hasOwnProperty.call(m, "mediaData")) {
                d.mediaData = $root.proto.MediaData.toObject(m.mediaData, o, q + 1);
                if (o.oneofs)
                    d._mediaData = "mediaData";
            }
            if (m.photoChange != null && Object.hasOwnProperty.call(m, "photoChange")) {
                d.photoChange = $root.proto.PhotoChange.toObject(m.photoChange, o, q + 1);
                if (o.oneofs)
                    d._photoChange = "photoChange";
            }
            if (m.userReceipt && m.userReceipt.length) {
                d.userReceipt = [];
                for (var j = 0; j < m.userReceipt.length; ++j) {
                    d.userReceipt[j] = $root.proto.UserReceipt.toObject(m.userReceipt[j], o, q + 1);
                }
            }
            if (m.reactions && m.reactions.length) {
                d.reactions = [];
                for (var j = 0; j < m.reactions.length; ++j) {
                    d.reactions[j] = $root.proto.Reaction.toObject(m.reactions[j], o, q + 1);
                }
            }
            if (m.quotedStickerData != null && Object.hasOwnProperty.call(m, "quotedStickerData")) {
                d.quotedStickerData = $root.proto.MediaData.toObject(m.quotedStickerData, o, q + 1);
                if (o.oneofs)
                    d._quotedStickerData = "quotedStickerData";
            }
            if (m.futureproofData != null && Object.hasOwnProperty.call(m, "futureproofData")) {
                d.futureproofData = o.bytes === String ? $util.base64.encode(m.futureproofData, 0, m.futureproofData.length) : o.bytes === Array ? Array.prototype.slice.call(m.futureproofData) : m.futureproofData;
                if (o.oneofs)
                    d._futureproofData = "futureproofData";
            }
            if (m.statusPsa != null && Object.hasOwnProperty.call(m, "statusPsa")) {
                d.statusPsa = $root.proto.StatusPSA.toObject(m.statusPsa, o, q + 1);
                if (o.oneofs)
                    d._statusPsa = "statusPsa";
            }
            if (m.pollUpdates && m.pollUpdates.length) {
                d.pollUpdates = [];
                for (var j = 0; j < m.pollUpdates.length; ++j) {
                    d.pollUpdates[j] = $root.proto.PollUpdate.toObject(m.pollUpdates[j], o, q + 1);
                }
            }
            if (m.pollAdditionalMetadata != null && Object.hasOwnProperty.call(m, "pollAdditionalMetadata")) {
                d.pollAdditionalMetadata = $root.proto.PollAdditionalMetadata.toObject(m.pollAdditionalMetadata, o, q + 1);
                if (o.oneofs)
                    d._pollAdditionalMetadata = "pollAdditionalMetadata";
            }
            if (m.agentId != null && Object.hasOwnProperty.call(m, "agentId")) {
                d.agentId = m.agentId;
                if (o.oneofs)
                    d._agentId = "agentId";
            }
            if (m.statusAlreadyViewed != null && Object.hasOwnProperty.call(m, "statusAlreadyViewed")) {
                d.statusAlreadyViewed = m.statusAlreadyViewed;
                if (o.oneofs)
                    d._statusAlreadyViewed = "statusAlreadyViewed";
            }
            if (m.messageSecret != null && Object.hasOwnProperty.call(m, "messageSecret")) {
                d.messageSecret = o.bytes === String ? $util.base64.encode(m.messageSecret, 0, m.messageSecret.length) : o.bytes === Array ? Array.prototype.slice.call(m.messageSecret) : m.messageSecret;
                if (o.oneofs)
                    d._messageSecret = "messageSecret";
            }
            if (m.keepInChat != null && Object.hasOwnProperty.call(m, "keepInChat")) {
                d.keepInChat = $root.proto.KeepInChat.toObject(m.keepInChat, o, q + 1);
                if (o.oneofs)
                    d._keepInChat = "keepInChat";
            }
            if (m.originalSelfAuthorUserJidString != null && Object.hasOwnProperty.call(m, "originalSelfAuthorUserJidString")) {
                d.originalSelfAuthorUserJidString = m.originalSelfAuthorUserJidString;
                if (o.oneofs)
                    d._originalSelfAuthorUserJidString = "originalSelfAuthorUserJidString";
            }
            if (m.revokeMessageTimestamp != null && Object.hasOwnProperty.call(m, "revokeMessageTimestamp")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.revokeMessageTimestamp = typeof m.revokeMessageTimestamp === "number" ? BigInt(m.revokeMessageTimestamp) : $util.Long.fromBits(m.revokeMessageTimestamp.low >>> 0, m.revokeMessageTimestamp.high >>> 0, true).toBigInt();
                else if (typeof m.revokeMessageTimestamp === "number")
                    d.revokeMessageTimestamp = o.longs === String ? String(m.revokeMessageTimestamp) : m.revokeMessageTimestamp;
                else
                    d.revokeMessageTimestamp = o.longs === String ? longToString(m.revokeMessageTimestamp, true) : o.longs === Number ? longToNumber(m.revokeMessageTimestamp, true) : m.revokeMessageTimestamp;
                if (o.oneofs)
                    d._revokeMessageTimestamp = "revokeMessageTimestamp";
            }
            if (m.pinInChat != null && Object.hasOwnProperty.call(m, "pinInChat")) {
                d.pinInChat = $root.proto.PinInChat.toObject(m.pinInChat, o, q + 1);
                if (o.oneofs)
                    d._pinInChat = "pinInChat";
            }
            if (m.premiumMessageInfo != null && Object.hasOwnProperty.call(m, "premiumMessageInfo")) {
                d.premiumMessageInfo = $root.proto.PremiumMessageInfo.toObject(m.premiumMessageInfo, o, q + 1);
                if (o.oneofs)
                    d._premiumMessageInfo = "premiumMessageInfo";
            }
            if (m.is1PBizBotMessage != null && Object.hasOwnProperty.call(m, "is1PBizBotMessage")) {
                d.is1PBizBotMessage = m.is1PBizBotMessage;
                if (o.oneofs)
                    d._is1PBizBotMessage = "is1PBizBotMessage";
            }
            if (m.isGroupHistoryMessage != null && Object.hasOwnProperty.call(m, "isGroupHistoryMessage")) {
                d.isGroupHistoryMessage = m.isGroupHistoryMessage;
                if (o.oneofs)
                    d._isGroupHistoryMessage = "isGroupHistoryMessage";
            }
            if (m.botMessageInvokerJid != null && Object.hasOwnProperty.call(m, "botMessageInvokerJid")) {
                d.botMessageInvokerJid = m.botMessageInvokerJid;
                if (o.oneofs)
                    d._botMessageInvokerJid = "botMessageInvokerJid";
            }
            if (m.commentMetadata != null && Object.hasOwnProperty.call(m, "commentMetadata")) {
                d.commentMetadata = $root.proto.CommentMetadata.toObject(m.commentMetadata, o, q + 1);
                if (o.oneofs)
                    d._commentMetadata = "commentMetadata";
            }
            if (m.eventResponses && m.eventResponses.length) {
                d.eventResponses = [];
                for (var j = 0; j < m.eventResponses.length; ++j) {
                    d.eventResponses[j] = $root.proto.EventResponse.toObject(m.eventResponses[j], o, q + 1);
                }
            }
            if (m.reportingTokenInfo != null && Object.hasOwnProperty.call(m, "reportingTokenInfo")) {
                d.reportingTokenInfo = $root.proto.ReportingTokenInfo.toObject(m.reportingTokenInfo, o, q + 1);
                if (o.oneofs)
                    d._reportingTokenInfo = "reportingTokenInfo";
            }
            if (m.newsletterServerId != null && Object.hasOwnProperty.call(m, "newsletterServerId")) {
                if (typeof BigInt !== "undefined" && o.longs === BigInt)
                    d.newsletterServerId = typeof m.newsletterServerId === "number" ? BigInt(m.newsletterServerId) : $util.Long.fromBits(m.newsletterServerId.low >>> 0, m.newsletterServerId.high >>> 0, true).toBigInt();
                else if (typeof m.newsletterServerId === "number")
                    d.newsletterServerId = o.longs === String ? String(m.newsletterServerId) : m.newsletterServerId;
                else
                    d.newsletterServerId = o.longs === String ? longToString(m.newsletterServerId, true) : o.longs === Number ? longToNumber(m.newsletterServerId, true) : m.newsletterServerId;
                if (o.oneofs)
                    d._newsletterServerId = "newsletterServerId";
            }
            if (m.eventAdditionalMetadata != null && Object.hasOwnProperty.call(m, "eventAdditionalMetadata")) {
                d.eventAdditionalMetadata = $root.proto.EventAdditionalMetadata.toObject(m.eventAdditionalMetadata, o, q + 1);
                if (o.oneofs)
                    d._eventAdditionalMetadata = "eventAdditionalMetadata";
            }
            if (m.isMentionedInStatus != null && Object.hasOwnProperty.call(m, "isMentionedInStatus")) {
                d.isMentionedInStatus = m.isMentionedInStatus;
                if (o.oneofs)
                    d._isMentionedInStatus = "isMentionedInStatus";
            }
            if (m.statusMentions && m.statusMentions.length) {
                d.statusMentions = [];
                for (var j = 0; j < m.statusMentions.length; ++j) {
                    d.statusMentions[j] = m.statusMentions[j];
                }
            }
            if (m.targetMessageId != null && Object.hasOwnProperty.call(m, "targetMessageId")) {
                d.targetMessageId = $root.proto.MessageKey.toObject(m.targetMessageId, o, q + 1);
                if (o.oneofs)
                    d._targetMessageId = "targetMessageId";
            }
            if (m.messageAddOns && m.messageAddOns.length) {
                d.messageAddOns = [];
                for (var j = 0; j < m.messageAddOns.length; ++j) {
                    d.messageAddOns[j] = $root.proto.MessageAddOn.toObject(m.messageAddOns[j], o, q + 1);
                }
            }
            if (m.statusMentionMessageInfo != null && Object.hasOwnProperty.call(m, "statusMentionMessageInfo")) {
                d.statusMentionMessageInfo = $root.proto.StatusMentionMessage.toObject(m.statusMentionMessageInfo, o, q + 1);
                if (o.oneofs)
                    d._statusMentionMessageInfo = "statusMentionMessageInfo";
            }
            if (m.isSupportAiMessage != null && Object.hasOwnProperty.call(m, "isSupportAiMessage")) {
                d.isSupportAiMessage = m.isSupportAiMessage;
                if (o.oneofs)
                    d._isSupportAiMessage = "isSupportAiMessage";
            }
            if (m.statusMentionSources && m.statusMentionSources.length) {
                d.statusMentionSources = [];
                for (var j = 0; j < m.statusMentionSources.length; ++j) {
                    d.statusMentionSources[j] = m.statusMentionSources[j];
                }
            }
            if (m.supportAiCitations && m.supportAiCitations.length) {
                d.supportAiCitations = [];
                for (var j = 0; j < m.supportAiCitations.length; ++j) {
                    d.supportAiCitations[j] = $root.proto.Citation.toObject(m.supportAiCitations[j], o, q + 1);
                }
            }
            if (m.botTargetId != null && Object.hasOwnProperty.call(m, "botTargetId")) {
                d.botTargetId = m.botTargetId;
                if (o.oneofs)
                    d._botTargetId = "botTargetId";
            }
            if (m.groupHistoryIndividualMessageInfo != null && Object.hasOwnProperty.call(m, "groupHistoryIndividualMessageInfo")) {
                d.groupHistoryIndividualMessageInfo = $root.proto.GroupHistoryIndividualMessageInfo.toObject(m.groupHistoryIndividualMessageInfo, o, q + 1);
                if (o.oneofs)
                    d._groupHistoryIndividualMessageInfo = "groupHistoryIndividualMessageInfo";
            }
            if (m.groupHistoryBundleInfo != null && Object.hasOwnProperty.call(m, "groupHistoryBundleInfo")) {
                d.groupHistoryBundleInfo = $root.proto.GroupHistoryBundleInfo.toObject(m.groupHistoryBundleInfo, o, q + 1);
                if (o.oneofs)
                    d._groupHistoryBundleInfo = "groupHistoryBundleInfo";
            }
            if (m.interactiveMessageAdditionalMetadata != null && Object.hasOwnProperty.call(m, "interactiveMessageAdditionalMetadata")) {
                d.interactiveMessageAdditionalMetadata = $root.proto.InteractiveMessageAdditionalMetadata.toObject(m.interactiveMessageAdditionalMetadata, o, q + 1);
                if (o.oneofs)
                    d._interactiveMessageAdditionalMetadata = "interactiveMessageAdditionalMetadata";
            }
            if (m.quarantinedMessage != null && Object.hasOwnProperty.call(m, "quarantinedMessage")) {
                d.quarantinedMessage = $root.proto.QuarantinedMessage.toObject(m.quarantinedMessage, o, q + 1);
                if (o.oneofs)
                    d._quarantinedMessage = "quarantinedMessage";
            }
            return d;
        };

        WebMessageInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        WebMessageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.WebMessageInfo";
        };

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
