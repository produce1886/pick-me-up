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
	useEffect(() => {
		document.addEventListener("mousedown", pageClick, false);
		return document.removeEventListener("mousedown", pageClick, false);
	});
	pageClick = (event) => {
		if (getDOMNode().contains(event.target)) {
			alert("hi");
		}
	};
	return (
		<>
			<Overlay visible="visible" onMouseUp={pageClick} />
			<Wrapper tabIndex="-1" visible="visible" height="62rem">
				<Inner>
					<Top type={props.type}></Top>
					<Middle type={props.type}></Middle>
					<Bottom ismodal={props.ismodal}></Bottom>
				</Inner>
			</Wrapper>
		</>
	);
}
