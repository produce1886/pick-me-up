import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Colors from "@colors";
import Row from "../atoms/Wrapper/Row";
import Col from "../atoms/Wrapper/Col";
import Icon from "../atoms/Icon/Tag";
import Text from "../atoms/Text";
import Tag from "../molecules/Button/Tag";
import Skeleton from "../_skeletons/main/Tag";

export default function HotTag() {
  const { tags, isLoading } = getHotTags();

  return (
    <Wrapper>
      <InnerWrapper>
        <Col>
          <Div>
            <Icon
              style={{ width: "2rem", height: "2rem" }}
              fill={Colors.DEEP_PURPLE}
            ></Icon>
            <Text color={Colors.BLACK} level={12} weight="bold">
              HOT TAG
            </Text>
            <Text color={Colors.DEEP_GREY} level={1}>
              지금 이시간 가장 인기 있는 태그를 확인하세요
            </Text>
          </Div>
          <Row>
            {isLoading && (
              <>
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
              </>
            )}
            {!isLoading &&
              tags &&
              tags.content.map((item, index) => (
                <Tag key={index} text={item.name}></Tag>
              ))}
          </Row>
        </Col>
      </InnerWrapper>
    </Wrapper>
  );
}

const getHotTags = () => {
  const [tags, setTags] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.post(`${process.env.API_HOST}/tags`, {
          size: 10,
        });
        setTags(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return { tags, isLoading };
};

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem 0 2rem 0;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  max-width: 92%;
  width: 48rem;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const Div = styled.div`
  margin-bottom: 1.2rem;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
