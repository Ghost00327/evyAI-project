import browser from "webextension-polyfill";
import { EvyAILogger } from "./EvyAILogger";
import { sentryClient } from "../Sentry/sentryClient";
export const storage = browser.storage["local"];
export const syncStorage = browser.storage.sync;

export const getItem = async (key: string) => {
  const item = await storage.get({ [key]: "" });
  return item[key];
};

export const setItem = async (key: string, value: any) => {
  await storage.set({ [key]: value });
  return true;
};

export const removeItem = async (key: string) => {
  try {
    await storage.remove(key);
    return true;
  } catch (error) {
    EvyAILogger.error(`Failed to remove ${key}: ${error}`);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "removeItem",
        },
      },
    });
    return false;
  }
};

export const clearStorage = async () => {
  if (syncStorage) {
    await syncStorage.clear();
  } else {
    await storage.clear();
  }
  return true;
};

export const asyncSetItem = async (key: string, value: any) => {
  if (syncStorage) {
    syncStorage.set({ [key]: value });
  } else {
    await storage.set({ [key]: value });
  }
  return true;
};

export const asyncGetItem = async (key: string) => {
  let item: any = {};

  if (syncStorage) {
    item = await syncStorage.get({ [key]: "" });
  } else {
    item = await storage.get({ [key]: "" });
  }

  return item[key];
};
