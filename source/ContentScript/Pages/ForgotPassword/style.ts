import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";
const useStyles = createStyles((theme, params) => ({
  container: {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    flexDirection: "column",
    padding: `0px ${GLOBAL_STYLES.PADDING}px`,
    // gap: 30,
    alignItems: "center",
  },
  smText: {
    lineHeight: 1.2,
  },
  descriptionText: {
    fontWeight: 400,
    fontSize: 12,
  },
  descriptionTextBold: {
    fontWeight: 700,
    fontSize: 12,
  },
  signOutButton: {
    width: "100%",
  },
}));

export default useStyles;
