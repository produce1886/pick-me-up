import Logo from "../../atoms/Image/Logo";
import styled from "styled-components";
import Link from "next/link";

export default function LogoButton() {
  return (
    <Link href="/index">
      <A>
        <Logo style={{ width: "5rem", height: "1.5rem" }}></Logo>
      </A>
    </Link>
  );
}

const A = styled.a``;
