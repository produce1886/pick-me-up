import styled from "styled-components";
import Search from "../molecules/Input/Search";
import Filter from "../molecules/Filter/Filter";
import DropdownMenu from "../molecules/Filter/DropdownMenu";
import Wrapper from "../atoms/FilterSearch";
import { useState, useEffect } from "react";
export default function FilterSearch(props) {
	const CATEGORY = [
		{ id: 0, title: "웹", selected: false, key: "category", link: "" },
		{ id: 1, title: "어플리케이션", selected: false, key: "category", link: "" },
		{ id: 2, title: "게임", selected: false, key: "category", link: "" },
		{ id: 3, title: "그래픽", selected: false, key: "category", link: "" },
		{ id: 4, title: "브랜딩", selected: false, key: "category", link: "" },
		{ id: 5, title: "소프트웨어", selected: false, key: "category", link: "" },
		{ id: 6, title: "영상", selected: false, key: "category", link: "" },
		{ id: 7, title: "임베디드", selected: false, key: "category", link: "" },
		{ id: 8, title: "제품", selected: false, key: "category", link: "" },
		{ id: 9, title: "출판", selected: false, key: "category", link: "" },
		{ id: 10, title: "퍼블리싱", selected: false, key: "category", link: "" },
		{ id: 11, title: "기타", selected: false, key: "category", link: "" },
	];
	const FIELD = [
		{id: 0, title: "기획", selected: false, key: "field", link: ""},
		{id: 1, title: "개발", selected: false, key: "field", link: ""},
		{id: 2, title: "디자인", selected: false, key: "field", link: ""}
	];
	const  REGION=[
		{id: 0, title: "서울", selected: false, key: "region", link: ""},
		{id: 1, title: "경기", selected: false, key: "region", link: ""},
		{id: 2, title: "광주", selected: false, key: "region", link: ""},
		{id: 3, title: "대구", selected: false, key: "region", link: ""},
		{id: 4, title: "대전", selected: false, key: "region", link: ""},
		{id: 5, title: "부산", selected: false, key: "region", link: ""},
		{id: 6, title: "인천", selected: false, key: "region", link: ""},
		{id: 7, title: "울산", selected: false, key: "region", link: ""},
		{id: 8, title: "세종", selected: false, key: "region", link: ""},
		{id: 9, title: "제주", selected: false, key: "region", link: ""},
		{id: 10, title: "강원", selected: false, key: "region", link: ""},
		{id: 11, title: "경남", selected: false, key: "region", link: ""},
		{id: 12, title: "경북", selected: false, key: "region", link: ""},
		{id: 13, title: "전남", selected: false, key: "region", link: ""},
		{id: 14, title: "전북", selected: false, key: "region", link: ""},
		{id: 15, title: "충남", selected: false, key: "region", link: ""},
		{id: 16, title: "충북", selected: false, key: "region", link: ""}
	]
	const PROJECTTYPE=[
		{id: 0, title: "공모전", selected: false, key: "projecttype", link: ""},
		{id: 1, title: "창업", selected: false, key: "projecttype", link: ""},
		{id: 2, title: "프로젝트", selected: false, key: "projecttype", link: ""},
		{id: 3, title: "기타", selected: false, key: "projecttype", link: ""}
	]
	const category="카테고리"
	const region="지역"
	const field="구인분야"
	const projecttype="프로젝트 종류"
	
	const [categorytitle, setCategoryTitle]=useState(category);
	const [regiontitle, setRegionTitle]=useState(region);
	const [fieldtitle, setFieldTitle]=useState(field);
	const [projecttypetitle, setProjectTypeTitle]=useState(projecttype);
	
	const [selected, setSelected]=useState(false);

	let _CATEGORY=Array.from(CATEGORY);
	let _REGION = Array.from(REGION);
	let _FIELD=Array.from(FIELD);
	let _PROJECTTYPE=Array.from(PROJECTTYPE);

	const toggleSelected=(key, id)=>{
		if (key===_CATEGORY.key){
			for (let i=0;i<_CATEGORY.length;i++){
				if(_CATEGORY[i].id===id){
					setCategoryTitle(_CATEGORY[i].title);
					alert(_CATEGORY[id].key)			
				}
			}
		}
		else if (key===_FIELD.key){
			for (let i=0;i<_FIELD.length;i++){
				if(_FIELD[i].id===id){
					setFieldTitle(_FIELD[i].title);
				}
			}
		}
		else if (key===_PROJECTTYPE.key){
			for (let i=0;i<_PROJECTTYPE.length;i++){
				if(_PROJECTTYPE[i].id===id){
					setProjectTypeTitle(_PROJECTTYPE[i].title);
					alert(_PROJECTTYPE[id].key)			
				}
			}
		}
		else if (key===_REGION.key){
			for (let i=0;i<_REGION.length;i++){
				if(_REGION[i].id===id){
					setRegionTitle(_REGION[i].title);
					alert(_REGION[id].key)			
				}
			}
		}
	}
  
	return (
		<Wrapper>
			<InnerWrapper>
				<FilterWrapper>
					<Filter title={categorytitle} CATEGORY={CATEGORY}>
						<DropdownMenu activeMenu="category" toggleSelected={toggleSelected} CATEGORY={CATEGORY}></DropdownMenu>
					</Filter>
					<Filter title={fieldtitle}>
						<DropdownMenu activeMenu="field" toggleSelected={toggleSelected} FIELD={FIELD}></DropdownMenu>
					</Filter>
					{props.type === "project" && (
						<>
							<Filter title={regiontitle}>
								<DropdownMenu activeMenu="region" toggleSelected={toggleSelected} REGION={REGION}></DropdownMenu>
							</Filter>
							<Filter title={projecttypetitle}>
								<DropdownMenu activeMenu="projecttype" toggleSelected={toggleSelected} PROJECTTYPE={PROJECTTYPE}></DropdownMenu>
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
