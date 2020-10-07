import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import ButtonProps from "../../atoms/Button/button";
import PlusIcon from "../../atoms/Icon/PlusCircle";
import Text from "../../atoms/Text";

function AddButton(props: ButtonProps) {
  return (
    <ButtonWrapper onClick={props.onClick}>
      <PlusIcon
        style={{ width: "0.8rem", height: "0.8rem", marginRight: "0.4rem" }}
        fill={Colors.DEEP_GREY}
      ></PlusIcon>
      <Text level={1} color={Colors.DEEP_GREY}>
        추가
      </Text>
    </ButtonWrapper>
  );
}

export default React.memo(AddButton);

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: none;
  width: 5rem;
  height: 1rem;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  padding: 1rem 0 0.5rem 0.5rem;
`;
