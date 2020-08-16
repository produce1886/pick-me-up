import styled, { css } from "styled-components";
export default styled.button`
  ${(props) => css`
    width: fit-content;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: ${props.backgroundColor};
    justify-content: center;
    align-items: center;
    padding: 0 0.6rem 0 0.6rem;
    border: none;
    margin: 0 0.1rem 0 0.1rem;
  `}
`;
