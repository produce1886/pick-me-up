import styled, { css } from "styled-components";

export default styled.p`
    ${(props) => css`
        width: 6.2rem;
        height: 1.8rem;
        font-family: inherit;
        background: ${props.background};
        border-radius: 0rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    `}
`;