import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import RoundedText from "@/assets/rounded-text.png";
import bgCircleStar from "@/assets/circle-star.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useAppDispatch } from "@/app/store/hooks";
import { setActiveContentId } from "@/app/store/slices/contentSlice";
export default function BtnCV() {
  const dispatch = useAppDispatch();
  return (
    <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      animate="show"
      className="mx-auto xl:mx-0"
    >
      <button
        className="relative h-[150px] w-[150px] flex justify-center items-center bg-cover bg-center bg-no-repeat group cursor-pointer"
        style={{
          backgroundImage: `url(${bgCircleStar.src})`,
        }}
        onClick={() => dispatch(setActiveContentId("MyProjects"))}
      >
        <Image
          src={RoundedText.src}
          width={120}
          height={120}
          alt=""
          className="animate-[spin_9s_linear_infinite]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:scale-110 group-hover:text-red-500 duration-300 transition-all" />
      </button>
    </motion.div>
  );
}
