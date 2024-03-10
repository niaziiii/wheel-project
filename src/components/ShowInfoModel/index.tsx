import React from "react";

const data = [
  "You will be redirected to our Google page",
  "Leave us a review ⭐",
  "Come back to this tab and enjoy your gifts!! 🎁",
];
export default function ShowInfoModel({ close }: { close: () => void }) {
  return (
    <div
      className="fixed z-40 top-0 left-0 w-full h-screen min-h-screen flex items-center justify-center bg-[#00000066] text-black"
      onClick={close}
    >
      <div
        className="bg-white px-20 py-8 flex flex-col justify-center items-center gap-3 rounded-[15px]"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img src="/coin-box.png" alt="coin-box" />
        <h1 className="font-bold text-2xl text-center">
          Soutenez-nous en nous <br />
          laissant un avis ! <b className="text-red-500">❤️</b>
        </h1>
        <ul className="flex flex-col gap-2">
          {data.map((d, i) => (
            <li key={d} className="flex items-center gap-3">
              <div className="h-[2rem] w-[2rem] rounded-full bg-black text-white flex items-center justify-center">
                {i + 1}
              </div>
              <p className="font-semibold">{d}</p>
            </li>
          ))}
        </ul>
        <div className="mt-5 w-full">
          <button
            onClick={close}
            className="outline-none w-full text-white border-none bg-red-500 hover:bg-red-600  py-3 px-5 rounded-lg"
          >
            Accéder sur Tripadvisor
          </button>
        </div>
      </div>
    </div>
  );
}
