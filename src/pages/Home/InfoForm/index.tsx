import React, { useEffect, useState } from "react";
import InputTextField from "../../../components/Input";
import Dropdown from "./DropDown/";
import { useAppContext, actionTypes } from "../../../context";
import { Checkbox } from "primereact/checkbox";
import {
  checkFieldsVerification,
  initialState,
  initialStateErrors,
  scrollToWrapper,
  sendWheelData,
  handleEmail,
} from "../utils";
import { getLuckyResult } from "./utils";
import emailjs from "@emailjs/browser";
import { _email_public_key } from "../../../utils/secrets";

export default function InfoForm({ pageUrlPath }: { pageUrlPath: string }) {
  const { state, dispatch } = useAppContext();
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState(initialStateErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (data, key) => {
    setFormState((prev) => ({
      ...prev,
      [key]: data,
    }));
  };

  const submitHandler = async (e) => {
    e?.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const wheelType = pageUrlPath;
      const userCanNotPlay = await checkFieldsVerification(
        state,
        formState,
        setErrors,
        wheelType
      );

      if (userCanNotPlay) {
        setIsSubmitting(false);
        return;
      }

      const { deg, luckyData } = getLuckyResult();

      const params = {
        wheelType: wheelType,
        name: formState.firstName,
        email: formState.email,
        receiveGift: formState.reciveGifts,
        contact: `+33${state.contactNumber}`,
        refId: luckyData.id,
        deg: deg,
      };

      dispatch({ type: actionTypes.SET_WHEEL, payload: true });
      dispatch({ type: actionTypes.SET_DEG, payload: deg });
      dispatch({ type: actionTypes.SET_LUCKYDATA, payload: luckyData });

      // Sending data to api
      sendWheelData(params);
      handleEmail(
        emailjs,
        params.email,
        params.name,
        `Congrats you have won: ${luckyData.gift}`
      );

      // Scroll to wheel
      scrollToWrapper();

      // Resetting fields data
      dispatch({ type: actionTypes.SET_CONTAC_NUMBER, payload: "" });
      setFormState(initialState);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors((prev: any) => ({
        ...prev,
        email: "An error occurred. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    emailjs.init({
      publicKey: _email_public_key,
    });
  }, [_email_public_key]);

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
            handleChange={(value) => {
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
            handleChange={(value) => {
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
              disabled={isSubmitting}
              className={`outline-none w-full text-white border-none py-3 px-5 rounded-lg ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-wheelRed hover:bg-wheelRed/80"
              }`}
            >
              {isSubmitting ? "Vérification..." : "Lancer la roue"}
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
