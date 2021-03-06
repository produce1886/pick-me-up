import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { PortfolioProps } from "@src/types/Data";
import Text from "../atoms/Text";
import Detail from "../molecules/PortfolioBlock/Detail";
import Wrapper from "../atoms/Wrapper/PortfolioBlock";

function PortfolioBlock(props: PortfolioProps) {
  const [show, setShow] = useState(false);

  return (
    <Link href={`/portfolio?pid=${props.id}`} passHref>
      <A>
        <Wrapper
          isSkeleton={false}
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
        >
          {props.images ? (
            <Img src={props.images[0].image}></Img>
          ) : (
            <Text level={5} weight={500}>
              {props.content.substr(0, 15)}
            </Text>
          )}
          <Detail
            y={show ? "-3rem" : "3rem"}
            title={props.title}
            uid={props.user.id}
            profileImage={props.user.image}
            name={props.user.username}
            viewNum={props.viewNum}
            commentsNum={props.commentsNum}
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

const A = styled.a`
  text-decoration: none;
`;
