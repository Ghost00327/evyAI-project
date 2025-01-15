import React, { useState, useRef, useEffect } from "react";
import { Text, Box, Flex, Image, Loader, Button } from "@mantine/core";
import useStyles from "./summerizePopup.style";
import { getImagePath } from "../../../Utils";
import { saveCommand, unsaveCommand } from "../../../Utils/saveUnsaveCommand";
import { API_REQUEST_TYPE, MESSAGE_ACTION } from "../../../Config";
import { useOutsideClick } from "../../Hooks/useOutsideModalClick";
import { GLOBAL_STYLES } from "../../../Config";
import { useIncrementingTimer } from "../../Hooks/useIncrementingTimer";
import { isCommandSaved } from "../../../Utils/saveUnsaveCommand";
import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import Draggable, { DraggableData, DraggableEvent, DraggableEventHandler } from "react-draggable";
import { sentryClient } from "../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../Utils/EvyAILogger";
interface SummerizePopupInterpace {
  summaryRegenrateLoader: boolean;
  handleRegnrateSummary: () => void;
  setShowPopup: (status: boolean) => void;
  profileSummary: string;
  summaryDate: any;
  summaryId: any;
  activityData: any;
}

export const SummerizePopup: React.FC<SummerizePopupInterpace> = ({
  setShowPopup,
  profileSummary,
  handleRegnrateSummary,
  summaryRegenrateLoader,
  summaryDate,
  summaryId,
  activityData,
}) => {
  const { classes } = useStyles();
  const [copy, setCopy] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [starContent, setStarContent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profileDocId, setProfileDocId] = useState("");
  const seconds = useIncrementingTimer(summaryRegenrateLoader);
  const modalRef = useRef<HTMLDivElement>(null);
  //useOutsideClick(modalRef, () => {setShowPopup(false)});

  useEffect(() => {
    const checkCommandSaved = async () => {
      try {
        const response = await isCommandSaved({ summaryId: summaryId });

        if (response) {
          setProfileDocId(summaryId);
          setIsFavorite(true);
        }
      } catch (error) {
        EvyAILogger.error("An error occurred:", error);
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "checkCommandSaved",
            },
          },
        });
      }
    };
    if (summaryId) {
      // EvyAILogger.log("summaryId", summaryId)
      checkCommandSaved();
    } else {
      setProfileDocId("");
      setIsFavorite(false);
    }
  }, [summaryId]);

  async function handleFavourite() {
    // EvyAILogger.log("is command activityData $$$$$$$$$$$$$$$$$$", activityData)
    // EvyAILogger.log("is command profileSummary $$$$$$$$$$$$$$$$$$", profileSummary)
    // EvyAILogger.log("is command summaryId $$$$$$$$$$$$$$$$$$", summaryId)

    const { docId, error } = await sendMessageToExtensionPages(MESSAGE_ACTION.SAVE_COMMAND, {
      activityType: API_REQUEST_TYPE.PROFILE_SUMMARY,
      activityData: activityData,
      generatedText: profileSummary,
      id: summaryId,
    });

    // const [status, message] = await saveCommand({
    //         activityType: API_REQUEST_TYPE.PROFILE_SUMMARY,
    //         activityData: window.location.href,
    //         generatedText: profileSummary,
    //         id: summaryId
    //     })
    if (docId) {
      setProfileDocId(docId);
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
    setIsLoading(false);
  }

  async function handleUnFavourite() {
    const { docId, error } = await sendMessageToExtensionPages(MESSAGE_ACTION.REMOVE_SAVED_COMMAND, {
      documentId: profileDocId,
    });
    if (docId) {
      setProfileDocId("");
      setIsFavorite(false);
    } else {
      setIsFavorite(false);
    }
    setIsLoading(false);
  }
  async function handleStarClick() {
    setIsLoading(true);
    if (isFavorite) {
      handleUnFavourite();
    } else {
      handleFavourite();
    }
  }
  useEffect(() => {
    if (isFavorite) {
      setStarContent(true);
      setTimeout(() => {
        setStarContent(false);
      }, 1000);
    }
  }, [isFavorite]);
  return (
    <div id="main-summerize">
      <Box
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          position: "fixed",
          top: 0,
          left: 0,
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10000000",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}

          // onDrag={handleDrag}
        >
          <Box
            ref={modalRef}
            style={{
              zIndex: "10000000",
              width: 500,
              borderRadius: 12,
              backgroundColor: "white",
            }}
          >
            <Box
              style={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
              }}
            >
              <Flex className={`${classes.header} handle`}>
                <img className={`${classes.headerLogo}`} src={getImagePath("evi_ai_logo.png")} alt={"Evy AI Logo"} />
                <Box className={classes.closeIconButton} onClick={() => setShowPopup(false)}>
                  <Image src={getImagePath("close_icon.png")} alt={"Close Dialog"} width={20} height={20} />
                </Box>
              </Flex>
            </Box>
            <Box
              style={{
                padding: "20px",
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "900",
                  lineHeight: "21px",
                  color: "#000000e6",
                }}
              >
                Profile Summary
              </Text>
              <div>
                <div
                  style={{
                    maxHeight: "60vh",
                    overflow: "auto",
                  }}
                >
                  <Box
                    className={classes.summaryClass}
                    style={{
                      padding: "16px",
                      background: "#F5F1FB",
                      borderRadius: "16px 16px 0 0",
                    }}
                  >
                    {summaryRegenrateLoader ? (
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <Text
                          style={{
                            paddingTop: "100px",
                            paddingBottom: "100px",
                            color: "#000000e6",
                          }}
                        >
                          Summarizing {seconds}
                        </Text>
                      </Box>
                    ) : (
                      <>
                        <Text
                          style={{
                            fontSize: "12px",
                            fontWeight: "400",
                            lineHeight: "18px",
                            color: "#000000e6",
                            whiteSpace: "pre-line",
                          }}
                        >
                          {profileSummary}
                        </Text>
                      </>
                    )}
                  </Box>
                </div>
                <div
                  style={{
                    padding: "16px",
                    background: "#F5F1FB",
                    borderRadius: "0 0 16px 16px",
                  }}
                >
                  <a href={activityData.linked_url} target="_blank" style={{ textDecoration: "none" }}>
                    <Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        lineHeight: "18px",
                        color: "#34317D",
                        textDecoration: "underline",
                        marginTop: "8px",
                        // whiteSpace: "nowrap",
                        // overflow: "hidden",
                        // textOverflow: "ellipsis",
                        wordWrap: "break-word",
                      }}
                    >
                      {activityData.linked_url}
                    </Text>
                  </a>
                  <Flex
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "8px",
                    }}
                  >
                    <Box>
                      <Text
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "20px",
                          color: "#000000e6",
                        }}
                      >
                        {summaryDate}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex
                    style={{
                      justifyContent: "end",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    {copy && <Text style={{ marginRight: "-8px", fontSize: "14px", color: "#000000e6" }}>copied!</Text>}
                    <Image
                      src={getImagePath("Copy.svg")}
                      alt={"Copy"}
                      width={20}
                      height={20}
                      onClick={() => {
                        navigator.clipboard.writeText(`${profileSummary}\n${window.location.href}\n${summaryDate}`);
                        setCopy(true);
                        setTimeout(() => {
                          setCopy(false);
                        }, 1000);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                    {isLoading ? (
                      <Loader size={14} mr={10} />
                    ) : (
                      <>
                        {starContent && (
                          <Text style={{ marginRight: "-8px", fontSize: "14px", color: "#000000e6" }}>Saved</Text>
                        )}
                        <Image
                          src={isFavorite ? getImagePath("star_marked.svg") : getImagePath("Star.svg")}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleStarClick()}
                          alt={"Star"}
                          width={20}
                          height={20}
                        />
                      </>
                    )}
                    <Button className={classes.regenerateButton} onClick={handleRegnrateSummary}>
                      Regenerate
                    </Button>
                  </Flex>
                </div>
              </div>
            </Box>
          </Box>
        </Draggable>
      </Box>
    </div>
  );
};
