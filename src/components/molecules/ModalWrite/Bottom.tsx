import React, { useState } from "react";
import styled from "styled-components";
import Colors from "@src/components/atoms/Colors/index";
import Bottom from "../../atoms/Modal/Bottom";
import TagButton from "../Button/Tag";
import Icon from "../../atoms/Icon/Tag";
import PillButton from "../Button/Pill";

type ModalBottomProps = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  onClick: () => void;
  updating: boolean;
};
function ModalBottom({ tags, setTags, onClick, updating }: ModalBottomProps) {
  // let { tags } = props;
  const [tagInput, setTagInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Enter") return;
    if (tags.length < 5 && tagInput.length > 0) {
      setTags([...tags, tagInput]);
      setTagInput("");
    } else if (tags.length === 5) {
      alert("태그는 5개까지 가능합니다.");
    }
  };

  const removeTag = (value: string) => {
    const tagIndex = tags.indexOf(value);
    const newArray = [...tags];
    newArray.splice(tagIndex, 1);
    setTags(newArray);
  };

  return (
    <Bottom>
      <Div>
        <IconTextWrapper>
          <Icon
            style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }}
            fill="#232735"
          ></Icon>
          <Input
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={tagInput}
            placeholder="태그를 입력하세요"
          ></Input>
        </IconTextWrapper>
        <TagWrapper>
          {tags.map((value, index) => (
            <TagButton
              key={index}
              isModal={true}
              text={value}
              onClick={() => removeTag(value)}
              tagType="MODAL_WRITE"
            ></TagButton>
          ))}
        </TagWrapper>
        <ButtonWrapper onClick={onClick}>
          <PillButton
            weight={500}
            color={Colors.WHITE}
            text={updating ? "글 수정하기" : "글 작성하기"}
          ></PillButton>
        </ButtonWrapper>
      </Div>
    </Bottom>
  );
}

export default React.memo(ModalBottom);

const ButtonWrapper = styled.div`
  width: 5rem;
  height: 1.5rem;
  align-items: right;
  justify-content: right;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
`;

const Div = styled.div`
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;
const TagWrapper = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: left;
  flex-direction: row;
  margin: 0 0 0 2.5rem;
  box-sizing: border-box;
`;

const IconTextWrapper = styled.div`
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: left;
  flex-direction: row;
  box-sizing: border-box;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: unset;
  box-sizing: border-box;
  width: 10rem;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.64rem;
`;
