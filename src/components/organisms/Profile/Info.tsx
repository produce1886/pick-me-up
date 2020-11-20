import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import { Profile } from "@src/types/Data";
import Text from "../../atoms/Text";
import User from "../../atoms/Icon/User";
import Birth from "../../atoms/Icon/Birth";
import Univ from "../../atoms/Icon/University";
import Area from "../../atoms/Icon/Area";
import Heart from "../../atoms/Icon/Heart";
import Row from "../../atoms/Wrapper/Row";

function Info(props: Profile) {
  const {
    username,
    birth,
    university,
    major,
    area,
    interests,
    birthSecurity,
    universitySecurity,
    areaSecurity,
    interestsSecurity,
  } = props;

  return (
    <Wrapper>
      <InfoUnitWrapper>
        <User
          style={{ width: "0.64rem", height: "0.72rem" }}
          fill={Colors.GREY}
        ></User>
        <Text level={3} color={Colors.BLACK}>
          {username}
        </Text>
      </InfoUnitWrapper>
      {birth && birthSecurity && (
        <InfoUnitWrapper>
          <Birth
            style={{ width: "0.8rem", height: "0.8rem" }}
            fill={Colors.GREY}
          ></Birth>
          <Text level={3} color={Colors.BLACK}>
            {birth}
          </Text>
        </InfoUnitWrapper>
      )}
      {university && universitySecurity && (
        <InfoUnitWrapper>
          <Univ
            style={{ width: "0.8rem", height: "0.72rem" }}
            fill={Colors.GREY}
          ></Univ>
          <Row>
            <Text level={3} color={Colors.BLACK} weight="bold">
              {university}
            </Text>
            {major && (
              <>
                <Text level={3} color={Colors.BLACK}>
                  에서&nbsp;
                </Text>
                <Text level={3} color={Colors.BLACK} weight="bold">
                  {major}
                </Text>
                <Text level={3} color={Colors.BLACK}>
                  &nbsp;전공
                </Text>
              </>
            )}
          </Row>
        </InfoUnitWrapper>
      )}
      {area && areaSecurity && (
        <InfoUnitWrapper>
          <Area
            style={{ width: "0.6rem", height: "0.72rem" }}
            fill={Colors.GREY}
          ></Area>
          <Text level={3} color={Colors.BLACK}>
            {area}
          </Text>
        </InfoUnitWrapper>
      )}
      {interests && interestsSecurity && (
        <InfoUnitWrapper>
          <Heart
            style={{ width: "0.83rem", height: "0.72rem" }}
            fill={Colors.GREY}
          ></Heart>
          <Text level={3} color={Colors.BLACK}>
            {interests}
          </Text>
        </InfoUnitWrapper>
      )}
    </Wrapper>
  );
}

export default React.memo(Info);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 1.8rem 0;
  box-sizing: border-box;
`;

const InfoUnitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1.2rem;
`;
