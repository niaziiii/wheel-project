import React, { useState } from "react";
import "./style.css";

const WheelSpinner: React.FC = () => {
  const [degree, setDegree] = useState<number>(1800);
  const [clicks, setClicks] = useState<number>(0);

  const spinWheel = () => {
    // Add 1 every click
    setClicks(clicks + 1);

    // Multiply the degree by number of clicks
    const newDegree: number = degree * clicks;
    const extraDegree: number = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
    const totalDegree: number = newDegree + extraDegree;

    // Update the rotation of the wheel
    const innerWheel = document.getElementById("inner-wheel");
    if (innerWheel) {
      innerWheel.style.transform = `rotate(${totalDegree}deg)`;
    }

    // Tilt the spin button
    const spinButton = document.getElementById("spin");
    if (spinButton) {
      spinButton.classList.add("spin");
      setTimeout(() => {
        spinButton.classList.remove("spin");
      }, 100);
    }
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        <div id="inner-wheel">
          <div className="sec">
            <span className="fa fa-bell-o"></span>
          </div>
          <div className="sec">
            <span className="fa fa-comment-o"></span>
          </div>
          <div className="sec">
            <span className="fa fa-smile-o"></span>
          </div>
          <div className="sec">
            <span className="fa fa-heart-o"></span>
          </div>
        </div>

        <div id="spin" onClick={spinWheel}>
          <div id="inner-spin"></div>
        </div>

        <div id="shine"></div>
      </div>

      <div id="txt"></div>
    </div>
  );
};

export default WheelSpinner;
