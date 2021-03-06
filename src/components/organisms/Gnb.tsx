import styled from "styled-components";
import { useSelector } from "react-redux";
import UserState from "@src/types/User";
import Colors from "@colors";
import Link from "next/link";
import Logo from "../molecules/Button/Logo";
import MainMenu from "../molecules/Gnb/Middle";
import LogInButton from "../molecules/Button/LogIn";
import LogOutButton from "../molecules/Button/LogOut";
import Profile from "../molecules/Profile";

export default function GlobalNavigationBar() {
  const userState = useSelector((state: { user: UserState }) => state.user);

  return (
    <Wrapper>
      <InnerWrapper>
        <LogoWrapper>
          <Logo></Logo>
        </LogoWrapper>
        <MainMenu></MainMenu>
        <ProfileWrapper>
          {userState.isSignedIn ? (
            <>
              <Link href={`/profile/${userState.userData.id}`} passHref>
                <A>
                  <Profile
                    level={1}
                    size="1.4rem"
                    name={userState.userData.username}
                    profileImage={userState.userData.image}
                  ></Profile>
                </A>
              </Link>
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

const Wrapper = styled.header`
  width: 100%;
  height: 4rem;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: ${Colors.WHITE};
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const A = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
