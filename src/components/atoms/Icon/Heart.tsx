import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 23 20"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.046 2.591a5.432 5.432 0 00-7.681 0l-1.047 1.047-1.046-1.047A5.433 5.433 0 001 6.431c0 1.441.572 2.823 1.59 3.841l1.047 1.047L11.318 19 19 11.319l1.046-1.047a5.42 5.42 0 001.591-3.84 5.434 5.434 0 00-1.591-3.841v0z"
      ></path>
    </svg>
  );
}

export default Icon;
