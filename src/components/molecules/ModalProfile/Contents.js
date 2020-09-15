import styled, { css } from "styled-components";
import Text from "../../atoms/Text";
import Edit from "../../atoms/Icon/Edit";
import X from "../../atoms/Icon/X";
import React, { useState } from "react";
export function University(props) {
  const [univ, setUniv] = useState("이화여자대학교");
  const [major, setMajor] = useState("융합콘텐츠학");
  const [editUniv, setEditUniv] = useState(false);
  const onChangeUnivHandler = (e) => {
    setUniv(e.target.value);
  };
  const onChangeMajorHandler = (e) => {
    setMajor(e.target.value);
  };
  return (
    <Content>
      <CheckBox type="checkbox" id="birth"></CheckBox>
      {editUniv && (
        <>
          <Input
            placeholder="YYYY.MM.DD"
            type="text"
            value={univ}
            onChange={onChangeUnivHandler}
            width="9rem"
          ></Input>
          <Input
            placeholder="YYYY.MM.DD"
            type="text"
            value={major}
            onChange={onChangeMajorHandler}
            width="9rem"
          ></Input>
        </>
      )}
      {!editUniv && (
        <Row>
          <Text level={3} color="#232735" align="left" width="15rem">
            {univ} {major}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => setEditUniv(!editUniv)}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem" }}
          fill="#232735"
        ></Edit>
      </ButtonWrapper>
      <ButtonWrapper>
        <X style={{ width: "1.2rem", height: "1.2rem" }} fill="#232735"></X>
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
  margin: 0.6rem 0;
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
  width: 20rem;
  padding-left: 2rem;
  text-align: center;
  padding-bottom: 0.2rem;
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
    maxLength=${props.maxLength};
    padding-left: 1rem;
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
`;
