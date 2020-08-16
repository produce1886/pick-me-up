import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ProjectBlock from "../organisms/ProjectBlock";

export default function Projectlist(props) {
  const { category, field, region, projectType, query, sort } = props;
  const { data, isLoading } = getProjectList(
    category,
    field,
    region,
    projectType,
    query,
    sort
  );

  return (
    <Wrapper>
      <Div>
        <ProjectBlock></ProjectBlock>
        <ProjectBlock></ProjectBlock>
      </Div>
      <Div>
        <ProjectBlock></ProjectBlock>
        <ProjectBlock></ProjectBlock>
      </Div>
      <Div>
        <ProjectBlock></ProjectBlock>
        <ProjectBlock></ProjectBlock>
      </Div>
      <Div>
        <ProjectBlock></ProjectBlock>
        <ProjectBlock></ProjectBlock>
      </Div>
      <Div>
        <ProjectBlock></ProjectBlock>
      </Div>
    </Wrapper>
  );
}

const getProjectList = (category, field, region, projectType, query, sort) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const sortColumn = {
    최신순: "createdDate",
    댓글순: "commentsNum",
    조회순: "viewNum",
  };

  //이후 페이지네이션 관련 코드 추가 필요
  let body = {
    page: 0,
    size: 10,
    sortColumn: sortColumn[sort],
    category: category,
    huntingField: field,
    region: region,
    projectCategory: category,
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
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category, field, region, projectType, query, sort]);
  return { data, isLoading };
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
