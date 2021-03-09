import base from "./Api";

const getPreview = (sort: string) => {
  let sortColumn;
  if (sort === "new") {
    sortColumn = "createdDate";
  } else if (sort === "most") {
    sortColumn = "viewNum";
  }
  return base()
    .get(`/projects/list?page=${0}&size=${4}&sort=${sortColumn},desc`)
    .then((res) => res.data.projectList);
};

const PreviewService = {
  getPreview,
};

export default PreviewService;
