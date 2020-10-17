import React, { useState } from "react";
import styled, { css } from "styled-components";
import Colors from "@colors";
import Text from "../../atoms/Text";
import Edit from "../../atoms/Icon/Edit";
import Filter from "../Filter/Filter";
import { FIELD, REGION } from "../Filter/ItemData";

export function University(props) {
  const [editUniv, setEditUniv] = useState(false);

  const onChangeUnivHandler = (e) => {
    props.setUniversity(e.target.value);
  };
  const onChangeMajorHandler = (e) => {
    props.setMajor(e.target.value);
  };
  return (
    <Content>
      <ToggleSwitchWrapper>
        <Toggle
          toggled={props.UniversitySecurity}
          onClick={props.setUniversitySecurity}
        >
          <ToggleBall toggled={props.UniversitySecurity}></ToggleBall>
          <RippleBg visible={props.UniversitySecurity}></RippleBg>
        </Toggle>
      </ToggleSwitchWrapper>
      {editUniv && (
        <>
          <Input
            placeholder="학교"
            type="text"
            value={props.university}
            onChange={onChangeUnivHandler}
            width="10.5rem"
            marginRight="0.6rem"
          ></Input>
          <Input
            placeholder="전공"
            type="text"
            value={props.major}
            onChange={onChangeMajorHandler}
            width="10.5rem"
            marginRight="2.3rem"
          ></Input>
        </>
      )}
      {!editUniv && (
        <Row marginRight="2.4rem" paddingLeft="1rem" width="21.5rem">
          <Text level={3} color={Colors.BLACK} align="left">
            {props.university} {props.major}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => setEditUniv(!editUniv)}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem" }}
          fill={Colors.BLACK}
        ></Edit>
      </ButtonWrapper>
    </Content>
  );
}

export function Area(props) {
  const title = "지역";
  const [editArea, setEditArea] = useState(false);
  return (
    <Content>
      <ToggleSwitchWrapper>
        <Toggle toggled={props.areaSecurity} onClick={props.setAreaSecurity}>
          <ToggleBall toggled={props.areaSecurity}></ToggleBall>
          <RippleBg visible={props.areaSecurity}></RippleBg>
        </Toggle>
      </ToggleSwitchWrapper>
      {editArea && (
        <Filter
          width="21rem"
          height="1.2rem"
          level={0}
          defaultText={props.area ? props.area : "지역을 선택하세요"}
          onClick={props.setArea}
          data={REGION}
          title={title}
          previousItemTitle={props.area}
          isUserInfoEdit={true}
        ></Filter>
      )}
      {!editArea && (
        <Row marginRight="3rem" paddingLeft="1rem" width="21.5rem">
          <Text level={3} color={Colors.BLACK} align="left">
            {props.area}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => setEditArea(!editArea)}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem" }}
          fill={Colors.BLACK}
        ></Edit>
      </ButtonWrapper>
    </Content>
  );
}

export function Interest(props) {
  const title = "관심 분야";
  const [editInterest, setEditInterest] = useState(false);
  return (
    <Content>
      <ToggleSwitchWrapper>
        <Toggle
          toggled={props.interestSecurity}
          onClick={props.setInterestSecurity}
        >
          <ToggleBall toggled={props.interestSecurity}></ToggleBall>
          <RippleBg visible={props.interestSecurity}></RippleBg>
        </Toggle>
      </ToggleSwitchWrapper>
      {editInterest && (
        <Filter
          width="21rem"
          height="1.2rem"
          level={0}
          defaultText={
            props.interest ? props.interest : "관심분야를 선택하세요"
          }
          onClick={props.setInterest}
          data={FIELD}
          title={title}
          previousItemTitle={props.interest}
          isUserInfoEdit={true}
        ></Filter>
      )}
      {!editInterest && (
        <Row marginRight="2.4rem" paddingLeft="1rem" width="21.5rem">
          <Text level={3} color={Colors.BLACK} align="left">
            {props.interest}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => setEditInterest(!editInterest)}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem" }}
          fill={Colors.BLACK}
        ></Edit>
      </ButtonWrapper>
    </Content>
  );
}

const Content = styled.div`
  justify-content: space-between;
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

const ButtonWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
  margin: unset;
  padding: unset;
  outline: none;
`;

const Row = styled.div`
  ${(props) => css`
    width: ${props.width};
    text-align: center;
    padding-bottom: 0.2rem;
    margin-right: ${props.marginRight};
    padding-left: ${props.paddingLeft};
    box-sizing: border-box;
  `}
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

const Toggle = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
  background-color: #f0f1f3;
  height: 1.1rem;
  width: 2rem;
  border-radius: 2rem;
  padding: 0.08rem;
  border: none;
  margin-right: 0.84rem;
`;
const ToggleBall = styled.div`
  z-index: 2;
  border-radius: 50%;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s cubic-bezier(1, 0.19, 0.15, 0.7);
  transition-delay: 0.1s;
  will-change: transform;
  background-color: #ffffff;
  border: 1px solid #f0f1f3;
  height: 1rem;
  width: 1rem;
  transform: ${(props) =>
    props.toggled ? `translateX(0.9rem)` : "translateX(0rem)"};
  &:active {
    background-color: #f0f1f3;
  }
`;
const RippleBg = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: radial-gradient(circle, #c8acee 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  pointer-events: none;
  transition: transform 0.5s, opacity 0.3s ease;
  transform: ${(props) => (props.visible ? "scale(10, 10)" : "scale(0, 0)")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  position: absolute;
  z-index: 1;
`;

const ToggleSwitchWrapper = styled.div`
  diplay: flex;
  flex-direction: column;
`;
