import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Colors from "@colors";
import Text from "../../atoms/Text";

type ButtonProps = {
  pid: string;
};

function ViewMoreButton({ pid }: ButtonProps) {
  return (
    <Link href={`/project?pid=${pid}`}>
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
