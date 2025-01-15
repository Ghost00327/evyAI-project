import React, { useEffect, useState } from "react";
import { Text, Box, Stack, Button, Flex, Image, Loader, Center } from "@mantine/core";

import useStyles from "./style";
import { getImagePath, sleep } from "../../../Utils";
import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import { MESSAGE_ACTION } from "../../../Config";
import { SubscriptionPlanItem } from "../../Components";
import { sentryClient } from "../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../Utils/EvyAILogger";

const UpgradePlan = ({
  onClickBackButton,
  onClickUpgradeNowButton,
}: {
  onClickBackButton: () => void;
  onClickUpgradeNowButton: () => void;
}) => {
  const { classes } = useStyles();
  const [isLoadingPriceList, setIsLoadingPriceList] = useState(false);
  const [priceList, setPriceList] = useState<any[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState("");
  const [isGettingPaymentURL, setIsGettingPaymentURL] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchPlanPrices = async () => {
    try {
      setIsLoadingPriceList(true);
      setPriceList([]);
      setSelectedPlanId("");
      const _subscriptionPlans = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SUBSCRIPTION_PLANS);
      // EvyAILogger.log({ _subscriptionPlans });
      setPriceList(_subscriptionPlans);
      if (_subscriptionPlans.length > 0) {
        setSelectedPlanId(_subscriptionPlans[0].id);
      }
    } catch (error) {
      // EvyAILogger.log("### Error in getting data");
      EvyAILogger.log({ error });
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "fetchPlanPrices",
          },
        },
      });
    } finally {
      setIsLoadingPriceList(false);
    }
  };

  useEffect(() => {
    // EvyAILogger.log("### fetching plan prices");
    fetchPlanPrices();

    return () => {
      // EvyAILogger.log("### component unmounted");
    };
  }, []);

  return (
    <Box className={classes.container}>
      <Stack spacing={2} style={{ width: "100%" }}>
        <Flex align="center" mb={10}>
          <Box className={classes.arrowButtonContainer} onClick={onClickBackButton}>
            <Image src={getImagePath("left_arrow.png")} alt={"Go Back"} width={12} height={12} />
          </Box>
          <Text className={classes.titleText}>Plan Upgrade</Text>
        </Flex>
        {isLoadingPriceList ? (
          <Center>
            <Loader size={35} mt={8} mb={8} />
          </Center>
        ) : (
          <>
            <Text mt={15} className={classes.bigBlackText}>
              Join
            </Text>
            <Text className={classes.bigPurpleText}>evyAI Premium</Text>
            <Text className={classes.featureText}>
              Features Include
              <ul>
                <li>Unlimited Comments & Content</li>
                <li>Exclusive Features & Templates</li>
                <li>Premium Support & Training</li>
              </ul>
            </Text>
            <Flex mt={40} justify={"center"} gap={16}>
              {priceList.map((priceItem) => {
                return (
                  <SubscriptionPlanItem
                    key={`plan_${priceItem.id}`}
                    title={priceItem.interval === "year" ? "Annual" : "Monthly"}
                    price={`${parseInt(priceItem.unit_amount / 100 + "", 10)}.00`}
                    isSelected={selectedPlanId === priceItem.id}
                    onItemClicked={() => {
                      setSelectedPlanId(priceItem.id);
                    }}
                  />
                );
              })}
            </Flex>
            {errorMessage.length > 0 && (
              <Text fz="md" className={classes.statusText} mb={20}>
                {errorMessage}
              </Text>
            )}
            <a href="https://app.evyai.com/subscription-pricing/?isNavigateToSubscription-pricing=true" target="_blank">
              <Button
                mt={62}
                className={classes.upgradeNowButton}
                // onClick={handleLinkClick}
                loading={isGettingPaymentURL}
              >
                Upgrade Now
              </Button>
            </a>
            <Text className={classes.footerText}>Billed Annually or Monthly and can be canceled at anytime</Text>
          </>
        )}
      </Stack>
    </Box>
  );
};
export default UpgradePlan;
