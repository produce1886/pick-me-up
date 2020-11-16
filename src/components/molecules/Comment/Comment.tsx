import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Colors from "@colors";
import UserState from "@src/types/User";
import CommentProps from "./CommentProps";
import Profile from "../Profile";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon/MoreOption";
import EditDelete from "./EditDelete";

function Comment(props: CommentProps) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const currentUserEmail = useSelector(
    (state: { user: UserState }) => state.user.userData.email
  );
  let { date } = props;
  date = date.replace("T", " ");
  return (
    <Wrapper>
      <Link href="/profile/[userid]" as={`/profile/${props.id}`}>
        <A>
          <Profile
            size="2rem"
            profileImage={props.image}
            margin="0.3rem 0.3rem 0 0"
          ></Profile>
        </A>
      </Link>
      <Column>
        <InfoWrapper>
          <Text level={2} weight={800} align="center">
            {props.username}
          </Text>
          &nbsp;
          <Text level={1} color={Colors.DEEP_GREY}>
            {date}
          </Text>
          {currentUserEmail === props.email && (
            <ButtonWrapper onClick={() => setIsButtonClicked(!isButtonClicked)}>
              <Icon style={{ width: "1rem", height: "1rem" }}></Icon>
            </ButtonWrapper>
          )}
        </InfoWrapper>
        <CommentWrapper>
          <Text level={1} color={Colors.BLACK} width="100%" height="100%">
            {props.comment}
          </Text>
        </CommentWrapper>
      </Column>
      {isButtonClicked && (
        <EditDelete
          cid={props.cid}
          pid={props.pid}
          page={props.page}
          setIsButtonClicked={setIsButtonClicked}
          modalReload={props.modalReload}
          setModalReload={props.setModalReload}
          setUpdatingCid={props.setUpdatingCid}
        ></EditDelete>
      )}
    </Wrapper>
  );
}

export default React.memo(Comment);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 4rem;
  position: relative;
  box-sizing: border-box;
  margin: 0.2rem 0;
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 0.3rem;
`;

const InfoWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  position: relative;
`;

const CommentWrapper = styled.div`
  width: 100%;
  height: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  overflow-y: scroll;
  margin: 0.3rem 0 0 0;
`;

const ButtonWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;
  box-sizing: border-box;
  border-radius: 0.2rem;
  padding: 0;
  position: absolute;
  right: 0;
`;

const A = styled.a``;
