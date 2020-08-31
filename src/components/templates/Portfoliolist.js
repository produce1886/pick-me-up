import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import PortfolioBlock from "../organisms/PortfolioBlock";
import BottomButtons from "../organisms/BottomButtons";
import NoResult from "../molecules/NoResult";

export default function Portfoliolist(props) {
  const { category, field, query, sort, reload } = props;
  const [portfolio, setPortfolio] = useState([]);
  const [limit, setLimit] = useState(15);
  const isLoading = getPortfolioList(
    category,
    field,
    query,
    sort,
    setPortfolio,
    limit,
    reload
  );

  const getList = (items) => {
    return (
      <>
        <Row>{items.slice(0, 3).map(getBlock)}</Row>
        <Row>{items.slice(3, 6).map(getBlock)}</Row>
        <Row>{items.slice(6, 9).map(getBlock)}</Row>
        <Row>{items.slice(9, 12).map(getBlock)}</Row>
        <Row>{items.slice(12, 15).map(getBlock)}</Row>
      </>
    );
  };

  const getBlock = (item, index) => (
    <PortfolioBlock key={index} item={item}></PortfolioBlock>
  );

  const loadMoreHandler = () => {
    let _limit = limit + limit;
    setLimit(_limit);
  };

  if (!isLoading && portfolio.length === 0) {
    return (
      <Wrapper>
        <NoResult></NoResult>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>
        {!isLoading && portfolio.length > 0 && getList(portfolio)}
      </Wrapper>
      <BottomButtons onClick={loadMoreHandler}></BottomButtons>
    </>
  );
}

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
        setPortfolio(result.data.pagelist);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category, field, query, sort, limit, reload]);
  return isLoading;
};

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
