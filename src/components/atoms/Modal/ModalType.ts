import { Dispatch, SetStateAction } from "react";

export type ModalProps = {
  page: PageType;
  isVisible: boolean;
  pid: string | string[];
  onClose: () => void;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  setReload: Dispatch<SetStateAction<number>>;
  reload: number;
  modalReload: number;
  setModalReload: Dispatch<SetStateAction<number>>;
};

export type PageType = "project" | "portfolio";

export type ImageFile = Blob & {
  data?: string;
};
