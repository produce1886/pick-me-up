import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 20 21"
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          fill={fill}
          d="M10 20.763c5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10s-10 4.477-10 10c0 5.522 4.477 10 10 10z"
        ></path>
        <path
          fill="#fff"
          d="M5.537 15.226V14.11c0-1.227 2.008-2.231 4.463-2.231s4.463 1.005 4.463 2.232v1.117H5.537zm2.231-6.695a2.235 2.235 0 011.378-2.062 2.233 2.233 0 012.916 2.917A2.238 2.238 0 0110 10.763a2.229 2.229 0 01-2.232-2.232z"
        ></path>
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            d="M0 0h20v20H0z"
            transform="translate(0 .763)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default React.memo(Icon);
