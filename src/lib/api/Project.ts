import base from "./Api";

const getProjectList = (
  category: string,
  recruitmentField: string,
  region: string,
  projectSection: string,
  query: string,
  sort: "최신순" | "댓글순" | "조회순",
  limit: number
) => {
  const sortColumn = {
    최신순: "createdDate",
    댓글순: "commentsNum",
    조회순: "viewNum",
  };

  const url = `page=${0}&size=${limit}&sort=${
    sortColumn[sort]
  },desc&category=${category}&recruitmentField=${recruitmentField}&region=${region}&projectSection=${projectSection}&keyword=${query}`;

  return base()
    .get(`/projects/list?${url}`)
    .then((res) => res.data);
};

const getProject = (pid: string, modalReload: number) =>
  base()
    .get(`/projects/${pid}`)
    .then((res) => res.data);

const deleteProject = (pid: string) =>
  base()
    .delete(`/projects/${pid}`)
    .catch((err) => alert("게시글 삭제에 실패했습니다"));

const ProjectService = {
  getProjectList,
  getProject,
  deleteProject,
};

export default ProjectService;
