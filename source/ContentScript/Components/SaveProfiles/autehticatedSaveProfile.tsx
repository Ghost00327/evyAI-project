import React, { useEffect, useRef, useState } from "react";
import { Text, Box, Flex, Button, Image, Loader } from "@mantine/core";
import useStyles from "./autehticatedSaveProfile.style";
import { getImagePath, dateFormater, extractLinkedInProfile } from "../../../Utils";
import { CLASS_NAMES } from "../../../LinkedInParser/constants";
import { SummerizePopup } from "./summerizePopup";
import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import { useIncrementingTimer } from "../../Hooks/useIncrementingTimer";
import { MESSAGE_ACTION, isLinkedInSNProfilePage } from "../../../Config";
import {
  getNameFromProfilePage,
  getTaglineFromProfilePage,
  getExperiencesFromProfilePage,
  getEducationFromProfilePage,
  getLicensesAndCertificationsFromProfilePage,
  getLinkedInUrlFromProfilePageOfSales,
  getNameFromProfilePage_salesNavigator,
  getTaglineFromProfilePage_salesNavigator,
  getExperiencesFromProfilePage_salesNavigator,
  getEducationFromProfilePage_salesNavigator,
  getLicensesAndCertificationsFromProfilePage_salesNavigator,
  getRawFullProfileInfoDataSN,
  getRawProfileContactInfoDataSN,
  getRawFullProfileInfoData,
  getRawProfileContactInfoData,
  getExtractedProfileUrl,
  closeContactInfomodel,
} from "../../../LinkedInParser";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import DraggableWrapper from "../DraggableWrapper";
import SearchProfile from "./components/SearchProfile";
import { sentryClient } from "../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../Utils/EvyAILogger";
import { useNotifications } from "../../../hooks/useNotifications";
import { getSubscriptionStatus } from "../../../firebase/firebase";

export const AutehticatedSaveProfile = ({
  allLists,
  profileLists,
  searchLists,
  setSearchLists,
  setProfileLists,
  setIsProfileSaved,
  currentProfile,
  setCurrentProfile,
}: {
  allLists: any;
  profileLists: any;
  searchLists: any;
  setSearchLists: any;
  setProfileLists: any;
  currentProfile: any;
  setIsProfileSaved: any;
  setCurrentProfile: any;
}) => {
  const { classes } = useStyles();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAddToListOpen, setIsAddToListOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [profileSummary, setProfileSummary] = useState("");
  const [activityData, setActivityData] = useState<any>(null);
  const [summaryId, setSummaryId] = useState<any>();
  const [summaryDate, setSummaryDate] = useState<any>(false);
  const [summaryLoader, setSummaryLoader] = useState(false);
  const [unSaveLoader, setUnSaveLoader] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [summaryRegenrateLoader, setSummaryRegenrateLoader] = useState<boolean>(false);
  const [hideUnderSearchProfile, setHideUnderSearchProfile] = useState(false);
  const { notify } = useNotifications();

  const seconds = useIncrementingTimer(summaryLoader);

  function changeSearchInput(value: string) {
    setSearchInput(value);
    const regex = new RegExp(value, "i");
    const filteredLists = allLists.filter((list: any) => regex.test(list.name));
    setSearchLists(filteredLists);
  }

  async function updateProfileLists(listId: string) {
    try {
      let profileUrl;
      if (isLinkedInSNProfilePage(window.location.href)) {
        profileUrl = await getLinkedInUrlFromProfilePageOfSales();
      } else {
        profileUrl = extractLinkedInProfile(window.location.href) + "/";
      }
      sendMessageToExtensionPages(MESSAGE_ACTION.UPDATE_PROFILE_LISTS, { profileUrl: profileUrl, listId: listId });
    } catch (error) {
      EvyAILogger.error("Failed to UPDATE profile lists:", error);
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "updateProfileLists",
          },
        },
      });
    }
  }

  function handleCheckClick(list: any) {
    if (profileLists.includes(list.id)) {
      setProfileLists((prevLists: any) => prevLists.filter((id: string) => id !== list.id));
    } else {
      setProfileLists((prevLists: any) => [...prevLists, list.id]);
    }
    updateProfileLists(list.id);
  }

  async function handleUnsaveProfile() {
    try {
      setUnSaveLoader(true);
      setProfileLists([]);

      let profileUrl;
      if (isLinkedInSNProfilePage(window.location.href)) {
        profileUrl = await getLinkedInUrlFromProfilePageOfSales();
      } else {
        profileUrl = extractLinkedInProfile(window.location.href) + "/";
      }

      await sendMessageToExtensionPages(MESSAGE_ACTION.DELETE_LINKDIN_SAVE_PROFILE, { profileUrl: profileUrl });
      setUnSaveLoader(false);
      setIsProfileSaved(false);
    } catch (error) {
      EvyAILogger.error("Failed to UPDATE profile lists:", error);
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "handleUnsaveProfile",
          },
        },
      });
    }
  }

  const isListInProfileLists = (listId: string) => {
    return profileLists.some((profileList: string) => profileList === listId);
  };

  const handleButtonClick = () => {
    setDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen === false) {
      setIsAddToListOpen(!isDropdownOpen);
    }
  };

  const handleAddToListOpen = () => {
    if (setHideUnderSearchProfile) setHideUnderSearchProfile(!isAddToListOpen);
    setIsAddToListOpen(!isAddToListOpen);
  };

  const handleOpenNewTab = async (url: string, ignoreSnUrl: boolean) => {
    let profileUrl: any;
    if (!ignoreSnUrl) {
      if (isLinkedInSNProfilePage(window.location.href)) {
        profileUrl = await getLinkedInUrlFromProfilePageOfSales();
        profileUrl = profileUrl.split("?")[0];
        if (profileUrl.indexOf("recent-activity") === -1) {
          profileUrl = `${profileUrl}recent-activity/all/`;
        }
      } else {
        url = url.split("?")[0];
        let extractedUrl = await getExtractedProfileUrl(url);
        if (extractedUrl) {
          url = extractedUrl;
        }
        if (url.indexOf("recent-activity") === -1) {
          url = `${url}/recent-activity/all/`;
        }
        profileUrl = url;
      }
    } else {
      url = url.split("?")[0];
      // if(url.indexOf('recent-activity')===-1) {
      //   url = `${url}/recent-activity/all/`;
      // }
      profileUrl = url;
    }

    window.open(profileUrl, "_blank");
  };

  const getNewProfileSummar = async () => {
    const isSalesNavigator = isLinkedInSNProfilePage(window.location.href);

    const profileData = {
      fullName: isSalesNavigator ? getNameFromProfilePage_salesNavigator() : getNameFromProfilePage(),
      headline: isSalesNavigator ? getTaglineFromProfilePage_salesNavigator() : getTaglineFromProfilePage(),
      experiences: isSalesNavigator ? getExperiencesFromProfilePage_salesNavigator() : getExperiencesFromProfilePage(),
      educations: isSalesNavigator ? getEducationFromProfilePage_salesNavigator() : getEducationFromProfilePage(),
      licensesAndCertifications: isSalesNavigator
        ? getLicensesAndCertificationsFromProfilePage_salesNavigator()
        : getLicensesAndCertificationsFromProfilePage(),
      raw_full_profile_info_data: isSalesNavigator ? await getRawFullProfileInfoDataSN() : getRawFullProfileInfoData(),
      raw_profile_contact_info_data: isSalesNavigator
        ? await getRawProfileContactInfoDataSN()
        : await getRawProfileContactInfoData(),
      linked_url: isSalesNavigator
        ? await getLinkedInUrlFromProfilePageOfSales()
        : await getExtractedProfileUrl(window.location.href),
    };

    const response = await sendMessageToExtensionPages(MESSAGE_ACTION.PROFILE_SUMMARY, profileData);

    if (!response.success) {
      throw new Error(response.summary || response.error.reason);
    }

    // EvyAILogger.log("setActivityData setActivityData", data)
    await sendMessageToExtensionPages(MESSAGE_ACTION.UPDATE_PROFILE_SUMMARY_ID, {
      summaryId: response.activityId,
      profileId: currentProfile?.id,
    });

    setCurrentProfile((prevProfile: any) => ({
      ...prevProfile,
      summaryId: response.activityId,
    }));

    // const createdSummaryDate = data?.timestamp?.seconds ? dateFormater(data.timestamp.seconds) : "Today"
    let createdSummaryDate = null;
    if (response.timestamp === undefined || response.timestamp === null) {
      // setSummaryDate(dateFormater(Date.now() / 1000));
      createdSummaryDate = dateFormater(Date.now() / 1000);
    } else if (response.timestamp !== undefined) {
      setSummaryDate(dateFormater(response.timestamp.seconds));
    }
    // const createdSummaryDate = data?.timestamp?.seconds ? dateFormater(data.timestamp.seconds): dateFormater(new Date().getTime() / 1000);
    setSummaryDate(createdSummaryDate);
    setActivityData(response.activityData);
    setProfileSummary(response.summary);
    setSummaryId(response.activityId);
    setSummaryRegenrateLoader(false);
    closeContactInfomodel();
  };

  const getExistingSummary = async () => {
    const response = await sendMessageToExtensionPages(MESSAGE_ACTION.EXISTING_PROFILE_SUMMARY, {
      summaryId: currentProfile.summaryId,
    });
    // EvyAILogger.log("getExistingSummary data", response)
    if (response.data.timestamp === undefined) {
      setSummaryDate(dateFormater(Date.now() / 1000));
    } else if (response.data.timestamp !== undefined) {
      setSummaryDate(dateFormater(response.data.timestamp.seconds));
    }
    setSummaryId(currentProfile.summaryId);
    setProfileSummary(response.data.activityData.generatedText);
    setActivityData(response.data.activityData);
  };

  const handleRegnrateSummary = async () => {
    try {
      setSummaryRegenrateLoader(true);
      setSummaryId("");
      getNewProfileSummar();
    } catch (e: any) {
      EvyAILogger.error(e);
      notify({ title: e.message || "Unknown error occurred, please try again later", color: "red" });
    }
  };

  const handleSummaryAction = async () => {
    try {
      setSummaryLoader(true);
      if (currentProfile && currentProfile.summaryId) {
        await getExistingSummary();
      } else {
        await getNewProfileSummar();
      }
      setShowPopup(true);
    } catch (e: any) {
      EvyAILogger.error(e, "Error");
      notify({ title: e.message || "Unknown error occurred, please try again later", color: "red" });
    } finally {
      setSummaryLoader(false);
      setDropdownOpen(false);
    }
  };

  return (
    <>
      <DraggableWrapper>
        <span className={classes.saveProfileSpan} id="evyaiAddProfileBtn">
          <Image src={getImagePath("profilelogo.svg")} className={classes.customImg} width={18} height={20} />
          <Image src={getImagePath("profiledivider.svg")} className={classes.customImg} width={6} height={25} />
          <Button
            className={`${CLASS_NAMES.EXTENSION_PROFILE_BUTTON} ${classes.saveProfileBtn}`}
            onClick={handleButtonClick}
          >
            <Image
              src={getImagePath("savedProfileicon.svg")}
              className={classes.customImgBtnb}
              width={16}
              height={16}
            />
            <span> Saved Profile </span>
            <span style={{ marginLeft: "1rem" }}>
              <Image
                src={getImagePath(isDropdownOpen ? "saveProfileDownButton.svg" : "saveProfileUpButton.svg")}
                className={classes.customImgBtnb}
                width={23}
                height={23}
              />
            </span>
          </Button>
          {isDropdownOpen && (
            <div className={`${classes.dropdown} drop-down`}>
              <Button
                className={classes.dropdownBtn}
                style={{
                  marginTop: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  ...(isAddToListOpen
                    ? {
                        backgroundColor: "#F5F1FB",
                        color: "#2F3178",
                      }
                    : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleAddToListOpen}
              >
                <span>Add To List</span>
                <Image
                  src={getImagePath(
                    isAddToListOpen ? "openedList.svg" : isHovered ? "closedListBlack.svg" : "closedList.svg"
                  )}
                  width={16}
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "80px",
                  }}
                  height={16}
                />
              </Button>
              {isAddToListOpen ? (
                allLists.length > 0 ? (
                  <>
                    <span className={classes.filledListSpan}>
                      <Box className={classes.searchContainer}>
                        <input
                          type="text"
                          placeholder="Search List"
                          className={classes.searchInput}
                          onChange={(e) => changeSearchInput(e.target.value)}
                          style={{}}
                        />
                        <Image src={getImagePath("Search.svg")} width={14} height={14} className={classes.searchIcon} />
                      </Box>
                      <Box className={classes.showList}>
                        {searchLists &&
                          searchLists.map((list: any) => {
                            const isChecked = isListInProfileLists(list.id);
                            return (
                              <Box key={list.id} className={classes.singleList}>
                                <Image
                                  src={getImagePath(isChecked ? "Check.svg" : "unCheck.svg")}
                                  onClick={() => handleCheckClick(list)}
                                  width={20}
                                  height={20}
                                  style={{
                                    cursor: "pointer",
                                  }}
                                />
                                <Text
                                  style={{
                                    color: "#696A6F",
                                    fontWeight: "400",
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    marginLeft: "5px",
                                  }}
                                >
                                  {list.name}
                                </Text>
                              </Box>
                            );
                          })}
                      </Box>
                      <Button
                        className={classes.listFooter}
                        style={{ background: "none" }}
                        onClick={() => handleOpenNewTab("http://app.evyai.com/lists", true)}
                      >
                        <Text
                          style={{
                            color: "#34317D",
                            fontWeight: "700",
                            fontSize: "14px",
                            lineHeight: "20px",
                            marginLeft: "5px",
                            display: "flex",
                          }}
                        >
                          <span
                            style={{
                              textDecoration: "underline",
                            }}
                          >
                            Manage Lists
                          </span>
                          <Image
                            src={getImagePath("openInNewTab.svg")}
                            width={17}
                            height={17}
                            style={{
                              marginLeft: "7px",
                              cursor: "pointer",
                            }}
                          />
                        </Text>
                      </Button>
                    </span>
                  </>
                ) : (
                  <>
                    <span className={classes.emptyListSpan}>
                      <Text
                        style={{
                          color: "#696A6F",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "18px",
                        }}
                      >
                        No lists created yet
                      </Text>
                      <Button
                        style={{
                          marginTop: "10px",
                          display: "flex",
                          flexDirection: "column",
                          background: "#34317D",
                          paddingLeft: "15px",
                          paddingRight: "15px",
                          paddingTop: "4px",
                          paddingBottom: "4px",
                        }}
                        onClick={() => handleOpenNewTab("http://app.evyai.com/lists", true)}
                      >
                        <Image src={getImagePath("Plus.svg")} width={12} height={12} style={{ marginLeft: "auto" }} />
                        <span
                          style={{
                            marginLeft: "10px",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "21px",
                            color: "#FFF",
                          }}
                        >
                          New
                        </span>
                      </Button>
                    </span>
                  </>
                )
              ) : (
                <>
                  <SearchProfile hideUnderMe={setHideUnderSearchProfile} />
                  {!hideUnderSearchProfile && (
                    <>
                      <Button
                        className={classes.dropdownBtn}
                        onClick={() => {
                          setDropdownOpen(false);
                          handleOpenNewTab(`${window.location.href}/recent-activity/all/`, false);
                        }}
                      >
                        See Recent Activites
                      </Button>
                      {/* Hidden based on TAMI/JOE Request */}
                      {/* <Button
                        className={classes.dropdownBtn}
                        sx={{
                          justifyContent: `${summaryLoader ? "center" : "start"}`,
                        }}
                        disabled={summaryLoader}
                        onClick={handleSummaryAction}
                      >
                        {summaryLoader ? <span>Summarizing {seconds}</span> : <span>Summarize Profile</span>}
                      </Button> */}
                      <Button
                        disabled={unSaveLoader}
                        className={classes.dropdownBtn}
                        sx={{
                          justifyContent: `${unSaveLoader ? "center" : "start"}`,
                        }}
                        onClick={() => handleUnsaveProfile()}
                      >
                        {unSaveLoader ? <span className={classes.loader}></span> : <span>Unsave Profile</span>}
                      </Button>
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </span>
      </DraggableWrapper>
      {showPopup && (
        <SummerizePopup
          summaryDate={summaryDate}
          summaryRegenrateLoader={summaryRegenrateLoader}
          handleRegnrateSummary={handleRegnrateSummary}
          setShowPopup={setShowPopup}
          profileSummary={profileSummary}
          summaryId={summaryId}
          activityData={activityData}
        />
      )}
    </>
  );
};
