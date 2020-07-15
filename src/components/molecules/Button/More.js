import styled from "styled-components";
import Link from "next/link";
import Text from "../../atoms/Text";

export default function MoreButton(props) {
  return (
    <Link href={props.link}>
      <A>
        <Text level={1} weight={500} color="#8b90a0">
          더보기
        </Text>
      </A>
    </Link>
  );
}

const A = styled.a``;
