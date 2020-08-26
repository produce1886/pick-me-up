import styled from "styled-components";
import PortfolioBlock from "../organisms/PortfolioBlock";
import BottomButtons from "../organisms/BottomButtons";

export default function Portfoliolist(props) {
  return (
    <>
      <Wrapper></Wrapper>
      <BottomButtons></BottomButtons>
    </>
  );
}

const Wrapper = styled.div`
  width: 48rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 2rem 0;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0.4rem 0 0.4rem 0;
  justify-content: flex-start;
`;
