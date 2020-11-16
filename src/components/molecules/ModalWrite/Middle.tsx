import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import { PageType } from "../../atoms/Modal/ModalType";
import Middle from "../../atoms/Modal/Middle";
import Dropzone from "./Dropzone";

type ModalMiddleProps = {
  setContent: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  page: PageType;
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
};

function ModalMiddle({
  setContent,
  content,
  page,
  images,
  setImages,
}: ModalMiddleProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <Middle height="36rem">
      <Textarea
        placeholder="내용을 입력하세요"
        onChange={(e) => {
          handleChange(e);
        }}
        value={content}
      ></Textarea>
      <Dropzone page={page} setImages={setImages} images={images}></Dropzone>
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
    color: ${Colors.GREY};
  }
  input::-webkit-input-placeholder {
    color: ${Colors.GREY};
  }
  input:-ms-input-placeholder {
    color: ${Colors.GREY};
  }
  overflow-y: scroll;
`;
