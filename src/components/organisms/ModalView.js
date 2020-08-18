import styled, { css } from "styled-components";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/ModalView/Top";
import Middle from "../molecules/ModalView/Middle";
import Bottom from "../molecules/ModalView/Bottom";
import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export default function ModalView(props) {
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
        height="70rem"
        onClick={props.maskClosable ? onMaskClick : null}
      >
        <Inner>
          <Top type={props.type}></Top>
          <Middle type="project"></Middle>
          <Bottom count="1N"></Bottom>
        </Inner>
      </Wrapper>
    </>
  );
}
