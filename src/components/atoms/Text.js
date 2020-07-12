import styled, { css } from "styled-components";

export default styled.p`
  ${(props) => css`
    width: ${props.width};
    font-weight: ${props.weight};
    text-align: ${props.align};
    font-size: ${0.6 + props.level * 0.08}rem;
    color: ${props.color};
    margin: 0;
    padding: 0;
    text-decoration: ${props.deco};
    font-family: "Noto Sans KR", sans-serif;
    line-height: ${props.line};
  `}
`;
