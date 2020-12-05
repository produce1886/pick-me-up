import base from "./Api";

const getPortfolioList = (
  category: string,
  field: string,
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

  const body = {
    page: 0,
    size: limit,
    sortColumn: sortColumn[sort],
    category,
    huntingField: field,
    keyword: query,
  };

  return base()
    .post(`/portfolios/list`, body)
    .then((res) => res.data);
};

const getPortfolio = (pid: string, modalReload: number) =>
  base()
    .get(`projects/${pid}`)
    .then((res) => res.data);

const PortfolioService = {
  getPortfolioList,
  getPortfolio,
};

export default PortfolioService;
