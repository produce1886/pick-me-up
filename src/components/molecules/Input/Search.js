import { useState } from "react";
import styled from "styled-components";
import Icon from "../../atoms/Icon/Search";

export default function Search(props) {
  const [keyword, setKeyword] = useState();

  const inputHandler = (e) => {
    setKeyword(e.target.value);
  };

  const doSearch = () => {
    props.setQuery(keyword);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") doSearch();
  };

  return (
    <Wrapper>
      <Button onClick={doSearch}>
        <Icon
          style={{
            width: "0.7rem",
            height: "0.7rem",
          }}
          fill="#8b90a0"
        ></Icon>
      </Button>
      <Input
        placeholder="검색"
        type="text"
        onChange={inputHandler}
        onKeyPress={enterHandler}
      ></Input>
    </Wrapper>
  );
}

const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: unset;
  box-sizing: border-box;
  width: 7.4rem;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.64rem;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  padding: unset;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 0.5rem 0 0;
`;

const Wrapper = styled.div`
  width: 10.32rem;
  height: 1.6rem;
  border-radius: 2rem;
  background-color: #f0f1f3;
  align-items: center;
  border: 0.04rem solid #d3d4d8;
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;
