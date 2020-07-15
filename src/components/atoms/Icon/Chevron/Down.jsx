import React from "react";

function Icon({ style, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 12 7"
    >
      <g>
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1l5 5 5-5"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
