import "./style.css";
import React, { useEffect, useState } from "react";
import { useAppContext, actionTypes } from "../../context";
import { useNavigate } from "react-router-dom";

const WheelSpinner = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();
  const [rotation, setRotation] = useState(0);
  const animationSpeed = 2000;

  useEffect(() => {
    let animationInterval: any;

    if (state.isWheelRunning) {
      animationInterval = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 1);
      }, animationSpeed / 360);
      setTimeout(stopWheel, 5000);
    } else {
      clearInterval(animationInterval);
    }

    return () => {
      clearInterval(animationInterval);
    };
  }, [state.isWheelRunning]);

  const stopWheel = () => {
    dispatch({ type: actionTypes.SET_WHEEL, payload: false });
    setTimeout(() => {
      navigate("/win", { state: { code: "spinner-2" } });
    }, 2000);
  };
  return (
    <div id="wrapper" className="py-20">
      <div id="wheel-container">
        <div id="wheel">
          <div id="inner-wheel" style={{ transform: `rotate(${rotation}deg)` }}>
            <div className="sec ">
              <span className="fa fa-bell-o font-bold text-[#79200e] left-[-47px]">
                1 Voyage à NY
              </span>
            </div>
            <div className="sec">
              <span className="fa fa-bell-o font-bold text-white left-[-30px]">
                un Dessert
              </span>
            </div>
            <div className="sec">
              <span className="fa fa-bell-o font-bold text-[#79200e] left-[-25px]">
                une Boisson
              </span>
            </div>
            <div className="sec">
              <span className="fa fa-bell-o font-bold text-white left-[-23px]">
                1 Menu offert
              </span>
            </div>
          </div>

          <div id="spin">
            <div id="inner-spin"></div>
            <div className="absolute -z-0 overflow-hidden w-[68px] h-[68px] bg-white rounded-full">
              <img src="/victoire-logo.png" alt="wheel-logo" />
            </div>
          </div>

          <div id="shine"></div>
        </div>
      </div>
      <div id="txt"></div>
    </div>
  );
};

export default WheelSpinner;
