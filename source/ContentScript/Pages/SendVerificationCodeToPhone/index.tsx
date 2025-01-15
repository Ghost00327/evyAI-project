import React, { useCallback, useState } from "react";
import { Text, Box, Stack, Button, Image } from "@mantine/core";
import PhoneInput from "react-phone-input-2";
import { RecaptchaVerifier, getAuth } from "firebase/auth";

// import 'react-phone-input-2/lib/bootstrap.css';

import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import { MESSAGE_ACTION, RECAPTCHA_CONTAINER_ID } from "../../../Config";
import useStyles from "./style";
import { getImagePath } from "../../../Utils";

const SendVerificationCodeToPhone = ({ onClickGoBack }: { onClickGoBack: () => void }) => {
  const { classes } = useStyles();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("us");
  const [isLoading, setIsLoading] = useState(false);

  const sendVerificationCodeToPhone = async () => {
    setIsLoading(true);
    const response = await sendMessageToExtensionPages(MESSAGE_ACTION.SEND_VERIFICATION_CODE_TO_PHONE, {
      phoneNumber: `+${phoneNumber}`,
    });
    // EvyAILogger.log({response});
    setIsLoading(false);
    return;
  };

  return (
    <Box className={classes.container}>
      <Stack spacing={2} style={{ width: "100%", alignItems: "center" }}>
        <Image src={getImagePath("phone_icon.png")} alt={"Email Verify"} width={50} height={50} />
        <Text fz="lg" className={classes.smText} fw="bold" mt={30} mb={30}>
          Enter your phone number
        </Text>
        <Text fz="md" className={classes.smText} mb={20}>
          A verification code will be sent to your phone. Please check your phone and enter the code in the next page.
        </Text>
        <PhoneInput
          country={countryCode}
          value={phoneNumber}
          onChange={(value, country: any, e, formattedValue) => {
            // EvyAILogger.log({value, country, e, formattedValue});
            setCountryCode(country.countryCode);
            setPhoneNumber(value);
          }}
          placeholder="Enter Phone Number"
          inputStyle={{ width: "100%" }}
          dropdownStyle={{ zIndex: 2147483646 }}
          containerStyle={{ zIndex: 2147483647 }}
          disableDropdown={true}
        />
        <div id={RECAPTCHA_CONTAINER_ID}></div>
        <Button
          className={classes.button}
          loading={isLoading}
          mt={30}
          onClick={sendVerificationCodeToPhone}
          disabled={phoneNumber.length === 0}
        >
          Send Code
        </Button>
        <Text mt={20} mb={20} color="green" onClick={onClickGoBack} style={{ cursor: "pointer" }}>
          Go Back
        </Text>
      </Stack>
    </Box>
  );
};
export default SendVerificationCodeToPhone;
