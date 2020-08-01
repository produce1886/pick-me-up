import React from "react";

function Icon({ style, fill }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style={style}
			fill="none"
			viewBox="0 0 24 24">
			<path
				stroke={fill}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M18 6L6 18M6 6l12 12"></path>
		</svg>
	);
}

export default Icon;
