import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="h-[40vh] md:h-[90vh] relative flex items-center justify-center">
        <img
          src="/AdobeStock_131084168.jpeg"
          alt=""
          className="w-full h-[40vh] md:h-[90vh] object-fill absolute top-0 left-0"
        />
        <div className="relative mt-3 md:mt-0 text-white z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center md:leading-[3.5rem]">
            1 bouteille de vin offerte ca te tente ?
          </h1>
          <p className="mt-3 md:text-xl">Faites tourner la roue et gagne !</p>
          <div className="mt-7 ">
            <a
              href="#play"
              className="md:text-xl outline-none border-none bg-wheelRed hover:bg-wheelRed/90  py-2 md:py-3 md:font-bold px-4 md:px-10 rounded-lg"
            >
              Je veux jouer
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
    <div className="flex w-[100%] m-w-[100%] py-1 md:py-3 bg-gray-200 items-center justify-end relative overflow-hidden md:h-[10vh]">
      <article className="w-[100%] m-w-[100%] text-lg md:text-2xl font-bold flex items-center justify-center">
        <marquee
          scrollamount="15"
          behavior="scroll"
          direction="left"
          className="w-[100%] m-w-[100%]"
        >
          <p>
            <b className="text-wheelRed">100%</b> Gratuit! - Jeu{" "}
            <b className="text-wheelRed">100%</b> Gratuit!{" "}
          </p>
        </marquee>
      </article>
    </div>
  );
};
