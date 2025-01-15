import { API_RESPONSE_GET_SUMMARY_V1 } from "../types/API_RESPONSE_V1";
import { API_RESPONSE_GET_SUMMARY_V2 } from "../types/API_RESPONSE_V2";

class _API_RESPONSE_MAP {
  profileSummary_V2_TO_V1(v2: API_RESPONSE_GET_SUMMARY_V2, linkedinUrl: string): API_RESPONSE_GET_SUMMARY_V1 {
    return {
      activityData: {
        generatedText: v2.data[0].reply,
        linked_url: linkedinUrl,
        timestamp: {},
      },
      activityId: v2.data[0].activity_id,
      success: v2.success,
      summary: v2.data[0].reply,
    };
  }
}

export const API_RESPONSe_MAP = new _API_RESPONSE_MAP();
