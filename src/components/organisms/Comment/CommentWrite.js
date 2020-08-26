import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import Wrapper from "../../atoms/CommentWrite";
import styled from "styled-components";
import Profile from "../../molecules/Profile";
import Icon from "../../atoms/Icon/Write";

export default function CommentWrite() {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const pid = router.asPath.split("/")[2];
  const [content, setContent] = useState("");

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const commentSubmitHandler = () => {
    if (!user.isSignedIn) {
      alert("로그인하신 다음에 댓글을 사용하실 수 있습니다.");
      return;
    }
    if (content.length < 1) {
      return;
    }
    axios.post(`${process.env.API_HOST}/projects/${pid}/comments`, {
      email: user.userData.email,
      content: content,
    });
    //need to refresh
  };

  const checkword = (obj, maxByte) => {
    let strValue = obj.value;
    let strLen = strValue.length;
    let totalByte = 0;
    let len = 0;
    let oneChar = "";
    let str2 = "";
    for (let i = 0; i < strLen; i++) {
      oneChar = strValue.charAt(i);
      if (escape(oneChar).length > 4) {
        totalByte += 2;
      } else {
        totalByte++;
      }
      if (totalByte <= maxByte) {
        len = i + 1;
      }
    }
    if (totalByte > maxByte) {
      alert(maxByte + "자를 초과할 수 없습니다.");
      str2 = strValue.substr(0, len);
      obj.value = str2;
      checkword(obj, 4000);
    }
  };

  return (
    <Wrapper>
      <Div>
        <Profile size="2rem" profileImage={user.userData.image}></Profile>
        <CommentBox>
          <Textarea
            placeholder="내용을 입력하세요"
            type="text"
            onChange={onChangeHandler}
            onKeyUp={(event) => {
              checkword(event.target, 300);
            }}
          ></Textarea>
        </CommentBox>
        <IconButton onClick={commentSubmitHandler}>
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
