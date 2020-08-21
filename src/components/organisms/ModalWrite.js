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
  const state = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const email = state.userData.email;
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");
  const [projectType, setProjectType] = useState("");

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose(e);
    }
  };

  return (
    <>
      <Overlay visible={props.visible} onClick={onMaskClick} />

      <Wrapper
        tabIndex="-1"
        visible={props.visible}
        height="62rem"
        onClick={onMaskClick}
      >
        <Inner>
          <Top
            type={props.type}
            setCategory={setCategory}
            setField={setField}
            setRegion={setRegion}
            setProjectType={setProjectType}
            setTitle={setTitle}
            name={state.userData.username}
            profileImage={state.userData.image}
          ></Top>
          <Middle type={props.type} setContent={setContent}></Middle>
          <Bottom
            type={props.type}
            ismodal={props.ismodal}
            onClose={props.onClose}
            visible={props.visible}
            category={category}
            field={field}
            region={region}
            projectType={projectType}
            title={title}
            email={email}
            content={content}
          ></Bottom>
        </Inner>
      </Wrapper>
    </>
  );
}
