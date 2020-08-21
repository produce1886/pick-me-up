import Wrapper from "../../atoms/CommentWrite";
import styled from "styled-components";
import Profile from "../../molecules/Profile";
import Icon from "../../atoms/Icon/Write";

export default function CommentWrite() {
  return (
    <Wrapper>
      <Div>
        <Profile size="2rem"></Profile>
        <CommentBox>
          <Textarea placeholder="내용을 입력하세요" type="text"></Textarea>
        </CommentBox>
        <IconButton>
          <Icon style={{ width: "2.4rem", height: "2.4rem" }}></Icon>
        </IconButton>
      </Div>
    </Wrapper>
  );
}

const Div = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const IconButton = styled.button`
  width: fit-content;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
  border: none;
`;

const CommentBox = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 0.2rem;
  background-color: #d3d4d8;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 0.5rem;
`;

const Textarea = styled.textarea`
  background-color: transparent;
  border: none;
  padding: unset;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.56rem;
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
