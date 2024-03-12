import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="h-[70vh] relative">
        <img
          src="/bg.png"
          alt=""
          className="w-full h-[70vh] absolute top-0 left-0"
        />
        <div
          style={{ color: "white" }}
          className="relative text=white z-10 flex flex-col items-center justify-center h-full"
        >
          <h1 className="text-4xl font-bold">
            Une Margher <br />
            ça te di
          </h1>
          <p className="mt-3">Faites tourner la roue et gap</p>
          <div className="mt-5 ">
            <button className="outline-none border-none bg-red-500 hover:bg-red-600  py-2 px-5 rounded-lg">
              I want to play
            </button>
          </div>
        </div>
      </div>
      <div className="py-4 bg-gray-200 flex items-center justify-end">
        <p>
          Jeu <b className="text-red-500">100%</b> Gratuit!-Jeu{" "}
          <b className="text-red-500">1</b>
        </p>
      </div>
    </>
  );
};

export default HeroSection;
