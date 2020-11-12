type CommentProps = {
  pid: string;
  cid: string;
  modalType: "project" | "portfolio";
  modalReload: number;
  setModalReload: Dispatch<SetStateAction<number>>;
  updatingCid?: string;
  setUpdatingCid?: Dispatch<SetStateAction<string>>;
  setIsButtonClicked: Dispatch<SetStateAction<boolean>>;
  date?: string;
  image?: string;
  username?: string;
  id?: string;
  email?: string;
  comment?: string;
};

export default CommentProps;