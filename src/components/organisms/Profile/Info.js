import React from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import User from "../../atoms/Icon/User";
import Birth from "../../atoms/Icon/Birth";
import Univ from "../../atoms/Icon/University";
import Area from "../../atoms/Icon/Area";
import Heart from "../../atoms/Icon/Heart";
import Row from "../../atoms/Row";

function Info(props) {
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
      {username && (
        <Div>
          <User
            style={{ width: "0.64rem", height: "0.72rem" }}
            fill="#d3d4d8"
          ></User>
          <Text level={3} color="#232735">
            {username}
          </Text>
        </Div>
      )}
      {birth && birthSecurity && (
        <Div>
          <Birth
            style={{ width: "0.8rem", height: "0.8rem" }}
            fill="#d3d4d8"
          ></Birth>
          <Text level={3} color="#232735">
            {birth}
          </Text>
        </Div>
      )}
      {university && universitySecurity && (
        <Div>
          <Univ
            style={{ width: "0.8rem", height: "0.72rem" }}
            fill="#d3d4d8"
          ></Univ>
          <Row>
            <Text level={3} color="#232735" weight="bold">
              {university}
            </Text>
            {major && (
              <>
                <Text level={3} color="#232735">
                  에서&nbsp;
                </Text>
                <Text level={3} color="#232735" weight="bold">
                  {major}
                </Text>
                <Text level={3} color="#232735">
                  &nbsp;전공
                </Text>
              </>
            )}
          </Row>
        </Div>
      )}
      {area && areaSecurity && (
        <Div>
          <Area
            style={{ width: "0.6rem", height: "0.72rem" }}
            fill="#d3d4d8"
          ></Area>
          <Text level={3} color="#232735">
            {area}
          </Text>
        </Div>
      )}
      {interests && interestsSecurity && (
        <Div>
          <Heart
            style={{ width: "0.83rem", height: "0.72rem" }}
            fill="#d3d4d8"
          ></Heart>
          <Text level={3} color="#232735">
            {interests}
          </Text>
        </Div>
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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1.2rem;
`;
