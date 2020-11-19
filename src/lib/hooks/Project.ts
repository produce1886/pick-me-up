import ProjectService from "@src/lib/api/Project";
import { ProjectList } from "@src/types/Data";
import useAxiosQuery from "./Api";

export const useProjectListGetApi = useAxiosQuery<ProjectList>(
  ProjectService.getProjectList
);

const ProjectHooks = { useProjectListGetApi };

export default ProjectHooks;
