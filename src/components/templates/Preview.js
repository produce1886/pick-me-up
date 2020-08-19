import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Postblock from "../organisms/Postblock";
import Link from "next/link";
import Text from "../atoms/Text";
import Icon from "../atoms/Icon/Chevron/Right";

export default function Preview(props) {
  const { newProjects, hotProjects, isLoading } = getProjects();

  if (props.type === "new") {
    return (
      <Wrapper>
        <Col>
          <LinkWrapper>
            <Link href="project">
              <A>
                <Text level={8} color="#232735" weight="bold">
                  신규 프로젝트
                </Text>
              </A>
            </Link>
            <Icon
              style={{ width: "0.4rem", height: "0.8rem" }}
              fill="#232735"
            ></Icon>
          </LinkWrapper>
          <InnerWrapper>
            {newProjects &&
              !isLoading &&
              newProjects.content.map((item, index) => (
                <Postblock
                  key={index}
                  item={item}
                  type={props.type}
                ></Postblock>
              ))}
          </InnerWrapper>
        </Col>
      </Wrapper>
    );
  }
  if (props.type === "most") {
    return (
      <Wrapper>
        <Col>
          <LinkWrapper>
            <Link href="project">
              <A>
                <Text level={8} color="#232735" weight="bold">
                  가장 많이 본 프로젝트
                </Text>
              </A>
            </Link>
            <Icon
              style={{ width: "0.4rem", height: "0.8rem" }}
              fill="#232735"
            ></Icon>
          </LinkWrapper>
          <InnerWrapper>
            {hotProjects &&
              !isLoading &&
              hotProjects.content.map((item, index) => (
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
  return <></>;
}

const getProjects = () => {
  const [newProjects, setNewProjects] = useState(null);
  const [hotProjects, setHotProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const newProjectsData = await axios.get(
          `${process.env.API_HOST}/projects?size=4&sort=createdDate,desc`
        );
        setNewProjects(newProjectsData.data);
        const hotProjectsData = await axios.get(
          `${process.env.API_HOST}/projects?size=4&sort=viewNum,desc`
        );
        setHotProjects(hotProjectsData.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return { newProjects, hotProjects, isLoading };
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
  max-width: 1200px;
  width: 48rem;
`;
