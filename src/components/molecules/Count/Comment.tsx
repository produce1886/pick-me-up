import React from "react";
import Colors from "@colors";
import Icon from "../../atoms/Icon/Comment";
import Text from "../../atoms/Text";

function CommentCount(props: { count: string }) {
  return (
    <>
      <Icon
        style={{ width: "0.65rem", height: "0.7rem" }}
        fill={Colors.PURPLE}
      ></Icon>
      <Text level={1} weight={500} color={Colors.DEEP_GREY}>
        {props.count}
      </Text>
    </>
  );
}
export default React.memo(CommentCount);
