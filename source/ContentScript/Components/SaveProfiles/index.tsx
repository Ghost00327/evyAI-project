import { UnAutehticatedSaveProfile } from "./unAutehticatedSaveProfile";
import { AutehticatedSaveProfile } from "./autehticatedSaveProfile";
import React, { useEffect, useRef, useState } from "react";
import { AuthenticationState, SubScriptionStaus_Type, isLinkedInSNProfilePage } from "../../../Config";
import { getLinkedInUrlFromProfilePageOfSales } from "../../../LinkedInParser";
import { MESSAGE_ACTION } from "../../../Config";
import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import LimitReachedDialog from "../LimitReachedDialog/LimitReachedDialog";
import { User } from "firebase/auth";
import { extractLinkedInProfile, formatLinkedInUrl, getImagePath } from "../../../Utils";
import { sentryClient } from "../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../Utils/EvyAILogger";

interface SaveProfileProps {
  setIsCheckingUserAuthStatus: React.Dispatch<React.SetStateAction<boolean>>;
  _authenticationState: any;
  currentUser: User;
  setWillDoActionAfterLogIn: React.Dispatch<React.SetStateAction<boolean>>;
  setWillShowLoginPopup: React.Dispatch<React.SetStateAction<boolean>>;
  onAuthUserChanged: (user: User) => void;
}

export const SaveProfile: React.FC<SaveProfileProps> = ({
  setIsCheckingUserAuthStatus,
  _authenticationState,
  currentUser,
  setWillDoActionAfterLogIn,
  setWillShowLoginPopup,
  onAuthUserChanged,
}) => {
  const [isProfileSaved, setIsProfileSaved] = useState(false);
  const [showLimitEndPopup, setShowLimitEndPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saveLoader, setSaveLoader] = useState(false);
  const [loginUser, setLoginUser] = useState(currentUser);
  const [allLists, setAllLists] = useState([]);
  const [profileLists, setProfileLists] = useState([]);
  const [searchLists, setSearchLists] = useState([]);
  const [currentProfile, setCurrentProfile] = useState<any>(null);
  const [currentAuthenticationState, seCurrentAuthenticationState] = useState<any>(_authenticationState);
  const [fullSubscriptionStatus, setFullSubscriptionStatus] = useState<SubScriptionStaus_Type>();
  const [currentProfileURL, setcurrentProfileURL] = useState("");

  const fetchCurrentSubscriptionStatus = async () => {
    try {
      const response = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SUBSCRIPTION_STATUS);
      EvyAILogger.log("sub status", response);
      setFullSubscriptionStatus(response);
    } catch (error) {
      // EvyAILogger.log("### Error in getting subscription status");
      EvyAILogger.log({ error });
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "fetchCurrentSubscriptionStatus",
          },
        },
      });
    }
  };

  const setUserAutentication = async () => {
    const user = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_USER_AUTH_STATE);
    if(user && currentAuthenticationState === AuthenticationState.Authenticated) {
        return { authenticationState: currentAuthenticationState, user: loginUser };
    } else {
      setLoginUser(user);
      const authenticationState = onAuthUserChanged(user);
      seCurrentAuthenticationState(authenticationState);
      return { authenticationState, user };
    }
  };

  const fetchUserData = async () => {
    if (currentAuthenticationState === AuthenticationState.Authenticated) {
      setTimeout(async function () {
        try {
          let extractedTargetProfileUrl: any = "";
          if (isLinkedInSNProfilePage(window.location.href)) {
            if (currentProfileURL == "") {
              extractedTargetProfileUrl = await getLinkedInUrlFromProfilePageOfSales();
              if (extractedTargetProfileUrl != "") {
                setcurrentProfileURL(extractedTargetProfileUrl);
              }
            } else {
              extractedTargetProfileUrl = currentProfileURL;
            }
          } else {
            extractedTargetProfileUrl = extractLinkedInProfile(window.location.href) + "/";
            setcurrentProfileURL(extractedTargetProfileUrl);
          }
          const urlProfile = await sendMessageToExtensionPages(MESSAGE_ACTION.IS_PROFILE_SAVED, {
            uid: loginUser.uid,
            targetProfileUrl: extractedTargetProfileUrl,
          });
          if (urlProfile) {
            setIsProfileSaved(true);
            setCurrentProfile(urlProfile);
          }
          setLoading(false);
        } catch (error) {
          EvyAILogger.error("Error:", error);
          sentryClient.captureException(error, {
            captureContext: {
              extra: {
                functionName: "fetchUserData",
              },
            },
          });
        } finally {
          setLoading(false);
        }
      }, 1000);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [loginUser, currentAuthenticationState, isProfileSaved]);

  useEffect(() => {
    async function fetchAllLists() {
      try {
        const userLists = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_LISTS, {});
        setAllLists(userLists);
        setSearchLists(userLists);
      } catch (error) {
        EvyAILogger.error("Failed to fetch lists:", error);
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "fetchAllLists",
            },
          },
        });
      }
    }
    fetchAllLists();
  }, []);

  useEffect(() => {
    async function fetchProfileLists() {
      try {
        let profileUrl;
        if (isLinkedInSNProfilePage(window.location.href)) {
          profileUrl = await getLinkedInUrlFromProfilePageOfSales();
        } else {
          profileUrl = extractLinkedInProfile(window.location.href) + "/";
        }
        const lists = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SAVE_PROFILE_LISTS, {
          profileUrl: profileUrl,
        });
        setProfileLists(lists);
      } catch (error) {
        EvyAILogger.error("Failed to fetch lists:", error);
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "fetchProfileLists",
            },
          },
        });
      }
    }
    fetchProfileLists();
  }, []);

  return (
    <div>
      {showLimitEndPopup && <LimitReachedDialog setShow={setShowLimitEndPopup} />}
      <>
        {!loading &&
          (isProfileSaved ? (
            <AutehticatedSaveProfile
              allLists={allLists}
              profileLists={profileLists}
              searchLists={searchLists}
              setSearchLists={setSearchLists}
              setProfileLists={setProfileLists}
              setIsProfileSaved={setIsProfileSaved}
              currentProfile={currentProfile}
              setCurrentProfile={setCurrentProfile}
            />
          ) : (
            <UnAutehticatedSaveProfile
              setWillShowLoginPopup={setWillShowLoginPopup}
              setShowLimitEndPopup={setShowLimitEndPopup}
              setIsProfileSaved={setIsProfileSaved}
              setWillDoActionAfterLogIn={setWillDoActionAfterLogIn}
              setIsCheckingUserAuthStatus={setIsCheckingUserAuthStatus}
              setUserAutentication={setUserAutentication}
              setSaveLoader={setSaveLoader}
              saveLoader={saveLoader}
              fullSubscriptionStatus={fullSubscriptionStatus}
            />
          ))}
      </>
    </div>
  );
};
