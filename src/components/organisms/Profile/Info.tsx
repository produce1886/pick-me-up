/* eslint-disable camelcase */
import React from "react";
import styled from "styled-components";
import { Profile } from "@src/types/Data";
import User from "../../atoms/Icon/User";
import Birth from "../../atoms/Icon/Birth";
import University from "../../atoms/Icon/University";
import Area from "../../atoms/Icon/Area";
import Heart from "../../atoms/Icon/Heart";
import InfoUnit from "./InfoUnit";

function Info(props: Profile) {
  const {
    username,
    birth,
    university,
    major,
    area,
    interests,
    birth_security,
    university_security,
    area_security,
    interests_security,
  } = props;

  const InfoDataItems = [
    {
      id: 0,
      icon: User,
      width: "0.64rem",
      height: "0.72rem",
      content: username,
      isPublic: false,
    },
    {
      id: 1,
      icon: Birth,
      width: "0.8rem",
      height: "0.8rem",
      content: birth,
      isPublic: birth_security,
    },
    {
      id: 2,
      icon: University,
      width: "0.8rem",
      height: "0.72rem",
      university,
      major,
      isPublic: university_security,
    },
    {
      id: 3,
      icon: Area,
      width: "0.6rem",
      height: "0.72rem",
      content: area,
      isPublic: area_security,
    },
    {
      id: 4,
      icon: Heart,
      width: "0.83rem",
      height: "0.72rem",
      content: interests,
      isPublic: interests_security,
    },
  ];

  const renderInfo = InfoDataItems.map(
    (item) => item.isPublic && <InfoUnit key={item.id} {...item}></InfoUnit>
  );

  return <Wrapper>{renderInfo}</Wrapper>;
}

export default React.memo(Info);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 1.8rem 0;
  box-sizing: border-box;
`;
