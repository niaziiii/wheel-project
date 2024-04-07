import React from "react";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";

export default function InputTextField({
  type = "text",
  placeholder,
  value = "",
  handleChange,
}: {
  value: string;
  placeholder: string;
  handleChange?: any;
  type: string;
}) {
  return (
    <div className="card flex justify-content-center w-full">
      <InputText
        type={type}
        value={value}
        className="w-full !text-black "
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
        pt={Tailwind.inputtext}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

const Tailwind = {
  inputtext: {
    root: ({ props, context }) => ({
      className: classNames(
        "m-0 bg-gray-100",
        "font-sans text-gray-600 dark:text-white/80  border border-gray-300 dark:border-black-900/40 transition-colors duration-200 appearance-none rounded-lg",
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
