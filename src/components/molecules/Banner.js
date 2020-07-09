import styled from "styled-components";
import Wrapper from "../atoms/Banner/Item";

export default function Item(props) {
  return (
    <Wrapper color={props.color}>
      <InnerWrapper>
        <Col>{props.type}</Col>
        <Img src="Image/Project.png"></Img>
      </InnerWrapper>
    </Wrapper>
  );
}

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 48rem;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 13rem;
`;
