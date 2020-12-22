/* eslint-disable camelcase */
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Colors from "@colors";
import { Profile } from "@src/types/Data";
import ProfileService from "@src/lib/api/Profile";
import Modal from "../../atoms/Modal/index";
import DefaultInfo from "../../molecules/ModalProfile/DefaultInfo";
import OptionInfo from "../../molecules/ModalProfile/OptionInfo";
import X from "../../atoms/Icon/X";
import PillButton from "../../molecules/Button/Pill";

type EditModalProps = Profile & {
  onClose: () => void;
  reload: number;
  setReload: React.Dispatch<React.SetStateAction<number>>;
};

function EditModal(props: EditModalProps) {
  const [image, setImage] = useState(props.image);
  const [username, setUsername] = useState(props.username);
  const [introduce, setIntroduce] = useState(props.introduce);
  const [birth, setBirth] = useState(props.birth);
  const [university, setUniversity] = useState(props.university);
  const [major, setMajor] = useState(props.major);
  const [area, setArea] = useState(props.area || "지역");
  const [interests, setInterests] = useState(props.interests || "관심 분야");
  const [birthSecurity, setBirthSecurity] = useState(props.birth_security);
  const [areaSecurity, setAreaSecurity] = useState(props.area_security);
  const [interestsSecurity, setInterestsSecurity] = useState(
    props.interests_security
  );
  const [universitySecurity, setUniversitySecurity] = useState(
    props.university_security
  );

  const router = useRouter();
  const userID = router.query.userID.toString();

  const body = {
    email: props.email,
    username,
    sex: "",
    birth,
    university,
    major,
    area,
    introduce,
    image,
    interests,
    sex_security: false,
    introduce_security: true,
    birth_security: birthSecurity,
    university_security: universitySecurity,
    major_security: universitySecurity,
    area_security: areaSecurity,
    interests_security: interestsSecurity,
  };

  const updateProfile = () => {
    ProfileService.updateProfile(userID, body)
      .then(() => props.onClose())
      .then(() => props.setReload(props.reload + 1));
  };

  return (
    <Modal isVisible={true} onClose={props.onClose}>
      <XButton onClick={props.onClose}>
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
      </XButton>
      <InnerWrapper>
        <DefaultInfo
          image={image}
          setImage={setImage}
          username={username}
          setUsername={setUsername}
          introduce={introduce}
          setIntroduce={setIntroduce}
        ></DefaultInfo>
        <OptionInfo
          birth={birth}
          setBirth={setBirth}
          setMajor={setMajor}
          setUniversity={setUniversity}
          university={university}
          major={major}
          area={area}
          setArea={setArea}
          interests={interests}
          setInterests={setInterests}
          birthSecurity={birthSecurity}
          setBirthSecurity={() => setBirthSecurity(!birthSecurity)}
          areaSecurity={areaSecurity}
          setAreaSecurity={() => setAreaSecurity(!areaSecurity)}
          interestsSecurity={interestsSecurity}
          setInterestSecurity={() => setInterestsSecurity(!interestsSecurity)}
          universitySecurity={universitySecurity}
          setUniversitySecurity={() =>
            setUniversitySecurity(!universitySecurity)
          }
        ></OptionInfo>
        <UpdateButtonWrapper>
          <PillButton
            onClick={updateProfile}
            weight={500}
            color={Colors.WHITE}
            text="수정하기"
          ></PillButton>
        </UpdateButtonWrapper>
      </InnerWrapper>
    </Modal>
  );
}

export default EditModal;

const InnerWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${Colors.WHITE};
  box-sizing: border-box;
  box-shadow: 0 0.24rem 0.48rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  align-items: center;
  position: relative;
  padding: 1rem 5rem;
  margin-bottom: 5rem;
`;

const XButton = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  outline: none;
  position: absolute;
  right: 2.4rem;
`;

const UpdateButtonWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: 1.5rem;
  right: 1.4rem;
`;
