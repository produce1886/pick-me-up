import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import Text from "../atoms/Text";
import Wrapper from "../atoms/Wrapper/Tag";
import IconX from "../atoms/Icon/X";

type TagProps = {
  text: string;
  onClick?: () => void;
  tagType?: "MODAL_WRITE" | "MODAL_VIEW";
  isModal?: boolean;
};

function Tag(props: TagProps) {
  let background = Colors.PURPLE;
  let borderColor = Colors.PURPLE;
  let textColor = Colors.WHITE;
  if (props.tagType === "MODAL_WRITE") {
    background = Colors.LIGHT_GREY;
    borderColor = Colors.GREY;
    textColor = Colors.BLACK;
  } else if (props.tagType === "MODAL_VIEW") {
    background = Colors.WHITE;
    borderColor = Colors.GREY;
    textColor = Colors.GREY;
  }

  return (
    <Wrapper backgroundColor={background} borderColor={borderColor}>
      <Text level={0.5} color={textColor} align="center">
        {props.text}
      </Text>
      {props.isModal && (
        <IconButton onClick={props.onClick}>
          <IconX
            style={{
              width: "0.6rem",
              height: "0.6rem",
            }}
            fill={Colors.BLACK}
          ></IconX>
        </IconButton>
      )}
    </Wrapper>
  );
}

export default React.memo(Tag);

const IconButton = styled.button`
  width: fit-content;
  height: fit-content;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 0 0 0.2rem;
  border: none;
`;
