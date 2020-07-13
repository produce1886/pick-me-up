import React from "react";

function Icon({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 60 60"
    >
      <g clipPath="url(#prefix__clip0)">
        <g filter="url(#prefix__filter0_d)">
          <circle cx="30" cy="30" r="30" fill="#9C69E2"></circle>
        </g>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M29.741 19.267H20.61a2.607 2.607 0 00-2.609 2.61V40.14a2.612 2.612 0 002.609 2.609h18.264a2.61 2.61 0 002.609-2.609v-9.132"
        ></path>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M39.526 17.31a2.771 2.771 0 013.914 0 2.77 2.77 0 010 3.914L31.046 33.618l-5.218 1.304 1.304-5.218 12.394-12.393z"
        ></path>
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h60v60H0z"></path>
        </clipPath>
        <filter
          id="prefix__filter0_d"
          width="68"
          height="68"
          x="-4"
          y="-1"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="3"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            mode="multiply"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;
