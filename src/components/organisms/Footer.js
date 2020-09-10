import styled from "styled-components";
import Logo from "../atoms/Image/Logo";
import Text from "../atoms/Text";

export default function Footer() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo style={{ width: "5rem", height: "1.5rem" }}></Logo>
        <Div>
          <Text level={1} weight={500} color="#232735">
            기획자와 개발자, 디자이너들의
          </Text>
          <Text level={1} weight={500} color="#232735">
            네트워킹 플랫폼
          </Text>
          <Text level={0} color="#232735">
            © 2020 pickmeup. All rights reserved.
          </Text>
        </Div>
      </InnerWrapper>
    </Wrapper>
  );
}

const Div = styled.div`
  margin-left: 0.4rem;
  display: flex;
  flex-direction: column;
  height: 2.5rem;
  justify-content: space-between;
`;

const InnerWrapper = styled.div`
  max-width: 92%;
  width: 48rem;
  height: 4.4rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Wrapper = styled.footer`
  width: 100%;
  height: 8rem;
  background-color: #f0f1f3;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding: 1.8rem 4rem 1.8rem 4rem;
`;
