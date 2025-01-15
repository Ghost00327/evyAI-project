import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";
const useStyles = createStyles((theme, params) => ({
  container: {
    width: "109px",
    height: "95px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "12px 8px",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    marginTop: "8px",
    cursor: "pointer",
  },
  titleText: {
    width: "auto",
    textAlign: "left",
    color: GLOBAL_STYLES.PRIMARY_TEXT_COLOR,
    fontWeight: 700,
    fontSize: "10px",
    lineHeight: "15px",
  },
  priceText: {
    marginTop: "4px",
    width: "auto",
    textAlign: "left",
    color: GLOBAL_STYLES.PRIMARY_TEXT_COLOR,
    fontWeight: 800,
    fontSize: "20px",
  },
}));

export default useStyles;
