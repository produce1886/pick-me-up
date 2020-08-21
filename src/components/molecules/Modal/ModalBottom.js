import styled from "styled-components";
import Bottom from "../../atoms/Modal/Bottom";
import TagButton from "../Button/Tag";
import Icon from "../../atoms/Icon/Tag";
import WriteBlock from "../Button/WriteBlock";
import { useState } from "react";
import axios from "axios";
export default function ModalBottom(props) {
  let tags = [];
  let newtaglists = [];
  const [taginput, setTagInput] = useState("");
  const [tagArray, setTagArray] = useState([]);

  tagArray.map((value) => tags.push(value.tagtext));
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
        tags: tags,
      });
      console.log(result.data);
    } catch (error) {
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
        // Node.js의 http.ClientRequest 인스턴스입니다.
        console.log(error.request);
      } else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        console.log("Error", error.message);
      }
      console.log(error.config);
    } finally {
    }
  };

  const removeTag = (value) => {
    const tagIndex = tagArray.indexOf(value);
    let newArray = [...tagArray];
    newArray.splice(tagIndex, 1);
    setTagArray(newArray);
  }; // x 누를 시 선택된 tag 제거

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
                link=""
                removeTag={() => removeTag(value)}
                tagtype="modalwrite"
              ></TagButton>
            ))}
          </TagWrapper>
          <ButtonWrapper
            onClick={() => {
              Write();
              console.log(tags);
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
