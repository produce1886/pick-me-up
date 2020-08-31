import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ProjectBlock from "../organisms/ProjectBlock";
import NoResult from "../molecules/NoResult";
import BottomButtons from "../organisms/BottomButtons";

export default function Projectlist(props) {
  const { category, field, region, projectType, query, sort, reload } = props;
  const [project, setProject] = useState([]);
  const [limit, setLimit] = useState(10);
  const isLoading = getProjectList(
    category,
    field,
    region,
    projectType,
    query,
    sort,
    setProject,
    limit,
    reload
  );

  const getList = (items) => {
    return (
      <>
        <Div>{items.slice(0, 2).map(getBlock)}</Div>
        <Div>{items.slice(2, 4).map(getBlock)}</Div>
        <Div>{items.slice(4, 6).map(getBlock)}</Div>
        <Div>{items.slice(6, 8).map(getBlock)}</Div>
        <Div>{items.slice(8, 10).map(getBlock)}</Div>
      </>
    );
  };

  const getBlock = (item, index) => (
    <ProjectBlock key={index} item={item}></ProjectBlock>
  );

  const loadMoreHandler = () => {
    let _limit = limit + limit;
    setLimit(_limit);
  };

  if (!isLoading && project.length === 0) {
    return (
      <Wrapper>
        <NoResult></NoResult>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>{!isLoading && project.length > 0 && getList(project)}</Wrapper>
      <BottomButtons onClick={loadMoreHandler}></BottomButtons>
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
  setProject,
  limit,
  reload
) => {
  const [isLoading, setIsLoading] = useState(false);
  const sortColumn = {
    최신순: "createdDate",
    댓글순: "commentsNum",
    조회순: "viewNum",
  };

  let body = {
    page: 0,
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
        setProject(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category, field, region, projectType, query, sort, limit, reload]);
  return isLoading;
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem 0;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
