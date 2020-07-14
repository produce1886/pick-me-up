import React from "react";

function Icon({ style, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 21 20"
    >
      <g
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M9.2 17a8 8 0 100-16 8 8 0 000 16z"></path>
        <path d="M19.199 19l-4.35-4.35"></path>
      </g>
    </svg>
  );
}

export default Icon;
