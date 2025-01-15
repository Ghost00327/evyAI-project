import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDisclosure } from "@mantine/hooks";
import { PasswordInput, Stack, TextInput, Button, Image, Flex, Text, Anchor } from "@mantine/core";

import useStyles from "./register.style";
import { getImagePath, isLinkedinProfileUrl, isValidPhoneNumber } from "../../../Utils";
import { GLOBAL_STYLES, STORAGE_KEYS, TERMS_AND_CONDITIONS_URL } from "../../../Config";
import * as BrowserStorage from "../../../Utils/storage";

const loginSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .max(200, "Must be within 200 characters")
    .label("First Name"),
  lastName: Yup.string().required("Last name is required").max(200, "Must be within 200 characters").label("Last Name"),
  email: Yup.string().email("Please enter a valid email address").required("Email is required").label("Email"),
  phoneNumber: Yup.string()
    .max(500, "Must be within 50 characters")
    .test("is-valid", "Phone number is not valid", async (value) => {
      if (value?.length === 0) return true;
      const isPhoneNumberValid = isValidPhoneNumber(value ?? "");
      // EvyAILogger.log({value, isPhoneNumberValid});
      return isPhoneNumberValid;
    })
    .label("Phone Number"),
  linkedInAccount: Yup.string()
    .test("is-valid", "Not a LinkedIn Profile URL", async (value) => {
      if (value?.length === 0) return true;
      const isValidLinkedInProfileURL = isLinkedinProfileUrl(value ?? "");
      // EvyAILogger.log({value, isValidLinkedInProfileURL});
      return isValidLinkedInProfileURL;
    })
    .label("LinkedIn Account"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
    .label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Repeat Password"),
});

const SAVED_REGISTER_DATA_KEYS = {
  FIRST_NAME: "first_name",
  LAST_NAME: "last_name",
  EMAIL: "email",
  PHONE_NUMBER: "phone_numer",
  LINKED_IN_URL: "linked_in_url",
};

const RegisterForm = ({
  onSubmit,
  loading,
  onClickGoBack,
}: {
  onSubmit: any;
  loading: boolean;
  onClickGoBack: () => void;
}) => {
  const { classes } = useStyles();
  const [passwordVisible, { toggle: togglePasswordVisible }] = useDisclosure(false);
  const [confirmPasswordVisible, { toggle: toggleConfirmPasswordVisible }] = useDisclosure(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      linkedInAccount: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const fetchSavedFormDataFromLocalStorage = async () => {
    const savedRegisterData = await BrowserStorage.getItem(STORAGE_KEYS.REGISTER_DATA);
    if (savedRegisterData) {
      if (savedRegisterData[SAVED_REGISTER_DATA_KEYS.FIRST_NAME]) {
        setValue("firstName", savedRegisterData[SAVED_REGISTER_DATA_KEYS.FIRST_NAME]);
      }
      if (savedRegisterData[SAVED_REGISTER_DATA_KEYS.LAST_NAME]) {
        setValue("lastName", savedRegisterData[SAVED_REGISTER_DATA_KEYS.LAST_NAME]);
      }
      if (savedRegisterData[SAVED_REGISTER_DATA_KEYS.EMAIL]) {
        setValue("email", savedRegisterData[SAVED_REGISTER_DATA_KEYS.EMAIL]);
      }
      if (savedRegisterData[SAVED_REGISTER_DATA_KEYS.PHONE_NUMBER]) {
        setValue("phoneNumber", savedRegisterData[SAVED_REGISTER_DATA_KEYS.PHONE_NUMBER]);
      }
      if (savedRegisterData[SAVED_REGISTER_DATA_KEYS.LINKED_IN_URL]) {
        setValue("linkedInAccount", savedRegisterData[SAVED_REGISTER_DATA_KEYS.LINKED_IN_URL]);
      }
    }
  };

  useEffect(() => {
    fetchSavedFormDataFromLocalStorage();
  }, []);

  const saveRegisterData = (newRegisterData: any) => {
    BrowserStorage.setItem(STORAGE_KEYS.REGISTER_DATA, newRegisterData);
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === "change") {
        const newRegiterData = {
          [SAVED_REGISTER_DATA_KEYS.FIRST_NAME]: value.firstName,
          [SAVED_REGISTER_DATA_KEYS.LAST_NAME]: value.lastName,
          [SAVED_REGISTER_DATA_KEYS.EMAIL]: value.email,
          [SAVED_REGISTER_DATA_KEYS.PHONE_NUMBER]: value.phoneNumber,
          [SAVED_REGISTER_DATA_KEYS.LINKED_IN_URL]: value.linkedInAccount,
        };
        saveRegisterData(newRegiterData);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" style={{ width: "100%" }}>
        <Stack className={classes.container} mx="auto" spacing={12} mb={14}>
          <Controller
            name="firstName"
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="First Name"
                label="First Name"
                withAsterisk
                error={errors.firstName?.message || ""}
                autoFocus
              />
            )}
            control={control}
          />
          <Controller
            name="lastName"
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Last Name"
                label="Last Name"
                withAsterisk
                error={errors.lastName?.message || ""}
              />
            )}
            control={control}
          />
          <Controller
            name="email"
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Email"
                label="Email"
                // size='lg'
                withAsterisk
                error={errors.email?.message || ""}
              />
            )}
            control={control}
          />
          <Controller
            name="phoneNumber"
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="(111) 111 - 111"
                label="Phone Number"
                error={errors.phoneNumber?.message || ""}
              />
            )}
            control={control}
          />
          <Controller
            name="linkedInAccount"
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="linkedin.com/in/Helen_Anderson"
                label="LinkedIn Account"
                error={errors.linkedInAccount?.message || ""}
              />
            )}
            control={control}
          />
          <Controller
            name="password"
            render={({ field }) => (
              <PasswordInput
                {...field}
                placeholder="Password"
                label="Password"
                // size='lg'
                visible={passwordVisible}
                onVisibilityChange={togglePasswordVisible}
                withAsterisk
                error={errors.password?.message || ""}
              />
            )}
            control={control}
          />

          <Controller
            name="confirmPassword"
            render={({ field }) => (
              <PasswordInput
                {...field}
                placeholder="Repeat Password"
                label="Repeat Password"
                visible={confirmPasswordVisible}
                // size='lg'
                onVisibilityChange={toggleConfirmPasswordVisible}
                withAsterisk
                error={errors.confirmPassword?.message || ""}
              />
            )}
            control={control}
          />
          <Flex align={"center"} mt={13} mb={16} justify={"flex-start"}>
            <Image
              width={19.2}
              height={19.2}
              mr={4}
              src={getImagePath(isTermsAccepted ? "checked_button.png" : "unchecked_button.png")}
              alt="accept terms"
              onClick={() => {
                setIsTermsAccepted((previousValue) => !previousValue);
              }}
            ></Image>
            <Text fz="sm">{`By signing up you agree to our`}</Text>
            <Anchor
              ml={5}
              fz={"sm"}
              fw={"bold"}
              style={{ cursor: "pointer" }}
              target={"_blank"}
              href={TERMS_AND_CONDITIONS_URL}
            >
              Terms & Conditions
            </Anchor>
          </Flex>
          <Button
            type="submit"
            className={classes.submit}
            disabled={!isValid || !isTermsAccepted}
            loading={loading}
            mt={15}
          >
            Register
          </Button>
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
        </Stack>
      </form>
    </>
  );
};
export default RegisterForm;
