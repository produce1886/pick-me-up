import React, { useState } from "react";
import Colors from "@colors";
import Wrapper from "../../atoms/Filter/Item";
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
      backgroundColor={mouseon ? Colors.LIGHT_PURPLE : Colors.WHITE}
    >
      <Text
        line="1rem"
        level={3}
        color={
          props.selectedtitle === props.item.title
            ? Colors.DEEP_PURPLE
            : Colors.BLACK
        }
        align="left"
      >
        {props.item.title}
      </Text>
    </Wrapper>
  );
}

export default React.memo(FilterItem);
