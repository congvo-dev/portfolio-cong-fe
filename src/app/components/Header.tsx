import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="z-50 sticky top-0 flex justify-between items-center  backdrop-blur-xs h-20 container mx-auto px-6">
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
  );
}
