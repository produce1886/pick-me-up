import React from "react";
import styled from "styled-components";
import duplicate from "@src/lib/utils/duplicate";
import ProjectBlock from "../ProjectBlock";
import NoResult from "../../molecules/NoResult";
import Skeleton from "../../_skeletons/project/ProjectBlock";

function Project(props) {
  const renderBlocks =
    props.data.projectList &&
    props.data.projectList.map((item) => (
      <ProjectBlock key={item.id} {...item}></ProjectBlock>
    ));

  if (props.isLoading) {
    return <Wrapper>{duplicate(Skeleton, 10)}</Wrapper>;
  }

  if ((props.data && props.data.projectList.length === 0) || props.isError) {
    return (
      <Wrapper>
        <NoResult></NoResult>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>{renderBlocks}</Wrapper>
    </>
  );
}

export default React.memo(Project);

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 1.4rem;
`;
