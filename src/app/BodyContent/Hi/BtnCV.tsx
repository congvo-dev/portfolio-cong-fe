import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import RoundedText from "@/assets/rounded-text.png";
import bgCircleStar from "@/assets/circle-star.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
export default function BtnCV() {
  return (
    <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      animate="show"
      className="mx-auto xl:mx-0"
    >
      <Link
        href={"/"}
        className="relative h-[150px] w-[150px] flex justify-center items-center bg-cover bg-center bg-no-repeat group"
        style={{
          backgroundImage: `url(${bgCircleStar.src})`,
        }}
      >
        <Image
          src={RoundedText.src}
          width={120}
          height={120}
          alt=""
          className="animate-[spin_9s_linear_infinite]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:scale-110 group-hover:text-red-500 duration-300 transition-all" />
      </Link>
    </motion.div>
  );
}
