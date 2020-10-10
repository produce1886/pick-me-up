import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import Overlay from "../../atoms/Modal/Overlay";
import Wrapper from "../../atoms/Modal/Wrapper";
import DefaultInfo from "../../molecules/ModalProfile/DefaultInfo";
import OptionInfo from "../../molecules/ModalProfile/OptionInfo";
import X from "../../atoms/Icon/X";
import PillButton from "../../molecules/Button/Pill";

function EditModal(props) {
  const router = useRouter();
  const uid = router.query.userid;
  const [birthSecurity, setBirthSecurity] = useState(false);
  const [areaSecurity, setAreaSecurity] = useState(false);
  const [interestSecurity, setInterestSecurity] = useState(false);
  const [UniversitySecurity, setUniversitySecurity] = useState(false);
  const userState = useSelector((state) => state.user);
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

  const onMaskClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }, []);

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
        sex_security: null,
        birth_security: birthSecurity,
        university_security: UniversitySecurity,
        major_security: UniversitySecurity,
        area_security: areaSecurity,
        introduce_security: true,
        interests_security: interestSecurity,
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
    UniversitySecurity,
    areaSecurity,
    interestSecurity,
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
  }, []);

  return (
    <>
      <Overlay visible={props.visible} onClick={onMaskClick}></Overlay>
      <Wrapper visible={props.visible} onClick={onMaskClick}>
        <ButtonWrapper onClick={() => props.onClose()} right="2.4rem">
          <X
            style={{
              width: "1.2rem",
              height: "1.2rem",
              zIndex: 200,
              top: "2.3rem",
              position: "absolute",
            }}
            fill="#232735"
          ></X>
        </ButtonWrapper>
        <Inner>
          {!isLoading && data && (
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
                interestSecurity={interestSecurity}
                setInterestSecurity={() =>
                  setInterestSecurity(!interestSecurity)
                }
                UniversitySecurity={UniversitySecurity}
                setUniversitySecurity={() =>
                  setUniversitySecurity(!UniversitySecurity)
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
                  color="#fff"
                  text="수정하기"
                ></PillButton>
              </ButtonWrapper>
            </>
          )}
        </Inner>
      </Wrapper>
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
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
  margin: unset;
  padding: unset;
  outline: none;
  position: absolute;
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`;
