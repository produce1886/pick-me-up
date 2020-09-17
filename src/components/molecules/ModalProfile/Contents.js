import styled, { css } from "styled-components";
import Text from "../../atoms/Text";
import Edit from "../../atoms/Icon/Edit";
import X from "../../atoms/Icon/X";
import EditUserFilter from "../Filter/EditUserFilter";
import React, { useState, useEffect } from "react";
import { FIELD, REGION } from "../Filter/ItemData";

export function University(props) {
  const cloneDeep = require("lodash/clonedeep");
  const [univ, setUniv] = useState(props.value.university);
  const [major, setMajor] = useState(props.value.major);
  const [editUniv, setEditUniv] = useState(true);
  console.log(props);

  const onChangeUnivHandler = (e) => {
    setUniv(e.target.value);
  };
  const onChangeMajorHandler = (e) => {
    setMajor(e.target.value);
  };
  const removeContent = (value) => {
    const currentIndex = props.eduBackground.indexOf(value);
    let removecontents = cloneDeep(props.eduBackground);
    removecontents.splice(currentIndex, 1);
    props.setEduBackground(removecontents);
  };
  const EditUniv = () => {
    setEditUniv(!editUniv);
    setContents();
  };
  const setContents = () => {
    if (univ.length > 0 && major.length > 0) {
      const newcontent = { university: univ, major: major };
      const newcontents = cloneDeep(props.eduBackground);
      newcontents[props.index] = newcontent;
      props.setEduBackground(newcontents);
    }
  };
  return (
    <Content>
      <CheckBox type="checkbox" id="education"></CheckBox>
      {editUniv && (
        <>
          <Input
            placeholder="학교"
            type="text"
            value={univ}
            onChange={onChangeUnivHandler}
            width="9.7rem"
            marginRight="0.6rem"
          ></Input>
          <Input
            placeholder="전공"
            type="text"
            value={major}
            onChange={onChangeMajorHandler}
            width="9.7rem"
            marginRight="2.3rem"
          ></Input>
        </>
      )}
      {!editUniv && (
        <Row marginRight="2.3rem">
          <Text level={3} color="#232735" align="left" width="19.4rem">
            {univ} {major}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => EditUniv()}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem", marginRight: "0.6rem" }}
          fill="#232735"
        ></Edit>
      </ButtonWrapper>
      <ButtonWrapper
        onClick={() => {
          removeContent(props.value);
        }}
      >
        <X style={{ width: "1.2rem", height: "1.2rem" }} fill="#232735"></X>
      </ButtonWrapper>
    </Content>
  );
}

export function Area(props) {
  const region = "지역";
  const [editArea, setEditArea] = useState(true);
  const [area, setArea] = useState("");
  const EditArea = () => {
    setEditArea(!editArea);
    setContents();
  };
  const removeContent = (value) => {
    const currentIndex = props.areas.indexOf(value);
    let removecontents = [...props.areas];
    removecontents.splice(currentIndex, 1);
    props.setAreas(removecontents);
  };
  const setContents = () => {
    if (area.length > 0) {
      let newcontents = [...props.areas];
      newcontents[props.index] = area;
      props.setAreas(newcontents);
    }
  };
  return (
    <Content>
      <CheckBox type="checkbox" id="area"></CheckBox>
      {editArea && (
        <EditUserFilter
          onClick={setArea}
          data={REGION}
          title={region}
          zIndex={props.zIndex}
          type="area"
        ></EditUserFilter>
      )}
      {!editArea && (
        <Row marginRight="2.3rem">
          <Text level={3} color="#232735" align="left" width="19rem">
            {area}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => EditArea()}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem", marginRight: "0.6rem" }}
          fill="#232735"
        ></Edit>
      </ButtonWrapper>
      <ButtonWrapper
        onClick={() => {
          removeContent(props.value);
        }}
      >
        <X style={{ width: "1.2rem", height: "1.2rem" }} fill="#232735"></X>
      </ButtonWrapper>
    </Content>
  );
}

export function Interest(props) {
  const field = "관심 분야";
  const [editInterest, setEditInterest] = useState(true);
  const [interest, setInterest] = useState("");
  const EditInterest = () => {
    setEditInterest(!editInterest);
    setContents();
  };
  const removeContent = (value) => {
    const currentIndex = props.interests.indexOf(value);
    let removecontents = [...props.interests];
    removecontents.splice(currentIndex, 1);
    props.setInterests(removecontents);
  };
  const setContents = () => {
    if (interest.length > 0) {
      let newcontents = [...props.interests];
      newcontents[props.index] = interest;
      props.setInterests(newcontents);
    }
  };
  return (
    <Content>
      <CheckBox type="checkbox" id="interest"></CheckBox>
      {editInterest && (
        <EditUserFilter
          onClick={setInterest}
          data={FIELD}
          title={field}
          zIndex={props.zIndex}
          type="interest"
        ></EditUserFilter>
      )}
      {!editInterest && (
        <Row marginRight="2.3rem">
          <Text level={3} color="#232735" align="left" width="19rem">
            {interest}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => EditInterest()}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem", marginRight: "0.6rem" }}
          fill="#232735"
        ></Edit>
      </ButtonWrapper>
      <ButtonWrapper
        onClick={() => {
          removeContent(props.value);
        }}
      >
        <X style={{ width: "1.2rem", height: "1.2rem" }} fill="#232735"></X>
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
    width: 20rem;
    text-align: center;
    padding-bottom: 0.2rem;
    align-items: center;
    margin-right: ${props.marginRight};
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
