import styled from "styled-components";
import Bottom from "../../atoms/Modal/Bottom";
import TagButton from "../Button/Tag";
import Icon from "../../atoms/Icon/Tag";
import WriteBlock from "../Button/WriteBlock";
import { useState } from "react";
import axios from "axios";
export default function ModalBottom(props) {
  const { project } = getProject();
  let newtaglists = [];
  const [taginput, setTagInput] = useState("");
  const [tagArray, setTagArray] = useState([]);
  const removeTag = (key) => {
    const tagIndex = tagArray.findIndex((e) => e.key === key);
    tagArray.splice(tagIndex, 1);
    setTagArray([...tagArray]);
  }; // x 누를 시 선택된 tag 제거

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && tagArray.length < 5 && taginput.length > 0) {
      newtaglists = Array.from(tagArray);
      newtaglists.push({ _taginput: taginput });
      setTagArray(newtaglists);
      setTagInput("");
    }
    if (tagArray.length === 5 && event.key === "Enter") {
      alert("태그는 5개까지 가능합니다.");
    }
  };
  const handleChange = (event) => {
    setTagInput(event.target.value);
  };
  return (
    <>
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
              value={taginput}
              placeholder="태그를 추가하세요"
            ></Input>
          </IconTextWrapper>
          <TagWrapper>
            {tagArray.map((value, i) => (
              <TagButton
                key={i}
                ismodal="modal"
                text={value._taginput}
                link=""
                removeTag={removeTag}
                tagtype="modalwrite"
              ></TagButton>
            ))}
          </TagWrapper>
          <ButtonWrapper
            onClick={() => {
              Write;
              props.onClose();
            }}
          >
            <WriteBlock link=""></WriteBlock>
          </ButtonWrapper>
        </Div>
      </Bottom>
    </>
  );
}
const getProject = () => {
  const [project, setProject] = useState();
  const Write = async () => {
    try {
      const result = await axios.post(`${process.env.API_HOST}/projects`, {
        title: props.title,
        content: props.content,
        email: props.email,
        category: props.category,
        huntingField: props.field,
        region: props.region,
        projectCategory: props.projectType,
        tags: tagArray,
      });
      setProject(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  Write();
  return { project };
};

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
