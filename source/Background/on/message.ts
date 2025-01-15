import { Runtime } from "webextension-polyfill";
import { Message, MESSAGE_ACTION, NUMBER_OF_RECORDS_TO_SHOW_PER_PAGE } from "../../Config";
import {
  addCommandData,
  addLinkedInProfile,
  addQuestionOrIssues,
  addUserReview,
  checkIfProfileExists,
  deleteCommandData,
  fetchSingleData,
  getCurrentUser,
  getCustomerSubscriptionPortalLink,
  getPersonas,
  getRecentActivities,
  getSavedCommands,
  getSubscriptionPlanPaymentURL,
  getSubscriptionPlans,
  getSubscriptionStatus,
  getUserSubscriptionData,
  reloadCurrentUser,
  sendEmailToResetPassword,
  sendVerificationCodeToPhone,
  sendVerificationEmail,
  signInWithEmail,
  signInWithGoogle,
  signOut,
  checkExtVersion,
  signUpWithEmail,
  updateProfileSummaryId,
  getExistingProfileSummary,
  isCommandDataSaved,
  getBannerDetails,
  userProfileUpdate,
  signInUserWithCustomToken,
  handleGetUserLists,
  deleteLinkedinProfile,
  getProfileListsByUrl,
  updateProfileToLists,
  getProfileSummary,
  getTemplates,
  handleButtonInsertionException,
  searchTemplates,
  getSinglePersona,
  searchPersonas,
} from "../../firebase/firebase";
import { sentMessageToContentScript, sendMessageToAllTab } from "../../Utils/extensionUtils";
import { EvyAILogger } from "../../Utils/EvyAILogger";
import { fetchFirebaseBE, handleWebSignout } from "../BG_UTILS";
import { sentryClient } from "../../Sentry/sentryClient";
import { FirebaseUtils } from "../../firebase2/firebaseUtils";
import { LOCAL_STORAGE_KEYS } from "../../LinkedInParser/constants";

export const onMessageListener = async (msg: Message, sender: Runtime.MessageSender) => {
  if(!msg.skipReAuth){
    await FirebaseUtils.reAuthIfNeeded();
  }
  try {
    switch (msg.action) {
      case MESSAGE_ACTION.BUBBLE_ERROR_TO_BACKGROUND_SENTRY:
        {
          EvyAILogger.log(msg.data);
          sentryClient.captureEvent(msg.data, {
            captureContext: {
              extra: {
                functionName: "MESSAGE_ACTION.BUBBLE_ERROR_TO_BACKGROUND_SENTRY",
              },
            },
          });
        }
        break;
      case MESSAGE_ACTION.HIDE_POPUP: {
        if (sender.tab?.id) {
          sentMessageToContentScript(sender.tab.id, MESSAGE_ACTION.HIDE_POPUP);
        }
        break;
      }
      case MESSAGE_ACTION.SHOW_POPUP: {
        // console.log("hit MESSAGE_ACTION.SHOW_POPUP", sender.tab?.id);
        if (sender.tab?.id) {
          sentMessageToContentScript(sender.tab.id, MESSAGE_ACTION.SHOW_POPUP);
        }
        break;
      }
      case MESSAGE_ACTION.EMAIL_SIGN_UP: {
        const { data } = msg;
        return signUpWithEmail(
          data.email,
          data.password,
          data.firstName ?? "",
          data.lastName ?? "",
          data.phoneNumber ?? "",
          data.linkedInAccount ?? ""
        );
      }
      case MESSAGE_ACTION.GET_USER_SUBSCRIPTION_DATA: {
        return getUserSubscriptionData();
      }
      case MESSAGE_ACTION.UPDATE_USER_DETAILS: {
        const { data } = msg;

        // console.log({ datadatadatadatadata: data });

        return userProfileUpdate(
          data.userId ?? "",
          data.firstName ?? "",
          data.lastName ?? "",
          data.phoneNumber ?? "",
          data.linkedInAccount ?? ""
        );
      }
      case MESSAGE_ACTION.GET_SINGLE_COLLECTION_DATA: {
        const { data } = msg;

        // console.log({
        //   GET_SINGLE_COLLECTION_DATA: data,
        // });

        return fetchSingleData(data.id, data.collection);
      }
      case MESSAGE_ACTION.SIGN_IN_WITH_GOOGLE: {
        return signInWithGoogle();
      }
      case MESSAGE_ACTION.EMAIL_LOGIN: {
        const { data } = msg;
        return signInWithEmail(data.email, data.password);
      }
      case MESSAGE_ACTION.SIGN_OUT: {
        const { data } = msg;
        console.log("@@@@@@@@@@@@@@@@ sign out request_recieves ");
        const signout = await signOut();
        if (data.webSignOut !== undefined || data.webSignOut === false) {
          handleWebSignout(false);
        } else if (data.webSignOut === undefined || data.webSignOut === true) {
          handleWebSignout(true);
        }
        return signout;
      }
      case MESSAGE_ACTION.GET_USER_AUTH_STATE: {
        return await getCurrentUser();
      }
      case MESSAGE_ACTION.RELOAD_CURRENT_USER_AUTH_STATE: {
        return reloadCurrentUser();
      }
      case MESSAGE_ACTION.SEND_VERIFICATION_EMAIL: {
        sendVerificationEmail((await getCurrentUser())!);
        break;
      }
      case MESSAGE_ACTION.SEND_PASSWORD_RESET_EMAIL: {
        const {
          data: { email },
        } = msg;
        return sendEmailToResetPassword(email);
      }
      case MESSAGE_ACTION.SEND_VERIFICATION_CODE_TO_PHONE: {
        const {
          data: { phoneNumber },
        } = msg;
        return sendVerificationCodeToPhone(phoneNumber);
      }
      case MESSAGE_ACTION.GET_SUGGESTED_COMMENTS: {
        const { data } = msg;
        return fetchFirebaseBE("GET_COMMENTS", data);
      }
      case MESSAGE_ACTION.GET_RECENT_ACTIVITIES: {
        const {
          data: { willStartAgain },
        } = msg;
        const numberOfItemsToFetch = msg.data.numberOfItemsToFetch
          ? msg.data.numberOfItemsToFetch
          : NUMBER_OF_RECORDS_TO_SHOW_PER_PAGE;
        return getRecentActivities(numberOfItemsToFetch, willStartAgain);
      }
      case MESSAGE_ACTION.GET_SAVED_COMMANDS: {
        const {
          data: { willStartAgain, numberOfItemsToFetch },
        } = msg;
        return getSavedCommands(numberOfItemsToFetch, willStartAgain);
      }
      case MESSAGE_ACTION.SAVE_COMMAND: {
        const {
          data: { activityData, activityType, generatedText, id },
        } = msg;
        return addCommandData(activityData, activityType, generatedText, id);
      }
      case MESSAGE_ACTION.IS_COMMAND_SAVED: {
        const {
          data: { summaryId },
        } = msg;
        return isCommandDataSaved(summaryId);
      }
      case MESSAGE_ACTION.REMOVE_SAVED_COMMAND: {
        const {
          data: { documentId },
        } = msg;
        return deleteCommandData(documentId);
      }
      case MESSAGE_ACTION.GET_SUBSCRIPTION_PLANS: {
        return getSubscriptionPlans();
      }
      case MESSAGE_ACTION.GET_SUBSCRIPTION_PAYMENT_URL: {
        const {
          data: { priceId },
        } = msg;
        return getSubscriptionPlanPaymentURL(priceId);
      }
      case MESSAGE_ACTION.OPEN_NEW_TAB: {
        const {
          data: { url },
        } = msg;
        chrome.tabs.create({ url });
        break;
      }
      case MESSAGE_ACTION.GET_SUBSCRIPTION_STATUS: {
        return getSubscriptionStatus();
      }
      case MESSAGE_ACTION.GET_MANAGE_SUBSCRIPTION_LINK: {
        return getCustomerSubscriptionPortalLink();
      }
      case MESSAGE_ACTION.ADD_REVIEW: {
        const {
          data: { reviewText, rating },
        } = msg;
        return addUserReview(reviewText, rating);
      }
      case MESSAGE_ACTION.ADD_QUESTIONS: {
        const {
          data: { question },
        } = msg;
        return addQuestionOrIssues(question);
      }
      case MESSAGE_ACTION.ADD_LINKEDIN_PROFILE: {
        const { data } = msg;
        return addLinkedInProfile(data);
      }
      case MESSAGE_ACTION.IS_PROFILE_SAVED: {
        const {
          data: { uid, targetProfileUrl },
        } = msg;
        return checkIfProfileExists(uid, targetProfileUrl);
      }
      case MESSAGE_ACTION.GET_PERSPONA: {
        const {
          data: { user, previousLastDoc, page, existingPersonas, isLoading },
        } = msg;
        return getPersonas(user, previousLastDoc, page, existingPersonas, isLoading);
      }
      case MESSAGE_ACTION.GET_SINGLE_PERSONA: {
        const {
          data: { user, personaId },
        } = msg;
        return getSinglePersona(user, personaId);
      }
      case MESSAGE_ACTION.SEARCH_PERSONA: {
        const {
          data: { user, previousLastDoc, page, search, isLoading, existingPersonas },
        } = msg;
        return searchPersonas(user, previousLastDoc, page, search, existingPersonas, isLoading);
      }
      case MESSAGE_ACTION.GET_TEMPLATES: {
        const {
          data: { user, previousLastDoc, page, existingTemplates, isLoading },
        } = msg;
        return getTemplates(user, previousLastDoc, page, existingTemplates, isLoading);
      }
      case MESSAGE_ACTION.SEARCH_TEMPLATES: {
        const {
          data: { user, previousLastDocs, page, search, isLoading, existingTemplates },
        } = msg;
        return searchTemplates(user, previousLastDocs, page, search, existingTemplates, isLoading);
      }
      case MESSAGE_ACTION.GET_BANNER_DETAILS: {
        return getBannerDetails();
      }
      case MESSAGE_ACTION.GET_WEB_APP_AUTH_DETAILS: {
        const {
          data: { customToken },
        } = msg;
        return signInUserWithCustomToken(customToken);
      }
      case MESSAGE_ACTION.GET_WEB_APP_AUTH_SIGN_OUT: {
        sendMessageToAllTab(MESSAGE_ACTION.IS_LOGGED_OUT, { loggedOut: true });
        return signOut();
      }
      case MESSAGE_ACTION.GET_LISTS: {
        return handleGetUserLists();
      }
      case MESSAGE_ACTION.DELETE_LINKDIN_SAVE_PROFILE: {
        const profileUrl: string = msg.data.profileUrl;
        return deleteLinkedinProfile(profileUrl);
      }
      case MESSAGE_ACTION.GET_SAVE_PROFILE_LISTS: {
        const profileUrl: string = msg.data.profileUrl;
        return getProfileListsByUrl(profileUrl);
      }
      case MESSAGE_ACTION.UPDATE_PROFILE_LISTS: {
        const listId: string = msg.data.listId;
        const profileUrl: string = msg.data.profileUrl;
        return updateProfileToLists(listId, profileUrl);
      }
      case MESSAGE_ACTION.PROFILE_SUMMARY: {
        return getProfileSummary(msg.data);
      }
      case MESSAGE_ACTION.EXISTING_PROFILE_SUMMARY: {
        // console.log("background EXISTING_PROFILE_SUMMARY", msg.data)

        return getExistingProfileSummary(msg.data);
      }
      case MESSAGE_ACTION.UPDATE_PROFILE_SUMMARY_ID: {
        return updateProfileSummaryId(msg.data);
      }
      case MESSAGE_ACTION.OLDER_VERSION_CHECK: {
        return checkExtVersion();
      }
      case MESSAGE_ACTION.IS_LOGGED_OUT: {
        const { data } = msg;
        localStorage.setItem(LOCAL_STORAGE_KEYS.LOGGED_IN, String(data.loggedOut));
        return data.loggedOut;
        // sendMessageToAllTab()
      }
      case MESSAGE_ACTION.HANDLE_BUTTON_INSERTION_EXCEPTION: {
        const { data } = msg;
        return handleButtonInsertionException(data);
        // sendMessageToAllTab()
      }
      default:
        break;
    }
  } catch (error) {
    console.error(error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "MESSAGE_ACTION.HANDLE_BUTTON_INSERTION_EXCEPTION",
        },
      },
    });
  }
  return true;
};
