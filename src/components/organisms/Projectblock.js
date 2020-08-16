import styled, { css } from "styled-components";
import Text from "../atoms/Text";
import Top from "../molecules/ProjectBlock/Top";
import Bottom from "../molecules/ProjectBlock/Bottom";
import Wrapper from "../atoms/ProjectBlock";

export default function ProjectBlock(props) {
  return (
    <Wrapper>
      <Top></Top>
      <Body>
        <Text level={2} color="#232735">
          Body textbox Continually unleash technically sound products before
          installed base opportunities. Holisticly harness granular e-business
          with e-business ROI. Interactively andemic process improvements...
        </Text>
      </Body>
      <Bottom></Bottom>
    </Wrapper>
  );
}

const Body = styled.div`
  width: 100%;
  padding: 0.7rem 1rem 0rem 1rem;
  box-sizing: border-box;
  overflow: hidden;
  height: 3.84rem;
`;
