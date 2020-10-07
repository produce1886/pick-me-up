import React from "react";
import styled from "styled-components";
import ButtonProps from "../../atoms/Button/button";
import Icon from "../../atoms/Icon/Write";

function WriteButton(props: ButtonProps) {
  return (
    <ButtonWrapper onClick={props.onClick}>
      <Icon style={{ width: "2.4rem", height: "2.4rem" }}></Icon>
    </ButtonWrapper>
  );
}

export default React.memo(WriteButton);

const ButtonWrapper = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-color: transparent;
  border: none;
  position: fixed;
  top: 50%;
  right: 10%;
  box-sizing: border-box;
  border-radius: 1.2rem;
  padding: unset;
  z-index: 999;
`;
