"use client";

import { ArrowRightIcon } from "lucide-react";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import RetroGrid from "./magicui/retro-grid";
import { WordRotateDemo } from "./rotate";
import { TypewriterEffectSmoothDemo } from "./tye";
import Link from "next/link";

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <WordRotateDemo/>
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-9xl font-bold leading-none tracking-tighter text-transparent">
        Codoc
      </span>
      <br />
      <h1 className="text-4xl text-black">Dive into world of colab editing</h1>
      <AnimatedShinyText className="inline-flex mt-6 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <Link href={"/dashboard"}>
                <span>✨ Explore Now</span>
              </Link>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
      <RetroGrid />
    </div>
  );
}
