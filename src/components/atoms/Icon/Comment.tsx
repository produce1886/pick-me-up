import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      viewBox="0 0 16 17"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.09 8.136c.002.96-.222 1.907-.655 2.764-.513 1.027-1.301 1.89-2.278 2.494-.976.603-2.1.923-3.248.924-.96.002-1.907-.222-2.764-.655L1 15.045 2.382 10.9c-.433-.857-.657-1.804-.655-2.764 0-1.147.32-2.272.924-3.248.604-.977 1.468-1.765 2.494-2.278.857-.433 1.804-.657 2.764-.655h.363c1.516.084 2.948.723 4.021 1.797 1.074 1.073 1.713 2.505 1.797 4.02v.364z"
      />
    </svg>
  );
}

export default Icon;
