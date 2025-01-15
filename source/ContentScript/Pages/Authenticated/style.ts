import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";
const useStyles = createStyles((theme, params) => ({
  container: {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    flexDirection: "column",
    padding: `${GLOBAL_STYLES.PADDING}px`,
    // gap: 30,
    alignItems: "flex-start",
  },
  smText: {
    lineHeight: "18px",
  },
  purpleText: {
    lineHeight: "18px",
    color: GLOBAL_STYLES.PRIMARY_COLOR_CODE,
  },
  signOutButton: {
    width: "100%",
  },
  shareButton: {
    width: "100%",
    backgroundColor: "white",
    border: `1.3px solid ${GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND}`,
    color: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
  },
  arrowButtonContainer: {
    width: "24px",
    height: "24px",
    borderRadius: "36px",
    marginLeft: "10px",
    boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.13)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    flexGrow: 1,
    fontWeight: 600,
    fontSize: "14px",
  },
  activityOrCommandTextContainer: {
    maxWidth: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    border: "1px solid rgba(161, 162, 169, 0.2)",
    padding: "6px 16px",
    borderRadius: "8px",
    // cursor: 'pointer',
  },
  activityOrCommandText: {
    width: "auto",
    flexGrow: 1,
    textAlign: "left",
    color: "#121212",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
  },
  statusText: {
    width: "100%",
    textAlign: "center",
    color: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
    margin: "10px 0px 5px 0px",
  },
  seeAllButtonText: {
    color: GLOBAL_STYLES.SEE_ALL_TEXT_COLOR,
    fontWeight: 600,
    fontSize: "15px",
    marginRight: "10px",
  },

  contentContainer: {
    background: "#6E40C5",
    color: "white",
    padding: "10px",
    margin: "30px 0px 10px 0px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "95%",
  },

  ratingStarContainer: {
    display: "flex",
    alignItems: "center",
  },

  ratingPera: {
    paddingBottom: "0px",
    borderRadius: "40px",
    fontSize: "16px",
    fontWeight: "bolder",
    lineHeight: "0px",
    textAlign: "center",
  },

  ratingStar: {
    fontSize: "30px",
    color: "white",
    cursor: "pointer",
    margin: "0px 3px",
  },

  ratingStar1: {
    fontSize: "35px",
    color: "#6d40c3",
    cursor: "pointer",
  },

  buttonStyle: {
    background: "transparent",
    border: "2px solid #34317D",
    color: "#34317D",
    padding: "7px 0px",
    width: "100%",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bolder",
    display: "flex",
    justifyContent: "center",
    columnGap: "8px",
  },

  homeButtonStyle: {
    background: "transparent",
    border: "none",
    color: "#34317D",
    padding: "7px 0px",
    width: "100%",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bolder",
    display: "flex",
    justifyContent: "center",
    columnGap: "8px",
  },

  buttonContainer: { padding: "0px 0px 20px 0px" },

  main: {
    fontSize: "16px",
    fontWeight: "bolder",
  },

  premiumMember: {
    padding: "8px",
    borderRadius: "8px",
    background: "#F6F6F6",
    border: "1px solid #DDDDDD",
  },

  premiumBadgeTitle: {
    display: "flex",
    alignItems: "center",
  },

  premiumIcon: {
    fontSize: "23px",
    marginRight: "8px",
  },
  premiumTitle: {
    margin: "0px",
    fontSize: "14px",
    fontWeight: "bolder",
  },

  premiumPera: {
    color: GLOBAL_STYLES.PRIMARY_TEXT_COLOR,
    fontSize: "12px",
    fontWeight: 400,
    letterSpacing: "0.4px",
    lineHeight: "20px",
  },

  upgradeButton: {
    width: "100%",
  },

  link: {
    textDecoration: "none",
    color: "#fff",
  },

  copyUrl: {
    borderRadius: "8px",
    background: "#F6F6F6",
    border: "1px solid #DDDDDD",
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    overflow: "hidden",
  },
  urlInput: {
    outline: "none",
    border: "none",
    width: "100%",
    padding: "12px",
    background: "transparent",
  },

  copiedUrl: {
    borderRadius: "8px",
    border: "1px solid #DDDDDD",
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    overflow: "hidden",
    background: "#C8E6C9",
  },

  urlButton: {
    outline: "none",
    border: "none",
    borderLeft: "1px solid #DDDDDD",
    boxShadow: "none",
    padding: "0px 12px",
    cursor: "pointer",
    background: "transparent",
  },

  review: {
    border: "0.5px solid rgba(161, 162, 169, 0.8)",
    borderRadius: "8px",
    margin: "10px 0px",
    width: "100%",
  },

  reviewBtn: {
    border: "0.8px solid #34317D",
    padding: "0px 16px",
    height: "28px",
    borderRadius: "8px",
    // color: "#34317D",
    background: "#34317D",
    color: "white",
    fontSize: "10px",
    fontWeight: 600,
    marginTop: "12px",
  },

  cancelBtn: {
    background: "transparent",
    border: "1px solid white",
    color: "white",
    borderRadius: "8px",
    padding: "0px 16px",
    height: "28px",
    fontSize: "10px",
    fontWeight: 600,
    marginTop: "12px",
    marginRight: "10px",
  },

  btnDiv: {
    display: "flex",
    justifyContent: "end",
  },
}));

export default useStyles;
