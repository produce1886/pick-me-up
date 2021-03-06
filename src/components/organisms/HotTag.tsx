import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import HotTagHooks from "@src/lib/hooks/HotTag";
import duplicate from "@src/lib/utils/duplicate";
import Icon from "../atoms/Icon/Tag";
import Text from "../atoms/Text";
import Tag from "../molecules/Tag";
import Skeleton from "../_skeletons/main/Tag";

export default function HotTag() {
  const { isLoading, isError, data } = HotTagHooks.useHotTagGetApi([]);

  return (
    <Wrapper>
      <InnerWrapper>
        <Icon
          style={{ width: "2rem", height: "2rem" }}
          fill={Colors.DEEP_PURPLE}
        ></Icon>
        <Text color={Colors.BLACK} level={12} weight="bold">
          HOT TAG
        </Text>
        <Text color={Colors.DEEP_GREY} level={1}>
          지금 이시간 가장 인기 있는 태그를 확인하세요
        </Text>
        <Row>
          {isLoading && duplicate(Skeleton, 10)}
          {!isLoading &&
            !isError &&
            data &&
            data.map((item) => <Tag key={item.id} text={item.tagName}></Tag>)}
        </Row>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem 0 2rem 0;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  max-width: 92%;
  width: 48rem;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

const Row = styled.div`
  margin-top: 1.2rem;
  display: flex;
`;
