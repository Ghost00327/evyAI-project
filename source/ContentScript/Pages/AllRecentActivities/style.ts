import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";
const useStyles = createStyles((theme, params) => ({
  container: {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    flexDirection: "column",
    // gap: 30,
    padding: `${GLOBAL_STYLES.PADDING}px`,
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
}));

export default useStyles;
