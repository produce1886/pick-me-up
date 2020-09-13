import { Dispatch, SetStateAction } from "react";

export type ModalProps = {
  type: "project" | "portfolio";
  visible: boolean;
  pid: string | string[];
  onClose: () => void;
  setUpdate: Dispatch<SetStateAction<boolean>>;
  setReload: Dispatch<SetStateAction<number>>;
  reload: number;
  modalReload: number;
  setModalReload: Dispatch<SetStateAction<number>>;
};

export type ModalUpdateProps = {
  type: "project" | "portfolio";
  pid: string | string[];
  onClose: () => void;
  setUpdate: Dispatch<SetStateAction<boolean>>;
  modalReload: number;
  setModalReload: Dispatch<SetStateAction<number>>;
};
