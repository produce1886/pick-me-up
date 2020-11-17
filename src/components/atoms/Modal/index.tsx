import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import Colors from "@colors";

export type WrapperProps = {
  isVisible: boolean;
  children?: JSX.Element[] | JSX.Element;
  onClose?: () => void;
};

function Modal(props: WrapperProps) {
  const onMaskClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }, []);

  return (
    <>
      <Overlay isVisible={props.isVisible} onClick={onMaskClick} />
      <Wrapper isVisible={props.isVisible} onClick={onMaskClick}>
        <Inner>{props.children}</Inner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  ${(props: WrapperProps) => css`
    width: 30rem;
    min-width: 650px;
    height: fit-content;
    max-height: 62rem;
    overflow-y: auto;
    box-sizing: border-box;
    display: ${props.isVisible ? "block" : "none"};
    position: absolute;
    top: 8.4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    outline: 0;
  `}
`;

const Overlay = styled.div`
  ${(props: WrapperProps) => css`
    background-color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    display: ${props.isVisible ? "block" : "none"};
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
  `}
`;

const Inner = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${Colors.WHITE};
  box-sizing: border-box;
  box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 0.8rem;
  align-items: center;
  position: relative;
`;

export default React.memo(Modal);
