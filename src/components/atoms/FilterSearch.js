import styled, { css } from "styled-components";

export default styled.div`
${(props) => css`
    width: 100%;
    height: 3rem;
    font-family: inherit;
    border: none;
    border-radius: 0.2rem;
    padding: 0 0.4rem 0 0.4rem;
    margin: 0 0.8rem 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    zindex: ${props.zIndex};
    `}
`;
