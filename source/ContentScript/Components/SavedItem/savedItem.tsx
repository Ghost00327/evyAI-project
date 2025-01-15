import React from "react";
import { Text, Box, Stack, Flex, Button, Image, Loader } from "@mantine/core";

import useStyles from "./savedItem.style";
import { getImagePath } from "../../../Utils";

export const SavedItem = ({
  generatedText,
  maxNumberOfLines = 0,
  isUpdatingSaveCommandStatus,
  onCopyToClipboardClicked,
  onUnsaveItemClicked,
  onMouseEnter = () => {},
}: {
  generatedText: String;
  maxNumberOfLines?: number;
  isUpdatingSaveCommandStatus: boolean;
  onCopyToClipboardClicked: () => void;
  onUnsaveItemClicked: () => void;
  onMouseEnter?: () => void;
}) => {
  const { classes } = useStyles();

  return (
    <Stack className={classes.activityOrCommandTextContainer} spacing={5} onMouseEnter={onMouseEnter}>
      <Text className={classes.activityOrCommandText} lineClamp={maxNumberOfLines}>
        {generatedText}
      </Text>
      <Flex justify={"flex-end"} align={"center"} gap={10}>
        <Image
          src={getImagePath("copy_text_icon.png")}
          alt={"Copy Text"}
          width={12}
          height={14}
          style={{ cursor: "pointer" }}
          onClick={onCopyToClipboardClicked}
        />
        {isUpdatingSaveCommandStatus ? (
          <Loader size={14} />
        ) : (
          <Image
            src={getImagePath("star_marked.svg")}
            alt={"Save or unsave command"}
            width={14}
            height={14}
            style={{ cursor: "pointer" }}
            onClick={onUnsaveItemClicked}
          />
        )}
      </Flex>
    </Stack>
  );
};
