import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Logo from "../../atoms/Image/Logo";

export default function LogoButton() {
  return (
    <Link href="/" passHref>
      <A>
        <Logo style={{ width: "5rem", height: "1.5rem" }}></Logo>
      </A>
    </Link>
  );
}

const A = styled.a`
  text-decoration: none;
`;
