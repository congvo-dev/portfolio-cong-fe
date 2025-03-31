import React from "react";
import { FaLink } from "react-icons/fa";

export default function Certifications() {
  return (
    <div className="text-gray-400">
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
    </div>
  );
}
