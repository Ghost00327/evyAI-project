import browser from "webextension-polyfill";

import "../Sentry/sentryClient";
import { browserAction } from "../Utils/extensionUtils";
import { onFirebaseAuthStateChanged, toolbarIconClick } from "./BG_UTILS";
import { tabUpdateHandler } from "./on/tabUpdate";
import { onMessageListener } from "./on/message";
import { onInstalled } from "./on/installed";
import { firebaseAuth } from "../firebase2/firebaseClient";

browser[browserAction].onClicked.addListener(toolbarIconClick);
browser.runtime.onMessage.addListener(onMessageListener);
browser.tabs.onUpdated.addListener(tabUpdateHandler);
browser.runtime.onInstalled.addListener(onInstalled);
firebaseAuth.onAuthStateChanged(onFirebaseAuthStateChanged);
