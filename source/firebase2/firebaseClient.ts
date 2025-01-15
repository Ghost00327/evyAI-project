// src/firebase/firebaseClient.ts

import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { enableIndexedDbPersistence, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { EvyAILogger } from "../Utils/EvyAILogger";

export const firebaseConfig = {
  apiKey: "AIzaSyC0kOy4juGg4iMqSkDmh4vF9HKRVsPXvOA",
  authDomain: "gptchromeextension.firebaseapp.com",
  projectId: "gptchromeextension",
  storageBucket: "gptchromeextension.appspot.com",
  messagingSenderId: "776551117048",
  appId: "1:776551117048:web:b07c9ec9bf7fe7faa6cb0d",
  measurementId: "G-HPJLZFL679",
};

let firebase_app;

if (!getApps().length) {
  firebase_app = initializeApp(firebaseConfig);
} else {
  firebase_app = getApps()[0];
}

export const firebaseStorage = getStorage(firebase_app);
export const firebaseAuth = getAuth(firebase_app);
export const firebaseDb = getFirestore(firebase_app);

enableIndexedDbPersistence(firebaseDb, {
  forceOwnership: !globalThis.localStorage,
}) // forceOwnership for web worker
  .then(() => EvyAILogger.log("Offline persistence enabled"))
  .catch((error) => {
    switch (error.code) {
      case "failed-precondition":
        EvyAILogger.log("Offline persistence already enabled in another tab");
        break;
      case "unimplemented":
        EvyAILogger.log("Offline persistence not supported by browser");
        break;
      default:
        EvyAILogger.error(error);
    }
  });

export const firebaseAPP = firebase_app;
