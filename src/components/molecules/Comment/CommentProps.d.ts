type CommentProps = {
  pid: number;
  cid?: number;
  page: "project" | "portfolio";
  modalReload: number;
  setModalReload: Dispatch<SetStateAction<number>>;
  updatingCid?: number;
  setUpdatingCid?: Dispatch<SetStateAction<string>>;
  setIsButtonClicked?: Dispatch<SetStateAction<boolean>>;
  date?: string;
  image?: string;
  username?: string;
  id?: number;
  email?: string;
  comment?: string;
};

export default CommentProps;
