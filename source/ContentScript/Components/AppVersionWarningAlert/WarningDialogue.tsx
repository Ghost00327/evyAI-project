import React from "react";
import { Text, Stack, Flex, Image, Box } from "@mantine/core";
import useStyles from "./WarningDialogue.style";
import { getImagePath } from "../../../Utils";
import { extensionPage, extension_update_page } from "../../../LinkedInParser/constants";

export const WarningDialogue = () => {
  const { classes } = useStyles();

  return (
    <Stack style={{ width: "100%" }} className={classes.container} spacing={4}>
      <Box className={classes.oldVersionBanner}>
        <Flex align="start">
          <Image src={getImagePath("warningIcon.svg")} alt={"Recent Activities"} width={20} height={20} mr={8} />
          <Text>You’re using an old version of the extension.</Text>
        </Flex>
        <a href={extension_update_page} target="_blank" className={classes.updateBtn}>
          Update Now
        </a>
      </Box>
    </Stack>
  );
};
