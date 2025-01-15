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
  signInTitleText: {
    fontWeight: 700,
    fontSize: 30,
    textAlign: "center",
  },
  signInSubTitle: {
    fontSize: 16,
    textAlign: "center",
  },
  signInTitlePurpleText: {
    fontWeight: 600,
    fontSize: 30,
    color: GLOBAL_STYLES.PRIMARY_COLOR_CODE,
  },
  signInDescriptionText: {
    fontWeight: 400,
    fontSize: 12,
  },
  registerButtonText: {
    fontWeight: 600,
    fontSize: 12,
    textDecorationLine: "underline",
    cursor: "pointer",
    marginLeft: 5,
  },
  registerTitleText: {
    fontWeight: 600,
    fontSize: 14,
  },
}));

export default useStyles;
