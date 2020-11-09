import axios from "axios";

const writeComment = (
  url: string,
  body: { email: string; content: string }
) => {
  try {
    axios.post(`${process.env.API_HOST}/${url}`, body);
  } catch (error) {
    console.log(error);
  }
};

const updateComment = (url: string, content: string) => {
  try {
    axios.put(`${process.env.API_HOST}/${url}`, {
      content,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = (url: string) => {
  try {
    axios.delete(`${process.env.API_HOST}/${url}`);
  } catch (error) {
    console.log(error);
    alert("댓글 삭제에 실패했습니다");
  }
};

const CommentService = {
  writeComment,
  updateComment,
  deleteComment,
};

export default CommentService;
