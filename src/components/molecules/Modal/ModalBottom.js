import styled from "styled-components";
import Bottom from "../../atoms/Modal/Bottom";
import TagButton from "../Button/Tag";
import Icon from "../../atoms/Icon/Tag";
import WriteBlock from "../Button/WriteBlock";
import { useState, useEffect } from "react";
import axios from "axios";
export default function ModalBottom(props) {
  let tags = [];
  let newtaglists = [];
  let newimgArray = [];
  const [taginput, setTagInput] = useState("");
  const [tagArray, setTagArray] = useState([]);
  const [imgArray, setImgArray] = useState([]);

  tagArray.map((value) => tags.push(value.tagtext));

  const setImage = (file) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      file = reader.result;
      newimgArray = Array.from(imgArray);
      newimgArray.push(file);
      setImgArray(newimgArray);
    };
    reader.readAsDataURL(file);
  };

  if (props.image.length > 0) {
    for (let i = 0; i < props.image.length; i++) {
      const file = props.image[i];
      setImage(file);
    }
  }
  console.log(imgArray);
  const Write = async () => {
    try {
      if (
        props.type === "project" &&
        !isEmpty(props.title) &&
        !isEmpty(props.content) &&
        !isEmpty(props.category) &&
        !isEmpty(props.field) &&
        !isEmpty(props.projectType) &&
        !isEmpty(props.region)
      ) {
        const result = await axios.post(`${process.env.API_HOST}/projects`, {
          title: props.title,
          content: props.content,
          email: props.email,
          category: props.category,
          huntingField: props.field,
          region: props.region,
          projectCategory: props.projectType,
          tags: tags,
          image: "",
        });
        console.log(result.data);
        props.onClose();
      } else if (
        props.type === "portfolio" &&
        !isEmpty(props.title) &&
        !isEmpty(props.content) &&
        !isEmpty(props.category) &&
        !isEmpty(props.field)
      ) {
        const result = await axios.post(`${process.env.API_HOST}/portfolios`, {
          title: props.title,
          content: props.content,
          email: props.email,
          category: props.category,
          huntingField: props.field,
          tags: tags,
          image: "",
        });
        console.log(result.data);
        console.log(imgArray);
        props.onClose();
      } else {
        check();
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const removeTag = (value) => {
    const tagIndex = tagArray.indexOf(value);
    let newArray = [...tagArray];
    newArray.splice(tagIndex, 1);
    setTagArray(newArray);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && tagArray.length < 5 && taginput.length > 0) {
      newtaglists = Array.from(tagArray);
      newtaglists.push({ tagtext: taginput });
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
  const isEmpty = function (value) {
    if (
      value == "" ||
      value == null ||
      value == undefined ||
      (value != null && typeof value == "object" && !Object.keys(value).length)
    ) {
      return true;
    } else {
      return false;
    }
  };
  const check = () => {
    if (isEmpty(props.title)) {
      alert("제목을 입력하세요");
    }
    if (isEmpty(props.content)) {
      alert("내용을 입력하세요");
    }
    if (isEmpty(props.category)) {
      alert("카테고리를 선택해주세요");
    }
    if (isEmpty(props.field)) {
      alert("구인분야를 선택해주세요");
    }
    if (isEmpty(props.region) && props.type === "project") {
      alert("지역을 선택해주세요");
    }
    if (isEmpty(props.projectType) && props.type === "project") {
      alert("프로젝트 종류를 선택해주세요");
    }
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
                text={value.tagtext}
                removeTag={() => removeTag(value)}
                tagtype="modalwrite"
              ></TagButton>
            ))}
          </TagWrapper>
          <ButtonWrapper
            onClick={() => {
              Write();
            }}
          >
            <WriteBlock link=""></WriteBlock>
          </ButtonWrapper>
        </Div>
      </Bottom>
    </>
  );
}

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
