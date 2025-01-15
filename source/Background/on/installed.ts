import browser, { Runtime } from "webextension-polyfill";
import { sentryClient } from "../../Sentry/sentryClient";
import { EvyAILogger } from "../../Utils/EvyAILogger";

export const onInstalled = (details: Runtime.OnInstalledDetailsType) => {
  EvyAILogger.log("installed");

  if (details.reason === "install") {
    const urlToOpen = "http://app.evyai.com/welcome?source=installation";
    browser.tabs
      .create({ url: urlToOpen })
      .then((tab) => {
        EvyAILogger.log("New tab opened:", tab);
      })
      .catch((error) => {
        EvyAILogger.error("Error opening new tab:", error);
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "onInstalled",
            },
          },
        });
      });
    // Query LinkedIn tabs and execute content script
    browser.tabs.query({ url: "https://www.linkedin.com/*" }).then((tabs) => {
      for (let tab of tabs) {
        if (tab.id !== undefined) {
          browser.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["js/contentScript.bundle.js", "js/options.bundle.js", "js/popup.bundle.js"],
          });
        }
      }
    });
  }
};
