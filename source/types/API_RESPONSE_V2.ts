export interface API_RESPONSE_GET_SUMMARY_V2 {
  success: boolean;
  data: {
    reply: string;
    activity_id: string;
  }[];
  warning?: Warning;
}

export interface Warning {
  title: string;
  message: string;
  href: {
    label: string;
    url: string;
  };
}
