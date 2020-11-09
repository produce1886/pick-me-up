import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CommentService from "@src/lib/api/Comment";
import CommentHooks from "@src/lib/hooks/Comment";
import Profile from "../Profile";
import Icon from "../../atoms/Icon/Write";

function CommentWrite(props) {
  const user = useSelector((state) => state.user);
  const [content, setContent] = useState("");

  CommentHooks.useCommentLoadApi(
    setContent,
    `${props.modalType}s/${props.pid}/comments`,
    props.updatingCid
  );

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleWriteButtonClick = () => {
    if (!user.isSignedIn) {
      // eslint-disable-next-line no-undef
      alert("로그인하신 다음에 댓글을 사용하실 수 있습니다.");
      return;
    }
    if (content.length < 1) {
      // eslint-disable-next-line no-undef
      alert("댓글을 작성해주세요");
      return;
    }

    if (props.updatingCid) {
      const url = `${props.modalType}s/${props.pid}/comments/${props.updatingCid}`;
      CommentService.updateComment(url, content);
      props.setUpdatingCid(null);
    } else {
      const url = `${props.modalType}s/${props.pid}/comments`;
      const body = { email: user.userData.email, content };
      CommentService.writeComment(url, body);
    }
    setContent("");
    setTimeout(() => props.setModalReload(props.modalReload + 1), 300);
  };

  return (
    <Wrapper>
      <Profile size="2rem" profileImage={user.userData.image}></Profile>
      <CommentBox>
        <Textarea
          placeholder="내용을 입력하세요"
          type="text"
          onChange={(e) => {
            handleInputChange(e);
          }}
          maxLength="100"
          value={content}
        ></Textarea>
      </CommentBox>
      <WriteButton onClick={handleWriteButtonClick}>
        <Icon style={{ width: "2.4rem", height: "2.4rem" }}></Icon>
      </WriteButton>
    </Wrapper>
  );
}

export default React.memo(CommentWrite);

const WriteButton = styled.button`
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
  padding: 0;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.3rem;
  position: relative;
  box-sizing: border-box;
`;
