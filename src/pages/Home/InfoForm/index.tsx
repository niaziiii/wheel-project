import React, { useState } from "react";
import InputTextField from "../../../components/Input";
import Dropdown from "./DropDown/";
import { useAppContext, actionTypes } from "../../../context";
import { Checkbox } from "primereact/checkbox";

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
      <h1 className="text-xl md:text-4xl font-bold text-center">
        Lancer la roue
      </h1>
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
            <Checkbox
              id="gift"
              checked={formState.reciveGifts}
              onChange={(e) => {
                handleChange(e.target.checked, "reciveGifts");
              }}
              pt={Tailwind.checkbox}
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

const Tailwind = {
  checkbox: {
    root: {
      className: [
        "cursor-pointer inline-flex relative select-none align-bottom",
        "w-10 h-10",
      ],
    },
    input: ({ props, context }) => ({
      className: [
        "flex items-center justify-center",
        "border-2 w-10 h-10 text-gray-600 rounded-lg transition-colors duration-200",
        {
          "border-gray-300 bg-white ": !context.checked,
          "!border-wheelRed bg-wheelRed": context.checked,
        },
        {
          "hover:border-wheelRed dark:hover:border-wheelRed focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]":
            !props.disabled,
          "cursor-default opacity-60": props.disabled,
        },
      ],
    }),
    icon: {
      className:
        "w-8 h-8 transition-all duration-200 text-white text-base dark:text-gray-900",
    },
  },
};
