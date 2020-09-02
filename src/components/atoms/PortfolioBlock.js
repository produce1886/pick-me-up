import styled, { css } from "styled-components";

export default styled.div`
  width: 15.2rem;
  height: 15.2rem;
  border-radius: 0.32rem;
  box-shadow: 0 0.1rem 0.32rem 0 rgba(0, 0, 0, 0.1);
  ${(props) => css`
    background-color: ${props.skeleton ? "#ffffff" : "#d3d4d8"};
  `}
  position: relative;
  box-sizing: border-box;
  margin: 0 0.4rem 0 0.4rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
