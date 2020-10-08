import React, { useState } from "react";
import Wrapper from "../../atoms/Filter/FilterItem";
import Text from "../../atoms/Text";

function FilterItem(props) {
  const [mouseon, setColor] = useState(false);

  return (
    <Wrapper
      width={props.width}
      height={props.height}
      onMouseOver={() => setColor(true)}
      onMouseOut={() => setColor(false)}
      onClick={() => {
        props.setSelected(props.item);
      }}
      backgroundColor={mouseon ? "#f5edff" : "#ffffff"}
    >
      <Text
        line="1rem"
        level={3}
        color={props.selectedtitle === props.item.title ? "#9c69e2" : "#232735"}
        align="left"
      >
        {props.item.title}
      </Text>
    </Wrapper>
  );
}

export default React.memo(FilterItem);
