import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="h-[100vh] relative">
        <img
          src="/AdobeStock_131084168.jpeg"
          alt=""
          className="w-full h-[100vh] absolute top-0 left-0"
        />
        <div
          style={{ color: "white" }}
          className="relative text-white z-10 flex flex-col items-start justify-center h-full"
        >
          <div className="p-4 w-[90%] m-auto">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Une Margherita <br />
              offerte ca te dit ?
            </h1>
            <p className="mt-8 text-xl ">
              Faites tourner la roue et gagnez plein de cadeaux 🎁
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 bg-gray-200 flex items-center justify-center">
        <p className="text-xl lg:text-3xl flex flex-row gap-2 justify-center items-center font-bold">
          Jeu <b className="text-red-500">100%</b> Gratuit! &nbsp;- &nbsp;
        </p>
        <p className="text-xl lg:text-3xl flex flex-row gap-2 justify-center items-center font-bold">
          Jeu <b className="text-red-500">100%</b> Gratuit!
        </p>
      </div>
    </>
  );
};

export default HeroSection;
