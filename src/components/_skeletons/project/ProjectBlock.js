import Wrapper from "src/components/atoms/ProjectBlock";
import styled, { css } from "styled-components";

export default function Skeleton() {
  return (
    <Wrapper>
      <Top>
        <Title></Title>
        <Row>
          <Profile></Profile>
          <Name></Name>
        </Row>
        <Row justifyContent="flex-end">
          <Date></Date>
        </Row>
      </Top>
      <Bottom>
        <Block width="19.6rem"></Block>
        <Block width="17.4rem"></Block>
      </Bottom>
    </Wrapper>
  );
}

const Top = styled.div`
  width: 100%;
  height: 4.8rem;
  border-bottom: 0.04rem solid #f0f1f3;
  padding: 0.8rem 1.2rem 0.8rem 1.2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 100%;
  height: 0.8rem;
  border-radius: 0.12rem;
  background-color: #f0f1f3;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props) =>
    css`
      justify-content: ${props.justifyContent};
    `};
`;

const Profile = styled.div`
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 0.6rem;
  background-color: #f0f1f3;
`;

const Name = styled.div`
  width: 2.5rem;
  height: 0.6rem;
  border-radius: 0.12rem;
  background-color: #f0f1f3;
  margin-left: 0.3rem;
`;
const Date = styled.div`
  width: 3.28rem;
  height: 0.48rem;
  border-radius: 0.12rem;
  background-color: #f0f1f3;
`;
const Bottom = styled.div`
  width: 100%;
  padding: 0.8rem 1rem 0 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Block = styled.div`
  ${(props) =>
    css`
      width: ${props.width};
    `};
  height: 0.5rem;
  border-radius: 0.12rem;
  background-color: #f0f1f3;
  margin-bottom: 0.5rem;
`;