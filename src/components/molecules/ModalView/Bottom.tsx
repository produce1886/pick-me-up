import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import Colors from "@colors";
import { ModalType } from "@src/components/atoms/Modal/ModalType";
import { Comment } from "@src/types/Data";
import Text from "../../atoms/Text";
import CommentComponent from "../Comment/Comment";
import CommentWrite from "../Comment/CommentWrite";

type ModalBottomProps = {
  modalType: ModalType;
  commentsNum: number;
  comments: Comment[];
  pid: string | string[] | number;
  modalReload: number;
  setModalReload: Dispatch<SetStateAction<number>>;
};

function ModalBottom(props: ModalBottomProps) {
  // 수정 댓글 아이디 받아오는 state
  const [cidUpdate, setCidUpdate] = useState("");
  // 수정 댓글 본문 받아오는 state
  const [contentUpdate, setContentUpdate] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Bottom>
      <Div>
        <Text level={4} weight={500} color={Colors.DEEP_PURPLE}>
          {props.commentsNum}
        </Text>
        &nbsp;
        <Text level={4} weight={500} color={Colors.BLACK}>
          {props.commentsNum < 2 ? "Comment" : "Comments"}
        </Text>
      </Div>
      {props.comments &&
        props.comments.map((item: Comment, index: number) => (
          <CommentComponent
            modalType={props.modalType}
            comment={item.content}
            date={item.createdDate}
            {...item.user}
            id={item.id}
            key={index}
            pid={props.pid}
            setCidUpdate={setCidUpdate}
            setContentUpdate={setContentUpdate}
            setIsEdit={setIsEdit}
            modalReload={props.modalReload}
            setModalReload={props.setModalReload}
          ></CommentComponent>
        ))}
      <CommentWrite
        modalType={props.modalType}
        pid={props.pid}
        contentUpdate={contentUpdate}
        setContentUpdate={setContentUpdate}
        edit={isEdit}
        cid={cidUpdate}
        setIsEdit={setIsEdit}
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
