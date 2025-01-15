import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";

const useStyles = createStyles((theme, params) => ({
  header: {
    cursor: "pointer",
    width: "100%",
    backgroundColor: GLOBAL_STYLES.HEADER_BG,
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: "46px",
    padding: "16px",
    boxSizing: "border-box",
    position: "relative",
  },
  headerLogo: {
    objectFit: "contain",
    width: "64px",
    height: "32px",
    paddingLeft: "6px",
  },
  closeIconButton: {
    zIndex: 99,
    width: "30px",
    height: "30px",
    borderRadius: "20px",
    boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "14px",
    top: "-16px",
    cursor: "pointer",
    backgroundColor: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
  },
}));

export default useStyles;
