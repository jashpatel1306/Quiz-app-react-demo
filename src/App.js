import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Countdown } from "./components/Countdown";
import  Intro  from "./components/Intro";
import { Quiz } from "./components/Quiz";

export default function Home() {
  const [displayView, setDisplayView] = useState("intro");

  return (
    <main className="h-viewport flex flex-col w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {
          {
            intro: (
              <Intro
                onGetStartedClick={() => {
                  setDisplayView("countdown");
                }}
              />
            ),
            countdown: (
              <Countdown
                onGoClick={() => {
                  setDisplayView("quiz");
                }}
              />
            ),
            quiz: <Quiz />,
          }[displayView]
        }
      </AnimatePresence>
    </main>
  );
}
