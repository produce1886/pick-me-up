import styled from "styled-components";
import Search from "../molecules/Input/Search";
import Filter from "../molecules/Filter/Filter";
import Wrapper from "../atoms/FilterSearch";
import Item from "../molecules/Filter/Item"
export default function FilterSearch(props) {
	
	const category = "카테고리";
	const region = "지역";
	const field = "구인분야";
	const projecttype = "프로젝트 종류";

	return (
		<Wrapper>
			<InnerWrapper>
				<FilterWrapper>
					<Filter title={category} activeMenu="category" data={Item.CATEGORY}></Filter>
					<Filter title={field} activeMenu="field" data={Item.FIELD}></Filter>
					{props.type === "project" && (
						<>
							<Filter title={region} activeMenu="region" data={Item.REGION}></Filter>
							<Filter title={projecttype} activeMenu="projecttype" data={Item.PROJECTTYPE}></Filter>
						</>
					)}
				</FilterWrapper>
				<Search></Search>
			</InnerWrapper>
		</Wrapper>
	);
}

const FilterWrapper = styled.div`
	width: 23rem;
	height: 1.6rem;
	justify-content: left;
	align-items: center;
	display: flex;
	flex-direction: row;
	margin: 0 15rem 0 0rem;
`;
const InnerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	box-sizing: border-box;
	margin: 0 4rem 0 4rem;
	max-width: 1200px;
	width: 48rem;
`;
