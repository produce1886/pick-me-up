import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import UpIcon from "../../atoms/Icon/Arrow/Up";
import Text from "../../atoms/Text";

export default function TopButton() {
  return (
    <Button>
      <A href="#">
        <UpIcon
          style={{ width: "1rem", height: "1rem", margin: "0.2rem 0 0 0" }}
          fill={Colors.BLACK}
        ></UpIcon>
        <Text
          line="1rem"
          level={2}
          weight="20rem"
          align="center"
          color={Colors.BLACK}
          deco="underline"
        >
          TOP
        </Text>
      </A>
    </Button>
  );
}

const A = styled.a`
  text-decoration: none;
`;

const Button = styled.button`
  width: fit-content;
  height: 2.4rem;
  justify-content: center;
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  position: fixed;
  top: 50%;
  left: 10%;
  z-index: 999;
`;
