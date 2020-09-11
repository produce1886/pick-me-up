import React from "react";
import IconProps from "../icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 10 6"
    >
      <g clipPath="url(#prefix__clip0)">
        <path fill={fill} d="M0 0l5 6 5-6"></path>
        <path stroke={fill} strokeLinecap="round" d="M0 0l5 6 5-6H0z"></path>
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h10v6H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
