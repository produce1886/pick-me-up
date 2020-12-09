import ProjectService from "@src/lib/api/Project";
import DataProps, { PostList } from "@src/types/Data";
import useAxiosQuery from "./Api";

export const useProjectListGetApi = useAxiosQuery<PostList>(
  ProjectService.getProjectList
);

export const useProjectGetApi = useAxiosQuery<DataProps>(
  ProjectService.getProject
);

const ProjectHooks = { useProjectListGetApi, useProjectGetApi };

export default ProjectHooks;
