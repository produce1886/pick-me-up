import styled from "styled-components";
import Projectblock from "../organisms/ProjectBlock";

export default function Projectlist() {
  return (
    <Wrapper>
      <Div>
        <Projectblock></Projectblock>
        <Projectblock></Projectblock>
      </Div>
      <Div>
        <Projectblock></Projectblock>
        <Projectblock></Projectblock>
      </Div>
      <Div>
        <Projectblock></Projectblock>
        <Projectblock></Projectblock>
      </Div>
      <Div>
        <Projectblock></Projectblock>
        <Projectblock></Projectblock>
      </Div>
      <Div>
        <Projectblock></Projectblock>
        <Projectblock></Projectblock>
      </Div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 48.5rem;
  height: 67.68rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.45rem 0 0.45rem 0;
`;
