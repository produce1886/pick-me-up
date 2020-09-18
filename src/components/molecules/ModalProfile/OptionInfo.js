import Text from "../../atoms/Text";
import Birth from "../../atoms/Icon/Birth";
import Univ from "../../atoms/Icon/Univ";
import AreaIcon from "../../atoms/Icon/Area";
import Heart from "../../atoms/Icon/Heart";
import Edit from "../../atoms/Icon/Edit";
import styled, { css } from "styled-components";
import React, { useState } from "react";
import {
  University,
  Area,
  Interest,
} from "../../molecules/ModalProfile/Contents";
function OptionInfo(props) {
  const [editBirth, setEditBirth] = useState(false);
  const onChangeBirthHandler = (e) => {
    props.setBirth(e.target.value);
  };

  return (
    <Wrapper>
      <Title>
        <Text weight={600} level={3} color="#232735">
          추가 정보
        </Text>
      </Title>
      <Div>
        <DivTitle>
          <Birth
            style={{
              width: "0.88rem",
              height: "0.88rem",
              marginRight: "0.32rem",
            }}
            fill="#d3d4d8"
          ></Birth>
          <Text weight={600} level={3} color="#232735">
            생일
          </Text>
        </DivTitle>
        <Content>
          <CheckBox type="checkbox" id="birth"></CheckBox>
          {editBirth && (
            <Input
              placeholder="YYYY.MM.DD"
              type="text"
              value={props.birth}
              onChange={onChangeBirthHandler}
              width="21.5rem"
              marginRight="2.4rem"
            ></Input>
          )}
          {!editBirth && (
            <Row marginRight="2.4rem" paddingLeft="1rem">
              <Text level={3} color="#232735" align="left" width="20.5rem">
                {props.birth}
              </Text>
            </Row>
          )}
          <ButtonWrapper onClick={() => setEditBirth(!editBirth)}>
            <Edit
              style={{ width: "0.8rem", height: "0.8rem" }}
              fill="#232735"
            ></Edit>
          </ButtonWrapper>
        </Content>
      </Div>
      <Div>
        <DivTitle>
          <Univ
            style={{
              width: "0.88rem",
              height: "0.8rem",
              marginRight: "0.32rem",
            }}
            fill="#d3d4d8"
          ></Univ>
          <Text weight={600} level={3} color="#232735">
            학력
          </Text>
        </DivTitle>
        <University
          setUniversity={props.setUniversity}
          university={props.university}
          setMajor={props.setMajor}
          major={props.major}
        ></University>
      </Div>
      <Div>
        <DivTitle>
          <AreaIcon
            style={{
              width: "0.72rem",
              height: "0.8rem",
              marginRight: "0.32rem",
            }}
            fill="#d3d4d8"
          ></AreaIcon>
          <Text weight={600} level={3} color="#232735">
            활동지역
          </Text>
        </DivTitle>
        <Area setArea={props.setArea} area={props.area} zIndex={2000}></Area>
      </Div>
      <Div>
        <DivTitle>
          <Heart
            style={{
              width: "0.92rem",
              height: "0.8rem",
              marginRight: "0.32rem",
            }}
            fill="#d3d4d8"
          ></Heart>
          <Text weight={600} level={3} color="#232735">
            관심분야
          </Text>
        </DivTitle>
        <Interest
          setInterest={props.setInterest}
          interest={props.interest}
          zIndex={1999}
        ></Interest>
      </Div>
    </Wrapper>
  );
}

export default OptionInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 3.2rem;
`;

const Row = styled.div`
  ${(props) => css`
    width: fit-content;
    text-align: center;
    padding-bottom: 0.2rem;
    margin-right: ${props.marginRight};
    padding-left: ${props.paddingLeft};
  `}
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  justify-content: left;
  width: 100%;
  height: 1.5rem;
  padding-left: 1rem;
`;

const Title = styled.div`
  justify-content: left;
  align-items: center;
  display: flex;
  width: 100%;
  height: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  padding-bottom: 0.32rem;
`;
const Content = styled.div`
  justify-content: left;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1.2rem;
  margin: 0.3rem 0;
  padding-left: 0.5rem;
  box-sizing: border-box;
`;
const Input = styled.input`
  ${(props) => css`
    background-color: #f0f1f3;
    border-radius: 0.32rem;
    border: none;
    box-sizing: border-box;
    width: ${props.width};
    outline: none;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 0.64rem;
    align-items: center;
    height: 1.2rem;
    maxlength: ${props.maxLength};
    padding-left: 1rem;
    margin-right: ${props.marginRight};
  `}
`;
const ButtonWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
  margin: unset;
  padding: unset;
  outline: none;
`;
const CheckBox = styled.input`
  ${(props) => css`
    background-color: #c8acee;
    border-radius: 2rem;
    border: none;
    width: 2rem;
    outline: none;
    align-items: center;
    height: 1.1rem;
    margin: unset;
    margin-right: 0.84rem;
  `}
`;
