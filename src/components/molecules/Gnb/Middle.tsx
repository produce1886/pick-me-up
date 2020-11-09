import styled from "styled-components";
import Link from "next/link";
import Colors from "@colors";
import Text from "../../atoms/Text";

export default function Main() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Button>
          <Link href="/project">
            <A>
              <Text level={3} weight={500} color={Colors.BLACK}>
                프로젝트
              </Text>
            </A>
          </Link>
        </Button>
        <Button>
          <Link href="/portfolio">
            <A>
              <Text level={3} weight={500} color={Colors.BLACK}>
                포트폴리오
              </Text>
            </A>
          </Link>
        </Button>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 20rem;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const InnerWrapper = styled.div`
  width: 12rem;
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
