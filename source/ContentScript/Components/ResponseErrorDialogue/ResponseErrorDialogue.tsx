import React from "react";
import useStyles from "./ResponseErrorDialogue.styles";
import { Button } from "@mantine/core";
import { RxCross2 } from "react-icons/rx";
import { IResponseButton } from "../../Pages/InputPopup";

const ResponseErrorDialogue = ({
  setShow,
  title,
  content,
  onConfirm,
  buttonContent,
}: {
  setShow: (isShow: boolean) => void;
  title?: string;
  content?: string;
  onConfirm: () => void;
  buttonContent: IResponseButton;
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.messageContainer}>
      <div className={classes.messageBox}>
        <button className={classes.crossButton} onClick={() => setShow(false)}>
          <RxCross2 style={{ fontSize: "20px", cursor: "pointer" }} />
        </button>
        <h4 className={classes.messageHeading}>{title && title}</h4>
        <p className={classes.messagePera}>{content && content}</p>
        <Button
          fullWidth
          onClick={() => {
            if (buttonContent && buttonContent.url) {
              window.open(`${buttonContent.url}`, "_blank");
              return;
            }
            onConfirm();
          }}
          // loading={buttonLoadingStatus}
        >
          {buttonContent ? buttonContent.text : "close"}
        </Button>
      </div>
    </div>
  );
};

export default ResponseErrorDialogue;
