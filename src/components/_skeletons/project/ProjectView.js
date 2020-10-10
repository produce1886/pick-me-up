import styled, { css } from "styled-components";
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
      <SkeletonMiddle height="30rem">
        <Row justifyContent="flex-end">
          <Date></Date>
        </Row>
        <Block width="24.9rem"></Block>
        <Block width="20.44rem"></Block>
      </SkeletonMiddle>
      <SkeletonBottom>
        <Row justifyContent="flex-start">
          <TagIcon
            style={{ width: "1.1rem", height: "1.1rem" }}
            fill="#232735"
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
  background-color: #f0f1f3;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props) =>
    css`
      justify-content: ${props.justifyContent};
    `};
`;

const Profile = styled.div`
  width: 2.56rem;
  height: 2.56rem;
  border-radius: 2.56rem;
  background-color: #f0f1f3;
`;

const Date = styled.div`
  width: 5rem;
  height: 0.48rem;
  border-radius: 0.12rem;
  background-color: #f0f1f3;
`;

const Block = styled.div`
  ${(props) =>
    css`
      width: ${props.width};
    `};
  height: 0.6rem;
  border-radius: 0.12rem;
  background-color: #f0f1f3;
  margin-bottom: 0.5rem;
`;
