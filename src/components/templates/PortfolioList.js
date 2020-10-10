import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import PortfolioBlock from "../organisms/PortfolioBlock";
import MoreListButton from "../molecules/Button/LoadMore";
import NoResult from "../molecules/NoResult";
import Skeleton from "../_skeletons/portfolio/PortfolioBlock";

function PortfolioList(props) {
  const { category, field, query, sort, reload } = props;
  const [portfolio, setPortfolio] = useState([]);
  const [limit, setLimit] = useState(15);
  const { isLoading, dataNum } = getPortfolioList(
    category,
    field,
    query,
    sort,
    setPortfolio,
    limit,
    reload
  );

  const renderBlocks = portfolio.map((item, index) => (
    <PortfolioBlock key={index} item={item}></PortfolioBlock>
  ));

  const loadMoreHandler = useCallback(() => {
    setLimit(limit + 15);
  }, [limit]);

  if (isLoading) {
    return (
      <Wrapper>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Wrapper>
    );
  }

  if (!isLoading && portfolio.length === 0) {
    return (
      <Wrapper>
        <NoResult></NoResult>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>{!isLoading && portfolio.length > 0 && renderBlocks}</Wrapper>
      <MoreWrapper>
        <MoreInnerWrapper>
          {portfolio.length < dataNum && (
            <MoreListButton onClick={loadMoreHandler}></MoreListButton>
          )}
        </MoreInnerWrapper>
      </MoreWrapper>
    </>
  );
}

export default React.memo(PortfolioList);

const getPortfolioList = (
  category,
  field,
  query,
  sort,
  setPortfolio,
  limit,
  reload
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataNum, setDataNum] = useState(0);
  const sortColumn = {
    최신순: "createdDate",
    댓글순: "commentsNum",
    조회순: "viewNum",
  };

  const body = {
    page: 0,
    size: limit,
    sortColumn: sortColumn[sort],
    category,
    huntingField: field,
    keyword: query,
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.post(
          `${process.env.API_HOST}/portfolios/list`,
          body
        );
        setPortfolio(result.data.pagelist);
        setDataNum(result.data.nrOfElements);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category, field, query, sort, limit, reload]);
  return { isLoading, dataNum };
};

const Wrapper = styled.div`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  margin: 2rem 0 2rem 0;
`;

const MoreInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  max-width: 92%;
  width: 48rem;
  height: 2rem;
  position: relative;
  justify-content: center;
  align-itmes: center;
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
`;
