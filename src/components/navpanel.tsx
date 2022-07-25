import React from "react";
import { NavLink } from "react-router-dom";
import { Navcard } from "./navcard";
import { navpanelitems } from "./navigation/Cards";
export const Navpanel: React.FC = () => (
  <div className="  ">
    {navpanelitems.map((item) => (
      <div className="">
        <Navcard
          text={item.text}
          iconCode={item.iconCode}
          wrapperClassName={item.wrapperClassName}
        />
      </div>
    ))}
  </div>
);
