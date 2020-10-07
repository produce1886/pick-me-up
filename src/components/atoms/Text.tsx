import styled, { css } from "styled-components";

type TextProps = {
  width?: number;
  height?: number;
  weight?: number;
  align?: number;
  level?: number;
  deco?: string;
  line?: number;
  color?: string;
};
export default styled.p`
  ${(props: TextProps) => css`
    width: ${props.width};
    height: ${props.height};
    font-weight: ${props.weight};
    text-align: ${props.align};
    font-size: ${0.48 + props.level * 0.08}rem;
    color: ${props.color};
    margin: 0;
    padding: 0;
    text-decoration: ${props.deco};
    font-family: "Noto Sans KR", sans-serif;
    line-height: ${props.line};
  `}
`;
