import { createStyles, keyframes } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";

const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
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
  summaryClass: {
    marginTop: "10px",
  },
  loader: {
    border: "2px solid #f3f3f3",
    borderTop: "2px solid #3498db",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    animation: `${spinner} 2s linear infinite`,
    margin: "0 auto",
  },
  regenerateButton: {
    border: `0.8px solid ${GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND}`,
    backgroundColor: "white",
    padding: "0px 16px",
    height: "28px",
    borderRadius: "8px",
    color: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
    fontSize: "10px",
    fontWeight: 600,
  },
}));

export default useStyles;
