import ProfileService from "@src/lib/api/Profile";
import { Profile, ProjectList } from "@src/types/Data";
import useAxiosQuery from "./Api";

export const useProfileGetApi = useAxiosQuery<Profile>(
  ProfileService.getProfile
);

export const useUserProjectListGetApi = useAxiosQuery<ProjectList>(
  ProfileService.getUserProjectLists
);

const ProfileHooks = { useProfileGetApi, useUserProjectListGetApi };

export default ProfileHooks;
