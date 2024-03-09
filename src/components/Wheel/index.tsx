import React, { useState } from "react";

const Wheel = () => {
  const [isRunning, setIsRunning] = useState(false);

  const playWheel = () => {
    setIsRunning(!isRunning);
  };
  return (
    <div className="flex">
      <div
        className={`wheel ${isRunning && "play-animation"}`}
        onClick={playWheel}
      >
        <img src="/wheel-2.png" alt="wheel" className="wheel-image" />
      </div>
    </div>
  );
};

export default Wheel;
