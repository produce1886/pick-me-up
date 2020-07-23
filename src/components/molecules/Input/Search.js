import Wrapper from "../../atoms/Input/Search";
import Icon from "../../atoms/Icon/Search";
import styled from "styled-components";

export default function Search() {
  return (
    <Wrapper>
      <Icon
        style={{
          width: "0.7rem",
          height: "0.7rem",
          margin: "0 0.5rem 0 0",
        }}
        fill="#8b90a0"
      ></Icon>
      <Input placeholder="검색" type="text"></Input>
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
