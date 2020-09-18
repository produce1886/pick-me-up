import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 24 20"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M23 17c0 .53-.21 1.04-.586 1.414C22.04 18.79 21.53 19 21 19H3c-.53 0-1.04-.21-1.414-.586C1.21 18.04 1 17.53 1 17V6c0-.53.21-1.04.586-1.414C1.96 4.21 2.47 4 3 4h4l2-3h6l2 3h4c.53 0 1.04.21 1.414.586C22.79 4.96 23 5.47 23 6v11z"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 15c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
      />
    </svg>
  );
}

export default Icon;
