import styled from "styled-components";
import Text from "../../atoms/Text";
import Middle from "../../atoms/Modal/Middle";
import TagButton from "../Button/Tag";
import Icon from "../../atoms/Icon/Tag";

export default function ModalMiddle(props) {
  return (
    <Middle height="32rem" min-height="30rem">
      <DateWrapper>
        <Text level={0}>{props.date}</Text>
      </DateWrapper>
      <ContentBox>
        <Text level={1} color="#232735">
          {props.content}
        </Text>
      </ContentBox>
      <TagWrapper>
        <Icon
          style={{ width: "1.5rem", height: "1.5rem", marginRight: "0.3rem" }}
          fill="#232735"
        ></Icon>
        <TagButton text="Tag text" tagtype="modalview"></TagButton>
        <TagButton text="Tag text" tagtype="modalview"></TagButton>
      </TagWrapper>
      <ButtonWrapper>
        <Button>
          <Text level={1} weight={500} color="#232735">
            게시글 수정
          </Text>
        </Button>
        <Button>
          <Text level={1} weight={500} color="#232735">
            게시글 삭제
          </Text>
        </Button>
      </ButtonWrapper>
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

const ContentBox = styled.div`
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
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
