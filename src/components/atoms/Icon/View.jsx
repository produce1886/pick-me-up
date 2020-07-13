import React from "react";

function Icon({ style, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 20 17"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 8.5s3.273-6.545 9-6.545S19 8.5 19 8.5s-3.273 6.546-9 6.546S1 8.5 1 8.5z"
      ></path>
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 10.954a2.454 2.454 0 100-4.909 2.455 2.455 0 000 4.909z"
      ></path>
    </svg>
  );
}

export default Icon;
