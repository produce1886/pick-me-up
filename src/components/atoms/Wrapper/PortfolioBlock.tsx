import styled, { css } from "styled-components";
import Colors from "@colors";

export default styled.div`
  width: 15.2rem;
  height: 15.2rem;
  border-radius: 0.32rem;
  box-shadow: 0 0.1rem 0.32rem 0 rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;
  margin: 0 0.4rem 0.8rem 0.4rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props: { isSkeleton: boolean }) => css`
    background-color: ${props.isSkeleton ? Colors.WHITE : Colors.GREY};
  `}
`;
