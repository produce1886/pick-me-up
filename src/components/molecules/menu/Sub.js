import styled from "styled-components";
import Link from "next/link";
import Text from "../../atoms/Text";

export default function Sub() {
  return (
    <Wrapper>
      <Button>
        <Link href="">
          <A>
            <Text level={1} weight={500} color="#8b90a0">
              로그인
            </Text>
          </A>
        </Link>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 10rem;
  height: 1.5rem;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
`;

const A = styled.a`
  text-decoration: none;
`;
