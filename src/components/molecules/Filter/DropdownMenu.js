import styled from "styled-components";
import ItemWrapper from "../Filter/FilterItem";
import Hover from "../../atoms/Filter";
import Wrapper from "../../atoms/DropdownMenu";
import Text from "../../atoms/Text";
import { useState } from "react";

export default function DropdownMenu(props) {
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
		{id: 0, title: "창업", selected: false, key: "projecttype", link: ""},
		{id: 0, title: "프로젝트", selected: false, key: "projecttype", link: ""},
		{id: 0, title: "기타", selected: false, key: "projecttype", link: ""}
	]
	const ALIGN=[
		{id: 0, title: "조회순", selected: false, key: "align", link: ""},
		{id: 1, title: "댓글순", selected: false, key: "align", link: ""},
	]
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
				{ALIGN.map((value) => (
					<ItemWrapper
						link={value.link}
						text={value.title}
						selected={value.selected}
						key={value.key}
						id={value.id}></ItemWrapper>
				))}
			</Wrapper>
		);
	} else if (props.activeMenu === "category") {
		let lists = [];
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
				{CATEGORY.map((value) => (
					<ItemWrapper
						link={value.link}
						text={value.title}
						selected={value.selected}
						key={value.key}
						id={value.id}></ItemWrapper>
				))}
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
				{REGION.map((value) => (
					<ItemWrapper
						link={value.link}
						text={value.title}
						selected={value.selected}
						key={value.key}
						id={value.id}></ItemWrapper>
				))}
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
				{FIELD.map((value) => (
					<ItemWrapper
						link={value.link}
						text={value.title}
						selected={value.selected}
						key={value.key}
						id={value.id}></ItemWrapper>
				))}
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
				{PROJECTTYPE.map((value) => (
					<ItemWrapper
						link={value.link}
						text={value.title}
						selected={value.selected}
						key={value.key}
						id={value.id}></ItemWrapper>
				))}
			</Wrapper>
		);
	}
}
