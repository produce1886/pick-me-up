import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 22 20"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 6.21v6.632V6.21zm-10 5.685L1 6.21 11 1l10 5.21-10 5.685z"
      ></path>
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.333 15.21v-3.789L11 15.211l6.667-3.79v3.79L11 19l-6.667-3.79z"
      ></path>
    </svg>
  );
}

export default Icon;
