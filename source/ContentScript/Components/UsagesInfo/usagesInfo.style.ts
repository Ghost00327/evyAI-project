import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";
const useStyles = createStyles((theme, params) => ({
  container: {
    maxWidth: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    border: "0.5px solid #DDDDDD",
    padding: "8px",
    borderRadius: "8px",
    backgroundColor: "#F7F7F7",
    marginTop: "8px",
  },
  textContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    width: "auto",
    flexGrow: 1,
    textAlign: "left",
    color: GLOBAL_STYLES.PRIMARY_TEXT_COLOR,
    fontWeight: 700,
    fontSize: "14px",
  },
  usagePercentageText: {
    width: "auto",
    textAlign: "right",
    color: GLOBAL_STYLES.PRIMARY_TEXT_COLOR,
    fontWeight: 600,
    fontSize: "12px",
  },
  quotaUsageBackgroundContainer: {
    width: "100%",
    height: "5px",
    borderRadius: "26px",
    overflow: "hidden",
  },
  quotaUnusedBackgroundContainer: {
    height: "100%",
    backgroundColor: GLOBAL_STYLES.QUOTA_UNUSED_BACKGROUND_COLOR,
    overflow: "hidden",
    opacity: 0.1,
  },
  quotaUsedBackgroundContainer: {
    height: "100%",
    backgroundColor: GLOBAL_STYLES.QUOTA_USED_BACKGROUND_COLOR,
    overflow: "hidden",
  },
  descriptionText: {
    width: "100%",
    textAlign: "left",
    color: GLOBAL_STYLES.PRIMARY_TEXT_COLOR,
    fontWeight: 400,
    fontSize: "12px",
  },
  upgradeButton: {
    width: "100%",
  },
}));

export default useStyles;
