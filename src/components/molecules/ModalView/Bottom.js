import styled from "styled-components";
import { useState } from "react";
import Text from "../../atoms/Text";
import Comment from "../../organisms/Comment/Comment";
import CommentWrite from "../../organisms/Comment/CommentWrite";

export default function ModalBottom(props) {
  const [commentUpdate, setCommentUpdate] = useState("");
  const [edit, setEdit] = useState(false);
  return (
    <>
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
        {props.comments.map((item, index) => (
          <Comment
            comment={item.content}
            date={item.createdDate}
            userInfo={item.user}
            id={item.id}
            key={index}
            pid={props.pid}
            setCommentUpdate={setCommentUpdate}
            setEdit={setEdit}
          ></Comment>
        ))}

        <CommentWrite
          commentUpdate={commentUpdate.content}
          setCommentUpdate={setCommentUpdate}
          edit={edit}
          cid={commentUpdate.id}
          setEdit={setEdit}
        ></CommentWrite>
      </Bottom>
    </>
  );
}

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

const ButtonWrapper = styled.div`
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 1rem 0 0 0;
`;

const MoreButton = styled.button`
  background-color: transparent;
  border: none;
`;
