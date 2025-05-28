import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
type NavMenuProps = {
  activeItem: string;
  onItemClick: (id: string) => void;
};

type NavItem = {
  id: string;
  label: string;
};

const navItemArr: NavItem[] = [
  { id: "Skills", label: "Skills" },
  { id: "Education", label: "Education" },
  { id: "Certification", label: "Certification" },
];

export default function NavMenu({ activeItem, onItemClick }: NavMenuProps) {
  const renderNavMenu = () => {
    return navItemArr.map((item, index) => (
      <button
        key={index}
        className={`${activeItem === item.id ? "active" : ""} cursor-pointer`}
        onClick={() => onItemClick(item.id)}
      >
        {item.label}
      </button>
    ));
  };
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      animate="show"
      className="flex text-3xl gap-5 lg:gap-10"
    >
      {renderNavMenu()}
    </motion.div>
  );
}
