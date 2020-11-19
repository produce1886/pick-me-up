import base from "./Api";

const getPreview = (sort: string) => {
  let sortColumn;
  if (sort === "new") {
    sortColumn = "createdDate";
  } else if (sort === "most") {
    sortColumn = "viewNum";
  }

  const body = {
    page: 0,
    size: 4,
    sortColumn,
    category: "",
    huntingField: "",
    region: "",
    projectCategory: "",
    keyword: "",
  };

  return base()
    .post(`/projects/list`, body)
    .then((res) => res.data.pagelist);
};

const PreviewService = {
  getPreview,
};

export default PreviewService;
