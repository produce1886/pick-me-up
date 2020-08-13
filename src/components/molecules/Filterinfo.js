import styled from "styled-components";
import Text from "../atoms/Text";
import Row from "../atoms/Row";

export default function Filterinfo(props) {
	return (
		<Wrapper>
			<Div>
				<Text level={0} color="#8b90a0" name="카테고리">
					카테고리
				</Text>
				<Text level={0} color="#8b90a0">
					|
				</Text>
				<Text level={0} color="#8b90a0" name="구인분야">
					구인분야
				</Text>
			</Div>
			{props.type === "project" && (
				<>
					<Text level={0} color="#8b90a0">
						|
					</Text>
					<Text level={0} color="#8b90a0" name="지역">
						지역
					</Text>
					<Text level={0} color="#8b90a0">
						|
					</Text>
					<Text level={0} color="#8b90a0" name="프로젝트 종류">
						프로젝트 종류
					</Text>
				</>
			)}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 12.16rem;
	height: 0.72rem;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	justify-content: space-between;
`;
const Div = styled.div`
	width: 5.5rem;
	height: 0.72rem;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	justify-content: space-between;
`;
