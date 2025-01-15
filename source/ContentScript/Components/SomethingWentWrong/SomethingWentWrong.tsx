import React, { useRef } from "react";
import { Text, Stack, Flex, Box, Image } from "@mantine/core";
import { useOutsideClick } from "../../Hooks/useOutsideModalClick";
import useStyles from "./SomethingWentWrong.style";
import { getImagePath } from "../../../Utils";

export const SomethingWentWrong = ({ setShowPopup }: { setShowPopup: (status: boolean) => void }) => {
  const { classes } = useStyles();
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, () => {
    setShowPopup(false);
  });

  return (
    <>
      <Box
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          position: "fixed",
          top: 0,
          left: 0,
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10000000",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <Box
          ref={modalRef}
          style={{
            zIndex: "10000000",
            width: 500,
            borderRadius: 12,
            backgroundColor: "white",
          }}
        >
          <Box
            style={{
              display: "flex",
              position: "relative",
              flexDirection: "column",
            }}
          >
            <Flex className={`${classes.header} handle`}>
              <img className={`${classes.headerLogo}`} src={getImagePath("evi_ai_logo.png")} alt={"Evy AI Logo"} />
              <Box className={classes.closeIconButton} onClick={() => setShowPopup(false)}>
                <Image src={getImagePath("close_icon.png")} alt={"Close Dialog"} width={20} height={20} />
              </Box>
            </Flex>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                paddingTop: "100px",
                paddingBottom: "100px",
                color: "#000000e6",
              }}
            >
              Something went wrong. Please try again. Or contact us at hello@evyai.com.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
