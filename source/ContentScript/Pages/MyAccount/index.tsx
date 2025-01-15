import { MdArrowBackIosNew, MdArrowForwardIos, MdWorkspacePremium } from "react-icons/md";
import { UsagesInfo } from "../../Components";
import useStyles from "./account.style";
import React, { useCallback, useEffect, useState } from "react";
import {
  UsageButtonTitle,
  SubscriptionStatus,
  UsageDescriptionText,
  AuthenticationState,
  MESSAGE_ACTION,
  STORAGE_KEYS,
} from "../../../Config";
import { Button, Textarea, Alert } from "@mantine/core";
import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import { WarningDialogue } from "../../Components/AppVersionWarningAlert";
import { COLLECTIONS } from "../../../firebase/firebase";
import { APP_VERSION } from "../../../LinkedInParser/constants";
import { useShowOlderVersion } from "../../Hooks/useShowOlderVersion";
import { User } from "firebase/auth";
import * as BrowserStorage from "../../../Utils/storage";
type PropsType = {
  onClickGoBack: Function;
  usagePercentage: number;
  onClickGoSetting: Function;
  setAuthenticationState: Function;
  setIsShowingPlanUpgrade: Function;
  fetchCustomerPortalLink: Function;
  isLoadingSubscriptionStatus: boolean;
  // onClickGoManageSubscription: Function;
  isFetchingCustomerPortalLink: boolean;
  currentSubscriptionStatus: SubscriptionStatus;
};

const url = "https://evyai.com";

export default function MyAccount(props: PropsType) {
  const {
    onClickGoBack,
    usagePercentage,
    onClickGoSetting,
    setAuthenticationState,
    setIsShowingPlanUpgrade,
    fetchCustomerPortalLink,
    currentSubscriptionStatus,
    isLoadingSubscriptionStatus,
    // onClickGoManageSubscription,
    isFetchingCustomerPortalLink,
  } = props;

  const { classes } = useStyles();
  const showExtVersion = useShowOlderVersion();
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [appVersion, setAppVersion] = useState("");

  // const handleShowReview = () => {
  //   setShowReview(true);
  // };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
  };

  const handleSignOut = useCallback(async () => {
    setIsLoading(true);
    try {
      await BrowserStorage.removeItem(STORAGE_KEYS.LAST_LANGUAGE_USED);
      await sendMessageToExtensionPages(MESSAGE_ACTION.SIGN_OUT);
    } catch (error: any) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchAppVersion = async () => {
    const appVersionData = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SINGLE_COLLECTION_DATA, {
      id: "extension",
      collection: COLLECTIONS.GLOBALS,
    });

    if (appVersionData?.live_version) {
      setAppVersion(appVersionData.live_version);
    }
  };

  useEffect(() => {
    fetchAppVersion();
  }, []);

  return (
    <div style={{ padding: "0px 20px" }}>
      <div className={classes.accountButton}>
        <button onClick={() => onClickGoBack()} className={classes.account}>
          <MdArrowBackIosNew />
        </button>
        <span className={(classes.contentTitle, classes.main)}>My Account</span>
      </div>
      <button onClick={() => onClickGoSetting()} className={classes.content}>
        <span className={classes.contentTitle}>Settings</span>
        <MdArrowForwardIos color="#6e40c5" size={18} />
      </button>
      {(currentSubscriptionStatus === SubscriptionStatus.FREE && (
        <a
          href="https://app.evyai.com/subscription-pricing/?isNavigateToSubscription-pricing=true"
          target="_blank"
          className={classes.contentTitle}
          style={{ textDecoration: "none" }}
        >
          <button
            // onClick={() => onClickGoManageSubscription()}
            className={classes.manageSubscription}
          >
            <span className={classes.contentTitle}>Manage Subscription</span>
            <MdArrowForwardIos color="#6e40c5" size={18} />
          </button>
        </a>
      )) ||
        (currentSubscriptionStatus === SubscriptionStatus.PRO && (
          <a
            href="https://app.evyai.com/subscription-pricing/"
            target="_blank"
            className={classes.contentTitle}
            style={{ textDecoration: "none" }}
          >
            <button
              // onClick={() => onClickGoManageSubscription()}
              className={classes.manageSubscription}
            >
              <span className={classes.contentTitle}>Manage Subscription</span>
              <MdArrowForwardIos color="#6e40c5" size={18} />
            </button>
          </a>
        ))}
      {currentSubscriptionStatus === SubscriptionStatus.FREE && (
        <UsagesInfo
          isLoadingData={isLoadingSubscriptionStatus}
          buttonLoadingStatus={isFetchingCustomerPortalLink}
          usagePercentage={usagePercentage}
          descriptionText={UsageDescriptionText[currentSubscriptionStatus]}
          buttonTitle={UsageButtonTitle[currentSubscriptionStatus]}
          onButtonClicked={() => {
            // EvyAILogger.log("### Upgrade button clicked...");
            if (currentSubscriptionStatus === SubscriptionStatus.FREE) {
              const httpsLink = "https://app.evyai.com/subscription-pricing/?isNavigateToSubscription-pricing=true";
              window.open(httpsLink, "_blank");
            } else {
              fetchCustomerPortalLink();
            }
          }}
        />
      )}
      {currentSubscriptionStatus === SubscriptionStatus.PRO && (
        <div className={classes.premiumMember}>
          <div className={classes.premiumBadgeTitle}>
            <MdWorkspacePremium fill="#6E40C5" className={classes.premiumIcon} />
            <h3 className={classes.premiumTitle}>Premium Member</h3>
          </div>
          <p className={classes.premiumPera}>
            Sharing is Caring! Tell your friends how evyAI has been helpful for you.
          </p>
          <Button
            mt={12}
            className={classes.upgradeButton}
            onClick={() => {
              setAuthenticationState(AuthenticationState.ShareWithFriend);
              // setShowWebUrl(!showWebUrl);
              // setIsCopied(false);
            }}
          >
            Share evyAI with a Friend
          </Button>
        </div>
      )}

      {/* {showWebUrl && (
        <div className={isCopied ? classes.copiedUrl : classes.copyUrl}>
          <input
            readOnly
            type="text"
            className={classes.urlInput}
            value={url}
          />
          <button className={classes.urlButton} onClick={handleCopy}>
            {isCopied ? "Copied" : "Copy"}
          </button>
        </div>
      )} */}

      {appVersion && appVersion !== APP_VERSION && showExtVersion && <WarningDialogue />}

      <div className={classes.buttonContainer}>
        <Button mt={20} mb={0} className={classes.buttonStyle} onClick={handleSignOut} loading={isLoading}>
          Logout
        </Button>
      </div>
    </div>
  );
}
