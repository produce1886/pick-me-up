import styled from "styled-components";
import Text from "../../atoms/Text";
import Middle from "../../atoms/Modal/Middle";
import TagButton from "../Button/Tag";
import Icon from "../../atoms/Icon/Tag";
import Image from "../../atoms/Image/Modal";
import ImageHolder from "../../atoms/ImageHolder/Profile";

export default function ModalMiddle(props) {
  return (
    <Middle height="30rem" min-height="30rem">
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
        <TagButton text="Tag text" link=""></TagButton>
        <TagButton text="Tag text" link=""></TagButton>
      </TagWrapper>
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

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
