import Icon from "../atoms/Icon/Search";
import Text from "../atoms/Text";
import styled from "styled-components";

function NoResult() {
  return (
    <Div>
      <Icon
        style={{ width: "4.8rem", height: "4.8rem", marginBottom: "1.5rem" }}
        fill="#d3d4d8"
      ></Icon>
      <Text color="#d3d4d8" level={12} weight="bold">
        죄송합니다.
      </Text>
      <Text color="#d3d4d8" level={12} weight="bold">
        발견된 프로젝트가 없습니다.
      </Text>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default NoResult;
