import styled, { css } from "styled-components";

export default styled.p`
    ${(props) => css`
        width: ${props.width};
        height: ${props.height};
        font-family: inherit;
        border: ${props.border} solid ${props.color};
        background: ${props.background};
        border-radius: ${props.radius};
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding: 0 0.4rem 0 0.4rem;
        margin: 0 0.4rem 0 0rem;
    `}
`;