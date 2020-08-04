import styled, { css } from "styled-components";

export default styled.div`
  margin-right: 0.3rem;
  overflow: hidden;
  ${(props) => css`
    width: ${props.size};
    height: ${props.size};
    border-radius: ${props.size};
  `}
`;
