import type { INavcardProps } from "components/navcard";

export const navpanelitems: INavcardProps[] = [
  {
    iconCode: "straighten",
    text: "Length",
    wrapperClassName: " bg-cyan-400",
    link: "/converter/length",
  },
  {
    iconCode: "local_drink",
    text: "Volume",
    wrapperClassName: " bg-blue-400",
    link: "/converter/volume",
  },
  {
    iconCode: "timer",
    text: "Time",
    wrapperClassName: " bg-amber-500 ",
    link: "/converter/time",
  },
  {
    iconCode: "weekend",
    text: "Mass",
    wrapperClassName: " bg-lime-400 ",
    link: "/converter/mass",
  },
];
