import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Box, Flex, Image, Stack, Text } from "@mantine/core";
import { getImagePath } from "../../../Utils";
import { FaEnvelope } from "react-icons/fa";
import useStyles from "./style";
import React from "react";

const emailBody = "Share evyAI with a friend \n https://evyai.com";

const ShareWithFriends = ({ onClickBackButton }: { onClickBackButton: () => void }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Stack spacing={2} style={{ width: "100%" }}>
        <Flex align="center" mb={10}>
          <Box className={classes.arrowButtonContainer} onClick={onClickBackButton}>
            <Image src={getImagePath("left_arrow.png")} alt={"Go Back"} width={12} height={12} />
          </Box>
          <Text className={classes.titleText}>Share evyAI with a friend</Text>
        </Flex>

        <Text mt={15} className={classes.bigBlackText}>
          Spread the word
        </Text>

        <Text weight={400} size={13} my={16} color="#414042">
          Share evyAI with others
        </Text>

        <Flex direction="column" gap={12}>
          <Flex
            align="center"
            gap={8}
            bg={"#fff"}
            p={10}
            className={classes.borderRadius}
            onClick={() => {
              const link = "https://www.linkedin.com/shareArticle?mini=true&url=evyAI.com";
              window.open(link, "_blank");
            }}
          >
            <BsLinkedin color="#414042" size={22} />
            <Text color="#444553" weight={700} size={13}>
              Share on LinkedIn
            </Text>
          </Flex>
          <Flex
            align="center"
            gap={8}
            bg={"#fff"}
            p={10}
            className={classes.borderRadius}
            onClick={() => {
              const link = "https://twitter.com/intent/tweet?text=evyAI.com";
              window.open(link, "_blank");
            }}
          >
            <BsTwitter color="#414042" size={22} />
            <Text color="#444553" weight={700} size={13}>
              Share on Twitter
            </Text>
          </Flex>
          <Flex
            align="center"
            gap={8}
            bg={"#fff"}
            p={10}
            className={classes.borderRadius}
            onClick={() => {
              const link = "https://www.facebook.com/sharer/sharer.php?u=evyai.com";
              window.open(link, "_blank");
            }}
          >
            <BsFacebook color="#414042" size={22} />
            <Text color="#444553" weight={700} size={13}>
              Share on Facebook
            </Text>
          </Flex>
          <Flex
            align="center"
            gap={8}
            bg={"#fff"}
            p={10}
            className={classes.borderRadius}
            onClick={() => {
              const mailtoLink = `mailto:${""}?subject=${encodeURIComponent("")}&body=${encodeURIComponent(emailBody)}`;
              window.open(mailtoLink);
            }}
          >
            <FaEnvelope color="#414042" size={22} />
            <Text color="#444553" weight={700} size={13}>
              Share via email
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
};
export default ShareWithFriends;
