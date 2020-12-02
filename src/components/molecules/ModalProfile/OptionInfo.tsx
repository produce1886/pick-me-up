import React, { useState } from "react";
import styled, { css } from "styled-components";
import Colors from "@colors";
import Text from "../../atoms/Text";
import Birth from "../../atoms/Icon/Birth";
import Univ from "../../atoms/Icon/University";
import AreaIcon from "../../atoms/Icon/Area";
import Heart from "../../atoms/Icon/Heart";
import Edit from "../../atoms/Icon/Edit";
import { University, Area, Interest } from "./Contents";

type OptionInfoProps = {
  birthSecurity: boolean;
  areaSecurity: boolean;
  interestsSecurity: boolean;
  universitySecurity: boolean;
  birth: string;
  university: string;
  major: string;
  area: string;
  interests: string;
  setBirthSecurity: () => void;
  setAreaSecurity: () => void;
  setInterestSecurity: () => void;
  setUniversitySecurity: () => void;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  setMajor: React.Dispatch<React.SetStateAction<string>>;
  setUniversity: React.Dispatch<React.SetStateAction<string>>;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  setInterests: React.Dispatch<React.SetStateAction<string>>;
};

function OptionInfo(props: OptionInfoProps) {
  const [editBirth, setEditBirth] = useState(false);
  const onChangeBirthHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setBirth(e.target.value);
  };

  return (
    <Wrapper>
      <Title>
        <Text weight={600} level={3} color={Colors.BLACK}>
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
            fill={Colors.GREY}
          ></Birth>
          <Text weight={600} level={3} color={Colors.BLACK}>
            생일
          </Text>
        </DivTitle>
        <Content>
          <ToggleSwitchWrapper>
            <Toggle onClick={props.setBirthSecurity}>
              <ToggleBall isToggled={props.birthSecurity}></ToggleBall>
              <RippleBackground
                isVisible={props.birthSecurity}
              ></RippleBackground>
            </Toggle>
          </ToggleSwitchWrapper>
          {editBirth && (
            <Input
              placeholder="YYYY.MM.DD"
              type="date"
              value={props.birth}
              onChange={onChangeBirthHandler}
              width="21.5rem"
              marginRight="2.4rem"
            ></Input>
          )}
          {!editBirth && (
            <Row marginRight="2.4rem" paddingLeft="1rem" width="18.5rem">
              <Text level={3} color={Colors.BLACK} align="left">
                {props.birth}
              </Text>
            </Row>
          )}
          <ButtonWrapper onClick={() => setEditBirth(!editBirth)}>
            <Edit
              style={{ width: "0.8rem", height: "0.8rem" }}
              fill={Colors.BLACK}
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
            fill={Colors.GREY}
          ></Univ>
          <Text weight={600} level={3} color={Colors.BLACK}>
            학력
          </Text>
        </DivTitle>
        <University
          universitySecurity={props.universitySecurity}
          setUniversitySecurity={props.setUniversitySecurity}
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
            fill={Colors.GREY}
          ></AreaIcon>
          <Text weight={600} level={3} color={Colors.BLACK}>
            활동지역
          </Text>
        </DivTitle>
        <Area
          areaSecurity={props.areaSecurity}
          setAreaSecurity={props.setAreaSecurity}
          setArea={props.setArea}
          area={props.area}
        ></Area>
      </Div>
      <Div>
        <DivTitle>
          <Heart
            style={{
              width: "0.92rem",
              height: "0.8rem",
              marginRight: "0.32rem",
            }}
            fill={Colors.GREY}
          ></Heart>
          <Text weight={600} level={3} color={Colors.BLACK}>
            관심분야
          </Text>
        </DivTitle>
        <Interest
          interestsSecurity={props.interestsSecurity}
          setInterestSecurity={props.setInterestSecurity}
          setInterest={props.setInterests}
          interest={props.interests}
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
  ${(props: { width: string; marginRight: string; paddingLeft: string }) => css`
    width: ${props.width};
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
const Input = styled.input`
  ${(props: { width: string; marginRight: string }) => css`
    background-color: ${Colors.LIGHT_GREY};
    border-radius: 0.32rem;
    border: none;
    box-sizing: border-box;
    width: ${props.width};
    outline: none;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 0.64rem;
    align-items: center;
    height: 1.2rem;
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
const Toggle = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
  background-color: ${Colors.LIGHT_GREY};
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
  background-color: ${Colors.WHITE};
  border: 1px solid ${Colors.LIGHT_GREY};
  height: 1rem;
  width: 1rem;
  transform: ${(props: { isToggled: boolean }) =>
    props.isToggled ? `translateX(0.9rem)` : "translateX(0rem)"};
  &:active {
    background-color: ${Colors.LIGHT_GREY};
  }
`;
const RippleBackground = styled.div`
  ${(props: { isVisible: boolean }) => css`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: radial-gradient(
      circle,
      ${Colors.PURPLE} 10%,
      transparent 10.01%
    );
    background-repeat: no-repeat;
    background-position: 50%;
    pointer-events: none;
    transition: transform 0.5s, opacity 0.3s ease;
    transform: ${props.isVisible ? "scale(10, 10)" : "scale(0, 0)"};
    opacity: ${props.isVisible ? 1 : 0};
    position: absolute;
    z-index: 1;
  `}
`;

const ToggleSwitchWrapper = styled.div`
  diplay: flex;
  flex-direction: column;
`;
