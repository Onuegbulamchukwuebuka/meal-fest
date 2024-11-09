import React from "react";
import Heroimage from "../../Asset/shop.jpg";
import { Link } from "react-router-dom";

const HeroPage = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center bg-fixed h-[100vh] w-full flex flex-col justify-center item-center"
      style={{ backgroundImage: `url(${Heroimage})` }}
    >
      <div className="shadow-red-500 shadow-2xl flex flex-col item-center justify-center h-[60%] w-[90%] md:w-1/2 bg-slate-50 mx-auto rounded-3xl border-solid border-black border-4 opacity-80">
        <div className="font-serif text-2xl md:text-4xl font-bold mx-auto text-center w-3/4 sm:w-1/2 md:w-[70%]">
          Your Favorite Finds, Just a Click Away
        </div>
        <div className="font-serif mx-auto py-2 mt-4 text-xs md:text-lg md:p-1 md:mt-8 text-slate-50 bg-blue-700 h-11 w-3/4 sm:w-1/2 text-center rounded-md font-medium">
          Your One-Stop Shop for Everything
        </div>
        <Link className="mx-auto" to="/Order">
          <button className="outline-2 outline outline-black font-bold md:mt-8 bg-transperent h-10 w-28 mx-auto mt-6 rounded-xl hover:bg-blue-700 hover:text-slate-50">
            Shop now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;
