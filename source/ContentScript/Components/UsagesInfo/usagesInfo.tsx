import React from "react";
import { Text, Stack, Flex, Button, Box, Center, Loader } from "@mantine/core";

import useStyles from "./usagesInfo.style";

export const UsagesInfo = ({
  isLoadingData,
  usagePercentage,
  descriptionText,
  buttonTitle,
  buttonLoadingStatus,
  onButtonClicked,
}: {
  isLoadingData: boolean;
  usagePercentage: number;
  descriptionText: string;
  buttonTitle: string;
  buttonLoadingStatus: boolean;
  onButtonClicked: () => void;
}) => {
  const { classes } = useStyles();

  if (isLoadingData) {
    return (
      <Stack style={{ width: "100%" }} className={classes.container} spacing={4}>
        <Flex className={classes.textContainer}>
          <Loader size={35} mt={8} mb={8} />
        </Flex>
      </Stack>
    );
  }

  return (
    <Stack className={classes.container} spacing={4}>
      <Flex className={classes.textContainer}>
        <Text className={classes.titleText}>Usage</Text>
        <Text className={classes.usagePercentageText}>{`${usagePercentage}%`}</Text>
      </Flex>
      <Flex className={classes.quotaUsageBackgroundContainer}>
        <Box className={classes.quotaUsedBackgroundContainer} style={{ width: `${usagePercentage}%` }} />
        <Box className={classes.quotaUnusedBackgroundContainer} style={{ width: `${100 - usagePercentage}%` }} />
      </Flex>
      <Text className={classes.descriptionText}>{descriptionText}</Text>
      <Button mt={12} className={classes.upgradeButton} onClick={onButtonClicked} loading={buttonLoadingStatus}>
        {buttonTitle}
      </Button>
    </Stack>
  );
};
