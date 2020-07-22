import styled, { css } from "styled-components";

export default styled.div`
  width: 100%;
  height: 18.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => css`
    background-color: ${props.color};
  `}
`;
