import styled, { css } from "styled-components";

export default styled.div`
  ${(props) => css`
    background-color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    display: ${(props) => (props.visible ? "block" : "none")};
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
  `}
`;
