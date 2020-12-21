import styled from "styled-components";
import Link from "next/link";
import Colors from "@colors";
import Text from "../../atoms/Text";

export default function Main() {
  return (
    <Wrapper>
      <InnerWrapper>
        <LinkButton>
          <Link href="/project" passHref>
            <A>
              <Text level={3} weight={500} color={Colors.BLACK}>
                프로젝트
              </Text>
            </A>
          </Link>
        </LinkButton>
        <LinkButton>
          <Link href="/portfolio" passHref>
            <A>
              <Text level={3} weight={500} color={Colors.BLACK}>
                포트폴리오
              </Text>
            </A>
          </Link>
        </LinkButton>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 20rem;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const InnerWrapper = styled.ul`
  width: 12rem;
  height: 1.5rem;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
`;

const LinkButton = styled.li`
  border: none;
  background-color: transparent;
`;

const A = styled.a`
  text-decoration: none;
`;
