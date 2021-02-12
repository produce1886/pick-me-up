import PortfolioService from "@src/lib/api/Portfolio";
import { PortfolioList, PortfolioProps } from "@src/types/Data";
import useAxiosQuery from "./Api";

export const usePortfolioListGetApi = useAxiosQuery<PortfolioList>(
  PortfolioService.getPortfolioList
);

export const usePortfolioGetApi = useAxiosQuery<PortfolioProps>(
  PortfolioService.getPortfolio
);

const PortfolioHooks = { usePortfolioListGetApi, usePortfolioGetApi };

export default PortfolioHooks;
