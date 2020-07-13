import styled from "styled-components";
import Logo from "../atoms/Image/Logo";
import Wrapper from "../atoms/gnb";
import MainMenu from "../molecules/menu/Main";
import SubMenu from "../molecules/menu/Sub";

export default function GlobalNavigationBar() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo style={{ width: "5rem", height: "1.5rem" }}></Logo>
        <MainMenu></MainMenu>
        <SubMenu></SubMenu>
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
