import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";

export const useStyles = createStyles((theme) => ({
  button: {
    width: "32px",
    height: "32px",
    display: "grid",
    placeContent: "center",
    color: GLOBAL_STYLES.PRIMARY_BACKGROUND_COLOR,
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    "&.isListening": {
      backgroundColor: GLOBAL_STYLES.PRIMARY_BACKGROUND_COLOR,
      color: theme.white,
    },
    "& .mic": {
      display: "block",
    },
    "& .mic-filled": {
      display: "none",
    },
    "&:hover": {
      "& .mic": {
        display: "none",
      },
      "& .mic-filled": {
        display: "block",
      },
    },
  },
}));
