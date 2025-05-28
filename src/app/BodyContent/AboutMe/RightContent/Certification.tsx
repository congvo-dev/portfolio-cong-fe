import React from "react";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

export default function Certifications() {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      animate="show"
      className="text-gray-400"
    >
      <div>
        <h1 className="text-xl">
          Professional Front end Developer - Cybersoft Academy
        </h1>
        <h1>
          Date: 18/09/2023 -{" "}
          <span>
            {<FaLink className="inline" />}{" "}
            <a href="" className="underline ">
              Link
            </a>
          </span>
        </h1>
      </div>
    </motion.div>
  );
}
