import React from "react";
import styled from "styled-components";
import { ModalType, FileType } from "../../../types/Modal";
import Middle from "../../atoms/Modal/Middle";
import Dropzone from "./Dropzone";

type ModalMiddleProps = {
  setContent: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  modalType: ModalType;
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<FileType[]>>;
};
function ModalMiddle({
  setContent,
  content,
  modalType,
  images,
  setImages,
}: ModalMiddleProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <Middle height="36rem">
      <Textarea
        placeholder="내용을 입력하세요"
        onChange={(e) => {
          handleChange;
        }}
        value={content}
      ></Textarea>
      <Dropzone
        modalType={modalType}
        setImages={setImages}
        images={images}
      ></Dropzone>
    </Middle>
  );
}

export default React.memo(ModalMiddle);

const Textarea = styled.textarea`
  background-color: transparent;
  border: none;
  padding: unset;
  box-sizing: border-box;
  width: 100%;
  height: 17rem;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.72rem;
  resize: none;
  input::placeholder {
    color: #d3d4d8;
  }
  input::-webkit-input-placeholder {
    color: #d3d4d8;
  }
  input:-ms-input-placeholder {
    color: #d3d4d8;
  }
  overflow-y: scroll;
`;
