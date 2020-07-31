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

	const [clicked, setClicked] = useState(false);
	const [title, setTitle] = useState(props.title);
	const [selected, setSelected] = useState(false);
	const [reset, setReset] = useState(false);

	const toggleSelected = (text, selected) => {
		setTitle(text);
		setSelected(selected);
	};
	const resetFilter = () => {
		setTitle(props.title);
		setSelected(false);
		setClicked(false);
		setReset(!reset);
		console.log(selected, clicked, reset)
	};

	let background = "#ffffff";
	let icon = <Icondownline style={iconStyle} fill="#8b90a0"></Icondownline>;
	let iconAlign = <Icondown style={iconStyle} fill="#232735"></Icondown>;
	if (selected) {
		icon = (
			<Button onClick={resetFilter}>
				<IconX style={iconXStyle} fill="#232735"></IconX>
			</Button>
		);
		iconAlign = (
			<Button onClick={resetFilter}>
				<IconX style={iconXStyle} fill="#232735"></IconX>
			</Button>
		);
		background = "#d3d4d8";
	} else if (clicked) {
		icon = <Iconupline style={iconStyle} fill="#8b90a0"></Iconupline>;
		background = "#f0f1f3";
		iconAlign = <Iconup style={iconStyle} fill="#232735"></Iconup>;
	} else if (reset) {
		background = "#ffffff";
		icon = <Icondownline style={iconStyle} fill="#8b90a0"></Icondownline>;
		iconAlign = <Icondown style={iconStyle} fill="#232735"></Icondown>;
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
				{iconAlign}
				{clicked && !selected &&(
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

const Button = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
