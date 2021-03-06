import React from "react";
import styled from "styled-components";
import ViewCount from "../Count/View";
import CommentCount from "../Count/Comment";
import MoreButton from "../Button/ViewMore";

export type BottomProps = {
  viewNum: number;
  commentsNum: number;
  pid: number;
};

function Bottom(props: BottomProps) {
  return (
    <Wrapper>
      <CountWrapper>
        <ViewCount count={props.viewNum}></ViewCount>
        &nbsp;
        <CommentCount count={props.commentsNum}></CommentCount>
      </CountWrapper>
      <MoreButton pid={props.pid}></MoreButton>
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

const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
