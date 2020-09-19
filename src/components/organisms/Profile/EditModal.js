import Overlay from "../../atoms/Modal/Overlay";
import Wrapper from "../../atoms/Modal/Wrapper";
import DefaultInfo from "../../molecules/ModalProfile/DefaultInfo";
import OptionInfo from "../../molecules/ModalProfile/OptionInfo";
import styled, { css } from "styled-components";
import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
function EditModal(props) {
  const [birthSecurity, setBirthSecurity] = useState(false);
  const [areaSecurity, setAreaSecurity] = useState(false);
  const [interestSecurity, setInterestSecurity] = useState(false);
  const [UniversitySecurity, setUniversitySecurity] = useState(false);
  const state = useSelector((state) => state.user);
  const email = state.userData.email;
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("이화연");
  const [introduce, setIntroduce] = useState("안녕하세요");
  const [birth, setBirth] = useState("YYYY.MM.DD");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [area, setArea] = useState("지역");
  const [interest, setInterest] = useState("관심 분야");

  const onMaskClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }, []);
  return (
    <>
      <Overlay visible={props.visible} onClick={onMaskClick}></Overlay>
      <Wrapper visible={props.visible} onClick={onMaskClick}>
        <Inner>
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
            setInterestSecurity={() => setInterestSecurity(!interestSecurity)}
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
