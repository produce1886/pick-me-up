import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import Colors from "@colors";
import Text from "../../atoms/Text";
import Top from "../../atoms/Modal/Top";
import FilterInfo from "../FilterInfo";

function ModalTop(props) {
  return (
    <Top>
      <TitleFilterWrapper>
        <TitleWrapper>
          <Text level={12} color={Colors.DEEP_PURPLE} weight={800}>
            {props.title}
          </Text>
        </TitleWrapper>
        <FilterInfo
          modalType={props.type}
          category={props.category}
          field={props.field}
          region={props.region}
          projectCategory={props.projectCategory}
        ></FilterInfo>
      </TitleFilterWrapper>
      <ProfileBox>
        <Link href="/profile/[userid]" as={`/profile/${props.uid}`}>
          <A>
            <ProfileHolder size="3rem" noMargin={true}>
              <Img src={props.profileImage}></Img>
            </ProfileHolder>
          </A>
        </Link>
      </ProfileBox>
    </Top>
  );
}

export default React.memo(ModalTop);

const TitleWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: left;
  padding-right: 1.5rem;
  margin: 0 0 0.5rem 0rem;
`;

const TitleFilterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;
`;

const ProfileBox = styled.div`
  width: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ProfileHolder = styled.div`
  overflow: hidden;
  ${(props) => css`
    width: ${props.size};
    height: ${props.size};
    border-radius: ${props.size};
  `}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const A = styled.a``;
