import { createStyles } from "@mantine/core";
const useStyles = createStyles((theme, params) => ({
  container: {
    marginTop: "8px",
  },
  oldVersionBanner: {
    padding: "8px",
    borderRadius: "8px",
    border: "0.5px solid #EB5757",
    background: "rgba(235, 87, 87, 0.10)",
    color: "#292929",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 700,
  },
  updateBtn: {
    color: "#F77049",
    textAlign: "right",
    fontFamily: "Poppins",
    fontSize: "10px",
    fontWeight: 700,
    textDecoration: "underline",
    display: "block",
  },
}));

export default useStyles;
