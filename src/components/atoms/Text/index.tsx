import React from "react";
import styled, { css } from "styled-components";

type TextProps = {
  children: string | string[];
  level?: number;
  width?: number | string;
  height?: number | string;
  weight?: number | string;
  align?: string;
  color?: string;
  deco?: string;
  line?: number | string;
};

function Text(props: TextProps) {
  return <StyledText {...props}>{props.children}</StyledText>;
}

const StyledText = styled.p`
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

export default React.memo(Text);
