import React from "react";
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

const skillsData = {
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
        <div className="flex  gap-5 ">
          {skillsData.fe.map((skill) => {
            return (
              <div className="group relative flex flex-col justify-center items-center">
                {/* icon */}
                <div className="text-5xl">{skill.icon}</div>
                {/* tooltip */}
                <div className="absolute top-13 px-1 rounded-sm text-sm text-black bg-white text-center opacity-0 group-hover:opacity-100 duration-300">
                  {skill.title}
                </div>
              </div>
            );
          })}
          {/* <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiTypescript />
          <FaReact />
          <SiRedux />
          <SiTailwindcss />
          <SiBootstrap /> */}
        </div>
      </div>
      <div>
        <h1 className="text-2xl mb-5 text-gray-400">Tools</h1>
        <div className="flex gap-5">
          {skillsData.tool.map((skill) => {
            return (
              <div className="group relative flex flex-col justify-center items-center">
                {/* icon */}
                <div className="text-5xl">{skill.icon}</div>
                {/* tooltip */}
                <div className="absolute top-13 px-1 rounded-sm text-sm text-black bg-white text-center opacity-0 group-hover:opacity-100 duration-300">
                  {skill.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
