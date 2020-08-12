import styled, { css } from "styled-components";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/Modal/ModalTop";
import Middle from "../molecules/Modal/ModalMiddle";
import Bottom from "../molecules/Modal/ModalBottom";
import { useState, useRef, useEffect } from "react";

export default function Modalblock(props) {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);
	return (
		<>
			<Overlay visible="visible" />
			<Wrapper tabIndex="-1" visible="visible">
				<Inner tabIndex="0" height="56rem">
					<Top type={props.type}></Top>
					<Middle type={props.type}></Middle>
					<Bottom></Bottom>
				</Inner>
			</Wrapper>
		</>
	);
}

function useOutsideAlerter(ref) {
	/**
	 * Alert if clicked on outside of element
	 */
	function handleClickOutside(event) {
		if (ref.current && !ref.current.contains(event.target)) {
			alert("You clicked outside of me!");
		}
	}

	useEffect(() => {
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});
}
