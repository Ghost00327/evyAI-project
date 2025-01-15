import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";
const useStyles = createStyles((theme, params) => ({
  container: {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    flexDirection: "column",
    padding: `${GLOBAL_STYLES.PADDING}px`,
    paddingBottom: "115px",
    backgroundColor: "#F5F1FB",
    // gap: 30,
    alignItems: "flex-start",
  },
  bigBlackText: {
    fontSize: "24px",
    fontWeight: 900,
    color: GLOBAL_STYLES.PRIMARY_TEXT_COLOR,
  },

  featureText: {
    margin: "16px 0px",
    fontSize: "12px",
    fontWeight: 400,
    color: "#414042",
  },

  arrowButtonContainer: {
    width: "24px",
    height: "24px",
    borderRadius: "18px",
    marginRight: "10px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.13)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "white",
  },
  titleText: {
    flexGrow: 1,
    fontWeight: 600,
    fontSize: "14px",
  },

  borderRadius: {
    borderRadius: "8px",
    cursor: "pointer",
  },
}));

export default useStyles;
