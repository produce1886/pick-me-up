import styled, { css } from "styled-components";
import Colors from "@colors";

export default styled.div`
  width: 100%;
  ${(props: { height?: string }) => css`
    height: ${props.height};
  `}
  background-color: ${Colors.WHITE};
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
`;
