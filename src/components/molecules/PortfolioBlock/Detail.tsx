import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import Colors from "@colors";
import Text from "../../atoms/Text";
import ViewCount from "../Count/View";
import CommentCount from "../Count/Comment";
import Profile from "../Profile";

type DetailProps = {
  y: number | string;
  title: string;
  uid: string;
  name: string;
  profileImage?: string;
  viewNum: number;
  commentsNum: number;
};

function Detail(props: DetailProps) {
  return (
    <DetailWrapper y={props.y}>
      <Row>
        <Text level={3} weight="bold" color={Colors.BLACK}>
          {props.title}
        </Text>
      </Row>
      <Row>
        <Link href="/profile/[userid]" as={`/profile/${props.uid}`}>
          <A>
            <Profile
              size="1rem"
              level={1}
              name={props.name}
              profileImage={props.profileImage}
            ></Profile>
          </A>
        </Link>
        <Div>
          <ViewCount count={props.viewNum}></ViewCount>
          &nbsp;
          <CommentCount count={props.commentsNum}></CommentCount>
        </Div>
      </Row>
    </DetailWrapper>
  );
}

export default React.memo(Detail);

const DetailWrapper = styled.div`
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: -3rem;
  background-color: ${Colors.WHITE};
  -webkit-transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  padding: 0.4rem 0.6rem;
  display:flex;
  flex-direction:column;
  box-sizing: border-box;
}
  ${(props: { y: number | string }) => css`
    -webkit-transform: translateY(${props.y});
    transform: translateY(${props.y});
  `}
`;

const Row = styled.div`
  width: 100%;
  height: 1.16rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const A = styled.a``;
