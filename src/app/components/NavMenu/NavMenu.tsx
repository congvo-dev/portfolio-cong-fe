"use client";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaClipboardList, FaEnvelope, FaUser } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setActiveContentId } from "@/app/store/slices/contentSlice";

const navItemArr = [
  {
    id: "Hi",
    icon: <AiFillHome className="text-2xl mx-auto" />,
  },
  {
    id: "AboutMe",
    icon: <FaUser className="text-2xl mx-auto" />,
  },
  {
    id: "MyProjects",
    icon: <FaClipboardList className="text-2xl mx-auto" />,
  },
  {
    id: "4",
    icon: <FaEnvelope className="text-2xl mx-auto" />,
  },
];

export default function NavMenu() {
  const activeContentId = useAppSelector(
    (state) => state.content.activeContentId
  );
  const dispatch = useAppDispatch();
  const renderNavMenu = () => {
    return navItemArr.map((item, index) => {
      return (
        <button
          key={index}
          className={`navMenu-item  ${
            activeContentId === item.id ? "active" : ""
          }`}
          onClick={() => dispatch(setActiveContentId(item.id))}
        >
          {item.icon}
        </button>
      );
    });
  };
  return (
    <div className="flex flex-col items-center justify-center fixed bottom-[2%] w-full lg:right-[2%] lg:top-0 lg:h-screen  lg:w-16 z-10">
      <div className="flex lg:flex-col items-center justify-center gap-10 bg-white/10 backdrop-blur-md rounded-full py-5 px-3">
        {renderNavMenu()}
      </div>
    </div>
  );
}
