import React, { useCallback, useState } from "react";
import { Text, Box, Stack, Button, Image, TextInput } from "@mantine/core";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDisclosure } from "@mantine/hooks";

import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import { GLOBAL_STYLES, MESSAGE_ACTION } from "../../../Config";
import useStyles from "./style";
import { getImagePath } from "../../../Utils";
import { sentryClient } from "../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../Utils/EvyAILogger";

const forgotPasswordSchema = yup.object({
  email: yup.string().email("Please enter a valid email address").required("Email is required").label("Email"),
});

const ForgotPassword = ({ onClickGoBack }: { onClickGoBack: () => void }) => {
  const { classes } = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [didEmailSent, setDidEmailSent] = useState(false);

  const sendResetPasswordEmail = useCallback(async (data: any) => {
    // EvyAILogger.log({data});
    setErrorText("");
    setIsLoading(true);
    try {
      const result = await sendMessageToExtensionPages(MESSAGE_ACTION.SEND_PASSWORD_RESET_EMAIL, { email: data.email });
      setDidEmailSent(true);
      setIsLoading(false);
    } catch (error: any) {
      // EvyAILogger.log('### Error while sending password reset email');
      EvyAILogger.log({ error });
      setIsLoading(false);
      setErrorText(error.message);
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "sendResetPasswordEmail",
          },
        },
      });
    }
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { email: "" },
    resolver: yupResolver(forgotPasswordSchema),
  });

  return (
    <Stack spacing={2} className={classes.container} style={{ width: "100%", alignItems: "flex-start" }} mb={25}>
      {/* <Image
        src={getImagePath('padlock.png')}
        alt={'Forgot Password'}
        width={50}
        height={50}
      /> */}
      <Text fz="lg" className={classes.smText} fw="bold" mt={19} mb={8}>
        Forgot Password?
      </Text>
      {didEmailSent ? (
        <>
          <Text fz="md" className={classes.smText} mb={20}>
            An email has been sent to your given email address to reset password. Please reset the password and sign in.
          </Text>
          <Button mt={20} mb={20} className={classes.signOutButton} onClick={onClickGoBack}>
            Sign In
          </Button>
        </>
      ) : (
        <>
          <Text className={classes.descriptionText} mb={16}>
            Please enter the email address you used to register with{" "}
            <span className={classes.descriptionTextBold}>evyAI</span>
          </Text>
          <form onSubmit={handleSubmit(sendResetPasswordEmail)} autoComplete="off" style={{ width: "100%" }}>
            <Controller
              name="email"
              render={({ field }) => (
                <TextInput
                  placeholder="Email"
                  // size='lg'
                  label="Enter your Email"
                  withAsterisk
                  {...field}
                  error={errors.email?.message || ""}
                />
              )}
              control={control}
            />
            {errorText.length > 0 && (
              <Text fz={"md"} color={"red"} mt={10} mb={10}>
                {errorText}
              </Text>
            )}
            <Button
              mt={27}
              mb={8}
              className={classes.signOutButton}
              loading={isLoading}
              type="submit"
              disabled={!isValid}
            >
              Continue
            </Button>
          </form>
        </>
      )}
      <Button
        leftIcon={<Image src={getImagePath("blue_left_arrow.png")} width={5.66} height={10} />}
        styles={(theme) => ({
          root: {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: GLOBAL_STYLES.BUTTON_BORDER_RADIUS,
            borderWidth: 1,
            borderColor: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
            height: 36,
            color: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
            width: "100%",

            // '&:hover': {
            //   backgroundColor: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
            //   color: 'white',
            // },
          },
          leftIcon: {
            marginRight: 10.5,
          },
        })}
        onClick={onClickGoBack}
      >
        Back to Login
      </Button>
      {/* <Text
        mt={15}
        color={'green'}
        fz={'sm'}
        fw={'bold'}
        onClick={onClickGoBack}
        style={{cursor: 'pointer', alignSelf: 'flex-end'}}
      >
        Go Back
      </Text> */}
    </Stack>
  );
};
export default ForgotPassword;
