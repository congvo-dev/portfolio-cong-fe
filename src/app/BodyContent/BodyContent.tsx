"use client";
import React, { JSX } from "react";
import { useAppSelector } from "@/app/store/hooks";
import Hi from "./Hi/Hi";
import AboutMe from "./AboutMe/AboutMe";
import MyProjects from "./Projects/MyProjects";
import Contact from "./Contact/Contact";

const components: Record<string, JSX.Element> = {
  Hi: <Hi />,
  AboutMe: <AboutMe />,
  MyProjects: <MyProjects />,
  Contact: <Contact />,
};

const renderBodyContent = (activeContentId: string) =>
  components[activeContentId] || null;

export default function BodyContent() {
  const activeContentId = useAppSelector(
    (state) => state.content.activeContentId
  );

  return (
    <div className="w-screen h-screen pt-10 pb-20">
      <div className="w-[80%] mx-auto h-full flex flex-col justify-center ">
        {renderBodyContent(activeContentId)}
      </div>
    </div>
  );
}
