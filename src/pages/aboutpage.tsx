import React from "react";
import { useNavigate } from "react-router-dom";

export const Aboutpage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center  items-center mx-auto text-black mt-24 ">
        <h1 className="text-center  font-semibold text-3xl"> Information </h1>
        <p className="text-center mt-16 text-xl">
          This converter was made with exploration React+TS+Tailwind CSS
        </p>
        <button
          className=" w-64  rounded-lg p-1 text-xl text-white bg-indigo-600 animate-bounce mt-16 "
          onClick={() => navigate("/")}
        >
          Return to main page
        </button>
      </div>
    </>
  );
};
