import base from "./Api";

const getPortfolioList = (
  category: string,
  recruitmentField: string,
  query: string,
  sort: "최신순" | "댓글순" | "조회순",
  limit: number,
  reload: number
) => {
  const sortColumn = {
    최신순: "createdDate",
    댓글순: "commentsNum",
    조회순: "viewNum",
  };

  const queryString = `page=${0}&size=${limit}&sort=${
    sortColumn[sort]
  },desc&category=${category}&recruitmentField=${recruitmentField}&keyword=${query}`;

  return base()
    .get(`/portfolios/list?${queryString}`)
    .then((res) => res.data);
};

const getPortfolio = (pid: number, modalReload: number) =>
  base()
    .get(`portfolios/${pid}`)
    .then((res) => res.data);

const deletePortfolio = (pid: number) =>
  base()
    .delete(`/portfolios/${pid}`)
    .catch((err) => alert("게시글 삭제에 실패했습니다"));

const PortfolioService = {
  getPortfolioList,
  getPortfolio,
  deletePortfolio,
};

export default PortfolioService;
