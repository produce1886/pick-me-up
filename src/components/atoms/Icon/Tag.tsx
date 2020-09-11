import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 31 31"
    >
      <g
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M10.57 7.896h10.14a2 2 0 012 2.001l.007 12.141-7.07 7.071-7.072-7.07V9.89a2 2 0 011.994-1.994v0z"></path>
        <path d="M15.646 22.038l-.007-.007"></path>
      </g>
    </svg>
  );
}

export default Icon;
