import styled from "styled-components";
import Text from "../atoms/Text";

export default function FilterInfo(props) {
  return (
    <Wrapper>
      <>
        <Textdiv>
          <Text level={0} color="#8b90a0" name="카테고리">
            {props.category}
          </Text>
        </Textdiv>
        <Textdiv>
          <Text level={0} color="#8b90a0">
            |
          </Text>
        </Textdiv>
        <Textdiv>
          <Text level={0} color="#8b90a0" name="구인분야">
            {props.field}
          </Text>
        </Textdiv>
      </>
      {props.type === "project" && (
        <>
          <Textdiv>
            <Text level={0} color="#8b90a0">
              |
            </Text>
          </Textdiv>
          <Textdiv>
            <Text level={0} color="#8b90a0" name="지역">
              {props.region}
            </Text>
          </Textdiv>
          <Textdiv>
            <Text level={0} color="#8b90a0">
              |
            </Text>
          </Textdiv>
          <Text level={0} color="#8b90a0" name="프로젝트 종류">
            {props.projectCategory}
          </Text>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;
  height: 0.72rem;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Textdiv = styled.div`
  width: fit-content;
  height: 0.72rem;
  display: flex;
  box-sizing: border-box;
  margin: 0 0.2rem 0 0;
`;
