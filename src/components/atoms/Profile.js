import styled, { css } from "styled-components";

export default styled.div`
  width: fit-content;
  align-items: center;
  display: flex;
  ${(props) => css`
    flex-direction: ${props.direction};
  `}
`;
