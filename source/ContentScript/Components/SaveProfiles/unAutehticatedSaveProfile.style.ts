import { createStyles, keyframes } from "@mantine/core";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
import { GLOBAL_STYLES } from "../../../Config";
const useStyles = createStyles((theme, params) => ({
  customImg: {
    objectFit: "fill",
    marginLeft: "5px",
    // margin: "4px",
  },
  customImgBtnb: {
    objectFit: "fill",
    marginLeft: "0px",
    marginRight: "3px",
  },
  saveProfileSpan: {
    backgroundColor: "#6E40C5",
    padding: "6px",
    borderRadius: "32px",
    //   width: "173px",
    // height: "37px",
    display: "inline-flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  saveProfileBtn: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 600,
    height: "28px",
    display: "inline-flex",
    padding: "3px 6px",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "32px",
    backgroundColor: "#FFFFFF1A",
    // marginRight: '1rem',
    marginLeft: ".5rem",
    "&:hover": {
      backgroundColor: "#FFFFFF1A",
    },
  },
  loader: {
    border: "2px solid #f3f3f3",
    borderTop: "2px solid #3498db",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    animation: `${spin} 2s linear infinite`,
    margin: "0 auto",
  },
}));

export default useStyles;
