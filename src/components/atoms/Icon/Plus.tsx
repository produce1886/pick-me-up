import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 14 14"
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          fill={fill}
          d="M13.289 7.48h-5.61v5.61h-1.87V7.48H.199V5.61h5.61V0h1.87v5.61h5.61v1.87z"
        ></path>
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill={fill}
            d="M0 0h13.09v13.09H0z"
            transform="translate(.199)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
