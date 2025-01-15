import { Stack, TextInput, Button, Image, Text } from "@mantine/core";
import { GLOBAL_STYLES, MESSAGE_ACTION } from "../../../Config";
import registerStyle from "../Register/register.style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { MdArrowBackIosNew } from "react-icons/md";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { getImagePath, isLinkedinProfileUrl, isValidPhoneNumber } from "../../../Utils";
import { checkIsEmpty, sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import { COLLECTIONS, getUserSubscriptionData } from "../../../firebase/firebase";
import _ from "lodash";
import { sentryClient } from "../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../Utils/EvyAILogger";
type PropsType = {
  onClickGoBack: () => void;
  setScreenIsLoading: Function;
};

export default function setting(props: PropsType) {
  const { onClickGoBack, setScreenIsLoading } = props;

  const { classes } = registerStyle();
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  // const [userData, setUserData] = useState<any>({});
  const [userData, setUserData] = useState<{
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    linkedIn: string;
  }>({
    userId: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    linkedIn: "",
  });

  useEffect(() => {
    handleGetUser();
  }, []);

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      setErrorText("");
      const payload = { ...data, userId: userData.userId };

      const result = await sendMessageToExtensionPages(MESSAGE_ACTION.UPDATE_USER_DETAILS, payload);
      setLoading(false);
    } catch (error: any) {
      EvyAILogger.error({ error });
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "setting-onSubmit",
          },
        },
      });
    }
  };

  const loginSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .max(200, "Must be within 200 characters")
      .label("First Name"),
    lastName: Yup.string()
      .required("Last name is required")
      .max(200, "Must be within 200 characters")
      .label("Last Name"),
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
  });

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
    },

    resolver: yupResolver(loginSchema),
  });

  // get user detial from customer collection and set into form
  const handleGetUser = async () => {
    setScreenIsLoading(true);

    const Data = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_USER_AUTH_STATE);

    const userCollectionData = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SINGLE_COLLECTION_DATA, {
      id: Data.uid,
      collection: COLLECTIONS.CUSTOMERS,
    });

    setUserData(userCollectionData);

    if (!_.isEmpty(userCollectionData)) {
      setValue("email", checkIsEmpty(userCollectionData.email), { shouldValidate: true });
      setValue("phoneNumber", checkIsEmpty(userCollectionData.phone_number), { shouldValidate: true });
      setValue("firstName", checkIsEmpty(userCollectionData.first_name), { shouldValidate: true });
      setValue("lastName", checkIsEmpty(userCollectionData.last_name), { shouldValidate: true });
      setValue("linkedInAccount", checkIsEmpty(userCollectionData.linkedin_url), { shouldValidate: true });
    }

    setScreenIsLoading(false);
  };

  return (
    <>
      <div className={classes.backBtnContainer}>
        <div className={classes.accountButton}>
          <button onClick={() => onClickGoBack()} className={classes.account}>
            <MdArrowBackIosNew />
          </button>
          <span className={classes.contentTitle}>Settings</span>
        </div>
      </div>
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
                error={errors?.lastName?.message || ""}
              />
            )}
            control={control}
          />
          <Controller
            name="email"
            render={({ field }) => (
              <TextInput
                {...field}
                disabled
                placeholder="Email"
                label="Email"
                // size='lg'
                withAsterisk
                error={errors?.email?.message || ""}
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
                error={errors?.phoneNumber?.message || ""}
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
                error={errors?.linkedInAccount?.message || ""}
              />
            )}
            control={control}
          />

          <Button type="submit" className={classes.submit} disabled={!isValid} loading={loading} mt={15}>
            Save Account Details
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
              },
              leftIcon: {
                marginRight: 10.5,
              },
            })}
            onClick={() => onClickGoBack()}
          >
            Delete your account
          </Button>
        </Stack>
      </form>

      {errorText.length > 0 && (
        <Text fz={"md"} sx={{ color: "red", padding: `${GLOBAL_STYLES.PADDING}px` }} mt={0}>
          {errorText}
        </Text>
      )}
    </>
  );
}
