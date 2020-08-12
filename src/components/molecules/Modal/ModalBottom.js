import styled from "styled-components";
import Text from "../../atoms/Text";
import Bottom from "../../atoms/Modal/Bottom";
import TagButton from "../Button/Tag";
import Icon from "../../atoms/Icon/Tag";
import IconX from "../../atoms/Icon/X";
import WriteBlock from "../Button/WriteBlock";
export default function ModalBottom(props) {
	return (
		<Bottom>
			<Div>
				<IconTextWrapper>
					<Icon
						style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }}
						fill="#232735"></Icon>
					<Input placeholder="태그를 추가하세요" type="text"></Input>
				</IconTextWrapper>
				<TagWrapper>
					<TagButton ismodal={props.ismodal} text="Tag text" link="">
						<IconX
							style={{ width: "0.5rem", height: "0.5rem", margin: "0.2rem 0 0 0" }}
							fill="#232735"></IconX>
					</TagButton>
					<TagButton ismodal={props.ismodal} text="Tag text" link="">
						<IconX
							style={{ width: "0.5rem", height: "0.5rem", margin: "0.2rem 0 0 0" }}
							fill="#232735"></IconX>
					</TagButton>
				</TagWrapper>

				<ButtonWrapper>
					<WriteBlock link=""></WriteBlock>
				</ButtonWrapper>
			</Div>
		</Bottom>
	);
}

const ButtonWrapper = styled.div`
	width: fit-content;
	height: 2rem;
	display: flex;
	align-items: right;
	justify-content: right;
	margin: 0 0 0 33rem;
`;

const Div = styled.div`
	width: 100%;
	height: 1rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
`;
const TagWrapper = styled.div`
	width: 100%;
	height: 1.5rem;
	display: flex;
	align-items: left;
	flex-direction: row;
	margin: 0 0 0 2.5rem;
`;

const IconTextWrapper = styled.div`
	width: 100%;
	height: 1rem;
	display: flex;
	align-items: left;
	flex-direction: row;
`;

const Input = styled.input`
	background-color: transparent;
	border: none;
	padding: unset;
	box-sizing: border-box;
	width: 10rem;
	outline: none;
	font-family: "Noto Sans KR", sans-serif;
	font-size: 0.64rem;
`;
