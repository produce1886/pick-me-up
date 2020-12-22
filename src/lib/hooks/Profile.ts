import ProfileService from "@src/lib/api/Profile";
import { Profile } from "@src/types/Data";
import useAxiosQuery from "./Api";

export const useProfileGetApi = useAxiosQuery<Profile>(
  ProfileService.getProfile
);

const ProfileHooks = { useProfileGetApi };

export default ProfileHooks;
