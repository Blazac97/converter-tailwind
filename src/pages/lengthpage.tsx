import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const Lengthpage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex mx-auto mt-4 ">
        <div className="flex">
          <button
            className=" w-24 flex justify-center rounded-lg p-1  text-white bg-indigo-600/90 hover:animate-pulse"
            onClick={() => navigate("/")}
          >
            {"<RETURN"}
          </button>
        </div>
      </div>
    </>
  );
};
