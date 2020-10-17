import React from "react";
import styled from "styled-components";
import ViewCount from "../Count/View";
import CommentCount from "../Count/Comment";
import MoreButton from "../Button/ViewMore";

type BottomProps = {
  viewNum: number;
  commentsNum: number;
  id: string;
};

function Bottom(props: BottomProps) {
  return (
    <Wrapper>
      <Div>
        <ViewCount count={props.viewNum}></ViewCount>
        &nbsp;
        <CommentCount count={props.commentsNum}></CommentCount>
      </Div>
      <MoreButton id={props.id}></MoreButton>
    </Wrapper>
  );
}

export default React.memo(Bottom);

const Wrapper = styled.div`
  width: 100%;
  padding: 0.4rem 1rem 0.5rem 1rem;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;