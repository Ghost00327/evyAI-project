import { User } from "firebase/auth";
import browser, { Tabs } from "webextension-polyfill";
import { API_URL, MESSAGE_ACTION, PAGE_TO_OPEN_IN_TAB, STORAGE_KEYS } from "../Config";

import { sentMessageToContentScript, sendMessageToAllTab } from "../Utils/extensionUtils";
import * as BrowserStorage from "../Utils/storage";
import { BG_STATE } from "./BG_STATE";
import { sentryClient } from "../Sentry/sentryClient";
import { EvyAILogger } from "../Utils/EvyAILogger";
import { FirebaseUtils } from "../firebase2/firebaseUtils";
import { firebaseAuth } from "../firebase2/firebaseClient";

export const openPageInNewTabToOpenPopup = () => {
  browser.tabs
    .create({ url: PAGE_TO_OPEN_IN_TAB })
    .then((tab) => {
      BG_STATE.tabIdInWhichPopupShouldOpen = tab.id!;
      BG_STATE.willOpenPopupAfterCompletingPageLoading = true;
    })
    .catch((error) => {
      EvyAILogger.log("### Couldn't create a new tab");
      EvyAILogger.log({ error });
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "openPageInNewTabToOpenPopup",
          },
        },
      });
    });
};

export const toolbarIconClick = async (tab: Tabs.Tab) => {
  let url: string | null = null;
  let isTabStatusCompleted = false;

  try {
    if (tab && tab.id) {
      if (tab.status === "complete") {
        isTabStatusCompleted = true;
        url = await sentMessageToContentScript(tab.id, MESSAGE_ACTION.GET_CURRENT_URL);
      } else {
        isTabStatusCompleted = false;
        url = null;
      }
    }
  } catch (error) {
    url = null;
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "toolBarIconClick-catch1",
        },
      },
    });
  }

  if (isTabStatusCompleted) {
    try {
      if (tab?.id && url?.includes(".linkedin.com")) {
        if (isTabStatusCompleted) {
          await sentMessageToContentScript(tab.id, MESSAGE_ACTION.TOGGLE_POPUP);
        } else {
          BG_STATE.tabIdInWhichPopupShouldOpen = tab.id!;
          BG_STATE.willOpenPopupAfterCompletingPageLoading = true;
        }
      } else {
        openPageInNewTabToOpenPopup();
      }
    } catch (error) {
      openPageInNewTabToOpenPopup();
      EvyAILogger.error(error);
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "toolbarIconClick-catch2",
          },
        },
      });
    }
  }
};

export const handleWebSignout = async (webSignOut?: boolean) => {
  EvyAILogger.log("$$$$$$$$$$$$$$$$ handleWebSignout");
  if (webSignOut === undefined || webSignOut === true) {
    browser.tabs
      .create({ url: "http://app.evyai.com/logout" })
      .then((tab) => {
        EvyAILogger.log("New tab opened:", tab);
        sendMessageToAllTab(MESSAGE_ACTION.IS_LOGGED_OUT, { loggedOut: true });
      })
      .catch((error) => {
        EvyAILogger.error("Error opening new tab:", error);
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "handleWebSignout",
            },
          },
        });
      });
    // let queryOptions = { active: true, currentWindow: true };
    // let [tab] = await chrome.tabs.query(queryOptions);
    // EvyAILogger.log("##################### queryOptions ", tab)
    // if (tab && tab.id !== undefined) {
    //     chrome.tabs.update(tab.id, { url:  });
    // }
  } else if (webSignOut !== undefined || webSignOut === false) {
    sendMessageToAllTab(MESSAGE_ACTION.IS_LOGGED_OUT, { loggedOut: true });
  }
};

export const fetchFirebaseBE = async (
  type: keyof typeof API_URL,
  data: any = {},
  auth: "firebase" | "storage" = "storage"
) => {
  let uid;
  const url = API_URL[type];
  delete data.uid;
  try {
    let firebaseIdToken = "";
    if (auth == "firebase") {
      const currentUser = firebaseAuth.currentUser;
      if (!currentUser) {
        throw new Error("current user error, user is not authenticated, please re-login to proceed");
      }
      uid = currentUser.uid;
      firebaseIdToken = await currentUser.getIdToken();
      if (!firebaseIdToken) {
        throw new Error("Failed to generate auth token, please re-login any try again");
      }
    } else {
      const { accessToken, user_id } = await FirebaseUtils.getRefreshedAuthData();
      firebaseIdToken = accessToken;
      uid = user_id;
    }

    EvyAILogger.log(data,"Sending to BE")

    const response = await fetch(url, {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8",
        pragma: "no-cache",
        "cache-control": "no-cache",
        authorization: `Bearer ${firebaseIdToken?.trim()}`,
      },
      cache: "no-cache",
      redirect: "follow",
      body: JSON.stringify({ data, userId: uid, extension_version: chrome.runtime.getManifest().version }),
    });
    EvyAILogger.log(response.status, "RESPONSE_STATUS");
    if (response.status >= 200 && response.status <= 204) {
      const jsonResponse = await response.json();
      // EvyAILogger.log({ jsonResponse });
      return jsonResponse;
    } else {
      // EvyAILogger.log(`something wrong, the server code: ${response.status}`);
      return {
        success: false,
        message: (await response.text()) || "Unexpected server response. Please try again later.",
      };
    }
  } catch (error: any) {
    EvyAILogger.log({ error }, "Fetch Suggested Comments");
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "fetchSuggestedComments",
        },
      },
    });
    return {
      success: false,
      error,
      message: error.message || "Server communication error. Please try again later.",
    };
  }
};

export const onFirebaseAuthStateChanged = async (user: User | null) => {
  // EvyAILogger.log("user changes ", user);

  // EvyAILogger.log({ user });
  if (!user) {
    await BrowserStorage.removeItem(STORAGE_KEYS.LAST_LANGUAGE_USED);
  }
  sendMessageToAllTab(MESSAGE_ACTION.USER_AUTH_STATE_CHANGED, { user });
};
