import { Dispatch, SetStateAction } from "react";

type ModalProps = {
  type: "project" | "portfolio";
  visible: boolean;
  pid: string | string[];
  onClose: () => Promise<boolean>;
  setUpdate: Dispatch<SetStateAction<boolean>>;
  setReload: Dispatch<SetStateAction<number>>;
  reload: number;
  modalReload: number;
  setModalReload: Dispatch<SetStateAction<number>>;
};

export default ModalProps;
