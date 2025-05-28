import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

export default function Education() {
  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      animate="show"
      className="text-gray-400"
    >
      <div>
        <h1 className="text-xl">VAA - Vietnam Aviation Academy</h1>
        <h1>Bachelor Of Business Administration - 2015-2019</h1>
      </div>
    </motion.div>
  );
}
