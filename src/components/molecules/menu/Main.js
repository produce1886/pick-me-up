import styled from "styled-components";
import Link from "next/link";
import Text from "../../atoms/Text";

export default function Main() {
  return (
    <Wrapper>
      <Button>
        <Link href="project">
          <A>
            <Text level={3} weight={500} color="#232735">
              프로젝트
            </Text>
          </A>
        </Link>
      </Button>
      <Button>
        <Link href="portfolio">
          <A>
            <Text level={3} weight={500} color="#232735">
              포트폴리오
            </Text>
          </A>
        </Link>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
