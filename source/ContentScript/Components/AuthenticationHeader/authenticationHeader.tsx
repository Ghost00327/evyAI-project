import React from "react";
import { Text, Box, Stack, Flex, Button, Image } from "@mantine/core";

import useStyles from "./authenticationHeader.style";
import { AuthenticationState, GLOBAL_STYLES } from "../../../Config";
import { getImagePath } from "../../../Utils";

export const AuthenticationHeader = ({
  authenticationState,
  onButtonClick,
  onClickSignInWithPhone,
  onClickSignInWithGoogle,
}: {
  authenticationState: AuthenticationState;
  onButtonClick: () => void;
  onClickSignInWithPhone: () => void;
  onClickSignInWithGoogle: () => void;
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Stack spacing={2} style={{ width: "100%" }}>
        {authenticationState === AuthenticationState.Login ? (
          <Stack>
            <Text className={classes.signInTitleText}>
              Welcome to <span className={classes.signInTitlePurpleText}>evyAI</span>
            </Text>
            <Text className={classes.signInSubTitle}>Please login to continue</Text>
            {/* <Flex>
              <Text className={classes.signInDescriptionText}>
                Please sign in to continue. Don't have an account?
              </Text>
              <Text
                className={classes.registerButtonText}
                onClick={onButtonClick}
              >
                Register
              </Text>
            </Flex> */}
          </Stack>
        ) : (
          <Text className={classes.registerTitleText}>Register</Text>
        )}

        {/* <Text
          ml={5}
          color={'green'}
          fz={'sm'}
          fw={'bold'}
          onClick={onClickSignInWithPhone}
          style={{cursor: 'pointer', textAlign: 'center'}}
        >
          Sign in with phone
        </Text> */}
      </Stack>
    </Box>
  );
};
