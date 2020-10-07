import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Colors from "@colors";
import Text from "../../atoms/Text";

type ButtonProps = {
  id: string;
};

function ViewMoreButton({ id }: ButtonProps) {
  return (
    <Link href={`/project?pid=${id}`}>
      <A>
        <Text level={1} weight={500} color={Colors.DEEP_GREY}>
          더보기
        </Text>
      </A>
    </Link>
  );
}

export default React.memo(ViewMoreButton);

const A = styled.a``;
