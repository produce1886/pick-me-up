import React from "react";

function Icon({ style, fill }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={style} fill="none" viewBox="0 0 24 23">
			<path
				fill="#232735"
				stroke="#232735"
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 12.458c.53 0 .958-.429.958-.958 0-.53-.429-.959-.958-.959-.53 0-.958.43-.958.959 0 .53.429.958.958.958zM12 5.75c.53 0 .958-.429.958-.958 0-.53-.429-.958-.958-.958-.53 0-.958.429-.958.958 0 .53.429.958.958.958zM12 19.167c.53 0 .958-.43.958-.959 0-.529-.429-.958-.958-.958-.53 0-.958.43-.958.958 0 .53.429.959.958.959z"
			/>
		</svg>
	);
}

export default Icon;
