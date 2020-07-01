import styled from "styled-components";
import Wrapper from "../atoms/gnb";
import MainMenu from "../molecules/menu/Main";
import SubMenu from "../molecules/menu/Sub";

export default function GlobalNavigationBar() {
  return (
    <Wrapper>
      <InnerWrapper>
        <div
          style={{ backgroundColor: "#f00", width: "5rem", height: "1.5rem" }}
        >
          Logo
        </div>
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
`;
