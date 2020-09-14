import Overlay from "../../atoms/Modal/Overlay";
import Wrapper from "../../atoms/Modal/Wrapper";
import Text from "../../atoms/Text";
import DefaultInfo from "../../molecules/ModalProfile/DefaultInfo";
import styled, { css } from "styled-components";
import React, { useState, useCallback } from "react";
function EditModal(props) {
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
          <DefaultInfo></DefaultInfo>
        </Inner>
      </Wrapper>
    </>
  );
}

export default EditModal;

//width 수정필요
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
`;
