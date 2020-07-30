import styled from "styled-components";
import ItemWrapper from "../Filter/FilterItem";
import Hover from "../../atoms/Filter";
import Wrapper from "../../atoms/DropdownMenu";
import Text from "../../atoms/Text";
import { useState } from "react";

export default function DropdownMenu(props) {
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
				{props.ALIGN.map((value) => (
					<ItemWrapper
						link={value.link}
						text={value.title}
						selected={value.selected}
						key={value.key}
						id={value.id}
						toggleSelected={props.toggleSelected}></ItemWrapper>
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
				{props.CATEGORY.map((value) => (
					<ItemWrapper
						link={value.link}
						text={value.title}
						selected={value.selected}
						key={value.key}
						id={value.id}
						toggleSelected={props.toggleSelected}></ItemWrapper>
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
				{props.REGION.map((value) => (
					<ItemWrapper
						link={value.link}
						text={value.title}
						selected={value.selected}
						key={value.key}
						id={value.id}
						toggleSelected={props.toggleSelected}></ItemWrapper>
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
				{props.FIELD.map((value) => (
					<ItemWrapper
						link={value.link}
						text={value.title}
						selected={value.selected}
						key={value.key}
						id={value.id}
						toggleSelected={props.toggleSelected}></ItemWrapper>
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
				{props.PROJECTTYPE.map((value) => (
					<ItemWrapper
						link={value.link}
						text={value.title}
						selected={value.selected}
						key={value.key}
						id={value.id}
						toggleSelected={props.toggleSelected}></ItemWrapper>
				))}
			</Wrapper>
		);
	}
}
