import React, { useState } from "react";
import styled from "styled-components";
import Colors from "@colors";
import Bottom from "../../atoms/Modal/Bottom";
import TagButton from "../Tag";
import Icon from "../../atoms/Icon/Tag";
import PillButton from "../Button/Pill";

type ModalBottomProps = {
  portfolioTags?: string[];
  projectTags?: string[];
  setProjectTags?: React.Dispatch<React.SetStateAction<string[]>>;
  setPortfolioTags?: React.Dispatch<React.SetStateAction<string[]>>;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  onClick: () => void;
  isUpdate: boolean;
};

function ModalBottom(props: ModalBottomProps) {
  const [tagInput, setTagInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLDivElement>,
    tags: string[],
    setTags: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (e.key !== "Enter") return;
    if (tags.length < 5 && tagInput.length > 0) {
      setTags([...tags, tagInput]);
      setTagInput("");
    } else if (tags.length === 5) {
      alert("태그는 5개까지 가능합니다.");
    }
  };

  const removeTag = (
    value: string,
    tags: string[],
    setTags: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
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
            fill={Colors.BLACK}
          ></Icon>
          <Input
            onChange={handleChange}
            onKeyPress={(e) => handleKeyPress(e, props.tags, props.setTags)}
            value={tagInput}
            placeholder="태그를 입력하세요"
          ></Input>
        </IconTextWrapper>
        <TagWrapper>
          {props.tags.map((value, index) => (
            <TagButton
              key={index}
              isModal={true}
              text={value}
              onClick={() => removeTag(value, props.tags, props.setTags)}
              tagType="MODAL_WRITE"
            ></TagButton>
          ))}
        </TagWrapper>
        <ButtonWrapper onClick={props.onClick}>
          <PillButton
            weight={500}
            color={Colors.WHITE}
            text={props.isUpdate ? "글 수정하기" : "글 작성하기"}
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
  margin: 1rem 0 0 2.5rem;
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
