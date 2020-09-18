import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 17 20"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 8.364C16 14.09 8.5 19 8.5 19S1 14.09 1 8.364c0-1.953.79-3.826 2.197-5.207A7.568 7.568 0 018.5 1c1.99 0 3.897.776 5.303 2.157A7.292 7.292 0 0116 8.364z"
      ></path>
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.5 10.818c1.38 0 2.5-1.099 2.5-2.454 0-1.356-1.12-2.455-2.5-2.455S6 7.01 6 8.364s1.12 2.454 2.5 2.454z"
      ></path>
    </svg>
  );
}

export default Icon;
