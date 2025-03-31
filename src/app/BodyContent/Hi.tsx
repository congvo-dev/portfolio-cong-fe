import React from "react";
import Transition from "../components/Transition";

export default function Hi() {
  return (
    // <Transition>
    <div className="text-white space-y-5 flex flex-col items-center justify-center animate__animated animate__fadeInDown">
      <h1 className="text-center text-3xl">
        Hi, I am{" "}
        <span className="font-bold text-red-500">VO DO THANH CONG</span>
      </h1>
      <h2 className="text-center text-5xl text-shadow">
        Front End
        <br />
        Web Developer
      </h2>
      <p className="text-center w-[50%]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, deleniti
        doloremque? Optio fugiat repellendus fuga dolores eligendi sequi numquam
        mollitia commodi deserunt, aliquid aut omnis facere dicta a. Obcaecati,
        nulla animi in eius voluptatum nostrum. Asperiores maxime assumenda, sit
        cum possimus odio perferendis fugit saepe, temporibus quasi
        reprehenderit blanditiis vitae!
      </p>
    </div>
    // </Transition>
  );
}
