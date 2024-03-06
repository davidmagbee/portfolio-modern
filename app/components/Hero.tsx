"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hello, My name is David",
      "Guy-who-loves-to-code.tsx",
      "<ButLovesHisDaughterMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <Image className="relative rounded-full h-32 w-32 mx-auto object-cover" src="/david.png" alt="david" width={128} height={128} />
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="darkslategray" />
      </h1>
    </div>
  );
};

export default Hero;
