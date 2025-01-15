import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => ({
  dropdownBtn: {
    color: "#FFF",
    marginTop: "8px",
    fontFamily: "Poppins",
    fontSize: "14px",
    height: "29px",
    fontWeight: 600,
    border: "1px solid #FFFFFF",
    backgroundColor: "#F5F1FB1A",
    display: "inline-flex",
    padding: "3px 10px",
    width: "100%",
    borderRadius: "32px",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#F5F1FB",
      color: "#2F3178",
    },
  },

  filledListSpan: {
    minHeight: "100px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    background: "#FFFFFF",
    marginTop: "8px",
    borderRadius: "17px",
    padding: "10px",
  },
  showList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    marginTop: "7px",
    Height: "80px",
    borderBottom: "0.5px solid #DFDFDF",
    overflowY: "auto",
    paddingBottom: "5px",
  },
  singleList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    marginTop: "8px",
  },
  searchButton: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgb(52,49,125)",
    borderRadius: "0.5rem",
    marginTop: "1rem",
    "& span": {
      fontSize: "16px",
      fontWeight: 600,
      fontFamily: "Poppins, sans-serif",
    },
  },
}));

export default useStyles;
