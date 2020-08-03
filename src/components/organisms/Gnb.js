import styled from "styled-components";
import Logo from "../molecules/Button/Logo";
import Wrapper from "../atoms/gnb";
import MainMenu from "../molecules/menu/Main";
import LogInButton from "../molecules/Button/LogIn";

export default function GlobalNavigationBar() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo></Logo>
        <MainMenu></MainMenu>
        <LogInButton></LogInButton>
      </InnerWrapper>
    </Wrapper>
  );
}

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 48rem;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin: 0 4rem 0 4rem;
`;
