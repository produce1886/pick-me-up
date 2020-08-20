import styled, { css } from "styled-components";

export default styled.div`
  ${(props) => css`
    width: ${props.width};
    height: fit-content;
    border: none;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: left;
    display: flex;
    align-items: left;
    flex: none;
    position: absolute;
    top: ${props.top};
    left: ${props.left};
    box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1),
      0.7rem 0 0.5rem rgba(0, 0, 0, 0.1);
    z-index: ${props.zIndex};
  `}
`;
