import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className=" flex-col absolute inset-x-0 bottom-0 h-30  ">
        <div className="grid grid-cols-1 h-20 content-center bg-blue-500  pl-64" >
            <p className="text-2xl">Simple SPA converter.</p> 
            <p className="">Enjoy my converter.</p>
        </div>
      <div className=" flex items-center h-12 bg-blue-600  pl-64  ">
        © 2022 Igor' Kartaus
      </div>
    </div>
  );
};
