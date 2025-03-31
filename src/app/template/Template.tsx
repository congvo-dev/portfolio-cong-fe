import React from "react";
import Header from "../components/Header";
import Menu from "../components/NavMenu/NavMenu";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Menu />
      {children}
    </div>
  );
}
