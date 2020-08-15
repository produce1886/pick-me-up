import styled from "styled-components";
import ProjectBlock from "../organisms/ProjectBlock";

export default function Projectlist() {
  return (
    <Wrapper>
      <Div>
        <ProjectBlock></ProjectBlock>
        <ProjectBlock></ProjectBlock>
      </Div>
      <Div>
        <ProjectBlock></ProjectBlock>
        <ProjectBlock></ProjectBlock>
      </Div>
      <Div>
        <ProjectBlock></ProjectBlock>
        <ProjectBlock></ProjectBlock>
      </Div>
      <Div>
        <ProjectBlock></ProjectBlock>
        <ProjectBlock></ProjectBlock>
      </Div>
      <Div>
        <ProjectBlock></ProjectBlock>
      </Div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem 0;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
