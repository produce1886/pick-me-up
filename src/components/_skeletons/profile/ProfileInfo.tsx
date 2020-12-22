import styled, { css } from "styled-components";
import Colors from "@colors";

export default function SkeletonBody() {
  return (
    <>
      <Wrapper>
        <BodyWrapper>
          <Block width="0.8rem"></Block>
          <Block width="32.56rem"></Block>
          <Block width="27.76rem"></Block>
        </BodyWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const Block = styled.div`
  ${(props: { width: string }) =>
    css`
      width: ${props.width};
    `};
  height: 0.6rem;
  border-radius: 0.12rem;
  background-color: ${Colors.LIGHT_GREY};
  margin-bottom: 0.5rem;
`;

const BodyWrapper = styled.div`
  width: 48rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 20rem;
  margin: 0 4rem 0 4rem;
  align-items: center;
  justify-content: center;
  max-width: 92%;
`;
