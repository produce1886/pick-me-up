import React from "react";

function Icon({ style, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 21V5m-7 7l7-7 7 7"
      ></path>
    </svg>
  );
}

export default Icon;
