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
  pid: string;
  modalReload: number;
  setModalReload: Dispatch<SetStateAction<number>>;
};

function ModalBottom(props: ModalBottomProps) {
  const [updatingCid, setUpdatingCid] = useState(null);

  return (
    <Wrapper>
      <CommentNumWrapper>
        <Text level={4} weight={500} color={Colors.DEEP_PURPLE}>
          {props.commentsNum}
        </Text>
        &nbsp;
        <Text level={4} weight={500} color={Colors.BLACK}>
          {props.commentsNum < 2 ? "Comment" : "Comments"}
        </Text>
      </CommentNumWrapper>
      {props.comments &&
        props.comments.map((item: Comment) => (
          <CommentComponent
            key={item.id}
            modalType={props.modalType}
            comment={item.content}
            date={item.createdDate}
            {...item.user}
            // number, string type error 수정 필요
            cid={item.id}
            pid={props.pid}
            modalReload={props.modalReload}
            setModalReload={props.setModalReload}
            setUpdatingCid={setUpdatingCid}
          ></CommentComponent>
        ))}
      <CommentWrite
        modalType={props.modalType}
        pid={props.pid}
        modalReload={props.modalReload}
        setModalReload={props.setModalReload}
        updatingCid={updatingCid}
        setUpdatingCid={setUpdatingCid}
      ></CommentWrite>
    </Wrapper>
  );
}

export default React.memo(ModalBottom);

const CommentNumWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
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
