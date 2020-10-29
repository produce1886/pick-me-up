import React from "react";
import Colors from "@colors";
import Icon from "../../atoms/Icon/View";
import Text from "../../atoms/Text";

function ViewCount(props: { count: number }) {
  return (
    <>
      <Icon
        style={{ width: "1rem", height: "0.7rem" }}
        fill={Colors.PURPLE}
      ></Icon>
      <Text level={1} weight={500} color={Colors.DEEP_GREY}>
        {props.count}
      </Text>
    </>
  );
}

export default React.memo(ViewCount);
