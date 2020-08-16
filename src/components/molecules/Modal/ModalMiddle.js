import React from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Middle from "../../atoms/Modal/Middle";
import FileIcon from "../../atoms/Icon/File";
import Dropzone from "./Dropzone";
export default function ModalMiddle() {
  return (
    <Middle height="fit-content" minheight="38rem">
      <FileWrapper>
        <FileButton>
          <FileIcon
            style={{ width: "0.4rem", height: "0.9rem", marginRight: "0.3rem" }}
          ></FileIcon>
          <Text width="fit-content" level={2} line="1rem" color="#232735">
            파일 추가
          </Text>
        </FileButton>
      </FileWrapper>
      <Textarea placeholder="내용을 입력하세요" type="text"></Textarea>
      <Dropzone></Dropzone>
    </Middle>
  );
}
const FileWrapper = styled.div`
  width: fit-content;
  height: 1rem;
  flex-direction: row;
  margin: 0 0 1rem 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
`;
const FileButton = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  border: none;
  background: transparent;
  flex-direction: row;
`;

const Textarea = styled.textarea`
  background-color: transparent;
  border: none;
  padding: unset;
  box-sizing: border-box;
  width: 100%;
  height: 15rem;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.72rem;
  margin: 0 0 0.3rem 0;
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
`;
