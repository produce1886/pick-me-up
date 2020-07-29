import styled from "styled-components";
import ItemWrapper from "../Filter/FilterItem";
import Hover from "../../atoms/Filter";
import Wrapper from "../../atoms/DropdownMenu";
import Text from "../../atoms/Text";
import { useState } from "react";

export default function DropdownMenu(props) {
	const CATEGORY = [
		{ id: 0, title: "웹", selected: false, key: "category", link: ""},
		{ id: 1, title: "어플리케이션", selected: false, key: "category", link: ""},
		{ id: 2, title: "게임", selected: false, key: "category", link: ""},
		{ id: 3, title: "그래픽", selected: false, key: "category", link: ""},
		{ id: 4, title: "브랜딩", selected: false, key: "category", link: ""},
		{ id: 5, title: "소프트웨어", selected: false, key: "category", link: ""},
		{ id: 6, title: "영상", selected: false, key: "category",link:""},
		{ id: 7, title: "임베디드", selected: false, key: "category",link:""},
		{ id: 8, title: "제품", selected: false, key: "category",link:""},
		{ id: 9, title: "출판", selected: false, key: "category",link:""},
		{ id: 10, title: "퍼블리싱", selected: false, key: "category",link:""},
		{ id: 11, title: "기타", selected: false, key: "category",link:""},
	];
	const [category_title,setCategoryTitle]=useState("카테고리");
	if (props.activeMenu === "align") {
		return (
			<Wrapper zIndex="102">
				<Hover
					width="6.2rem"
					height="1.8rem"
					border="0rem"
					borderColor="#ffffff"
					backgroundColor="#ffffff">
					<Text line="1.08rem" level={3} color="#9c69e2" align="left">
						최신순
					</Text>
				</Hover>
				<ItemWrapper link="" text="조회순"></ItemWrapper>
				<ItemWrapper link="" text="댓글순"></ItemWrapper>
			</Wrapper>
		);
	} else if (props.activeMenu === "category") {
		let lists=[];
		return (
			<Wrapper zIndex="200">
				<Hover
					width="6.2rem"
					height="1.6rem"
					border="0rem"
					borderColor="#ffffff"
					backgroundColor="#ffffff">
					<Text line="1.08rem" level={3} color="#9c69e2" align="left">
						전체보기
					</Text>
				</Hover>
				{
					CATEGORY.map(value => (
						<ItemWrapper link={value.link} text={value.title} selected={value.selected} key={value.key} id={value.id}></ItemWrapper>
					))
				}
				
			</Wrapper>
		);
	} else if (props.activeMenu === "region") {
		return (
			<Wrapper zIndex="200">
				<Hover
					width="6.2rem"
					height="1.6rem"
					border="0rem"
					borderColor="#ffffff"
					backgroundColor="#ffffff">
					<Text line="1.08rem" level={3} color="#9c69e2" align="left">
						전체보기
					</Text>
				</Hover>
				<ItemWrapper link="" text="서울"></ItemWrapper>
				<ItemWrapper link="" text="경기"></ItemWrapper>
				<ItemWrapper link="" text="광주"></ItemWrapper>
				<ItemWrapper link="" text="대구"></ItemWrapper>
				<ItemWrapper link="" text="대전"></ItemWrapper>
				<ItemWrapper link="" text="부산"></ItemWrapper>
				<ItemWrapper link="" text="인천"></ItemWrapper>
				<ItemWrapper link="" text="울산"></ItemWrapper>
				<ItemWrapper link="" text="세종"></ItemWrapper>
				<ItemWrapper link="" text="제주"></ItemWrapper>
				<ItemWrapper link="" text="강원"></ItemWrapper>
				<ItemWrapper link="" text="경남"></ItemWrapper>
				<ItemWrapper link="" text="경북"></ItemWrapper>
				<ItemWrapper link="" text="전남"></ItemWrapper>
				<ItemWrapper link="" text="전북"></ItemWrapper>
				<ItemWrapper link="" text="충남"></ItemWrapper>
				<ItemWrapper link="" text="충북"></ItemWrapper>
			</Wrapper>
		);
	} else if (props.activeMenu === "field") {
		return (
			<Wrapper zIndex="200">
				<Hover
					width="6.2rem"
					height="1.6rem"
					border="0rem"
					borderColor="#ffffff"
					backgroundColor="#ffffff">
					<Text line="1.08rem" level={3} color="#9c69e2" align="left">
						전체보기
					</Text>
				</Hover>
				<ItemWrapper link="" text="기획"></ItemWrapper>
				<ItemWrapper link="" text="개발"></ItemWrapper>
				<ItemWrapper link="" text="디자인"></ItemWrapper>
			</Wrapper>
		);
	} else if (props.activeMenu === "projecttype") {
		return (
			<Wrapper zIndex="200">
				<Hover
					width="6.2rem"
					height="1.6rem"
					border="0rem"
					borderColor="#ffffff"
					backgroundColor="#ffffff">
					<Text line="1.08rem" level={3} color="#9c69e2" align="left">
						전체보기
					</Text>
				</Hover>
				<ItemWrapper link="" text="공모전"></ItemWrapper>
				<ItemWrapper link="" text="창업"></ItemWrapper>
				<ItemWrapper link="" text="프로젝트"></ItemWrapper>
				<ItemWrapper link="" text="기타"></ItemWrapper>
			</Wrapper>
		);
	}
}
