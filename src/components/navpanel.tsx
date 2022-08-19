import React from "react";
import { Navcard } from "./navcard";
import { navpanelitems } from "../navigation/Cards";
export const Navpanel: React.FC = () => (
  <div className="navbox">
    {navpanelitems.map((item) => (
      <div className="">
        <Navcard
          text={item.text}
          iconCode={item.iconCode}
          wrapperClassName={item.wrapperClassName}
          link={item.link}
        />
      </div>
    ))}
  </div>
);
