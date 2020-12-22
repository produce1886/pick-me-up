import React from "react";
import Link from "next/link";
import styled from "styled-components";
import ButtonProps from "../../atoms/Button/button";
import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Button/Pill";

function PillButton(props: ButtonProps) {
  if (props.link) {
    return (
      <Link href={props.link} passHref>
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
    <Wrapper onClick={props.onClick}>
      <Text level={1} weight={props.weight} color={props.color}>
        {props.text}
      </Text>
    </Wrapper>
  );
}

export default React.memo(PillButton);

const A = styled.a`text-decoration: none;`;
