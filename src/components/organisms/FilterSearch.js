import styled from "styled-components";
import Search from "../molecules/Input/Search";
import Filter from "../molecules/Filter/Filter";
import DropdownMenu from "../molecules/Filter/DropdownMenu";
import Wrapper from "../atoms/FilterSearch";
export default function FilterSearch(props) {
	return (
		<Wrapper>
			<InnerWrapper>
				<FilterWrapper>
					<Filter title="카테고리">
						<DropdownMenu activeMenu="category"></DropdownMenu>
					</Filter>
					<Filter title="구인분야">
						<DropdownMenu activeMenu="field"></DropdownMenu>
					</Filter>
					{props.type === "project" && (
						<>
							<Filter title="지역">
								<DropdownMenu activeMenu="region"></DropdownMenu>
							</Filter>
							<Filter title="프로젝트 종류">
								<DropdownMenu activeMenu="projecttype"></DropdownMenu>
							</Filter>
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
