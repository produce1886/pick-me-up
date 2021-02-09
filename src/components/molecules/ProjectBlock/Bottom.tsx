import React from "react";
import styled from "styled-components";
import ViewCount from "../Count/View";
import CommentCount from "../Count/Comment";
import MoreButton from "../Button/ViewMore";
import TagButton from "../Tag";

type BottomProps = {
  tags?: { tagName: string; id: string }[];
  viewNum: number;
  commentsNum: number;
  pid: number;
};

function Bottom(props: BottomProps) {
  const renderTags = props.tags.map((tag) => {
    return <TagButton text={tag.tagName} key={tag.id}></TagButton>;
  });

  return (
    <Wrapper>
      <TagWrapper>{renderTags}</TagWrapper>
      <BottomWrapper>
        <CountWrapper>
          <ViewCount count={props.viewNum}></ViewCount>
          &nbsp;
          <CommentCount count={props.commentsNum}></CommentCount>
        </CountWrapper>
        <MoreButton pid={props.pid}></MoreButton>
      </BottomWrapper>
    </Wrapper>
  );
}

export default React.memo(Bottom);

const Wrapper = styled.div`
  width: 100%;
  padding: 0.4rem 1rem 0.5rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 1rem;
  justify-content: left;
`;

const CountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
