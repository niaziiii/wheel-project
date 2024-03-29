import React, { useState } from "react";
import Lottie from "lottie-react";
import lotiANim from "./loading-animation.json";

const data = [
  "You will be redirected to our Google page",
  "Leave us a review ⭐",
  "Come back to this tab and enjoy your gifts!! 🎁",
];
export default function ShowInfoModel({ close }: { close: () => void }) {
  const [clicks, setClicks] = useState(0);

  const handleClicks = () => {
    console.log("clicked");
    setClicks(clicks + 1);

    setTimeout(() => {
      close();
    }, 20000);
  };
  return (
    <div className="fixed z-40 top-0 left-0 w-full h-screen min-h-screen flex items-center justify-center bg-[#00000066] text-black">
      <div
        className="bg-white px-4 mx-2 sm:px-20 py-8 flex flex-col justify-center items-center gap-3 rounded-[15px]"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {clicks == 0 ? (
          <img
            src="/napolitano.jpeg"
            className="w-[10rem] md:w-[15rem] rounded-md"
            alt="napolitano"
          />
        ) : (
          <div className="w-[10rem] md:w-[15rem] h-[10rem] md:h-[15rem]">
            <Lottie
              animationData={lotiANim}
              loop={true}
              className="w-[10rem] md:w-[15rem] h-[10rem] md:h-[15rem] scale-125"
            />
          </div>
        )}

        <h1 className="font-bold text-lg md:text-2xl text-center">
          Soutenez-nous en nous <br />
          laissant un avis ! <b className="text-red-500">❤️</b>
        </h1>
        <ul className="flex flex-col gap-2">
          {data.map((d, i) => (
            <li key={d} className="flex items-center gap-3">
              <div className="h-[1.5rem] md:h-[2rem] w-[1.5rem] md:w-[2rem] min-w-[1rem] md:min-w-[2rem] rounded-full bg-black text-white flex items-center justify-center">
                {i + 1}
              </div>
              <p className="md:font-semibold text-sm md:text-lg">{d}</p>
            </li>
          ))}
        </ul>
        <div className="mt-5 w-full flex items-center justify-center">
          <a
            href="http://search.google.com/local/writereview?placeid=ChIJRTcr-fFu5kcRxRJhaGD91Og"
            onClick={handleClicks}
            target="_blank"
            className="outline-none  text-white border-none bg-red-500 hover:bg-red-600  py-3 px-5 rounded-lg w-[250px] text-center"
          >
            Accéder sur Tripadvisor
          </a>
        </div>
      </div>
    </div>
  );
}
