import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";

const useStyles = createStyles((theme, params) => ({
  icon: {
    fontSize: "20px",
  },

  accountButton: {
    borderBottom: "1px solid #ECECEE",
    background: "#fff",
    padding: "15px 0px",
    display: "flex",
    alignItems: "center",
  },

  content: {
    border: "none",
    background: "#fff",
    display: "flex",
    width: "100%",
    cursor: "pointer",
    boxShadow: "none",
    padding: "18px 0px",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #ECECEE",
  },

  manageSubscription: {
    background: "#fff",
    padding: "15px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    border: "none",
    boxShadow: "none",
    width: "100%",
  },

  account: {
    cursor: "pointer",
    border: "none",
    background: "#fff",
    borderRadius: "100%",
    padding: "5px",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    boxShadow: "0px 1px 10px -6px black",
  },

  accountHeading: {
    fontSize: "16px",
    fontWeight: "bold",
    paddingLeft: "10px",
    color: "#444553",
  },

  contentTitle: {
    fontSize: "14px",
    fontWeight: "bolder",
    color: "#444553",
  },

  contentIcon: {
    cursor: "pointer",
    border: "none",
    borderRadius: "100%",
    padding: "5px",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6e40c5",
    background: "#fff",
    boxShadow: "none",
  },

  contentContainer: {
    background: "#f5f1fb",
    padding: "10px",
    margin: "50px 0px 10px 0px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    color: "#6d40c3",
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
    border: "2px solid #6d40c3",
    color: "#6d40c3",
    padding: "7px 0px",
    width: "100%",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bolder",
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
    border: "0.8px solid #9778D2",
    padding: "0px 16px",
    height: "28px",
    borderRadius: "8px",
    color: "white",
    fontSize: "10px",
    fontWeight: 600,
    marginTop: "12px",
  },

  cancelBtn: {
    background: "transparent",
    border: "1px solid #6d40c3",
    color: "#6d40c3",
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
