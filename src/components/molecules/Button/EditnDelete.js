import styled from "styled-components";
import Link from "next/link";
import Text from "../../atoms/Text";

export default function MoreButton(props) {
  return (
    <Link href={props.link}>
      <A>
        <Text level={props.level} weight={props.weight} color={props.color}>
          {props.text}
        </Text>
      </A>
    </Link>
  );
}

const A = styled.a``;
