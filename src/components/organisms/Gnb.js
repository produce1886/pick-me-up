import styled from "styled-components";
import { useSelector } from "react-redux";
import Logo from "../molecules/Button/Logo";
import MainMenu from "../molecules/menu/Main";
import LogInButton from "../molecules/Button/LogIn";
import LogOutButton from "../molecules/Button/LogOut";
import Profile from "../molecules/Profile";

export default function GlobalNavigationBar() {
  const state = useSelector((state) => state.user);

  return (
    <Wrapper>
      <InnerWrapper>
        <LogoWrapper>
          <Logo></Logo>
        </LogoWrapper>
        <MainMenu></MainMenu>
        <ProfileWrapper>
          {state.isSignedIn ? (
            <>
              <Profile
                level={1}
                size="1.4rem"
                name={state.userData.username}
                profileImage={state.userData.image}
              ></Profile>
              <LogOutButton></LogOutButton>
            </>
          ) : (
            <LogInButton></LogInButton>
          )}
        </ProfileWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

const InnerWrapper = styled.div`
  max-width: 92%;
  width: 48rem;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin: 0 4rem 0 4rem;
  position: relative;
`;

const LogoWrapper = styled.div`
  width: 20rem;
  justify-content: left;
  display: flex;
  flex-direction: row;
`;

const ProfileWrapper = styled.div`
  width: 20rem;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;
