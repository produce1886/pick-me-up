import base from "./Api";

const getHotTag = () =>
  base()
    .get(`/tags`)
    .then((res) => res.data.tags);

const HotTagService = {
  getHotTag,
};

export default HotTagService;
