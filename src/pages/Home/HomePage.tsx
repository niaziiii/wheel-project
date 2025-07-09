import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import HeroSection from "./HeroSection";
import InfoForm from "./InfoForm";
import { useAppContext, actionTypes } from "../../context";
import ShowInfoModel from "./ShowInfoModel";
import WheelSpinner from "../../components/Spinner";

export default function Home({ pageUrlPath }) {
  const { state, dispatch } = useAppContext();
  const closeModal = () => {
    dispatch({ type: actionTypes.SET_MODEL, payload: false });
  };

  return (
    <div>
      <div className="min-h-screen relative">
        {state.isModalOpen && <ShowInfoModel close={closeModal} />}
        <HeroSection />
        <InfoForm pageUrlPath={pageUrlPath} />
        <WheelSpinner />
        <Footer />
      </div>
    </div>
  );
}
