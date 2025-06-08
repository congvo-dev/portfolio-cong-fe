import { SiGithub } from "react-icons/si";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const contactData = [
  {
    icon: <SiGithub />,
    link: "https://github.com/congvo-dev",
    text: "github.com",
  },
  {
    icon: <AiFillMail />,
    link: "conghtc97@gmail.com",
    text: "conghtc97@gmail.com",
  },
  { icon: <AiFillPhone />, link: "0702526711", text: "0702526711" },
];
const renderContact = () => {
  return contactData.map((item, index) => {
    return (
      <div className="flex justify-center items-center gap-3" key={index}>
        {item.icon}
        <a
          href={item.link}
          target="_blank"
          className="hover:text-red-500 duration-300"
        >
          {item.text}
        </a>
      </div>
    );
  });
};

const ContactTitle: React.FC = () => {
  return (
    <motion.h2
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      className="text-5xl"
    >
      Let's <span className="text-red-500">connect</span>
    </motion.h2>
  );
};
const ContactContent: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-center items-center gap-5"
    >
      {renderContact()}
    </motion.div>
  );
};
export default function Contact() {
  return (
    <div className="flex flex-col items-center text-center text-white space-y-5">
      <ContactTitle />
      <ContactContent />
    </div>
  );
}
