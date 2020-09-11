import React from "react";
import IconProps from "../icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 10 19"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 17.5l8-8-8-8"
      ></path>
    </svg>
  );
}

export default Icon;
