import React from "react";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useAppContext, actionTypes } from "../../../../../context";

export default function InputTextField({ setErrors }: { setErrors: any }) {
  const { state, dispatch } = useAppContext();
  const { country } = state;

  return (
    <div className="card flex justify-content-center w-full relative">
      <div className="absolute top-[28%] left-3">{country.name} |</div>
      <InputText
        type="number"
        value={state.contactNumber as string}
        className="w-full pl-14 !text-black"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: actionTypes.SET_CONTAC_NUMBER,
            payload: e.target.value,
          });
          setErrors((prev) => ({
            ...prev,
            contact: {
              name: null,
            },
          }));
        }}
        pt={Tailwind.inputtext}
        placeholder="Enter number"
      />
    </div>
  );
}

const Tailwind = {
  inputtext: {
    root: ({ props, context }) => ({
      className: classNames(
        "m-0 bg-gray-100",
        "font-sans text-black dark:text-white/80  border border-gray-300 dark:border-black-900/40 transition-colors duration-200 appearance-none rounded-lg",
        {
          "hover:border-black-500 focus:outline-none focus:outline-offset-0  ":
            !context.disabled,
          "opacity-60 select-none pointer-events-none cursor-default":
            context.disabled,
        },
        {
          "text-lg px-4 py-4": props.size == "large",
          "text-xs px-2 py-2": props.size == "small",
          "p-3 text-base": props.size == null,
        }
      ),
    }),
  },
};
