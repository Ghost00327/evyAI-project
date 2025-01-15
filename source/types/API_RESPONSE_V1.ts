export interface API_RESPONSE_GET_SUMMARY_V1 {
  success: boolean;
  summary: string;
  activityId: string;
  activityData: {
    generatedText: string;
    timestamp: {};
    linked_url: string;
  };
}
