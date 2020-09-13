import styled, { css } from "styled-components";
export default styled.div`
  width: 30rem;
  min-width: 650px;
  height: fit-content;
  max-height: 62rem;
  overflow-y: auto;
  box-sizing: border-box;
  display: ${(props: { visible: boolean }) =>
    props.visible ? "block" : "none"};
  position: absolute;
  top: 8.4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  outline: 0;
`;
