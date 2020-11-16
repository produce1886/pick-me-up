import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import Colors from "@colors";
import Modal from "../../atoms/Modal/index";
import DefaultInfo from "../../molecules/ModalProfile/DefaultInfo";
import OptionInfo from "../../molecules/ModalProfile/OptionInfo";
import X from "../../atoms/Icon/X";
import PillButton from "../../molecules/Button/Pill";
import UserState from "../../../types/User";

type ButtonWrapperProps = {
  bottom?: string;
  top?: string;
  right?: string;
};

type EditModalProps = {
  isVisible: boolean;
  onClose: () => void;
  data: JSON;
  image: string;
  username: string;
  introduce: string;
  birth: string;
  university: string;
  major: string;
  area: string;
  interest: string;
  birthSecurity: boolean;
  areaSecurity: boolean;
  interestSecurity: boolean;
  universitySecurity: boolean;
};

function EditModal(props: EditModalProps) {
  const router = useRouter();
  const uid = router.query.userid;
  const sexSecurity = false;
  const [birthSecurity, setBirthSecurity] = useState(false);
  const [areaSecurity, setAreaSecurity] = useState(false);
  const [interestsSecurity, setInterestSecurity] = useState(false);
  const [universitySecurity, setUniversitySecurity] = useState(false);
  const userState = useSelector((state: { user: UserState }) => state.user);
  const { email } = userState.userData;
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [birth, setBirth] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [area, setArea] = useState("지역");
  const [interest, setInterest] = useState("관심 분야");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const put = useCallback(() => {
    try {
      const body = {
        email,
        username,
        sex: "",
        birth,
        university,
        major,
        area,
        introduce,
        image,
        interests: interest,
        sex_security: sexSecurity,
        birth_security: birthSecurity,
        university_security: universitySecurity,
        major_security: universitySecurity,
        area_security: areaSecurity,
        introduce_security: true,
        interests_security: interestsSecurity,
      };
      axios.put(`${process.env.API_HOST}/users/${uid}`, body);
      props.onClose();
    } catch (error) {
      console.log(error);
    }
  }, [
    email,
    username,
    birth,
    university,
    major,
    area,
    introduce,
    image,
    interest,
    birthSecurity,
    universitySecurity,
    areaSecurity,
    interestsSecurity,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(`${process.env.API_HOST}/users/${uid}`);
        setImage(result.data.image);
        setUsername(result.data.username);
        setIntroduce(result.data.introduce);
        setBirth(result.data.birth);
        setUniversity(result.data.university);
        setMajor(result.data.major);
        setArea(result.data.area);
        setInterest(result.data.interests);
        setBirthSecurity(result.data.birth_security);
        setAreaSecurity(result.data.area_security);
        setInterestSecurity(result.data.interests_security);
        setUniversitySecurity(result.data.university_security);
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (!data) {
      fetchData();
    }
  }, [data]);
  /*
  useEffect(() => {
    setImage(props.image);
    setUsername(props.username);
    setIntroduce(props.introduce);
    setBirth(props.birth);
    setUniversity(props.university);
    setMajor(props.major);
    setArea(props.area);
    setInterest(props.interest);
    setBirthSecurity(props.birthSecurity);
    setAreaSecurity(props.areaSecurity);
    setInterestSecurity(props.interestSecurity);
    setUniversitySecurity(props.universitySecurity);
  }, [
    image,
    username,
    introduce,
    birth,
    university,
    major,
    area,
    interest,
    birthSecurity,
    areaSecurity,
    interestSecurity,
    universitySecurity,
  ]);
  */
  return (
    <>
      <Modal isVisible={props.isVisible} onClose={props.onClose}>
        <ButtonWrapper onClick={() => props.onClose()} right="2.4rem">
          <X
            style={{
              width: "1.2rem",
              height: "1.2rem",
              zIndex: 200,
              top: "2.3rem",
              position: "absolute",
            }}
            fill={Colors.BLACK}
          ></X>
        </ButtonWrapper>
        <Inner>
          {!isLoading && (
            <>
              <DefaultInfo
                image={image}
                setImage={setImage}
                username={username}
                setUsername={setUsername}
                introduce={introduce}
                setIntroduce={setIntroduce}
              ></DefaultInfo>
              <OptionInfo
                birthSecurity={birthSecurity}
                setBirthSecurity={() => setBirthSecurity(!birthSecurity)}
                areaSecurity={areaSecurity}
                setAreaSecurity={() => setAreaSecurity(!areaSecurity)}
                interestsSecurity={interestsSecurity}
                setInterestSecurity={() =>
                  setInterestSecurity(!interestsSecurity)
                }
                universitySecurity={universitySecurity}
                setUniversitySecurity={() =>
                  setUniversitySecurity(!universitySecurity)
                }
                birth={birth}
                setBirth={setBirth}
                setMajor={setMajor}
                setUniversity={setUniversity}
                university={university}
                major={major}
                area={area}
                setArea={setArea}
                interest={interest}
                setInterest={setInterest}
              ></OptionInfo>
              <ButtonWrapper bottom="1.5rem" onClick={put} right="1.4rem">
                <PillButton
                  weight={500}
                  color={Colors.WHITE}
                  text="수정하기"
                ></PillButton>
              </ButtonWrapper>
            </>
          )}
        </Inner>
      </Modal>
    </>
  );
}

export default EditModal;

const Inner = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 0.24rem 0.48rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  align-items: center;
  position: relative;
  padding: 1rem 5rem;
  margin-bottom: 5rem;
`;

const ButtonWrapper = styled.button`
  ${(props: ButtonWrapperProps) => css`
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    border: none;
    margin: unset;
    padding: unset;
    outline: none;
    position: absolute;
    bottom: ${props.bottom};
    top: ${props.top};
    right: ${props.right};
  `}
`;
