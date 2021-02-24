import ProfileService from "@src/lib/api/Profile";
import { Profile, ProjectList, PortfolioList } from "@src/types/Data";
import useAxiosQuery from "./Api";

export const useProfileGetApi = useAxiosQuery<Profile>(
  ProfileService.getProfile
);

export const useUserProjectListGetApi = useAxiosQuery<ProjectList>(
  ProfileService.getUserProjectLists
);

export const useUserPortfolioListGetApi = useAxiosQuery<PortfolioList>(
  ProfileService.getUserPortfolioLists
);

const ProfileHooks = {
  useProfileGetApi,
  useUserProjectListGetApi,
  useUserPortfolioListGetApi,
};

export default ProfileHooks;
