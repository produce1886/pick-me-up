import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Comment from "../Comment/Comment";
import CommentWrite from "../Comment/CommentWrite";

function ModalBottom(props) {
  // 수정 댓글 아이디 받아오는 state
  const [cidUpdate, setCidUpdate] = useState("");
  // 수정 댓글 본문 받아오는 state
  const [contentUpdate, setContentUpdate] = useState("");
  const [edit, setEdit] = useState(false);

  return (
    <Bottom>
      <Div>
        <Text level={4} weight={500} color="#9c69e2">
          {props.commentsNum}
        </Text>
        &nbsp;
        <Text level={4} weight={500} color="#232735">
          {props.commentsNum < 2 ? "Comment" : "Comments"}
        </Text>
      </Div>
      {props.comments &&
        props.comments.map((item, index) => (
          <Comment
            type={props.type}
            comment={item.content}
            date={item.createdDate}
            userInfo={item.user}
            id={item.id}
            key={index}
            pid={props.pid}
            setCidUpdate={setCidUpdate}
            setContentUpdate={setContentUpdate}
            setEdit={setEdit}
            modalReload={props.modalReload}
            setModalReload={props.setModalReload}
          ></Comment>
        ))}
      <CommentWrite
        type={props.type}
        pid={props.pid}
        contentUpdate={contentUpdate}
        setContentUpdate={setContentUpdate}
        edit={edit}
        pid={props.pid}
        cid={cidUpdate}
        setEdit={setEdit}
        modalReload={props.modalReload}
        setModalReload={props.setModalReload}
      ></CommentWrite>
    </Bottom>
  );
}

export default React.memo(ModalBottom);

const Div = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Bottom = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #ffffff;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  padding: 0.5rem 1.5rem 1rem 1.5rem;
  border-top: 0.07rem solid #d3d4d8;
`;
