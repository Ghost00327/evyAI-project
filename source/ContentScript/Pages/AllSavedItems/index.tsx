import React, { useEffect, useState } from "react";
import { Text, Box, Stack, Button, Flex, Image, Loader, Center } from "@mantine/core";

import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import { MESSAGE_ACTION, SECONDS_TO_KEEP_THE_CONTENT_COPIED_MESSAGE } from "../../../Config";
import useStyles from "./style";
import { getImagePath, sleep } from "../../../Utils";
import { SavedItem } from "../../Components";
import { sentryClient } from "../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../Utils/EvyAILogger";

const NUMBER_OF_RECORDS_TO_FETCH = 20;

const AllSavedItems = ({ onClickBackButton }: { onClickBackButton: () => void }) => {
  const { classes } = useStyles();
  const [savedCommands, setSavedCommands] = useState<any[]>([]);
  const [isLoadingSavedCommands, setIsLoadingSavedCommands] = useState(false);
  const [doesHaveMoreSavedCommandsToLoad, setDoesHaveMoreSavedCommandsToLoad] = useState(true);
  const [isContentCopied, setIsContentCopied] = useState(false);
  const [updatingSaveCommandStatusDocId, setUpdatingSaveCommandStatusDocId] = useState("");

  const fetchSavedCommands = async (willStartAgain: boolean = true) => {
    try {
      setIsLoadingSavedCommands(true);
      if (willStartAgain) {
        setSavedCommands([]);
        setDoesHaveMoreSavedCommandsToLoad(true);
      }
      const _savedCommands = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SAVED_COMMANDS, {
        willStartAgain,
        numberOfItemsToFetch: NUMBER_OF_RECORDS_TO_FETCH,
      });
      // EvyAILogger.log({_savedCommands});
      setSavedCommands((previousCommands) => [...previousCommands, ..._savedCommands]);
      if (_savedCommands.length < NUMBER_OF_RECORDS_TO_FETCH) {
        setDoesHaveMoreSavedCommandsToLoad(false);
      }
    } catch (error) {
      // EvyAILogger.log('### Error in getting data');
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
    // EvyAILogger.log('### fetching saved commands');
    fetchSavedCommands(true);

    return () => {
      // EvyAILogger.log('### component unmounted');
    };
  }, []);

  const copyTextToClipBoard = (text: string) => {
    // EvyAILogger.log('### text will be copied to clipboard');
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsContentCopied(true);
        setTimeout(() => {
          setIsContentCopied(false);
        }, SECONDS_TO_KEEP_THE_CONTENT_COPIED_MESSAGE * 1000);
      })
      .catch((error) => {
        // EvyAILogger.log('### Error while copying content to clipboard');
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

  const unsaveCommand = async (commandDocId: string) => {
    try {
      setUpdatingSaveCommandStatusDocId(commandDocId);
      const { docId, error } = await sendMessageToExtensionPages(MESSAGE_ACTION.REMOVE_SAVED_COMMAND, {
        documentId: commandDocId,
      });
      if (error === null && docId?.length > 0) {
        const tempSavedCommands = [...savedCommands];
        const indexToRemove = tempSavedCommands.findIndex((command) => command.id === docId);
        if (indexToRemove > -1) {
          tempSavedCommands.splice(indexToRemove, 1);
          setSavedCommands([...tempSavedCommands]);
        }
      }
    } catch (error) {
      // EvyAILogger.log('### Error while unsaving command');
      EvyAILogger.log({ error });
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "unsaveCommand",
          },
        },
      });
    } finally {
      setUpdatingSaveCommandStatusDocId("");
    }
  };

  return (
    <Box className={classes.container}>
      <Stack spacing={2} style={{ width: "100%" }}>
        <Flex align="center" mb={10}>
          <Box className={classes.arrowButtonContainer} onClick={onClickBackButton}>
            <Image src={getImagePath("left_arrow.png")} alt={"Go Back"} width={12} height={12} />
          </Box>
          <Text className={classes.titleText}>Saved Items</Text>
        </Flex>
        <Stack spacing={8}>
          {savedCommands.map((savedCommand, index) => {
            return (
              <SavedItem
                key={`saved-command-${savedCommand["id"]}`}
                generatedText={savedCommand["generatedText"]}
                isUpdatingSaveCommandStatus={updatingSaveCommandStatusDocId === savedCommand["id"]}
                onCopyToClipboardClicked={() => {
                  copyTextToClipBoard(savedCommand["generatedText"]);
                }}
                onUnsaveItemClicked={() => {
                  unsaveCommand(savedCommand["id"]);
                }}
                onMouseEnter={async () => {
                  await sleep(500);
                  if (index === savedCommands.length - 1) {
                    if (doesHaveMoreSavedCommandsToLoad && !isLoadingSavedCommands) {
                      fetchSavedCommands(false);
                    }
                  }
                }}
              />
            );
          })}
          {isLoadingSavedCommands && (
            <Center>
              <Loader size={35} mt={8} mb={8} />
            </Center>
          )}
        </Stack>
        {isContentCopied && (
          <Text fz="md" className={classes.statusText} mb={20} mt={20}>
            Copied to Clipboard
          </Text>
        )}
      </Stack>
    </Box>
  );
};
export default AllSavedItems;
