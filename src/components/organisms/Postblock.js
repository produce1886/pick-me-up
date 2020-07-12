import Wrapper from "../atoms/Postblock";
import Top from "../molecules/Postblock/Top";
import Bottom from "../molecules/Postblock/Bottom";
import styled from "styled-components";
import Text from "../atoms/Text";

export default function Postblock() {
  return (
    <Wrapper>
      <Top></Top>
      <Body>
        <Text level={2} color="#232735">
          Body textbox Continually unleash technically sound products before
          installed base opportunities. Holisticly harness granular...
        </Text>
      </Body>
      <Bottom></Bottom>
    </Wrapper>
  );
}

const Body = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0.7rem 1rem 0 1rem;
  box-sizing: border-box;
`;
