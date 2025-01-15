import React from "react";
import { Text, Stack, Flex, Button, Box } from "@mantine/core";

import useStyles from "./subscriptionPlanItem.style";

export const SubscriptionPlanItem = ({
  title,
  price,
  isSelected,
  onItemClicked,
}: {
  title: string;
  price: string;
  isSelected: boolean;
  onItemClicked: () => void;
}) => {
  const { classes } = useStyles();

  return (
    <Stack
      className={classes.container}
      onClick={onItemClicked}
      style={{ border: isSelected ? "1px solid #6E40C5" : "0.5px solid #E2CEFF" }}
    >
      <Text className={classes.titleText}>{title}</Text>
      <Text className={classes.priceText}>${`${price}`}</Text>
    </Stack>
  );
};
