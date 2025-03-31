import React, { useState } from "react";
import RightContent from "./RightContent/RightContent";

const navItemArr = [
  {
    id: "Skills",
    label: "Skills",
  },
  {
    id: "Education",
    label: "Education",
  },
  {
    id: "Certification",
    label: "Certification",
  },
];
export default function AboutMe() {
  const [activeItem, setActiveItem] = useState("Skills");

  const renderNavMenu = () => {
    return navItemArr.map((item, index) => {
      return (
        <button
          key={index}
          className={`${activeItem === item.id ? "active" : ""} cursor-pointer`}
          onClick={() => setActiveItem(item.id)}
        >
          {item.label}
        </button>
      );
    });
  };
  return (
    <div className="text-white grid grid-cols-2 animate__animated animate__fadeInDown">
      {/* left content */}
      <div className="space-y-5">
        <div className="space-y-5">
          <h1 className="text-5xl">
            About <span className="text-red-500">me</span>
          </h1>
          <p className="text-gray-400">
            My determination shines through when I encounter challenges. I
            persistently invest time in understanding and breaking problems into
            manageable steps, approaching each difficulty as an opportunity for
            personal growth and advancement.
          </p>
        </div>
        <div className="flex divide-x-2">
          <div className="pr-3">
            <h2 className="text-red-500 text-3xl font-bold">1 +</h2>
            <p>
              YEARS OF <br /> EXPERIENCE
            </p>
          </div>
          <div className="px-3">
            <h2 className="text-red-500 text-3xl font-bold">1 +</h2>
            <p>
              YEARS OF <br /> EXPERIENCE
            </p>
          </div>
          <div className="px-3">
            <h2 className="text-red-500 text-3xl font-bold">1 +</h2>
            <p>
              YEARS OF <br /> EXPERIENCE
            </p>
          </div>
        </div>
      </div>
      {/* right content */}
      <div className="space-y-5">
        <div className="flex text-3xl gap-10">{renderNavMenu()}</div>
        <div className="space-y-5">
          {<RightContent activeItem={activeItem} />}
        </div>
      </div>
    </div>
  );
}
