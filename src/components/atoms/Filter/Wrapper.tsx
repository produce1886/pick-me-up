import styled, { css } from "styled-components";
import Colors from "@colors";

type WrapperProps = {
  width: string | number;
  height: string | number;
  border: string | number;
  borderColor: Colors;
  backgroundColor: Colors;
};

export default styled.div`
  ${(props: WrapperProps) => css`
    width: ${props.width};
    height: ${props.height};
    border: ${props.border} solid ${props.borderColor};
    background-color: ${props.backgroundColor};
  `}
  font-family: inherit;
  border-radius: 0.2rem;
  padding: 0 0.4rem 0 0.4rem;
  margin: 0 0.6rem 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-sizing: border-box;
`;
