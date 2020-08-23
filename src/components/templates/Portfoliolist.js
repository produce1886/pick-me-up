import styled from "styled-components";
import Portfolioblock from "../organisms/PortfolioBlock";

export default function Portfoliolist(props) {
  return (
    <Wrapper>
      <Div>
        <Portfolioblock openView={props.openView}></Portfolioblock>
        <Portfolioblock></Portfolioblock>
        <Portfolioblock></Portfolioblock>
      </Div>
      <Div>
        <Portfolioblock></Portfolioblock>
        <Portfolioblock></Portfolioblock>
        <Portfolioblock></Portfolioblock>
      </Div>
      <Div>
        <Portfolioblock></Portfolioblock>
        <Portfolioblock></Portfolioblock>
        <Portfolioblock></Portfolioblock>
      </Div>
      <Div>
        <Portfolioblock></Portfolioblock>
        <Portfolioblock></Portfolioblock>
        <Portfolioblock></Portfolioblock>
      </Div>
      <Div>
        <Portfolioblock></Portfolioblock>
        <Portfolioblock></Portfolioblock>
        <Portfolioblock></Portfolioblock>
      </Div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 48rem;
  height: 80rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 2rem 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.45rem 0 0.45rem 0;
`;
