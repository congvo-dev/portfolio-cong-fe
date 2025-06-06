"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    witdh: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="h-full">
        {/* 1 */}
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
        {/* 2 */}
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
        {/* 3 */}
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;

/* <AnimatePresence mode="wait">
        <motion.div
          key={`banner-1`}
          className="h-1/2 top-0 dark:bg-primary bg-black z-50 fixed w-screen"
          initial={animateUp.initial}
          animate={animateUp.animate}
          exit={animateUp.exit}
          transition={animateUp.transition}
        />
        <motion.div
          key={`banner-2`}
          className="h-1/2 top-1/2 dark:bg-primary bg-black z-50 fixed w-screen"
          initial={animateDown.initial}
          animate={animateDown.animate}
          exit={animateDown.exit}
          transition={animateDown.transition}
        />
      </AnimatePresence> */

/*
const animateUp = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-100%",
  },
  exit: {
    y: 0,
  },
  transition: {
    duration: 1,
    delay: 0.5,
    ease: [0.76, 0, 0.24, 1],
  },
};

const animateDown = {
  initial: {
    y: 0,
  },
  animate: {
    y: "100%",
  },
  exit: {
    y: 0,
  },
  transition: {
    duration: 1,
    delay: 0.5,
    ease: [0.76, 0, 0.24, 1],
  },
};
*/
