import React from "react";
import Icon from "../../atoms/Icon/View";
import Text from "../../atoms/Text";

function ViewCount(props) {
  return (
    <>
      <Icon style={{ width: "1rem", height: "0.7rem" }} fill="#c8acee"></Icon>
      <Text level={1} weight={500} color="#8b90a0">
        {props.count}
      </Text>
    </>
  );
}

export default React.memo(ViewCount);
