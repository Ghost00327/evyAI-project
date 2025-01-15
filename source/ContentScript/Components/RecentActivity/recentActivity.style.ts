import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";
const useStyles = createStyles((theme, params) => ({
  activityOrCommandTextContainer: {
    maxWidth: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    border: "1px solid rgba(161, 162, 169, 0.2)",
    padding: "8px",
    borderRadius: "8px",
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
  activityTypeIconContainer: {
    minWidth: "30px",
    height: "30px",
    borderRadius: "6px",
    backgroundColor: GLOBAL_STYLES.ACTIVITY_TYPE_ICON_CONTAINER_BACKGROUND,
    marginRight: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
