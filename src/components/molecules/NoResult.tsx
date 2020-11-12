import styled from "styled-components";
import Colors from "@colors";
import Icon from "../atoms/Icon/Search";
import Text from "../atoms/Text";

function NoResult() {
  return (
    <Wrapper>
      <Icon
        style={{ width: "4.8rem", height: "4.8rem", marginBottom: "1.5rem" }}
        fill={Colors.GREY}
      ></Icon>
      <Text color={Colors.GREY} level={12} weight="bold">
        죄송합니다.
      </Text>
      <Text color={Colors.GREY} level={12} weight="bold">
        발견된 게시글이 없습니다.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem;
  box-sizing: border-box;
`;

export default NoResult;
