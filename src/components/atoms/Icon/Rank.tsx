import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 45 60"
    >
      <path
        fill={fill}
        d="M22.5 41.77H45V60L22.5 41.77zm-22.5 0h22.5L0 60V41.77zm0 0V0h45v41.77H0z"
      ></path>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h45v60H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
