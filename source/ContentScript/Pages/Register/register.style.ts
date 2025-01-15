import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";
const useStyles = createStyles((theme, params) => ({
  container: {
    boxSizing: "border-box",
    flexDirection: "column",
    // padding: 10,
    padding: `0px ${GLOBAL_STYLES.PADDING}px`,
    justifyContent: "center",
    // gap: 10,
    width: "100%",
    marginTop: 16,
  },
  submit: {
    width: "100%",
  },
  checkButton: {
    width: 9.6,
    height: 9.6,
    cursor: "pointer",
  },

  backBtnContainer: {
    padding: "0px 20px",
  },

  accountButton: {
    padding: "15px 0px",
    display: "flex",
    alignItems: "center",
    background: "#fff",
  },

  account: {
    border: "none",
    outline: "none",
    background: "#fff",
    borderRadius: "100%",
    padding: "5px",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    cursor: "pointer",
    boxShadow: "0px 1px 10px -6px black",
  },

  contentTitle: {
    fontSize: "16px",
    fontWeight: "bolder",
    color: "#444553",
  },
}));

export default useStyles;
