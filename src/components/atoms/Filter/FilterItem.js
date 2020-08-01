import styled, { css } from "styled-components";

export default styled.div`
  ${(props) => css`
    width: 6.2rem;
    height: 1.6rem;
    border: none;
    background-color: ${props.backgroundColor};
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
  `}
`;
