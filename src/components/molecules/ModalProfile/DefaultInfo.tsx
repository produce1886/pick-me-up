import React, { useState } from "react";
import styled, { css } from "styled-components";
import Colors from "@colors";
import Profile from "@src/components/molecules/Profile";
import Text from "../../atoms/Text";
import User from "../../atoms/Icon/User";
import Camera from "../../atoms/Icon/Camera";
import Edit from "../../atoms/Icon/Edit";

type DefaultInfoProps = {
  image: string;
  username: string;
  introduce: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setIntroduce: React.Dispatch<React.SetStateAction<string>>;
};

function DefaultInfo(props: DefaultInfoProps) {
  const [editIntroduce, setEditIntroduce] = useState(false);
  const [editUsername, setEditUsername] = useState(false);

  const onChangeUsernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setUsername(e.target.value);
  };
  const onChangeIntroduceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setIntroduce(e.target.value);
  };
  const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <Wrapper>
      <Title>
        <Text weight={600} level={8} color={Colors.BLACK}>
          내 정보 수정
        </Text>
      </Title>
      <Div>
        <Text weight={600} level={3} color={Colors.BLACK}>
          프로필 사진
        </Text>

        <label htmlFor="upload">
          <ProfileInput
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="upload"
            onChange={onChangeImageHandler}
          ></ProfileInput>
          <Camera
            style={{ width: "0.88rem", height: "0.72rem" }}
            fill={Colors.BLACK}
          ></Camera>
        </label>
      </Div>
      <Profile profileImage={props.image} size="3.6rem" margin="0" />
      <Content>
        <Div>
          <DivTitle>
            <User
              style={{
                width: "0.72rem",
                height: "0.8rem",
                marginRight: "0.32rem",
              }}
              fill={Colors.GREY}
            ></User>
            <Text weight={600} level={3} color={Colors.BLACK}>
              닉네임
            </Text>
          </DivTitle>
          <ButtonWrapper onClick={() => setEditUsername(!editUsername)}>
            <Edit
              style={{ width: "0.8rem", height: "0.8rem" }}
              fill={Colors.BLACK}
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
            maxLength={8}
          ></Input>
        )}
        {!editUsername && (
          <Text level={3} color={Colors.BLACK} align="center">
            {props.username}
          </Text>
        )}
      </Content>
      <Content>
        <Div>
          <Text weight={600} level={3} color={Colors.BLACK}>
            나를 소개할 한 마디
          </Text>
          <ButtonWrapper onClick={() => setEditIntroduce(!editIntroduce)}>
            <Edit
              style={{ width: "0.8rem", height: "0.8rem" }}
              fill={Colors.BLACK}
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
            maxLength={35}
          ></Input>
        )}
        {!editIntroduce && (
          <Text level={3} color={Colors.BLACK} align="center">
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
  border-bottom: 0.08rem solid ${Colors.LIGHT_GREY};
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
  ${(props: { width: string }) => css`
    background-color: ${Colors.LIGHT_GREY};
    border-radius: 0.6rem;
    border: 0.04rem solid ${Colors.GREY};
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
