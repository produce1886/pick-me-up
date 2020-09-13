import Icon from "../../atoms/Icon/Arrow/Up";
import styled from "styled-components";
import Text from "../../atoms/Text";

export default function TopButton() {
  return (
    <Button>
      <A href="#">
        <Icon
          style={{ width: "1rem", height: "1rem", margin: "0.2rem 0 0 0" }}
          fill="#232735"
        ></Icon>
        <Text
          line="1rem"
          level={2}
          weight="20rem"
          align="center"
          color="#232735"
          deco="underline"
        >
          TOP
        </Text>
      </A>
    </Button>
  );
}

const A = styled.a``;

const Button = styled.button`
  width: fit-content;
  height: 2.4rem;
  justify-content: center;
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  position: fixed;
  top: 50%;
  left: 10%;
  z-index: 999;
`;
