import React, { FC, useState, useEffect } from "react";
import { Text, Box, Stack, Button, Image, Title, Flex, Loader } from "@mantine/core";
import { getImagePath } from "../../../../Utils";
import useStyles from "./feedContainer.style";
import { MESSAGE_ACTION } from "../../../../Config";
import { sendMessageToExtensionPages } from "../../../../Utils/extensionUtils";
import * as BrowserStorage from "../../../../Utils/storage";

import { STORAGE_KEYS } from "../../../../Config";
import { sentryClient } from "../../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../../Utils/EvyAILogger";

export const FeedContainer: FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [allBanners, setAllBanners] = useState<any>(null);
  const [bannerDetails, setBannerDetails] = useState<any>(null);
  const [currentBannerIndex, setcurrentBannerIndex] = useState<any>(null);
  const [showBanner, setShowBanner] = useState<any>(true);

  const { classes } = useStyles();

  const handleHide = () => {
    if (currentBannerIndex === allBanners.length - 1 && isVisible) {
      setBannerVisibility(!isVisible);
      setIsVisible(!isVisible);
      setWillShowBanner(false);
      setShowBanner(false);
    } else {
      setBannerVisibility(!isVisible);
      setIsVisible(!isVisible);
      setWillShowBanner(true);
    }
  };

  const fetchBannerDetails = async () => {
    try {
      const response = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_BANNER_DETAILS);

      // response.push({
      //   description: "djnkasdnkjsandkasndknsakdnkasd",
      //   feature: "NEW 1",
      //   id: 17,
      //   position: 17,
      // })

      // response.push({
      //   description: "djnkasdnkjsandkasndknsakdnkasd",
      //   feature: "NEW 2",
      //   id: 18,
      //   position: 18,
      // })

      const visibility = await getBannerVisibility();
      if (visibility === false) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      let id: any = await getBannerId();
      id = id ? id : 1;
      if (id > response[response.length - 1].id) {
        id = response[response.length - 1].id;
      }
      const willShowBanner = await getWillShowBanner();
      if (willShowBanner === true) {
        if (id === response[response.length - 1].id) {
          setShowBanner(false);
        } else if (id !== response[response.length - 1].id) {
          setShowBanner(true);
        }
      } else if (willShowBanner === false) {
        if (id === response[response.length - 1].id) {
          setShowBanner(false);
        } else if (id !== response[response.length - 1].id) {
          setShowBanner(true);
        }
      }
      setCurrentBanner(response, id);
      setAllBanners(response);
    } catch (error) {
      EvyAILogger.log({ error });
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "fetchBannerDetails",
          },
        },
      });
    }
  };

  const setWillShowBanner = async (value: any) => {
    await BrowserStorage.setItem(STORAGE_KEYS.WILL_SHOW_BANNER, value);
  };

  const getWillShowBanner = async () => {
    const value = await BrowserStorage.getItem(STORAGE_KEYS.WILL_SHOW_BANNER);
    return value;
  };

  const setBannerVisibility = async (value: any) => {
    await BrowserStorage.setItem(STORAGE_KEYS.BANNER_VISIBILITY, value);
  };

  const getBannerVisibility = async () => {
    const value = await BrowserStorage.getItem(STORAGE_KEYS.BANNER_VISIBILITY);
    return value;
  };

  const setBannerId = async (id: any) => {
    await BrowserStorage.setItem(STORAGE_KEYS.BANNER_ID, id);
  };

  const getBannerId = async () => {
    const value = await BrowserStorage.getItem(STORAGE_KEYS.BANNER_ID);
    return value;
  };

  const moveTo = async (index: any) => {
    if (!allBanners[index]) {
      return;
    }
    setIsLoadingData(true);
    setCurrentBanner(allBanners, allBanners[index].id);
  };

  const setCurrentBanner = async (banners: any, id: any) => {
    let banner = banners.filter((item: any) => item.id === id);
    banner = banner[0];
    if (!banner) {
      banner = banners[0];
      id = banner.id;
    }
    setBannerId(id);
    setBannerDetails(banner);
    const bannerIndex = banners.findIndex((item: any) => item.id === id);
    setcurrentBannerIndex(bannerIndex);
    setIsLoadingData(false);
  };

  const handleReadMore = () => {
    if (bannerDetails?.action.url) {
      window.open(bannerDetails.action.url, "_blank");
    }
  };

  const canShowButton = () => {
    return bannerDetails && bannerDetails.action && bannerDetails.action.label && bannerDetails.action.url;
  };

  useEffect(() => {
    fetchBannerDetails();
    return () => {};
  }, []);

  return (
    <>
      {!isLoadingData && bannerDetails && showBanner && (
        <Box className={classes.myGradientBackground}>
          <Box
            className={classes.gridContainer}
            style={{
              ...(isVisible ? {} : { display: "flex", alignItems: "center" }),
            }}
          >
            <Image src={getImagePath("bannerIdea.svg")} alt={"Idea Dialog"} width={32} height={32} />
            <Stack className={classes.textStack} spacing={7} align="start">
              <Title
                order={5}
                className={classes.whiteText}
                style={{
                  ...(isVisible ? {} : { marginLeft: "10px" }),
                }}
              >
                {bannerDetails.feature}
              </Title>
              {isVisible && (
                <>
                  <Text className={`${classes.whiteText} ${classes.customTextProps}`} align="start">
                    {bannerDetails.description}
                  </Text>
                  <Box className={`${classes.bottomBox} ${canShowButton() ? "" : classes.additionalbottomprops}`}>
                    {canShowButton() && (
                      <Box>
                        <Button onClick={handleReadMore} className={classes.readMoreButtonStyle} variant="default">
                          {bannerDetails.action.label}
                          <Image
                            src={getImagePath("rightVector.png")}
                            alt={"Right Arrow"}
                            width={20}
                            height={11}
                            className={classes.arrowIcon}
                          />
                        </Button>
                      </Box>
                    )}
                    <Box className={classes.bottomRightIcon}>
                      <Box
                        className={classes.arrowButtonContainer}
                        sx={
                          0 === currentBannerIndex
                            ? { backgroundColor: "lightgrey" }
                            : { cursor: "pointer", backgroundColor: "white" }
                        }
                        onClick={() => moveTo(currentBannerIndex - 1)}
                      >
                        <Image src={getImagePath("left_arrow.png")} alt={"Previous Commands"} width={15} height={15} />
                      </Box>
                      <Box
                        className={classes.arrowButtonContainer}
                        sx={
                          allBanners.length - 1 === currentBannerIndex
                            ? { backgroundColor: "lightgrey" }
                            : { cursor: "pointer", backgroundColor: "white" }
                        }
                        onClick={() => moveTo(currentBannerIndex + 1)}
                      >
                        <Image src={getImagePath("right_arrow.png")} alt={"Next Commands"} width={15} height={15} />
                      </Box>
                    </Box>
                  </Box>
                </>
              )}
            </Stack>
          </Box>
          <Image
            src={getImagePath(isVisible ? "cancel.png" : "filledPlus.svg")}
            alt={"Close Dialog"}
            width={isVisible ? 12 : 14}
            height={isVisible ? 12 : 14}
            onClick={handleHide}
            className={classes.topRightIcon}
          />
        </Box>
      )}
    </>
  );
};
