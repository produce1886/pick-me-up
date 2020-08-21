import styled from "styled-components";
import Text from "../../atoms/Text";
import Middle from "../../atoms/Modal/Middle";
import TagButton from "../Button/Tag";
import Icon from "../../atoms/Icon/Tag";
import ImageHolder from "../../atoms/ImageHolder/Profile";
import EditnDelete from "../Button/EditnDelete";
import { useSelector } from "react-redux";

export default function ModalMiddle(props) {
  const isSignedIn = useSelector((state) => state.user.isSignedIn);
  return (
    <Middle height="32rem" min-height="30rem">
      <DateWrapper>
        <Text level="">YYYY.MM.DD 00:00</Text>
      </DateWrapper>
      <CommentBox>
        {props.type === "project" ? (
          <Text level={1} color="#232735">
            comment text style example.comment text style example.comment text
            style example.comment text style example.comment text style
            example.comment text style example.comment text style
            example.comment text style example.comment text style example.
            comment text style example.comment text style example.comment text
            style example.comment text style example.comment text style
            example.comment text style example.comment text style
            example.comment text style example.comment text style example.
          </Text>
        ) : (
          <ImageHolder size={props.size}>
            <Img src={props.profileImage}></Img>
          </ImageHolder>
        )}
      </CommentBox>
      <TagWrapper>
        <Icon
          style={{ width: "1.5rem", height: "1.5rem", marginRight: "0.3rem" }}
          fill="#232735"
        ></Icon>
        <TagButton text="Tag text" link="" tagtype="modalview"></TagButton>
        <TagButton text="Tag text" link="" tagtype="modalview"></TagButton>
      </TagWrapper>
      {isSignedIn && (
        <ButtonWrapper>
          <EditnDelete
            text="게시글 수정"
            link=""
            level={1}
            weight={500}
            color="#000000"
          ></EditnDelete>
          <EditnDelete
            text="게시글 삭제"
            link=""
            level={1}
            weight={500}
            color="#000000"
          ></EditnDelete>
        </ButtonWrapper>
      )}
    </Middle>
  );
}

const DateWrapper = styled.div`
  width: 100%;
  height: 1rem;
  flex-direction: row;
  margin: 0 0 1rem 0;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  display: flex;
`;

const CommentBox = styled.div`
  width: 100%;
  height: 24rem;
  justify-content: center;
  display: flex;
  flex-direction: row;
  max-height: 800px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const TagWrapper = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: left;
  flex-direction: row;
`;
const ButtonWrapper = styled.div`
  width: 6.5rem;
  height: 1.5rem;
  display: flex;
  align-items: right;
  flex-direction: row;
  margin: 0 0 0 29.7rem;
  justify-content: space-between;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
