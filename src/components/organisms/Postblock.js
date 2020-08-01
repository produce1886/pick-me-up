import Wrapper from "../atoms/PostBlock";
import Top from "../molecules/PostBlock/Top";
import Bottom from "../molecules/PostBlock/Bottom";
import styled, { css } from "styled-components";
import Text from "../atoms/Text";

export default function PostBlock(props) {
  return (
    <Wrapper>
      <Top type={props.type} rank={props.rank}></Top>
      {props.type === "most" && (
        <BodyMost>
          <Text level={2} color="#232735">
            Body textbox Continually unleash technically sound products before
            installed base opportunities. Holisticly harness granular...
          </Text>
        </BodyMost>
      )}
      {props.type === "new" && (
        <BodyNew>
          <Text level={2} color="#232735">
            Body textbox Continually unleash technically sound products before
            installed base opportunities. Holisticly harness granular...
          </Text>
        </BodyNew>
      )}
      <Bottom></Bottom>
    </Wrapper>
  );
}

const BodyNew = styled.div`
  width: 100%;
  padding: 0.7rem 1rem 0 1rem;
  box-sizing: border-box;
  overflow: hidden;
  height: 5.4rem;
`;

const BodyMost = styled.div`
  width: 100%;
  padding: 0.7rem 1rem 0 1rem;
  box-sizing: border-box;
  overflow: hidden;
  height: 3.7rem;
`;
