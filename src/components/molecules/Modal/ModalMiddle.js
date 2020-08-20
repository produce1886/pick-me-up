import React from "react";
import styled from "styled-components";
import Middle from "../../atoms/Modal/Middle";
import Dropzone from "./Dropzone";
export default function ModalMiddle(props) {
  const handleChange = (event) => {
    props.setContent(event.target.value);
  };
  return (
    <Middle height="fit-content" minheight="38rem">
      <Textarea
        placeholder="내용을 입력하세요"
        type="text"
        onChange={handleChange}
      ></Textarea>
      <Dropzone></Dropzone>
    </Middle>
  );
}

const Textarea = styled.textarea`
  background-color: transparent;
  border: none;
  padding: unset;
  box-sizing: border-box;
  width: 100%;
  height: 19.5rem;
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
