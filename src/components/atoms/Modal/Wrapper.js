import styled, { css } from "styled-components";

export default styled.div`
  ${(props) => css`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? "block" : "none")};
    position: absolute;
    height: ${props.height};
    top: 3.5rem;
    left: 15rem;
    bottom: 0;
    right: 15rem;
    z-index: 1000;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    max-height: 62rem;
  `}
`;
