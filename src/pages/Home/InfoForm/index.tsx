import React from "react";
import InputTextField from "../../../components/Input";
import { countryData } from "../../../utils/constant";
import Dropdown from "./DropDown/";

export default function InfoForm() {
  return (
    <div className="mt-16">
      <h1 className="text-4xl font-bold text-center">Lancer la roue</h1>
      <p className="text-center mt-2">
        Dites nous qui vous êtes pour qu'on vous régale 👇
      </p>
      <div className="w-[20rem] m-auto mt-10">
        <form action="#" className="">
          <InputTextField placeholder="First Name" />
          <br />
          <Dropdown />
          <br />
          <InputTextField placeholder="Email" />
          <br />
          <div className=" flex items-center gap-4">
            <input type="checkbox" className="scale-[3] w-[5rem]" />
            <p>Je veux recevoir des cadeaux de la part de mon restaurant</p>
          </div>
          <br />
          <div className="mt-5 w-full">
            <button className="outline-none w-full text-white border-none bg-red-500 hover:bg-red-600  py-3 px-5 rounded-lg">
              Lancer la roue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
