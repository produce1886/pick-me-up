import styled, { css } from "styled-components";
import Colors from "../Colors";

type TagProps = {
  backgroundColor: Colors;
  borderColor: Colors;
};

export default styled.div`
  width: fit-content;
  height: 1rem;
  display: flex;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0 0.6rem 0 0.6rem;
  margin: 0 0.1rem 0 0.1rem;
  flex-direction: row;
  ${(props: TagProps) => css`
    background-color: ${props.backgroundColor};
    border: solid 0.01rem ${props.borderColor};
  `}
`;
