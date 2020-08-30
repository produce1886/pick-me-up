import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Button/Pill";
import Link from "next/link";
import styled from "styled-components";

export default function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <A>
          <Wrapper>
            <Text level={1} weight={props.weight} color={props.color}>
              {props.text}
            </Text>
          </Wrapper>
        </A>
      </Link>
    );
  }
  return (
    <Wrapper>
      <Text level={1} weight={props.weight} color={props.color}>
        {props.text}
      </Text>
    </Wrapper>
  );
}

const A = styled.a``;
