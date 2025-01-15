import React from "react";
import { Stack, Button, Divider, Text } from "@mantine/core";
import useStyles from "./login.style";

const LoginForm = () => {
  const { classes } = useStyles();

  const handleLogin = () => {
    const link = "http://app.evyai.com/login?is_ext=login";
    window.open(link, "_blank");
  };
  const handleSignup = () => {
    const link = "http://app.evyai.com/register?is_ext=login";
    window.open(link, "_blank");
  };
  return (
    <>
      <Stack className={classes.container}>
        <Button onClick={() => handleLogin()} className={classes.submit} data-checking="true" mt={16}>
          Login
        </Button>
        <Divider />
        <Stack className={classes.signUpContainer}>
          <Text className={classes.signUpHeadText}>Don't have an account?</Text>
          <Button onClick={() => handleSignup()} className={classes.submit} variant="outline" mt={16}>
            Sign up for Free
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
export default LoginForm;

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useDisclosure } from "@mantine/hooks";
// import {
//   PasswordInput,
//   Stack,
//   TextInput,
//   Button,
//   Text,
//   Image,
// } from "@mantine/core";

// import useStyles from "./login.style";
// import { GLOBAL_STYLES } from "../../../Config";
// import { getImagePath } from "../../../Utils";

// const loginSchema = yup.object({
//   email: yup
//     .string()
//     .email("Please enter a valid email address")
//     .required("Email is required")
//     .label("Email"),
//   password: yup.string().required("Password is required").label("Password"),
// });

// const LoginForm = ({
//   onSubmit,
//   loading,
//   onClickForgotPassword,
//   onClickSignInWithGoogle,
// }: {
//   onSubmit: any;
//   loading: boolean;
//   onClickForgotPassword: () => void;
//   onClickSignInWithGoogle: () => void;
// }) => {
//   const { classes } = useStyles();
//   const [visible, { toggle }] = useDisclosure(false);

//   const {
//     handleSubmit,
//     control,
//     formState: { errors, isValid },
//   } = useForm({
//     mode: "onChange",
//     defaultValues: { email: "", password: "" },
//     resolver: yupResolver(loginSchema),
//   });

//   return (
//     <>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         autoComplete="off"
//         style={{ width: "100%" }}
//       >
//         <Stack className={classes.container}>
//           <Controller
//             name="email"
//             render={({ field }) => (
//               <TextInput
//                 placeholder="Email"
//                 label="Email"
//                 // size='lg'
//                 withAsterisk
//                 {...field}
//                 error={errors.email?.message || ""}
//                 autoFocus
//               />
//             )}
//             control={control}
//           />

//           <Controller
//             name="password"
//             render={({ field }) => (
//               <PasswordInput
//                 {...field}
//                 placeholder="Password"
//                 label="Password"
//                 visible={visible}
//                 // size='lg'
//                 onVisibilityChange={toggle}
//                 withAsterisk
//                 error={errors.password?.message || ""}
//                 mt={16}
//               />
//             )}
//             control={control}
//           />
//           <Text
//             mt={8}
//             // color={'green'}
//             // fz={'sm'}
//             // fw={'bold'}
//             onClick={onClickForgotPassword}
//             style={{
//               cursor: "pointer",
//               alignSelf: "flex-end",
//               textDecorationLine: "underline",
//               color: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
//               fontWeight: 600,
//               fontSize: 10,
//             }}
//           >
//             Forgot Password?
//           </Text>
//           <Button
//             type="submit"
//             className={classes.submit}
//             disabled={!isValid}
//             loading={loading}
//             mt={16}
//           >
//             Sign In
//           </Button>
//           {
//             <Button
//               leftIcon={
//                 <Image
//                   src={getImagePath("google_icon.png")}
//                   width={30}
//                   height={30}
//                 />
//               }
//               styles={(theme) => ({
//                 root: {
//                   backgroundColor: "rgba(255, 255, 255, 0.8)",
//                   borderRadius: GLOBAL_STYLES.BUTTON_BORDER_RADIUS,
//                   // borderWidth: 1,
//                   // borderColor: 'green',
//                   border: "0.5px solid #A1A2A9",
//                   height: 36,
//                   color: "#73747E",
//                   width: "100%",

//                   "&:hover": {
//                     backgroundColor: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
//                     color: "white",
//                   },
//                 },
//                 leftIcon: {
//                   marginRight: 30,
//                 },
//               })}
//               onClick={onClickSignInWithGoogle}
//             >
//               Sign in with Google
//             </Button>
//           }
//         </Stack>
//       </form>
//     </>
//   );
// };
// export default LoginForm;
