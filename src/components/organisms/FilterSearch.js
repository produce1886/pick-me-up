import styled from "styled-components";
import Search from "../molecules/Input/Search";
import Filters from "../molecules/Filter/Filters";
import Wrapper from "../atoms/FilterSearch";
export default function FilterSearch(props) {
	const category = "카테고리";
	const region = "지역";
	const field = "구인분야";
	const projecttype = "프로젝트 종류";

	return (
		<Wrapper>
			<InnerWrapper>
				<Filters
					height="1.6rem"
					width="fit-content"
					line="1.08rem"
					level={3}
					type={props.type}></Filters>
				<Search></Search>
			</InnerWrapper>
		</Wrapper>
	);
}

const InnerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	box-sizing: border-box;
	margin: 0 4rem 0 4rem;
	max-width: 1200px;
	width: 48rem;
`;
