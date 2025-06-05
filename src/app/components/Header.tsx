import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="z-50 fixed  top-0  w-full">
      <div className="h-10 flex justify-between items-center  backdrop-blur-xs  w-[80%]  mx-auto ">
        <Link href="/">
          <h1 className="text-white text-3xl">
            <span className="font-bold">Cong</span> Vo
          </h1>
        </Link>
        <div className="text-white flex gap-3">
          <Link href="/about">About</Link>
          <Link href="/project">Project</Link>
        </div>
      </div>
    </div>
  );
}
