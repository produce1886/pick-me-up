import { Dispatch, SetStateAction } from "react";

export type ModalProps = {
  modalType: ModalType;
  visible: boolean;
  pid: string | string[];
  onClose: () => void;
  setUpdate: Dispatch<SetStateAction<boolean>>;
  setReload: Dispatch<SetStateAction<number>>;
  reload: number;
  modalReload: number;
  setModalReload: Dispatch<SetStateAction<number>>;
};

export type ModalType = "project" | "portfolio";

export type ImageFile = Blob & {
  invalid?: boolean;
  data?: string;
};
