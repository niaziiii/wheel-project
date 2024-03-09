import Dropdown from "./components/DropDown";
import InputTextField from "./components/Input";
import Wheel from "./components/Wheel";
import { countryData } from "./utils/constant";

function App() {
  return (
    <div className="h-screen">
      <div className="h-[70vh] relative">
        <img
          src="/bg.png"
          alt=""
          className="w-full h-[70vh] absolute top-0 left-0"
        />
        <div
          style={{ color: "white" }}
          className="relative text=white z-10 flex flex-col items-center justify-center h-full"
        >
          <h1 className="text-4xl font-bold">
            Une Margher <br />
            ça te di
          </h1>
          <p className="mt-3">Faites tourner la roue et gap</p>
          <div className="mt-5 ">
            <button className="outline-none border-none bg-red-500 hover:bg-red-600  py-2 px-5 rounded-lg">
              I want to play
            </button>
          </div>
        </div>
      </div>
      <div className="py-4 bg-gray-200 flex items-center justify-end">
        <p>
          Jeu <b className="text-red-500">100%</b> Gratuit!-Jeu{" "}
          <b className="text-red-500">1</b>
        </p>
      </div>
      <div className="mt-16">
        <h1 className="text-4xl font-bold text-center">Lancer la roue</h1>
        <p className="text-center mt-2">
          Dites nous qui vous êtes pour qu'on vous régale 👇
        </p>
        <div className="w-[20rem] m-auto mt-10">
          <form action="#" className="">
            <InputTextField placeholder="First Name" />
            <br />
            <Dropdown
              option={countryData}
              selected={countryData[0]}
              handleChange={(value) => {
                console.log({ value });
              }}
            />
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
      <div className="mt-[5rem] flex items-center justify-center">
        <Wheel />
      </div>
      <br /> <br /> <br />
      <div className="bg-black p-4 flex items-center justify-center">
        <p className="w-full text-center text-white">
          ©2023 Wheel All rigths reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
