import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import Text from "../atoms/Text";

function FilterInfo(props) {
  return (
    <Wrapper>
      <>
        <Textdiv>
          <Text level={0} color={Colors.DEEP_GREY} name="카테고리">
            {props.category}
          </Text>
        </Textdiv>
        <Textdiv>
          <Text level={0} color={Colors.DEEP_GREY}>
            |
          </Text>
        </Textdiv>
        <Textdiv>
          <Text level={0} color={Colors.DEEP_GREY} name="구인분야">
            {props.field}
          </Text>
        </Textdiv>
      </>
      {props.modalType === "project" && (
        <>
          <Textdiv>
            <Text level={0} color={Colors.DEEP_GREY}>
              |
            </Text>
          </Textdiv>
          <Textdiv>
            <Text level={0} color={Colors.DEEP_GREY} name="지역">
              {props.region}
            </Text>
          </Textdiv>
          <Textdiv>
            <Text level={0} color={Colors.DEEP_GREY}>
              |
            </Text>
          </Textdiv>
          <Text level={0} color={Colors.DEEP_GREY} name="프로젝트 종류">
            {props.projectCategory}
          </Text>
        </>
      )}
    </Wrapper>
  );
}

export default React.memo(FilterInfo);

const Wrapper = styled.div`
  width: fit-content;
  height: 0.72rem;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Textdiv = styled.div`
  width: fit-content;
  height: 0.72rem;
  display: flex;
  box-sizing: border-box;
  margin: 0 0.2rem 0 0;
`;
