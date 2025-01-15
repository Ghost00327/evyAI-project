import { fetchFirebaseBE } from "../Background/BG_UTILS";
import { signInUserWithCustomToken } from "../firebase/firebase";
import { CHROME_STORAGE_KEYS } from "../LinkedInParser/constants";
import { sentryClient } from "../Sentry/sentryClient";
import { EvyAILogger } from "../Utils/EvyAILogger";
import { storage } from "../Utils/storage";
import { firebaseAuth, firebaseConfig } from "./firebaseClient";

class _FirebaseUtils {
  async getRefreshedAuthData(retry = false) {
    const refreshToken = (await storage.get())[CHROME_STORAGE_KEYS.refreshToken];

    if (!refreshToken) {
      throw new Error("Missing token, please re-login and try again");
    }

    const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=${firebaseConfig.apiKey}`, {
      method: "POST",
      body: JSON.stringify({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    if (response.status !== 200) {
      await this.signOut();
      throw new Error("Invalid token, please re-login and try again");
    }
    const { expires_in, token_type, refresh_token, id_token: accessToken, user_id } = await response.json();

    await storage.set({
      [CHROME_STORAGE_KEYS.accessToken]: accessToken,
      [CHROME_STORAGE_KEYS.refreshToken]: refresh_token,
      [CHROME_STORAGE_KEYS.uid]: user_id,
    });

    return {
      expires_in,
      token_type,
      refresh_token,
      accessToken,
      user_id,
      error: null,
    };
  }

  async reAuthIfNeeded() {
    try {
      const hasStorageToken = (await storage.get())[CHROME_STORAGE_KEYS.refreshToken];
      if (!firebaseAuth.currentUser && hasStorageToken) {
        await this.getRefreshedAuthData();
        const { customToken } = await fetchFirebaseBE("GET_CUSTOM_TOKEN");
        await signInUserWithCustomToken(customToken);
      }
    } catch (e) {
      EvyAILogger.error(e);
      sentryClient.captureException(e, {
        captureContext: {
          extra: {
            functionName: "reAuthIfNeeded",
          },
        },
      });
    }
  }

  async signOut(){
    await storage.clear();
    await firebaseAuth.signOut();
  }
}
export const FirebaseUtils = new _FirebaseUtils();
