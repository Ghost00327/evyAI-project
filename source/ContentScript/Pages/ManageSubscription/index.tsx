import { MdArrowBackIosNew } from "react-icons/md";
import useStyles from "./ManageSubscription.style";
import React, { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { dateFormat, sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import { MESSAGE_ACTION } from "../../../Config";
import _ from "lodash";
import { Button, Loader } from "@mantine/core";

type PropsType = {
  onClickGoBack: Function;
  setScreenIsLoading: Function;
};

type SubscriptionType = {
  status: string;
  items: { price: { nickname: string } }[];
  created: {
    seconds: number;
  };
  current_period_end: {
    seconds: number;
  };
};

export default function ManageSubscription(props: PropsType) {
  const { onClickGoBack, setScreenIsLoading } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { classes } = useStyles();
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionType>({
    status: "",
    items: [{ price: { nickname: "" } }],
    created: { seconds: 0 },
    current_period_end: { seconds: 0 },
  });

  const handelManageSubscription = async () => {
    setIsLoading(true);
    const response = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_MANAGE_SUBSCRIPTION_LINK);
    window.open(response.url as string);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetUserSubscriptionData();
  }, []);

  const handleGetUserSubscriptionData = async () => {
    setScreenIsLoading(true);

    const result = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_USER_SUBSCRIPTION_DATA);

    // EvyAILogger.log({
    //   handleGetUserSubscriptionData: result,
    // });

    if (!_.isEmpty(result)) {
      setSubscriptionData(result);
    }
    setScreenIsLoading(false);
  };

  return (
    <div style={{ padding: "0px 20px" }}>
      <div className={classes.backButton}>
        <button onClick={() => onClickGoBack()} className={classes.account}>
          <MdArrowBackIosNew />
        </button>
        <span className={classes.contentTitle}>Manage Subscription</span>
      </div>

      <div className={classes.currentPlanContainer}>
        <h3 className={classes.contentTitle}>Current plan</h3>
        <p className={classes.content}>
          {_.isArray(subscriptionData?.items) && subscriptionData?.items[0]?.price?.nickname}
        </p>
      </div>

      <div className={classes.contentContainer}>
        <h3 className={classes.contentTitle}>Status</h3>
        <p className={classes.content}>
          {<BsCheckCircleFill fill="#009B3E" color="#fff" />}
          {subscriptionData?.status}
        </p>
      </div>

      <div className={classes.contentContainer}>
        <h3 className={classes.contentTitle}>Member since</h3>
        <p className={classes.content}>{dateFormat(subscriptionData?.created?.seconds)}</p>
      </div>

      <div className={classes.currentPlanContainer}>
        <h3 className={classes.contentTitle}>Renew Subscription by</h3>
        <p className={classes.content}>{dateFormat(subscriptionData?.current_period_end?.seconds)}</p>
      </div>

      <Button disabled={isLoading} onClick={() => handelManageSubscription()} className={classes.buttonStyle}>
        {isLoading ? <Loader height={10} width={10} color="violet" /> : "Modify Subscription"}
      </Button>
    </div>
  );
}
