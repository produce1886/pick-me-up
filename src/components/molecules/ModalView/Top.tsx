import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import Colors from "@colors";
import { PageType } from "@src/components/atoms/Modal/ModalType";
import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Modal/Top";
import FilterInfo from "../FilterInfo";

type ModalTopProps = {
  page: PageType;
  title: string;
  uid: string;
  profileImage: string;
  category: string;
  field: string;
  region: string;
  projectCategory: string;
};

type ProfileHolderProps = {
  size: string;
  noMargin: boolean;
};

type ImageProps = {
  src?: string;
};

function ModalTop(props: ModalTopProps) {
  return (
    <Wrapper>
      <TitleFilterWrapper>
        <Text level={12} color={Colors.DEEP_PURPLE} weight={800}>
          {props.title}
        </Text>
        <FilterInfo
          page={props.page}
          category={props.category}
          field={props.field}
          region={props.region}
          projectCategory={props.projectCategory}
        ></FilterInfo>
      </TitleFilterWrapper>
      <Link href="/profile/[userID]" as={`/profile/${props.uid}`}>
        <A>
          <ProfileHolder size="3rem" noMargin={true}>
            <Img src={props.profileImage}></Img>
          </ProfileHolder>
        </A>
      </Link>
    </Wrapper>
  );
}

export default React.memo(ModalTop);

const TitleFilterWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding-right: 1.5rem;
`;

const ProfileHolder = styled.div`
  overflow: hidden;
  ${(props: ProfileHolderProps) => css`
    width: ${props.size};
    height: ${props.size};
    border-radius: ${props.size};
  `}
`;

const Img = styled.img`
  ${(props: ImageProps) => css`
    width: 100%;
    height: 100%;
    src: ${props.src};
  `}
`;

const A = styled.a``;
