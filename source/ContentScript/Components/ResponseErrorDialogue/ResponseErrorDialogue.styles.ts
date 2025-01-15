import { GlobalStyles, createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";

const useStyles = createStyles((theme, params) => ({
  messageContainer: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "rgba(52, 49, 125, 0.6)",
  },

  messageBox: {
    width: "50%",
    // height: "42%",
    padding: "20px",
    paddingBottom: "25px !important",
    background: "#fff",
    overflow: "hidden",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  crossButton: {
    width: "100%",
    display: "flex",
    justifyContent: "end",
    border: "none",
    background: "#fff",
    boxShadow: "none",
  },

  messageHeading: {
    margin: "0px",
    color: "#6E40C5",
    fontSize: "18px",
    marginTop: "15px",
    fontWeight: 900,
  },
  messagePera: {
    color: "#333333",
    fontSize: "14px",
    textAlign: "center",
    marginBottom: "24px",
  },
}));

export default useStyles;
