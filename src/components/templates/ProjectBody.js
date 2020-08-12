import ProjectList from "./ProjectList";
import Filter from "../molecules/Filter/Filter";
import WriteButton from "../molecules/Button/Write";
import styled from "styled-components";
import { ALIGN } from "../molecules/Filter/ItemData";
import ModalBlock from "../organisms/Modalblock";
import { useState } from "react";

export default function ProjectFilter() {
	const [modalIsOpen, setIsOpen] = useState(false);
	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}
	return (
		<Wrapper>
			<InnerWrapper>
				<Div>
					<Filter title="최신순" activeMenu="align" data={ALIGN}></Filter>
				</Div>
				<ProjectList></ProjectList>
			</InnerWrapper>
			<WriteButton openModal={openModal}></WriteButton>
			{modalIsOpen && <ModalBlock></ModalBlock>}
		</Wrapper>
	);
}

const Div = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin: 1.2rem 0 1.2rem 1rem;
`;

const InnerWrapper = styled.div`
	margin: 0 4rem 0 4rem;
	max-width: 1200px;
	width: 48rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	position: relative;
	z-index: 100;
`;

const Wrapper = styled.div`
	background-color: #f0f8fd;
	justify-content: center;
	width: 100%;
	align-items: center;
	display: flex;
	flex-direction: row;
	box-sizing: border-box;
`;
