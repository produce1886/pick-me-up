import PortfolioService from "@src/lib/api/Portfolio";
import DataProps, { PostList } from "@src/types/Data";
import useAxiosQuery from "./Api";

export const usePortfolioListGetApi = useAxiosQuery<PostList>(
  PortfolioService.getPortfolioList
);

export const usePortfolioGetApi = useAxiosQuery<DataProps>(
  PortfolioService.getPortfolio
);

const PortfolioHooks = { usePortfolioListGetApi, usePortfolioGetApi };

export default PortfolioHooks;
