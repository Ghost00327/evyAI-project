import React, { useEffect, useState } from "react";
import { Text, Box, Stack, Button, Flex, Image, Loader, Center } from "@mantine/core";

import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import { MESSAGE_ACTION, SECONDS_TO_KEEP_THE_CONTENT_COPIED_MESSAGE } from "../../../Config";
import useStyles from "./style";
import { getImagePath, sleep } from "../../../Utils";
import { RecentActivity } from "../../Components";
import { sentryClient } from "../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../Utils/EvyAILogger";

const NUMBER_OF_RECORDS_TO_FETCH = 20;

const AllRecentActivities = ({ onClickBackButton }: { onClickBackButton: () => void }) => {
  const { classes } = useStyles();
  const [recentActivities, setRecentActivities] = useState<any[]>([]);
  const [isLoadinRecentActivities, setIsLoadinRecentActivities] = useState(false);
  const [doesHaveMoreRecentActivitiesToLoad, setDoesHaveMoreRecentActivitiesToLoad] = useState(true);
  const [isContentCopied, setIsContentCopied] = useState(false);

  const fetchRecentActivities = async (willStartAgain: boolean = true) => {
    try {
      setIsLoadinRecentActivities(true);
      if (willStartAgain) {
        setRecentActivities([]);
        setDoesHaveMoreRecentActivitiesToLoad(true);
      }
      const _recentActivities = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_RECENT_ACTIVITIES, {
        willStartAgain,
        numberOfItemsToFetch: NUMBER_OF_RECORDS_TO_FETCH,
      });
      // EvyAILogger.log({ _recentActivities });
      setRecentActivities((previousActivities) => [...previousActivities, ..._recentActivities]);
      if (_recentActivities.length < NUMBER_OF_RECORDS_TO_FETCH) {
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

  useEffect(() => {
    // EvyAILogger.log("### fetching recent activities");
    fetchRecentActivities(true);

    return () => {
      // EvyAILogger.log("### component unmounted");
    };
  }, []);

  const copyTextToClipBoard = (text: string) => {
    // EvyAILogger.log("### text will be copied to clipboard");
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsContentCopied(true);
        setTimeout(() => {
          setIsContentCopied(false);
        }, SECONDS_TO_KEEP_THE_CONTENT_COPIED_MESSAGE * 1000);
      })
      .catch((error) => {
        // EvyAILogger.log("### Error while copying content to clipboard");
        EvyAILogger.log({ error });
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "copyTextToClipBoard",
            },
          },
        });
      });
  };

  return (
    <Box className={classes.container}>
      <Stack spacing={2} style={{ width: "100%" }}>
        <Flex align="center" mb={10}>
          <Box className={classes.arrowButtonContainer} onClick={onClickBackButton}>
            <Image src={getImagePath("left_arrow.png")} alt={"Go Back"} width={12} height={12} />
          </Box>
          <Text className={classes.titleText}>Recent Activities</Text>
        </Flex>
        <Stack spacing={8}>
          {recentActivities.map((recentActivity, index) => {
            return (
              <RecentActivity
                key={`recent-activity-${recentActivity["id"]}`}
                generatedText={recentActivity["activityData"]["generatedText"]}
                activityType={recentActivity["activityType"]}
                onCopyToClipboardClicked={() => copyTextToClipBoard(recentActivity["activityData"]["generatedText"])}
                onMouseEnter={async () => {
                  await sleep(500);
                  if (index === recentActivities.length - 1) {
                    if (doesHaveMoreRecentActivitiesToLoad && !isLoadinRecentActivities) {
                      fetchRecentActivities(false);
                    }
                  }
                }}
              />
            );
          })}
          {isLoadinRecentActivities && (
            <Center>
              <Loader size={35} mt={8} mb={8} />
            </Center>
          )}
        </Stack>
        {isContentCopied && (
          <Text fz="md" className={classes.statusText} mb={20} mt={20}>
            Content Copied
          </Text>
        )}
      </Stack>
    </Box>
  );
};
export default AllRecentActivities;
