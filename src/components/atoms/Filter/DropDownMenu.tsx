import styled, { css } from "styled-components";

type DropDownMenuProps = {
  width: string | number;
  height: string | number;
  top: string | number;
  left: string | number;
  zIndex: string | number;
};

export default styled.div`
  ${(props: DropDownMenuProps) => css`
    width: ${props.width};
    height: ${props.height};
    top: ${props.top};
    left: ${props.left};
    z-index: ${props.zIndex};
  `}
  border: none;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: left;
  flex: none;
  position: absolute;
  box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1),
    0.7rem 0 0.5rem rgba(0, 0, 0, 0.1);
`;
