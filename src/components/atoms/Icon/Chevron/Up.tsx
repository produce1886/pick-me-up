import React from "react";
import IconProps from "../icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 12 7"
    >
      <g>
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 6L6 1 1 6"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
