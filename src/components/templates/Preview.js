import styled from "styled-components";
import Postblock from "../organisms/Postblock";

export default function Preview() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Postblock></Postblock>
        <Postblock></Postblock>
        <Postblock></Postblock>
        <Postblock></Postblock>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 48rem;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin: 2rem 4rem 2rem 4rem;
`;
