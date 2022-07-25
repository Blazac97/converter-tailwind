import React from "react";

export interface INavcardProps {
  iconCode: string;
  text: string;
  wrapperClassName?: string;
}

export const Navcard: React.FC<INavcardProps> = (props) => (
  <div
    className={
      "navcardcontainer justify-center text-black shadow-2xl mt-6 " +
      props.wrapperClassName
    }
  >
    <span className="material-icons">{props.iconCode}</span>
    <span className="mt-4 text-xl">{props.text}</span>
  </div>
);
