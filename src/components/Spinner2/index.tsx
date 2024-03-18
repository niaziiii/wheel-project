import "./style.css";
import React, { useEffect, useState } from "react";
import { useAppContext, actionTypes } from "../../context";

const WheelSpinner: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [rotation, setRotation] = useState(0);
  const animationSpeed = 2000;

  useEffect(() => {
    let animationInterval: any;

    if (state.isWheelRunning) {
      animationInterval = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 1);
      }, animationSpeed / 360);
    } else {
      clearInterval(animationInterval);
    }

    return () => {
      clearInterval(animationInterval);
    };
  }, [state.isWheelRunning]);

  const playWheel = () => {
    dispatch({ type: actionTypes.SET_WHEEL, payload: !state.isWheelRunning });
  };
  return (
    <div id="wrapper">
      <div id="wheel-container">
        <div id="wheel">
          <div id="inner-wheel" style={{ transform: `rotate(${rotation}deg)` }}>
            <div className="sec ">
              <span className="fa fa-bell-o font-bold text-[#79200e] left-[-47px]">
                une Margherita
              </span>
            </div>
            <div className="sec">
              <span className="fa fa-bell-o font-bold text-white left-[-30px]">
                un Tiramisu
              </span>
            </div>
            <div className="sec">
              <span className="fa fa-bell-o font-bold text-[#79200e] left-[-25px]">
                un spritz
              </span>
            </div>
            <div className="sec">
              <span className="fa fa-bell-o font-bold text-white left-[-23px]">
                un cafe
              </span>
            </div>
          </div>

          <div id="spin" onClick={playWheel}>
            <div id="inner-spin"></div>
          </div>

          <div id="shine"></div>
        </div>
      </div>
      <div id="txt"></div>
    </div>
  );
};

export default WheelSpinner;
