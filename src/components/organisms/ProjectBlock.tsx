import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import DataProps from "@src/types/Data";
import Text from "../atoms/Text";
import Top from "../molecules/ProjectBlock/Top";
import Bottom from "../molecules/ProjectBlock/Bottom";
import Wrapper from "../atoms/Wrapper/ProjectBlock";

function ProjectBlock(props: DataProps) {
  const date = props.createdDate.split("T")[0];

  return (
    <Wrapper>
      <Top
        title={props.title}
        name={props.user.username}
        date={date}
        uid={props.user.id}
        profileImage={props.user.image}
        category={props.category}
        field={props.huntingField}
        region={props.region}
        projectCategory={props.projectCategory}
      ></Top>
      <Body>
        <Text level={2} color={Colors.BLACK}>
          {props.content}
        </Text>
      </Body>
      <Bottom
        tags={props.projectTag}
        viewNum={props.viewNum}
        commentsNum={props.commentsNum}
        pid={props.id}
      ></Bottom>
    </Wrapper>
  );
}

export default React.memo(ProjectBlock);

const Body = styled.div`
  width: 100%;
  padding: 0.7rem 1rem 0rem 1rem;
  box-sizing: border-box;
  overflow: hidden;
  height: 4.5rem;
`;
