import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import Profile from "../Profile";
import Icon from "../../atoms/Icon/Write";

function CommentWrite(props) {
  const user = useSelector((state) => state.user);
  const [content, setContent] = useState("");
  const onChangeHandler = (e) => {
    props.edit
      ? props.setContentUpdate(e.target.value)
      : setContent(e.target.value);
  };
  const commentSubmitHandler = () => {
    if (!user.isSignedIn) {
      alert("로그인하신 다음에 댓글을 사용하실 수 있습니다.");
      return;
    }
    if (content.length < 1 && props.contentUpdate < 1) {
      alert("댓글을 작성해주세요");
    } else if (!props.edit) {
      try {
        if (props.type === "project") {
          axios.post(`${process.env.API_HOST}/projects/${props.pid}/comments`, {
            email: user.userData.email,
            content,
          });
          setContent("");
          setTimeout(() => props.setModalReload(props.modalReload + 1), 300);
        } else if (props.type === "portfolio") {
          axios.post(
            `${process.env.API_HOST}/portfolios/${props.pid}/comments`,
            {
              email: user.userData.email,
              content,
            }
          );
          setContent("");
          setTimeout(() => props.setModalReload(props.modalReload + 1), 300);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (props.edit) {
      try {
        if (props.type === "project") {
          axios.put(
            `${process.env.API_HOST}/projects/${props.pid}/comments/${props.cid}`,
            {
              content: props.contentUpdate,
            }
          );
          setContent("");
          setTimeout(() => props.setModalReload(props.modalReload + 1), 3000);
        } else if (props.type === "portfolio") {
          axios.put(
            `${process.env.API_HOST}/portfolios/${props.pid}/comments/${props.cid}`,
            {
              content: props.contentUpdate,
            }
          );
          setContent("");
          setTimeout(() => props.setModalReload(props.modalReload + 1), 3000);
        }
        props.setEdit(false);
      } catch (error) {
        console.log(error);
      }
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
            onChange={(e) => {
              onChangeHandler(e);
            }}
            maxLength="100"
            value={props.edit ? props.contentUpdate : content}
          ></Textarea>
        </CommentBox>
        <IconButton onClick={commentSubmitHandler}>
          <Icon style={{ width: "2.4rem", height: "2.4rem" }}></Icon>
        </IconButton>
      </Div>
    </Wrapper>
  );
}

export default React.memo(CommentWrite);

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 3.3rem;
  position: relative;
  box-sizing: border-box;
`;
