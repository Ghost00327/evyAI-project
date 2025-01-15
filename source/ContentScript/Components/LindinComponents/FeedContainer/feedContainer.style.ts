import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  closeBox: {
    display: "flex",
    alignItems: "center",
  },
  myGradientBackground: {
    background: "linear-gradient(to right, #303079, #44398b)",
    color: "white",
    borderRadius: 8,
    border: "1px solid #6E40C5",
    padding: 18,
    marginBottom: 7,
    position: "relative",
  },
  arrowButtonContainer: {
    width: "28px",
    height: "28px",
    borderRadius: "18px",
    marginLeft: "10px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.13)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 11fr",
    alignItems: "start",
    gap: theme.spacing.xs,
    "@media (max-width: 480px)": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto auto",
      gap: theme.spacing.sm,
    },
  },
  textStack: {
    textAlign: "left",
  },
  customTextProps: {
    color: "white",
    fontSize: 16,
    WebkitLineClamp: 2,
    marginBottom: 7,
  },
  bottomBox: {
    width: "100%",
    display: "flex !important",
    alignItems: "center",
    justifyContent: "space-between",
  },
  whiteText: {
    color: "white",
    fontFamily: "Poppins",
  },
  additionalbottomprops: {
    justifyContent: "end !important",
  },
  readMoreButtonStyle: {
    marginTop: 6,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Poppins",
    color: "#ffd572",
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    textAlign: "left",
    marginBottom: 10,
    padding: 0,
    height: 22,
    "&:hover": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
  },
  arrowIcon: {
    marginLeft: theme.spacing.xs,
  },
  topRightIcon: {
    position: "absolute",
    top: 18,
    right: 18,
    cursor: "pointer",
  },
  bottomRightIcon: {
    display: "flex",
    // position: 'absolute',
    // bottom: 18,
    // right: 18,
  },
}));

export default useStyles;
