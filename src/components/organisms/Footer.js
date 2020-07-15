import Wrapper from "../atoms/Footer";
import styled from "styled-components";
import Logo from "../atoms/Image/Logo";
import Text from "../atoms/Text";

export default function Footer() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo style={{ width: "5rem", height: "1.5rem" }}></Logo>
        <TextWrapper>
          <Text level={1} weight={500} color="#232735">
            &nbsp;&nbsp;&nbsp;기획자와 개발자, 디자이너들의
            &nbsp;&nbsp;&nbsp;네트워킹 플랫폼
          </Text>
        </TextWrapper>
        <Text level={0} color="#232735">
          &nbsp;&nbsp;&nbsp;© 2020 pickmeup. All rights reserved.
        </Text>
      </InnerWrapper>
    </Wrapper>
  );
}

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 48rem;
  height: 4.4rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  width: 7.8rem;
`;
