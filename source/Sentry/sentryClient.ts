import {
  BrowserClient,
  defaultStackParser,
  getDefaultIntegrations,
  makeFetchTransport,
  replayIntegration,
  Scope,
} from "@sentry/browser";
import { sendMessageToExtensionPages } from "../Utils/extensionUtils";
import { MESSAGE_ACTION } from "../Config";
import { EvyAILogger } from "../Utils/EvyAILogger";
import { firebaseAuth } from "../firebase2/firebaseClient";

export const sendErrorToBG = (error: unknown) => {
  sendMessageToExtensionPages(MESSAGE_ACTION.BUBBLE_ERROR_TO_BACKGROUND_SENTRY, { data: error });
};

// filter integrations that use the global variable
const integrations = getDefaultIntegrations({}).filter((defaultIntegration) => {
  return !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(defaultIntegration.name);
});

const client = new BrowserClient({
  dsn: "https://71b2bbbce7e20708344ffad3414b4e3f@o4507822458339328.ingest.us.sentry.io/4507850001154048",
  transport: makeFetchTransport,
  stackParser: defaultStackParser,
  enabled: true,
  integrations: [
    ...integrations,
    replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  beforeSend(e) {
    try {
      if (typeof window !== "undefined") {
        // called from frontend => forward to BE
        sendMessageToExtensionPages(MESSAGE_ACTION.BUBBLE_ERROR_TO_BACKGROUND_SENTRY, e);
        return null;
      }
    } catch (e) {
      EvyAILogger.error(e);
    }
    EvyAILogger.log(e);
    if (e.exception?.values && e.exception.values[0] && e.extra && "functionName" in e.extra) {
      e.exception.values[0].value = (e.extra["functionName"] as string) + " - " + e.exception.values[0].value;
    }
    e.environment = process.env.MODE || process.env.NODE_ENV;
    // is coming from BE => send to sentry
    e.extra = {
      ...e.extra,
      email: firebaseAuth.currentUser?.email,
      userId: firebaseAuth.currentUser?.uid,
      extensionVersion: chrome.runtime.getManifest().version,
    };
    EvyAILogger.log("Sending to sentry", e);
    return e;
  },
});

const scope = new Scope();
scope.setClient(client);

EvyAILogger.log("Sentry loaded");
client.init(); // initializing has to be done after setting the client on the scope

// You can capture exceptions manually for this client like this:
export const sentryClient = scope;
