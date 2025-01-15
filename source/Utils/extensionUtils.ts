import browser from "webextension-polyfill";

import * as BrowserStorage from "./storage";
import { MESSAGE_ACTION, STORAGE_KEYS } from "../Config";
import _ from "lodash";
import { sentryClient } from "../Sentry/sentryClient";
import { EvyAILogger } from "./EvyAILogger";

export const isFirefox = () => globalThis.navigator?.userAgent.includes("Firefox");

export const browserAction = isFirefox() ? "browserAction" : "action";
export const browserActionContext = isFirefox() ? "browser_action" : "action";

export const getActiveTab = async () => {
  const tabs = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  return (tabs && tabs.length > 0 && tabs[0]) || null;
};

export const handleContentScriptInjection = async (tabId: number, url: string) => {
  try {
    if (!isScriptableUrl(url)) {
      // showNotification('Error', 'Extension is not allowed to access this page');
      return false;
    }
    let isInjected = await isScriptInjected(tabId);
    // EvyAILogger.log("isInjected:::", isInjected);
    return true;
  } catch (e: any) {
    // EvyAILogger.log("handle tab injectContentScript error ::::", e.message);
    await injectContentScript(tabId);
    sentryClient.captureException(e, {
      captureContext: {
        extra: {
          functionName: "handleContentScriptInjection",
        },
      },
    });
    return true;
  }
};

export const injectContentScript = async (tabId: number) => {
  try {
    if (isFirefox()) {
      await browser.tabs.executeScript(tabId, {
        file: "/js/contentScript.bundle.js",
        allFrames: false,
      });
    } else {
      await browser.scripting.executeScript({
        target: { tabId: tabId, allFrames: false },
        files: ["/js/contentScript.bundle.js"],
      });
    }

    return true;
  } catch (e: any) {
    EvyAILogger.warn("contentScript injection error:::", e.message);
    sentryClient.captureException(e, {
      captureContext: {
        extra: {
          functionName: "injectContentScript",
        },
      },
    });
  }
};

export const isScriptInjected = (tabId: number) => {
  try {
    return sentMessageToContentScript(tabId, MESSAGE_ACTION.IS_SCRIPT_INJECTED, {
      action: MESSAGE_ACTION.IS_SCRIPT_INJECTED,
    });
  } catch (e) {
    EvyAILogger.log("Content script sent message error : ", e);
    sentryClient.captureException(e, {
      captureContext: {
        extra: {
          functionName: "isScriptInjected",
        },
      },
    });
    return null;
  }
};

export const sentMessageToContentScript = (tabId: number, action: MESSAGE_ACTION, data = {}) => {
  return browser.tabs.sendMessage(tabId, { action, data });
};

export const sendMessageToAllTab = (action: MESSAGE_ACTION, data = {}) => {
  browser.tabs
    .query({})
    .then(async (tabs: browser.Tabs.Tab[]) => {
      for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        try {
          if (tab.id) {
            await browser.tabs.sendMessage(tab.id, { action, data });
          }
        } catch (error) {}
      }
    })
    .catch((error: any) => {
      EvyAILogger.log({ error });
    });
};

export function randomDelay() {
  const delay = Math.floor(Math.random() * 1000);
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export const sendMessageToExtensionPages = async (action: MESSAGE_ACTION, data = {}) => {
  try {
    return browser.runtime.sendMessage({ action, data });
  } catch (e) {
    EvyAILogger.error("send message to extension pages error : ", e);
    sentryClient.captureException(e, {
      captureContext: {
        extra: {
          functionName: "sendMessageToExtensionPages",
        },
      },
    });
    return null;
  }
};

// Sourced from:
// https://source.chromium.org/chromium/chromium/src/+/main:extensions/common/extension_urls.cc;drc=6b42116fe3b3d93a77750bdcc07948e98a728405;l=29
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts
const blockedPrefixes = [
  "chrome.google.com/webstore", // Host *and* pathname
  "accounts-static.cdn.mozilla.net",
  "accounts.firefox.com",
  "addons.cdn.mozilla.net",
  "addons.mozilla.org",
  "api.accounts.firefox.com",
  "content.cdn.mozilla.net",
  "discovery.addons.mozilla.org",
  "input.mozilla.org",
  "install.mozilla.org",
  "oauth.accounts.firefox.com",
  "profile.accounts.firefox.com",
  "support.mozilla.org",
  "sync.services.mozilla.com",
  "testpilot.firefox.com",
];

export const isScriptableUrl = (url: string) => {
  if (!url || !url.startsWith("http")) return false;
  const cleanUrl = url.replace(/^https?:\/\//, "");
  return blockedPrefixes.every((blocked) => !cleanUrl.startsWith(blocked));
};

export const resetSavedRegisterData = async () => {
  await BrowserStorage.setItem(STORAGE_KEYS.REGISTER_DATA, {});
  await BrowserStorage.setItem(STORAGE_KEYS.WILL_SHOW_REGISTER_SCREEN, false);
};

export const handleUpdateUserInfo = async (action: MESSAGE_ACTION, data = {}) => {
  try {
    // EvyAILogger.log({ action, data });
    // return browser.runtime.sendMessage({ action, data });
  } catch (e) {
    EvyAILogger.error("update user info : ", e);
    sentryClient.captureException(e, {
      captureContext: {
        extra: {
          functionName: "handleUpdateUserInfo",
        },
      },
    });
  }
};

export const checkIsEmpty = (data: string): string => {
  if (!_.isEmpty(data)) {
    return data;
  }
  return "";
};

export const dateFormat = (timestamp: number): string => {
  const date = new Date(timestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};
