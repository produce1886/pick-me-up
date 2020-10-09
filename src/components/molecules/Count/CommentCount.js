import React from "react";
import Icon from "../../atoms/Icon/Comment";
import Text from "../../atoms/Text";

function CommentCount(props) {
  return (
    <>
      <Icon
        style={{ width: "0.65rem", height: "0.7rem" }}
        fill="#c8acee"
      ></Icon>
      <Text level={1} weight={500} color="#8b90a0">
        {props.count}
      </Text>
    </>
  );
}
export default React.memo(CommentCount);
