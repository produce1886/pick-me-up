import styled, { css } from "styled-components";

export default styled.p`
    ${(props) => css`
        width: 6.16rem;
        height: 1.6rem;
        font-family: inherit;
        border: ${props.border} solid ${props.color};
        background: #ffffff;
        border-radius: 0.2rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    `}
`;