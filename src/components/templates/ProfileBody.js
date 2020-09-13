import { useState } from "react";
import styled from "styled-components";
import Top from "../organisms/Profile/Top";
import Tab from "../organisms/Profile/Tab";
import Info from "../organisms/Profile/Info";

function ProfileBody() {
  const [selected, setSelected] = useState(0);

  return (
    <Wrapper>
      <Top></Top>
      <Tab selected={selected} setSelected={setSelected}></Tab>
      <BodyWrapper>{selected === 0 && <Info></Info>}</BodyWrapper>
    </Wrapper>
  );
}

export default React.memo(ProfileBody);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BodyWrapper = styled.div`
  width: 48rem;
  box-sizing: border-box;
  min-height: 20rem;
  margin: 0 4rem 0 4rem;
  align-items: center;
  max-width: 92%;
`;
