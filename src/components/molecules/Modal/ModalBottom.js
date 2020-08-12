import styled from "styled-components";
import Text from "../../atoms/Text";
import Bottom from "../../atoms/Modal/Bottom";
import TagButton from "../Button/Tag";
import Icon from "../../atoms/Icon/Tag";
export default function ModalBottom(props) {
	return (
		<Bottom>
			<Div>
				<IconTextWrapper>
					<Icon style={{ width: "1rem", height: "1rem", marginRight: "0.5rem"}} fill="#232735"></Icon>
					<Text color="#8b90a0" level={3}>
						태그를 추가하세요 
					</Text>
				</IconTextWrapper>
				<TagWrapper>
					<TagButton
						backgroundColor="#f0f1f3"
						text="Tag text"
						textColor="#232735"
						link=""></TagButton>
					<TagButton
						backgroundColor="#f0f1f3"
						text="Tag text"
						textColor="#232735"
						link=""></TagButton>
				</TagWrapper>
			</Div>
		</Bottom>
	);
}

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
	height: 1rem;
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