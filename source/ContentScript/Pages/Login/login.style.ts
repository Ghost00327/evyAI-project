import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";
const useStyles = createStyles((theme, params) => ({
  container: {
    boxSizing: "border-box",
    flexDirection: "column",
    // padding: 10,
    padding: `0px ${GLOBAL_STYLES.PADDING}px`,
    justifyContent: "center",
    // gap: 16,
    width: "100%",
    marginTop: 8,
  },
  signUpContainer: {
    boxSizing: "border-box",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 0,
    margin: "10px 0px;",
  },
  signUpHeadText: {
    fontWeight: "bolder",
    fontSize: 16,
    textAlign: "center",
  },
  submit: {
    width: "100%",
  },
}));

export default useStyles;
