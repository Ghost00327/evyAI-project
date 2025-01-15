import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";
const useStyles = createStyles((theme, params) => ({
  container: {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    flexDirection: "column",
    padding: `${GLOBAL_STYLES.PADDING}px 0px`,
    alignItems: "flex-start",
  },
  contentContainer: {
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  accountButton: {
    borderBottom: "1px solid #ECECEE",
    background: "#fff",
    padding: "15px 0px",
    display: "flex",
    alignItems: "center",
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
  main: {
    fontSize: "16px",
    fontWeight: "bolder",
  },
  contentTitle: {
    fontSize: "14px",
    fontWeight: "bolder",
    color: "#444553",
  },
  review: {
    border: "0.5px solid rgba(161, 162, 169, 0.8)",
    borderRadius: "8px",
    margin: "10px 0px",
    width: "100%",
  },
  btnDiv: {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "end",
  },
}));

export default useStyles;
