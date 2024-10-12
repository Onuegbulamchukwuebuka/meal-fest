import React from "react";
import pizza from "../../Asset/table.jpg";
import { Link } from "react-router-dom";

const HeroPage = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed h-screen flex flex-col justify-center item-center"
      style={{ backgroundImage: `url(${pizza})` }}
    >
      <div className="shadow-red-500 shadow-2xl flex flex-col item-center justify-center h-3/4 w-1/2 bg-slate-50 mx-auto rounded-3xl border-solid border-black border-4 opacity-85">
        <div className="font-serif text-5xl font-extrabold mx-auto text-center w-1/2">
          Meal Delivry, Made Simple
        </div>
        <div className="font-serif mx-auto mt-8 text-lg text-slate-50 bg-red-500 h-10 w-72 text-center pt-1 rounded-md font-medium">
          Make Next Meal Memorable
        </div>
        <Link className="mx-auto" to="/Shop">
          <button className="outline-2 outline outline-black font-bold bg-transperent h-10 w-28 mx-auto mt-8 rounded-xl hover:bg-red-500 hover:text-slate-50">
            Order now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;
