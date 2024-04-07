import React, { useState } from "react";
import Lottie from "lottie-react";
import lotiANim from "./loading-animation.json";

const data = [
  "Vous serez redirigé vers notre page Google",
  "Laissez-nous un commentaire ⭐",
  "Revenez sur cet onglet et profitez de vos cadeaux !! 🎁",
];
export default function ShowInfoModel({ close }: { close: () => void }) {
  const [clicks, setClicks] = useState(0);

  const handleClicks = async () => {
    if (clicks > 0) return;
    setClicks(clicks + 1);

    setTimeout(() => {
      close();
    }, 1000);
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
            src="/victoire-logo.png"
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
          Tentez de gagner un 1 an de Vin ! <br />
          <b className="text-red-500">❤️</b>
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
            href="http://search.google.com/local/writereview?placeid=ChIJg0IM-LFx5kcRgX-qU9hgUEQ"
            onClick={handleClicks}
            target="_blank"
            className="outline-none  text-white border-none bg-red-500 hover:bg-red-600  py-3 px-5 rounded-lg w-[250px] text-center"
          >
            Je laisse mon avis
          </a>
        </div>
      </div>
    </div>
  );
}
