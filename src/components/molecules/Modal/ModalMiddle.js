import styled from "styled-components";
import Middle from "../../atoms/Modal/Middle";
import Dropzone from "./Dropzone";

export default function ModalMiddle(props) {
  const handleChange = (event) => {
    props.setContent(event.target.value);
  };
  return (
    <Middle height="36rem">
      <Textarea
        placeholder="내용을 입력하세요"
        type="text"
        onChange={handleChange}
        value={props.isUpdate ? props.updateContent : props.content}
      ></Textarea>
      <Dropzone
        type={props.type}
        setImages={props.setImages}
        images={props.images}
      ></Dropzone>
    </Middle>
  );
}

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
