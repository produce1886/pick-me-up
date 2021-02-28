import React from "react";
import styled from "styled-components";
import duplicate from "@src/lib/utils/duplicate";
import PortfolioBlock from "../PortfolioBlock";
import NoResult from "../../molecules/NoResult";
import Skeleton from "../../_skeletons/portfolio/PortfolioBlock";

function Portfolio(props) {
  const renderBlocks =
    props.data.portfolioList &&
    props.data.portfolioList.map((item) => (
      <PortfolioBlock key={item.id} {...item}></PortfolioBlock>
    ));

  if (props.isLoading) {
    return <Wrapper>{duplicate(Skeleton, 10)}</Wrapper>;
  }

  if ((props.data && props.data.portfolioList.length === 0) || props.isError) {
    return (
      <Wrapper>
        <NoResult></NoResult>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>{renderBlocks}</Wrapper>
    </>
  );
}

export default React.memo(Portfolio);

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  box-sizing: border-box;
  margin: 1.4rem 0;
`;
