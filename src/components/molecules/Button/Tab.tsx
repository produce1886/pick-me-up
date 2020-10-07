import React from "react";
import styled, { css } from "styled-components";
import Colors from "@colors";
import ButtonProps from "../../atoms/Button/button";
import Text from "../../atoms/Text";

type TabButtonProps = ButtonProps & {
  isSelected: boolean;
};

function TabButton(props: TabButtonProps) {
  return (
    <Wrapper isSelected={props.isSelected} onClick={props.onClick}>
      <Text level={3} weight={props.isSelected && "bold"} color={Colors.BLACK}>
        {props.text}
      </Text>
    </Wrapper>
  );
}

export default React.memo(TabButton);

const Wrapper = styled.div`
  width: 4.8rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  ${(props: { isSelected: boolean }) => css`
    border-bottom: ${props.isSelected && "3px solid #232735"};
  `}
`;
