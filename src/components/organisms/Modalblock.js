import styled, { css } from "styled-components";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/Modal/ModalTop";
import Middle from "../molecules/Modal/ModalMiddle";
import Bottom from "../molecules/Modal/ModalBottom";
import { useState } from "react";

export default function Modalblock(props) {
	return (
		<>
			<Overlay visible="visible" />
			<Wrapper tabIndex="-1" visible="visible">
				<Inner tabIndex="0" height="56rem">
                    <Top></Top>
                    <Middle></Middle>
					<Bottom></Bottom>
				</Inner>
			</Wrapper>
		</>
	);
}
