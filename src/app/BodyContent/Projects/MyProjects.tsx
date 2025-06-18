import ProjectSwiper from "./ProjectSwiper";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

export default function MyProjects() {
  return (
    <div className="lg:flex justify-between item-center gap-10 ">
      {/* title */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        className="lg:max-w-[25%] text-white flex flex-col justify-center items-center text-center mb-10 mx-auto gap-3"
      >
        <h1 className="text-5xl text-red-500">My projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          pariatur est ducimus dolore corporis assumenda.
        </p>
      </motion.div>
      {/* swiper */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        className="w-full lg:w-[75%]"
      >
        <ProjectSwiper />
      </motion.div>
    </div>
  );
}
