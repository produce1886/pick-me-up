import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Colors from "@colors";
import Text from "../../atoms/Text";
import Rank from "./Rank";
import Profile from "../Profile";

export type TopProps = {
  sort: "most" | "new";
  rank: number;
  title: string | string[];
  name: string;
  profileImage: string;
  uid: number;
  date: string;
};

function Top(props: TopProps) {
  return (
    <Wrapper>
      {props.sort === "most" && <Rank number={props.rank}></Rank>}
      <Row>
        <Text level={6} weight="bold" color={Colors.DEEP_PURPLE} line={1.17}>
          {props.title}
        </Text>
      </Row>
      <Row>
        <BottomWrapper>
          <Link href={`/profile/${props.uid}`} passHref>
            <A>
              <Profile
                size="0.9rem"
                level={1}
                name={props.name}
                profileImage={props.profileImage}
              ></Profile>
            </A>
          </Link>
          <Text level={1} color={Colors.BLACK}>
            {props.date}
          </Text>
        </BottomWrapper>
      </Row>
    </Wrapper>
  );
}

export default React.memo(Top);

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 0.07rem solid ${Colors.GREY};
  padding: 0.8rem 1rem 0rem 1rem;
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.35rem 0 0.55rem 0;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 1.25rem;
  overflow: hidden;
  margin-top: 0.2rem;
`;

const A = styled.a`
  text-decoration: none;
`;
