import browser from "webextension-polyfill";
import { MESSAGE_ACTION } from "../../Config";
import { sentMessageToContentScript } from "../../Utils/extensionUtils";
import { BG_STATE } from "../BG_STATE";
import { sentryClient } from "../../Sentry/sentryClient";

export const tabUpdateHandler = async (
  tabId: number,
  changeInfo: browser.Tabs.OnUpdatedChangeInfoType,
  tabInfo: browser.Tabs.Tab
) => {
  if (changeInfo.status === "complete" && tabInfo.url) {
    if (BG_STATE.willOpenPopupAfterCompletingPageLoading && tabId === BG_STATE.tabIdInWhichPopupShouldOpen) {
      BG_STATE.willOpenPopupAfterCompletingPageLoading = false;
      BG_STATE.tabIdInWhichPopupShouldOpen = 0;
      try {
        sentMessageToContentScript(tabId, MESSAGE_ACTION.SHOW_POPUP);
      } catch (error) {
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "tabUpdateHandler",
            },
          },
        });
      }
    }
  }
};
