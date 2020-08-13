import styled, { css } from "styled-components";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/ModalView/Top";
import Middle from "../molecules/ModalView/Middle";
import Bottom from "../molecules/ModalView/Bottom";
import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export default function ModalView(props) {
	useEffect(() => {
		document.addEventListener("mousedown", pageClick, false);
		return document.removeEventListener("mousedown", pageClick, false);
	});
	const pageClick = (event) => {
		if (getDOMNode().contains(event.target)) {
			alert("hi");
		}
	};

	return (
		<>
			<Overlay visible="visible" />
			<Wrapper tabIndex="-1" visible="visible" height="70rem">
				<Inner>
					<Top type={props.type}></Top>
					<Middle type="project"></Middle>
					<Bottom count="1N"></Bottom>
				</Inner>
			</Wrapper>
		</>
	);
}
