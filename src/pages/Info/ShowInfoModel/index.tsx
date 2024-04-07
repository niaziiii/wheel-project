import React from "react";
import { MdArrowOutward } from "react-icons/md";

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
        <h1 className="font-bold text-2xl text-center">
          Support us by leaving a review! <b className="text-red-500">❤️</b>
        </h1>
        <img src="/loading.png" alt="loading" className="my-4" />
        <h3 className="text-xl font-semibold text-center">
          Waiting for validation...
        </h3>
        <div className="mt-5 w-full">
          <button
            onClick={close}
            className="outline-none w-full text-white border-none bg-red-500 hover:bg-red-600  py-3 px-5 rounded-lg flex items-center justify-center gap-2 font-bold"
          >
            Go to Tripadvisor
            <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
}
