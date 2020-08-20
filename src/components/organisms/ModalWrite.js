import styled, { css } from "styled-components";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/Modal/ModalTop";
import Middle from "../molecules/Modal/ModalMiddle";
import Bottom from "../molecules/Modal/ModalBottom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Modalblock(props) {
  const userInfo = useSelector((state) => state.user);
  const userData = userInfo.userData;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState(userData.email);
  const [modalcategory, setModalCategory] = useState("");
  const [modalfield, setModalField] = useState("");
  const [modalregion, setModalRegion] = useState("");
  const [modalprojectType, setModalProjectType] = useState("");

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose(e);
    }
  };

  return (
    <>
      <Overlay
        visible={props.visible}
        onClick={props.maskClosable ? onMaskClick : null}
      />

      <Wrapper
        tabIndex="-1"
        visible={props.visible}
        height="62rem"
        onClick={props.maskClosable ? onMaskClick : null}
      >
        <Inner>
          <Top
            type={props.type}
            setCategory={setModalCategory}
            setField={setModalField}
            setRegion={setModalRegion}
            setProjectType={setModalProjectType}
            category={modalcategory}
            field={modalfield}
            region={modalregion}
            projectType={modalprojectType}
            title={title}
            setTitle={setTitle}
            name={userData.name}
            profilePic={userData.profilePic}
          ></Top>
          <Middle
            type={props.type}
            setContent={setContent}
            content={content}
          ></Middle>
          <Bottom
            ismodal={props.ismodal}
            onClose={props.onClose}
            visible={props.visible}
            category={modalcategory}
            field={modalfield}
            region={modalregion}
            projectType={modalprojectType}
            title={title}
            email={email}
            content={content}
          ></Bottom>
        </Inner>
      </Wrapper>
    </>
  );
}
