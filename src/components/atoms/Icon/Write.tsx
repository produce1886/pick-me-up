import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      style={style}
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <circle cx="34" cy="31" r="30" fill="#9C69E2" />
      </g>
      <path
        d="M33.7413 20.2675H24.6092C23.9172 20.2675 23.2535 20.5424 22.7642 21.0317C22.2749 21.521 22 22.1847 22 22.8767V41.1409C22 41.8329 22.2749 42.4965 22.7642 42.9858C23.2535 43.4752 23.9172 43.7501 24.6092 43.7501H42.8734C43.5654 43.7501 44.229 43.4752 44.7183 42.9858C45.2076 42.4965 45.4825 41.8329 45.4825 41.1409V32.0088"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.5258 18.3106C44.0448 17.7916 44.7487 17.5 45.4827 17.5C46.2166 17.5 46.9205 17.7916 47.4395 18.3106C47.9585 18.8296 48.2501 19.5335 48.2501 20.2674C48.2501 21.0014 47.9585 21.7053 47.4395 22.2243L35.046 34.6179L29.8276 35.9225L31.1322 30.7041L43.5258 18.3106Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="68"
          height="68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="multiply"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default React.memo(Icon);
