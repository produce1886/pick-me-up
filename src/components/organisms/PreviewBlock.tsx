import React from "react";
import styled, { css } from "styled-components";
import Colors from "@colors";
import Wrapper from "../atoms/Wrapper/PostBlock";
import Top, { TopProps } from "../molecules/PostBlock/Top";
import Bottom, { BottomProps } from "../molecules/PostBlock/Bottom";
import Text from "../atoms/Text";

type PreviewProps = TopProps &
  BottomProps & {
    content: string;
  };

function PreviewBlock(props: PreviewProps) {
  return (
    <Wrapper>
      <Top
        sort={props.sort}
        rank={props.rank}
        title={props.title}
        date={props.date.split("T")[0]}
        uid={props.uid}
        name={props.name}
        profileImage={props.profileImage}
      ></Top>
      <Body height={props.sort === "most" ? "4.5rem" : "7rem"}>
        <Text level={2} color={Colors.BLACK}>
          {props.content}
        </Text>
      </Body>
      <Bottom
        viewNum={props.viewNum}
        commentsNum={props.commentsNum}
        pid={props.pid}
      ></Bottom>
    </Wrapper>
  );
}

export default React.memo(PreviewBlock);

const Body = styled.div`
  width: 100%;
  padding: 0.7rem 1rem 0 1rem;
  box-sizing: border-box;
  overflow: hidden;
  ${(props: { height: string }) => css`
    height: ${props.height};
  `}
`;
