import React from "react";
import { Anchor, Flex, Text } from "@mantine/core";

import LoginForm from "./loginForm";
import { GLOBAL_STYLES, TERMS_AND_CONDITIONS_URL } from "../../../Config";

const Login = () => {
  return (
    <>
      <LoginForm />
      <Flex align={"center"} mt={16} mb={24} justify={"center"}>
        <Text fz="sm">{`By signing in you agree to our`}</Text>
        <Anchor
          ml={5}
          fz={"sm"}
          fw={"bold"}
          style={{ cursor: "pointer", color: GLOBAL_STYLES.PRIMARY_COLOR_CODE }}
          target={"_blank"}
          href={TERMS_AND_CONDITIONS_URL}
        >
          Terms & Conditions
        </Anchor>
      </Flex>
    </>
  );
};
export default Login;
