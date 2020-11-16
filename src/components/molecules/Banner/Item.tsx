import React from "react";
import styled, { css } from "styled-components";
import Colors from "@colors";
import Pill from "../Button/Pill";
import Text from "../../atoms/Text";

type BannerItemProps = {
  color: Colors;
  page: "프로젝트" | "포트폴리오";
};

type RowProps = {
  width?: string;
};

export default function Item({ color, page }: BannerItemProps) {
  return (
    <Wrapper color={color}>
      <InnerWrapper>
        <Col>
          <Row>
            <Text level={18} weight="bold" color={Colors.BLACK}>
              {page}
            </Text>
            <Text level={8} weight="bold" color={Colors.DEEP_GREY}>
              &nbsp;&nbsp;
              {page === "프로젝트" && "Project"}
              {page === "포트폴리오" && "Portfolio"}
            </Text>
          </Row>
          {page === "프로젝트" && (
            <Row width="12rem">
              <Text level={3} color={Colors.BLACK}>
                척하면 척, 당신이 꿈꿨던 이상적인 팀을 픽미업에서 만들어보세요.
              </Text>
            </Row>
          )}
          {page === "포트폴리오" && (
            <Row width="9.5rem">
              <Text level={3} color={Colors.BLACK}>
                당신만의 특별한 포트폴리오를 픽미업에서 공유해보세요.
              </Text>
            </Row>
          )}
          <Row>
            {page === "프로젝트" && (
              <Pill link="/project" text="바로가기"></Pill>
            )}
            {page === "포트폴리오" && (
              <Pill link="/portfolio" text="바로가기"></Pill>
            )}
          </Row>
        </Col>
        {page === "프로젝트" && <Img src="Image/Project.png"></Img>}
        {page === "포트폴리오" && <Img src="Image/Portfolio.png"></Img>}
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 18.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => css`
    background-color: ${props.color};
  `}
`;

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
  align-items: baseline;
  ${(props: RowProps) => css`
    width: ${props.width};
  `}
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 13rem;
`;
