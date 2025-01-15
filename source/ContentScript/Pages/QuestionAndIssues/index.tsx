import React, { useEffect, useState } from "react";
import { Box, Textarea, Button, Alert } from "@mantine/core";
import useStyles from "./questionsAndIssues.style";
import { MdArrowBackIosNew } from "react-icons/md";
import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import { MESSAGE_ACTION } from "../../../Config";
import { sentryClient } from "../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../Utils/EvyAILogger";

type PropsType = {
  onClickGoBack: Function;
};

const Index = (props: PropsType) => {
  const { onClickGoBack } = props;

  const [question, setQuestion] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { classes } = useStyles();

  const handleAddQuestion = async () => {
    try {
      setIsLoading(true);
      await sendMessageToExtensionPages(MESSAGE_ACTION.ADD_QUESTIONS, {
        question: question,
      });
      setIsSuccess(true);
      setQuestion("");
    } catch (error) {
      EvyAILogger.log(error);
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "handleAddQuestion",
          },
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const delay = 3000;
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <div style={{ padding: "0px 20px" }}>
      <div className={classes.accountButton}>
        <button onClick={() => onClickGoBack()} className={classes.account}>
          <MdArrowBackIosNew />
        </button>
        <span className={(classes.contentTitle, classes.main)}>Questions and Issues</span>
      </div>
      <Box className={classes.container}>
        <div className={classes.contentContainer}>
          <div className={classes.review}>
            <Textarea
              value={question}
              autosize
              maxLength={5000}
              minRows={6}
              placeholder="Have a question or having an issue? Let us know here"
              onChange={(e) => setQuestion(e.target.value)}
              styles={{
                input: {
                  border: 0,
                  width: "100%",
                  resize: "vertical",
                },
                root: {
                  width: "100%",
                },
              }}
            />
          </div>

          <div className={classes.btnDiv}>
            <Button loading={isLoading} disabled={question.length === 0} onClick={handleAddQuestion}>
              Submit
            </Button>
          </div>
        </div>

        {isSuccess && (
          <Alert
            style={{ marginTop: "10px" }}
            title="Thank you, your message is received, we will reply via email from hello@evyai.com"
            color="green"
            children={undefined}
          />
        )}
      </Box>
    </div>
  );
};

export default Index;
