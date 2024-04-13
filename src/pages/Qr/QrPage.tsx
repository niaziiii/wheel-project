import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function QrPage() {
  const location = useLocation();

  return (
    <div className="flex items-center justify-center h-screen bg-[#0e0074] flex-col text-white">
      <div className="flex items-center justify-center flex-col gap-2 text-center px-4">
        <img
          src="victoire-logo.png"
          alt="logo"
          className="w-[6rem] bg-white p-2 rounded-md mb-2"
        />
        <h2 className="font-bold text-2xl">See you on your smartphone!</h2>
        <p className="mb-10">
          This game is not available on computers. Scan the QR code below with
          your smartphone.
        </p>
        <img
          src="/qr/qr.png"
          className="w-[20rem]  bg-white p-1 rounded-md"
          alt="qr-image"
        />
      </div>
    </div>
  );
}
