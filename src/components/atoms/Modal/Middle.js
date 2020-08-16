import styled, { css } from "styled-components";

export default styled.div`
  ${(props) => css`
    width: 100%;
    height: ${props.height};
    background-color: #ffffff;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    padding: 1.5rem;
    min-height: ${props.minheight};
  `}
`;
