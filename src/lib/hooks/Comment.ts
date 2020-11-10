import { useEffect } from "react";
import axios from "axios";

const useCommentLoadingApi = (
  setContent: React.Dispatch<React.SetStateAction<string>>,
  url: string,
  cid?: string
) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${process.env.API_HOST}/${url}/${cid}`);
        setContent(result.data.content);
      } catch (err) {
        alert("댓글 수정에 실패했습니다.");
      }
    };
    if (cid) {
      fetchData();
    }
  }, [cid]);
};

const CommentHooks = { useCommentLoadingApi };

export default CommentHooks;
