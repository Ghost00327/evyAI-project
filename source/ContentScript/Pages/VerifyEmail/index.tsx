import React from "react";
import { Text, Box, Stack, Button, Image, Loader } from "@mantine/core";

import useStyles from "./style";
import { getImagePath } from "../../../Utils";

const VerifyEmail = ({ onClickGoBack }: { onClickGoBack: () => void }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Stack spacing={2} style={{ width: "100%", alignItems: "center" }}>
        <Image src={getImagePath("verified.png")} alt={"Email Verify"} width={50} height={50} />
        <Text fz="lg" className={classes.smText} fw="bold" mt={30} mb={30}>
          Verify your email
        </Text>
        <Text fz="md" className={classes.smText}>
          A verification email has been sent to your email address. Please check your email and click on the link to
          verify your email address.
        </Text>
        <Loader size={35} mt={30} mb={30} />
        <Button mt={20} mb={20} className={classes.signOutButton} onClick={onClickGoBack}>
          Go Back
        </Button>
      </Stack>
    </Box>
  );
};
export default VerifyEmail;
