import styled from "styled-components";
import ItemWrapper from "../Filter/FilterItem";
import Hover from "../../atoms/Filter/Filter";
import Wrapper from "../../atoms/Filter/DropDownMenu";
import Text from "../../atoms/Text";
import { useState } from "react";

export default function DropdownMenu(props) {
  return (
    <Wrapper zIndex={props.activeMenu === "align" ? "102" : "200"}>
      <Hover
        width="6.2rem"
        height="1.8rem"
        border="0rem"
        borderColor="#ffffff"
        backgroundColor="#ffffff"
      >
        <Text line="1.08rem" level={3} color="#9c69e2" align="left">
          {props.activeMenu === "align" ? "최신순" : "전체보기"}
        </Text>
      </Hover>
      {props.data.map((value) => (
        <ItemWrapper
          item={value}
          toggleSelected={props.toggleSelected}
        ></ItemWrapper>
      ))}
    </Wrapper>
  );
}
