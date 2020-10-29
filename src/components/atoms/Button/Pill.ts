import styled, { css } from "styled-components";
import Colors from "@colors";

type PillButtonProps = {
  center?: boolean;
};

export default styled.button`
  width: fit-content;
  height: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.1);
  background-color: ${Colors.DEEP_PURPLE};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: none;
  padding: 0 0.75rem 0 0.75rem;
  outline: none;
  ${(props: PillButtonProps) =>
    css`
      position: ${props.center ? "absolute" : "none"};
      left: ${props.center ? "45.5%" : "none"};
    `}
`;
