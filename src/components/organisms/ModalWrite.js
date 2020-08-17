import styled, { css } from "styled-components";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/Modal/ModalTop";
import Middle from "../molecules/Modal/ModalMiddle";
import Bottom from "../molecules/Modal/ModalBottom";

export default function Modalblock(props) {
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
          <Top type={props.type}></Top>
          <Middle type={props.type}></Middle>
          <Bottom ismodal={props.ismodal}></Bottom>
        </Inner>
      </Wrapper>
    </>
  );
}
