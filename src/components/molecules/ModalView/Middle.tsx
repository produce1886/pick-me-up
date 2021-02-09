import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import Colors from "@colors";
import UserState from "@src/types/User";
import { PageType } from "@src/components/atoms/Modal/ModalType";
import { Tag } from "@src/types/Data";
import ProjectService from "@src/lib/api/Project";
import PortfolioService from "@src/lib/api/Portfolio";
import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Modal/Middle";
import TagButton from "../Tag";
import Icon from "../../atoms/Icon/Tag";

type ModalMiddleProps = {
  page: PageType;
  date: string;
  content: string;
  image: string;
  userEmail: string;
  pid: number;
  tags: Tag[];
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  listReload: number;
  setListReload: React.Dispatch<React.SetStateAction<number>>;
};

function ModalMiddle(props: ModalMiddleProps) {
  const router = useRouter();
  const userState = useSelector((state: { user: UserState }) => state.user);
  const { pid } = props;
  let { date } = props;
  date = date.replace("T", " ");

  const deletePost = useCallback(() => {
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      if (props.page === "project") {
        ProjectService.deleteProject(pid);
      } else if (props.page === "portfolio") {
        PortfolioService.deletePortfolio(pid);
      }
      setTimeout(() => props.setListReload(props.listReload + 1), 400);
      router.push(`/${props.page}`);
    }
  }, []);

  const renderTags = props.tags && props.tags.length > 0 && (
    <TagWrapper>
      <Icon
        style={{
          width: "1.5rem",
          height: "1.5rem",
          marginRight: "0.3rem",
        }}
        fill={Colors.BLACK}
      ></Icon>
      {props.tags.map((item: Tag) => (
        <TagButton key={item.id} text={item.tagName}></TagButton>
      ))}
    </TagWrapper>
  );

  return (
    <Wrapper height="fit-content">
      <DateWrapper>
        <Text level={1} color={Colors.BLACK} weight={500}>
          {date}
        </Text>
      </DateWrapper>
      <ContentBox>
        <TextWrapper>{props.content}</TextWrapper>
        {props.image && (
          <ImageHolder>
            <Img src={props.image}></Img>
          </ImageHolder>
        )}
      </ContentBox>
      {renderTags}
      {props.userEmail === userState.userData.email && (
        <ButtonWrapper>
          <Button onClick={() => props.setUpdate(true)}>
            <Text level={1} weight={500} color={Colors.BLACK}>
              게시글 수정
            </Text>
          </Button>
          <Button onClick={deletePost}>
            <Text level={1} weight={500} color={Colors.BLACK}>
              게시글 삭제
            </Text>
          </Button>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
}

export default React.memo(ModalMiddle);

const DateWrapper = styled.div`
  width: 100%;
  height: 1rem;
  flex-direction: row;
  margin-bottom: 0.5rem;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  display: flex;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow-y: scroll;
`;

const TextWrapper = styled.pre`
  font-size: 0.64rem;
  color: ${Colors.BLACK};
  font-family: "Noto Sans KR", sans-serif;
`;

const TagWrapper = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ImageHolder = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 1rem;
`;
