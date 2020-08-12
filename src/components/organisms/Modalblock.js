import styled, { css } from "styled-components";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/Modal/ModalTop";
import Middle from "../molecules/Modal/ModalMiddle";
import Bottom from "../molecules/Modal/ModalBottom";
import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modalblock(props) {
	const [visible, setVisible] = useState("none");
	const handleClickOutside = (event) => {
		const domNode = ReactDOM.findDOMNode();
		if (!domNode || !domNode.contains(event.target)) {
			setVisible("visible");
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);
	return (
		<>
			<Overlay visible="visible" onClick={console.log("hi")} />
			<Wrapper tabIndex="-1" visible={visible}>
				<Inner>
					<Top type={props.type}></Top>
					<Middle type={props.type}></Middle>
					<Bottom ismodal={props.ismodal}></Bottom>
				</Inner>
			</Wrapper>
		</>
	);
}
