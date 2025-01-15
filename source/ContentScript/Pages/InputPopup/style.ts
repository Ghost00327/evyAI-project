import { createStyles } from "@mantine/core";
import { GLOBAL_STYLES } from "../../../Config";
const useStyles = createStyles((theme, params) => ({
  header: {
    cursor: "pointer",
    width: "100%",
    maxHeight: "90vh",
    backgroundColor: GLOBAL_STYLES.HEADER_BG,
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    // height: '60px',
    padding: "16px",
    boxSizing: "border-box",
    position: "relative",
  },
  headerLogo: {
    objectFit: "contain",
    width: "91px",
    height: "45px",
  },
  closeIconButton: {
    zIndex: 99,
    width: "40px",
    height: "40px",
    borderRadius: "20px",
    boxShadow: "0px 0px 28px rgba(0, 0, 0, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "16px",
    top: "0px",
    cursor: "pointer",
    backgroundColor: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
  },
  selectContainer: {
    width: "100%",
    alignItems: "center",
  },
  selectTitleText: {
    width: 80,
    marginRight: 16,
    fontSize: 12,
    fontWeight: 600,
  },
  typeTitleText: {
    fontSize: 14,
    fontWeight: 900,
    marginLeft: "10px",
    color: "#444553",
    lineHeight: "21px",
  },
  select: {
    flexGrow: 1,
  },
  commandTextArea: {
    marginTop: 20,
    // marginBottom: 20,
    width: "100%",
    // height:"100%",//
    border: "0.5px solid rgba(161, 162, 169, 0.8)",
    borderRadius: 8,
    resize: "vertical", //
    position: "relative",
  },
  generateButton: {
    border: "0.8px solid #9778D2",
    // width: '64px',
    padding: "0px 16px",
    height: "28px",
    borderRadius: "8px",
    color: "white",
    fontSize: "10px",
    fontWeight: 600,
    marginTop: "12px",
    // position: "absolute",
    // right: "8px",
    // bottom: "8px",
  },
  typeWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  templateSelectWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4px",
    gap: "8px",
    backgroundColor: "#F5F1FB",
    borderRadius: "4px",
    marginTop: "8px",
    marginBottom: "8px",
    float: "right",
    cursor: "pointer",
    position: "relative",
  },
  typeContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  upgradeTitlekText: {
    fontSize: "10px",
    fontWeight: 500,
    marginLeft: "6px",
  },
  updateExtensionText: {
    fontSize: "10px",
    fontWeight: 700,
    color: "#292929",
    marginLeft: "6px",
  },
  upgradeLinkText: {
    color: "#6E40C5",
    fontSize: "10px",
    fontWeight: 700,
    marginLeft: "6px",
    cursor: "pointer",
  },
  updateLinkText: {
    color: "#F77049",
    fontSize: "10px",
    fontWeight: 700,
    marginLeft: "6px",
    cursor: "pointer",
    textDecoration: "underline",
  },

  premiumButton: {
    float: "right",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0.5px solid #FEBF2B",
    borderRadius: "32px",
    padding: "8px",
    background: "#FFFBF3",
  },
  premiumText: {
    color: "#34317D",
    marginLeft: "4px",
    fontWeight: 700,
    fontSize: "12px",
    fontFamily: "poppins",
  },
  upgradeButton: {
    float: "right",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0.5px solid #FEBF2B",
    borderRadius: "32px",
    padding: "8px",
    background: "#FFEDAB",
    cursor: "pointer",
  },
  upgradeText: {
    color: "#34317D",
    marginLeft: "4px",
    fontWeight: 700,
    fontSize: "12px",
    fontFamily: "poppins",
  },
  commandWrapper: {
    borderRadius: "8px",
    border: "1px solid #ced4da",
    // marginTop: "36px",
    height: "auto",
    width: "100%",
    position: "relative",
  },
  bottomButtonContentList: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  bottomButtonContainer: {
    // width: "calc(100% - 20px)",
    // position: "absolute",
    // right: "0px",
    // bottom: "8px",
    // padding: "0px 8px",
    width: "100%",
    alignItems: "center",
    marginTop: "12px",
  },
  textInfo: {
    fontSize: "10px",
    fontWeight: 400,
    flexGrow: 1,
    textAlign: "left",
    color: "#484848",
  },
  regenerateButton: {
    border: `0.8px solid ${GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND}`,
    backgroundColor: "white",
    // width: '64px',
    padding: "0px 16px",
    height: "28px",
    borderRadius: "8px",
    color: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
    fontSize: "10px",
    fontWeight: 600,
  },
  insertButton: {
    border: `1.3px solid ${GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND}`,
    backgroundColor: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
    // width: '64px',
    padding: "0px 16px",
    height: "28px",
    borderRadius: "8px",
    color: "white",
    fontSize: "10px",
    fontWeight: 600,
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

  statusText: {
    width: "100%",
    textAlign: "center",
    color: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
    margin: "10px 0px 5px 0px",
  },

  buyNowBtn: {
    border: "none",
    padding: "0px",
    margin: "0px",
    boxShadow: "none",
    outline: "none",
    textDecoration: "underline",
    background: "transparent",
    color: "#34317D",
    fontSize: "12px",
    fontWeight: 900,
    cursor: "pointer",
    paddingLeft: "2px",
  },

  messageContainer: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "rgba(52, 49, 125, 0.6)",
  },

  messageBox: {
    width: "50%",
    // height: "42%",
    padding: "20px",
    paddingBottom: "25px !important",
    background: "#fff",
    overflow: "hidden",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  crossButton: {
    width: "100%",
    display: "flex",
    justifyContent: "end",
    border: "none",
    background: "#fff",
    boxShadow: "none",
  },

  messageHeading: {
    margin: "0px",
    color: "#6E40C5",
    fontSize: "18px",
    marginTop: "15px",
    fontWeight: 900,
  },
  messagePera: {
    color: "#333333",
    fontSize: "14px",
    textAlign: "center",
    marginBottom: "24px",
  },
  dialogueBtns: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column-reverse",
    width: "100%",
    gap: "4px",
  },
  templateDropDownBoxContainer: {
    boxShadow: "0px 4px 15px 0px #0000001A",
    border: "1px solid #F6F6F6",
    borderRadius: "10px",
    backgroundColor: "white",
    width: "350px",
    marginBottom: "40px",
    position: "absolute",
    zIndex: 90,
    marginLeft: "190px",
    marginTop: "35px",
    overflowY: "hidden",
    maxHeight: "350px",
  },
  templateDropDownBoxSearchContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    flexDirection: "column",
  },
  templateDropDownBoxSearchContainer1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "4px",
  },
  templateDropDownBoxSearchContainer2: {
    padding: "0px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    borderRadius: "6px",
    border: "1px solid #A1A2A980",
    gap: "8px",
    width: "100%",
    fontFamily: theme.fontFamily,
  },
  templateDropDownBoxTemplateItemContainer: {
    padding: "8px 12px",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
    gap: "2px",
    borderBottom: "2px solid #DFDFDF",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F5F7F9", // Change to your desired hover color
    },
  },
  templateDropDownBoxTemplateItemHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  templateDropDownBoxTemplateFooter: {
    backgroundColor: "#F5F1FB",
    padding: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    borderRadius: "0px 0px 10px 10px",
  },
  templateDropDownBoxTemplateFooterButton: {
    backgroundColor: "#34317D",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    padding: "10px",
    cursor: "pointer",
  },
  noBorderInput: {
    border: "none !important",
    borderWidth: "0px !important",
    fontFamily: theme.fontFamily,
    "&:focus": {
      outline: "none !important",
    },
  },
  segmentContainer: {
    backgroundColor: "#f1f3f5",
    borderRadius: "8px",
    marginTop: "12px",
  },
  segmentButton: {
    padding: "5px 10px",
    border: "0px",
    height: "28px",
    borderRadius: "8px",
    color: "white",
    fontSize: "14px",
    fontWeight: 500,
    // marginTop: "12px",
    "&:hover": {
      background: "#34317d",
    },
    "&.no-bg": {
      backgroundColor: "unset",
      color: "#495057",
    },
  },
  ttsWrapper: {
    position: "absolute",
    right: "2.5rem",
    top: "1rem",
  },
}));

export default useStyles;
