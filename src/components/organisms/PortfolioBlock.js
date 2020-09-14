import styled from "styled-components";
import Link from "next/link";
import Text from "../atoms/Text";
import Detail from "../molecules/PortfolioBlock/Detail";
import Wrapper from "../atoms/Wrapper/PortfolioBlock";
import { useState } from "react";

function PortfolioBlock(props) {
  const [show, setShow] = useState(false);

  return (
    <Link href={`/portfolio?pid=${props.item.id}`}>
      <A>
        <Wrapper
          skeleton={false}
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
        >
          {props.item.image ? (
            <Img src={props.item.image}></Img>
          ) : (
            <Text level={5} weight={500}>
              {props.item.content.substr(0, 15)}
            </Text>
          )}
          <Detail
            y={show ? "-3rem" : "3rem"}
            title={props.item.title}
            uid={props.item.user.id}
            profileImage={props.item.user.image}
            name={props.item.user.username}
            viewNum={props.item.viewNum}
            commentsNum={props.item.commentsNum}
          ></Detail>
        </Wrapper>
      </A>
    </Link>
  );
}

export default React.memo(PortfolioBlock);

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const A = styled.a``;
