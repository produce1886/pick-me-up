import React from "react";
import Colors from "@colors";
import ButtonProps from "../../atoms/Button/button";
import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Button/Pill";
import PlusIcon from "../../atoms/Icon/Plus";

function LoadMoreButton(props: ButtonProps) {
  return (
    <Wrapper center={true} onClick={props.onClick}>
      <Text level={1}>더 불러오기</Text>
      <PlusIcon
        style={{
          width: "0.4rem",
          height: "0.4rem",
          margin: "0 0 0 0.2rem",
        }}
        fill={Colors.WHITE}
      ></PlusIcon>
    </Wrapper>
  );
}

export default React.memo(LoadMoreButton);
