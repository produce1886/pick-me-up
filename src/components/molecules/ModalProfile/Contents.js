import styled, { css } from "styled-components";
import Text from "../../atoms/Text";
import Edit from "../../atoms/Icon/Edit";
import X from "../../atoms/Icon/X";
import EditUserFilter from "../Filter/EditUserFilter";
import React, { useState, useEffect } from "react";
import { FIELD, REGION } from "../Filter/ItemData";

export function University(props) {
  const [editUniv, setEditUniv] = useState(true);

  const onChangeUnivHandler = (e) => {
    props.setUniversity(e.target.value);
  };
  const onChangeMajorHandler = (e) => {
    props.setMajor(e.target.value);
  };
  return (
    <Content>
      <CheckBox type="checkbox" id="education"></CheckBox>
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
        <Row marginRight="2.4rem" paddingLeft="1rem">
          <Text level={3} color="#232735" align="left" width="20.5rem">
            {props.university} {props.major}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => setEditUniv(!editUniv)}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem" }}
          fill="#232735"
        ></Edit>
      </ButtonWrapper>
    </Content>
  );
}

export function Area(props) {
  const title = props.area;
  const [editArea, setEditArea] = useState(true);
  return (
    <Content>
      <CheckBox type="checkbox" id="area"></CheckBox>
      {editArea && (
        <EditUserFilter
          onClick={props.setArea}
          data={REGION}
          title={title}
          zIndex={props.zIndex}
          type="area"
        ></EditUserFilter>
      )}
      {!editArea && (
        <Row marginRight="2.4rem" paddingLeft="1rem">
          <Text level={3} color="#232735" align="left" width="20.5rem">
            {props.area}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => setEditArea(!editArea)}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem" }}
          fill="#232735"
        ></Edit>
      </ButtonWrapper>
    </Content>
  );
}

export function Interest(props) {
  const title = props.interest;
  const [editInterest, setEditInterest] = useState(true);
  return (
    <Content>
      <CheckBox type="checkbox" id="interest"></CheckBox>
      {editInterest && (
        <EditUserFilter
          onClick={props.setInterest}
          data={FIELD}
          title={title}
          zIndex={props.zIndex}
          type="interest"
        ></EditUserFilter>
      )}
      {!editInterest && (
        <Row marginRight="2.4rem" paddingLeft="1rem">
          <Text level={3} color="#232735" align="left" width="20.5rem">
            {props.interest}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => setEditInterest(!editInterest)}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem" }}
          fill="#232735"
        ></Edit>
      </ButtonWrapper>
    </Content>
  );
}

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
    width: fit-content;
    text-align: center;
    padding-bottom: 0.2rem;
    margin-right: ${props.marginRight};
    padding-left: ${props.paddingLeft};
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

const CheckBox = styled.input`
  background-color: #c8acee;
  border-radius: 2rem;
  border: none;
  width: 2rem;
  outline: none;
  align-items: center;
  height: 1.1rem;
  margin: unset;
  margin-right: 0.84rem;
`;
