import React, { useState } from "react";
import Colors from "@colors";
import Wrapper from "../../atoms/Filter/Item";
import Text from "../../atoms/Text";

type ItemProps = {
  width: string | number;
  height: string | number;
  item: any;
  setSelected: (arg0: any) => void;
  title: string;
  selectedTitle: string;
};

function FilterItem(props: ItemProps) {
  const [isHover, setColor] = useState(false);

  return (
    <Wrapper
      width={props.width}
      height={props.height}
      onMouseOver={() => setColor(true)}
      onMouseOut={() => setColor(false)}
      onClick={() => {
        props.setSelected(props.item);
      }}
      backgroundColor={isHover ? Colors.LIGHT_PURPLE : Colors.WHITE}
    >
      <Text
        line="1rem"
        level={3}
        color={
          props.selectedTitle === props.title
            ? Colors.DEEP_PURPLE
            : Colors.BLACK
        }
        align="left"
      >
        {props.title}
      </Text>
    </Wrapper>
  );
}

export default React.memo(FilterItem);
