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
        <div className="flex text-4xl gap-5">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiTypescript />
          <FaReact />
          <SiRedux />
          <SiTailwindcss />
          <SiBootstrap />
        </div>
      </div>
      <div>
        <h1 className="text-2xl mb-5 text-gray-400">Tools</h1>
        <div className="flex text-4xl gap-3">
          <SiGithub />
          <FaGitAlt />
        </div>
      </div>
    </motion.div>
  );
}
