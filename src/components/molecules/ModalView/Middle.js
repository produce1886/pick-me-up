import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";
import Text from "../../atoms/Text";
import Middle from "../../atoms/Modal/Middle";
import TagButton from "../Button/Tag";
import Icon from "../../atoms/Icon/Tag";

function ModalMiddle(props) {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const { pid } = props;
  let { date } = props;
  date = date.replace("T", " ");

  const deletePost = useCallback(() => {
    try {
      if (props.type === "project") {
        if (window.confirm("게시글을 삭제하시겠습니까?")) {
          axios.delete(`${process.env.API_HOST}/projects/${pid}`);
          setTimeout(() => props.setListReload(props.listReload + 1), 300);
          router.push("/project");
        }
      } else if (props.type === "portfolio") {
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
        <Text level={1} color="#232735" weight={500}>
          {date}
        </Text>
      </DateWrapper>
      <ContentBox>
        <Text level={2} color="#232735">
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
            fill="#232735"
          ></Icon>
          {props.tags.map((item, index) => (
            <TagButton text={item.tag} key={index}></TagButton>
          ))}
        </TagWrapper>
      )}
      {props.userEmail === user.userData.email && (
        <ButtonWrapper>
          <Button onClick={() => props.setUpdate(true)}>
            <Text level={1} weight={500} color="#232735">
              게시글 수정
            </Text>
          </Button>
          <Button onClick={deletePost}>
            <Text level={1} weight={500} color="#232735">
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
