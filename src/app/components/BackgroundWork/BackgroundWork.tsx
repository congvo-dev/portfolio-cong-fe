import React from "react";
import bgWork from "../../assets/bgWork.jpg";
import "./BackgroundWork.css";
export default function BackgroundWork() {
  return (
    <div
      id="bgWork"
      style={{
        backgroundImage: `url(${bgWork.src})`,
      }}
      className="-z-10 w-screen h-screen absolute top-0 left-0 backdrop-blur-xs
"
    ></div>
  );
}
