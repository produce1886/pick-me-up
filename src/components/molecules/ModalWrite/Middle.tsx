import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import { Images } from "@src/types/Data";
import { PageType, ImageFile } from "../../atoms/Modal/ModalType";
import Middle from "../../atoms/Modal/Middle";
import Dropzone from "./Dropzone";

type ModalMiddleProps = {
  setContent: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  page: PageType;
  localFiles: ImageFile[];
  remoteFiles: Images[];
  setLocalFiles: React.Dispatch<React.SetStateAction<ImageFile[]>>;
  setRemoteFiles: React.Dispatch<React.SetStateAction<Images[]>>;
  setRemoteRemoveId?: React.Dispatch<React.SetStateAction<number[]>>;
  remoteRemoveId?: number[];
};

function ModalMiddle({
  setContent,
  content,
  page,
  localFiles,
  remoteFiles,
  setLocalFiles,
  setRemoteFiles,
  setRemoteRemoveId,
  remoteRemoveId,
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
      <Dropzone
        page={page}
        setRemoteFiles={setRemoteFiles}
        setLocalFiles={setLocalFiles}
        localFiles={localFiles}
        remoteFiles={remoteFiles}
        setRemoteRemoveId={setRemoteRemoveId}
        remoteRemoveId={remoteRemoveId}
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
