import React, { useState } from "react";
import styled from "styled-components";
import Colors from "@colors";
import Text from "../../atoms/Text";
import Comment from "../Comment/Comment";
import CommentWrite from "../Comment/CommentWrite";

function ModalBottom(props) {
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
        props.comments.map((item) => (
          <Comment
            key={item.id}
            modalType={props.modalType}
            comment={item.content}
            date={item.createdDate}
            {...item.user}
            cid={item.id}
            pid={props.pid}
            modalReload={props.modalReload}
            setModalReload={props.setModalReload}
            setUpdatingCid={setUpdatingCid}
          ></Comment>
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
