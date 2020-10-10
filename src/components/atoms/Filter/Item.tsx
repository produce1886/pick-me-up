import styled, { css } from "styled-components";
import Colors from "@colors";

type ItemProps = {
  width: string | number;
  height: string | number;
  backgroundColor: Colors;
};

export default styled.div`
  ${(props: ItemProps) => css`
    width: ${props.width};
    height: ${props.height};
    background-color: ${props.backgroundColor};
  `}
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 0.2rem 0.4rem 0.2rem 0.4rem;
`;
