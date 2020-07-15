import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Button/Tag";
import Link from "next/link";
import styled from "styled-components";

export default function Button(props) {
  return (
    <Link href={props.link}>
      <A>
        <Wrapper>
          <Text level={0} color="#fff">
            {props.text}
          </Text>
        </Wrapper>
      </A>
    </Link>
  );
}

const A = styled.a``;
