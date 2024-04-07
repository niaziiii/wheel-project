import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function WiningPage() {
  const location = useLocation();

  return (
    <div className="flex items-center justify-center h-screen bg-wheelRed flex-col">
      <h1 className="text-5xl text-center font-bold text-white">
        Congratulations 🎉
      </h1>

      <Link
        to={"/"}
        className="mt-8 text-xl font-semibold border-2 border-black px-6 py-2 rounded-md bg-black text-white"
      >
        Play Again
      </Link>
    </div>
  );
}
