"use client";

import { curve } from "../../public/";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import Image from "next/image";
import ButtonSvg from "./ui/svg/ButtonSvg";

export const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <br />
          <h1 style={{ fontFamily: "initial" }} className="h1 mb-6">
            Synchronize Your Thoughts &nbsp;Elevate Your Documents with {` `}
            <span className="inline-block relative">
              CoDoc{" "}
              <Image
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <br /> <br />
          <br />
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Cutting-edge collaboration tool for real-time document editing by
            multiple users simultaneously. Engineered for scalability and
            enhanced functionality, to revolutionizes team collaboration on
            documents.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Button href="/dashboard" white>
            Get started
          </Button>
          <br />
          <br />
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <video
                  src="/assets/hero/codoc.mp4"
                  className="w-full h-full object-cover"
                  width={1024}
                  height={490}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            <Gradient />
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
