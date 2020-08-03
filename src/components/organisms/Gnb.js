import styled from "styled-components";
import Logo from "../molecules/Button/Logo";
import Wrapper from "../atoms/gnb";
import MainMenu from "../molecules/menu/Main";
import LogInButton from "../molecules/Button/LogIn";
import { useSelector } from "react-redux";

export default function GlobalNavigationBar() {
  const state = useSelector((state) => state.login);

  return (
    <Wrapper>
      <InnerWrapper>
        <Logo></Logo>
        <MainMenu></MainMenu>
        {state.isSignedIn ? <p>Logged in</p> : <LogInButton></LogInButton>}
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
