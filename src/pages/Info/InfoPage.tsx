import React from "react";
import HeroSection from "./HeroSection";
import InfoForm from "./Form";
import WheelSpinner from "../../components/Spinner";
import { actionTypes, useAppContext } from "../../context";
import ShowInfoModel from "./ShowInfoModel";

export default function Info() {
  const { state, dispatch } = useAppContext();

  const closeModal = () => {
    dispatch({ type: actionTypes.SET_INFO_MODEL, payload: false });
  };
  return (
    <div className="relative">
      {state.isInfoModalOpen && <ShowInfoModel close={closeModal} />}

      <HeroSection />
      <div className="w-[90%] m-auto justify-center overflow-hidden md:grid grid-cols-2 lg:my-16 items-center">
        <InfoForm />
        <WheelSpinner />
      </div>
      <div className="py-4 bg-gray-200 flex items-center justify-center mt-12">
        <p className=" flex flex-row gap-2 justify-center items-center">
          © 2023 Company Name All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
