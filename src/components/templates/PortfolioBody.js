import WriteButton from "../molecules/Button/Write";
import styled from "styled-components";
import Portfoliolist from "../templates/Portfoliolist";
import { useModal } from "react-modal-hook";
import ModalWrite from "../organisms/ModalWrite";
import ModalView from "../organisms/ModalView";
import { useState } from "react";

export default function PortfolioBody() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [viewModalIsOpen, setViewOpen] = useState(false);
	function openWrite() {
		setIsOpen(true);
	}
	function closeWrite() {
		setIsOpen(false);
	}
	function openView() {
		setViewOpen(true);
	}
	function closeView() {
		setViewOpen(false);
	}

	return (
		<Wrapper>
			<InnerWrapper>
				<Portfoliolist openView={openView}></Portfoliolist>
				{viewModalIsOpen && <ModalView></ModalView>}
			</InnerWrapper>
			<WriteButton openView={openView}></WriteButton>
			{viewModalIsOpen && <ModalView></ModalView>}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-color: #f5edff;
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: row;
`;
const InnerWrapper = styled.div`
	margin: 0 3rem 0 3rem;
	max-width: 1200px;
	width: 48rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
`;
