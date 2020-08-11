import styled, { css } from "styled-components";
import Wrapper from "../atoms/PortfolioBlock";
import { useState } from "react";

export default function PortfolioBlock() {
  const [show, setShow] = useState(false);

  return (
    <Wrapper
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <DetailWrapper y={show ? "-3rem" : "3rem"}></DetailWrapper>
    </Wrapper>
  );
}

const DetailWrapper = styled.div`
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: -3rem;
  background-color: #888;
  -webkit-transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
}
  ${(props) => css`
    -webkit-transform: translateY(${props.y});
    transform: translateY(${props.y});
  `}
`;
