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
    alignItems: "center",
  },
  smText: {
    lineHeight: 1.2,
  },
  signOutButton: {
    width: "100%",
  },
}));

export default useStyles;
