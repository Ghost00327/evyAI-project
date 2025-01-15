import React from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider, createEmotionCache, MantineThemeOverride } from "@mantine/core";
import browser, { Runtime } from "webextension-polyfill";
import Layout from "./Layout";
import { GLOBAL_STYLES, Message, MESSAGE_ACTION } from "../Config";
import { phoneInputStyles } from "./phoneInput";
import { CustomFonts } from "./customFonts";
import { listenWebAppMessages } from "../Utils/listenWebApp";
import ErrorBoundary from "./Components/ErrorBoundary";
import { EvyAILogger } from "../Utils/EvyAILogger";
import NotificationWrapper from "./Components/Notification/NotificationWrapper";

EvyAILogger.log("🦄", "helloworld from content script and hot reloading");

window.addEventListener("message", (event) => {
  if (event.source !== window) return;
  listenWebAppMessages(event.data);
});

const extensionContainer = document.createElement("div");
extensionContainer.id = "linkedin-assistance-extension";
extensionContainer.setAttribute("style", "z-index:2147483646; position:relative");

extensionContainer.addEventListener("click", (evt) => {
  evt.stopPropagation();
});

extensionContainer.addEventListener("keypress", (evt) => {
  evt.stopPropagation();
});

extensionContainer.addEventListener("keyup", (evt) => {
  evt.stopPropagation();
});

extensionContainer.addEventListener("keydown", (evt) => {
  evt.stopPropagation();
});

const shadowRoot = extensionContainer.attachShadow({ mode: "open" });
const phoneInputStyleElement = document.createElement("style");
phoneInputStyleElement.textContent = phoneInputStyles;
const mountPoint = document.createElement("div");
const emotionRoot = document.createElement("div");
shadowRoot.appendChild(mountPoint);
shadowRoot.appendChild(emotionRoot);
shadowRoot.appendChild(phoneInputStyleElement);
// extensionContainer.setAttribute('style', phoneInputStyles);

document.documentElement.appendChild(extensionContainer);

const emotionCache = createEmotionCache({
  key: "mantine",
  container: emotionRoot,
});
const extensionTheme: MantineThemeOverride = {
  globalStyles: (theme) => ({
    // '*,div, *::before, *::after': {
    //   boxSizing: 'border-box',
    // },
  }),
  colors: {
    brand: [
      "#EAE4F6",
      "#EAE4F6",
      "#D5C9ED",
      "#D5C9ED",
      "#C0AEE4",
      "#715A9D",
      "#34317D",
      "#9778D2",
      "#9778D2",
      "#715A9D",
    ],
  },
  fontFamily: "Poppins, sans-serif",
  defaultRadius: GLOBAL_STYLES.BUTTON_BORDER_RADIUS,
  primaryColor: GLOBAL_STYLES.PRIMARY_COLOR,
  components: {
    Text: {
      styles: {
        root: { color: GLOBAL_STYLES.PRIMARY_TEXT_COLOR },
      },
    },
    Button: {
      defaultProps: {
        size: GLOBAL_STYLES.SIZE,
      },
    },
    TextInput: {
      // defaultProps: {
      //   size: GLOBAL_STYLES.SIZE,
      // },
      styles: {
        input: {
          height: GLOBAL_STYLES.INPUT_HEIGHT,
        },
        label: {
          color: GLOBAL_STYLES.PRIMARY_TEXT_COLOR,
          fontWeight: 600,
          fontSize: 12,
        },
      },
    },
    PasswordInput: {
      // defaultProps: {
      //   size: GLOBAL_STYLES.SIZE,
      // },
      styles: {
        input: {
          height: GLOBAL_STYLES.INPUT_HEIGHT,
        },
        label: {
          color: GLOBAL_STYLES.PRIMARY_TEXT_COLOR,
          fontWeight: 600,
          fontSize: 12,
        },
      },
    },
    Select: {
      defaultProps: {
        size: GLOBAL_STYLES.SIZE,
      },
    },
    SegmentedControl: {
      defaultProps: {
        size: GLOBAL_STYLES.SIZE,
        color: GLOBAL_STYLES.PRIMARY_COLOR,
      },
    },
  },
  // components: {Portal: {target: emotionRoot}},
};

const root = createRoot(mountPoint);

root.render(
  <ErrorBoundary>
    <MantineProvider
      theme={extensionTheme}
      // withGlobalStyles
      withNormalizeCSS
      emotionCache={emotionCache}
    >
      <CustomFonts />
      <Layout />
      <NotificationWrapper />
    </MantineProvider>
  </ErrorBoundary>
);

const onMessageListener = async (msg: Message) => {
  EvyAILogger.log("############  it's running here or not");

  if (msg.action === MESSAGE_ACTION.GET_CURRENT_URL) {
    const currentUrl = window.location.href;
    return currentUrl;
  }

  if (msg.action === MESSAGE_ACTION.IS_SCRIPT_INJECTED) {
    return Promise.resolve(true);
  }
};

browser.runtime.onMessage.addListener(onMessageListener);
// browser.runtime.sendMessage({ action: MESSAGE_ACTION.GET_CURRENT_URL, data: window.location.href });
