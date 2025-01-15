import React, { Children, useCallback, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Box,
  Button,
  Flex,
  Image,
  LoadingOverlay,
  MantineProvider,
  MantineThemeOverride,
  createEmotionCache,
} from "@mantine/core";
import { Router } from "react-chrome-extension-router";
import { FiMessageSquare } from "react-icons/fi";
import browser from "webextension-polyfill";
import { AiOutlineQuestion } from "react-icons/ai";

import Login from "../../ContentScript/Pages/Login";
import useStyles from "./layout.style";
import {
  API_REQUEST_TYPE,
  ArticleInfo,
  AuthenticationState,
  GLOBAL_STYLES,
  isLinkedInArticlePage,
  LinkedInMessage,
  Message,
  MESSAGE_ACTION,
  PAGE_TO_OPEN_IN_TAB,
  POST_COMMENT_SOURCE_PAGE,
  Profile,
  ProfileEducation,
  ProfileExperience,
  ProfileLicensesAndCertificatioins,
  RecommendationInfo,
  STORAGE_KEYS,
  SubscriptionStatus,
  isFeedPage,
  isLinkedInProfilePage,
  isLinkedInProfilePageContect,
  isLinkedInSNProfilePage,
  isLinkedInNewsletterPage,
  removeEmojis,
  IUser,
  SubScriptionStaus_Type,
} from "../../Config";
import Register from "../Pages/Register";
import { AuthenticationHeader } from "../Components";
import { useUrlChange } from "../Hooks/useUrlChange";
import { User } from "firebase/auth";
import { randomDelay } from "../../Utils/extensionUtils";
import { resetSavedRegisterData, sendMessageToExtensionPages } from "../../Utils/extensionUtils";
import Authenticated from "../Pages/Authenticated";
import VerifyEmail from "../Pages/VerifyEmail";
import ForgotPassword from "../Pages/ForgotPassword";
import { AuthenticationFooter } from "../Components/AuthenticationFooter";
import SendVerificationCodeToPhone from "../Pages/SendVerificationCodeToPhone";
import { CHROME_STORAGE_KEYS, CLASS_NAMES, LOCAL_STORAGE_KEYS, PAGE_PATH } from "../../LinkedInParser/constants";
import {
  getArticleInfo,
  getConnectingUserNameFromSearch,
  getCurrentUserName,
  getCurrentUserNameFromMessageList,
  getEducationFromProfilePage,
  getEducationFromSalesProfilePage,
  getExperiencesFromProfilePage,
  getExperiencesFromSalesProfilePage,
  getLastMessageOfOtherUser,
  getLastMessages,
  getLicensesAndCertificationsFromProfilePage,
  getNameFromProfilePage,
  getNameFromProfilePageOfSales,
  getNewLetterHeadline,
  getNewsLetterAuthorName,
  getOtherUserNameOnMessagePage,
  getOtherUserNameOnSalesMessagePage,
  getPostAndCommentInfoIfExists,
  getPostAndCommentInfoIfExistsInRepost,
  getPreviousMessageOfSalesPage,
  getProfileImageUrl,
  getProfileInfoFromIntroEditForm,
  getProfileUrl,
  getProfileUrl_Top,
  getRecommendationInfo,
  getTaglineFromProfilePage,
  getTaglineFromSalesProfilePage,
  // handleButtonInsertionException
} from "../../LinkedInParser";
import InputPopup, { IPersona, ITemplate } from "../Pages/InputPopup";
import * as BrowserStorage from "../../Utils/storage";
import MyAccount from "../Pages/MyAccount";
import QuestionsAndIssues from "../Pages/QuestionAndIssues";
import Setting from "../Pages/Setting";
import ManageSubscription from "../Pages/ManageSubscription";
import { BsPerson } from "react-icons/bs";
import UpgradePlan from "../Pages/UpgradePlan";
import { getFunctions, httpsCallable } from "firebase/functions";
import _ from "lodash";
import {
  extractLinkedInProfile,
  getImagePath,
  relationshipSelectElementExists,
  sleep,
  validateLinkedRecommendationInUrl,
} from "../../Utils";
import ShareWithFriends from "../Pages/ShareWithFriends";
import LimitReachedDialog from "../Components/LimitReachedDialog/LimitReachedDialog";
import { FeedContainer } from "../Components/LindinComponents/FeedContainer";
import { SaveProfile } from "../Components/SaveProfiles";
import GotoUserProfileDialog from "../Components/GotoUserProfileDialog/GotoUserProfileDialog";

import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { COLLECTIONS, updateUserLastActiveTime } from "../../firebase/firebase";
import { sentryClient } from "../../Sentry/sentryClient";
import { EvyAILogger } from "../../Utils/EvyAILogger";
import { firebaseDb } from "../../firebase2/firebaseClient";

const mutationConfig = { childList: true, subtree: true };

const Layout = () => {
  const { classes } = useStyles();
  const [showHeaderButtons, setShowHeaderButtons] = useState(true);
  const [disableAccountButtons, setDisableAccountButtons] = useState(true);

  const [isCheckingUserAuthStatus, setIsCheckingUserAuthStatus] = useState(true);
  const [willShowLoginPopup, setWillShowLoginPopup] = useState(false);
  const [authenticationState, setAuthenticationState] = useState<AuthenticationState>(AuthenticationState.Login);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [loggedInFetchedUser, setLoggedInFetchedUser] = useState<IUser | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [willShowPopup, setWillShowPopup] = useState(false);
  const [willDoActionAfterLogIn, setWillDoActionAfterLogIn] = useState(false);
  const [selectedCommentBoxId, setSelectedCommentBoxId] = useState("");
  const [selectedMessageBoxContainer, setSelectedMessageBoxContainer] = useState<HTMLElement | null>(null);
  const [postText, setPostText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentAuthorName, setCommentAuthorName] = useState("");
  // const [lastMessage, setLastMessage] = useState('');
  const [lastMessages, setLastMessages] = useState<LinkedInMessage[]>([]);
  const [postCommentSourcePage, setPostCommentSourcePage] = useState(POST_COMMENT_SOURCE_PAGE.HOME);
  const [apiRequestType, setApiRequestType] = useState(API_REQUEST_TYPE.POST_COMMENT);
  const [screenIsLoading, setScreenIsLoading] = useState(false);
  const [isSigningInWithGoogle, setIsSigningInWithGoogle] = useState(false);
  const [postCreationTextContainer, setPostCreationTextContainer] = useState<HTMLElement | null>(null);
  const [postCreationText, setPostCreationText] = useState("");

  const [invitationNoteTextArea, setInvitationNoteTextArea] = useState<HTMLInputElement | null>(null);
  const [userEnteredInvitationNote, setUserEnteredInvitationNote] = useState("");
  const [connectingUserName, setConnectingUserName] = useState("");
  const [connectingUserTagline, setConnectingUserTagline] = useState("");
  const [connectingUserExperiences, setConnectingUserExperiences] = useState<ProfileExperience[]>([]);
  const [profileHeadlineTextInput, setProfileHeadlineTextInput] = useState<HTMLInputElement | null>(null);
  const [profileFirstName, setProfileFirstName] = useState("");
  const [profileLastName, setProfileLastName] = useState("");
  const [profileCurrentPosition, setProfileCurrentPosition] = useState("");
  const [profileHeadline, setProfileHeadline] = useState("");
  const [profileName, setProfileName] = useState("");
  const [perpectiveBoxId, setPerpectiveBoxId] = useState("");
  const [perpectiveInfo, setPerpectiveInfo] = useState<any>({});
  const [isProfileSaved, setIsProfileSaved] = useState(false);
  const [profileExperiences, setProfileExperiences] = useState<ProfileExperience[]>([]);
  const [profileEducation, setProfileEducation] = useState<ProfileEducation[]>([]);
  const [profileLicensesAndCertifications, setProfileLicensesAndCertifications] = useState<
    ProfileLicensesAndCertificatioins[]
  >([]);
  const [profileAboutTextArea, setProfileAboutTextArea] = useState<HTMLTextAreaElement | null>(null);
  const [profileAboutText, setProfileAboutText] = useState("");
  const [articleInfo, setArticleInfo] = useState<ArticleInfo | null>(null);
  const [recommendationTextArea, setRecommendationTextArea] = useState<HTMLTextAreaElement | null>(null);
  const [userEnteredRecommendationText, setUserEnteredRecommendationText] = useState("");
  const [recommendationInfo, setRecommendationInfo] = useState<RecommendationInfo | null>(null);
  const [currentLinkedInUserName, setCurrentLinkedInUserName] = useState("");
  const [currentLinkedInUserURL, setCurrentLinkedInUserURL] = useState("");
  const [generateLIURL, setGenerateLIURL] = useState("");
  const [emailVerifiedCheckerTimerId, setEmailVerifiedCheckerTimerId] = useState<NodeJS.Timeout | null>(null);
  const [isComponentUnmounted, setIsComponentUnmounted] = useState(false);
  const [showLimitEndPopup, setShowLimitEndPopup] = useState<boolean>(false);
  const [showRecommendDialog, setShowRecommendDialog] = useState(false);
  const [currentPathHref, setCurrentPathHref] = useState("");
  const [userDataSnapShot, setUserDataSnapShot] = useState<CollectionReference | null>(null);
  const [templates, setTemplates] = useState<ITemplate[]>([]);
  const [readyToListen, setReadyToListen] = useState(false);
  const [fullSubscriptionStatus, setFullSubscriptionStatus] = useState<SubScriptionStaus_Type>();
  const [teamInvites, setTeamInvites] = useState<any[]>([]);
  const [exceptionCallable, setexceptionCallable] = useState<boolean>(true);
  const [articleResponseError, setArticleResponseError] = useState(false);
  const [lastTemplateDoc, setLastTemplateDoc] = useState<any | null>(null);
  const [pageForTemplates, setPageForTemplates] = useState(1);
  const [hasMoreTemplates, setHasMoreTemplates] = useState(false);
  const [lastPersonaDoc, setLastPersonaDoc] = useState<any | null>(null);
  const [pageForPersonas, setPageForPersonas] = useState(1);
  const [hasMorePersonas, setHasMorePersonas] = useState(false);
  const [personas, setPersonas] = useState<IPersona[]>([]);
  const [personasFetched, setPersonasFetched] = useState(false);
  const [templatesFetched, setTemplatesFetched] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const targetNode = document.body;
  const currentUrl = useUrlChange();
  const isProfilePath = window.location.pathname;
  const isPostPath = window.location.pathname.includes(PAGE_PATH.POSTS);
  localStorage.removeItem("E_C");
  const isFeedUpdatePath = window.location.pathname.includes(PAGE_PATH.FEEDUPDATE);

  const authenticationStatesToShowHeaderAndFooter = useMemo(
    () => [AuthenticationState.Login, AuthenticationState.Register],
    []
  );

  const willShowAuthenticationHeaderAndFooter = useMemo(
    () => authenticationStatesToShowHeaderAndFooter.includes(authenticationState),
    [authenticationState]
  );

  const getCurrentUser = async () => {
    const currentUser = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_USER_AUTH_STATE);

    if (currentUser) {
      // setAuthenticationState(AuthenticationState.Authenticated)
      localStorage.setItem(LOCAL_STORAGE_KEYS.LOGGED_IN, String(true));
      // saveCurrentSessionId(currentUser.uid)
      setLoggedInUser(currentUser);
      onAuthUserChanged(currentUser);
    }else {
      localStorage.setItem(LOCAL_STORAGE_KEYS.LOGGED_IN, String(true));
      setLoggedInUser(null);
      onAuthUserChanged(null);
    }
  };

  const doInitialCurrentUserStateChecking = async () => {
    await getCurrentUser();
    const willShowRegisterScreen = (await BrowserStorage.getItem(STORAGE_KEYS.WILL_SHOW_REGISTER_SCREEN)) ?? false;
    // EvyAILogger.log({ willShowRegisterScreen });
    if (willShowRegisterScreen) {
      // EvyAILogger.log("### AuthenticationState.Register 1");
      setAuthenticationState(AuthenticationState.Register);
    }
  };

  const fetchTeamInvites = async (userId: string) => {
    try {
      const teamInvitesCollectionRef = collection(
        firebaseDb,
        `${COLLECTIONS.CUSTOMERS}/${userId}/${COLLECTIONS.TEAM_INVITES}`
      );
      const teamInvitesSnapshot = await getDocs(teamInvitesCollectionRef);
      const teamInvitesDB = teamInvitesSnapshot.docs.map((invite) => ({ id: invite.id, ...invite.data() }));
      setTeamInvites(teamInvitesDB);
      EvyAILogger.log("team invites", teamInvitesDB);
      return teamInvitesDB;
    } catch (error) {
      EvyAILogger.error(error);
      // ignore because its flooding sentry 
      // sentryClient.captureException(error, {
      //   captureContext: {
      //     extra: {
      //       functionName: "fetchTeamInvites",
      //     },
      //   },
      // });
    }
  };

  const fetchUserDataById = async (id: string) => {
    try {
      const docRef: DocumentReference<DocumentData> = doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${id}`);
      const customersCollectionRef = collection(firebaseDb, `${COLLECTIONS.CUSTOMERS}`);
      setUserDataSnapShot(customersCollectionRef);
      // setUserDataSnapShot(docRef)
      const invites = await fetchTeamInvites(id);
      EvyAILogger.log("invites from user function", invites);

      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        return docSnapshot.data() as IUser;
      }

      return null;
    } catch (error) {
      EvyAILogger.error(error);
      // ignore because its flooding sentry 
      // sentryClient.captureException(error, {
      //   captureContext: {
      //     extra: {
      //       functionName: "fetchUserDataById",
      //     },
      //   },
      // });
    }
  };

  // const saveCurrentSessionId = async (userId: string) => {

  //   const currentUser = await fetchUserDataById(userId)
  //   if (currentUser) {
  //     const { currentSessionId } = currentUser;
  //     // localStorage.setItem("C_S_ID", currentSessionId + "_" + currentUser.userId)
  //     localStorage.setItem("C_S_ID", currentSessionId)
  //     localStorage.setItem("C_U_", currentUser.userId)

  //   }
  // };

  // const saveCurrentUserId = async (userId: string) => {
  //   const currentUser = await fetchUserDataById(userId)
  //   if (currentUser) {
  //   localStorage.setItem("C_U_", currentUser.userId)
  //   }
  // };

  // const handleStorageChange = async (event: StorageEvent) => {

  //   let currentUser: IUser | null | undefined;
  //   const currentUser2 = await sendMessageToExtensionPages(
  //     MESSAGE_ACTION.GET_USER_AUTH_STATE
  //   );
  //   if (currentUser2) {
  //     currentUser = await fetchUserDataById(currentUser2.uid)
  //   }
  //   if (event.key === 'C_S_ID') {
  //     if (event.oldValue) {
  //       if (currentUser) {
  //         if (event.oldValue === currentUser.currentSessionId) {
  //           // saveCurrentSessionId(currentUser.userId)
  //         } else {
  //           localStorage.setItem(event.key, event.oldValue)
  //         }
  //       }
  //     }
  //   } else if (event.key === 'C_U_') {
  //     if (event.oldValue) {
  //       if (currentUser) {
  //         if (event.oldValue === currentUser.userId) {
  //           // saveCurrentUserId(currentUser.userId)
  //         } else {
  //           localStorage.setItem(event.key, event.oldValue)
  //         }
  //       }
  //     }
  //   }
  // };

  // window.addEventListener('storage', handleStorageChange);

  // useEffect(() => {
  //   EvyAILogger.log("Templatesssssss", templates);

  // }, [templates])

  useEffect(() => {
    let unsubscribe: any = null;
    if (loggedInFetchedUser && userDataSnapShot) {
      const currentUserId = loggedInFetchedUser.userId || loggedInFetchedUser.uid;
      const previousSessionId = loggedInFetchedUser.currentSessionId;

      unsubscribe = onSnapshot(userDataSnapShot, async (snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          const userDocId = change.doc.id;

          if (userDocId === currentUserId) {
            const newDocData: IUser = change.doc.data() as IUser;
            if (change.type === "modified") {
              // EvyAILogger.log("PREVIOUS DOCUMENT", previousSessionId);
              // EvyAILogger.log("NEW DOCUMENT", newDocData?.currentSessionId);

              if (newDocData && newDocData.currentSessionId !== previousSessionId) {
                await sendMessageToExtensionPages(MESSAGE_ACTION.SIGN_OUT, { webSignOut: false });
              }
            }
          }
        });
      });

      return () => {
        if (unsubscribe) {
          unsubscribe();
        }
      };
    }
  }, [userDataSnapShot]);

  useEffect(() => {
    let unsubscribe: any = null;
    const getChangeInDoc = async (fetchedUser: IUser | null) => {
      if (!fetchedUser) {
        return;
      }
      const currentUserId = fetchedUser.userId || fetchedUser.uid;
      if (!currentUserId) return;
      try {
        const userDocRef = doc(firebaseDb, `${COLLECTIONS.CUSTOMERS}/${currentUserId}`);
        unsubscribe = onSnapshot(userDocRef, async (docSnapshot) => {
          if (docSnapshot.exists()) {
            const newDocData = docSnapshot.data();
            const newTeams: string[] = newDocData.memberInTeams;
            const previousTeams = fetchedUser.memberInTeams;
            // EvyAILogger.log("NEW TEAMS", newTeams);
            // EvyAILogger.log("PREVIOUS TEAMS", previousTeams);
            const userToSet: IUser = { ...fetchedUser, memberInTeams: newTeams };
            // EvyAILogger.log("userToSet", userToSet);
            // if (newTeams === undefined && previousTeams === undefined) {
            //   fetchCurrentSubscriptionStatus()
            //   // await getSubscriptionStatus()
            //   // fetchUserDataById(currentUserId)
            //   return;
            // } else if (previousTeams !== undefined && (newTeams.length === previousTeams.length)) {
            //     if (newTeams.length !== 0 && previousTeams.length !== 0) {
            //       const isSame = newTeams.every((id: string) => previousTeams.includes(id))
            //       if (!isSame) {
            //       // EvyAILogger.log("is not same");
            //       // await fetchCurrentUserData(currentUserId)
            //       fetchCurrentSubscriptionStatus()
            //     } else {
            //       // EvyAILogger.log("is same");
            //       // return
            //     }
            //   }
            // }
            // if (previousTeams !== undefined) {
            //   if (newTeams.length === 0) {
            //     // await getSubscriptionStatus();
            //     fetchCurrentSubscriptionStatus()
            //   } else if (newTeams.length > 0 && (previousTeams.length < newTeams.length)) {
            //     const newAddedTeams = newTeams.filter((teamId: string) => !previousTeams.includes(teamId));
            //     // await getSubscriptionStatusWithTeamId(newAddedTeams)
            //     fetchCurrentSubscriptionStatus()
            //     // EvyAILogger.log("new added teams", newAddedTeams);
            //     // EvyAILogger.log("new Sub Status", subStatus);
            //   } else if (newTeams.length > 0 && (previousTeams.length > newTeams.length)) {
            //     // const newRemovedTeams = previousTeams.filter((teamId: string) => !newTeams.includes(teamId));
            //     // await getSubscriptionStatusWithTeamId(previousTeams)
            //     fetchCurrentSubscriptionStatus()
            //     // EvyAILogger.log("new removed teams", newRemovedTeams);
            //     // EvyAILogger.log("new Sub Status", subStatus);
            //   }
            // } else if (previousTeams === undefined) {
            //   if (newTeams === undefined) {
            //     // await getSubscriptionStatus()
            //     fetchCurrentSubscriptionStatus()
            //   } else if (newTeams.length > 0) {
            //     // await getSubscriptionStatusWithTeamId(newTeams)
            //     fetchCurrentSubscriptionStatus()
            //     // EvyAILogger.log("new added teams but before was undefined", newTeams);
            //     // EvyAILogger.log("new Sub Status", subStatus);
            //   }
            // }
            if (previousTeams === undefined && newTeams === undefined) {
              return;
            }
            if (newTeams.length !== previousTeams?.length) {
              // const userToSet: IUser = {...fetchedUser, memberInTeams: newTeams}
              setLoggedInFetchedUser(userToSet);
              fetchCurrentSubscriptionStatus();
            } else if (newTeams.length === previousTeams.length) {
              if (newTeams.length !== 0) {
                const isSame = newTeams.every((id: string) => previousTeams.includes(id));
                if (!isSame) {
                  // const userToSet: IUser = {...fetchedUser, memberInTeams: newTeams}
                  setLoggedInFetchedUser(userToSet);
                  fetchCurrentSubscriptionStatus();
                }
              }
              // else {
              //   // const userToSet: IUser = {...fetchedUser, memberInTeams: newTeams}
              //   setLoggedInFetchedUser(userToSet)
              //   fetchCurrentSubscriptionStatus();
              // }
            } else {
              setLoggedInFetchedUser(userToSet);
              fetchCurrentSubscriptionStatus();
            }
            // const userToSet: IUser = {...fetchedUser, memberInTeams: newTeams}
            // setLoggedInFetchedUser(userToSet)
            // fetchCurrentSubscriptionStatus();
            // if (newTeams.length > 0) {
            // }
            // fetchUserDataById(currentUserId);
          }
        });
      } catch (error) {
        EvyAILogger.error("ERROR", error);
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "getChangeInDoc",
            },
          },
        });
      }
    };
    if (loggedInFetchedUser) {
      getChangeInDoc(loggedInFetchedUser);
      return () => {
        if (unsubscribe) {
          unsubscribe();
        }
      };
    }
  }, [readyToListen]);

  useEffect(() => {
    // EvyAILogger.log("LOGGED IN USER", loggedInUser);

    const fetchData = async () => {
      if (loggedInUser) {
        const userData = await fetchUserDataById(loggedInUser.uid);
        if (userData) {
          setLoggedInFetchedUser(userData);
        } else {
          setLoggedInFetchedUser(null);
        }
        // saveCurrentSessionId(loggedInUser.uid)
      } else {
        setLoggedInFetchedUser(null);
      }
    };
    fetchData();
  }, [loggedInUser]);

  useEffect(() => {
    if (!readyToListen) {
      if (loggedInFetchedUser && fullSubscriptionStatus) {
        // EvyAILogger.log("loggedInFetchedUser", loggedInFetchedUser);
        // EvyAILogger.log("loggedInFetchedUser", loggedInFetchedUser);
        if (teamInvites.length > 0) {
          setReadyToListen(true);
        } else if (loggedInFetchedUser.memberInTeams !== undefined && loggedInFetchedUser.memberInTeams.length > 0) {
          // EvyAILogger.log("member in teams", user.memberInTeams);
          setReadyToListen(true);
        }
      }
    }
  }, [loggedInFetchedUser, fullSubscriptionStatus, teamInvites]);

  useEffect(() => {
    EvyAILogger.log("ready to listen", readyToListen);
  }, [readyToListen]);

  useEffect(() => {
    getCurrentUser();

    return () => {
      setIsComponentUnmounted(true);
    };
  }, []);

  // useEffect(() => {
  //   EvyAILogger.log("logged in or signed out", loggedInUser);

  // }, [loggedInUser])

  const checkUserEmailVerifiedStatus = (user: User, willSendEmail: boolean = false) => {
    // EvyAILogger.log(
    //   "### checkUserEmailVerifiedStatus willSendEmail:",
    //   willSendEmail
    // );
    if (!!user) {
      const firebaseUser = user as User;
      if (firebaseUser.emailVerified) {
        setAuthenticationState(AuthenticationState.Authenticated);
      } else {
        setAuthenticationState(AuthenticationState.UnverifiedAuthenticated);
        if (willSendEmail) {
          // EvyAILogger.log("### will send verification email");
          sendMessageToExtensionPages(MESSAGE_ACTION.SEND_VERIFICATION_EMAIL);
        }
        startTimerToCheckVerifiedStatus();
      }
    } else {
      setAuthenticationState(AuthenticationState.Login);
    }
  };

  const startTimerToCheckVerifiedStatus = () => {
    const _timerId = setTimeout(async () => {
      try {
        setEmailVerifiedCheckerTimerId(null);
        await sendMessageToExtensionPages(MESSAGE_ACTION.RELOAD_CURRENT_USER_AUTH_STATE);
        // setIsTimerRunning(false);
        // getCurrentUser();
        const currentUser = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_USER_AUTH_STATE);
        checkUserEmailVerifiedStatus(currentUser, false);
      } catch (error: any) {
        EvyAILogger.log({ error });
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "startTimerToCheckVerifiedStatus",
            },
          },
        });
      }
    }, 2000);
    setEmailVerifiedCheckerTimerId(_timerId);
  };

  const onAuthUserChanged = (user: User | null) => {
    let _authenticationState: Number = AuthenticationState.Login;
    if (user) {
      _authenticationState = AuthenticationState.UnverifiedAuthenticated;
      setAuthenticationState(AuthenticationState.UnverifiedAuthenticated);
      const firebaseUser = user as User;
      // setLoggedInUser(user);
      if (firebaseUser.emailVerified) {
        _authenticationState = AuthenticationState.Authenticated;
        setAuthenticationState(AuthenticationState.Authenticated);
      } else {
        _authenticationState = AuthenticationState.UnverifiedAuthenticated;
        setAuthenticationState(AuthenticationState.UnverifiedAuthenticated);
        // if (!isVerificationEmailSent) {
        //   setIsVerificationEmailSent(true);
        //   EvyAILogger.log('### will send verification email');
        //   sendMessageToExtensionPages(MESSAGE_ACTION.SEND_VERIFICATION_EMAIL);
        //   setAuthenticationState(AuthenticationState.UnverifiedAuthenticated);
        // }
        // if (!isTimerRunning) {
        //   setIsTimerRunning(true);
        //   startTimerToCheckVerifiedStatus();
        // }
      }
    } else {
      EvyAILogger.log("### here it should not come");
      _authenticationState = AuthenticationState.Login;
      setAuthenticationState(AuthenticationState.Login);
      setLoggedInUser(null);
    }

    return _authenticationState;
  };

  useEffect(() => {
    const onMessageListener = async (msg: Message) => {
      // EvyAILogger.log({ msg });
      switch (msg.action) {
        case MESSAGE_ACTION.TOGGLE_POPUP: {
          setIsCheckingUserAuthStatus(true);
          await doInitialCurrentUserStateChecking();
          setWillShowLoginPopup((prev) => {
            return !prev;
          });
          setIsCheckingUserAuthStatus(false);
          return true;
        }
        case MESSAGE_ACTION.HIDE_POPUP: {
          setWillShowLoginPopup(false);
          break;
        }
        case MESSAGE_ACTION.SHOW_POPUP: {
          setIsCheckingUserAuthStatus(true);
          await doInitialCurrentUserStateChecking();
          setWillShowLoginPopup(true);
          setIsCheckingUserAuthStatus(false);
          break;
        }
        case MESSAGE_ACTION.USER_AUTH_STATE_CHANGED: {
          const {
            data: { user },
          } = msg;
          // EvyAILogger.log("### MESSAGE_ACTION.USER_AUTH_STATE_CHANGED");
          // EvyAILogger.log({ user }, "abc,xyz--3");
          if (user) {
            // saveCurrentSessionId(user.uid)
            localStorage.setItem(LOCAL_STORAGE_KEYS.LOGGED_IN, String(true));
          } else {
            localStorage.setItem(LOCAL_STORAGE_KEYS.LOGGED_IN, String(false));
          }
          // setLoggedInUser(user)

          // onAuthUserChanged(user);
          checkUserEmailVerifiedStatus(user, true);
          break;
        }
        case MESSAGE_ACTION.IS_LOGGED_OUT: {
          const { data } = msg;
          // EvyAILogger.log("### MESSAGE_ACTION.IS_LOGGED_OUT", data);

          if (data.loggedOut) {
            localStorage.setItem(LOCAL_STORAGE_KEYS.LOGGED_IN, String(false));
            // localStorage.removeItem("C_S_ID")
            // localStorage.removeItem("C_U_")
            setLoggedInUser(null);
          }
          break;
        }
        default:
          return true;
      }
      return true;
    };

    browser.runtime.onMessage.addListener(onMessageListener);
    return () => {
      browser.runtime.onMessage.removeListener(onMessageListener);
    };
  }, []);

  useEffect(() => {
    // Function to handle the click event
    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      clearExistingSaveProfileButtons();
    };

    // Function to add event listeners to dismiss buttons
    const addEventListeners = () => {
      const dismissButtons = document.querySelectorAll(CLASS_NAMES.LEAD_SIDESHEET_HEADER_BUTTON);
      dismissButtons.forEach((button) => {
        (button as HTMLElement).addEventListener("click", handleClick);
      });
      const dismissButtonsLists = document.querySelectorAll(CLASS_NAMES.LISTS_DETAIL_VIEW_PROFILE_NAME_LINK);
      dismissButtonsLists.forEach((button) => {
        (button as HTMLElement).addEventListener("click", handleClick);
      });
    };
    const addClickListeners = (selector: string) => {
      const buttons = document.querySelectorAll(`[data-control-name="${selector}"]`);
      buttons.forEach((button) => {
        (button as HTMLElement).addEventListener("click", handleClick);
      });
    };
    // Add event listeners for both selectors
    addClickListeners(CLASS_NAMES.SN_VIEW_LEAD_PANEL);
    addClickListeners(CLASS_NAMES.SN_VIEW_LEAD_NAME_VIA_LEADERSHIP_EXPLORER);

    // Initial event listener attachment
    addEventListeners();

    // Set up a MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      addEventListeners();
      addClickListeners(CLASS_NAMES.SN_VIEW_LEAD_PANEL);
      addClickListeners(CLASS_NAMES.SN_VIEW_LEAD_NAME_VIA_LEADERSHIP_EXPLORER);
    });

    // Observe the document for added nodes
    observer.observe(document.body, { childList: true, subtree: true });

    // Clean up the MutationObserver and event listeners on component unmount
    return () => {
      observer.disconnect();
      addEventListeners();
      addClickListeners(CLASS_NAMES.SN_VIEW_LEAD_PANEL);
      addClickListeners(CLASS_NAMES.SN_VIEW_LEAD_NAME_VIA_LEADERSHIP_EXPLORER);
    };
  }, []);

  useEffect(() => {
    // EvyAILogger.log({ authenticationState });
    if (authenticationState === AuthenticationState.Authenticated) {
      if (willDoActionAfterLogIn) {
        setWillDoActionAfterLogIn(false);
        setWillShowLoginPopup(false);
        // setWillShowPopup(true);
        setTimeout(() => {
          (document.querySelector(`.${CLASS_NAMES.CREATE_POST_MODAL_CLOSE_BUTTON}`) as HTMLElement)?.blur();
        }, 1000);
      }
    } else {
      setWillShowPopup(false);
    }
  }, [authenticationState, willDoActionAfterLogIn]);

  useEffect(() => {
    if (emailVerifiedCheckerTimerId) {
      clearTimeout(emailVerifiedCheckerTimerId);
    }
  }, []);

  useEffect(() => {
    if (currentLinkedInUserURL.startsWith("/in/")) {
      setCurrentLinkedInUserURL("https://www.linkedin.com" + currentLinkedInUserURL);
    }
  }, [currentLinkedInUserURL]);

  useEffect(() => {
    if (generateLIURL.startsWith("/in/")) {
      setGenerateLIURL("https://www.linkedin.com" + generateLIURL);
    }
  }, [generateLIURL]);

  const onButtonClickOnAuthHeader = useCallback(() => {
    setAuthenticationState((currentState) => {
      if (currentState === AuthenticationState.Login) {
        // EvyAILogger.log("### will set willShowRegisterScreen");
        BrowserStorage.setItem(STORAGE_KEYS.WILL_SHOW_REGISTER_SCREEN, true);
        return AuthenticationState.Register;
      } else {
        return AuthenticationState.Login;
      }
    });
  }, []);

  const openGeneratePopupOrAuthorisationPopup = useCallback(
    async (apiRequest?: API_REQUEST_TYPE) => {
      const _currentLinkedInUserName = getCurrentUserNameFromMessageList();
      const _currentLinkedInUserURL = getProfileUrl();
      const _generateLIURL = (await getProfileUrl_Top()) as string | undefined;
      // EvyAILogger.log({ _currentLinkedInUserName });
      setCurrentLinkedInUserName(_currentLinkedInUserName);
      if (_currentLinkedInUserURL) {
        setCurrentLinkedInUserURL(_currentLinkedInUserURL);
      }
      if (_generateLIURL) {
        setGenerateLIURL(_generateLIURL);
      }
      setIsCheckingUserAuthStatus(true);

      let currentUser = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_USER_AUTH_STATE);

      if (currentUser) {
        updateUserLastActiveTime(currentUser.uid);
      }

      let isLoggedIn = localStorage.getItem(LOCAL_STORAGE_KEYS.LOGGED_IN);

      if (isLoggedIn !== null) {
        isLoggedIn = JSON.parse(isLoggedIn);
      } else {
        isLoggedIn = JSON.parse("false");
      }

      if (isLoggedIn && currentUser) {
        // EvyAILogger.log("Current user---------", currentUser);

        let _authenticationState = onAuthUserChanged(currentUser);

        if (_authenticationState !== AuthenticationState.Authenticated) {
          await sendMessageToExtensionPages(MESSAGE_ACTION.RELOAD_CURRENT_USER_AUTH_STATE);
          currentUser = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_USER_AUTH_STATE);
          _authenticationState = onAuthUserChanged(currentUser);
        }
        setLoggedInUser(currentUser);
      } else if (isLoggedIn && loggedInUser) {
        // EvyAILogger.log("loggedinuser---------", loggedInUser);

        let _authenticationState = onAuthUserChanged(loggedInUser);

        if (_authenticationState !== AuthenticationState.Authenticated) {
          await sendMessageToExtensionPages(MESSAGE_ACTION.RELOAD_CURRENT_USER_AUTH_STATE);
          currentUser = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_USER_AUTH_STATE);
          _authenticationState = onAuthUserChanged(loggedInUser);
        }
      }

      // if (_authenticationState === AuthenticationState.Authenticated) {
      if ((isLoggedIn && loggedInUser) || (isLoggedIn && currentUser)) {
        //showing recommendation instruction showing dialog
        if (
          apiRequest === API_REQUEST_TYPE.RECOMMENDATION_TEXT &&
          validateLinkedRecommendationInUrl(window.location.href) &&
          !relationshipSelectElementExists()
        ) {
          setShowRecommendDialog(true);
        } else {
          setWillShowPopup(true);
        }
        setIsCheckingUserAuthStatus(false);
        setTimeout(() => {
          (document.querySelector(`.${CLASS_NAMES.CREATE_POST_MODAL_CLOSE_BUTTON}`) as HTMLElement)?.blur();
        }, 1000);
      } else {
        setWillDoActionAfterLogIn(true);
        setWillShowLoginPopup(true);
        setIsCheckingUserAuthStatus(false);
        setTimeout(() => {
          (document.querySelector(`.${CLASS_NAMES.CREATE_POST_MODAL_CLOSE_BUTTON}`) as HTMLElement)?.blur();
        }, 1000);
      }
    },
    [authenticationState]
  );

  const onButtonClickInArticlePage = (commentBoxTextEditor: HTMLElement) => {
    try {
      const { articleTitle, articleAuthor, articlePostDate, articleContentHTML, articleContentRawText } =
        getArticleInfo();
      setArticleInfo({
        title: articleTitle,
        author: articleAuthor,
        postDate: articlePostDate,
        contentHTML: articleContentHTML,
        rawText: articleContentRawText,
      });

      const commentInfo = getPostAndCommentInfoIfExists(commentBoxTextEditor);
      // EvyAILogger.log({ commentInfo });
      setCommentText(commentInfo.commentText);
      setCommentAuthorName(commentInfo.commentAuthorName);
      if (commentInfo.commentText.length > 0 && commentInfo.commentAuthorName.length > 0) {
        setApiRequestType(API_REQUEST_TYPE.ARTICLE_COMMENT_REPLY);
      } else {
        setApiRequestType(API_REQUEST_TYPE.ARTICLE_COMMENT);
      }
      setPostCommentSourcePage(POST_COMMENT_SOURCE_PAGE.HOME);
      setCurrentPathHref(window.location.href);
      openGeneratePopupOrAuthorisationPopup();

      if (articleTitle.length === 0 || articleContentHTML.length === 0 || articleAuthor.length === 0) {
        throw new Error("Error while fetchtin article information");
      }
    } catch (error) {
      EvyAILogger.log("onButtonClickInArticlePage", error);
      setArticleResponseError(true);
      handleButtonInsertionException(error, commentBoxTextEditor, "onButtonClickInArticlePage");
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "onButtonClickInArticlePage",
          },
        },
      });
    }
  };

  const onGenericButtonClick = (commentBoxId: string, commentBoxTextEditor: HTMLElement) => {
    const _currentLinkedInUserName = getCurrentUserNameFromMessageList();
    const _currentLinkedInUserURL = getProfileUrl();
    // EvyAILogger.log({ _currentLinkedInUserName });
    setCurrentLinkedInUserName(_currentLinkedInUserName);
    if (_currentLinkedInUserURL) {
      setCurrentLinkedInUserURL(_currentLinkedInUserURL);
    }
    setSelectedCommentBoxId(commentBoxId);

    if (isLinkedInArticlePage(window.location.href)) {
      onButtonClickInArticlePage(commentBoxTextEditor);
    } else {
      const {
        postText: _postText,
        postAutherName: _postAuthorName,
        commentText: _commentText,
        commentAuthorName: _commentAuthorName,
      } = getPostAndCommentInfoIfExists(commentBoxTextEditor);

      setPostText(_postText);
      setPostText(
        isLinkedInNewsletterPage(window.location.href) ? getNewLetterHeadline(commentBoxTextEditor) : _postText
      );
      setAuthorName(isLinkedInNewsletterPage(window.location.href) ? getNewsLetterAuthorName() : _postAuthorName);
      setCommentText(_commentText);
      setCommentAuthorName(_commentAuthorName);
      if (_commentText.length > 0 && _commentAuthorName.length > 0) {
        setApiRequestType(API_REQUEST_TYPE.COMMENT_REPLY);
      } else {
        setApiRequestType(API_REQUEST_TYPE.POST_COMMENT);
      }
      setPostCommentSourcePage(POST_COMMENT_SOURCE_PAGE.HOME);
      openGeneratePopupOrAuthorisationPopup();
    }
  };

  const addButtonEdit = useCallback(
    (commentBoxTextEditor: HTMLElement) => {
      if (
        commentBoxTextEditor.classList.contains(CLASS_NAMES.COMMENT_BOX_FORM_CONTAINER)
        // commentBoxTextEditor.querySelector(
        //   `.${CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP}`
        // )
      ) {
        EvyAILogger.log("ALREADY ADDED");
        return;
      }
      let parentElement = commentBoxTextEditor.querySelector(CLASS_NAMES.COMMENTS_COMMENT_EDIT__SUBACTION_BAR);
      let commentBoxId = "";
      while (parentElement) {
        if (parentElement.classList.contains("comments-comment-item")) {
          commentBoxId = parentElement.getAttribute("id")!;
          break;
        }
        parentElement = parentElement.parentElement;
      }

      // EvyAILogger.log(commentBoxId, parentElement, "commentbox");
      const button = document.createElement("button");
      button.setAttribute("class", CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP);
      button.setAttribute(
        "style",
        "width: 40px; height: 40px; cursor: pointer; display: flex; justify-content: center; align-items: center;float:right;position:relative;bottom:45px"
      );
      button.onclick = (event) => {
        event.stopPropagation();
        onGenericButtonClick(commentBoxId, commentBoxTextEditor);
      };
      const icon = document.createElement("img");
      icon.setAttribute("style", "width: 18px; height: 18px;");
      icon.src = getImagePath("icon-34.png");
      button.appendChild(icon);
      setTimeout(() => {
        commentBoxTextEditor.parentElement?.insertBefore(button, commentBoxTextEditor.nextSibling);
      }, 200);
    },
    [openGeneratePopupOrAuthorisationPopup]
  );

  const handleButtonInsertionException = async (error: any, commentBoxFormElement: Element, functionName: string) => {
    try {
      const willCall = localStorage.getItem("E_C");
      if (!willCall) {
        const errorReport = {
          error: `${functionName}\n${chrome.runtime.getManifest().version}\n${location.href}\n${error.message}\n${
            error.stack || ""
          }`,
          elementHTMLcode: commentBoxFormElement.outerHTML,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        };
        sendMessageToExtensionPages(MESSAGE_ACTION.HANDLE_BUTTON_INSERTION_EXCEPTION, errorReport);
        EvyAILogger.log(errorReport);
        EvyAILogger.log("exception fun called");
        localStorage.setItem("E_C", String(false));
      } else {
        EvyAILogger.log("exception fun called but exceptionCallable is false");
        localStorage.setItem("E_C", String(true));
      }
    } catch (error) {
      EvyAILogger.log(error);
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "handleButtonInsertionException",
          },
        },
      });
    }
  };

  const addButton = useCallback(
    (commentBoxTextEditor: HTMLElement) => {
      try {
        // throw new Error("Test Error: Intentional error to test the catch block");
        if (commentBoxTextEditor.classList.contains(CLASS_NAMES.COMMENT_BOX_FORM_CONTAINER)) {
          // throw new Error("Test Error: Intentional error to test the catch block");
          EvyAILogger.log("ALREADY ADDED");
          return;
        }

        let parentElement: any = commentBoxTextEditor.parentElement;
        const buttonAlreadyInserted = parentElement?.querySelectorAll("#evyai-comment-popup-button")?.length;

        if (parentElement?.querySelector("#evyai-comment-popup-button")) {
          // throw new Error("Test Error: Intentional error to test the catch block");
          return EvyAILogger.log("Button Already Exist");
        }

        let commentBoxId = "";
        while (parentElement) {
          if (
            parentElement.classList.contains(CLASS_NAMES.COMMENT_BOX_WITH_ID2) ||
            parentElement.classList.contains(CLASS_NAMES.COMMENT_BOX_WITH_ID)
          ) {
            commentBoxId = parentElement.getAttribute("id")!;
            // EvyAILogger.log("parent element contains comment box id", commentBoxId);
            break;
          }
          parentElement = parentElement.parentElement;
        }
        const linkedInUserName = getCurrentUserName(parentElement!);
        const _currentLinkedInUserURL = getProfileUrl();
        // EvyAILogger.log({linkedInUserName});
        setCurrentLinkedInUserName(linkedInUserName);
        if (_currentLinkedInUserURL) {
          setCurrentLinkedInUserURL(_currentLinkedInUserURL as string);
        }
        const button = document.createElement("button");
        button.setAttribute("class", CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP);
        // button.setAttribute('id', )
        button.setAttribute(
          "style",
          "width: 40px; height: 40px; cursor: pointer; display: flex; justify-content: center; align-items: center;"
        );
        button.setAttribute("type", "button");
        button.id = "evyai-comment-popup-button";
        button.onclick = (event) => {
          event.stopPropagation();
          onGenericButtonClick(commentBoxId, commentBoxTextEditor);
        };
        const icon = document.createElement("img");
        icon.setAttribute("style", "width: 18px; height: 18px;");
        icon.src = getImagePath("icon-34.png");
        button.appendChild(icon);
        // setTimeout(() => {
        commentBoxTextEditor.parentElement?.insertBefore(button, commentBoxTextEditor);
        // commentBoxTextEditor.parentElement?.insertBefore(
        //   button,
        //   commentBoxTextEditor.nextSibling
        // );
        // }, 200);
      } catch (error) {
        const commentBoxFormElement = document.getElementsByClassName(CLASS_NAMES.COMMENT_BOX_FORM_CONTAINER2);
        handleButtonInsertionException(
          error,
          commentBoxFormElement[0],
          "addButton, readyState: " + document.readyState
        );
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "addButton",
            },
          },
        });
      }
    },
    [openGeneratePopupOrAuthorisationPopup]
  );

  const getPerpectiveInfoIfExists = (perpectiveBoxId: string) => {
    const breadcrumsLists = document.querySelector(".breadcrumbs")?.children;
    let breadcrumbs = [];
    if (breadcrumsLists) {
      for (let i = 0; i < breadcrumsLists.length; i++) {
        const crumbText = breadcrumsLists[i].querySelector('span[itemprop="name"]')?.textContent?.trim();
        breadcrumbs.push(crumbText);
      }
    }
    let headingLists = [];
    const allSubHeadings = document.querySelectorAll(CLASS_NAMES.FRAGMENTED_LINKS);
    if (allSubHeadings) {
      for (let i = 0; i < allSubHeadings.length; i++) {
        const headText = allSubHeadings[i].textContent?.trim();
        headingLists.push(headText);
      }
    }
    const mainHeading = document.querySelector(CLASS_NAMES.PULSE_TITLE)?.textContent?.trim();
    const powerdBy = document.querySelector(CLASS_NAMES.POWERED_BY_AI)?.textContent?.trim();
    const parentBox = document.querySelector(`div[data-thread-urn="${perpectiveBoxId}"]`);
    const titleChild = parentBox?.querySelector("h2 span:last-child");
    const title = titleChild?.textContent?.trim() ?? "";
    const descriptionChild = parentBox?.querySelector(CLASS_NAMES.MAIN__CONTENT_P_SPAN);
    const description = descriptionChild?.textContent?.trim() ?? "";
    const url = new URL(window.location.href);
    const baseUrl = url.origin + url.pathname;
    setPerpectiveInfo({
      breadcrumbs: breadcrumbs,
      mainHeading: mainHeading,
      powerdBy: powerdBy,
      allSubHeadings: headingLists,
      title: title,
      description: description,
      article_url: baseUrl,
    });
  };

  const onAddPerpectiveButtonClick = (perpectiveBoxId: string) => {
    const _currentLinkedInUserName = getCurrentUserNameFromMessageList();
    setCurrentLinkedInUserName(_currentLinkedInUserName);
    const _currentLinkedInUserURL = getProfileUrl();
    if (_currentLinkedInUserURL) {
      setCurrentLinkedInUserURL(_currentLinkedInUserURL);
    }
    setPerpectiveBoxId(perpectiveBoxId);
    getPerpectiveInfoIfExists(perpectiveBoxId);

    setApiRequestType(API_REQUEST_TYPE.PERSPECTIVE_COMMENT);
    setPostCommentSourcePage(POST_COMMENT_SOURCE_PAGE.ADVICE);
    openGeneratePopupOrAuthorisationPopup();
  };

  const addButtonPerpective = useCallback(
    (percpectiveBoxTextEditor: HTMLElement) => {
      if (percpectiveBoxTextEditor.querySelector(`.${CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP}`)) {
        return;
      }
      let parentElement = percpectiveBoxTextEditor.parentElement;
      let perpectiveBoxId = parentElement?.attributes.getNamedItem("data-segment-urn")?.value || "";
      const button = document.createElement("button");
      button.setAttribute("class", CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP);
      button.setAttribute(
        "style",
        "width: 40px; height: 40px; cursor: pointer; display: flex; justify-content: center; align-items: center;"
      );
      button.setAttribute("type", "button");
      button.onclick = (event) => {
        event.stopPropagation();
        onAddPerpectiveButtonClick(perpectiveBoxId);
      };
      const icon = document.createElement("img");
      icon.setAttribute("style", "width: 18px; height: 18px;");
      icon.src = getImagePath("icon-34.png");
      button.appendChild(icon);
      setTimeout(() => {
        // EvyAILogger.log("perpectiveBoxId perpectiveBoxId", perpectiveBoxId);
        // percpectiveBoxTextEditor.append(button)
        const textArea = percpectiveBoxTextEditor.querySelector(CLASS_NAMES.CONTRIBUTION_HELPER_TEXT);
        if (textArea) {
          textArea.prepend(button);
        }
      }, 200);
    },
    [openGeneratePopupOrAuthorisationPopup]
  );

  const addButtonOnMessagePage = useCallback(
    async (messageBoxTextEditorContainer: HTMLElement) => {
      if (messageBoxTextEditorContainer.querySelector(`.${CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP}`)) {
        return;
      }
      await sleep(1000);
      let parentElement = messageBoxTextEditorContainer.parentElement;
      while (parentElement) {
        if (parentElement.classList.contains(CLASS_NAMES.MESSAGE_FORM)) {
          break;
        }
        parentElement = parentElement.parentElement;
      }
      const button = document.createElement("button");
      button.setAttribute("class", CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP);
      // button.setAttribute('id', )
      button.setAttribute(
        "style",
        "width: 40px; height: 40px; cursor: pointer; display: flex; justify-content: center; align-items: center; "
      );
      button.setAttribute("type", "button");

      button.onclick = (event) => {
        event.stopPropagation();
        const otherUserName = getOtherUserNameOnMessagePage(messageBoxTextEditorContainer);
        // const lastMessageOfOtherUser = getLastMessageOfOtherUser(
        //   messageBoxTextEditorContainer,
        //   otherUserName
        // );
        const lastMessages = getLastMessages(messageBoxTextEditorContainer, otherUserName, 6);
        // EvyAILogger.log({messageBoxTextEditorContainer});
        // EvyAILogger.log({lastMessageOfOtherUser, otherUserName});
        // EvyAILogger.log({lastMessages});
        setLastMessages(lastMessages);
        setAuthorName(otherUserName);
        setApiRequestType(API_REQUEST_TYPE.MESSAGE_REPLY);
        setSelectedMessageBoxContainer(messageBoxTextEditorContainer);
        setPostCommentSourcePage(POST_COMMENT_SOURCE_PAGE.MESSAGE);
        openGeneratePopupOrAuthorisationPopup();
      };
      const icon = document.createElement("img");
      icon.setAttribute("style", "width: 18px; height: 18px;");
      icon.src = getImagePath("icon-34.png");
      button.appendChild(icon);
      const buttonContainer = parentElement?.querySelector(`.${CLASS_NAMES.MESSAGE_FORM_FOOTER}`) as HTMLElement;
      setTimeout(() => {
        buttonContainer.firstElementChild?.insertAdjacentElement("afterend", button);
      }, 200);
    },
    [openGeneratePopupOrAuthorisationPopup]
  );

  const addButtonOnCreatePostDialog = useCallback(
    (createPostContainer: HTMLElement) => {
      if (createPostContainer.querySelector(`.${CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP}`)) {
        return;
      }
      const footerButtonContainer = createPostContainer.querySelector(`.${CLASS_NAMES.SHARE_CREATION_STATE_FOOTER}`);

      const container = createPostContainer.querySelector(CLASS_NAMES.SHARE_CREATION_STATE__CONTENT);

      let _postText = "",
        _postAuthorName = "",
        _commentText = "",
        _commentAuthorName = "";

      if (container !== null) {
        const {
          postText: pText,
          postAutherName: _postAuthorNam,
          commentText: _comentText,
          commentAuthorName: _commentAuthorN,
          //@ts-ignore
        } = getPostAndCommentInfoIfExistsInRepost(container);
        _postText = pText;
        _postAuthorName = _postAuthorNam;
        _commentText = _comentText;
        _commentAuthorName = _commentAuthorN;
      }

      setPostText(_postText);
      setAuthorName(_postAuthorName);
      setCommentText(_commentText);
      setCommentAuthorName(_commentAuthorName);

      const button = document.createElement("button");
      button.setAttribute("class", CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP);
      button.setAttribute(
        "style",
        "width: 40px; height: 40px; cursor: pointer; display: flex; justify-content: center; align-items: center;"
      );
      const _currentLinkedInUserName = getCurrentUserNameFromMessageList();
      const _currentLinkedInUserURL = getProfileUrl();
      if (_currentLinkedInUserURL) {
        setCurrentLinkedInUserURL(_currentLinkedInUserURL);
      }
      EvyAILogger.log({ _currentLinkedInUserName });
      setCurrentLinkedInUserName(_currentLinkedInUserName);
      button.onclick = (event) => {
        event.stopPropagation();
        setAuthorName("");
        setApiRequestType(_postText ? API_REQUEST_TYPE.RE_POST : API_REQUEST_TYPE.CREATE_POST);
        const _postCreationTextContainer = createPostContainer.querySelector(
          `.${CLASS_NAMES.COMMENT_EDITOR}`
        ) as HTMLElement;
        setPostCreationTextContainer(_postCreationTextContainer);
        const _postCreationText = _postCreationTextContainer?.innerText?.trim();
        // EvyAILogger.log({ _postCreationText });
        setPostCreationText(_postCreationText);
        setPostCommentSourcePage(POST_COMMENT_SOURCE_PAGE.CREATE_POST);
        (document.querySelector(`.${CLASS_NAMES.CREATE_POST_MODAL_CLOSE_BUTTON}`) as HTMLElement)?.blur();
        openGeneratePopupOrAuthorisationPopup();
      };

      const icon = document.createElement("img");
      icon.setAttribute("style", "width: 18px; height: 18px;");
      icon.src = getImagePath("icon-34.png");
      button.appendChild(icon);
      footerButtonContainer?.insertBefore(
        button,
        footerButtonContainer.lastElementChild
        // footerButtonContainer.firstElementChild!.nextElementSibling!
        //   .nextElementSibling
      );
    },

    [openGeneratePopupOrAuthorisationPopup]
  );
  const addFeedContainer = useCallback((feedContainer: HTMLElement) => {
    return null; // NEVER SHOW #1048
    if (feedContainer.querySelector(`.${CLASS_NAMES.EXTENSION_FEED_CONTAINER}`)) {
      return;
    }

    const container = document.createElement("div");
    container.setAttribute("class", CLASS_NAMES.EXTENSION_FEED_CONTAINER);

    if (feedContainer) {
      const container = document.createElement("div");
      container.setAttribute("class", CLASS_NAMES.EXTENSION_FEED_CONTAINER);
      feedContainer.insertBefore(container, feedContainer.children[2]);
      const root = createRoot(container as HTMLElement);
      root.render(<FeedContainer />);
    }
  }, []);

  const addButtonOnInvitationNoteDialog = useCallback(
    (invitateNoteTextArea: HTMLElement) => {
      const invitateNoteContainer = invitateNoteTextArea.parentElement!;
      if (invitateNoteContainer.querySelector(`.${CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP}`)) {
        return;
      }
      const button = document.createElement("button");
      button.setAttribute("class", CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP);
      button.setAttribute(
        "style",
        `width: 40px; height: 40px; cursor: pointer; display: flex; justify-content: center; align-items: center; position: absolute; bottom: 36px;
        right: 4px;`
      );
      const _currentLinkedInUserName = getCurrentUserNameFromMessageList();
      const _currentLinkedInUserURL = getProfileUrl();
      if (_currentLinkedInUserURL) {
        setCurrentLinkedInUserURL(_currentLinkedInUserURL);
      }

      setCurrentLinkedInUserName(_currentLinkedInUserName);
      button.onclick = (event) => {
        event.stopPropagation();
        if (!window.location.pathname.includes(PAGE_PATH.SEARCH)) {
          setConnectingUserName(getNameFromProfilePage());
          setCurrentPathHref(window.location.href);
        } else {
          setCurrentPathHref("");
        }
        setConnectingUserTagline(getTaglineFromProfilePage());
        setConnectingUserExperiences(getExperiencesFromProfilePage());
        setProfileEducation(getEducationFromProfilePage());
        setProfileLicensesAndCertifications(getLicensesAndCertificationsFromProfilePage());
        setApiRequestType(API_REQUEST_TYPE.INVITATION_NOTE);
        setInvitationNoteTextArea(invitateNoteTextArea as HTMLInputElement);
        const _userEnteredInvitationNote = (invitateNoteTextArea as HTMLTextAreaElement)?.value?.trim();
        setUserEnteredInvitationNote(_userEnteredInvitationNote);
        setPostCommentSourcePage(POST_COMMENT_SOURCE_PAGE.INVITATION_NOTE);
        openGeneratePopupOrAuthorisationPopup();
      };
      const icon = document.createElement("img");
      icon.setAttribute("style", "width: 18px; height: 18px;");
      icon.src = getImagePath("icon-34.png");
      button.appendChild(icon);
      invitateNoteContainer?.insertBefore(button, invitateNoteTextArea.nextElementSibling);
    },
    [openGeneratePopupOrAuthorisationPopup]
  );

  const addButtonOnSalesInvitationNoteDialog = useCallback(
    (invitateNoteTextArea: HTMLElement) => {
      const invitateNoteContainer = invitateNoteTextArea.parentElement!;
      if (invitateNoteContainer.querySelector(`.${CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP}`)) {
        return;
      }
      const button = document.createElement("button");
      button.setAttribute("class", CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP);
      button.setAttribute(
        "style",
        `width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 95px;
        right: 22px;
        background: transparent;
        border: none;`
      );
      const _currentLinkedInUserURL = getProfileUrl();
      if (_currentLinkedInUserURL) {
        setCurrentLinkedInUserURL(_currentLinkedInUserURL);
      }
      const _currentLinkedInUserName = getCurrentUserNameFromMessageList();
      // EvyAILogger.log({ _currentLinkedInUserName });
      setCurrentLinkedInUserName(_currentLinkedInUserName);
      button.onclick = (event) => {
        event.stopPropagation();
        setConnectingUserName(getNameFromProfilePageOfSales());
        setConnectingUserTagline(getTaglineFromSalesProfilePage());
        setConnectingUserExperiences(getExperiencesFromSalesProfilePage());
        setProfileEducation(getEducationFromSalesProfilePage());
        setProfileLicensesAndCertifications(getLicensesAndCertificationsFromProfilePage());
        setApiRequestType(API_REQUEST_TYPE.INVITATION_NOTE);
        setInvitationNoteTextArea(invitateNoteTextArea as HTMLInputElement);
        const _userEnteredInvitationNote = (invitateNoteTextArea as HTMLTextAreaElement)?.value?.trim();
        setUserEnteredInvitationNote(_userEnteredInvitationNote);
        setPostCommentSourcePage(POST_COMMENT_SOURCE_PAGE.INVITATION_NOTE);
        openGeneratePopupOrAuthorisationPopup();
      };
      const icon = document.createElement("img");
      icon.setAttribute("style", "width: 18px; height: 18px;");
      icon.src = getImagePath("icon-34.png");
      button.appendChild(icon);
      invitateNoteContainer?.insertBefore(button, invitateNoteTextArea.nextElementSibling);
    },
    [openGeneratePopupOrAuthorisationPopup]
  );

  const addButtonOnHeadlineTextInput = useCallback(
    (headlineTextInput: HTMLElement) => {
      const headlineTextInputContainer = headlineTextInput.parentElement!;
      if (headlineTextInputContainer.querySelector(`.${CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP}`)) {
        return;
      }
      const buttonContainer = document.createElement("div");
      buttonContainer.setAttribute(
        "style",
        `width: 100%; display: flex; justify-content: flex-end; align-items: center; padding-right: 12px`
      );
      const button = document.createElement("button");
      button.setAttribute("class", CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP);
      button.setAttribute(
        "style",
        `width: 40px; height: 40px; cursor: pointer; display: flex; justify-content: center; align-items: center;`
      );
      const _currentLinkedInUserURL = getProfileUrl();
      if (_currentLinkedInUserURL) {
        setCurrentLinkedInUserURL(_currentLinkedInUserURL);
      }
      const _currentLinkedInUserName = getCurrentUserNameFromMessageList();
      // EvyAILogger.log({ _currentLinkedInUserName });
      setCurrentLinkedInUserName(_currentLinkedInUserName);
      button.onclick = (event) => {
        event.stopPropagation();
        setApiRequestType(API_REQUEST_TYPE.PROFILE_HEADLINE);
        setProfileHeadlineTextInput(headlineTextInput as HTMLInputElement);
        setPostCommentSourcePage(POST_COMMENT_SOURCE_PAGE.PROFILE_HEADLINE);
        const { firstName, lastName, headline, currentPosition } = getProfileInfoFromIntroEditForm();
        setProfileFirstName(firstName);
        setProfileLastName(lastName);
        setProfileHeadline(headline);
        setProfileCurrentPosition(currentPosition);
        setCurrentPathHref(extractLinkedInProfile(window.location.href));
        openGeneratePopupOrAuthorisationPopup();
      };
      const icon = document.createElement("img");
      icon.setAttribute("style", "width: 18px; height: 18px;");
      icon.src = getImagePath("icon-34.png");
      button.appendChild(icon);
      buttonContainer.append(button);
      // buttonContainer.appendChild(button);
      headlineTextInputContainer?.append(buttonContainer);
      // headlineTextInputContainer?.insertBefore(button, headlineTextInput);
    },
    [openGeneratePopupOrAuthorisationPopup]
  );

  const addButtonOnProfileAboutTextArea = useCallback(
    (profileAboutTextArea: HTMLElement) => {
      const aboutTextAreaContainer = profileAboutTextArea.parentElement!;
      if (aboutTextAreaContainer?.querySelector(`.${CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP}`)) {
        return;
      }
      const button = document.createElement("button");
      button.setAttribute("class", CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP);
      button.setAttribute(
        "style",
        `width: 40px; height: 40px; cursor: pointer; display: flex; justify-content: center; align-items: center; position: absolute; bottom: 20px; right: 10px;`
      );
      const _currentLinkedInUserURL = getProfileUrl();
      if (_currentLinkedInUserURL) {
        setCurrentLinkedInUserURL(_currentLinkedInUserURL);
      }
      const _currentLinkedInUserName = getCurrentUserNameFromMessageList();
      // EvyAILogger.log({ _currentLinkedInUserName });
      setCurrentLinkedInUserName(_currentLinkedInUserName);
      button.onclick = (event) => {
        event.stopPropagation();
        setApiRequestType(API_REQUEST_TYPE.PROFILE_ABOUT);
        setProfileAboutTextArea(profileAboutTextArea as HTMLTextAreaElement);
        setPostCommentSourcePage(POST_COMMENT_SOURCE_PAGE.PROFILE_ABOUT);
        setProfileAboutText((profileAboutTextArea as HTMLTextAreaElement).value);
        const _name = getNameFromProfilePage();
        const _headline = getTaglineFromProfilePage();
        const _experiences = getExperiencesFromProfilePage();
        const _educations = getEducationFromProfilePage();
        const _licensesAndCertifications = getLicensesAndCertificationsFromProfilePage();
        setProfileName(_name);
        setProfileHeadline(_headline);
        setProfileExperiences(_experiences);
        setProfileEducation(_educations);
        setProfileLicensesAndCertifications(_licensesAndCertifications);
        setCurrentPathHref(extractLinkedInProfile(window.location.href));
        openGeneratePopupOrAuthorisationPopup();
      };
      const icon = document.createElement("img");
      icon.setAttribute("style", "width: 18px; height: 18px;");
      icon.src = getImagePath("icon-34.png");
      button.appendChild(icon);
      aboutTextAreaContainer?.insertBefore(button, profileAboutTextArea);
    },
    [openGeneratePopupOrAuthorisationPopup]
  );

  const addButtonOnRecommendationDialog = useCallback(
    (recommendationTextArea: HTMLTextAreaElement) => {
      const parentContainer = recommendationTextArea.parentElement!;
      if (parentContainer.querySelector(`.${CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP}`)) {
        return;
      }
      const button = document.createElement("button");
      button.setAttribute("class", CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP);
      button.setAttribute(
        "style",
        `width: 40px; height: 40px; cursor: pointer; display: flex; justify-content: center; align-items: center; position: absolute; bottom: 17px; right: 2px;`
      );
      const _currentLinkedInUserURL = getProfileUrl();
      if (_currentLinkedInUserURL) {
        setCurrentLinkedInUserURL(_currentLinkedInUserURL);
      }
      const _currentLinkedInUserName = getCurrentUserNameFromMessageList();
      // EvyAILogger.log({ _currentLinkedInUserName });
      setCurrentLinkedInUserName(_currentLinkedInUserName);
      button.onclick = (event) => {
        event.stopPropagation();
        // setConnectingUserName(getNameFromProfilePage());
        // setConnectingUserTagline(getTaglineFromProfilePage());
        // setConnectingUserExperiences(getExperiencesFromProfilePage());
        // setProfileEducation(getEducationFromProfilePage());
        // setProfileLicensesAndCertifications(
        //   getLicensesAndCertificationsFromProfilePage()
        // );

        const _recommendationInfo = getRecommendationInfo();
        if (_recommendationInfo?.relationship?.length === 0 || _recommendationInfo?.positionAtTheTime?.length === 0) {
          alert('Please select both "Relationship" and "Position at the time"');
          return;
        }
        setRecommendationInfo(_recommendationInfo);
        setApiRequestType(API_REQUEST_TYPE.RECOMMENDATION_TEXT);
        setRecommendationTextArea(recommendationTextArea);
        const _userEnteredRecommendationText = recommendationTextArea?.value?.trim();
        setUserEnteredRecommendationText(_userEnteredRecommendationText);
        setPostCommentSourcePage(POST_COMMENT_SOURCE_PAGE.RECOMMENDATION_TEXT);
        if (!validateLinkedRecommendationInUrl(window.location.href)) {
          setCurrentPathHref(extractLinkedInProfile(window.location.href));
        } else {
          setCurrentPathHref("");
        }
        openGeneratePopupOrAuthorisationPopup(API_REQUEST_TYPE.RECOMMENDATION_TEXT);
      };
      const icon = document.createElement("img");
      icon.setAttribute("style", "width: 18px; height: 18px;");
      icon.src = getImagePath("icon-34.png");
      button.appendChild(icon);
      parentContainer?.insertBefore(button, recommendationTextArea.nextElementSibling);
    },
    [openGeneratePopupOrAuthorisationPopup]
  );

  const addButtonSales = useCallback(
    (commentBoxTextEditor: HTMLElement) => {
      if (commentBoxTextEditor.querySelector(`.${CLASS_NAMES.COMMENT_BOX_TEXT_EDITOR}`)) {
        return;
      }
      let parentElement = commentBoxTextEditor.parentElement;
      let commentBoxId = "";
      while (parentElement) {
        if (parentElement.classList.contains(CLASS_NAMES.COMMENT_BOX_WITH_ID)) {
          commentBoxId = parentElement.getAttribute("id")!;
          break;
        }
        parentElement = parentElement.parentElement;
      }
      const _currentLinkedInUserURL = getProfileUrl();
      if (_currentLinkedInUserURL) {
        setCurrentLinkedInUserURL(_currentLinkedInUserURL);
      }
      const linkedInUserName = getCurrentUserName(parentElement!);
      setCurrentLinkedInUserName(linkedInUserName);
      const button = document.createElement("button");
      button.setAttribute("class", CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP);
      button.setAttribute(
        "style",
        "width: 40px; height: 40px; cursor: pointer; display: flex; justify-content: center; align-items: center;"
      );
      button.onclick = (event) => {
        event.stopPropagation();
        onGenericButtonClick(commentBoxId, commentBoxTextEditor);
      };
      const icon = document.createElement("img");
      icon.setAttribute("style", "width: 18px; height: 18px;");
      icon.src = getImagePath("icon-34.png");
      button.appendChild(icon);
      setTimeout(() => {
        commentBoxTextEditor.parentElement?.insertBefore(button, commentBoxTextEditor.nextSibling);
      }, 200);
    },
    [openGeneratePopupOrAuthorisationPopup]
  );

  const addButtonOnSalesMessagePage = useCallback(
    async (messageTextEditorContainer: HTMLElement) => {
      const messageBoxTextEditorContainer = messageTextEditorContainer.parentElement;
      // EvyAILogger.log("MESSAGE BOX TEXT EDITOR", messageTextEditorContainer);

      if (messageBoxTextEditorContainer) {
        if (messageBoxTextEditorContainer.querySelector(`.${CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP}`)) {
          return;
        }
        await sleep(0);

        const button = document.createElement("button");
        button.setAttribute("class", CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP);
        button.setAttribute(
          "style",
          "cursor: pointer; display: flex; justify-content: center; align-items: center; border:none;background:transparent"
        );

        button.onclick = (event) => {
          event.stopPropagation();
          event.preventDefault();
          const NumberOfMessages = 6;
          const otherUserName = getOtherUserNameOnSalesMessagePage();
          const lastMessages = getPreviousMessageOfSalesPage(NumberOfMessages);

          setLastMessages(lastMessages);
          setAuthorName(otherUserName);
          setApiRequestType(API_REQUEST_TYPE.MESSAGE_REPLY);
          setSelectedMessageBoxContainer(messageBoxTextEditorContainer);
          setPostCommentSourcePage(POST_COMMENT_SOURCE_PAGE.SALES_MESSAGE_PAGE);
          openGeneratePopupOrAuthorisationPopup();
        };
        const icon = document.createElement("img");
        icon.setAttribute("style", "width: 18px; height: 18px;");
        icon.src = getImagePath("icon-34.png");
        button.appendChild(icon);

        const sendButton = messageBoxTextEditorContainer?.querySelector(
          `button.${CLASS_NAMES.SALES_MESSAGE_SEND_BUTTON}`
        ) as HTMLElement;

        const buttonContainer = sendButton.parentElement as HTMLElement;

        setTimeout(() => {
          buttonContainer?.insertBefore(button, sendButton);
        }, 200);
      }
    },
    [openGeneratePopupOrAuthorisationPopup]
  );

  const clearExistingSaveProfileButtons = () => {
    let existingElement = document.getElementById("profile-evny-save-btn");
    const alreadyExistingCloseModel = existingElement?.getAttribute("alreadyExistingCloseModel");
    if (!!!alreadyExistingCloseModel) {
      if (existingElement) {
        if (!isLinkedInProfilePageContect(currentUrl)) {
          EvyAILogger.log("clearExistingSaveProfileButtons >>>");
          existingElement.remove();
        }
      }
    } else {
      setTimeout(() => {
        existingElement?.removeAttribute("alreadyExistingCloseModel");
      }, 1000);
    }
  };

  const addProfileButton = useCallback(
    async (profileButtonsContainer: HTMLElement) => {
      let parentElement = profileButtonsContainer.parentElement;
      const _currentLinkedInUserURL = getProfileUrl();
      if (_currentLinkedInUserURL) {
        setCurrentLinkedInUserURL(_currentLinkedInUserURL);
      }
      const linkedInUserName = getCurrentUserName(parentElement!);
      setCurrentLinkedInUserName(linkedInUserName);
      const currentUser = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_USER_AUTH_STATE);
      const alreadyAdded = document.getElementById("profile-evny-save-btn");
      if (profileButtonsContainer.querySelector(`.${CLASS_NAMES.EXTENSION_PROFILE_BUTTON}`) || alreadyAdded) {
        return;
      }
      const _authenticationState = onAuthUserChanged(currentUser);

      const buttonContainer = document.createElement("div");
      buttonContainer.id = "profile-evny-save-btn";
      buttonContainer.style.position = "fixed";
      buttonContainer.style.top = "0px";
      buttonContainer.style.zIndex = "2147483646";

      buttonContainer.addEventListener("click", (evt) => {
        evt.stopPropagation();
      });

      const shadowRoot = buttonContainer.attachShadow({ mode: "open" });
      const mountPoint = document.createElement("div");
      const emotionRoot = document.createElement("div");
      shadowRoot.appendChild(mountPoint);
      shadowRoot.appendChild(emotionRoot);
      document.documentElement.appendChild(buttonContainer);
      const saveButton = document.createElement("span");
      mountPoint.appendChild(saveButton);
      const root = createRoot(mountPoint); // Corrected to use mountPoint
      const emotionCache = createEmotionCache({
        key: "mantine",
        container: emotionRoot,
      });
      root.render(
        <MantineProvider emotionCache={emotionCache}>
          <SaveProfile
            setIsCheckingUserAuthStatus={setIsCheckingUserAuthStatus}
            _authenticationState={_authenticationState}
            currentUser={currentUser}
            setWillDoActionAfterLogIn={setWillDoActionAfterLogIn}
            setWillShowLoginPopup={setWillShowLoginPopup}
            onAuthUserChanged={onAuthUserChanged}
          />
        </MantineProvider>
      );
      //clearExistingSaveProfileButtons();
      profileButtonsContainer.parentElement?.insertBefore(saveButton, profileButtonsContainer.nextSibling);
      // setTimeout(() => {
      //   // clearExistingSaveProfileButtons();
      // }, 1000);
    },
    [authenticationState]
  );

  function percpectiveEditors() {
    const perpectiveBoxTextEditors = document.getElementsByClassName(CLASS_NAMES.CONTRIBUTION_TEXT_WRAPPER);
    let perpectiveBoxTextEditor = null;
    if (perpectiveBoxTextEditors.length > 0) {
      for (let i = 0; i < perpectiveBoxTextEditors.length; i++) {
        perpectiveBoxTextEditor = perpectiveBoxTextEditors[i];
        if (perpectiveBoxTextEditor.getElementsByClassName(CLASS_NAMES.EXTENSION_BUTTON_OPEN_POPUP).length < 1) {
          addButtonPerpective(perpectiveBoxTextEditor as HTMLElement);
        }
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      percpectiveEditors();
    }, 1000);
  }, []);

  useEffect(() => {
    const handleMutations = () => {
      if (isFeedPage(window.location.href)) {
        if (targetNode.getElementsByClassName(CLASS_NAMES.LINKDLIN_FEED_MAIN_LAYOUT)) {
          const feedContianer = targetNode.querySelector(`.${CLASS_NAMES.LINKDLIN_FEED_MAIN_LAYOUT}`);
          if (feedContianer) {
            addFeedContainer(feedContianer as HTMLElement);
          }
        }
      }
    };
    const observer = new MutationObserver(handleMutations);
    const config = {
      childList: true,
      subtree: true,
    };
    observer.observe(document.body, config);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isLinkedInProfilePage(currentUrl)) {
      clearExistingSaveProfileButtons();
    }
    if (!isLinkedInSNProfilePage(currentUrl)) {
      clearExistingSaveProfileButtons();
    }
    if (isLinkedInProfilePage(currentUrl)) {
      clearExistingSaveProfileButtons();

      const handleMutations = () => {
        // clearExistingSaveProfileButtons();

        const alreadyAdded = document.getElementById("save-profile-button-id");

        const elementsWithClass = targetNode.getElementsByClassName(CLASS_NAMES.PROFILE_BTN_CONTAINER);
        if (elementsWithClass.length > 0) {
          const firstElement = elementsWithClass[0];
          // if (
          //   firstElement instanceof HTMLElement &&
          //   !firstElement.querySelector(".profile-evny-save-span")
          // ) {
          //   addProfileButton(firstElement);
          // }

          if (!alreadyAdded && firstElement instanceof HTMLElement) {
            addProfileButton(firstElement);
          }
        }
      };

      // const btnContainers = targetNode.getElementsByClassName(
      //   CLASS_NAMES.PROFILE_BTN_CONTAINER
      // );

      // if (btnContainers.length > 0 && btnContainers[0] instanceof HTMLElement) {
      //   const observer = new MutationObserver(handleMutations);
      //   observer.observe(btnContainers[0], { childList: true, subtree: true });
      //   return () => observer.disconnect();
      // }
      const intervalId = setInterval(() => {
        const btnContainers = targetNode.getElementsByClassName(CLASS_NAMES.PROFILE_BTN_CONTAINER);
        if (btnContainers.length > 0 && btnContainers[0] instanceof HTMLElement) {
          clearInterval(intervalId);
          //const observer = new MutationObserver(handleMutations);
          handleMutations();
          // observer.observe(btnContainers[0], { childList: true, subtree: true });
          // return () => observer.disconnect();
        }
      }, 100);
    } else if (isLinkedInSNProfilePage(currentUrl)) {
      clearExistingSaveProfileButtons();

      const handleMutations = () => {
        // clearExistingSaveProfileButtons();

        const alreadyAdded = document.getElementById("save-profile-button-id");

        let elementsWithClass = targetNode.querySelectorAll(CLASS_NAMES.SN_PROFILE_BTN_CONTAINER);
        if (elementsWithClass.length === 0) {
          const htmlCollection: HTMLCollectionOf<Element> = targetNode.getElementsByClassName(
            CLASS_NAMES.SN_PROFILE_BTN_CONTAINER_search
          );

          // Convert HTMLCollection to an array if you need array methods
          elementsWithClass = Array.from(htmlCollection) as unknown as NodeListOf<Element>;
        }

        if (elementsWithClass.length > 0) {
          const firstElement = elementsWithClass[0];

          if (!alreadyAdded && firstElement instanceof HTMLElement) {
            addProfileButton(firstElement);
          }
        }
      };
      const intervalId = setInterval(() => {
        let btnContainers = targetNode.querySelectorAll(CLASS_NAMES.SN_PROFILE_BTN_CONTAINER);
        if (btnContainers.length > 0 && btnContainers[0] instanceof HTMLElement) {
          clearInterval(intervalId);
          //const observer = new MutationObserver(handleMutations);
          handleMutations();
          // observer.observe(btnContainers[0], { childList: true, subtree: true });
          // return () => observer.disconnect();
        }
      }, 100);
      const btnContainers = targetNode.querySelectorAll(CLASS_NAMES.SN_PROFILE_BTN_CONTAINER_search);
      if (btnContainers.length > 0 && btnContainers[0] instanceof HTMLElement) {
        const observer = new MutationObserver(handleMutations);
        observer.observe(btnContainers[0], { childList: true, subtree: true });
        //return () => observer.disconnect();
      }
      // General observer to watch for any added nodes in the targetNode
      const generalObserver = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
          if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
            for (let node of mutation.addedNodes) {
              if (node instanceof HTMLElement) {
                if (node.classList.contains(CLASS_NAMES.SN_PROFILE_BTN_CONTAINER_search)) {
                  // If the newly added node has the desired class, handle it
                  handleMutations();
                  const observer = new MutationObserver(handleMutations);
                  observer.observe(node, { childList: true, subtree: true });
                } else if (node.getElementsByClassName(CLASS_NAMES.SN_PROFILE_BTN_CONTAINER_search).length > 0) {
                  // If any child of the newly added node has the desired class, handle it
                  handleMutations();
                  const childNode = node.getElementsByClassName(CLASS_NAMES.SN_PROFILE_BTN_CONTAINER_search)[0];
                  const observer = new MutationObserver(handleMutations);
                  observer.observe(childNode, { childList: true, subtree: true });
                }
              }
            }
          }
        }
      });
      const intervalId_s = setInterval(() => {
        // Select the specific element from the HTMLCollection
        const leadSidesheetElements = document.getElementById("inline-sidesheet-outlet");
        if (leadSidesheetElements) {
          const leadSidesheet = leadSidesheetElements;
          generalObserver.observe(leadSidesheet, { childList: true, subtree: true });
          clearInterval(intervalId_s);
        } else {
          EvyAILogger.error("Element with class 'lead-sidesheet' not found.");
        }
      }, 100);
    }
  }, [currentUrl]);

  const mutationCallback = useCallback(
    async (mutations: MutationRecord[]) => {
      for (let mutation of mutations) {
        const targetHtmlElement = mutation.target as HTMLElement;
        if (targetHtmlElement.classList.contains(CLASS_NAMES.SHARE_BOX)) {
          addButtonOnCreatePostDialog(targetHtmlElement);
        }

        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(async (node: Node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const htmlElement = node as HTMLElement;

              //for iframe post view may be need in future
              // if (
              //   htmlElement.tagName === "IFRAME" &&
              //   htmlElement.id.startsWith("shared-update-iframe")
              // ) {
              //   const element = document.querySelector(
              //     'iframe[id^="shared-update-iframe"]'
              //   );
              //   //@ts-ignore
              //   const iframeNode = element?.contentDocument?.body;
              //   const observer = new MutationObserver(mutationCallback);
              //   observer.observe(iframeNode, mutationConfig);
              //   element?.classList.add("iframe-for-avyai");
              //   EvyAILogger.log(element?.innerHTML, "html element");
              // }
              const commentBox = document.querySelectorAll(`.${CLASS_NAMES.COMMENT_BOX_TEXT_EDITOR}`);
              const passTheTest =
                commentBox.length === 1 && document.querySelectorAll("#evyai-comment-popup-button").length === 0;
              if (
                htmlElement.classList.contains(CLASS_NAMES.COMMENT_BOX_FORM_CONTAINER) ||
                htmlElement.classList.contains(CLASS_NAMES.COMMENT_BOX_FORM_CONTAINER2) ||
                passTheTest
              ) {
                // EvyAILogger.log("enteredddddd........", passTheTest);
                // EvyAILogger.log("comment box", commentBox[0].nextElementSibling);

                // let commentBoxTextEditor =
                // commentBox.length === 1 ?
                //   commentBox[0]
                // :
                //   htmlElement.classList.contains(
                //     CLASS_NAMES.COMMENT_BOX_FORM_CONTAINER2
                //   )
                //   ?
                //   htmlElement.querySelector(
                //     `.${CLASS_NAMES.COMMENT_BOX_TEXT_EDITOR}`
                //   )
                //   :
                //   null
                let commentBoxTextEditor = null;
                if (passTheTest) {
                  commentBoxTextEditor = commentBox[0].nextElementSibling;
                } else if (htmlElement.classList.contains(CLASS_NAMES.COMMENT_BOX_FORM_CONTAINER2)) {
                  commentBoxTextEditor = htmlElement.querySelector(`.${CLASS_NAMES.COMMENT_BOX_TEXT_EDITOR}`);
                  commentBoxTextEditor = commentBoxTextEditor?.nextElementSibling;
                }

                if (commentBoxTextEditor) addButton(commentBoxTextEditor as HTMLElement);
              } else if (htmlElement.classList.contains(CLASS_NAMES.PROFILE_BTN_CONTAINER)) {
                // observeChildrenOfElement(node.firstChild as HTMLElement);
                // EvyAILogger.log(" addProfileButton addProfileButton ", htmlElement.firstChild)
                // addProfileButton(htmlElement.firstChild as HTMLElement);
              } else if (htmlElement.classList.contains(CLASS_NAMES.EDIT_COMMENT_CONTAINER)) {
                addButtonEdit(htmlElement as HTMLElement);
              } else if (htmlElement.classList.contains(CLASS_NAMES.MESSAGE_BOX_CONTAINER)) {
                addButtonOnMessagePage(htmlElement);
              } else if (htmlElement.classList.contains(CLASS_NAMES.SHARE_BOX)) {
                addButtonOnCreatePostDialog(htmlElement);
              } else if (
                htmlElement.classList.contains(CLASS_NAMES.INVITATION_NOTE_TEXT_AREA) &&
                htmlElement.tagName === "TEXTAREA"
              ) {
                addButtonOnInvitationNoteDialog(htmlElement);
              } else if (
                htmlElement.classList.contains(CLASS_NAMES.INVITATION_DIALOG) &&
                window.location.pathname.includes(PAGE_PATH.SEARCH)
              ) {
                const connectingUser = getConnectingUserNameFromSearch(htmlElement);
                if (connectingUser) {
                  setConnectingUserName(connectingUser);
                }
              } else if (
                htmlElement.tagName === "TEXTAREA" &&
                htmlElement.id.startsWith("gai-text-form-component") &&
                htmlElement.id.endsWith("-headline")
              ) {
                addButtonOnHeadlineTextInput(htmlElement);
              } else if (
                htmlElement.tagName === "TEXTAREA" &&
                (htmlElement.id.startsWith("gai-text-form-component") ||
                  htmlElement.id.startsWith("multiline-text-form-component")) &&
                htmlElement.id.endsWith("-summary")
              ) {
                addButtonOnProfileAboutTextArea(htmlElement);
              } else if (
                htmlElement.tagName === "TEXTAREA" &&
                htmlElement.id.startsWith("multiline-text-form-component") &&
                htmlElement.id.endsWith("-recommendationText")
              ) {
                addButtonOnRecommendationDialog(htmlElement as HTMLTextAreaElement);
              } else if (htmlElement.querySelector(CLASS_NAMES.COMMENT_BOX_TEXT_EDITOR)) {
                addButtonSales(htmlElement);
              } else if (htmlElement.classList.contains(CLASS_NAMES.SALES_MESSAGE_PAGE_CONTAINER) || htmlElement.classList.contains(CLASS_NAMES.SALES_MESSAGE_PAGE_CONTAINER2)) {
                addButtonOnSalesMessagePage(htmlElement);
              } else if (htmlElement.classList.contains(CLASS_NAMES.SALES_CONNECT)) {
                addButtonOnSalesInvitationNoteDialog(htmlElement);
              }
            }
          });
        }
      }
    },
    [
      addButton,
      // addProfileButton,
      addButtonEdit,
      addButtonOnMessagePage,
      addButtonOnCreatePostDialog,
      addButtonOnInvitationNoteDialog,
      addButtonOnHeadlineTextInput,
      addButtonOnProfileAboutTextArea,
      addButtonOnRecommendationDialog,
      addButtonOnSalesMessagePage,
      addButtonSales,
    ]
  );

  useEffect(() => {
    const commentBox = document.querySelectorAll(`.${CLASS_NAMES.COMMENT_BOX_FORM_CONTAINER2}`);
    commentBox.forEach((textbox) => {
      // Call your mutationCallback or any other logic here for each textbox
      const commentBox = document.querySelectorAll(`.${CLASS_NAMES.COMMENT_BOX_TEXT_EDITOR}`);
      const passTheTest =
        commentBox.length === 1 && document.querySelectorAll("#evyai-comment-popup-button").length === 0;
      if (
        textbox.classList.contains(CLASS_NAMES.COMMENT_BOX_FORM_CONTAINER) ||
        textbox.classList.contains(CLASS_NAMES.COMMENT_BOX_FORM_CONTAINER2) ||
        passTheTest
      ) {
        let commentBoxTextEditor = null;
        if (
          textbox.classList.contains(CLASS_NAMES.COMMENT_BOX_FORM_CONTAINER) ||
          textbox.classList.contains(CLASS_NAMES.COMMENT_BOX_FORM_CONTAINER2)
        ) {
          commentBoxTextEditor = textbox.querySelector(`.${CLASS_NAMES.COMMENT_BOX_TEXT_EDITOR}`);
          commentBoxTextEditor = commentBoxTextEditor?.nextElementSibling;
        }
        if (commentBoxTextEditor) addButton(commentBoxTextEditor as HTMLElement);
      }
    });
    const observer = new MutationObserver(mutationCallback);

    observer.observe(targetNode, mutationConfig);

    return () => {
      observer.disconnect();
    };
  }, [mutationCallback, targetNode]);

  const onCommentSelected = async (comment: string) => {
    //EvyAILogger.log("### comment selected", comment);
    setWillShowPopup(false);

    await sleep(0);
    if (postCommentSourcePage === POST_COMMENT_SOURCE_PAGE.HOME) {
      const commentBoxEditor = document
        .getElementById(selectedCommentBoxId)
        ?.querySelector(`.${CLASS_NAMES.COMMENT_EDITOR}`) as HTMLElement;
      commentBoxEditor?.focus();
      //commentBoxEditor.textContent = comment;
      if (commentBoxEditor.innerHTML == "<p><br></p>") {
        commentBoxEditor.innerHTML = `${comment}`;
      } else {
        const pElement = commentBoxEditor.querySelector("p") as HTMLElement;
        const textNode = document.createTextNode(comment);
        if (pElement) {
          pElement.appendChild(textNode);
        } else {
          commentBoxEditor.innerHTML += `${comment}`;
        }
      }
    } else if (postCommentSourcePage === POST_COMMENT_SOURCE_PAGE.MESSAGE) {
      const messageEditor = selectedMessageBoxContainer?.querySelector(`.${CLASS_NAMES.MESSAGE_EDITOR}`) as HTMLElement;
      const cleanedMessage = removeEmojis(comment);
      messageEditor?.focus();
      document.execCommand("insertText", false, cleanedMessage);
      // messageEditor.textContent = comment;
    } else if (postCommentSourcePage === POST_COMMENT_SOURCE_PAGE.SALES_MESSAGE_PAGE) {
      const messageEditor = document.querySelector(CLASS_NAMES.COMPOSE_FORM__MESSAGE_FIELD) as HTMLElement;
      messageEditor?.focus();
      document.execCommand("insertText", false, comment);
      // messageEditor.textContent = comment;
    } else if (postCommentSourcePage === POST_COMMENT_SOURCE_PAGE.CREATE_POST && postCreationTextContainer !== null) {
      postCreationTextContainer?.focus();
      postCreationTextContainer.textContent = comment;
      // document.execCommand("insertText", false, comment);
    } else if (postCommentSourcePage === POST_COMMENT_SOURCE_PAGE.ADVICE) {
      const perpectiveBox = document.querySelector(`div[data-thread-urn="${perpectiveBoxId}"]`);
      const textEditor = perpectiveBox?.querySelector(CLASS_NAMES.CONTRIBUTION_TEXT_AREA);
      if (textEditor instanceof HTMLElement) {
        textEditor.focus();
        textEditor.textContent = "";
        document.execCommand("insertText", false, comment);
      }
    } else if (postCommentSourcePage === POST_COMMENT_SOURCE_PAGE.INVITATION_NOTE && invitationNoteTextArea !== null) {
      invitationNoteTextArea?.focus();
      if (invitationNoteTextArea) {
        invitationNoteTextArea.value = "";
        document.execCommand("insertText", false, comment);
      }
    } else if (postCommentSourcePage === POST_COMMENT_SOURCE_PAGE.PROFILE_HEADLINE) {
      profileHeadlineTextInput?.focus();
      if (profileHeadlineTextInput) {
        profileHeadlineTextInput.value = comment;
      }
    } else if (postCommentSourcePage === POST_COMMENT_SOURCE_PAGE.PROFILE_ABOUT) {
      profileAboutTextArea?.focus();
      if (profileAboutTextArea) {
        profileAboutTextArea.value = comment;
      }
    } else if (postCommentSourcePage === POST_COMMENT_SOURCE_PAGE.RECOMMENDATION_TEXT) {
      recommendationTextArea?.focus();
      if (recommendationTextArea) {
        recommendationTextArea.value = "";
        document.execCommand("insertText", false, comment);
      }
    }

    // const commentWords = comment.split(' ');
    // for (let i = 0; i < commentWords.length; i++) {
    //   document.execCommand('insertText', false, commentWords[i]);
    //   const random = Math.random();
    //   await sleep(random * 300);
    // }
  };

  const onButtonClickOnSignInWithGoogle = useCallback(() => {
    setIsSigningInWithGoogle(true);
    sendMessageToExtensionPages(MESSAGE_ACTION.SIGN_IN_WITH_GOOGLE)
      .then(() => {
        // EvyAILogger.log("### Signed In..");
      })
      .catch((error: any) => {
        EvyAILogger.log(`Error:::`, error.message);
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "onButtonClickOnSignInWithGoogle",
            },
          },
        });
      })
      .finally(() => {
        setIsSigningInWithGoogle(false);
      });
  }, []);

  const onButtonClickSignInWithPhone = useCallback(() => {
    setAuthenticationState(AuthenticationState.SendVerificationCodeInPhone);
  }, []);

  const onButtonClickGoBackOnVerifyEmail = useCallback(async () => {
    await sendMessageToExtensionPages(MESSAGE_ACTION.SIGN_OUT);
  }, []);

  const onButtonClickGoBackOnVerifyPhone = useCallback(async () => {
    setAuthenticationState(AuthenticationState.Login);
  }, []);

  const onButtonClickForgotPassword = useCallback(async () => {
    setAuthenticationState(AuthenticationState.ForgotPassword);
  }, []);

  const onButtonClickGoBackOnForgotPassword = useCallback(async () => {
    setAuthenticationState(AuthenticationState.Login);
  }, []);

  const getProfileParams = (): Profile => {
    if (apiRequestType === API_REQUEST_TYPE.INVITATION_NOTE) {
      return {
        fullName: connectingUserName,
        headline: connectingUserTagline,
        experiences: connectingUserExperiences,
        educations: profileEducation,
        licensesAndCertifications: profileLicensesAndCertifications,
      };
    } else if (apiRequestType === API_REQUEST_TYPE.PROFILE_HEADLINE) {
      return {
        firstName: profileFirstName,
        lastName: profileLastName,
        headline: profileHeadline,
        currentPosition: profileCurrentPosition,
      };
    } else if (apiRequestType === API_REQUEST_TYPE.PROFILE_ABOUT) {
      return {
        fullName: profileName,
        headline: profileHeadline,
        experiences: profileExperiences,
        educations: profileEducation,
        licensesAndCertifications: profileLicensesAndCertifications,
      };
    }

    return {};
  };

  const [isShowingPlanUpgrade, setIsShowingPlanUpgrade] = useState(false);
  const [usagePercentage, setUsagePercentage] = useState(0);
  const [isLoadingSubscriptionStatus, setIsLoadingSubscriptionStatus] = useState(true);
  const [isFetchingCustomerPortalLink, setIsFetchingCustomerPortalLink] = useState(false);
  const [currentSubscriptionStatus, setCurrentSubscriptionStatus] = useState<SubscriptionStatus>(
    SubscriptionStatus.FREE
  );

  const fetchCurrentSubscriptionStatus = async () => {
    try {
      setIsLoadingSubscriptionStatus(true);
      const response = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SUBSCRIPTION_STATUS);

      EvyAILogger.log("sub status", response);
      setFullSubscriptionStatus(response);
      setCurrentSubscriptionStatus(response.status);
      setUsagePercentage(response.usagePercentage);
      setIsLoadingSubscriptionStatus(false);
    } catch (error) {
      // EvyAILogger.log("### Error in getting subscription status");
      EvyAILogger.log({ error });
      setIsLoadingSubscriptionStatus(false);
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "fetchCurrentSubscriptionStatus",
          },
        },
      });
    }
  };

  const fetchCustomerPortalLink = async () => {
    try {
      setIsFetchingCustomerPortalLink(true);
      const response = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_MANAGE_SUBSCRIPTION_LINK);
      // EvyAILogger.log({ response });
      if (response.url?.url) {
        sendMessageToExtensionPages(MESSAGE_ACTION.OPEN_NEW_TAB, {
          url: response.url.url,
        });
      }
    } catch (error) {
      // EvyAILogger.log("### Error in getting customer portal link");
      EvyAILogger.log({ error });
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "fetchCustomerPortalLink",
          },
        },
      });
    } finally {
      setIsFetchingCustomerPortalLink(false);
    }
  };

  useEffect(() => {
    // if (authenticationState === AuthenticationState.MyAccount) {
    fetchCurrentSubscriptionStatus();
    // }
  }, [authenticationState]);

  const handleShowHeaderButtons = () => {
    if (
      authenticationState === AuthenticationState.Login ||
      authenticationState === AuthenticationState.Register ||
      authenticationState === AuthenticationState.ForgotPassword
    ) {
      setShowHeaderButtons(false);
    } else {
      setShowHeaderButtons(true);
    }
  };

  const handleDisableAccountButtons = () => {
    if (
      authenticationState === AuthenticationState.MyAccount ||
      authenticationState === AuthenticationState.setting ||
      authenticationState === AuthenticationState.manageSubscripion ||
      authenticationState === AuthenticationState.ShareWithFriend
    ) {
      setDisableAccountButtons(true);
    } else {
      setDisableAccountButtons(false);
    }
  };

  useEffect(() => {
    handleShowHeaderButtons();
    handleDisableAccountButtons();
  }, [authenticationState]);

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Escape") {
        setWillShowPopup(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setWillShowPopup]);

  useEffect(() => {
    const getLastUserPersona = async () => {
      const lastPersonaUsed = await BrowserStorage.asyncGetItem(STORAGE_KEYS.LAST_PERSONA_USED);
      if (lastPersonaUsed) {
        const isAlreadyFetched = personas.some((persona) => persona.id === lastPersonaUsed);
        if (!isAlreadyFetched) {
          const persona = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SINGLE_PERSONA, {
            user: loggedInUser,
            personaId: lastPersonaUsed,
          });
          setSelectedPersona(lastPersonaUsed);
          if (persona) {
            setPersonas([...personas, persona]);
          }
        }
      }
    };
    getLastUserPersona();
  }, [selectedPersona]);

  
  useEffect(()=>{
    const onChange = async (change:{
      [key: string]: chrome.storage.StorageChange;
    }) => {
      const accessTokenChange = change[CHROME_STORAGE_KEYS.accessToken]
      if(accessTokenChange){
        if(!accessTokenChange.newValue) {
          localStorage.setItem(LOCAL_STORAGE_KEYS.LOGGED_IN, String(false));
          onAuthUserChanged(null);
        }
      }
    }
    chrome.storage.local.onChanged.addListener(onChange);
    return () => {
      chrome.storage.local.onChanged.removeListener(onChange);
    }
  },[])


  if (isCheckingUserAuthStatus) {
    return null;
  }

  if (willShowPopup) {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          maxHeight: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 21213123,
        }}
        // onClick={() => {
        //   setWillShowPopup(false);
        // }}
      >
        {
          <InputPopup
            loggedInUser={loggedInUser}
            onCommentSelected={onCommentSelected}
            authorName={authorName}
            postText={postText}
            lastMessages={lastMessages}
            commentText={commentText}
            commentAuthor={commentAuthorName}
            postCreationText={postCreationText}
            currentPathHref={currentPathHref}
            userEnteredInvitationNote={userEnteredInvitationNote}
            profile={getProfileParams()}
            articleInfo={articleInfo}
            aboutText={profileAboutText}
            type={apiRequestType}
            recommendationInfo={recommendationInfo}
            userEnteredRecommendationText={userEnteredRecommendationText}
            currentLinkedInUserName={currentLinkedInUserName}
            currentLinkedInUserURL={currentLinkedInUserURL}
            generateLIURL={generateLIURL}
            setGenerateLIURL={setGenerateLIURL}
            setCurrentLinkedInUserURL={setCurrentLinkedInUserURL}
            currentSubscriptionStatus={currentSubscriptionStatus}
            perpectiveInfo={perpectiveInfo}
            isLoadingSubscriptionStatus={isLoadingSubscriptionStatus}
            onCloseClicked={() => setWillShowPopup(false)}
            buyNowButtonClick={() => {
              const httpsLink = "https://app.evyai.com/subscription-pricing/?isNavigateToSubscription-pricing=true";
              window.open(httpsLink, "_blank");
            }}
            templates={templates}
            setTemplates={setTemplates}
            personas={personas}
            setPersonas={setPersonas}
            fullSubscriptionStatus={fullSubscriptionStatus}
            articleResponseError={articleResponseError}
            setArticleResponseError={setArticleResponseError}
            lastTemplateDoc={lastTemplateDoc}
            setLastTemplateDoc={setLastTemplateDoc}
            pageForTemplates={pageForTemplates}
            setPageForTemplates={setPageForTemplates}
            hasMoreTemplates={hasMoreTemplates}
            setHasMoreTemplates={setHasMoreTemplates}
            lastPersonaDoc={lastPersonaDoc}
            setLastPersonaDoc={setLastPersonaDoc}
            pageForPersonas={pageForPersonas}
            setPageForPersonas={setPageForPersonas}
            hasMorePersonas={hasMorePersonas}
            setHasMorePersonas={setHasMorePersonas}
            templatesFetched={templatesFetched}
            setTemplatesFetched={setTemplatesFetched}
            personasFetched={personasFetched}
            setPersonasFetched={setPersonasFetched}
            selectedPersona={selectedPersona}
            setSelectedPersona={setSelectedPersona}
          />
        }
      </div>
    );
  }

  return (
    <>
      {showLimitEndPopup && <LimitReachedDialog setShow={setShowLimitEndPopup} />}

      {showRecommendDialog && !willShowLoginPopup && <GotoUserProfileDialog setShow={setShowRecommendDialog} />}

      {willShowLoginPopup && (
        <div
          style={{
            position: "fixed",
            zIndex: 0,
            width: "100%",
            height: "80vh",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            return setWillShowLoginPopup(false);
          }}
        >
          <Box
            className={classes.wrapper}
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
            }}
          >
            <Box
              className={classes.closeIconButton}
              onClick={() => {
                setWillShowLoginPopup(false);
              }}
            >
              <Image src={getImagePath("close_icon.png")} alt={"Close Dialog"} width={25} height={25} />
            </Box>
            <Box className={classes.container}>
              <Flex className={authenticationState == AuthenticationState.Login ? classes.loginHeader : classes.header}>
                <Image
                  src={getImagePath("evi_ai_logo.png")}
                  alt={"Evy AI Logo"}
                  // width={75}
                  width={authenticationState == AuthenticationState.Login ? 89 : 75}
                  height={authenticationState == AuthenticationState.Login ? 44.5 : "auto"}
                />
                {showHeaderButtons && (
                  <Flex>
                    <div className={classes.questionsIssuesContainer}>
                      <img
                        // className={classes.helpImg}
                        src={getImagePath("Help.svg")}
                        alt={"warning"}
                        color={authenticationState === AuthenticationState.QuestionsAndIssues ? "#C2C0B8" : "#fff"}
                        // className={classes.headerButton2}
                        style={{
                          cursor: !(authenticationState === AuthenticationState.QuestionsAndIssues)
                            ? "pointer"
                            : "default",
                        }}
                        onClick={() => {
                          setAuthenticationState(AuthenticationState.QuestionsAndIssues);
                        }}
                      />
                    </div>
                    <hr
                      style={{
                        height: "20px",
                        marginLeft: "20px",
                        backgroundColor: "white",
                        opacity: "0.5",
                      }}
                    />

                    <div className={classes.headerButtonsContainer} style={{ marginLeft: "20px" }}>
                      {/* <FiMessageSquare
                      onClick={() => {}}
                      className={classes.headerButton1}
                    />
                    <div className={classes.headerButtonSepreater} /> */}
                      <BsPerson
                        color={disableAccountButtons ? "#C2C0B8" : "#fff"}
                        className={classes.headerButton2}
                        style={{
                          cursor: !disableAccountButtons ? "pointer" : "default",
                        }}
                        onClick={() => {
                          if (!disableAccountButtons) {
                            setAuthenticationState(AuthenticationState.MyAccount);
                          }
                        }}
                      />
                    </div>
                  </Flex>
                )}
              </Flex>

              <Box className={classes.content}>
                {/* {(authenticationState === AuthenticationState.UpgradePlan ||
                  (authenticationState ===
                    AuthenticationState.manageSubscripion &&
                    currentSubscriptionStatus === SubscriptionStatus.FREE)) && (
                  <UpgradePlan
                    onClickBackButton={() =>
                      setAuthenticationState(AuthenticationState.MyAccount)
                    }
                    onClickUpgradeNowButton={() => {}}
                  />
                )}

                {authenticationState ===
                  AuthenticationState.manageSubscripion &&
                  currentSubscriptionStatus === SubscriptionStatus.PRO && (
                    <ManageSubscription
                      setScreenIsLoading={setScreenIsLoading}
                      onClickGoBack={() =>
                        setAuthenticationState(AuthenticationState.MyAccount)
                      }
                    />
                  )} */}

                {authenticationState === AuthenticationState.MyAccount && (
                  <MyAccount
                    setAuthenticationState={setAuthenticationState}
                    fetchCustomerPortalLink={fetchCustomerPortalLink}
                    isLoadingSubscriptionStatus={isLoadingSubscriptionStatus}
                    isFetchingCustomerPortalLink={isFetchingCustomerPortalLink}
                    currentSubscriptionStatus={currentSubscriptionStatus}
                    setIsShowingPlanUpgrade={setIsShowingPlanUpgrade}
                    usagePercentage={usagePercentage}
                    onClickGoBack={() => setAuthenticationState(AuthenticationState.Authenticated)}
                    onClickGoSetting={() => setAuthenticationState(AuthenticationState.setting)}
                    // onClickGoManageSubscription={() =>
                    //   setAuthenticationState(
                    //     AuthenticationState.manageSubscripion
                    //   )
                    // }
                  />
                )}

                {authenticationState === AuthenticationState.QuestionsAndIssues && (
                  <QuestionsAndIssues onClickGoBack={() => setAuthenticationState(AuthenticationState.Authenticated)} />
                )}

                {/* ShareWithFriends ShareWithFriends */}

                {authenticationState === AuthenticationState.ShareWithFriend && (
                  <ShareWithFriends onClickBackButton={() => setAuthenticationState(AuthenticationState.MyAccount)} />
                )}

                {authenticationState === AuthenticationState.setting && (
                  <Setting
                    setScreenIsLoading={setScreenIsLoading}
                    onClickGoBack={() => setAuthenticationState(AuthenticationState.MyAccount)}
                  />
                )}

                {authenticationState === AuthenticationState.ForgotPassword && (
                  <ForgotPassword onClickGoBack={onButtonClickGoBackOnForgotPassword} />
                )}
                {authenticationState === AuthenticationState.Authenticated && (
                  <Authenticated setAuthenticationState={setAuthenticationState} />
                )}
                {authenticationState === AuthenticationState.UnverifiedAuthenticated && (
                  <VerifyEmail onClickGoBack={onButtonClickGoBackOnVerifyEmail} />
                )}
                {authenticationState === AuthenticationState.SendVerificationCodeInPhone && (
                  <SendVerificationCodeToPhone onClickGoBack={onButtonClickGoBackOnVerifyPhone} />
                )}
                {willShowAuthenticationHeaderAndFooter && (
                  <AuthenticationHeader
                    authenticationState={authenticationState}
                    onButtonClick={onButtonClickOnAuthHeader}
                    onClickSignInWithPhone={onButtonClickSignInWithPhone}
                    onClickSignInWithGoogle={onButtonClickOnSignInWithGoogle}
                  />
                )}
                {
                  // <Router>
                  authenticationState === AuthenticationState.Register ? (
                    <Register
                      onClickGoBack={() => {
                        // EvyAILogger.log(
                        //   "### (AuthenticationState.Login back button of register screen"
                        // );
                        setAuthenticationState(AuthenticationState.Login);
                        resetSavedRegisterData();
                      }}
                    />
                  ) : (
                    authenticationState === AuthenticationState.Login && <Login />
                  )
                  // </Router>
                }
                {/* {willShowAuthenticationHeaderAndFooter && (
                  <AuthenticationFooter
                    authenticationState={authenticationState}
                  />
                )} */}
              </Box>
              <LoadingOverlay visible={isSigningInWithGoogle || screenIsLoading} overlayBlur={2} />
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

export default Layout;
