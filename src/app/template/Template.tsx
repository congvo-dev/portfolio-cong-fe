import React from "react";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu/NavMenu";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <NavMenu />
      {children}
    </div>
  );
}
