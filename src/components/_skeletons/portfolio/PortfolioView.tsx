import styled, { css } from "styled-components";
import Colors from "@colors";
import SkeletonTop from "../../atoms/Modal/Top";
import SkeletonMiddle from "../../atoms/Modal/Middle";
import SkeletonBottom from "../../atoms/Modal/Bottom";
import TagIcon from "../../atoms/Icon/Tag";

export default function Skeleton() {
  return (
    <>
      <SkeletonTop>
        <Row justifyContent="space-between">
          <Title></Title>
          <Profile></Profile>
        </Row>
      </SkeletonTop>
      <SkeletonMiddle>
        <Row justifyContent="flex-end">
          <Date></Date>
        </Row>
        <Block></Block>
      </SkeletonMiddle>
      <SkeletonBottom>
        <Row justifyContent="flex-start">
          <TagIcon
            style={{ width: "1.1rem", height: "1.1rem" }}
            fill={Colors.BLACK}
          ></TagIcon>
        </Row>
      </SkeletonBottom>
    </>
  );
}

const Title = styled.div`
  width: 21.2rem;
  height: 1.4rem;
  border-radius: 0.12rem;
  background-color: ${Colors.LIGHT_GREY};
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props: { justifyContent: string }) =>
    css`
      justify-content: ${props.justifyContent};
    `};
`;

const Profile = styled.div`
  width: 2.56rem;
  height: 2.56rem;
  border-radius: 2.56rem;
  background-color: ${Colors.LIGHT_GREY};
`;

const Date = styled.div`
  width: 5rem;
  height: 0.48rem;
  border-radius: 0.12rem;
  background-color: ${Colors.LIGHT_GREY};
  margin-bottom: 1rem;
`;

const Block = styled.div`
  width: 36.24;
  height: 36.24rem;
  border-radius: 0.4rem;
  background-color: ${Colors.LIGHT_GREY};
  margin-bottom: 0.5rem;
`;
