import React, { useState, useCallback } from "react";
import styled from "styled-components";
import PortfolioHooks from "@src/lib/hooks/Portfolio";
import duplicate from "@src/lib/utils/duplicate";
import PortfolioBlock from "../organisms/PortfolioBlock";
import MoreListButton from "../molecules/Button/LoadMore";
import NoResult from "../molecules/NoResult";
import Skeleton from "../_skeletons/portfolio/PortfolioBlock";

type PortfolioListProps = {
  category: string;
  field: string;
  query: string;
  sort: string;
  reload: number;
};

function PortfolioList(props: PortfolioListProps) {
  const { category, field, query, sort, reload } = props;
  const [limit, setLimit] = useState(15);
  const { isLoading, isError, data } = PortfolioHooks.usePortfolioListGetApi([
    category,
    field,
    query,
    sort,
    limit,
    reload,
  ]);

  const loadMoreHandler = useCallback(() => {
    setLimit(limit + 15);
  }, [limit]);

  const renderBlocks =
    data &&
    data.pagelist.map((item) => (
      <PortfolioBlock key={item.id} {...item}></PortfolioBlock>
    ));

  if (isLoading) {
    return <Wrapper>{duplicate(Skeleton, 15)}</Wrapper>;
  }

  if ((data && data.pagelist.length === 0) || isError) {
    return (
      <Wrapper>
        <NoResult></NoResult>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>{renderBlocks}</Wrapper>
      <MoreWrapper>
        {data && data.pagelist.length < data.nrOfElements && (
          <MoreListButton onClick={loadMoreHandler}></MoreListButton>
        )}
      </MoreWrapper>
    </>
  );
}

export default React.memo(PortfolioList);

const Wrapper = styled.div`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  margin: 2rem 0 2rem 0;
`;

const MoreWrapper = styled.div`
  background-color: transparent;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  box-sizing: border-box;
  display: flex;
  padding: 0 1.8rem 0 0;
  margin-bottom: 1.6rem;
`;
