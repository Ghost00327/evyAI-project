import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./Popup";

const container = document.getElementById("popup-root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Popup />);
