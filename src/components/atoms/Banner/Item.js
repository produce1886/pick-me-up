import styled, { css } from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => css`
    background-color: ${props.color};
  `}
`;
