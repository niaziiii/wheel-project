import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="h-[40vh] md:h-[80vh] relative flex items-center justify-center">
        <img
          src="/bg.png"
          alt=""
          className="w-full h-[40vh] md:h-[80vh] object-fill absolute top-0 left-0"
        />
        <div className="relative mt-3 md:mt-0 text-white z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center md:leading-[3.5rem]">
            Une Margher <br />
            ça te di
          </h1>
          <p className="mt-3 md:text-xl">Faites tourner la roue et gap</p>
          <div className="mt-5 ">
            <a
              href="#play"
              className="outline-none border-none bg-wheelRed hover:bg-wheelRed/90  py-1 md:py-3 md:font-bold px-2 md:px-8 rounded-lg"
            >
              I want to play
            </a>
          </div>
        </div>
      </div>
      <AnimatedText />
    </>
  );
};

export default HeroSection;

const AnimatedText = () => {
  return (
    <div className="flex w-full py-1 md:py-3 bg-gray-200 items-center justify-end relative overflow-hidden">
      <article className="w-full text-lg md:text-2xl font-bold flex items-center justify-center">
        <marquee behavior="scroll" direction="left">
          <p>
            <b className="text-wheelRed">100%</b> Gratuit!-Jeu{" "}
            <b className="text-wheelRed">1</b>
          </p>
        </marquee>
      </article>
    </div>
  );
};
