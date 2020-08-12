import styled from "styled-components";
import Detail from "../molecules/PortfolioBlock/Detail";
import Wrapper from "../atoms/PortfolioBlock";
import { useState } from "react";

export default function PortfolioBlock() {
  const [show, setShow] = useState(false);

  return (
    <Wrapper
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <Img src=""></Img>
      <Detail y={show ? "-3rem" : "3rem"}></Detail>
    </Wrapper>
  );
}

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
