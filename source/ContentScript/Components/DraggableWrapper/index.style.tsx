import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => ({
  draggableContainer: {
    position: "fixed",
    display: "flex",
    backgroundColor: "#6E40C5",
    borderRadius: "36px",
    "&:hover:not(:has(.drop-down)) .drag-area": {
      width: "20px",
    },
    "&.dragging .drag-area": {
      width: "20px",
    },
    "& .drop-down": {
      width: "calc(100% - 20px)", // to make space for the drag-handle
    },
    // "&:hover .drop-down": {
    //   width: "100%",
    // },
  },
  dragSideBars: {
    position: "fixed",
    "& > div": {
      height: "100vh",
      position: "fixed",
      width: "4px",
      backgroundColor: "#C084FC",
    },
    "& > div:nth-child(2)": {
      right: "0px",
    },
    "& > div.drag-thumb": {
      backgroundColor: "#7E22CE",
      height: "40px",
    },
  },
  dragArea: {
    height: "40px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#391975",
    width: "0px",
    transition: "width 200ms linear",
    cursor: "move",
    zIndex: 999999,
    position: "relative",
  },
}));

export default useStyles;
