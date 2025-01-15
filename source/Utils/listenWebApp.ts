import { skip } from "node:test";
import { MESSAGE_ACTION } from "../Config";
import { sentryClient } from "../Sentry/sentryClient";
import { EvyAILogger } from "./EvyAILogger";
import { sendMessageToExtensionPages } from "./extensionUtils";

export const listenWebAppMessages = async (msg: any) => {
  EvyAILogger.log(msg, "MESSAGE FROM Window PostMessage");
  try {
    switch (msg.action) {
      case MESSAGE_ACTION.GET_WEB_APP_AUTH_DETAILS: {
        if (msg.data) {
          await sendMessageToExtensionPages(MESSAGE_ACTION.GET_WEB_APP_AUTH_DETAILS, {...msg.data, skipReAuth:true});
        }
        break;
      }
      case MESSAGE_ACTION.GET_WEB_APP_AUTH_SIGN_OUT: {
        await sendMessageToExtensionPages(MESSAGE_ACTION.GET_WEB_APP_AUTH_SIGN_OUT, {...msg.data, skipReAuth:true});
        break;
      }
        default:
        break;
    }
  } catch (error) {
    EvyAILogger.log("############# listening issue of web app on chrome", error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "listenWebAppMessage",
        },
      },
    });
  }
};
