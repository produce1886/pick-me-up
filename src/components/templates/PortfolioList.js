import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import PortfolioBlock from "../organisms/PortfolioBlock";
import BottomButtons from "../organisms/BottomButtons";
import NoResult from "../molecules/NoResult";
import Skeleton from "../_skeletons/portfolio/PortfolioBlock";

export default function Portfoliolist(props) {
  const { category, field, query, sort, reload } = props;
  const [skip, setSkip] = useState(0);
  const [portfolio, setPortfolio] = useState([]);
  const [limit, setLimit] = useState(15);
  const [loadMore, setLoadMore] = useState(false);
  const { isLoading, dataNum } = getPortfolioList(
    category,
    field,
    query,
    sort,
    portfolio,
    setPortfolio,
    skip,
    limit,
    loadMore,
    setLoadMore,
    reload
  );

  const renderBlocks = portfolio.map((item, index) => (
    <PortfolioBlock key={index} item={item}></PortfolioBlock>
  ));

  const loadMoreHandler = () => {
    setLoadMore(true);
    setSkip(skip + 1);
  };

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
      <BottomButtons
        onClick={loadMoreHandler}
        loadMoreVisible={portfolio.length < dataNum}
      ></BottomButtons>
    </>
  );
}

const getPortfolioList = (
  category,
  field,
  query,
  sort,
  portfolio,
  setPortfolio,
  skip,
  limit,
  loadMore,
  setLoadMore,
  reload
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataNum, setDataNum] = useState(0);
  const sortColumn = {
    최신순: "createdDate",
    댓글순: "commentsNum",
    조회순: "viewNum",
  };

  let body = {
    page: 0,
    size: limit,
    sortColumn: sortColumn[sort],
    category: category,
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
        if (loadMore) {
          setPortfolio([...portfolio, ...result.data.pagelist]);
        } else {
          setPortfolio(result.data.pagelist);
        }
        setDataNum(result.data.nrOfElements);
        setIsLoading(false);
        setLoadMore(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category, field, query, sort, skip, reload]);
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
