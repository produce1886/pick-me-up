import styled from "styled-components";
import ItemWrapper from "../Filter/FilterItem";
import Hover from "../../atoms/Filter";
import Wrapper from "../../atoms/DropdownMenu";
import Text from "../../atoms/Text";
import { useState, useRef, useEffect } from "react";
export default function DropdownMenu(props) {
	if (props.activeMenu === "align") {
		return (
			<Wrapper height="fit-content">
				<Hover
					width="6.2rem"
					height="1.6rem"
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
		return (
			<Wrapper height="fit-content">
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
				<ItemWrapper link="" text="어플리케이션"></ItemWrapper>
				<ItemWrapper link="" text="게임"></ItemWrapper>
				<ItemWrapper link="" text="그래픽"></ItemWrapper>
				<ItemWrapper link="" text="브랜딩"></ItemWrapper>
				<ItemWrapper link="" text="소프트웨어"></ItemWrapper>
				<ItemWrapper link="" text="영상"></ItemWrapper>
				<ItemWrapper link="" text="임베디드"></ItemWrapper>
				<ItemWrapper link="" text="제품"></ItemWrapper>
				<ItemWrapper link="" text="출판"></ItemWrapper>
				<ItemWrapper link="" text="퍼블리싱"></ItemWrapper>
				<ItemWrapper link="" text="기타"></ItemWrapper>
			</Wrapper>
		);
	} else if (props.activeMenu === "region") {
		return (
			<Wrapper height="fit-content">
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
				<ItemWrapper link="" text="어플리케이션"></ItemWrapper>
				<ItemWrapper link="" text="게임"></ItemWrapper>
				<ItemWrapper link="" text="게임"></ItemWrapper>
			</Wrapper>
		);
	} else if (props.activeMenu === "field") {
		return (
			<Wrapper height="fit-content">
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
			<Wrapper height="fit-content">
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
