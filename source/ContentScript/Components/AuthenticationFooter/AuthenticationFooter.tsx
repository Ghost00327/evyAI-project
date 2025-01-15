import React from "react";
import { Text, Box, Flex, Anchor } from "@mantine/core";

import useStyles from "./style";
import { AuthenticationState } from "../../../Config";

const TERMS_AND_CONDITIONS_URL = "https://www.google.com";

export const AuthenticationFooter = ({ authenticationState }: { authenticationState: AuthenticationState }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Flex align={"center"} mt={0} justify={"center"}>
        <Text fz="sm" className={classes.smText}>
          {`By ${authenticationState === AuthenticationState.Login ? "signing in" : "signing up"} you agree to our`}
        </Text>
        <Anchor
          ml={5}
          color={"green"}
          fz={"sm"}
          fw={"bold"}
          style={{ cursor: "pointer" }}
          target={"_blank"}
          href={TERMS_AND_CONDITIONS_URL}
        >
          Terms & Conditions
        </Anchor>
      </Flex>
    </Box>
  );
};
