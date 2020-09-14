import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.617 1.752a2.565 2.565 0 014.188.833 2.569 2.569 0 01-.557 2.798L5.993 17.638 1 19l1.362-4.993L14.617 1.752z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
