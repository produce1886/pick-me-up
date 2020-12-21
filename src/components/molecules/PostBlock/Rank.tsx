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
      <NumberWrapper>
        <Text level={6} weight="bold" color={Colors.WHITE}>
          {number}
        </Text>
      </NumberWrapper>
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
const NumberWrapper = styled.span`
  position: absolute;
  top: 0.1rem;
`;
