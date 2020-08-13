import styled from "styled-components";
import Detail from "../molecules/PortfolioBlock/Detail";
import Wrapper from "../atoms/PortfolioBlock";
import { useState } from "react";

export default function PortfolioBlock(props) {
	const [show, setShow] = useState(false);

<<<<<<< HEAD
  return (
    <Wrapper
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <Img src=""></Img>
      <Detail y={show ? "-3rem" : "3rem"}></Detail>
    </Wrapper>
  );
=======
	return (
		<Wrapper
			onClick={props.openView}
			onMouseOver={() => setShow(true)}
			onMouseOut={() => setShow(false)}>
			<DetailWrapper y={show ? "-3rem" : "3rem"}></DetailWrapper>
		</Wrapper>
	);
>>>>>>> b279c76c53a86149b614803cee2daf3a1b390679
}

const Img = styled.img`
  width: 100%;
<<<<<<< HEAD
  height: 100%;
=======
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
>>>>>>> b279c76c53a86149b614803cee2daf3a1b390679
`;
