import { FirebaseError, initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  User,
  signInWithEmailAndPassword,
  signInWithCredential,
  sendPasswordResetEmail,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signInWithCustomToken,
  updateProfile,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  getDocs,
  enableIndexedDbPersistence,
  query,
  orderBy,
  limit,
  startAfter,
  DocumentSnapshot,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  updateDoc,
  where,
  onSnapshot,
  DocumentData,
  getDoc,
  setDoc,
  DocumentReference,
  QueryDocumentSnapshot,
  startAt,
} from "firebase/firestore";

import { getFunctions, httpsCallable } from "firebase/functions";

import {
  FREE_USER_MAXIMUM_TOKENS,
  PRO_USER_MAXIMUM_MONTHLY_USAGE,
  RECAPTCHA_CONTAINER_ID,
  SHARE_EVY_AI_URL,
  BANNER_ID,
  SubscriptionStatus,
  IUser,
  SUBSCRIPTIONS_NAMES,
  SUBSCRIPTIONS_INTERVALS,
  SubScriptionStaus_Type,
  SubscriptionType,
  SUBSCRIPTIONS_FIELDS,
  SubscriptionStatusDB,
  PAGINATION_LIMITS,
  FIREBASE_ORDER_BY_FIELDS,
  PARAMETER_KEY,
  API_REQUEST_TYPE,
} from "../Config";

import { clearStorage, storage } from "../Utils/storage";
import { IPersona, ITemplate } from "../ContentScript/Pages/InputPopup";
import { sentryClient } from "../Sentry/sentryClient";
import { EvyAILogger } from "../Utils/EvyAILogger";
import { CHROME_STORAGE_KEYS } from "../LinkedInParser/constants";
import { firebaseAPP, firebaseAuth, firebaseDb } from "../firebase2/firebaseClient";
import { API_RESPONSe_MAP } from "../Utils/API_RESPONSE_MAP";
import { fetchFirebaseBE } from "../Background/BG_UTILS";
// const firebaseConfig = {
//   apiKey: 'AIzaSyB3pRFi0HuJhjZWt_7Y6mgIwIu6aRAIK3I',
//   authDomain: 'newsapp-6b32a.firebaseapp.com',
//   databaseURL:
//     'https://newsapp-6b32a-default-rtdb.asia-southeast1.firebasedatabase.app',
//   projectId: 'newsapp-6b32a',
//   storageBucket: 'newsapp-6b32a.appspot.com',
//   messagingSenderId: '200592454522',
//   appId: '1:200592454522:web:2cf2d0c6722c9c73d89cc3',
//   measurementId: 'G-LZYR8TXSL4',
// };
const firebaseConfig = {
  apiKey: "AIzaSyC0kOy4juGg4iMqSkDmh4vF9HKRVsPXvOA",
  authDomain: "gptchromeextension.firebaseapp.com",
  projectId: "gptchromeextension",
  storageBucket: "gptchromeextension.appspot.com",
  messagingSenderId: "776551117048",
  appId: "1:776551117048:web:b07c9ec9bf7fe7faa6cb0d",
  measurementId: "G-HPJLZFL679",
};

export const COLLECTIONS = {
  USER_ACTIVITIES: "user_activities",
  ACTIVITIES: "activities",
  COMMANDS: "commands",
  PRODUCTS: "products",
  CUSTOMERS: "customers",
  STATS: "stats",
  ALL_STATS: "all_stats",
  CHECKOUT_SESSIONS: "checkout_sessions",
  SUBSCRIPTIONS: "subscriptions",
  MANUAL_REVIEWS: "manual_reviews",
  QUESTIONS: "questions",
  USER_QUERIES: "user_queries",
  SAVED_LINKEDIN_PROFILES: "saved_linkedin_profiles",
  PROFILES: "profiles",
  PERSONAS: "personas",
  TEMPLATES: "templates",
  TAGS: "tags",
  LISTS: "lists",
  GLOBALS: "globals",
  EXTENSION: "extension",
  LINKEDIN_HOME_PAGE_CONTENT: "linkedin_home_page_content",
  TEAMS: "teams",
  TEAM_INVITES: "team_invites",
};

export const FIELDS = {
  TIMESTAMP: "timestamp",
  ACTIVITY_DATA: "activityData",
  GENERATED_TEXT: "generatedText",
  ACTIVITY_TYPE: "activityType",
  TOTAL_USAGE: "total_usage",
  TOTAL_TOKENS_COUNT: "total_tokens_count",
  CURRENT_MONTH_STATS: "current_month_stats",
  PERSONA_NAME: "personaName",
  TEMPLATE_NAME: "templateName",
  TEMPLATE_CONTENT: "templateContent",
  __NAME__: "__name__",
};

const FIREBASE_FUNCTIONS = {
  BANNER: "getBanner",
  PROFILE_SUMMARY: "getLinkedInProfileSummary",
};

let lastRecentActivitySnapshot: DocumentSnapshot | null = null;
let lastSavedCommandSnapshot: DocumentSnapshot | null = null;

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");

let verificationEmailSentTime = 0;
const MINIMUM_DELAY_IN_SECONDS_TO_SEND_VERIFICATION_EMAIL = 60;

export const sendVerificationEmail = (user: User) => {
  const currentTime = new Date().getTime();
  if (currentTime - verificationEmailSentTime >= MINIMUM_DELAY_IN_SECONDS_TO_SEND_VERIFICATION_EMAIL * 1000) {
    verificationEmailSentTime = currentTime;
    sendEmailVerification(user);
  }
};

// Authenticate User Function
export async function signInUserWithCustomToken(customToken: string) {
  try {
    const res = await signInWithCustomToken(firebaseAuth, customToken);
    if (res) {
      await storage.set({
        [CHROME_STORAGE_KEYS.accessToken]: await res.user.getIdToken(true),
        [CHROME_STORAGE_KEYS.uid]: res.user.uid,
        [CHROME_STORAGE_KEYS.refreshToken]: res.user.refreshToken,
      });
    }
  } catch (error) {
    EvyAILogger.error("Error during sign-in:", error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "signInUserWithCustomToken",
        },
      },
    });
  }
}

const fetchUserDataById = async (id: string) => {
  try {
    const docRef: DocumentReference<DocumentData> = doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${id}`);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return docSnapshot.data() as IUser;
    }

    return null;
  } catch (error) {
    if (error) {
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "fetchUserDataById",
          },
        },
      });
      throw new Error(error as string);
    }
  }
};

export const updateUserLastActiveTime = async (id: string) => {
  try {
    const docRef: DocumentReference<DocumentData> = doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${id}`);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      await updateDoc(docRef, {
        ...docSnapshot.data(),
        last_active_time: serverTimestamp(),
      });
    }
    return null;
  } catch (error) {
    if (error) {
      // ignore because its flooding sentry 
      // sentryClient.captureException(error, {
      //   captureContext: {
      //     extra: {
      //       functionName: "updateUserLastActiveTime",
      //     },
      //   },
      // });
      // throw new Error(error as string);
      EvyAILogger.log(error, "updateUserLastActiveTime");
    }
  }
};

export const saveCurrentSessionId = async (userId: string) => {
  const currentUser = await fetchUserDataById(userId);
  if (currentUser) {
    const { currentSessionId } = currentUser;
    // localStorage.setItem("C_S_ID", currentSessionId + "_" + currentUser.userId)
    localStorage.setItem("C_S_ID", currentSessionId);
    localStorage.setItem("C_U_", currentUser.userId);
  }
};

export const saveCurrentUserId = async (userId: string) => {
  const currentUser = await fetchUserDataById(userId);
  if (currentUser) {
    localStorage.setItem("C_U_", currentUser.userId);
  }
};

export const sendEmailToResetPassword = (email: string) => {
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(firebaseAuth, email)
      .then(() => {
        // EvyAILogger.log("Password reset email sent.");
        resolve(true);
      })
      .catch((error) => {
        let errorMessage = error.message;
        if (error.code === "auth/user-not-found") {
          EvyAILogger.log("That email address is already in use!");
          errorMessage = "There is no user record corresponding to this. Please sign up or use different email.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "That email address is invalid!";
        }
        EvyAILogger.log({ error });
        reject(new Error(errorMessage));
      });
  });
};

export const signUpWithEmail = (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  linkedInAccount: string
) => {
  return new Promise((resolve, reject) => {
    EvyAILogger.log({ email, password });
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(async (data) => {
        // EvyAILogger.log({ data });
        const dataToSet = {
          email,
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
          linkedin_url: linkedInAccount,
        };
        try {
          const userId = data.user.uid;
          await setDoc(doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${userId}`), dataToSet);
          // const customerDetailsSnapshot = await getDoc(
          //   doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${userId}`)
          // );

          // EvyAILogger.log({customerDetailsSnapshot});
        } catch (error) {
          // EvyAILogger.log("### Error while adding data in customers collection");
          EvyAILogger.log({ error });
          sentryClient.captureException(error, {
            captureContext: {
              extra: {
                functionName: "signUpWithEmail",
              },
            },
          });
        } finally {
          EvyAILogger.log("User account created & signed in!");
          resolve(true);
        }
      })
      .catch((error) => {
        let errorMessage = error.message;
        if (error.code === "auth/email-already-in-use") {
          errorMessage = "That email address is already in use!";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "That email address is invalid!";
        }
        EvyAILogger.log({ error });
        reject(new Error(errorMessage));
      });
  });
};
export const userProfileUpdate = async (
  userId: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  linkedInAccount: string
) => {
  try {
    const firestore = getFirestore();
    const userRef = doc(firestore, `${COLLECTIONS.CUSTOMERS}/${userId}`);

    const newData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      linkedin_url: linkedInAccount,
    };

    await updateDoc(userRef, newData);

    // EvyAILogger.log("User profile updated successfully");
    return true;
  } catch (error) {
    EvyAILogger.error("Error updating user profile:", error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "userProfileUpdate",
        },
      },
    });
    return false;
  }
};

export const getBannerDetails = async () => {
  try {
    const firestore = getFirestore();
    const linkedInHomePageContentDocRef = doc(firestore, COLLECTIONS.GLOBALS, COLLECTIONS.LINKEDIN_HOME_PAGE_CONTENT);

    const linkedInHomePageContentDocSnapshot = await getDoc(linkedInHomePageContentDocRef);
    if (linkedInHomePageContentDocSnapshot.exists() && linkedInHomePageContentDocSnapshot.data().content) {
      const contentArray = linkedInHomePageContentDocSnapshot.data().content;
      const orderedContentArray = contentArray.sort((a: any, b: any) => a.position - b.position);
      // EvyAILogger.log("$$$$$$$$$$$ orderedContentArray", orderedContentArray);
      return orderedContentArray;
    } else {
      // EvyAILogger.log("No content found or document does not exist");
      return [];
    }
  } catch (err) {
    EvyAILogger.log("Error:", err);
    sentryClient.captureException(err, {
      captureContext: {
        extra: {
          functionName: "getBannerDetails",
        },
      },
    });
    return [];
  }
};

export const getProfileSummary = async (data: any) => {
  try {
    const status = await getSubscriptionStatus();
    const response = await fetchFirebaseBE("GET_COMMENTS", {
      [PARAMETER_KEY.TYPE]: API_REQUEST_TYPE.LINKEDIN_PROFILE_SUMMARY,
      [PARAMETER_KEY.IS_PRO_USER]: status.isProUser,
      [PARAMETER_KEY.PROFILE]: {
        ...data,
        url: data.linked_url,
      },
    });
    if (!response.success) {
      return response;
    }
    return API_RESPONSe_MAP.profileSummary_V2_TO_V1(response, data.linked_url);
  } catch (error: any) {
    EvyAILogger.error({ error }, "getProfileSummary");
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getProfileSummary",
        },
      },
    });
    return null;
  }
};

export const getExistingProfileSummary = async (data: any) => {
  try {
    const user = await getCurrentUser();
    if (!user) {
      throw new Error("User not found!");
    }

    const docRef = doc(
      firebaseDb,
      `${COLLECTIONS.USER_ACTIVITIES}/${user.uid}/${COLLECTIONS.ACTIVITIES}`,
      data.summaryId
    );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { data: docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    EvyAILogger.error("Error getting document:", error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getExistingProfileSummary",
        },
      },
    });
    return error;
  }
};

export async function updateProfileSummaryId(data: any) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      throw new Error("User not found!");
    }
    const profileDocRef = doc(
      firebaseDb,
      `/${COLLECTIONS.SAVED_LINKEDIN_PROFILES}/${user.uid}/${COLLECTIONS.PROFILES}`,
      data.profileId
    );
    await updateDoc(profileDocRef, {
      summaryId: data.summaryId,
    });

    // EvyAILogger.log("Profile updated successfully");
    return true;
  } catch (err) {
    EvyAILogger.error("Error updating profile:", err);
    sentryClient.captureException(err, {
      captureContext: {
        extra: {
          functionName: "updateProfileSummaryId",
        },
      },
    });
    return false;
  }
}

export const signInWithEmail = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
    return { success: true };
  } catch (error: any) {
    EvyAILogger.log("### firebase auth signin:::");
    EvyAILogger.log({ error });
    let errorMessage = error.message;
    if (error.code === "auth/user-not-found") {
      EvyAILogger.log("That email address is already in use!");
      errorMessage = "There is no user record corresponding to this. Please sign up or use different email.";
    } else if (error.code === "auth/invalid-email") {
      EvyAILogger.log("That email address is invalid!");
      errorMessage = "That email address is invalid! Please use different email.";
    } else if (error.code === "auth/wrong-password") {
      EvyAILogger.log("Wrong password");
      errorMessage = "Wrong Password!";
    }
    // EvyAILogger.error(error);
    return {
      success: false,
      message: errorMessage,
    };
  }
};

export const sendVerificationCodeToPhone = async (phoneNumber: string) => {
  try {
    const recaptchaVerifier = new RecaptchaVerifier(RECAPTCHA_CONTAINER_ID, {}, firebaseAuth);
    // EvyAILogger.log({ recaptchaVerifier });
    // const widgetId = await recaptchaVerifier.render();
    // EvyAILogger.log({widgetId});
    const response = await signInWithPhoneNumber(firebaseAuth, phoneNumber, recaptchaVerifier);
    // EvyAILogger.log({ response });
    return response;
  } catch (error: any) {
    EvyAILogger.log({ error });
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "sendVerificationCodeToPhone",
        },
      },
    });
    return error;
  }
};

export const checkExtVersion = async () => {
  const firestore = getFirestore();
  const versionDoc = doc(firestore, COLLECTIONS.GLOBALS, COLLECTIONS.EXTENSION);

  const versionSnap = await getDoc(versionDoc);
  if (versionSnap.exists() && versionSnap.data()) {
    const enableUpdateBanner = versionSnap.data().enable_update_banner;
    return enableUpdateBanner;
  } else {
    return false;
  }
};

export const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError || !token) {
        EvyAILogger.error(`SSO ended with an error: ${JSON.stringify(chrome.runtime.lastError)}`);
        reject(new Error(`SSO ended with an error: ${JSON.stringify(chrome.runtime.lastError)}`));
      }

      signInWithCredential(firebaseAuth, GoogleAuthProvider.credential(null, token))
        .then((res) => {
          // EvyAILogger.log("signed in!");
          // EvyAILogger.log({ res });
          resolve(res);
        })
        .catch((err) => {
          EvyAILogger.error(`SSO ended with an error: ${err}`);
          sentryClient.captureException(err, {
            captureContext: {
              extra: {
                functionName: "signInWithGoogle",
              },
            },
          });
          reject(new Error(`SSO ended with an error: ${err}`));
        });
    });
  });
};

export const getCurrentUser = async  () => {
  const token = (await storage.get())[CHROME_STORAGE_KEYS.accessToken]
  const user = firebaseAuth.currentUser
  if(!token && user) {
    await firebaseAuth.signOut();
  } 
  return user;
};

export const reloadCurrentUser = async () => {
  return firebaseAuth.currentUser?.reload();
};

export const signOut = async () => {
  await storage.clear();
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive: false }, async (currentToken) => {
      if (!chrome.runtime.lastError) {
        // Remove the local cached token
        // chrome.identity.removeCachedAuthToken({token: currentToken}, () => {});
        chrome.identity.clearAllCachedAuthTokens(async () => {
          clearStorage();
          try {
            await fetch(`https://accounts.google.com/o/oauth2/revoke?token=${currentToken}`);

            await firebaseAuth.signOut();
            verificationEmailSentTime = 0;
            resolve(true);
          } catch (error: any) {
            EvyAILogger.log({ error });
            sentryClient.captureException(error, {
              captureContext: {
                extra: {
                  functionName: "signOut",
                },
              },
            });
            reject(true);
          }
        });
      } else {
        await firebaseAuth.signOut();
        verificationEmailSentTime = 0;
        clearStorage();
        resolve(true);
      }
    });
  });
};

export const getRecentActivities = async (limitOfRecords: number = 3, willFetchFromBeginning: boolean = true) => {
  const userId = firebaseAuth.currentUser?.uid;
  // EvyAILogger.log({ userId });
  if (!userId) return [];
  try {
    let queryToGetDocs = null;
    if (willFetchFromBeginning || !lastRecentActivitySnapshot) {
      lastRecentActivitySnapshot = null;
      queryToGetDocs = query(
        collection(firebaseDb, `${COLLECTIONS.USER_ACTIVITIES}/${userId}/${COLLECTIONS.ACTIVITIES}`),
        orderBy(FIELDS.TIMESTAMP, "desc"),
        limit(limitOfRecords)
      );
      // EvyAILogger.log("### will fetch recentActivity from beginning");
    } else {
      queryToGetDocs = query(
        collection(firebaseDb, `${COLLECTIONS.USER_ACTIVITIES}/${userId}/${COLLECTIONS.ACTIVITIES}`),
        orderBy(FIELDS.TIMESTAMP, "desc"),
        startAfter(lastRecentActivitySnapshot),
        limit(limitOfRecords)
      );
      // EvyAILogger.log("### will fetch recentActivity for next page");
    }
    const recentActivitiesSnapshot = await getDocs(queryToGetDocs);
    // EvyAILogger.log(
    //   "### total recentActivity found from firebase:::",
    //   recentActivitiesSnapshot.docs.length
    // );
    if (recentActivitiesSnapshot.docs.length > 0) {
      lastRecentActivitySnapshot = recentActivitiesSnapshot.docs[recentActivitiesSnapshot.docs.length - 1];
    }
    return recentActivitiesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error: any) {
    // EvyAILogger.log("### error while getting docs getRecentActivities...");
    EvyAILogger.log({ error });
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getRecentActivities",
        },
      },
    });
    return [];
  }
};

export const getSavedCommands = async (limitOfRecords: number = 3, willFetchFromBeginning: boolean = true) => {
  const userId = firebaseAuth.currentUser?.uid;
  // EvyAILogger.log({ userId });
  if (!userId) return [];
  try {
    let queryToGetDocs = null;
    if (willFetchFromBeginning || !lastSavedCommandSnapshot) {
      lastSavedCommandSnapshot = null;
      queryToGetDocs = query(
        collection(firebaseDb, `${COLLECTIONS.USER_ACTIVITIES}/${userId}/${COLLECTIONS.COMMANDS}`),
        orderBy(FIELDS.TIMESTAMP, "desc"),
        limit(limitOfRecords)
      );
      // EvyAILogger.log("### will fetch saved commands from beginning");
    } else {
      queryToGetDocs = query(
        collection(firebaseDb, `${COLLECTIONS.USER_ACTIVITIES}/${userId}/${COLLECTIONS.COMMANDS}`),
        orderBy(FIELDS.TIMESTAMP, "desc"),
        startAfter(lastSavedCommandSnapshot),
        limit(limitOfRecords)
      );
      // EvyAILogger.log("### will fetch saved commands for next page");
    }
    const savedCommandsSnapshot = await getDocs(queryToGetDocs);
    // EvyAILogger.log(
    //   "### total savedCommands found from firebase:::",
    //   savedCommandsSnapshot.docs.length
    // );
    if (savedCommandsSnapshot.docs.length > 0) {
      lastSavedCommandSnapshot = savedCommandsSnapshot.docs[savedCommandsSnapshot.docs.length - 1];
    }
    return savedCommandsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error: any) {
    // EvyAILogger.log("### error while getting docs getSavedCommands...");
    EvyAILogger.log({ error });
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getSavedCommands",
        },
      },
    });
    return [];
  }
};

export const isCommandDataSaved = async (summaryId: string) => {
  // EvyAILogger.log("isCommandDataSaved", isCommandDataSaved)
  const userId = firebaseAuth.currentUser?.uid;
  if (!userId) return false;

  const savedCommandRef = doc(
    firebaseDb,
    `${COLLECTIONS.USER_ACTIVITIES}/${userId}/${COLLECTIONS.COMMANDS}/${summaryId}`
  );
  const docSnap = await getDoc(savedCommandRef);
  const isSaved = docSnap.exists();
  // EvyAILogger.log(" isSaved isCommandDataSaved", isSaved)
  return isSaved;
};

export const addCommandData = async (activityData: any, activityType: string, generatedText: string, id: string) => {
  try {
    const data = {
      [FIELDS.TIMESTAMP]: serverTimestamp(),
      [FIELDS.ACTIVITY_DATA]: activityData,
      [FIELDS.GENERATED_TEXT]: generatedText,
      [FIELDS.ACTIVITY_TYPE]: activityType,
    };
    const userId = firebaseAuth.currentUser?.uid;
    // EvyAILogger.log({ userId });
    if (!userId) return { docId: "", error: "UsreId not found" };
    // const docRef = await addDoc(
    //   collection(
    //     firebaseDb,
    //     `${COLLECTIONS.USER_ACTIVITIES}/${userId}/${COLLECTIONS.COMMANDS}`
    //   ),
    //   data
    // );
    await setDoc(doc(firebaseDb, `${COLLECTIONS.USER_ACTIVITIES}/${userId}/${COLLECTIONS.COMMANDS}/${id}`), data);
    // EvyAILogger.log("Document written with ID: ", id);
    return { docId: id, error: null };
  } catch (error: any) {
    // EvyAILogger.log("### error while getting docs from cache...");
    EvyAILogger.log({ error });
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "addCommandData",
        },
      },
    });
    return { docId: "", error };
  }
};

export const deleteCommandData = async (documentId: string) => {
  try {
    const userId = firebaseAuth.currentUser?.uid;
    // EvyAILogger.log({ userId });
    if (!userId) return { docId: "", error: "UsreId not found" };
    await deleteDoc(doc(firebaseDb, `${COLLECTIONS.USER_ACTIVITIES}/${userId}/${COLLECTIONS.COMMANDS}`, documentId));
    // EvyAILogger.log("Document deleted with ID: ", documentId);
    return { docId: documentId, error: null };
  } catch (error: any) {
    // EvyAILogger.log("### error while getting docs from cache...");
    EvyAILogger.log({ error });
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "deleteCommandData",
        },
      },
    });
    return { docId: "", error };
  }
};

export const getSubscriptionPlans = async () => {
  const userId = firebaseAuth.currentUser?.uid;
  // EvyAILogger.log({ userId });
  if (!userId) return [];
  try {
    const subscriptionPlanSnapshot = await getDocs(
      query(collection(firebaseDb, `${COLLECTIONS.PRODUCTS}`), where("active", "==", true))
    );
    if (subscriptionPlanSnapshot.docs.length > 0) {
      const productSnapshot = subscriptionPlanSnapshot.docs.at(0);
      const productDocumentId = productSnapshot?.id;
      // EvyAILogger.log({ productSnapshot, productDocumentId });
      const productPricesSnapshot = await getDocs(
        collection(firebaseDb, `${COLLECTIONS.PRODUCTS}/${productDocumentId}/prices`)
      );
      return productPricesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } else {
      return [];
    }
  } catch (error: any) {
    // EvyAILogger.log("### error while getting docs from cache...");
    EvyAILogger.log({ error });
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getSubscriptionPlans",
        },
      },
    });
    return [];
  }
};

export const getSubscriptionPlanPaymentURL = (priceId: string) => {
  return new Promise(async (resolve, reject) => {
    const userId = firebaseAuth.currentUser?.uid;
    const email = firebaseAuth.currentUser?.email;
    // EvyAILogger.log({ userId, email });
    if (!userId) {
      resolve({ error: "Not signed in. Please sign in again.", url: null });
    }

    const docRef = await addDoc(
      collection(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${userId}/${COLLECTIONS.CHECKOUT_SESSIONS}`),
      {
        price: priceId,
        success_url: "https://evyai.com/payment_successful",
        cancel_url: "https://app.evyai.com/subscription-pricing",
        metadata: {
          email,
        },
      }
    );

    // Wait for the CheckoutSession to get attached by the extension
    const unsubscribe = onSnapshot(docRef, (snap) => {
      onSnapshotRecieved(snap);
    });

    const onSnapshotRecieved = (snap: DocumentSnapshot<DocumentData>) => {
      const data = snap.data();
      // EvyAILogger.log({ data });
      if (data?.error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase EvyAILogger.
        // alert(`An error occured: ${error.message}`);
        resolve({ error: data?.error.message, url: null });
        unsubscribe();
      }
      if (data?.url) {
        // We have a Stripe Checkout URL, let's redirect.
        // window.location.assign(url);
        resolve({ error: null, url: data?.url });
        unsubscribe();
      }
    };
  });
};

const fetchTeamById = async (teamId: string) => {
  try {
    const docRef = doc(firebaseDb, `${COLLECTIONS.TEAMS}/${teamId}`);
    const data = await getDoc(docRef);
    return { id: data.id, ...data.data() };
  } catch (error) {
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getSubscriptionPlanPaymentUrl",
        },
      },
    });
    if (error) {
      throw new Error(error as string);
    }
  }
};

const fetchSubscriptionStatusByUserId = async (userId: string) => {
  if (!userId)
    return {
      error: "Not signed in. Please sign in again.",
      status: SubscriptionStatus.FREE,
      usagePercentage: 0,
      hasTeamsPlan: false,
      allowedTeamMembers: 0,
      subscription: SUBSCRIPTIONS_NAMES.FREE,
      interval: SUBSCRIPTIONS_INTERVALS.MONTH,
      isAdmin: false,
      userPersonalSubscription: SUBSCRIPTIONS_NAMES.FREE,
      subscriptionData: null,
      statusDB: null,
      userPersonalStatusDB: null,
    };
  try {
    let statusDB = null;
    let userPersonalStatusDB = null;
    let subscriptionData = null;
    let subscription = SUBSCRIPTIONS_NAMES.FREE;
    let interval = SUBSCRIPTIONS_INTERVALS.MONTH;
    let isAdmin = false;
    let hasTeamsPlan = false;
    let allowedTeamMembers = 0;
    let userPersonalSubscription = SUBSCRIPTIONS_NAMES.FREE;
    let subscriptionEndDate = null;
    const subscriptionStatusSnapshot = await getDocs(
      query(
        collection(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${userId}/${COLLECTIONS.SUBSCRIPTIONS}`)
        // where("status", "in", ["trialing", "active"])
      )
    );
    let subDocs = subscriptionStatusSnapshot.docs;
    subDocs.reverse();
    let subscriptionItem: any = null;
    let status = SubscriptionStatus.FREE;
    let usagePercentage = 0;
    if (subDocs.length > 0) {
      let hasActiveSubscription = false;
      for (const doc of subDocs) {
        const docData = doc.data();
        if (
          docData.status === SubscriptionStatusDB.ACTIVE ||
          docData.status === SubscriptionStatusDB.PAST_DUE ||
          docData.status === SubscriptionStatusDB.TRIALING
        ) {
          hasActiveSubscription = true;
          subscriptionItem = doc;
          break;
        } else if (docData.status === SubscriptionStatusDB.CANCELLED) {
          hasActiveSubscription = false;
          subscriptionItem = doc;
        } else {
          hasActiveSubscription = false;
          subscriptionItem = doc;
        }
      }
      if (hasActiveSubscription) {
        status = SubscriptionStatus.PRO;
        subscription = SUBSCRIPTIONS_NAMES.PREMIUM;
        userPersonalSubscription = SUBSCRIPTIONS_NAMES.PREMIUM;
      } else {
        subscriptionData = subscriptionItem.data() as SubscriptionType;
        status = SubscriptionStatus.FREE;
        subscription = SUBSCRIPTIONS_NAMES.FREE;
        userPersonalSubscription = SUBSCRIPTIONS_NAMES.FREE;
        if (subscriptionData.status === SubscriptionStatusDB.CANCELLED) {
          statusDB = SubscriptionStatusDB.CANCELLED;
          userPersonalStatusDB = SubscriptionStatusDB.CANCELLED;
        } else {
          statusDB = subscriptionData.status;
          userPersonalStatusDB = subscriptionData.status;
        }
      }
    }
    if (status === SubscriptionStatus.PRO && subscriptionItem) {
      const subData = subscriptionItem.data();
      // const subData = subscriptionStatusSnapshot.docs[subscriptionStatusSnapshot.docs.length - 1].data();
      subscriptionData = subData ? (subData as SubscriptionType) : null;
      statusDB = subData.status;
      userPersonalStatusDB = subData.status;
      subscriptionEndDate = subData.current_period_end.toDate();
      const newDate = new Date();
      if (newDate > subscriptionEndDate) {
        statusDB = SubscriptionStatusDB.CANCELLED;
        // EvyAILogger.log("SUBSCRIPTION END DATE is less", subscriptionEndDate);
      }
      interval =
        subData.items[0].plan.interval === "month" ? SUBSCRIPTIONS_INTERVALS.MONTH : SUBSCRIPTIONS_INTERVALS.YEAR;
      const productId = subData.items[0].plan.product;
      const priceId = subData.items[0].plan.id;
      const totalUsersAllowed = subData.items[0].quantity;
      isAdmin = true;

      if (
        productId === SUBSCRIPTIONS_FIELDS.TEAMS_SUBSCRIPTION_PRODUCT_ID &&
        (priceId === SUBSCRIPTIONS_FIELDS.TEAMS_MONTHLY_PRICE_ID ||
          priceId === SUBSCRIPTIONS_FIELDS.TEAMS_ANNUAL_PRICE_ID ||
          priceId === SUBSCRIPTIONS_FIELDS.TEAMS_ANNUAL_PRICE_ID_2)
      ) {
        hasTeamsPlan = true;
        subscription = SUBSCRIPTIONS_NAMES.TEAMS;
      } else {
        subscription = SUBSCRIPTIONS_NAMES.PREMIUM;
        hasTeamsPlan = false;
      }
      if (totalUsersAllowed > 1) {
        allowedTeamMembers = totalUsersAllowed - 1;
      }
    }

    const customerDetailsSnapshot = await getDoc(doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${userId}`));
    if (customerDetailsSnapshot.exists()) {
      const customerUsageDetailsSnapshot = await getDoc(
        doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${userId}/${COLLECTIONS.STATS}/${COLLECTIONS.ALL_STATS}`)
      );
      let {
        current_minute_stats,
        current_day_stats,
        current_hour_stats,
        current_month_stats,
        total_usage,
        ...customerData
      } = customerDetailsSnapshot.data();
      if (customerUsageDetailsSnapshot.exists()) {
        customerData = { ...customerData, ...customerUsageDetailsSnapshot.data() };
      }
      if (status === SubscriptionStatus.FREE) {
        subscription = SUBSCRIPTIONS_NAMES.FREE;
        userPersonalSubscription = SUBSCRIPTIONS_NAMES.FREE;
        statusDB = SubscriptionStatusDB.ACTIVE;
        userPersonalStatusDB = SubscriptionStatusDB.ACTIVE;
        interval = SUBSCRIPTIONS_INTERVALS.MONTH;
        isAdmin = false;
        if (customerData[FIELDS.TOTAL_USAGE] && customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) {
          usagePercentage = Math.min(
            100,
            Math.ceil((100 * customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) / FREE_USER_MAXIMUM_TOKENS)
          );
        }
      } else {
        subscription = hasTeamsPlan ? SUBSCRIPTIONS_NAMES.TEAMS : SUBSCRIPTIONS_NAMES.PREMIUM;
        userPersonalSubscription = hasTeamsPlan ? SUBSCRIPTIONS_NAMES.TEAMS : SUBSCRIPTIONS_NAMES.PREMIUM;
        isAdmin = hasTeamsPlan ? true : false;
        if (statusDB === SubscriptionStatusDB.PAST_DUE) {
          if (customerData[FIELDS.TOTAL_USAGE] && customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) {
            usagePercentage = Math.min(
              100,
              Math.ceil((100 * customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) / FREE_USER_MAXIMUM_TOKENS)
            );
          }
        } else if (statusDB === SubscriptionStatusDB.ACTIVE || statusDB === SubscriptionStatusDB.TRIALING) {
          if (
            customerData[FIELDS.CURRENT_MONTH_STATS] &&
            customerData[FIELDS.CURRENT_MONTH_STATS][FIELDS.TOTAL_TOKENS_COUNT]
          ) {
            usagePercentage = Math.min(
              100,
              Math.ceil(
                (100 * customerData[FIELDS.CURRENT_MONTH_STATS][FIELDS.TOTAL_TOKENS_COUNT]) /
                  PRO_USER_MAXIMUM_MONTHLY_USAGE
              )
            );
          }
        } else if (statusDB === SubscriptionStatusDB.CANCELLED) {
          if (customerData[FIELDS.TOTAL_USAGE] && customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) {
            usagePercentage = Math.min(
              100,
              Math.ceil((100 * customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) / FREE_USER_MAXIMUM_TOKENS)
            );
          }
        } else {
          if (customerData[FIELDS.TOTAL_USAGE] && customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) {
            usagePercentage = Math.min(
              100,
              Math.ceil((100 * customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) / FREE_USER_MAXIMUM_TOKENS)
            );
          }
        }
        // if (
        //   customerData[FIELDS.CURRENT_MONTH_STATS] &&
        //   customerData[FIELDS.CURRENT_MONTH_STATS][FIELDS.TOTAL_TOKENS_COUNT]
        //   ) {
        //   usagePercentage = Math.min(
        //     100,
        //     Math.ceil(
        //       (100 *
        //         customerData[FIELDS.CURRENT_MONTH_STATS][
        //           FIELDS.TOTAL_TOKENS_COUNT
        //         ]) /
        //         PRO_USER_MAXIMUM_MONTHLY_USAGE
        //     )
        //   );
        // }
      }
    }
    if (
      statusDB !== SubscriptionStatusDB.ACTIVE &&
      statusDB !== SubscriptionStatusDB.PAST_DUE &&
      statusDB !== SubscriptionStatusDB.TRIALING
    ) {
      status = SubscriptionStatus.FREE;
      subscription = SUBSCRIPTIONS_NAMES.FREE;
      interval = SUBSCRIPTIONS_INTERVALS.MONTH;
      isAdmin = false;
    }
    if (
      userPersonalStatusDB !== SubscriptionStatusDB.ACTIVE &&
      userPersonalStatusDB !== SubscriptionStatusDB.PAST_DUE &&
      userPersonalStatusDB !== SubscriptionStatusDB.TRIALING
    ) {
      hasTeamsPlan = false;
      allowedTeamMembers = 0;
      userPersonalSubscription = SUBSCRIPTIONS_NAMES.FREE;
    }
    return {
      error: null,
      status,
      usagePercentage,
      hasTeamsPlan,
      allowedTeamMembers,
      subscription,
      interval,
      isAdmin,
      userPersonalSubscription,
      subscriptionData,
      statusDB,
      userPersonalStatusDB,
    };
  } catch (error: any) {
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "fetchSubscriptionStatusByUserId",
        },
      },
    });
    return {
      error,
      status: SubscriptionStatus.FREE,
      usagePercentage: 0,
      hasTeamsPlan: false,
      allowedTeamMembers: 0,
      subscription: SUBSCRIPTIONS_NAMES.FREE,
      interval: SUBSCRIPTIONS_INTERVALS.MONTH,
      isAdmin: false,
      userPersonalSubscription: SUBSCRIPTIONS_NAMES.FREE,
      subscriptionData: null,
      statusDB: null,
      userPersonalStatusDB: null,
    };
  }
};

export const getSubscriptionStatus = async () => {
  const userId = firebaseAuth.currentUser?.uid;
  if (!userId)
    return {
      error: "Not signed in. Please sign in again.",
      status: SubscriptionStatus.FREE,
      usagePercentage: 0,
      hasTeamsPlan: false,
      allowedTeamMembers: 0,
      subscription: SUBSCRIPTIONS_NAMES.FREE,
      interval: SUBSCRIPTIONS_INTERVALS.MONTH,
      isAdmin: false,
      userPersonalSubscription: SUBSCRIPTIONS_NAMES.FREE,
      subscriptionData: null,
      statusDB: null,
      userPersonalStatusDB: null,
    };
  try {
    let statusDB = null;
    let userPersonalStatusDB = null;
    let subscriptionData = null;
    let subscription = SUBSCRIPTIONS_NAMES.FREE;
    let interval = SUBSCRIPTIONS_INTERVALS.MONTH;
    let isAdmin = false;
    let hasTeamsPlan = false;
    let allowedTeamMembers = 0;
    let teamsData: any[] = [];
    let subStatusesOfTeamAdmins: SubScriptionStaus_Type[] = [];
    let isProUser: boolean = false;
    let userPersonalSubscription = SUBSCRIPTIONS_NAMES.FREE;
    let subscriptionEndDate = null;

    const subscriptionStatusSnapshot = await getDocs(
      query(
        collection(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${userId}/${COLLECTIONS.SUBSCRIPTIONS}`)
        // where("status", "in", ["trialing", "active", "past_due"])
      )
    );
    let subDocs = subscriptionStatusSnapshot.docs;
    subDocs.reverse();
    let subscriptionItem: any = null;
    let status = SubscriptionStatus.FREE;
    let usagePercentage = 0;
    if (subDocs.length > 0) {
      let hasActiveSubscription = false;
      for (const doc of subDocs) {
        const docData = doc.data();
        if (
          docData.status === SubscriptionStatusDB.ACTIVE ||
          docData.status === SubscriptionStatusDB.PAST_DUE ||
          docData.status === SubscriptionStatusDB.TRIALING
        ) {
          hasActiveSubscription = true;
          subscriptionItem = doc;
          break;
        } else if (docData.status === SubscriptionStatusDB.CANCELLED) {
          hasActiveSubscription = false;
          subscriptionItem = doc;
        } else {
          hasActiveSubscription = false;
          subscriptionItem = doc;
        }
      }
      if (hasActiveSubscription) {
        status = SubscriptionStatus.PRO;
        subscription = SUBSCRIPTIONS_NAMES.PREMIUM;
        userPersonalSubscription = SUBSCRIPTIONS_NAMES.PREMIUM;
      } else {
        subscriptionData = subscriptionItem.data() as SubscriptionType;
        status = SubscriptionStatus.FREE;
        subscription = SUBSCRIPTIONS_NAMES.FREE;
        userPersonalSubscription = SUBSCRIPTIONS_NAMES.FREE;
        if (subscriptionData.status === SubscriptionStatusDB.CANCELLED) {
          statusDB = SubscriptionStatusDB.CANCELLED;
          userPersonalStatusDB = SubscriptionStatusDB.CANCELLED;
        } else {
          statusDB = subscriptionData.status;
          userPersonalStatusDB = subscriptionData.status;
        }
      }
    }
    // let status = SubscriptionStatus.FREE;
    // let usagePercentage = 0;
    // if (subscriptionStatusSnapshot.docs.length > 0) {
    //   status = SubscriptionStatus.PRO;
    //   subscription = SUBSCRIPTIONS_NAMES.PREMIUM;
    //   userPersonalSubscription = SUBSCRIPTIONS_NAMES.PREMIUM;
    // }

    if (status === SubscriptionStatus.PRO && subscriptionItem) {
      const subData = subscriptionItem.data();
      // const subData = subscriptionStatusSnapshot.docs[subscriptionStatusSnapshot.docs.length - 1].data();
      // const subDataId = subscriptionStatusSnapshot.docs[subscriptionStatusSnapshot.docs.length - 1].id;
      subscriptionData = subData ? (subData as SubscriptionType) : null;
      statusDB = subData.status;
      userPersonalStatusDB = subData.status;
      subscriptionEndDate = subData.current_period_end.toDate();
      const newDate = new Date();
      if (newDate > subscriptionEndDate) {
        statusDB = SubscriptionStatusDB.CANCELLED;
        // EvyAILogger.log("SUBSCRIPTION END DATE is less", subscriptionEndDate);
      }
      interval =
        subData.items[0].plan.interval === "month" ? SUBSCRIPTIONS_INTERVALS.MONTH : SUBSCRIPTIONS_INTERVALS.YEAR;
      const productId = subData.items[0].plan.product;
      const priceId = subData.items[0].plan.id;
      const totalUsersAllowed = subData.items[0].quantity;
      isAdmin = true;

      if (
        productId === SUBSCRIPTIONS_FIELDS.TEAMS_SUBSCRIPTION_PRODUCT_ID &&
        (priceId === SUBSCRIPTIONS_FIELDS.TEAMS_MONTHLY_PRICE_ID ||
          priceId === SUBSCRIPTIONS_FIELDS.TEAMS_ANNUAL_PRICE_ID ||
          priceId === SUBSCRIPTIONS_FIELDS.TEAMS_ANNUAL_PRICE_ID_2)
      ) {
        hasTeamsPlan = true;
        subscription = SUBSCRIPTIONS_NAMES.TEAMS;
        userPersonalSubscription = SUBSCRIPTIONS_NAMES.TEAMS;
      } else {
        subscription = SUBSCRIPTIONS_NAMES.PREMIUM;
        userPersonalSubscription = SUBSCRIPTIONS_NAMES.PREMIUM;
        hasTeamsPlan = false;
      }
      if (totalUsersAllowed > 1) {
        allowedTeamMembers = totalUsersAllowed - 1;
      }
    }

    const customerDetailsSnapshot = await getDoc(doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${userId}`));
    if (customerDetailsSnapshot.exists()) {
      const customerUsageDetailsSnapshot = await getDoc(
        doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${userId}/${COLLECTIONS.STATS}/${COLLECTIONS.ALL_STATS}`)
      );
      let {
        current_minute_stats,
        current_day_stats,
        current_hour_stats,
        current_month_stats,
        total_usage,
        ...customerData
      } = customerDetailsSnapshot.data();
      if (customerUsageDetailsSnapshot.exists()) {
        customerData = { ...customerData, ...customerUsageDetailsSnapshot.data() };
      }
      if (status === SubscriptionStatus.PRO) {
        // hasTeamsPlan ? EvyAILogger.log("IS ALREADY PRO USER AND ALSO HAVE TEAM SUBSCRIPTION") : EvyAILogger.log("IS ALREADY PRO USER WITHOUT TEAMS")
        if (statusDB === SubscriptionStatusDB.PAST_DUE) {
          if (customerData[FIELDS.TOTAL_USAGE] && customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) {
            usagePercentage = Math.min(
              100,
              Math.ceil((100 * customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) / FREE_USER_MAXIMUM_TOKENS)
            );
          }
          if (customerData && customerData.memberInTeams && customerData.memberInTeams.length > 0) {
            const teamPromises = customerData.memberInTeams.map(async (id: string) => {
              const teamData = await fetchTeamById(id);
              const adminSubStatus = await fetchSubscriptionStatusByUserId((teamData as any).adminId);
              interval = adminSubStatus.interval;
              teamsData.push(teamData);
              subStatusesOfTeamAdmins.push(adminSubStatus);
              EvyAILogger.log("admin sub status");
            });
            await Promise.all(teamPromises);
          }
          isProUser = subStatusesOfTeamAdmins.some((subStatus: SubScriptionStaus_Type) => {
            if (
              subStatus.hasTeamsPlan &&
              subStatus.userPersonalStatusDB === SubscriptionStatusDB.ACTIVE &&
              subStatus.status === SubscriptionStatus.PRO
            ) {
              if (subStatus.interval) {
                interval = subStatus.interval;
              }
              return true;
            } else {
              return false;
            }
          });
          // isProUser = subStatusesOfTeamAdmins.some((subStatus: SubScriptionStaus_Type) => subStatus.userPersonalStatusDB && subStatus.userPersonalStatusDB === SubscriptionStatusDB.ACTIVE)
          if (isProUser) {
            statusDB = SubscriptionStatusDB.ACTIVE;
          }
        } else if (statusDB === SubscriptionStatusDB.ACTIVE || statusDB === SubscriptionStatusDB.TRIALING) {
          if (
            customerData[FIELDS.CURRENT_MONTH_STATS] &&
            customerData[FIELDS.CURRENT_MONTH_STATS][FIELDS.TOTAL_TOKENS_COUNT]
          ) {
            usagePercentage = Math.min(
              100,
              Math.ceil(
                (100 * customerData[FIELDS.CURRENT_MONTH_STATS][FIELDS.TOTAL_TOKENS_COUNT]) /
                  PRO_USER_MAXIMUM_MONTHLY_USAGE
              )
            );
          }
        } else if (statusDB === SubscriptionStatusDB.CANCELLED) {
          if (customerData[FIELDS.TOTAL_USAGE] && customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) {
            usagePercentage = Math.min(
              100,
              Math.ceil((100 * customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) / FREE_USER_MAXIMUM_TOKENS)
            );
          }
          if (customerData && customerData.memberInTeams && customerData.memberInTeams.length > 0) {
            const teamPromises = customerData.memberInTeams.map(async (id: string) => {
              const teamData = await fetchTeamById(id);
              const adminSubStatus = await fetchSubscriptionStatusByUserId((teamData as any).adminId);
              interval = adminSubStatus.interval;
              teamsData.push(teamData);
              subStatusesOfTeamAdmins.push(adminSubStatus);
            });
            await Promise.all(teamPromises);
          }
          isProUser = subStatusesOfTeamAdmins.some(
            (subStatus: SubScriptionStaus_Type) =>
              subStatus.userPersonalStatusDB && subStatus.userPersonalStatusDB === SubscriptionStatusDB.ACTIVE
          );
          if (isProUser) {
            statusDB = SubscriptionStatusDB.ACTIVE;
          }
        } else {
          if (customerData[FIELDS.TOTAL_USAGE] && customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) {
            usagePercentage = Math.min(
              100,
              Math.ceil((100 * customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) / FREE_USER_MAXIMUM_TOKENS)
            );
          }
          if (customerData && customerData.memberInTeams && customerData.memberInTeams.length > 0) {
            const teamPromises = customerData.memberInTeams.map(async (id: string) => {
              const teamData = await fetchTeamById(id);
              const adminSubStatus = await fetchSubscriptionStatusByUserId((teamData as any).adminId);
              interval = adminSubStatus.interval;
              teamsData.push(teamData);
              subStatusesOfTeamAdmins.push(adminSubStatus);
            });
            await Promise.all(teamPromises);
          }
          isProUser = subStatusesOfTeamAdmins.some(
            (subStatus: SubScriptionStaus_Type) =>
              subStatus.userPersonalStatusDB && subStatus.userPersonalStatusDB === SubscriptionStatusDB.ACTIVE
          );
          if (isProUser) {
            statusDB = SubscriptionStatusDB.ACTIVE;
          }
        }
      } else {
        userPersonalSubscription = SUBSCRIPTIONS_NAMES.FREE;
        if (customerData && customerData.memberInTeams && customerData.memberInTeams.length > 0) {
          const teamPromises = customerData.memberInTeams.map(async (id: string) => {
            const teamData = await fetchTeamById(id);
            const adminSubStatus = await fetchSubscriptionStatusByUserId((teamData as any).adminId);
            interval = adminSubStatus.interval;
            teamsData.push(teamData);
            subStatusesOfTeamAdmins.push(adminSubStatus);
          });
          await Promise.all(teamPromises);
        }
        isProUser = subStatusesOfTeamAdmins.some((subStatus: SubScriptionStaus_Type) => {
          if (
            subStatus.hasTeamsPlan &&
            subStatus.userPersonalStatusDB === SubscriptionStatusDB.ACTIVE &&
            subStatus.status === SubscriptionStatus.PRO
          ) {
            if (subStatus.interval) {
              interval = subStatus.interval;
            }
            return true;
          } else {
            return false;
          }
        });
        const hasPastDue = subStatusesOfTeamAdmins.some((subStatus: SubScriptionStaus_Type) => {
          if (
            subStatus.hasTeamsPlan &&
            subStatus.userPersonalStatusDB === SubscriptionStatusDB.PAST_DUE &&
            subStatus.status === SubscriptionStatus.PRO
          ) {
            if (subStatus.interval) {
              interval = subStatus.interval;
            }
            return true;
          } else {
            return false;
          }
        });
        // isProUser = subStatusesOfTeamAdmins.some((subStatus: SubScriptionStaus_Type) => (subStatus.hasTeamsPlan && subStatus.userPersonalStatusDB !== SubscriptionStatusDB.CANCELLED) && subStatus.status === SubscriptionStatus.PRO)
        if (isProUser) {
          status = SubscriptionStatus.PRO;
          subscription = SUBSCRIPTIONS_NAMES.TEAMS_MEMBER;
          statusDB = SubscriptionStatusDB.ACTIVE;
          userPersonalStatusDB = SubscriptionStatusDB.ACTIVE;
          isAdmin = false;
          if (
            customerData[FIELDS.CURRENT_MONTH_STATS] &&
            customerData[FIELDS.CURRENT_MONTH_STATS][FIELDS.TOTAL_TOKENS_COUNT]
          ) {
            usagePercentage = Math.min(
              100,
              Math.ceil(
                (100 * customerData[FIELDS.CURRENT_MONTH_STATS][FIELDS.TOTAL_TOKENS_COUNT]) /
                  PRO_USER_MAXIMUM_MONTHLY_USAGE
              )
            );
          }
        } else if (!isProUser && hasPastDue) {
          if (customerData[FIELDS.TOTAL_USAGE] && customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) {
            usagePercentage = Math.min(
              100,
              Math.ceil((100 * customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) / FREE_USER_MAXIMUM_TOKENS)
            );
            // usagePercentage = 100;
          }
          if (usagePercentage >= 100) {
            status = SubscriptionStatus.PRO;
            subscription = SUBSCRIPTIONS_NAMES.TEAMS_MEMBER;
            isAdmin = false;
            statusDB = SubscriptionStatusDB.PAST_DUE;
          } else {
            status = SubscriptionStatus.FREE;
            subscription = SUBSCRIPTIONS_NAMES.FREE;
            interval = SUBSCRIPTIONS_INTERVALS.MONTH;
            isAdmin = false;
          }
        } else {
          status = SubscriptionStatus.FREE;
          subscription = SUBSCRIPTIONS_NAMES.FREE;
          interval = SUBSCRIPTIONS_INTERVALS.MONTH;
          isAdmin = false;
          if (customerData[FIELDS.TOTAL_USAGE] && customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) {
            usagePercentage = Math.min(
              100,
              Math.ceil((100 * customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) / FREE_USER_MAXIMUM_TOKENS)
            );
            // usagePercentage = 100;
          }
        }
      }
    }
    // allowedTeamMembers = 10;
    if (
      statusDB !== SubscriptionStatusDB.ACTIVE &&
      statusDB !== SubscriptionStatusDB.PAST_DUE &&
      statusDB !== SubscriptionStatusDB.TRIALING
    ) {
      status = SubscriptionStatus.FREE;
      subscription = SUBSCRIPTIONS_NAMES.FREE;
      interval = SUBSCRIPTIONS_INTERVALS.MONTH;
      isAdmin = false;
    }
    if (
      userPersonalStatusDB !== SubscriptionStatusDB.ACTIVE &&
      userPersonalStatusDB !== SubscriptionStatusDB.PAST_DUE &&
      userPersonalStatusDB !== SubscriptionStatusDB.TRIALING
    ) {
      hasTeamsPlan = false;
      allowedTeamMembers = 0;
      userPersonalSubscription = SUBSCRIPTIONS_NAMES.FREE;
    }
    const _isProUser = !!(
      status === SubscriptionStatus.PRO ||
      (statusDB && statusDB !== SubscriptionStatusDB.PAST_DUE)
    );

    return {
      error: null,
      status,
      usagePercentage,
      hasTeamsPlan,
      allowedTeamMembers,
      subscription,
      interval,
      isAdmin,
      userPersonalSubscription,
      subscriptionData,
      statusDB,
      userPersonalStatusDB,
      isProUser: _isProUser,
    };
  } catch (error: any) {
    EvyAILogger.log("ERROR", error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getSubscriptionStatus",
        },
      },
    });
    return {
      error,
      status: SubscriptionStatus.FREE,
      usagePercentage: 0,
      hasTeamsPlan: false,
      allowedTeamMembers: 0,
      subscription: SUBSCRIPTIONS_NAMES.FREE,
      interval: SUBSCRIPTIONS_INTERVALS.MONTH,
      isAdmin: false,
      userPersonalSubscription: SUBSCRIPTIONS_NAMES.FREE,
      subscriptionData: null,
      statusDB: null,
      userPersonalStatusDB: null,
    };
  }
};

export const getSubscriptionStatus2 = async () => {
  const userId = firebaseAuth.currentUser?.uid;
  // EvyAILogger.log({ userId });
  if (!userId)
    return {
      error: "Not signed in. Please sign in again.",
      status: SubscriptionStatus.FREE,
      usagePercentage: 0,
    };
  try {
    const subscriptionStatusSnapshot = await getDocs(
      query(
        collection(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${userId}/${COLLECTIONS.SUBSCRIPTIONS}`),
        where("status", "in", ["trialing", "active"])
      )
    );
    let status = SubscriptionStatus.FREE;
    let usagePercentage = 0;
    if (subscriptionStatusSnapshot.docs.length > 0) {
      const doc = subscriptionStatusSnapshot.docs[0];
      // EvyAILogger.log(doc.id, " => ", doc.data());
      status = SubscriptionStatus.PRO;
    }

    const customerDetailsSnapshot = await getDoc(doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${userId}`));
    if (customerDetailsSnapshot.exists()) {
      const customerData = customerDetailsSnapshot.data();
      if (status === SubscriptionStatus.FREE) {
        if (customerData[FIELDS.TOTAL_USAGE] && customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) {
          usagePercentage = Math.min(
            100,
            Math.ceil((100 * customerData[FIELDS.TOTAL_USAGE][FIELDS.TOTAL_TOKENS_COUNT]) / FREE_USER_MAXIMUM_TOKENS)
          );
        }
      } else {
        if (
          customerData[FIELDS.CURRENT_MONTH_STATS] &&
          customerData[FIELDS.CURRENT_MONTH_STATS][FIELDS.TOTAL_TOKENS_COUNT]
        ) {
          usagePercentage = Math.min(
            100,
            Math.ceil(
              (100 * customerData[FIELDS.CURRENT_MONTH_STATS][FIELDS.TOTAL_TOKENS_COUNT]) /
                PRO_USER_MAXIMUM_MONTHLY_USAGE
            )
          );
        }
      }
    }
    return {
      error: null,
      status,
      usagePercentage,
    };
  } catch (error: any) {
    // EvyAILogger.log("### error while getting docs from cache...");
    EvyAILogger.log({ error });
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getSubscriptionStatusv2",
        },
      },
    });
    return {
      error,
      status: SubscriptionStatus.FREE,
      usagePercentage: 0,
    };
  }
};

export const handleButtonInsertionException = async (data: any) => {
  try {
    const functionInstance = getFunctions(firebaseAPP);
    const functionRef = httpsCallable(functionInstance, "handleButtonInsertionException");
    const response = await functionRef({
      ...data,
      token: await firebaseAuth.currentUser?.getIdToken(),
      extension_version: chrome.runtime.getManifest().version,
    });
    // return { error: null, url: (response.data as any).url };
  } catch (error: any) {
    // EvyAILogger.log("### error while getCustomerSubscriptionPortalLink...");
    EvyAILogger.log("button insertion exception callable function error", { error });
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "handleButtonInsertionException",
        },
      },
    });
    // return { error, url: null };
  }
};

export const getCustomerSubscriptionPortalLink = async () => {
  try {
    const functionInstance = getFunctions(firebaseAPP);

    const functionRef = httpsCallable(functionInstance, "ext-firestore-stripe-payments-createPortalLink");
    const response = await functionRef({
      returnUrl: SHARE_EVY_AI_URL,
      locale: "auto", // Optional, defaults to "auto",
      token: await firebaseAuth.currentUser?.getIdToken(),
      extension_version: chrome.runtime.getManifest().version,
    });
    // EvyAILogger.log({ response });
    return { error: null, url: (response.data as any).url };
  } catch (error: any) {
    // EvyAILogger.log("### error while getCustomerSubscriptionPortalLink...");
    EvyAILogger.log({ error });
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getCustomerSubscriptionPortalLink",
        },
      },
    });
    return { error, url: null };
  }
};

export const addLinkedInProfile = async ({
  userId,
  profileUrl,
  linkedInProfileName,
  profileHeadline,
  profilePictureUrl,
  profileUrlSN,
  raw_full_profile_info_data,
  raw_profile_contact_info_data,
  isProUser,
  status,
}: {
  userId: string;
  profileUrl: string;
  linkedInProfileName: string;
  profileHeadline: string;
  profilePictureUrl: string;
  profileUrlSN: string;
  raw_full_profile_info_data: string;
  raw_profile_contact_info_data: string;
  isProUser: boolean;
  status: string;
}) => {
  try {
    const functionInstance = getFunctions(firebaseAPP);

    const functionRef = httpsCallable(functionInstance, "saveLinkedInProfileInDatabasev2");

    const response = await functionRef({
      userId,
      profileUrl,
      linkedInProfileName,
      profileHeadline,
      profilePictureUrl,
      profileUrlSN,
      raw_full_profile_info_data,
      raw_profile_contact_info_data,
      isProUser,
      status,
      token: await firebaseAuth.currentUser?.getIdToken(),
      extension_version: chrome.runtime.getManifest().version,
    });
    EvyAILogger.log({ response }, "addLinkedinProfile");
    return response;
  } catch (error: any) {
    // EvyAILogger.log("### error while getCustomerSubscriptionPortalLink...");
    EvyAILogger.log({ error });
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "addLinkedInProfile",
        },
      },
    });
    return error;
  }
};

export async function checkIfProfileExists(uid: string, targetProfileUrl: string) {
  try {
    const profilesRef = collection(firebaseDb, `saved_linkedin_profiles/${uid}/profiles`);
    const q = query(profilesRef, where("profileUrl", "==", targetProfileUrl));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    } else {
      return null;
    }
  } catch (error) {
    EvyAILogger.error("Error checking if profile exists:", error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "checkIfProfileExists",
        },
      },
    });
    throw error;
  }
}

export const fetchSingleData = async (id: string, collection: string) => {
  try {
    const docRef = doc(firebaseDb, `${collection}/${id}`);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      return {};
    }
  } catch (error) {
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "fetchSingleData",
        },
      },
    });
    return {};
  }
};

export const getUserSubscriptionData = async () => {
  try {
    const userId = await getCurrentUser();
    if (!userId) {
      return;
    }
    const customerRef = collection(firebaseDb, COLLECTIONS.CUSTOMERS);
    const subscriptionRef = collection(customerRef, userId.uid, COLLECTIONS.SUBSCRIPTIONS);

    const q = query(subscriptionRef);
    const querySnapshot = await getDocs(q);

    const subscriptionData: any = [];
    querySnapshot.forEach((doc) => {
      subscriptionData.push(doc.data());
    });
    return subscriptionData[subscriptionData.length - 1];
  } catch (error) {
    EvyAILogger.error("Error fetching data:", error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getUserSubscriptionData",
        },
      },
    });
  }
};

export async function deleteLinkedinProfile(profileUrl: string) {
  try {
    const user = await getCurrentUser();

    if (user) {
      const profilesCollection = collection(
        firebaseDb,
        `/${COLLECTIONS.SAVED_LINKEDIN_PROFILES}/${user.uid}/${COLLECTIONS.PROFILES}`
      );
      const q = query(profilesCollection, where("profileUrl", "==", profileUrl));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const profileId = querySnapshot.docs[0].id;
        await deleteDoc(
          doc(firebaseDb, `/${COLLECTIONS.SAVED_LINKEDIN_PROFILES}/${user.uid}/${COLLECTIONS.PROFILES}`, profileId)
        ).then((data) => {
          // EvyAILogger.log(data, "data");
        });
        // EvyAILogger.log(`Profile with URL ${profileUrl} deleted successfully`);
      } else {
        // EvyAILogger.log("No profile found with the given URL.");
      }
    }
  } catch (error) {
    EvyAILogger.log(error, "error");
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "deleteLinkedInProfile",
        },
      },
    });
    throw error;
  }
}

export async function getProfileListsByUrl(profileUrl: string) {
  try {
    const user = await getCurrentUser();

    if (user) {
      const profilesCollection = collection(
        firebaseDb,
        `/${COLLECTIONS.SAVED_LINKEDIN_PROFILES}/${user.uid}/${COLLECTIONS.PROFILES}`
      );
      const q = query(profilesCollection, where("profileUrl", "==", profileUrl));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const profileData = querySnapshot.docs[0].data();
        return profileData.lists || [];
      } else {
        // EvyAILogger.log("No profile found with the given URL.");
        return [];
      }
    }
  } catch (err) {
    EvyAILogger.log("Error:", err);
    sentryClient.captureException(err, {
      captureContext: {
        extra: {
          functionName: "getProfileListsByUrl",
        },
      },
    });
    return [];
  }
}

export async function handleGetUserLists() {
  try {
    const user = await getCurrentUser();
    if (user) {
      const listsRef = query(
        collection(firebaseDb, `/${COLLECTIONS.SAVED_LINKEDIN_PROFILES}/${user.uid}/${COLLECTIONS.LISTS}`),
        orderBy("modifiedDate", "desc")
      );

      const querySnapshot = await getDocs(listsRef);
      const listsArr = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return listsArr;
    }
  } catch (err) {
    EvyAILogger.log("Error:", err);
  }
}

export async function updateProfileToLists(listId: string, profileUrl: string) {
  try {
    const user = await getCurrentUser();

    if (user) {
      const profilesCollection = collection(
        firebaseDb,
        `/${COLLECTIONS.SAVED_LINKEDIN_PROFILES}/${user.uid}/${COLLECTIONS.PROFILES}`
      );
      const q = query(profilesCollection, where("profileUrl", "==", profileUrl));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const profileData = querySnapshot.docs[0].data();
        const profileId = querySnapshot.docs[0].id;
        let updatedLists = profileData.lists || [];
        if (updatedLists.includes(listId)) {
          updatedLists = updatedLists.filter((id: string) => id !== listId);
        } else {
          updatedLists.push(listId);
        }

        const profileRef = doc(
          firebaseDb,
          `/${COLLECTIONS.SAVED_LINKEDIN_PROFILES}/${user.uid}/${COLLECTIONS.PROFILES}`,
          profileId
        );
        await updateDoc(profileRef, {
          lists: updatedLists,
        });
      } else {
        // EvyAILogger.log("No profile found with the given URL.");
      }
    }
  } catch (err) {
    EvyAILogger.log("Error:", err);
    sentryClient.captureException(err, {
      captureContext: {
        extra: {
          functionName: "updateProfileToLists",
        },
      },
    });
  }
}

export const addUserReview = async (reviewText: string, rating: number) => {
  try {
    const user = await getCurrentUser();
    // EvyAILogger.log(user, "user");
    if (!user) {
      throw new Error("User not found!");
    }

    const customerDetailsSnapshot = await getDoc(doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${user.uid}`));
    if (customerDetailsSnapshot.exists()) {
      const customerData = customerDetailsSnapshot.data();

      const userReviewsRef = collection(firebaseDb, COLLECTIONS.MANUAL_REVIEWS);
      await addDoc(userReviewsRef, {
        userId: user.uid,
        email: user.email,
        timeStamp: serverTimestamp(),
        reviewText: reviewText,
        rating: rating,
        userName: customerData?.first_name + " " + customerData?.last_name || "",
      });
    }

    return {
      isSuccess: true,
    };
  } catch (err) {
    EvyAILogger.error("Error while adding data:", err);
  }
};

function serializeDocSnapshot(doc: QueryDocumentSnapshot) {
  return {
    ...doc,
    id: doc.id,
    data: doc.data(),
    metadata: {
      hasPendingWrites: doc.metadata.hasPendingWrites,
      fromCache: doc.metadata.fromCache,
    },
  };
}

async function deserializeTemplateDocSnapshot(userId: string, serializedDoc: any) {
  const docRef = doc(firebaseDb, `${COLLECTIONS.TEMPLATES}/${userId}/${COLLECTIONS.TEMPLATES}`, serializedDoc.id);

  const snapshot = await getDoc(docRef);

  return snapshot;
}

async function deserializePersonaDocSnapshot(userId: string, serializedDoc: any) {
  const docRef = doc(firebaseDb, `${COLLECTIONS.PERSONAS}/${userId}/${COLLECTIONS.PERSONAS}`, serializedDoc.id);

  const snapshot = await getDoc(docRef);

  return snapshot;
}

export const getSinglePersona = async (user: User | null, personaId: string) => {
  let userId: any;
  if (user) {
    userId = user.uid;
    if (!userId) return null;
  } else {
    userId = firebaseAuth.currentUser?.uid;
    if (!userId) return null;
  }
  try {
    const personasCollectionRef = collection(firebaseDb, `${COLLECTIONS.PERSONAS}/${userId}/${COLLECTIONS.PERSONAS}`);
    const personasDocRef = doc(personasCollectionRef, personaId);
    const personaSnapshot = await getDoc(personasDocRef);
    if (personaSnapshot.exists()) {
      const personaDocId = personaSnapshot.id;
      const persona: IPersona = { id: personaDocId, ...personaSnapshot.data() } as IPersona;
      return persona;
    }
    return null;
  } catch (error: any) {
    EvyAILogger.log("error while fetching personas", error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getSinglePersona",
        },
      },
    });
    return null;
  }
};

export const getPersonas = async (
  user: User | null,
  previousLastDoc: any | null,
  page: number,
  existingPersonas: IPersona[],
  isLoading: boolean
) => {
  let userId: any;
  if (user) {
    userId = user.uid;
    if (!userId) return [];
  } else {
    userId = firebaseAuth.currentUser?.uid;
    if (!userId) return [];
  }
  try {
    if (isLoading) {
      return { data: [], lastDoc: null, hasMoreDocs: true };
    }
    const pageSize = PAGINATION_LIMITS.PERSONAS;
    let lastDocSnapshot: DocumentSnapshot | null = null;
    if (previousLastDoc) {
      lastDocSnapshot = await deserializePersonaDocSnapshot(userId, previousLastDoc);
    }
    const queryToGetDocs = query(
      collection(firebaseDb, `${COLLECTIONS.PERSONAS}/${userId}/${COLLECTIONS.PERSONAS}`),
      orderBy(FIELDS.PERSONA_NAME, FIREBASE_ORDER_BY_FIELDS.ASCENDING),
      orderBy(FIELDS.__NAME__, FIREBASE_ORDER_BY_FIELDS.ASCENDING),
      ...(page > 1 && lastDocSnapshot ? [startAfter(lastDocSnapshot)] : []),
      limit(pageSize + 1)
    );
    const personasSnapshot = await getDocs(queryToGetDocs);
    const docs = personasSnapshot.docs;
    const hasMoreDocs = docs.length > pageSize;
    const lastDocToSend = hasMoreDocs ? docs[pageSize - 1] : docs[docs.length - 1];
    const lastDoc = serializeDocSnapshot(lastDocToSend);
    const personasSet = new Set<string>();
    const personas: IPersona[] = [];
    if (page > 1) {
      existingPersonas.forEach((persona: IPersona) => {
        personasSet.add(persona.id);
      });
    }
    const data = docs.slice(0, hasMoreDocs ? pageSize : docs.length).map((personaDoc) => {
      if (!personasSet.has(personaDoc.id)) {
        personasSet.add(personaDoc.id);
        personas.push({
          id: personaDoc.id,
          ...personaDoc.data(),
        } as IPersona);
      }
    });
    return { data: personas, lastDoc, hasMoreDocs };
  } catch (error: any) {
    EvyAILogger.log("error while fetching personas", error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getPersonas",
        },
      },
    });
    return { data: [], lastDoc: null, hasMoreDocs: false };
  }
};

export const searchPersonas = async (
  user: User | null,
  previousLastDoc: any | null,
  page: number,
  search: string,
  existingPersonas: IPersona[],
  isLoading: boolean
) => {
  let userId: any;
  if (user) {
    userId = user.uid;
    if (!userId) return [];
  } else {
    userId = firebaseAuth.currentUser?.uid;
    if (!userId) return [];
  }
  try {
    // if (isLoading) {
    //   return {data: [], lastDoc: null, hasMoreDocs: true};
    // }
    const pageSize = page === 1 ? PAGINATION_LIMITS.PERSONAS_SEARCH + 1 : PAGINATION_LIMITS.PERSONAS_SEARCH;
    const normalizedSearch = search;
    let lastDocSnapshot: DocumentSnapshot | null = null;
    if (previousLastDoc) {
      lastDocSnapshot = await deserializePersonaDocSnapshot(userId, previousLastDoc);
    }
    let queryToGetDocs = query(
      collection(firebaseDb, `${COLLECTIONS.PERSONAS}/${userId}/${COLLECTIONS.PERSONAS}`),
      where(FIELDS.PERSONA_NAME, ">=", normalizedSearch),
      where(FIELDS.PERSONA_NAME, "<=", normalizedSearch + "\uf8ff"),
      orderBy(FIELDS.PERSONA_NAME, FIREBASE_ORDER_BY_FIELDS.ASCENDING),
      orderBy(FIELDS.__NAME__, FIREBASE_ORDER_BY_FIELDS.ASCENDING),
      ...(page > 1 && lastDocSnapshot ? [startAfter(lastDocSnapshot)] : []),
      limit(pageSize + 1)
    );
    const personasSnapshot = await getDocs(queryToGetDocs);
    const docs = personasSnapshot.docs;
    const hasMoreDocs = docs.length > pageSize;
    const lastDocToSend = hasMoreDocs ? docs[pageSize - 1] : docs[docs.length - 1];
    const lastDoc = lastDocToSend ? serializeDocSnapshot(lastDocToSend) : null;
    const personasSet = new Set<string>();
    const personas: IPersona[] = [];
    if (page > 1) {
      existingPersonas.forEach((persona: IPersona) => {
        personasSet.add(persona.id);
      });
    }
    const data = docs.slice(0, hasMoreDocs ? pageSize : docs.length).map((personaDoc) => {
      if (!personasSet.has(personaDoc.id)) {
        personasSet.add(personaDoc.id);
        personas.push({
          id: personaDoc.id,
          ...personaDoc.data(),
        } as IPersona);
      }
    });
    return { data: personas, lastDoc, hasMoreDocs };
  } catch (error: any) {
    EvyAILogger.log("error while searching personas", error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "searchPersonas",
        },
      },
    });
    return { data: [], lastDoc: null, hasMoreDocs: false };
  }
};

export const getTemplates = async (
  user: User | null,
  previousLastDoc: any | null,
  page: number,
  existingTemplates: ITemplate[],
  isLoading: boolean
) => {
  let userId: any;
  if (user) {
    userId = user.uid;
    if (!userId) return [];
  } else {
    userId = firebaseAuth.currentUser?.uid;
    if (!userId) return [];
  }
  try {
    if (isLoading) {
      return { data: [], lastDoc: null, hasMoreDocs: true };
    }
    const pageSize = PAGINATION_LIMITS.TEMPLATES;
    let lastDocSnapshot: DocumentSnapshot | null = null;
    if (previousLastDoc) {
      lastDocSnapshot = await deserializeTemplateDocSnapshot(userId, previousLastDoc);
    }
    const queryToGetDocs = query(
      collection(firebaseDb, `${COLLECTIONS.TEMPLATES}/${userId}/${COLLECTIONS.TEMPLATES}`),
      orderBy(FIELDS.TIMESTAMP, FIREBASE_ORDER_BY_FIELDS.DESCENDING),
      orderBy(FIELDS.__NAME__, FIREBASE_ORDER_BY_FIELDS.DESCENDING),
      ...(page > 1 && lastDocSnapshot ? [startAfter(lastDocSnapshot)] : []),
      limit(pageSize + 1)
    );
    const personasSnapshot = await getDocs(queryToGetDocs);
    const docs = personasSnapshot.docs;
    const hasMoreDocs = docs.length > pageSize;
    const lastDocToSend = hasMoreDocs ? docs[pageSize - 1] : docs[docs.length - 1];
    const lastDoc = serializeDocSnapshot(lastDocToSend);
    const templatesSet = new Set<string>();
    const templates: ITemplate[] = [];
    if (page > 1) {
      existingTemplates.forEach((template: ITemplate) => {
        templatesSet.add(template.id);
      });
    }
    docs.slice(0, hasMoreDocs ? pageSize : docs.length).map((templateDoc) => {
      if (!templatesSet.has(templateDoc.id)) {
        templatesSet.add(templateDoc.id);
        templates.push({
          id: templateDoc.id,
          ...templateDoc.data(),
        } as ITemplate);
      }
    });
    return { data: templates, lastDoc, hasMoreDocs };
  } catch (error: any) {
    EvyAILogger.log("error while fetching templates", error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "getTemplates",
        },
      },
    });
    return { data: [], lastDoc: null, hasMoreDocs: false };
  }
};

export const searchTemplates = async (
  user: User | null,
  previousLastDocs: { lastNameDoc: any | null; lastContentDoc: any | null },
  page: number,
  search: string,
  existingTemplates: ITemplate[],
  isLoading: boolean
) => {
  let userId: any;
  if (user) {
    userId = user.uid;
    if (!userId) return [];
  } else {
    userId = firebaseAuth.currentUser?.uid;
    if (!userId) return [];
  }
  try {
    // if (isLoading) {
    //   return {data: [], lastDoc: null, hasMoreDocs: true};
    // }
    const pageSize = PAGINATION_LIMITS.TEMPLATES_SEARCH;
    const normalizedSearch = search;

    let templateNamelastDocSnapshot: DocumentSnapshot | null = null;
    let templateContentlastDocSnapshot: DocumentSnapshot | null = null;
    if (previousLastDocs.lastNameDoc) {
      templateNamelastDocSnapshot = await deserializeTemplateDocSnapshot(userId, previousLastDocs.lastNameDoc);
    }
    if (previousLastDocs.lastContentDoc) {
      templateContentlastDocSnapshot = await deserializeTemplateDocSnapshot(userId, previousLastDocs.lastContentDoc);
    }
    let templateNameQuery = query(
      collection(firebaseDb, `${COLLECTIONS.TEMPLATES}/${userId}/${COLLECTIONS.TEMPLATES}`),
      where(FIELDS.TEMPLATE_NAME, ">=", normalizedSearch),
      where(FIELDS.TEMPLATE_NAME, "<=", normalizedSearch + "\uf8ff"),
      orderBy(FIELDS.TEMPLATE_NAME, FIREBASE_ORDER_BY_FIELDS.ASCENDING),
      orderBy(FIELDS.__NAME__, FIREBASE_ORDER_BY_FIELDS.ASCENDING),
      ...(page > 1 && templateNamelastDocSnapshot ? [startAfter(templateNamelastDocSnapshot)] : []),
      limit(pageSize + 1)
    );

    let templateContentQuery = query(
      collection(firebaseDb, `${COLLECTIONS.TEMPLATES}/${userId}/${COLLECTIONS.TEMPLATES}`),
      where(FIELDS.TEMPLATE_CONTENT, ">=", normalizedSearch),
      where(FIELDS.TEMPLATE_CONTENT, "<=", normalizedSearch + "\uf8ff"),
      orderBy(FIELDS.TEMPLATE_CONTENT, FIREBASE_ORDER_BY_FIELDS.ASCENDING),
      orderBy(FIELDS.__NAME__, FIREBASE_ORDER_BY_FIELDS.ASCENDING),
      ...(page > 1 && templateContentlastDocSnapshot ? [startAfter(templateContentlastDocSnapshot)] : []),
      limit(pageSize + 1)
    );
    const templateNameDocsSnapshot = await getDocs(templateNameQuery);
    const templateContentDocsSnapshot = await getDocs(templateContentQuery);
    const templateNameDocs = templateNameDocsSnapshot.docs;
    const templateContentDocs = templateContentDocsSnapshot.docs;
    const hasMoreNameDocs = templateNameDocs.length > pageSize;
    const hasMoreContentDocs = templateContentDocs.length > pageSize;
    const lastNameDocToSend = hasMoreNameDocs
      ? templateNameDocs[pageSize - 1]
      : templateNameDocs[templateNameDocs.length - 1];
    const lastContentDocToSend = hasMoreContentDocs
      ? templateContentDocs[pageSize - 1]
      : templateContentDocs[templateContentDocs.length - 1];
    const lastNameDoc = lastNameDocToSend ? serializeDocSnapshot(lastNameDocToSend) : null;
    const lastContentDoc = lastContentDocToSend ? serializeDocSnapshot(lastContentDocToSend) : null;
    const templatesSet = new Set<string>();
    const templates: ITemplate[] = [];
    if (page > 1) {
      existingTemplates.forEach((template: ITemplate) => {
        templatesSet.add(template.id);
        templates.push(template);
      });
    }
    templateNameDocs.slice(0, hasMoreNameDocs ? pageSize : templateNameDocs.length).map((document) => {
      const templateData = document.data() as ITemplate;
      const templateId = document.id;
      if (!templatesSet.has(templateId)) {
        templatesSet.add(templateId);
        templates.push({ ...templateData, id: templateId });
      }
    });
    templateContentDocs.slice(0, hasMoreContentDocs ? pageSize : templateContentDocs.length).map((document) => {
      const templateData = document.data() as ITemplate;
      const templateId = document.id;
      if (!templatesSet.has(templateId)) {
        templatesSet.add(templateId);
        templates.push({ ...templateData, id: templateId });
      }
    });
    return {
      data: templates,
      lastDocs: { lastNameDoc, lastContentDoc },
      hasMoreDocs: { hasMoreNameDocs, hasMoreContentDocs },
    };
  } catch (error: any) {
    EvyAILogger.log("error while searching templates", error);
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "searchTemplates",
        },
      },
    });
    return {
      data: [],
      lastDocs: { lastNameDoc: null, lastContentDoc: null },
      hasMoreDocs: { hasMoreNameDocs: false, hasMoreContentDocs: false },
    };
  }
};

export const addQuestionOrIssues = async (question: string) => {
  try {
    const user = await getCurrentUser();
    if (!user) {
      throw new Error("User not found!");
    }

    const customerDetailsSnapshot = await getDoc(doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${user.uid}`));

    if (customerDetailsSnapshot.exists()) {
      const customerData = customerDetailsSnapshot.data();
      const questionRef = collection(firebaseDb, `${COLLECTIONS.QUESTIONS}/${user.uid}/${COLLECTIONS.USER_QUERIES}`);
      await addDoc(questionRef, {
        question,
        timestamp: serverTimestamp(),
        email: user.email,
        userName: customerData?.first_name + " " + customerData?.last_name || "",
      });
    }
  } catch (error) {
    EvyAILogger.log(error, "err!");
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "addQuestionOrIssues",
        },
      },
    });
    throw new Error(error as string);
  }
};
