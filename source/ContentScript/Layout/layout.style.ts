import React from "react";
import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../Config";

const useStyles = createStyles((theme, params) => ({
  wrapper: {
    position: "fixed",
    top: 16,
    right: 30,
    zIndex: 2147483646,
  },
  container: {
    backgroundColor: "#FFF",
    display: "flex",
    maxHeight: "90vh",
    width: `${GLOBAL_STYLES.POP_UP_WIDTH}px`,
    boxSizing: "border-box",
    flexDirection: "column",
    // gap: 10,
    // padding: '10px 20px',
    // borderRadius: theme.radius.md,
    borderRadius: GLOBAL_STYLES.BORDER_RADIUS,
    //  Siddique add shadow
    boxShadow: "4px 10px 45px 3px #888888",
    // boxShadow:
    //   'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
    overflowY: "auto",
    // border: `2px solid ${GLOBAL_STYLES.PRIMARY_COLOR_CODE}`,
    alignItems: "center",
  },
  header: {
    width: "100%",
    position: "sticky",
    top: "0px",
    backgroundColor: GLOBAL_STYLES.PRIMARY_BACKGROUND_COLOR,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // height: "87px",
    // height: "55px",  // updated height
    // padding: `${GLOBAL_STYLES.PADDING}px`,
    padding: "10px 20px",
    boxSizing: "border-box",
  },

  loginHeader: {
    width: "100%",
    backgroundColor: GLOBAL_STYLES.PRIMARY_BACKGROUND_COLOR,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "87px",
    padding: `${GLOBAL_STYLES.PADDING}px`,
    boxSizing: "border-box",
  },

  headerButtonsContainer: {
    display: "flex",
    alignItems: "center",
  },
  questionsIssuesContainer: {
    display: "flex",
    padding: "2px",
    alignItems: "center",
  },

  headerButton1: {
    fontSize: "23px",
    color: "#fff",
    cursor: "pointer",
  },

  headerButton2: {
    fontSize: "25px",
    color: "#fff",
    cursor: "pointer",
  },
  helpImg: {
    width: "24px",
    height: "24px",
  },

  headerButtonSepreater: {
    borderRight: "0.1px solid #ddd",
    margin: "0px 10px",
    height: "18px",
  },

  content: {
    width: "100%",
    // padding: `${GLOBAL_STYLES.PADDING}px`,
    boxSizing: "border-box",
  },
  closeIconButton: {
    zIndex: 2147483647,
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "15px",
    top: "-15px",
    cursor: "pointer",
    backgroundColor: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
  },
}));

export default useStyles;
