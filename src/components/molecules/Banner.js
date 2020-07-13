import styled from "styled-components";
import Wrapper from "../atoms/Banner/Item";
import Text from "../atoms/Text";
import Pill from "../molecules/Button/Pill";

export default function Item(props) {
  return (
    <Wrapper color={props.color}>
      <InnerWrapper>
        <Col>
          <Row>
            <Text level={18} weight="bold" color="#232735">
              {props.type}
            </Text>
            <Text level={8} weight="bold" color="#8b90a0">
              &nbsp;&nbsp;Project
            </Text>
          </Row>
          <Row>
            <Text level={3} color="#232735">
              척하면 척, 당신이 꿈꿨던 이상적인 팀을 픽미업에서 만들어보세요.
            </Text>
          </Row>
          <Row>
            <Pill link="project" text="바로가기"></Pill>
          </Row>
        </Col>
        <Img src="Image/Project.png"></Img>
      </InnerWrapper>
    </Wrapper>
  );
}

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 48rem;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 4rem 0 4rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 1.2rem 0;
  width: 12rem;
  align-items: baseline;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 13rem;
`;
