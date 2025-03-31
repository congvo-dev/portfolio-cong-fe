"use client";
import React, { JSX } from "react";
import { useAppSelector } from "@/app/store/hooks";
import Hi from "./Hi";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";

const components: Record<string, JSX.Element> = {
  Hi: <Hi />,
  AboutMe: <AboutMe />,
  MyProjects: <MyProjects />,
};

const renderBodyContent = (activeContentId: string) =>
  components[activeContentId] || null;

export default function BodyContent() {
  const activeContentId = useAppSelector(
    (state) => state.content.activeContentId
  );

  return (
    <div className="w-[80%] mx-auto">{renderBodyContent(activeContentId)}</div>
  );
}
