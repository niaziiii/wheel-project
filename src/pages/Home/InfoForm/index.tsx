import React, { useState } from "react";
import InputTextField from "../../../components/Input";
import Dropdown from "./DropDown/";
import { useAppContext, actionTypes } from "../../../context";
import { Checkbox } from "primereact/checkbox";

const initialState = {
  firstName: "",
  email: "",
  contact: {
    code: "",
    number: "",
  },
  reciveGifts: false,
};
const initialStateErrors = {
  firstName: null,
  email: null,
  contact: {
    number: null,
  },
  reciveGifts: null,
};

export default function InfoForm() {
  const { state, dispatch } = useAppContext();
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState(initialStateErrors);

  const handleChange = (data: any, key: string) => {
    setFormState((prev) => ({
      ...prev,
      [key]: data,
    }));
  };

  const checkFieldsVerification = () => {
    let err: any = {
      firstName: null,
      email: null,
      contact: {
        number: null,
      },
    };

    let errors = false;
    const _formState = {
      ...formState,
      contactNumber: state.contactNumber ?? ("" as string),
    };
    if (!_formState.firstName) {
      err.firstName = "Enter your name";
      errors = true;
    }
    if (!_formState.email) {
      err.email = "Enter your email address";
      errors = true;
    }

    if (!_formState.contactNumber) {
      err.contact.number = "Enter your number";
      errors = true;
    }
    let length = _formState.contactNumber?.length as any;

    if (length < 8) {
      err.contact.number = "Enter your correct number";
      errors = true;
    }

    let contactNumber = _formState.contactNumber;

    if (!contactNumber.startsWith("6") && !contactNumber.startsWith("7")) {
      err.contact.number = "Enter your correct number format";
      errors = true;
    }

    setErrors(err);
    return errors;
  };

  const submitHandler = (e: any) => {
    e?.preventDefault();
    const useCanNotPlay = checkFieldsVerification();

    if (useCanNotPlay) return;

    const params = {
      ...formState,
      contactNumber: state.contactNumber,
    };
    dispatch({ type: actionTypes.SET_WHEEL, payload: true });

    //reseting fields data
    dispatch({ type: actionTypes.SET_CONTAC_NUMBER, payload: "" });
    setFormState(initialState);
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
            handleChange={(value: any) => {
              handleChange(value, "firstName");
              setErrors((prev) => ({ ...prev, firstName: null }));
            }}
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className="text-wheelRed text-[13px] ml-2 mt-1">
              {errors.firstName}
            </p>
          )}
          <br />
          <Dropdown setErrors={setErrors} />
          {errors.contact.number && (
            <p className="text-wheelRed text-[13px] ml-2 mt-1">
              {errors.contact.number}
            </p>
          )}
          <br />
          <InputTextField
            value={formState.email}
            handleChange={(value: any) => {
              handleChange(value, "email");
              setErrors((prev) => ({ ...prev, email: null }));
            }}
            placeholder="Email"
            type="email"
          />
          {errors.email && (
            <p className="text-wheelRed text-[13px] ml-2 mt-1">
              {errors.email}
            </p>
          )}
          <br />
          <div className=" flex items-center gap-4">
            <Checkbox
              id="gift"
              checked={formState.reciveGifts}
              onChange={(e) => {
                handleChange(e.target.checked, "reciveGifts");
              }}
              required
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
