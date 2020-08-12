import Row from "../atoms/Row";
import Col from "../atoms/Col";
import Icon from "../atoms/Icon/Tag";
import styled from "styled-components";
import Text from "../atoms/Text";
import Tag from "../molecules/Button/Tag";

export default function HotTag() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Col>
          <Div>
            <Icon
              style={{ width: "2rem", height: "2rem" }}
              fill="#9c69e2"
            ></Icon>
            <Text color="#232735" level={12} weight="bold">
              HOT TAG
            </Text>
            <Text color="#8b90a0" level={1}>
              지금 이시간 가장 인기 있는 태그를 확인하세요
            </Text>
          </Div>
          <Row>
            <Tag backgroundColor="#c8acee" text="Tag text" link="" textColor="#fff"></Tag>
            <Tag backgroundColor="#c8acee" text="Tag text" link="" textColor="#fff"></Tag>
            <Tag backgroundColor="#c8acee" text="Tag text" link="" textColor="#fff"></Tag>
            <Tag backgroundColor="#c8acee" text="Tag text" link="" textColor="#fff"></Tag>
            <Tag backgroundColor="#c8acee" text="Tag text" link="" textColor="#fff"></Tag>
            <Tag backgroundColor="#c8acee" text="Tag text" link="" textColor="#fff"></Tag>
            <Tag backgroundColor="#c8acee" text="Tag text" link="" textColor="#fff"></Tag>
            <Tag backgroundColor="#c8acee" text="Tag text" link="" textColor="#fff"></Tag>
            <Tag backgroundColor="#c8acee" text="Tag text" link="" textColor="#fff"></Tag>
          </Row>
        </Col>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem 0 2rem 0;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  max-width: 1200px;
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
