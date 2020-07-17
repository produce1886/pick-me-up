import styled, { css } from "styled-components";

export default styled.p`
    ${(props) => css`
        width: ${props.width};
        height: 1.6rem;
        font-family: inherit;
        border: 0.04rem solid #d3d4d8;
        background: ${props.background};
        border-radius: 0.2rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    `}
`;