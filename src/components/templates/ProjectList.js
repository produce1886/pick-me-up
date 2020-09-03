import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ProjectBlock from "../organisms/ProjectBlock";
import NoResult from "../molecules/NoResult";
import BottomButtons from "../organisms/BottomButtons";
import Skeleton from "../_skeletons/project/ProjectBlock";

export default function Projectlist(props) {
  const { category, field, region, projectType, query, sort, reload } = props;
  const [project, setProject] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [loadMore, setLoadMore] = useState(false);
  const { isLoading, dataNum } = getProjectList(
    category,
    field,
    region,
    projectType,
    query,
    sort,
    project,
    setProject,
    skip,
    limit,
    loadMore,
    setLoadMore,
    reload
  );

  const renderBlocks = project.map((item, index) => (
    <ProjectBlock key={index} item={item}></ProjectBlock>
  ));

  const loadMoreHandler = () => {
    setLoadMore(true);
    setSkip(skip + 1);
  };

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

  if (!isLoading && project.length === 0) {
    return (
      <Wrapper>
        <NoResult></NoResult>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>{!isLoading && project.length > 0 && renderBlocks}</Wrapper>
      <BottomButtons
        onClick={loadMoreHandler}
        loadMoreVisible={project.length < dataNum}
      ></BottomButtons>
    </>
  );
}

const getProjectList = (
  category,
  field,
  region,
  projectType,
  query,
  sort,
  project,
  setProject,
  skip,
  limit,
  loadMore,
  setLoadMore,
  reload
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataNum, setDataNum] = useState(0);
  const sortColumn = {
    최신순: "createdDate",
    댓글순: "commentsNum",
    조회순: "viewNum",
  };

  let body = {
    page: skip,
    size: limit,
    sortColumn: sortColumn[sort],
    category: category,
    huntingField: field,
    region: region,
    projectCategory: projectType,
    keyword: query,
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.post(
          `${process.env.API_HOST}/projects/list`,
          body
        );
        if (loadMore) {
          setProject([...project, ...result.data.pagelist]);
        } else {
          setProject(result.data.pagelist);
        }
        setDataNum(result.data.nrOfElements);
        setIsLoading(false);
        setLoadMore(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category, field, region, projectType, query, sort, skip, reload]);
  return { isLoading, dataNum };
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  margin: 0 0 2rem 0;
`;
