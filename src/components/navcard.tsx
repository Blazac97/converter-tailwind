import React from "react";
import { NavLink } from "react-router-dom";
export interface INavcardProps {
  iconCode: string;
  text: string;
  wrapperClassName?: string;
  link: string;
}

export const Navcard: React.FC<INavcardProps> = (props) => (
  <NavLink to={props.link}>
    <div
      className={
        "navcardcontainer justify-center text-black shadow-2xl mt-6 " +
        props.wrapperClassName
      }
    >
      <i className="material-icons">{props.iconCode}</i>
      <span className="mt-4 text-xl">{props.text}</span>
    </div>
  </NavLink>
);
