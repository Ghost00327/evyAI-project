import React from "react";
import useStyles from "./GotoUserProfileDialog.styles";
import { Button } from "@mantine/core";

const GotoUserProfileDialog = ({ setShow }: { setShow: (isShow: boolean) => void }) => {
  const { classes } = useStyles();
  const videoURL = `https://www.youtube.com/embed/-m-YHYimVbA${true ? "?autoplay=1" : ""}`;

  return (
    <div className={classes.dialogOuterWrapper}>
      <div className={classes.dialogInnerWrapper} onClick={() => setShow(false)}></div>
      <div className={classes.container}>
        <svg
          onClick={() => setShow(false)}
          className={classes.img}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M11.5883 9.55894C11.8772 9.84791 12.0141 10.1825 11.9989 10.5627C12.0141 10.943 11.8772 11.2776 11.5883 11.5665C11.2993 11.8555 10.9571 12 10.5617 12C10.1967 12 9.86978 11.8555 9.58084 11.5665L6.02224 8.0076L2.48646 11.5437C2.19751 11.8327 1.85534 11.9772 1.45994 11.9772C1.07975 11.9924 0.745178 11.8555 0.456232 11.5665C0.167286 11.2776 0.0228123 10.9354 0.0228121 10.5399C0.0380199 10.1597 0.190098 9.82509 0.479044 9.53612L4.01483 6L0.456231 2.44106C0.167286 2.15209 0.0152077 1.81749 0 1.43726C0.0152078 1.05703 0.167284 0.722434 0.45623 0.433461C0.745176 0.144488 1.07214 1.03092e-06 1.43713 1.13757e-06C1.83253 9.00577e-07 2.1747 0.144488 2.46364 0.433461L6.02224 3.9924L9.58084 0.433461C9.86978 0.144488 10.1967 4.50289e-07 10.5617 0C10.9571 0 11.2993 0.144487 11.5883 0.43346C11.8772 0.722434 12.0141 1.05703 11.9989 1.43726C12.0141 1.81749 11.8772 2.15209 11.5883 2.44106L8.02965 6L11.5883 9.55894Z"
            fill="#34317D"
          />
        </svg>

        <h3 className={classes.mainTitle}>Recommendation Feature Instructions</h3>
        <p className={classes.para}>
          To use this feature, please navigate to this person’s profile, click <b>‘more’</b>, and click{" "}
          <b>‘recommend’</b>.{" "}
        </p>

        <div className={classes.iframeWrapper}>
          <iframe
            title="How to quickly leave thoughtful and personalized LinkedIn recommendations with AI"
            width="100%"
            height={`300px`}
            src={videoURL}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className={classes.btnWrapper}>
          <Button onClick={() => setShow(false)} className={classes.cancelBtn}>
            Cancel
          </Button>
          <Button onClick={() => setShow(false)} className={classes.upgradeBtn}>
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GotoUserProfileDialog;
