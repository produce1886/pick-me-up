import styled from "styled-components";
import Search from "../molecules/Input/Search";
import Filter from "../molecules/Filter/Filter";
import DropdownMenu from "../molecules/Filter/DropdownMenu";
import Wrapper from "../atoms/FilterSearch";
import { useState, useEffect } from "react";
export default function FilterSearch(props) {
	const CATEGORY = [
		{ key: 0, title: "웹", selected: false, type: "category", link: "" },
		{ key: 1, title: "어플리케이션", selected: false, type: "category", link: "" },
		{ key: 2, title: "게임", selected: false, type: "category", link: "" },
		{ key: 3, title: "그래픽", selected: false, type: "category", link: "" },
		{ key: 4, title: "브랜딩", selected: false, type: "category", link: "" },
		{ key: 5, title: "소프트웨어", selected: false, type: "category", link: "" },
		{ key: 6, title: "영상", selected: false, type: "category", link: "" },
		{ key: 7, title: "임베디드", selected: false, type: "category", link: "" },
		{ key: 8, title: "제품", selected: false, type: "category", link: "" },
		{ key: 9, title: "출판", selected: false, type: "category", link: "" },
		{ key: 10, title: "퍼블리싱", selected: false, type: "category", link: "" },
		{ key: 11, title: "기타", selected: false, type: "category", link: "" },
	];
	const FIELD = [
		{ key: 0, title: "기획", selected: false, type: "field", link: "" },
		{ key: 1, title: "개발", selected: false, type: "field", link: "" },
		{ key: 2, title: "디자인", selected: false, type: "field", link: "" },
	];
	const REGION = [
		{ key: 0, title: "서울", selected: false, type: "region", link: "" },
		{ key: 1, title: "경기", selected: false, type: "region", link: "" },
		{ key: 2, title: "광주", selected: false, type: "region", link: "" },
		{ key: 3, title: "대구", selected: false, type: "region", link: "" },
		{ key: 4, title: "대전", selected: false, type: "region", link: "" },
		{ key: 5, title: "부산", selected: false, type: "region", link: "" },
		{ key: 6, title: "인천", selected: false, type: "region", link: "" },
		{ key: 7, title: "울산", selected: false, type: "region", link: "" },
		{ key: 8, title: "세종", selected: false, type: "region", link: "" },
		{ key: 9, title: "제주", selected: false, type: "region", link: "" },
		{ key: 10, title: "강원", selected: false, type: "region", link: "" },
		{ key: 11, title: "경남", selected: false, type: "region", link: "" },
		{ key: 12, title: "경북", selected: false, type: "region", link: "" },
		{ key: 13, title: "전남", selected: false, type: "region", link: "" },
		{ key: 14, title: "전북", selected: false, type: "region", link: "" },
		{ key: 15, title: "충남", selected: false, type: "region", link: "" },
		{ key: 16, title: "충북", selected: false, type: "region", link: "" },
	];
	const PROJECTTYPE = [
		{ key: 0, title: "공모전", selected: false, type: "projecttype", link: "" },
		{ key: 1, title: "창업", selected: false, type: "projecttype", link: "" },
		{ key: 2, title: "프로젝트", selected: false, type: "projecttype", link: "" },
		{ key: 3, title: "기타", selected: false, type: "projecttype", link: "" },
	];
	const category = "카테고리";
	const region = "지역";
	const field = "구인분야";
	const projecttype = "프로젝트 종류";

	return (
		<Wrapper>
			<InnerWrapper>
				<FilterWrapper>
					<Filter title={category} data={CATEGORY} activeMenu="category"></Filter>
					<Filter title={field} activeMenu="field" data={FIELD}></Filter>
					{props.type === "project" && (
						<>
							<Filter title={region} activeMenu="region" data={REGION}></Filter>
							<Filter title={projecttype} activeMenu="projecttype" data={PROJECTTYPE}></Filter>
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
