import { FaGitAlt, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { ReactNode } from "react";

interface TSkillItem {
  icon: ReactNode;
  title: string;
}
const skillsData: Record<string, TSkillItem[]> = {
  fe: [
    {
      icon: <SiHtml5 />,
      title: "HTML5",
    },
    {
      icon: <SiCss3 />,
      title: "CSS3",
    },
    {
      icon: <SiJavascript />,
      title: "Javascript",
    },
    {
      icon: <SiTypescript />,
      title: "Typescript",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <SiRedux />,
      title: "Redux",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind",
    },
    {
      icon: <SiBootstrap />,
      title: "Bootstrap",
    },
  ],
  tool: [
    {
      icon: <SiGithub />,
      title: "Github",
    },
    {
      icon: <FaGitAlt />,
      title: "Git",
    },
  ],
};
const renderSkillList = (skill: string) => {
  return skillsData[skill].map((item: TSkillItem) => {
    return (
      <div
        key={item.title}
        className="group relative flex flex-col justify-center items-center"
        title={item.title}
      >
        {/* icon */}
        <div className="text-5xl">{item.icon}</div>
      </div>
    );
  });
};
export default function Skills() {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      animate="show"
      className="space-y-5"
    >
      <div>
        <h1 className="text-2xl mb-5 text-gray-400">Front-End Development</h1>
        <div className="flex flex-wrap gap-5 ">{renderSkillList("fe")}</div>
      </div>
      <div>
        <h1 className="text-2xl mb-5 text-gray-400">Tools</h1>
        <div className="flex flex-wrap gap-5">{renderSkillList("tool")}</div>
      </div>
    </motion.div>
  );
}
