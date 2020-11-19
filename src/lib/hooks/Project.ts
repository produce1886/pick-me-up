import ProjectService from "@src/lib/api/Project";
import { PostList } from "@src/types/Data";
import useAxiosQuery from "./Api";

export const useProjectListGetApi = useAxiosQuery<PostList>(
  ProjectService.getProjectList
);

const ProjectHooks = { useProjectListGetApi };

export default ProjectHooks;
