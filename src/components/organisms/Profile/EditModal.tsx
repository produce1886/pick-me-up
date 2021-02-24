/* eslint-disable camelcase */
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Colors from "@colors";
import { Profile } from "@src/types/Data";
import ProfileService from "@src/lib/api/Profile";
import axios from "axios";
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
  const [localImage, setLocalImage] = useState(props.localImage);
  const [username, setUsername] = useState(props.username);
  const [introduce, setIntroduce] = useState(props.introduce);
  const [birth, setBirth] = useState(props.birth);
  const [university, setUniversity] = useState(props.university);
  const [major, setMajor] = useState(props.major);
  const [region, setRegion] = useState(props.region || "지역");
  const [interests, setInterests] = useState(props.interests || "관심 분야");
  const [isBirthPublic, setIsBirthPublic] = useState(props.birthPublic);
  const [isRegionPublic, setIsRegionPublic] = useState(props.regionPublic);
  const [isInterestsPublic, setIsInterestsPublic] = useState(
    props.interestsPublic
  );
  const [isUniversityPublic, setIsUniversityPublic] = useState(
    props.universityPublic
  );

  const router = useRouter();
  const userID = router.query.userID.toString();

  const body = {
    username,
    birth,
    university,
    major,
    region,
    introduce,
    interests,
    isBirthPublic,
    isUniversityPublic,
    isRegionPublic,
    isInterestsPublic,
  };

  const updateProfile = () => {
    const formData = new FormData();
    formData.append("image", localImage);
    if (localImage) {
      axios.patch(`${process.env.API_HOST}/users/${userID}/image`, formData);
    } else {
      axios.delete(`${process.env.API_HOST}/users/${userID}/image`);
    }
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
          setLocalImage={setLocalImage}
        ></DefaultInfo>
        <OptionInfo
          birth={birth}
          setBirth={setBirth}
          setMajor={setMajor}
          setUniversity={setUniversity}
          university={university}
          major={major}
          region={region}
          setRegion={setRegion}
          interests={interests}
          setInterests={setInterests}
          isBirthPublic={isBirthPublic}
          setIsBirthPublic={() => setIsBirthPublic(!isBirthPublic)}
          isRegionPublic={isRegionPublic}
          setIsRegionPublic={() => setIsRegionPublic(!isRegionPublic)}
          isInterestsPublic={isInterestsPublic}
          setIsInterestsPublic={() => setIsInterestsPublic(!isInterestsPublic)}
          isUniversityPublic={isUniversityPublic}
          setIsUniversityPublic={() =>
            setIsUniversityPublic(!isUniversityPublic)
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
