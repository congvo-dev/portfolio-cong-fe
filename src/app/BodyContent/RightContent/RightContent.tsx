import React, { JSX } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Certifications from "./Certification";

const components: Record<string, JSX.Element> = {
  Skills: <Skills />,
  Education: <Education />,
  Certification: <Certifications />,
};

interface I_Props {
  activeItem: string;
}

const renderRightContent = (activeContentId: string) =>
  components[activeContentId] || null;
export default function RightContent({ activeItem }: I_Props) {
  return <div>{renderRightContent(activeItem)}</div>;
}
