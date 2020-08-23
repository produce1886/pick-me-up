import styled, { css } from "styled-components";

export default styled.div`
  width: 100%;
  ${(props) => css`
    height: ${props.height};
  `}
  background-color: #ffffff;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
`;
