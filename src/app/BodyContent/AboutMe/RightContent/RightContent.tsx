import { JSX, useState } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Certifications from "./Certification";
import NavMenu from "./NavMenu";

const components: Record<string, JSX.Element> = {
  Skills: <Skills />,
  Education: <Education />,
  Certification: <Certifications />,
};

const renderRightContent = (activeContentId: string) =>
  components[activeContentId] || null;

export default function RightContent() {
  const [activeItem, setActiveItem] = useState<string>("Skills");

  return (
    <div className="space-y-10">
      <NavMenu activeItem={activeItem} onItemClick={setActiveItem} />
      <div>{renderRightContent(activeItem)}</div>
    </div>
  );
}
