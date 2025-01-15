import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, Box, Stack, Button, Flex, Image, Loader, Center, Textarea, Alert } from "@mantine/core";
import { HiStar } from "react-icons/hi";
import { useShowOlderVersion } from "../../Hooks/useShowOlderVersion";
import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import {
  AuthenticationState,
  MESSAGE_ACTION,
  NUMBER_OF_RECORDS_TO_SHOW_PER_PAGE,
  SECONDS_TO_KEEP_THE_CONTENT_COPIED_MESSAGE,
  SHARE_EVY_AI_URL,
  SubscriptionStatus,
  UsageButtonTitle,
  UsageDescriptionText,
} from "../../../Config";
import useStyles from "./style";
import { getImagePath } from "../../../Utils";
import { UsagesInfo } from "../../Components";
import AllRecentActivities from "../AllRecentActivities";
import AllSavedItems from "../AllSavedItems";
import UpgradePlan from "../UpgradePlan";
import { WarningDialogue } from "../../Components/AppVersionWarningAlert";
import { COLLECTIONS } from "../../../firebase/firebase";
import { APP_VERSION } from "../../../LinkedInParser/constants";
import { sentryClient } from "../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../Utils/EvyAILogger";

const url = "https://evyai.com";

type PropsType = {
  setAuthenticationState: Function;
};

const Authenticated = (props: PropsType) => {
  const { setAuthenticationState } = props;
  const showExtVersion = useShowOlderVersion();
  const { classes } = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [recentActivities, setRecentActivities] = useState<any[]>([]);
  const [savedCommands, setSavedCommands] = useState<any[]>([]);
  const [currentRecentActivityPage, setCurrentRecentActivityPage] = useState(0);
  const [currentSavedCommandPage, setCurrentSavedCommandsPage] = useState(0);
  const [isLoadinRecentActivities, setIsLoadinRecentActivities] = useState(false);
  const [isLoadingSavedCommands, setIsLoadingSavedCommands] = useState(false);
  const [doesHaveMoreRecentActivitiesToLoad, setDoesHaveMoreRecentActivitiesToLoad] = useState(true);
  const [doesHaveMoreSavedCommandsToLoad, setDoesHaveMoreSavedCommandsToLoad] = useState(true);
  const [isContentCopied, setIsContentCopied] = useState(false);
  const [updatingSaveCommandStatusDocId, setUpdatingSaveCommandStatusDocId] = useState("");
  const [hoveredActivityDocId, setHoveredActivityDocId] = useState("");
  const [hoveredCommandDocId, setHoveredCommandDocId] = useState("");
  const [isShowingAllRecentActivities, setIsShowingAllRecentActivities] = useState(false);
  const [isShowingAllSavedItems, setIsShowingAllSavedItems] = useState(false);
  const [isShowingPlanUpgrade, setIsShowingPlanUpgrade] = useState(false);
  const [currentSubscriptionStatus, setCurrentSubscriptionStatus] = useState<SubscriptionStatus>(
    SubscriptionStatus.FREE
  );
  const [usagePercentage, setUsagePercentage] = useState(0);
  const [isLoadingSubscriptionStatus, setIsLoadingSubscriptionStatus] = useState(true);
  const [isFetchingCustomerPortalLink, setIsFetchingCustomerPortalLink] = useState(false);

  const [review, setReview] = useState("");
  const [showReview, setShowReview] = useState(false);
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [rating, setRating] = useState<Number | null>(null);
  const [appVersion, setAppVersion] = useState("");

  const handleAddReview = async () => {
    try {
      setIsAddingReview(true);
      await sendMessageToExtensionPages(MESSAGE_ACTION.ADD_REVIEW, {
        reviewText: review,
        rating,
      });
      setIsSuccess(true);
      setShowReview(false);
    } catch (error: any) {
      EvyAILogger.log(error, "err");
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "handleAddReview",
          },
        },
      });
    } finally {
      setIsAddingReview(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const delay = 3000;
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const fetchCurrentSubscriptionStatus = async () => {
    try {
      setIsLoadingSubscriptionStatus(true);
      const response = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SUBSCRIPTION_STATUS);
      // EvyAILogger.log({ response });
      setCurrentSubscriptionStatus(response.status);
      setUsagePercentage(response.usagePercentage);
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
    } finally {
      setIsLoadingSubscriptionStatus(false);
    }
  };

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

  const fetchRecentActivities = async (willStartAgain: boolean = true) => {
    try {
      setIsLoadinRecentActivities(true);
      if (willStartAgain) {
        setRecentActivities([]);
        setCurrentRecentActivityPage(0);
        setDoesHaveMoreRecentActivitiesToLoad(true);
      }
      const _recentActivities = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_RECENT_ACTIVITIES, {
        willStartAgain,
      });
      // EvyAILogger.log({ _recentActivities });
      setRecentActivities((previousActivities) => [...previousActivities, ..._recentActivities]);
      if (_recentActivities.length > 0 && !willStartAgain) {
        setCurrentRecentActivityPage((previousPage) => previousPage + 1);
      }
      if (_recentActivities.length < NUMBER_OF_RECORDS_TO_SHOW_PER_PAGE) {
        setDoesHaveMoreRecentActivitiesToLoad(false);
      }
    } catch (error) {
      // EvyAILogger.log("### Error in getting data");
      EvyAILogger.log({ error });
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "fetchRecentActivities",
          },
        },
      });
    } finally {
      setIsLoadinRecentActivities(false);
    }
  };

  const fetchSavedCommands = async (willStartAgain: boolean = true, willFetchSingleItem = false) => {
    try {
      setIsLoadingSavedCommands(true);
      if (willStartAgain) {
        setSavedCommands([]);
        setCurrentSavedCommandsPage(0);
        setDoesHaveMoreSavedCommandsToLoad(true);
      }
      const numberOfItemsToFetch = willFetchSingleItem ? 1 : NUMBER_OF_RECORDS_TO_SHOW_PER_PAGE;
      const _savedCommands = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SAVED_COMMANDS, {
        willStartAgain,
        numberOfItemsToFetch,
      });
      // EvyAILogger.log({ _savedCommands });
      setSavedCommands((previousCommands) => [...previousCommands, ..._savedCommands]);
      if (_savedCommands.length > 0 && !willStartAgain && !willFetchSingleItem) {
        setCurrentSavedCommandsPage((previousPage) => previousPage + 1);
      }
      if (_savedCommands.length < numberOfItemsToFetch) {
        setDoesHaveMoreSavedCommandsToLoad(false);
      }
    } catch (error) {
      // EvyAILogger.log("### Error in getting data");
      EvyAILogger.log({ error });
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "fetchSavedCommands",
          },
        },
      });
    } finally {
      setIsLoadingSavedCommands(false);
    }
  };

  useEffect(() => {
    fetchCurrentSubscriptionStatus();
    fetchRecentActivities(true);
    fetchSavedCommands(true, false);
  }, []);

  if (isShowingPlanUpgrade) {
    return (
      <UpgradePlan
        onClickBackButton={() => {
          setIsShowingPlanUpgrade(false);
          fetchCurrentSubscriptionStatus();
        }}
        onClickUpgradeNowButton={() => {
          // EvyAILogger.log("### Upgrade now button clicked");
        }}
      />
    );
  }

  if (isShowingAllRecentActivities) {
    return (
      <AllRecentActivities
        onClickBackButton={() => {
          setIsShowingAllRecentActivities(false);
        }}
      />
    );
  }

  if (isShowingAllSavedItems) {
    return (
      <AllSavedItems
        onClickBackButton={() => {
          setIsShowingAllSavedItems(false);
          fetchSavedCommands(true);
        }}
      />
    );
  }

  return (
    <Box className={classes.container}>
      {appVersion && appVersion !== APP_VERSION && showExtVersion && <WarningDialogue />}
      <Stack spacing={2} style={{ width: "100%", marginTop: "16px" }}>
        <Flex
          align="center"
          style={{
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "2px",
          }}
        >
          <Image src={getImagePath("saved-profile.svg")} alt={"Recent Activities"} width={20} height={20} mr={8} />
          <Text className={classes.titleText}>Saved Profiles</Text>
          <Flex
            align={"center"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open("https://app.evyai.com/saved-profile", "_blank");
            }}
          >
            <Text className={classes.seeAllButtonText}>See All</Text>
            <Image src={getImagePath("blue_right_arrow.png")} alt={"See All Saved Profile"} width={8} height={13.5} />
          </Flex>
        </Flex>
        <Stack spacing={8}>
          <div style={{ height: "1px", background: "#DFDFDF" }}></div>
        </Stack>
      </Stack>

      <Stack spacing={2} style={{ width: "100%" }}>
        <Flex
          align="center"
          style={{
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "2px",
          }}
        >
          <Image src={getImagePath("recent_activities.svg")} alt={"Recent Activities"} width={20} height={20} mr={8} />
          <Text className={classes.titleText}>Recent Activities</Text>
          <Flex
            align={"center"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open("https://app.evyai.com/dashboard", "_blank");
            }}
          >
            <Text className={classes.seeAllButtonText}>See All</Text>
            <Image src={getImagePath("blue_right_arrow.png")} alt={"See All Saved Profile"} width={8} height={13.5} />
          </Flex>
        </Flex>
        <Stack spacing={8}>
          <div style={{ height: "1px", background: "#DFDFDF" }}></div>
        </Stack>
      </Stack>

      <Stack spacing={2} style={{ width: "100%" }}>
        <Flex
          align="center"
          style={{
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "2px",
          }}
        >
          <Image src={getImagePath("saved-item.svg")} alt={"Save Items"} width={20} height={20} mr={8} />
          <Text className={classes.titleText}>Saved Items</Text>
          <Flex
            align={"center"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open("https://app.evyai.com/dashboard", "_blank");
            }}
          >
            <Text className={classes.seeAllButtonText}>See All</Text>
            <Image src={getImagePath("blue_right_arrow.png")} alt={"See All Saved Profile"} width={8} height={13.5} />
          </Flex>
        </Flex>
        <Stack spacing={8}>
          <div style={{ height: "1px", background: "#DFDFDF" }}></div>
        </Stack>
      </Stack>

      <Stack spacing={2} style={{ width: "100%" }}>
        <Flex
          align="center"
          style={{
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "2px",
          }}
        >
          <Image src={getImagePath("personas.svg")} alt={"personas"} width={20} height={20} mr={8} />
          <Text className={classes.titleText}>Personas</Text>
          <Flex
            align={"center"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open("https://app.evyai.com/personas", "_blank");
            }}
          >
            <Text className={classes.seeAllButtonText}>See All</Text>
            <Image src={getImagePath("blue_right_arrow.png")} alt={"See All Saved Profile"} width={8} height={13.5} />
          </Flex>
        </Flex>
      </Stack>

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
        <div className={classes.contentContainer}>
          <p className={classes.ratingPera}>Share your experience with us</p>

          {!showReview ? (
            <div className={classes.ratingStarContainer}>
              {Array(4)
                .fill("")
                .map((e, index) => (
                  <HiStar
                    key={index}
                    onClick={() => {
                      setRating(index + 1);
                      setShowReview(true);
                      setReview("");
                    }}
                    className={classes.ratingStar}
                  />
                ))}

              <a
                href="https://chromewebstore.google.com/detail/evyai-ai-assistant-for-so/imemcjjdfiaphipleieldpoiaoejdofp/reviews"
                target="_blank"
                className={classes.link}
              >
                <HiStar className={classes.ratingStar} />
              </a>
            </div>
          ) : (
            <>
              <div className={classes.review}>
                <Textarea
                  value={review}
                  placeholder="Write your review"
                  onChange={(e) => setReview(e.target.value)}
                  styles={{
                    input: { height: 70, maxHeight: 70, border: 0 },
                    root: { height: 70, maxHeight: 70 },
                  }}
                />
              </div>
              <div className={classes.btnDiv}>
                <Button className={classes.cancelBtn} onClick={() => setShowReview(false)}>
                  Cancel
                </Button>
                <Button
                  disabled={review.length === 0}
                  className={classes.reviewBtn}
                  onClick={handleAddReview}
                  loading={isAddingReview}
                >
                  Submit
                </Button>
              </div>
            </>
          )}
        </div>
      )}
      {currentSubscriptionStatus === SubscriptionStatus.FREE && (
        <>
          {/* <Button
              mb={isContentCopied ? 5 : 20}
              className={classes.shareButton}
              onClick={() =>
                setAuthenticationState(AuthenticationState.ShareWithFriend)
              }
              component="a"
              // target={"_blank"}
              // href="https://www.sharelinkgenerator.com/"
            >
              Share evyAI with a Friend
            </Button> */}

          <div className={classes.contentContainer}>
            <p className={classes.ratingPera}>Share your experience with us</p>

            {!showReview ? (
              <div className={classes.ratingStarContainer}>
                {Array(4)
                  .fill("")
                  .map((e, index) => (
                    <HiStar
                      key={index}
                      onClick={() => {
                        setRating(index + 1);
                        setShowReview(true);
                        setReview("");
                      }}
                      className={classes.ratingStar}
                    />
                  ))}

                <a
                  href="https://chromewebstore.google.com/detail/evyai-ai-assistant-for-so/imemcjjdfiaphipleieldpoiaoejdofp/reviews"
                  target="_blank"
                  className={classes.link}
                >
                  <HiStar className={classes.ratingStar} />
                </a>
              </div>
            ) : (
              <>
                <div className={classes.review}>
                  <Textarea
                    value={review}
                    placeholder="Write your review"
                    onChange={(e) => setReview(e.target.value)}
                    styles={{
                      input: { height: 70, maxHeight: 70, border: 0 },
                      root: { height: 70, maxHeight: 70 },
                    }}
                  />
                </div>
                <div className={classes.btnDiv}>
                  <Button className={classes.cancelBtn} onClick={() => setShowReview(false)}>
                    Cancel
                  </Button>
                  <Button
                    disabled={review.length === 0}
                    className={classes.reviewBtn}
                    onClick={handleAddReview}
                    loading={isAddingReview}
                  >
                    Submit
                  </Button>
                </div>
              </>
            )}
          </div>
        </>
      )}
      <Stack style={{ width: "100%" }} spacing={2}>
        <Button
          onClick={() => {
            window.open("https://app.evyai.com/post-create", "_blank");
          }}
          mt={20}
          mb={0}
          className={classes.buttonStyle}
        >
          <Image src={getImagePath("write_post_icon.svg")} alt={"Post icon"} mr={8} />
          Write New Post
        </Button>
      </Stack>
      <Stack style={{ width: "100%" }} spacing={2}>
        <Button
          onClick={() => {
            window.open("https://app.evyai.com/", "_blank");
          }}
          mt={20}
          mb={0}
          className={classes.homeButtonStyle}
        >
          <Image src={getImagePath("home_icon.svg")} alt={"Home icon"} mr={8} />
          Go to evyAI
        </Button>
      </Stack>
      {isSuccess && <Alert title="Thank you for your feedback!" color="green" children={undefined} />}
      {isContentCopied && (
        <Text fz="md" className={classes.statusText} mb={20}>
          Copied to Clipboard
        </Text>
      )}
    </Box>
  );
};
export default Authenticated;
