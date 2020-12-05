import base from "./Api";

const getProjectList = (
  category: string,
  field: string,
  region: string,
  projectType: string,
  query: string,
  sort: "최신순" | "댓글순" | "조회순",
  limit: number,
  reload: number
) => {
  const sortColumn = {
    최신순: "createdDate",
    댓글순: "commentsNum",
    조회순: "viewNum",
  };

  const body = {
    page: 0,
    size: limit,
    sortColumn: sortColumn[sort],
    category,
    huntingField: field,
    region,
    projectCategory: projectType,
    keyword: query,
  };

  return base()
    .post(`/projects/list`, body)
    .then((res) => res.data);
};

const getProject = (pid: string, modalReload: number) =>
  base()
    .get(`projects/${pid}`)
    .then((res) => res.data);

const ProjectService = {
  getProjectList,
  getProject,
};

export default ProjectService;
