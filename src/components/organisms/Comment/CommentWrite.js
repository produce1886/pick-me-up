import Wrapper from "../../atoms/Comment";
import styled, { css } from "styled-components";
import Profile from "../../molecules/Profile";
import Icon from "../../atoms/Icon/Write";
import Link from "next/link";
export default function CommentWrite() {
  return (
    <Wrapper>
      <Div>
        <IconDiv margin="0 0 0 0.5rem">
          <Profile direction="row" size="2rem"></Profile>
        </IconDiv>
        <CommentBox>
          <Textarea placeholder="내용을 입력하세요" type="text"></Textarea>
        </CommentBox>

        <Link href="">
          <A>
            <IconButton>
              <Icon style={{ width: "2.4rem", height: "2.4rem" }}></Icon>
            </IconButton>
          </A>
        </Link>
      </Div>
    </Wrapper>
  );
}

const A = styled.a``;

const IconDiv = styled.div`
  width: fit-content;
  height: 100%;
  justify-content: left;
  align-items: center;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border: none;
`;
const IconButton = styled.button`
  width: fit-content;
  height: 100%;
  justify-content: left;
  align-items: center;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border: none;
`;
const Div = styled.div`
  width: 100%;
  height: 3.4rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
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
  max-height: 36px;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 0.3rem;
  margin: 0.3rem 0.5rem 0 0rem;
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
