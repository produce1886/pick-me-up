import styled from "styled-components";
import Text from "../../atoms/Text";
import Top from "../../atoms/Modal/Top";
import Profile from "../Profile";
import Filters from "../Filter/Filters";

export default function ModalTop(props) {
	return (
		<Top>
			<Div>
				<TitleFilterWrapper>
                <Input placeholder="제목을 입력하세요" type="text"></Input>
					<Filters
						type={props.type}
						width="fit-content"
						height="1rem"
						line="1rem"
						level={1}></Filters>
				</TitleFilterWrapper>
				<Profile direction="column" size="2rem" level={2} name="name" weight="bolder"></Profile>
			</Div>
		</Top>
	);
}

const Div = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
`;
const TitleFilterWrapper = styled.div`
	width: 30rem;
	height: 100%;
	display: flex;
	align-items: left;
	flex-direction: column;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: unset;
  box-sizing: border-box;
  width: 20rem;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.6rem;
  font-weight: bolder;
  margin: 0 0 0.3rem 0;
  input::placeholder {color:#d3d4d8;}
  input::-webkit-input-placeholder {color:#d3d4d8;}
  input:-ms-input-placeholder {color:#d3d4d8;}

`;