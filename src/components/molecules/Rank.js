import styled from "styled-components";
import Icon from "../atoms/Icon/Rank";
import Text from "../atoms/Text";

export default function Rank(props) {
  return (
    <Wrapper>
      <Icon fill="#f063b8" style={{ width: "1.8rem", height: "2.4rem" }}></Icon>
      <Div>
        <Text level={6} weight="bold" color="#fff">
          {props.number}
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
