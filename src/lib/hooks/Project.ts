import ProjectService from "@src/lib/api/Project";
import { ProjectProps, ProjectList } from "@src/types/Data";
import useAxiosQuery from "./Api";

export const useProjectListGetApi = useAxiosQuery<ProjectList>(
  ProjectService.getProjectList
);

export const useProjectGetApi = useAxiosQuery<ProjectProps>(
  ProjectService.getProject
);

const ProjectHooks = { useProjectListGetApi, useProjectGetApi };

export default ProjectHooks;
