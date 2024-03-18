import React, { useState, useRef, useEffect } from "react";

const Wheel = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef(null);
  const animationSpeed = 2000;

  useEffect(() => {
    let animationInterval;

    if (isRunning) {
      animationInterval = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 1);
      }, animationSpeed / 360);
    } else {
      clearInterval(animationInterval);
    }

    return () => {
      clearInterval(animationInterval);
    };
  }, [isRunning]);

  const playWheel = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="mt-[5rem] flex items-center justify-center">
      <div className="flex">
        <div
          className={`wheel`}
          onClick={playWheel}
          style={{ transform: `rotate(${rotation}deg)` }}
          ref={wheelRef}
        >
          <img src="/wheel-green.png" alt="wheel" className="wheel-image" />
        </div>
      </div>
    </div>
  );
};

export default Wheel;
