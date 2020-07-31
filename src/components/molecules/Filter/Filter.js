import { useState } from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Filter";
import Icondownline from "../../atoms/Icon/Chevron/Down";
import Iconupline from "../../atoms/Icon/Chevron/Up";
import Iconup from "../../atoms/Icon/Filter/Up";
import Icondown from "../../atoms/Icon/Filter/Down";
import IconX from "../../atoms/Icon/X";
import DropdownMenu from "../Filter/DropdownMenu";

export default function Filter(props) {
	const [clicked, setClicked] = useState(false);
	const iconStyle = {
		width: "0.6rem",
		height: "0.4rem",
		margin: "0 0 0 0.3rem",
	};
	const iconXStyle = {
		width: "0.6rem",
		height: "0.6rem",
		margin: "0 0 0 0.3rem",
	};
	const [title, setTitle] = useState(props.title);
	const [selected, setSelected] = useState(false);
	const toggleSelected = (text, selected) => {
		setTitle(text);
		setSelected(selected);
	};
	let background = "#ffffff";
	let icon = <Icondownline style={iconStyle} fill="#8b90a0"></Icondownline>;

	if (selected) {
		icon = <IconX style={iconXStyle} fill="#232735" onClick={alert("clicked")}></IconX>;
		background = "#d3d4d8";
	} else if (clicked) {
		icon = <Iconupline style={iconStyle} fill="#8b90a0"></Iconupline>;
		background = "#f0f1f3";
	}
	if (props.title === "최신순") {
		return (
			<Wrapper
				onClick={() => setClicked(!clicked)}
				width="6rem"
				height="1.6rem"
				border={clicked ? "0.08rem" : "0.04rem"}
				borderColor={clicked ? "#c8acee" : "#d3d4d8"}
				backgroundColor="#ffffff">
				<Text line="1.08rem" level={3} color="#232735">
					{title}
				</Text>
				{clicked ? (
					<Iconup style={iconStyle} fill="#232735"></Iconup>
				) : (
					<Icondown style={iconStyle} fill="#232735"></Icondown>
				)}
				{clicked && (
					<DropdownMenu
						activeMenu={props.activeMenu}
						data={props.data}
						toggleSelected={toggleSelected}></DropdownMenu>
				)}
			</Wrapper>
		);
	}

	return (
		<Wrapper
			onClick={() => setClicked(!clicked)}
			width="fit-content"
			max-height="1.6rem"
			height="1.6rem"
			border="0.04rem"
			borderColor="#d3d4d8"
			backgroundColor={background}>
			<Text line="1.08rem" level={3} color="#232735">
				{title}
			</Text>
			{icon}
			{clicked && !selected && (
				<DropdownMenu
					activeMenu={props.activeMenu}
					data={props.data}
					toggleSelected={toggleSelected}></DropdownMenu>
			)}
		</Wrapper>
	);
}

const Col = styled.div`
	flex-direction: column;
	width: fit-content;
	height: fit-content;
`;
