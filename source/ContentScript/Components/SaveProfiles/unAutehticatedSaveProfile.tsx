import React, { useEffect, useState } from "react";
import { Text, Box, Stack, Flex, Button, Image, Loader } from "@mantine/core";
import useStyles from "./unAutehticatedSaveProfile.style";
import { getImagePath } from "../../../Utils";
import { CLASS_NAMES } from "../../../LinkedInParser/constants";
import { AuthenticationState, SubScriptionStaus_Type, SubscriptionStatus, SubscriptionStatusDB } from "../../../Config";
import { MESSAGE_ACTION, isLinkedInSNProfilePage } from "../../../Config";
import { SomethingWentWrong } from "../SomethingWentWrong/SomethingWentWrong";
import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import {
  getNameFromProfilePage,
  getTaglineFromProfilePage,
  getProfileImageUrl,
  getNameFromProfilePageOfSales,
  getTaglineFromSalesProfilePage,
  getProfileImageUrlOfSales,
  getLinkedInUrlFromProfilePageOfSales,
  getSNUrlFromProfilePageOfSN,
  getRawFullProfileInfoData,
  getRawProfileContactInfoData,
  getRawFullProfileInfoDataSN,
  getRawProfileContactInfoDataSN,
  closeContactInfomodel,
} from "../../../LinkedInParser";
import { formatLinkedInUrl, extractLinkedInProfile } from "../../../Utils";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

import { EvyAILogger } from "../../../Utils/EvyAILogger";
import DraggableWrapper from "../DraggableWrapper";

interface UnAutehticatedSaveProfile {
  setWillShowLoginPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLimitEndPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsProfileSaved: React.Dispatch<React.SetStateAction<boolean>>;
  setWillDoActionAfterLogIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCheckingUserAuthStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setUserAutentication: () => any;
  setSaveLoader: React.Dispatch<React.SetStateAction<boolean>>;
  saveLoader: boolean;
  fullSubscriptionStatus: SubScriptionStaus_Type | undefined;
}

export const UnAutehticatedSaveProfile: React.FC<UnAutehticatedSaveProfile> = ({
  setWillShowLoginPopup,
  setShowLimitEndPopup,
  setIsProfileSaved,
  setWillDoActionAfterLogIn,
  setIsCheckingUserAuthStatus,
  setUserAutentication,
  setSaveLoader,
  saveLoader,
  fullSubscriptionStatus,
}) => {
  const [someThingPopupShow, setSomeThingPopupShow] = useState(false);
  const [currentProfileURL, setcurrentProfileURL] = useState("");
  const [currentProfile, setCurrentProfile] = useState<any>(null);
  const { classes } = useStyles();

  let lastPosY: any = localStorage.getItem("l_po_y") || 0;

  if (lastPosY) {
    lastPosY = Number(lastPosY);
  }

  const onButtonClick = async () => {
    setSaveLoader(true);
    const { authenticationState, user } = await setUserAutentication();
    if (authenticationState === AuthenticationState.Authenticated) {
      await saveProfileData(user);
    } else {
      setSaveLoader(false);
      setWillDoActionAfterLogIn(true);
      setWillShowLoginPopup(true);
      setIsCheckingUserAuthStatus(false);
    }
    setSaveLoader(false);
  };

  const saveProfileData = async (user: any) => {
    let status = null;
    let isProUser = false;
    let subscriptionStatus = fullSubscriptionStatus;
    if (!subscriptionStatus) {
      subscriptionStatus = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SUBSCRIPTION_STATUS);
    }
    if (subscriptionStatus) {
      if (subscriptionStatus.statusDB === null && subscriptionStatus.status === SubscriptionStatus.PRO) {
        status = SubscriptionStatusDB.ACTIVE;
      } else {
        status = subscriptionStatus.statusDB;
      }
      if (status === SubscriptionStatusDB.PAST_DUE) {
        isProUser = false;
      } else {
        isProUser = subscriptionStatus.status === SubscriptionStatus.PRO;
      }
      // isProUser = fullSubscriptionStatus.status === SubscriptionStatus.PRO;
    }
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
      uid: user.uid,
      targetProfileUrl: extractedTargetProfileUrl,
    });
    if (urlProfile) {
      setIsProfileSaved(true);
      setCurrentProfile(urlProfile);
      setSaveLoader(false);
      setWillDoActionAfterLogIn(true);
      setWillShowLoginPopup(true);
      setIsCheckingUserAuthStatus(true);
    } else {
      const isSalesNavigator = isLinkedInSNProfilePage(window.location.href);
      let isLinkedProfileAdded;

      const profileData = {
        userId: user.uid,
        profileUrl: isSalesNavigator
          ? await getLinkedInUrlFromProfilePageOfSales()
          : formatLinkedInUrl(window.location.href),
        linkedInProfileName: isSalesNavigator ? getNameFromProfilePageOfSales() : getNameFromProfilePage(),
        profileHeadline: isSalesNavigator ? getTaglineFromSalesProfilePage() : getTaglineFromProfilePage(),
        profilePictureUrl: isSalesNavigator ? getProfileImageUrlOfSales() : getProfileImageUrl(),
        profileUrlSN: getSNUrlFromProfilePageOfSN(),
        raw_full_profile_info_data: isSalesNavigator
          ? await getRawFullProfileInfoDataSN()
          : getRawFullProfileInfoData(),
        raw_profile_contact_info_data: await (isSalesNavigator
          ? getRawProfileContactInfoDataSN()
          : getRawProfileContactInfoData()),
        status,
        isProUser,
      };

      isLinkedProfileAdded = await sendMessageToExtensionPages(MESSAGE_ACTION.ADD_LINKEDIN_PROFILE, profileData);

      EvyAILogger.log("IS LINKED PROFILE ADDED" + isLinkedProfileAdded);
      if (isLinkedProfileAdded?.data?.status_code === 504) {
        setShowLimitEndPopup(true);
      }
      if (isLinkedProfileAdded?.data?.status_code === 200) {
        setIsProfileSaved(true);
      }
      if (isLinkedProfileAdded?.data?.status_code !== 200 && isLinkedProfileAdded?.data?.status_code !== 504) {
        setSomeThingPopupShow(true);
      }
      // setSomeThingPopupShow(true)
      closeContactInfomodel();
      setSaveLoader(false);
    }
  };

  // const handleStart = () => {
  // };

  // const handleDrag = () => {
  // };

  return (
    <>
      <DraggableWrapper>
        <span className={classes.saveProfileSpan} id="evyaiAddProfileBtn">
          <Image src={getImagePath("profilelogo.svg")} className={classes.customImg} width={18} height={20} />
          <Image src={getImagePath("profiledivider.svg")} className={classes.customImg} width={6} height={25} />

          {saveLoader ? (
            <span className={classes.loader}></span>
          ) : (
            <Button
              onClick={onButtonClick}
              style={{}}
              className={`${CLASS_NAMES.EXTENSION_PROFILE_BUTTON} ${classes.saveProfileBtn}`}
            >
              <Image
                src={getImagePath("contactprofile.svg")}
                className={`${classes.customImgBtnb}`}
                width={16}
                height={16}
              />
              <span> Save profile </span>
            </Button>
          )}
        </span>
      </DraggableWrapper>

      {someThingPopupShow && <SomethingWentWrong setShowPopup={setSomeThingPopupShow} />}
    </>
  );
};
