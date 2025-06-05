import React from "react";
import RightContent from "./RightContent/RightContent";
import LeftContent from "./LeftContent/LeftContent";

export default function AboutMe() {
  return (
    <div className="text-white lg:flex space-y-10 ">
      <LeftContent />
      <RightContent />
    </div>
  );
}
