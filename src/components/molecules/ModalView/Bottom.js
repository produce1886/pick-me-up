import styled from "styled-components";
import Text from "../../atoms/Text";
import Comment from "../../organisms/Comment/Comment";
import MoreButton from "../Button/More";
import CommentWrite from "../../organisms/Comment/CommentWrite";

export default function ModalBottom(props) {
	return (
		<Bottom>
			<Div>
				<Text level={4} weight={500} color="#9c69e2">
					{props.count}
				</Text>
				<Text level={4} weight={500} color="#232735">
					Comments
				</Text>
			</Div>
			<Comment></Comment>
			<Comment></Comment>
			<Comment></Comment>
			<ButtonWrapper>
				<MoreButton link=""></MoreButton>
			</ButtonWrapper>
			<CommentWrite></CommentWrite>
		</Bottom>
	);
}

const Div = styled.div`
	width: 5.5rem;
	height: 1.6rem;
	justify-content: space-between;
	align-items: center;
	display: flex;
	flex-direction: row;
`;
const Bottom = styled.div`
	width: 100%;
	height: fit-content;
	background-color: #ffffff;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	position: relative;
	flex-direction: column;
	padding: 1rem 1rem 1rem 1rem;
	border-top: 0.07rem solid #d3d4d8;
`;

const ButtonWrapper = styled.button`
	width: 100%;
	height: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	margin: 1rem 0 0 0;
	border: none;
	background-color: transparent;
`;
