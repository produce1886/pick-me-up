import styled, { css } from "styled-components";
import Wrapper from "../atoms/PortfolioBlock";
import { Motion, spring } from "react-motion";
import { useState } from "react";

export default function PortfolioBlock() {
  const [show, setShow] = useState(false);

  return (
    <Wrapper
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <DetailWrapper y={show ? "-5rem" : "5rem"}></DetailWrapper>
    </Wrapper>
  );
}

const DetailWrapper = styled.div`
  width: 100%;
  height: 5rem;
  position: absolute;
  bottom: -5rem;
  background-color: #888;
  ${(props) => css`
    webkit-transform: translateY(${props.y});
    transform: translateY(${props.y});
  `}
`;
