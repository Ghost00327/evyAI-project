import React, { ReactElement, useRef, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import useStyles from "./index.style";
import { getImagePath } from "../../../Utils";
import { LOCAL_STORAGE_KEYS } from "../../../LinkedInParser/constants";
import { EvyAILogger } from "../../../Utils/EvyAILogger";

export default function DraggableWrapper({ children }: { children: ReactElement }) {
  const { classes } = useStyles();
  const [draggablePos, setDraggablePosition] = useState({
    x: 0,
    y: Number(localStorage.getItem(LOCAL_STORAGE_KEYS.SAVE_BUTTON_TOP_LOCATION) || window.innerHeight / 3),
  }); // default y is a bit above mid because expanding search goes below the screen
  const [isDragging, setIsDragging] = useState(false);

  const dragThumbRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const lastRightStyle = localStorage.getItem(LOCAL_STORAGE_KEYS.SAVE_BUTTON_RIGHT_LOCATION) || "0px";

  const calculateBounds = () => {
    const distanceFromTop = 650;
    const distanceFromBottom = 400;

    const containerTop = distanceFromTop - window.innerHeight;
    const containerBottom = window.innerHeight - distanceFromBottom;
    return { top: containerTop, bottom: containerBottom };
  };

  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.SAVE_BUTTON_TOP_LOCATION, String(data.y));
    if (buttonRef.current) {
    }
    setDraggablePosition({ x: 0, y: data.y });
    localStorage.setItem(LOCAL_STORAGE_KEYS.SAVE_BUTTON_RIGHT_LOCATION, dragThumbRef.current!.style.right);
    //@ts-ignore
    buttonRef.current.style.right = dragThumbRef.current.style.right;
    setIsDragging(false);
  };

  const handleDrag = (e: MouseEvent, data: DraggableData) => {
    if (!buttonRef.current) return EvyAILogger.error("Button ref undefined");

    setIsDragging(true);
    setDraggablePosition({ x: data.x, y: data.y });

    if (!dragThumbRef.current) return EvyAILogger.error("Failed to find dragThumbRef");
    // update thumb position
    dragThumbRef.current.style.top = data.y + "px";
    const isLeftSide = e.x < document.documentElement.clientWidth / 2;
    const dragThumbRightPos = dragThumbRef.current.style.right;

    if (isLeftSide && dragThumbRightPos != "unset") {
      //snap left
      dragThumbRef.current.style.right = "unset";
    } else if (!isLeftSide && dragThumbRightPos != "0px") {
      // snap right
      dragThumbRef.current.style.right = "0px";
    }
  };

  return (
    <>
      <Draggable
        handle=".drag-area"
        position={draggablePos}
        // onStart={handleStart}
        //@ts-ignore
        onDrag={handleDrag}
        onStop={handleStop}
        bounds={calculateBounds()}
        nodeRef={buttonRef}
        disabled={isDragging}
      >
        <div
          ref={buttonRef}
          className={`${classes.draggableContainer} ${isDragging ? "dragging" : ""}`}
          style={{ flexFlow: lastRightStyle === "0px" ? "row-reverse" : "row", right: lastRightStyle || "0px" }}
        >
          <div
            className={`drag-area ${classes.dragArea}`}
            style={{ backgroundImage: `url("${getImagePath("dots.svg")}")` }}
          ></div>
          {children}
        </div>
      </Draggable>
      {isDragging && (
        <div className={`${classes.dragSideBars} sidebars`}>
          <div></div>
          <div></div>
          <div ref={dragThumbRef} className="drag-thumb"></div>
        </div>
      )}
    </>
  );
}
