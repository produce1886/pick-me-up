import Wrapper from "../../atoms/Filter/FilterItem";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function FilterItem(props) {
  const [mouseon, setColor] = useState(false);

  return (
    <Link href={props.item.link}>
      <A>
        <Wrapper
          onMouseOver={() => setColor(true)}
          onMouseOut={() => setColor(false)}
          onClick={() => {
            props.toggleSelected(props.item);
          }}
          backgroundColor={mouseon ? "#f5edff" : "#ffffff"}
        >
          <Text line="1rem" level={3} color="#232735" align="left">
            {props.item.title}
          </Text>
        </Wrapper>
      </A>
    </Link>
  );
}

const A = styled.a``;
