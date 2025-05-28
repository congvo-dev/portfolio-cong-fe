import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
type ExperienceStat = {
  value: string;
  label: string;
};

type ExperienceStatsProps = {
  stats: ExperienceStat[];
};

const ExperienceStats: React.FC<ExperienceStatsProps> = ({ stats }) => {
  return stats.map((stat, index) => (
    <div key={index} className="px-3">
      <h2 className="text-red-500 text-3xl font-bold">{stat.value} +</h2>
      <p>
        {stat.label.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  ));
};

const experienceStats: ExperienceStat[] = [
  { value: "1", label: "YEARS OF\nEXPERIENCE" },
  { value: "1", label: "YEARS OF<\n>EXPERIENCE" },
  { value: "1", label: "YEARS OF\nEXPERIENCE" },
];

export default function LeftContent() {
  return (
    <div className="space-y-10">
      <motion.h1
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        animate="show"
        className="text-5xl"
      >
        About <span className="text-red-500">me</span>
      </motion.h1>
      <motion.p
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        className="text-gray-400"
      >
        My determination shines through when I encounter challenges. I
        persistently invest time in understanding and breaking problems into
        manageable steps, approaching each difficulty as an opportunity for
        personal growth and advancement.
      </motion.p>

      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        className="flex divide-x-2"
      >
        <ExperienceStats stats={experienceStats} />
      </motion.div>
    </div>
  );
}
