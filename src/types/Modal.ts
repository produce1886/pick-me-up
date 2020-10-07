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
// 게시글 생성 시에는 이미지의 타입이 File이지만, post할 때 File.data: string을 보내므로
// ModalUpdate와 ModalView에서는 image를 모두 string[]로 변경
// -> 문제는 ModalUpdate 시에는 setImages()로 File객체를 다시보내야하는데...이땐 어케 할거냐
// -> dropzone의 preview는 file.data라 string이긴함
export type ImageFile = Blob & {
  invalid?: boolean;
  data?: string;
};
