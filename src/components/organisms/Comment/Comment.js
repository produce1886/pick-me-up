import Wrapper from "../../atoms/Comment";
import styled from "styled-components";
import Profile from "../../molecules/Profile";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon/optionmore";
import EditnDelete from "../Comment/EditnDelete";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Comment(props) {
  const [clicked, setClicked] = useState(false);
  let date = props.date;
  date = date.replace("T", " ");
  const user = props.userInfo;
  const loginUser = useSelector((state) => state.user.userData);
  const openMenu = () => {
    setClicked(!clicked);
  };

  return (
    <Wrapper>
      <ProfileDiv>
        <Profile
          direction="row"
          size="2rem"
          profileImage={user.image}
        ></Profile>
      </ProfileDiv>
      <TextDiv>
        <InfoWrapper>
          <Div>
            <Text level={2} name="name" weight={800} align="center">
              {user.username}
            </Text>
            &nbsp;
            <Text level={1} color="#d3d4d8">
              {date}
            </Text>
          </Div>
          {loginUser.email === user.email && (
            <ButtonWrapper onClick={() => openMenu()}>
              <Icon style={{ width: "1rem", height: "1rem" }}></Icon>
            </ButtonWrapper>
          )}
        </InfoWrapper>
        <CommentBox>
          <Text level={1} color="#232735" width="100%" height="100%">
            {props.comment}
          </Text>
        </CommentBox>
      </TextDiv>
      {clicked && (
        <EditnDelete
          id={props.id}
          pid={props.pid}
          setCommentUpdate={props.setCommentUpdate}
          setEdit={props.setEdit}
        ></EditnDelete>
      )}
    </Wrapper>
  );
}

const ProfileDiv = styled.div`
  width: fit-content;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const TextDiv = styled.div`
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
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

const CommentBox = styled.div`
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
  padding: unset;
`;
