import React, { useState } from "react";
import styled, { css } from "styled-components";
import Text from "../../atoms/Text";
import User from "../../atoms/Icon/User";
import Camera from "../../atoms/Icon/Camera";
import Edit from "../../atoms/Icon/Edit";
import Thumbnail from "../../atoms/Icon/ThumbNail";

function DefaultInfo(props) {
  const [editIntroduce, setEditIntroduce] = useState(false);
  const [editUsername, setEditUsername] = useState(false);

  const onChangeUsernameHandler = (e) => {
    props.setUsername(e.target.value);
  };
  const onChangeIntroduceHandler = (e) => {
    props.setIntroduce(e.target.value);
  };
  const onChangeImageHandler = (e) => {
    props.setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <Wrapper>
      <Title>
        <Text weight={600} level={8} color="#232735">
          내 정보 수정
        </Text>
      </Title>
      <Div>
        <Text weight={600} level={3} color="#232735">
          프로필 사진
        </Text>

        <label for="upload">
          <ProfileInput
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="upload"
            onChange={onChangeImageHandler}
          ></ProfileInput>
          <Camera
            style={{ width: "0.88rem", height: "0.72rem" }}
            fill="#232735"
          ></Camera>
        </label>
      </Div>
      {props.image ? (
        <img
          src={props.image}
          style={{
            width: "3.6rem",
            height: "3.6rem",
            borderRadius: "50%",
          }}
        />
      ) : (
        <Thumbnail
          style={{
            width: "3.6rem",
            height: "3.6rem",
            marginTop: "0.6rem",
            marginBottom: "1rem",
          }}
          fill="#d3d4d8"
        ></Thumbnail>
      )}
      <Content>
        <Div>
          <DivTitle>
            <User
              style={{
                width: "0.72rem",
                height: "0.8rem",
                marginRight: "0.32rem",
              }}
              fill="#d3d4d8"
            ></User>
            <Text weight={600} level={3} color="#232735">
              닉네임
            </Text>
          </DivTitle>
          <ButtonWrapper onClick={() => setEditUsername(!editUsername)}>
            <Edit
              style={{ width: "0.8rem", height: "0.8rem" }}
              fill="#232735"
            ></Edit>
          </ButtonWrapper>
        </Div>
        {editUsername && (
          <Input
            placeholder="username"
            type="text"
            value={props.username}
            onChange={onChangeUsernameHandler}
            width="6rem"
            maxLength="8"
          ></Input>
        )}
        {!editUsername && (
          <Text level={3} color="#232735" align="center">
            {props.username}
          </Text>
        )}
      </Content>
      <Content>
        <Div>
          <Text weight={600} level={3} color="#232735">
            나를 소개할 한 마디
          </Text>
          <ButtonWrapper onClick={() => setEditIntroduce(!editIntroduce)}>
            <Edit
              style={{ width: "0.8rem", height: "0.8rem" }}
              fill="#232735"
            ></Edit>
          </ButtonWrapper>
        </Div>
        {editIntroduce && (
          <Input
            placeholder="introduce textbox"
            type="text"
            value={props.introduce}
            onChange={onChangeIntroduceHandler}
            width="25rem"
            maxLength="35"
          ></Input>
        )}
        {!editIntroduce && (
          <Text level={3} color="#232735" align="center">
            {props.introduce}
          </Text>
        )}
      </Content>
    </Wrapper>
  );
}

export default DefaultInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1.2rem;
`;

const Title = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 1.7rem;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  padding-bottom: 0.32rem;
  border-bottom: 0.08rem solid #f0f1f3;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  box-sizing: border-box;
`;

const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
`;

const Input = styled.input`
  ${(props) => css`
    background-color: #f0f1f3;
    border-radius: 0.6rem;
    border: 0.04rem solid #d3d4d8;
    padding: unset;
    box-sizing: border-box;
    width: ${props.width};
    outline: none;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 0.64rem;
    margin: 0 0 0.3rem 0;
    text-align: center;
    align-items: center;
    height: 1.2rem;
    maxlength: ${props.maxLength};
  `}
`;

const ProfileInput = styled.input`
  display: none;
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

const Content = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 4.5rem;
  box-sizing: border-box;
`;
