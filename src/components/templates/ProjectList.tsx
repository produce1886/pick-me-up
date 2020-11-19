import React, { useState, useCallback } from "react";
import styled from "styled-components";
import ProjectHooks from "@src/lib/hooks/Project";
import ProjectBlock from "../organisms/ProjectBlock";
import NoResult from "../molecules/NoResult";
import MoreListButton from "../molecules/Button/LoadMore";
import Skeleton from "../_skeletons/project/ProjectBlock";

type ProjectListProps = {
  category: string;
  field: string;
  region: string;
  projectType: string;
  query: string;
  sort: "최신순" | "댓글순" | "조회순";
  reload: number;
};

function ProjectList(props: ProjectListProps) {
  const { category, field, region, projectType, query, sort, reload } = props;
  const [limit, setLimit] = useState(10);
  const { isLoading, isError, data } = ProjectHooks.useProjectListGetApi([
    category,
    field,
    region,
    projectType,
    query,
    sort,
    limit,
    reload,
  ]);

  const loadMoreHandler = useCallback(() => {
    setLimit(limit + 10);
  }, [limit]);

  const renderBlocks =
    data &&
    data.pagelist.map((item) => (
      <ProjectBlock key={item.id} {...item}></ProjectBlock>
    ));

  if (isLoading) {
    return (
      <Wrapper>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Wrapper>
    );
  }

  if ((data && data.pagelist.length === 0) || isError) {
    return (
      <Wrapper>
        <NoResult></NoResult>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>{renderBlocks}</Wrapper>
      {data && data.pagelist.length < data.nrOfElements && (
        <MoreWrapper>
          <MoreListButton onClick={loadMoreHandler}></MoreListButton>
        </MoreWrapper>
      )}
    </>
  );
}

export default React.memo(ProjectList);

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

const MoreWrapper = styled.div`
  background-color: transparent;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 1.6rem;
`;
