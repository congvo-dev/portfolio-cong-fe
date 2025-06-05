"use client";
import { motion } from "framer-motion";
import BtnCV from "./BtnCV";
import { fadeIn } from "../../variants";

const HiTitle: React.FC = () => {
  return (
    <motion.h1
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      className="text-center text-3xl"
    >
      Hi, I am <span className="font-bold text-red-500">VO DO THANH CONG</span>
    </motion.h1>
  );
};

const JobTitle: React.FC = () => {
  return (
    <motion.h2
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      animate="show"
      className="text-center text-5xl text-shadow"
    >
      Front End
      <br />
      Web Developer
    </motion.h2>
  );
};

const HiContent: React.FC = () => {
  return (
    <motion.p
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      animate="show"
      className="text-center w-[50%]"
    >
      {`I'm deeply passionate about coding, constantly striving to improve, and
      adept at creative problem-solving. Every day is a new opportunity to
      enhance my programming skills and create innovative solutions.`}
    </motion.p>
  );
};

export default function Hi() {
  return (
    <div className="text-white space-y-10 flex flex-col items-center justify-center">
      <HiTitle />
      <JobTitle />
      <HiContent />
      <BtnCV />
    </div>
  );
}
