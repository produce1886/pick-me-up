import styled from "styled-components";
import Colors from "@colors";
import Icon from "../../atoms/Icon/Rank";
import Text from "../../atoms/Text";

export default function Rank({ number }: { number: number }) {
  return (
    <Wrapper>
      <Icon
        fill={Colors.PINK}
        style={{ width: "1.8rem", height: "2.4rem" }}
      ></Icon>
      <Div>
        <Text level={6} weight="bold" color={Colors.WHITE}>
          {number}
        </Text>
      </Div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
`;
const Div = styled.div`
  position: absolute;
  top: 0.1rem;
`;
