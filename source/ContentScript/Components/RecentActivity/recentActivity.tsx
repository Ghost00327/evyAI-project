import React from "react";
import { Text, Box, Stack, Flex, Button, Image } from "@mantine/core";

import useStyles from "./recentActivity.style";
import { API_REQUEST_TYPE, RECENT_ACTIVITY_TYPE_TITLE } from "../../../Config";
import { getImagePath } from "../../../Utils";

export const RecentActivity = ({
  generatedText,
  maxNumberOfLines = 0,
  activityType,
  onCopyToClipboardClicked,
  onMouseEnter = () => {},
}: {
  generatedText: String;
  maxNumberOfLines?: number;
  activityType: API_REQUEST_TYPE;
  onCopyToClipboardClicked: () => void;
  onMouseEnter?: () => void;
}) => {
  const { classes } = useStyles();

  return (
    <Stack className={classes.activityOrCommandTextContainer} spacing={5} onMouseEnter={onMouseEnter}>
      <Flex>
        <Box className={classes.activityTypeIconContainer}>
          <Image
            src={getImagePath(`recent_${activityType}.png`)}
            alt={"Activity Type"}
            width={16.245}
            height={16.245}
          />
        </Box>
        <Text className={classes.activityOrCommandText} lineClamp={maxNumberOfLines}>
          <b>{`${RECENT_ACTIVITY_TYPE_TITLE[activityType as keyof typeof RECENT_ACTIVITY_TYPE_TITLE]}: `}</b>
          {generatedText}
        </Text>
      </Flex>

      <Image
        src={getImagePath("copy_text_icon.png")}
        alt={"Copy Text"}
        width={12}
        height={14}
        style={{ cursor: "pointer" }}
        onClick={onCopyToClipboardClicked}
      />
    </Stack>
  );
};
