import React from "react";

function Icon({ style, fill }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={style} fill="none" viewBox="0 0 20 20">
			<path
				stroke="#232735"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M1.663 4.52V1.331h17v3.187M6.976 18.332h6.375M10.163 1.332v17"
			/>
		</svg>
	);
}

export default Icon;
