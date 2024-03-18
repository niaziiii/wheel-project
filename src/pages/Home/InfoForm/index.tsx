import React, { useState } from "react";
import InputTextField from "../../../components/Input";
import Dropdown from "./DropDown/";
import { useAppContext, actionTypes } from "../../../context";

export default function InfoForm() {
  const { state, dispatch } = useAppContext();
  const [formState, setFormState] = useState({
    firstName: "",
    email: "",
    contact: {
      code: "",
      number: "",
    },
    reciveGifts: false,
  });

  const handleChange = (data: any, key: string) => {
    console.log({ data, key });
    setFormState((prev) => ({
      ...prev,
      [key]: data,
    }));
  };

  const submitHandler = (e: any) => {
    e?.preventDefault();
    const params = {
      ...formState,
      contactNumber: state.contactNumber,
    };
    console.log({ params, formState });
    dispatch({ type: actionTypes.SET_WHEEL, payload: true });
  };
  return (
    <div className="mt-16" id="play">
      <h1 className="text-4xl font-bold text-center">Lancer la roue</h1>
      <p className="text-center mt-2">
        Dites nous qui vous êtes pour qu'on vous régale 👇
      </p>
      <div className="w-[20rem] m-auto mt-10">
        <form action="#" className="">
          <InputTextField
            type="text"
            value={formState.firstName}
            handleChange={(value: any) => handleChange(value, "firstName")}
            placeholder="First Name"
          />
          <br />
          <Dropdown />
          <br />
          <InputTextField
            value={formState.email}
            handleChange={(value: any) => handleChange(value, "email")}
            placeholder="Email"
            type="email"
          />
          <br />
          <div className=" flex items-center gap-4">
            <input
              onChange={(e) => {
                handleChange(e.target.checked, "reciveGifts");
              }}
              checked={formState.reciveGifts}
              type="checkbox"
              className="scale-[3] w-[5rem]"
              id="gift"
            />
            <label htmlFor="gift">
              Je veux recevoir des cadeaux de la part de mon restaurant
            </label>
          </div>
          <br />
          <div className="mt-5 w-full">
            <button
              onClick={submitHandler}
              className="outline-none w-full text-white border-none bg-wheelRed hover:bg-wheelRed/80  py-3 px-5 rounded-lg"
            >
              Lancer la roue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
