import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Link from "next/link";
import Colors from "@colors";
import Postblock from "../organisms/PostBlock";
import Text from "../atoms/Text";
import Icon from "../atoms/Icon/Chevron/Right";
import Skeleton from "../_skeletons/main/PostBlock";

export default function Preview(props) {
  const { projects, isLoading } = getProjects(props.type);

  return (
    <Wrapper>
      <Col>
        <LinkWrapper>
          <Link href="project">
            <A>
              <Text level={8} color={Colors.BLACK} weight="bold">
                {props.type === "new" && "신규 프로젝트"}
                {props.type === "most" && "가장 많이 본 프로젝트"}
              </Text>
            </A>
          </Link>
          <Icon
            style={{ width: "0.4rem", height: "0.8rem" }}
            fill={Colors.BLACK}
          ></Icon>
        </LinkWrapper>
        <InnerWrapper>
          {isLoading && (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          )}
          {props.type === "new" &&
            projects.length > 0 &&
            !isLoading &&
            projects.map((item, index) => (
              <Postblock key={index} item={item} type={props.type}></Postblock>
            ))}
          {props.type === "most" &&
            projects.length > 0 &&
            !isLoading &&
            projects.map((item, index) => (
              <Postblock
                key={index}
                rank={index + 1}
                item={item}
                type={props.type}
              ></Postblock>
            ))}
        </InnerWrapper>
      </Col>
    </Wrapper>
  );
}

const getProjects = (type) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let sort;
  if (type === "new") {
    sort = "createdDate";
  } else if (type === "most") {
    sort = "viewNum";
  }

  const body = {
    page: 0,
    size: 4,
    sortColumn: `${sort}`,
    category: "",
    huntingField: "",
    region: "",
    projectCategory: "",
    keyword: "",
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.post(
          `${process.env.API_HOST}/projects/list`,
          body
        );
        setProjects(result.data.pagelist);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return { projects, isLoading };
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1.6rem 0 1.6rem 0;
  box-sizing: border-box;
`;

const InnerWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const LinkWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 1.2rem;
`;

const A = styled.a`
  margin-right: 0.8rem;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 4rem 0 4rem;
  max-width: 92%;
  width: 48rem;
`;
