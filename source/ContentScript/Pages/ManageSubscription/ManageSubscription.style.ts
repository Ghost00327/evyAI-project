import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => ({
  backButton: {
    padding: "15px 0px",
    display: "flex",
    alignItems: "center",
    background: "#fff",
  },

  account: {
    border: "none",
    background: "#fff",
    borderRadius: "100%",
    padding: "5px",
    cursor: "pointer",
    outline: "none",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    boxShadow: "0px 1px 10px -6px black",
  },

  contentTitle: {
    fontSize: "16px",
    fontWeight: "bolder",
    color: "#444553",
  },

  buttonStyle: {
    background: "transparent",
    border: "2px solid #6d40c3",
    color: "#6d40c3",
    padding: "7px 0px",
    margin: "100px 0px 14px 0px",
    width: "100%",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bolder",
  },

  contentTitla: {
    fontSize: "14px",
    fontWeight: "bolder",
  },

  content: {
    fontSize: "14px",
    fontWeight: "normal",
    color: "#444553",
    marginTop: "-8px",
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    gap: "8px",
  },

  currentPlanContainer: {
    paddingBottom: "8px",
    borderBottom: "1px solid #ECECEE",
  },

  contentContainer: {
    margin: "30px 0px",
  },
}));

export default useStyles;
