import React, { useState } from "react";

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
    }, 5000);
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
          <img src="/coin-box.png" alt="coin-box" />
        ) : (
          <img src="/loading.png" alt="loading" />
        )}
        <h1 className="font-bold text-2xl text-center">
          Soutenez-nous en nous <br />
          laissant un avis ! <b className="text-red-500">❤️</b>
        </h1>
        <ul className="flex flex-col gap-2">
          {data.map((d, i) => (
            <li key={d} className="flex items-center gap-3">
              <div className="h-[2rem] w-[2rem] min-w-[2rem] rounded-full bg-black text-white flex items-center justify-center">
                {i + 1}
              </div>
              <p className="font-semibold">{d}</p>
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
