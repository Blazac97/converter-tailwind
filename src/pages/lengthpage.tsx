import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const Lengthpage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex mx-auto mt-4 justify-center">
        <div className="flex">
          <button
            className=" w-24 flex justify-center items-center rounded-l-lg  text-white h-9 bg-indigo-600/90 hover:animate-pulse"
            onClick={() => navigate("/")}
          >
            {"<RETURN"}
          </button>
        </div>
        <div className="justify-center w-2/4 mx-6">
          <input
            type="number"
            placeholder="Input your number"
            className="form-input  px-4 py-3 rounded-lg h-9 text-black text-center hover:border-2 w-full"
          ></input>
        </div>
        <div className="flex">
          <button className=" w-24 flex justify-center items-center rounded-r-lg p-1  text-white h-9 bg-green-500 hover:animate-pulse">
            {"Calculate"}
          </button>
        </div>
      </div>
    </>
  );
};
