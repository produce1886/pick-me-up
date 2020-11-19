import PortfolioService from "@src/lib/api/Portfolio";
import { PostList } from "@src/types/Data";
import useAxiosQuery from "./Api";

export const usePortfolioListGetApi = useAxiosQuery<PostList>(
  PortfolioService.getPortfolioList
);

const PortfolioHooks = { usePortfolioListGetApi };

export default PortfolioHooks;
