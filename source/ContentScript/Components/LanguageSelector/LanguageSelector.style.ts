import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => ({
  actionButtonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Poppins",
  },

  btnIcon: {
    marginLeft: 8,
  },

  dropdownContainer: {
    position: "relative",
    marginLeft: "2px",
  },

  btnText: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px",
    fontWeight: 600,
    textTransform: "uppercase",
  },

  dropdownButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "#444553",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },

  dropdownMenu: {
    position: "absolute",
    minWidth: "162px",
    left: 0,
    bottom: "30px",
    zIndex: 10,
  },

  dropdownContent: {
    color: "#444553",
    backgroundColor: "white",
    lineHeight: "1.5",
    border: "1px solid #E5E7EB",
    padding: "12px",
    borderRadius: "10px",
    overflowY: "auto",
    height: "200px",
    "::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 5px #fff`,
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "#C4C8CC",
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb:hover": {},
  },

  searchInputContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    border: "1px solid #E5E7EB",
    borderRadius: "10px",
    marginBottom: "12px",
  },

  searchIcon: {
    position: "absolute",
    left: "12px",
  },

  searchInput: {
    color: "#444553",
    padding: "12px",
    paddingLeft: "36px",
    width: "100%",
    fontSize: "12px",
    outline: "none",
    border: "none",
    borderRadius: "10px",
  },

  dropDownItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "10px",
    fontWeight: 500,
    borderBottom: "1px solid #DFDFDF",
    padding: "8px 0",
    cursor: "pointer",

    "&:last-child": {
      borderBottom: "none",
    },
  },
}));

export default useStyles;
