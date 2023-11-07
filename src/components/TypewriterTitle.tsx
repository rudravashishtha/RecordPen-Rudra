"use client";

import { Rocket, RocketIcon } from "lucide-react";
import React from "react";
import TypewriterComponent from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <TypewriterComponent
      options={{
        loop: true,
        autoStart: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .changeDelay(50)
          .typeString(`Take Control of Your Thoughts.`)
          .pauseFor(700)
          .deleteAll()
          .typeString("From chaos to clarity.")
          .pauseFor(700)
          .deleteAll()
          .typeString("Streamline your note taking process.")
          .pauseFor(700)
          .deleteAll()
          .typeString("Supercharged Productivity.")
          .pauseFor(700)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
