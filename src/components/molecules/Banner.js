import styled from "styled-components";
import Wrapper from "../atoms/Banner/Item";

export default function Item() {
  return (
    <Wrapper color="#f0f8fd">
      <InnerWrapper>프로젝트</InnerWrapper>
    </Wrapper>
  );
}

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 48rem;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
