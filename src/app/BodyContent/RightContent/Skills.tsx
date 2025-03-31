import React from "react";
import { FaGitAlt, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiGithub,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl mb-5 text-gray-400">Front-End Development</h1>
        <div className="flex text-4xl gap-5">
          <FaReact />
          <SiRedux />
          <SiTypescript />
          <SiJavascript />
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
    </div>
  );
}
