import base from "./Api";

const getComment = (
  setContent: React.Dispatch<React.SetStateAction<string>>,
  url: string,
  cid?: string
) => {
  if (cid) {
    base()
      .get(`/${url}/${cid}`)
      .then((res) => res.data)
      .then((data) => {
        setContent(data.content);
      });
  }
};

const writeComment = (
  url: string,
  body: { authorEmail: string; content: string }
) =>
  base()
    .post(`/${url}`, body)
    .catch((err) => alert("댓글 등록에 실패했습니다"));

const updateComment = (
  url: string,
  body: { authorEmail: string; content: string }
) =>
  base()
    .put(`/${url}`, body)
    .catch((err) => alert("댓글 수정에 실패했습니다"));

const deleteComment = (url: string) =>
  base()
    .delete(`/${url}`)
    .catch((err) => alert("댓글 삭제에 실패했습니다"));

const CommentService = {
  getComment,
  writeComment,
  updateComment,
  deleteComment,
};

export default CommentService;
