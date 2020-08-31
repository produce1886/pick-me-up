import styled, { css } from "styled-components";

export default styled.div`
  overflow: hidden;
  ${(props) => css`
    width: ${props.size};
    height: ${props.size};
    border-radius: ${props.size};
    margin-right: ${props.noMargin ? "0" : "0.3rem"};
    text-align: center;
  `}
`;
