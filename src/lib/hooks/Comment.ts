import CommentService from "@src/lib/api/Comment";
import useAxiosQuery from "./Api";

export const useCommentGetApi = useAxiosQuery<string>(
  CommentService.getComment
);

const CommentHooks = { useCommentGetApi };

export default CommentHooks;
