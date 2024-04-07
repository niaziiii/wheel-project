import React from "react";
import InputTextField from "../../../components/Input";
import { countryData } from "../../../utils/constant";

export default function InfoForm() {
  return (
    <div className="w-[100%] m-auto">
      <div className=" m-auto mt-10">
        <h1 className="text-2xl lg:text-4xl font-bold text">
          Faites tourner la roue
        </h1>
        <p className=" mt-2">
          Dites nous qui vous êtes pour qu'on vous régale 👇
        </p>
        <form action="#" className="mt-8 flex flex-col gap-4">
          <InputTextField placeholder="Prénom" />
          <InputTextField type="number" placeholder="Numéro de téléphone" />
          <InputTextField type="email" placeholder="Email" />
          <InputTextField placeholder="Ta date d'anniversaire pour la ? sur le ?" />

          <div className=" flex items-center gap-0 mt-2 md:-ml-2 lg:-ml-4">
            <input type="checkbox" className="scale-[3] w-[5rem]" />
            <p>Je veux recevoir des cadeaux de la part de mon restaurant</p>
          </div>
          <br />
          <div className="mt-2 w-full">
            <button className="outline-none w-full text-white border-none bg-red-500 hover:bg-red-600  py-3 px-5 rounded-lg">
              Lancer la roue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
