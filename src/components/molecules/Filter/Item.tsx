import React, { useState } from "react";
import Colors from "@colors";
import Wrapper from "../../atoms/Filter/Item";
import Text from "../../atoms/Text";

type ItemProps = {
  width: string | number;
  height: string | number;
  title: string;
  previousItemTitle?: string;
  handleClick: (arg0: string) => void;
};

function FilterItem(props: ItemProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrapper
      width={props.width}
      height={props.height}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onClick={() => {
        props.handleClick(props.title);
      }}
      backgroundColor={isHover ? Colors.LIGHT_PURPLE : Colors.WHITE}
    >
      <Text
        line="1rem"
        level={3}
        color={
          props.title === props.previousItemTitle
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
