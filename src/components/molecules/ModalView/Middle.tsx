import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";
import Colors from "@colors";
import { State } from "@src/types/User";
import { ModalType } from "@src/components/atoms/Modal/ModalType";
import Text from "../../atoms/Text";
import Middle from "../../atoms/Modal/Middle";
import TagButton from "../Button/Tag";
import Icon from "../../atoms/Icon/Tag";

type ModalMiddleProps = {
  modalType: ModalType;
  date: string;
  content: string;
  image: string;
  userEmail: string;
  pid: number | string | string[];
  tags: { id: number; tag: string }[];
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  listReload: number;
  setListReload: React.Dispatch<React.SetStateAction<number>>;
};

function ModalMiddle(props: ModalMiddleProps) {
  const router = useRouter();
  const userState = useSelector((state: { user: State }) => state.user);
  const { pid } = props;
  let { date } = props;
  date = date.replace("T", " ");

  const deletePost = useCallback(() => {
    try {
      if (props.modalType === "project") {
        if (window.confirm("게시글을 삭제하시겠습니까?")) {
          axios.delete(`${process.env.API_HOST}/projects/${pid}`);
          setTimeout(() => props.setListReload(props.listReload + 1), 300);
          router.push("/project");
        }
      } else if (props.modalType === "portfolio") {
        if (window.confirm("게시글을 삭제하시겠습니까?")) {
          axios.delete(`${process.env.API_HOST}/portfolios/${pid}`);
          setTimeout(() => props.setListReload(props.listReload + 1), 300);
          router.push("/portfolio");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Middle height="fit-content">
      <DateWrapper>
        <Text level={1} color={Colors.BLACK} weight={500}>
          {date}
        </Text>
      </DateWrapper>
      <ContentBox>
        <Text level={2} color={Colors.BLACK}>
          {props.content}
        </Text>
        {props.image && (
          <ImageHolder>
            <Img src={props.image}></Img>
          </ImageHolder>
        )}
      </ContentBox>
      {props.tags && props.tags.length > 0 && (
        <TagWrapper>
          <Icon
            style={{ width: "1.5rem", height: "1.5rem", marginRight: "0.3rem" }}
            fill={Colors.BLACK}
          ></Icon>
          {props.tags.map((item: { tag: string }, index: number) => (
            <TagButton text={item.tag} key={index}></TagButton>
          ))}
        </TagWrapper>
      )}
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
    </Middle>
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
