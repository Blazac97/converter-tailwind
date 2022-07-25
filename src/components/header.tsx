import React from "react";
import { NavLink } from "react-router-dom";
export const Header: React.FC = () => {
  return (
    <div className="flex justify-center  w-screen h-16 bg-blue-500 font-mono p-нф0 m-0 ">
      <div className="flex items-center text-2xl font-bold text-slate-100">
        <p>Converter</p>
      </div>

      <NavLink to="/about">
        <div className="flex items-center absolute h-16 px-7 text-slate-100 right-0 font-semibold bg-blue-600/75 hover:bg-blue-400 cursor-pointer ">
          About
        </div>
      </NavLink>
    </div>
  );
};
