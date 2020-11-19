import base from "./Api";

const getHotTag = () =>
  base()
    .post(`/tags`, { size: 10 })
    .then((res) => res.data.content);

const HotTagService = {
  getHotTag,
};

export default HotTagService;
