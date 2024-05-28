import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import HeroSection from "./HeroSection";
import InfoForm from "./InfoForm";
import { useAppContext, actionTypes } from "../../context";
import ShowInfoModel from "./ShowInfoModel";
import WheelSpinner from "../../components/Spinner";
import { getWheelData } from "./utils";

export default function Home() {
  const { state, dispatch } = useAppContext();
  const closeModal = () => {
    dispatch({ type: actionTypes.SET_MODEL, payload: false });
  };

  useEffect(() => {
    getWheelData().then((res) => {
      if (res?.data && res?.data.length > 0) {
        const data = res.data;
        dispatch({ type: actionTypes.SET_PERSONS, payload: data });
      }
    });
  }, [state.isWheelRunning]);
  return (
    <div>
      <div className="min-h-screen relative">
        {state.isModalOpen && <ShowInfoModel close={closeModal} />}
        <HeroSection />
        <InfoForm />
        <WheelSpinner />
        <Footer />
      </div>
    </div>
  );
}
