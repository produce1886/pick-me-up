import styled, { css } from "styled-components";
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
              &nbsp;&nbsp;
              {props.type === "프로젝트" && "Project"}
              {props.type === "포트폴리오" && "Portfolio"}
            </Text>
          </Row>
          {props.type === "프로젝트" && (
            <Row width="12rem">
              <Text level={3} color="#232735">
                척하면 척, 당신이 꿈꿨던 이상적인 팀을 픽미업에서 만들어보세요.
              </Text>
            </Row>
          )}
          {props.type === "포트폴리오" && (
            <Row width="9.5rem">
              <Text level={3} color="#232735">
                당신만의 특별한 포트폴리오를 픽미업에서 공유해보세요.
              </Text>
            </Row>
          )}
          <Row>
            {props.type === "프로젝트" && (
              <Pill link="project" text="바로가기"></Pill>
            )}
            {props.type === "포트폴리오" && (
              <Pill link="portfolio" text="바로가기"></Pill>
            )}
          </Row>
        </Col>
        {props.type === "프로젝트" && <Img src="Image/Project.png"></Img>}
        {props.type === "포트폴리오" && <Img src="Image/Portfolio.png"></Img>}
      </InnerWrapper>
    </Wrapper>
  );
}

const InnerWrapper = styled.div`
  max-width: 92%;
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
  ${(props) => css`
    width: ${props.width};
  `}
  align-items: baseline;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 13rem;
`;
