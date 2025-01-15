import React, { useState } from "react";
import { Text } from "@mantine/core";

import { resetSavedRegisterData, sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import RegisterForm from "./registerForm";
import { GLOBAL_STYLES, MESSAGE_ACTION } from "../../../Config";
import { sentryClient } from "../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../Utils/EvyAILogger";

const Register = ({ onClickGoBack }: { onClickGoBack: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onSubmit = async (data: any) => {
    try {
      // EvyAILogger.log(data);
      setLoading(true);
      setErrorText("");
      const result = await sendMessageToExtensionPages(MESSAGE_ACTION.EMAIL_SIGN_UP, data);
      // EvyAILogger.log('result:::', result);
      setLoading(false);
      resetSavedRegisterData();
    } catch (error: any) {
      EvyAILogger.error({ error });
      setErrorText(error.message);
      setLoading(false);
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "Register-onSubmit",
          },
        },
      });
    }
  };
  return (
    <>
      <RegisterForm onSubmit={onSubmit} loading={loading} onClickGoBack={onClickGoBack} />
      {errorText.length > 0 && (
        <Text fz={"md"} sx={{ color: "red", padding: `${GLOBAL_STYLES.PADDING}px` }} mt={0}>
          {errorText}
        </Text>
      )}
    </>
  );
};
export default Register;
