const BASE_URL = process.env.API_URL;
// EvyAILogger.log("api base url:::", BASE_URL);
import { PAGE_PATH } from "../../source/LinkedInParser/constants";

export const MUTATION_OBSERVER_DEBOUNCE_TIME = 2000;

export enum MESSAGE_ACTION {
  BUBBLE_ERROR_TO_BACKGROUND_SENTRY = "BUBBLE_ERROR_TO_BACKGROUND_SENTRY",
  IS_SCRIPT_INJECTED = "IS_SCRIPT_INJECTED",
  TOGGLE_POPUP = "TOGGLE_POPUP",
  HIDE_POPUP = "HIDE_POPUP",
  SHOW_POPUP = "SHOW_POPUP",
  GET_USER_AUTH_STATE = "GET_USER_AUTH_STATE",
  RELOAD_CURRENT_USER_AUTH_STATE = "RELOAD_CURRENT_USER_AUTH_STATE",
  EMAIL_LOGIN = "EMAIL_LOGIN",
  EMAIL_SIGN_UP = "EMAIL_SIGN_UP",
  SIGN_IN_WITH_GOOGLE = "SIGN_IN_WITH_GOOGLE",
  USER_AUTH_STATE_CHANGED = "USER_AUTH_STATE_CHANGED",
  SIGN_OUT = "SIGN_OUT",
  SEND_VERIFICATION_EMAIL = "SEND_VERIFICATION_EMAIL",
  SEND_PASSWORD_RESET_EMAIL = "SEND_PASSWORD_RESET_EMAIL",
  SEND_VERIFICATION_CODE_TO_PHONE = "SEND_VERIFICATION_CODE_TO_PHONE",
  GET_SUGGESTED_COMMENTS = "GET_SUGGESTED_COMMENTS",
  GET_RECENT_ACTIVITIES = "GET_RECENT_ACTIVITIES",
  GET_SAVED_COMMANDS = "GET_SAVED_COMMANDS",
  SAVE_COMMAND = "SAVE_COMMAND",
  REMOVE_SAVED_COMMAND = "REMOVE_SAVE_COMMAND",
  GET_SUBSCRIPTION_PLANS = "GET_SUBSCRIPTION_PLANS",
  GET_SUBSCRIPTION_PAYMENT_URL = "GET_SUBSCRIPTION_PAYMENT_URL",
  OPEN_NEW_TAB = "OPEN_NEW_TAB",
  GET_SUBSCRIPTION_STATUS = "GET_SUBSCRIPTION_STATUS",
  GET_BANNER_DETAILS = "GET_BANNER_DETAILS",
  GET_WEB_APP_AUTH_DETAILS = "GET_WEB_APP_AUTH_DETAILS",
  GET_WEB_APP_AUTH_SIGN_OUT = "GET_WEB_APP_AUTH_SIGN_OUT",
  GET_MANAGE_SUBSCRIPTION_LINK = "GET_MANAGE_SUBSCRIPTION_LINK",
  // add new value
  UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS",
  GET_USER_SUBSCRIPTION_DATA = "GET_USER_SUBSCRIPTION_DATA",
  GET_SINGLE_COLLECTION_DATA = "GET_SINGLE_COLLECTION_DATA",
  //Add review
  ADD_REVIEW = "ADD_REVIEW",
  ADD_QUESTIONS = "ADD_QUESTION",
  ADD_LINKEDIN_PROFILE = "ADD_LINKEDIN_PROFILE",
  IS_PROFILE_SAVED = "IS_PROFILE_SAVED",
  SAVED_PROFILE_LENGTH = "SAVED_PROFILE_LENGTH",
  GET_PERSPONA = "GET_PERSPONA",
  GET_SINGLE_PERSONA = "GET_SINGLE_PERSONA",
  SEARCH_PERSONA = "SEARCH_PERSONA",
  GET_TEMPLATES = "GET_TEMPLATES",
  SEARCH_TEMPLATES = "SEARCH_TEMPLATES",
  GET_LISTS = "GET_LISTS",
  UPDATE_PROFILE_LISTS = "UPDATE_PROFILE_LISTS",
  DELETE_LINKDIN_SAVE_PROFILE = "DELETE_LINKDIN_SAVE_PROFILE",
  GET_SAVE_PROFILE_LISTS = "GET_SAVE_PROFILE_LISTS",
  PROFILE_SUMMARY = "PROFILE_SUMMARY",
  EXISTING_PROFILE_SUMMARY = "EXISTING_PROFILE_SUMMARY",
  OLDER_VERSION_CHECK = "OLDER_VERSION_CHECK",
  UPDATE_PROFILE_SUMMARY_ID = "UPDATE_PROFILE_SUMMARY_ID",
  IS_COMMAND_SAVED = "IS_COMMAND_SAVED",
  IS_LOGGED_OUT = "IS_LOGGED_OUT",
  GET_CURRENT_URL = "get_current_url",
  HANDLE_BUTTON_INSERTION_EXCEPTION = "handle_button_insertion_exception",
}

export enum AuthenticationState {
  Authenticated,
  UnverifiedAuthenticated,
  Login,
  Register,
  ForgotPassword,
  SendVerificationCodeInPhone,
  VerifyPhoneNumber,
  MyAccount,
  setting,
  manageSubscripion,
  UpgradePlan,
  ShareWithFriend,
  QuestionsAndIssues,
}

export enum POST_COMMENT_SOURCE_PAGE {
  HOME = "home",
  MESSAGE = "message",
  CREATE_POST = "create_post",
  INVITATION_NOTE = "invitation_note",
  PROFILE_HEADLINE = "profile_headline",
  PROFILE_ABOUT = "profile_about",
  RECOMMENDATION_TEXT = "recommendation_text",
  SALES_MESSAGE_PAGE = "sales_message_page",
  ADVICE = "advice",
}

export enum FIREBASE_ORDER_BY_FIELDS {
  ASCENDING = "asc",
  DESCENDING = "desc",
}

export const PARAMETER_KEY = {
  GOAL: "goal",
  TONE: "tone",
  SUMMARY_TEXT: "summaryText",
  COMMAND: "command",
  POST_TEXT: "postText",
  COMMENT_TEXT: "commentText",
  AUTHOR_NAME: "authorName",
  COMMENT_AUTHOR_NAME: "commentAuthorName",
  TYPE: "type",
  LAST_MESSAGES: "lastMessages",
  POST_CREATION_TEXT: "postCreationText",
  USER_ENTERED_INVITATION_NOTE: "userEnteredInvitationNote",
  CONNECTING_USER_NAME: "connectingUserName",
  CONNECTING_USER_TAGLINE: "connectingUserTagline",
  CONNECTING_USER_EXPERIENCES: "connectingUserExperiences",
  PROFILE: "profile",
  ABOUT_TEXT: "aboutText",
  ARTICLE_INFO: "articleInfo",
  RECOMMENDATION_INFO: "recommendationInfo",
  USER_ENTERED_RECOMMENDATION_TEXT: "userEnteredRecommendationText",
  CURRENT_USER_NAME: "currentUserName",
  CURRENT_USER_NAME_URL: "currentUserNameURL",
  GENERATELIURL: "generateLIURL",
  GENERATE_CURRENT_URL: "generateCurrentURL",
  MODEL: "model",
  PERSONA: "persona",
  POSTING: "posting",
  PERCPECTIVE: "article_data",
  URL: "url",
  LANGUAGE: "language",
  STATUS: "status",
  IS_PRO_USER: "isProUser",
};

export const PAGINATION_LIMITS = {
  PERSONAS: 5,
  TEMPLATES: 5,
  PERSONAS_SEARCH: 5,
  TEMPLATES_SEARCH: 5,
};

export const PERSONAS_DROPDOWN_CONSTANTS = {
  LOADING: { label: "Loading personas....", value: "LOADING" },
  LOADING_MORE: { label: "", value: "LOADING_MORE" },
  NOTHING_FOUND: { label: "No Persona Found", value: "NOTHING_FOUND" },
  SELECT_PERSONA: { label: "Select Persona", value: "" },
  PLACE_HOLDER: "Select Persona",
};

export enum API_REQUEST_TYPE {
  POST_COMMENT = "post_comment",
  PERSPECTIVE_COMMENT = "contributed_article_comment",
  MESSAGE_REPLY = "message_reply",
  COMMENT_REPLY = "comment_reply",
  CREATE_POST = "create_post",
  INVITATION_NOTE = "invitation_note",
  PROFILE_HEADLINE = "profile_headline",
  PROFILE_ABOUT = "profile_about",
  ARTICLE_COMMENT = "article_comment",
  ARTICLE_COMMENT_REPLY = "article_comment_reply",
  RECOMMENDATION_TEXT = "recommendation_text",
  RE_POST = "re_post",
  PROFILE_SUMMARY = "profile_summary",
  LINKEDIN_PROFILE_SUMMARY = "linkedin_profile_summary",
}

export const RECENT_ACTIVITY_TYPE_TITLE = {
  [API_REQUEST_TYPE.POST_COMMENT]: "Comment",
  [API_REQUEST_TYPE.MESSAGE_REPLY]: "Message",
  [API_REQUEST_TYPE.COMMENT_REPLY]: "Reply",
  [API_REQUEST_TYPE.CREATE_POST]: "Post",
  [API_REQUEST_TYPE.RE_POST]: "Post",
  [API_REQUEST_TYPE.INVITATION_NOTE]: "Invitation",
  [API_REQUEST_TYPE.PROFILE_HEADLINE]: "Profile",
  [API_REQUEST_TYPE.PROFILE_ABOUT]: "Profile",
  [API_REQUEST_TYPE.ARTICLE_COMMENT]: "Comment",
  [API_REQUEST_TYPE.ARTICLE_COMMENT_REPLY]: "Reply",
  [API_REQUEST_TYPE.RECOMMENDATION_TEXT]: "Recommendation",
  [API_REQUEST_TYPE.PROFILE_SUMMARY]: "Profile Summary",
  [API_REQUEST_TYPE.PERSPECTIVE_COMMENT]: "Perspective",
};

export interface Message {
  action: MESSAGE_ACTION;
  data: any;
  skipReAuth?:boolean
}

export interface ProfileExperience {
  position: string;
  company: string;
  timeline: string;
  location: string;
  description?: string;
  skills?: string;
}

export interface ProfileEducation {
  institution: string;
  degreeAndDiscipline: string;
  timeline: string;
}

export interface ProfileLicensesAndCertificatioins {
  title: string;
  organization: string;
  issuedOn: string;
  expiredOn?: string;
  credentialID: string;
}

export interface InvitationNoteRequestParams {
  userEnteredInvitationNote: string;
  name: string;
  tagline: string;
  experiences: ProfileExperience[];
}
export interface Profile {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  headline?: string;
  currentPosition?: string;
  experiences?: ProfileExperience[];
  educations?: ProfileEducation[];
  licensesAndCertifications?: ProfileLicensesAndCertificatioins[];
}

export interface ArticleInfo {
  title: string;
  author: string;
  postDate: string;
  contentHTML: string;
  rawText: string;
}

export interface RecommendationInfo {
  relationship: string;
  positionAtTheTime: string;
  profile?: Profile;
}

export const removeEmojis = (str: any) =>
  str.replace(
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{200D}]/gu,
    ""
  );

export const isLinkedInFeedPage = (url: string) => {
  // EvyAILogger.log("url::", url);
  if (!url) return false;
  const urlObj = new URL(url);
  if (urlObj.protocol === "https:" && urlObj.origin.includes(".linkedin.com/feed")) {
    return true;
  }
  return false;
};

export const isLinkedInMessagingPage = (url: string) => {
  if (url.includes("linkedin.com/messaging/thread/")) {
    return true;
  }
  return false;
};

export const isLinkedInArticlePage = (url: string) => {
  if (url.toLowerCase().includes("linkedin.com/pulse/")) {
    return true;
  }
  return false;
};

export const isLinkedInNewsletterPage = (url: string) => {
  if (url.toLowerCase().includes("linkedin.com/newsletters/")) {
    return true;
  }
  return false;
};

export const isFeedPage = (url: string) => {
  if (url.toLowerCase() === "https://www.linkedin.com/feed/") {
    return true;
  }
  return false;
};

export const isLinkedInProfilePage = (url: string) => {
  const lowerCaseUrl = url.toLowerCase();

  if (!lowerCaseUrl.includes("linkedin.com/in/") || lowerCaseUrl.includes(PAGE_PATH.RECENT_ACTIVITY)) {
    return false;
  }

  // const profilePart = lowerCaseUrl.split("linkedin.com/in/")[1];

  // return profilePart && !profilePart.includes("/") || profilePart.endsWith("/");
  const profilePart = lowerCaseUrl.split("linkedin.com/in/")[1];
  const profileWithoutQuery = profilePart.split("?")[0];
  return profileWithoutQuery && (!profileWithoutQuery.includes("/") || profileWithoutQuery.endsWith("/"));
};

export const isLinkedInProfilePageContect = (url: string) => {
  if (url.toLowerCase().includes("linkedin.com/in/") && url.toLowerCase().includes("overlay/contact-info/")) {
    return true;
  }
  return false;
};

export const isLinkedInSNProfilePage = (url: string) => {
  if (
    url.toLowerCase().includes("linkedin.com/sales/lead/") ||
    url.toLowerCase().includes("linkedin.com/sales/search/people") ||
    url.toLowerCase().includes("linkedin.com/sales/lists/people") ||
    url.toLowerCase().includes("linkedin.com/sales/company/")
  ) {
    return true;
  }
  return false;
};

export const isLinkedInSNProfilePageCheck = (url: string) => {
  if (url.toLowerCase().includes("linkedin.com/sales/lead/")) {
    return true;
  }
  return false;
};

export const RECAPTCHA_CONTAINER_ID = "recaptcha-container";

export const API_URL = {
  GET_COMMENTS: "https://getairesponseonrequest-ivkhmniq2a-uc.a.run.app",
  GET_CUSTOM_TOKEN: "https://getfirebasecustomtokenonrequest-ivkhmniq2a-uc.a.run.app",
};

export const PAGE_TO_OPEN_IN_TAB = "https://www.linkedin.com/";

export const GLOBAL_STYLES = {
  SIZE: "sm",
  BORDER_RADIUS: 10,
  PRIMARY_COLOR_CODE: "#9778D2",
  HEADER_BG: "#6E40C5",
  BUTTON_BACKGROUND_COLOR: "#715A9D",
  PRIMARY_COLOR: "brand",
  BORDER_WIDTH: "1.3px",
  POP_UP_WIDTH: 428,
  INPUT_HEIGHT: "29px",
  PADDING: 16,
  BUTTON_BORDER_RADIUS: 8,
  PRIMARY_TEXT_COLOR: "#444553",
  BUTTON_BLUE_BACKGROUND: "#34317D",
  SEE_ALL_TEXT_COLOR: "#6E40C5",
  ACTIVITY_TYPE_ICON_CONTAINER_BACKGROUND: "#F5F1FB",
  QUOTA_USED_BACKGROUND_COLOR: "#FFD572",
  QUOTA_UNUSED_BACKGROUND_COLOR: "#0D0D0D",
  PRIMARY_BACKGROUND_COLOR: "#6E40C5",
};

export const SHARE_EVY_AI_URL = "https://evyai.com/";
export const BANNER_ID = "home_feed_banner";

export const NUMBER_OF_RECORDS_TO_SHOW_PER_PAGE = 3;

export const GOALS = [
  "Encourage Engagement",
  "Highlight Author",
  "Provide Value",
  "Encourage Debate",
  "Share Stories",
  "Offer Support",
  "Provide Resources",
  "Ask Questions",
  "Showcase Values",
  "Respond to Criticism",
  "Show Empathy",
  "Share Opinion",
  "Encourage Action",
  "Share Anecdotes",
  "Use Inclusive Language",
  "Build Relationships",
  "Reinforce Branding",
  "Provide Feedback",
  "Promote Product",
  "Establish Expertise",
  "Share News",
  "Build Rapport",
  "Offer Tips",
  "Showcase Voice",
  "Address Misconceptions",
  "Encourage Sharing",
  "Address Concerns",
  "Highlight Partnerships",
  "Spark Curiosity",
];

export const TONES = [
  "Analytical",
  "Assertive",
  "Authoritative",
  "Challenging",
  "Conversational",
  "Curious",
  "Educational",
  "Empathetic",
  "Friendly",
  "Funny",
  "Happy",
  "Informative",
  "Inspirational",
  "Metaphorical",
  "Motivational",
  "Narrative",
  "Normal",
  "Persuasive",
  "Philosophical",
  "Professional",
  "Reflective",
  "Sarcastic",
  "Sincere",
  "Visionary",
  "Whimsical",
];

export const RECOMMENDATION_GOALS = [
  "Professional Expertise ",
  "Leadership Qualities",
  "Team Collaboration",
  "Problem-Solving Skills",
  "Work Ethic",
  "Adaptability and Learning",
  "Client Relations and Customer Service",
  "Communication Skills",
  "Project Management",
  "Positive Impact on Company Culture",
];
export const INVITATION_CONNECTION_REQUEST_GOALS = [
  "Offering Services",
  "Building Professional Relationships",
  "Learning About Services",
  "Expanding Network",
  "Seeking Mentorship or Advice",
  "Collaboration Opportunities",
  "Job Inquiry or Career Advancement",
];
export const DIRECT_MESSAGE_GOALS = [
  "Building a Relationship",
  "Learning About Their Services",
  "Gratitude for Connecting",
  "Birthday Wishes",
  "Thank You for Engagement",
  "Mentorship Request",
  "Clarifying Their Role",
  "Profile Review Thanks",
  "Holiday Greetings",
  "Service Offer",
  "Network Expansion",
];

export const CONTRIBUTED_ARTICLE_GOALS = [
  "Career Advice",
  "Challenges and Solutions",
  "Cross-Disciplinary Insights",
  "Educational",
  "Industry Commentary",
  "Informational",
  "Innovative Techniques or Tools",
  "Personal Story",
  "Provide Value",
  "Thought Leadership",
];

export const COMMENT_GOALS = [
  "Address Concerns",
  "Address Misconceptions",
  "Ask Questions",
  "Build Rapport",
  "Build Relationships",
  "Encourage Action",
  "Encourage Debate",
  "Encourage Engagement",
  "Encourage Sharing",
  "Establish Expertise",
  "Highlight Author",
  "Highlight Partnerships",
  "Offer Support",
  "Offer Tips",
  "Promote Product",
  "Provide Feedback",
  "Provide Resources",
];
export const POSTING_GOALS = [
  "Ask a Question",
  "Celebrating Others",
  "Challenges and Solutions",
  "Common Myths",
  "Company Updates",
  "Educational",
  "Encourage Engagement",
  "Informational",
  "Introduction Post",
  "Networking",
  "Personal Story",
  "Poll",
  "Promotional",
  "Provide Value",
  "Seeking Advice",
  "Success Stories",
  "Thought Leadership",
];

export const PROFILE_EDITING_HEADLINE_GOALS = [
  "Thought Leadership",
  "Lead Generation",
  "Brand Building",
  "Networking Engagement",
  "Marketing Services",
];

export interface TextGenerationInfo {
  // command: string;
  generatedText: string;
  activityData: any;
  activityType: API_REQUEST_TYPE;
  activity_id: string;
  // selectedGoal: string;
  // selectedTone: string;
}

export interface LinkedInMessage {
  messageSpeaker: string;
  messageText: string;
}

export const SECONDS_TO_KEEP_THE_CONTENT_COPIED_MESSAGE = 10;

export const STORAGE_KEYS = {
  LAST_GOAL_USED: "last_goal_used",
  LAST_TONE_USED: "last_tone_used",
  LAST_PERSONA_USED: "last_persona_used",
  LAST_POSTING_USED: "last_posting_used",
  LAST_LANGUAGE_USED: "last_language_used",
  WILL_SHOW_REGISTER_SCREEN: "will_show_register_screen",
  REGISTER_DATA: "register_data",
  BANNER_ID: "banner_id",
  BANNER_VISIBILITY: "banner_visibility",
  WILL_SHOW_BANNER: "will_show_banner",
  GPT_TYPE: "gpt_type",
  GPT_3: "gpt_3.5",
};

export type SubscriptionType = {
  status: string;
  items: { price: { nickname: string; unit_amount: Number }; plan: { interval: string } }[];
  created: {
    seconds: number;
  };
  current_period_end: {
    seconds: number;
  };
};

export type SubScriptionStaus_Type = {
  error: any;
  status: SubscriptionStatus;
  usagePercentage: number;
  hasTeamsPlan?: boolean;
  allowedTeamMembers?: number;
  subscription?: "FREE" | "PREMIUM" | "TEAMS_PREMIUM" | "TEAMS_MEMBER" | string;
  userPersonalSubscription?: "FREE" | "PREMIUM" | "TEAMS_PREMIUM" | "TEAMS_MEMBER" | string;
  interval?: "MONTH" | "YEAR" | string;
  isAdmin?: boolean;
  subscriptionData?: SubscriptionType | null;
  statusDB?: "active" | "past_due" | "canceled" | "trialing" | string | null;
  userPersonalStatusDB?: "active" | "past_due" | "canceled" | "trialing" | string | null;
};

export enum SubscriptionStatus {
  FREE,
  PRO,
}

export const SUBSCRIPTIONS_FIELDS = {
  TEAMS_SUBSCRIPTION_PRODUCT_ID: "prod_QDEMhGnqTkwTr0",
  TEAMS_MONTHLY_PRICE_ID: "price_1PMntuKLRkrcwJ5STo8EpaH0",
  TEAMS_ANNUAL_PRICE_ID: "price_1PQpT5KLRkrcwJ5SIVkFtfTQ",
  TEAMS_ANNUAL_PRICE_ID_2: "price_1PMntuKLRkrcwJ5SSWXxSbNp",
  OLD_PREMIUM_SUBSCRIPTION_PRODUCT_ID: "prod_NogKER9puwkEqH",
  NEW_PREMIUM_SUBSCRIPTION_PRODUCT_ID: "prod_QDE5S8v39sUWcA",
};

export const SUBSCRIPTIONS_NAMES = {
  FREE: "FREE",
  PREMIUM: "PREMIUM",
  TEAMS: "TEAMS_PREMIUM",
  TEAMS_MEMBER: "TEAMS_MEMBER",
};

export const SUBSCRIPTIONS_INTERVALS = {
  MONTH: "MONTH",
  YEAR: "YEAR",
};

export const SubscriptionStatusDB = {
  ACTIVE: "active",
  PAST_DUE: "past_due",
  CANCELLED: "canceled",
  TRIALING: "trialing",
};

export const UsageDescriptionText = {
  [SubscriptionStatus.FREE]:
    "Your monthly usage plan is about to finish. Upgrade your plan to get access to our Premium Features",
  [SubscriptionStatus.PRO]: "You are a premium user, manage your subscription below.",
};

export const UsageButtonTitle = {
  [SubscriptionStatus.FREE]: "Upgrade to Premium",
  [SubscriptionStatus.PRO]: "Manage Subscriptions",
};

export const FREE_USER_MAXIMUM_TOKENS = 20000;
export const PRO_USER_MAXIMUM_MONTHLY_USAGE = 1000000;
export const TERMS_AND_CONDITIONS_URL = "https://evyai.com/terms-of-use/";

export interface IUser {
  creationTime: string;
  displayName?: string | null;
  currentSessionId: string;
  is_trial_availed_in_the_past?: boolean | null;
  show_trial_warning?: boolean;
  phone_number?: string;
  profile_picture_url: string;
  current_day_stats: {
    total_tokens_count: number;
    current_day: number;
    generated_words_count: number;
    generated_characters_count: number;
    messages_count: number;
    completion_tokens_count: number;
    prompt_tokens_count: number;
  };
  linkedin_url?: string;
  twitter_url?: string;
  userId: string;
  uid: string;
  last_name?: string;
  first_name: string;
  photoURL?: string | null;
  current_month_stats?: {
    generated_characters_count: number;
    completion_tokens_count: number;
    total_tokens_count: number;
    current_month: number;
    messages_count: number;
    generated_words_count: number;
    prompt_tokens_count: number;
  };
  stripeLink: string;
  email: string;
  phoneNumber: string | null;
  total_usage?: {
    messages_count: number;
    generated_words_count: number;
    generated_characters_count: number;
    completion_tokens_count: number;
    prompt_tokens_count: number;
    total_tokens_count: number;
  };
  current_hour_stats?: {
    completion_tokens_count: number;
    generated_words_count: number;
    total_tokens_count: number;
    current_hour: number;
    messages_count: number;
    prompt_tokens_count: number;
    generated_characters_count: number;
  };
  stripeId: string;
  new_user?: boolean;
  welcome_tour?: boolean;
  memberInTeams?: string[];
}
