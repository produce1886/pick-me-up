import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Colors from "@colors";
import FilterInfo from "../FilterInfo";
import Text from "../../atoms/Text";
import Profile from "../Profile";

type TopProps = {
  title: string;
  uid: string;
  name: string;
  profileImage?: string;
  category: string;
  field: string;
  region: string;
  projectCategory: string;
  date: string;
};

function Top(props: TopProps) {
  return (
    <Wrapper>
      <Text level={6} weight="bold" color={Colors.DEEP_PURPLE} line={1.17}>
        {props.title}
      </Text>
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
      <BottomWrapper>
        <FilterInfo
          type="project"
          category={props.category}
          field={props.field}
          region={props.region}
          projectCategory={props.projectCategory}
        ></FilterInfo>
        <Text level={1} color={Colors.BLACK}>
          {props.date}
        </Text>
      </BottomWrapper>
    </Wrapper>
  );
}

export default React.memo(Top);

const Wrapper = styled.div`
  width: 100%;
  height: 4.8rem;
  border-bottom: 0.07rem solid ${Colors.GREY};
  padding: 0.8rem 1rem 0.6rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const A = styled.a``;
