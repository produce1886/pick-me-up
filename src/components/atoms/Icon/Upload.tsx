import React from "react";
import IconProps from "./icon";

function Icon({ style, fill }: IconProps) {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="#8b90a0"
      viewBox="0 0 512 512"
    >
      <g>
        <g>
          <path
            d="M472,312.642v139c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20v-139H0v139c0,33.084,26.916,60,60,60h392
			c33.084,0,60-26.916,60-60v-139H472z"
          />
        </g>
      </g>
      <g>
        <g>
          <polygon
            points="256,0.358 131.716,124.642 160,152.926 236,76.926 236,388.642 276,388.642 276,76.926 352,152.926 
			380.284,124.642 		"
          />
        </g>
      </g>
    </svg>
  );
}

export default React.memo(Icon);
