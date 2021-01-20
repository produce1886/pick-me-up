import styled, { css } from "styled-components";
import Colors from "@colors";
import Text from "../../atoms/Text";

export default function SkeletonBody() {
  return (
    <>
      <TopWrapper>
        <Background></Background>
        <ProfileHolder></ProfileHolder>
        <InfoWrapper>
          <Block width="4.8rem"></Block>
          <Block width="13.8rem"></Block>
        </InfoWrapper>
      </TopWrapper>
      <TabWrapper>
        <TabButton isSelected={true}>
          <Text level={3} weight="bold" color={Colors.BLACK}>
            정보
          </Text>
        </TabButton>
        <TabButton isSelected={false}>
          <Text level={3} color={Colors.BLACK}>
            프로젝트
          </Text>
        </TabButton>
        <TabButton isSelected={false}>
          <Text level={3} color={Colors.BLACK}>
            포트폴리오
          </Text>
        </TabButton>
      </TabWrapper>
      <Wrapper>
        <BodyWrapper>
          <Block width="0.8rem"></Block>
          <Block width="32.56rem"></Block>
          <Block width="27.76rem"></Block>
        </BodyWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const Block = styled.div`
  ${(props: { width: string }) =>
    css`
      width: ${props.width};
    `};
  height: 0.6rem;
  border-radius: 0.12rem;
  background-color: ${Colors.LIGHT_GREY};
  margin-bottom: 0.5rem;
`;

const BodyWrapper = styled.div`
  width: 48rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 20rem;
  margin: 0 4rem 0 4rem;
  align-items: center;
  justify-content: center;
  max-width: 92%;
  border: 1px solid ${Colors.LIGHT_GREY};
`;

const TabWrapper = styled.div`
  width: 48rem;
  height: 2rem;
  align-items: center;
  border-bottom: 1px solid ${Colors.LIGHT_GREY};
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const TabButton = styled.div`
  width: 4.8rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  ${(props: { isSelected: boolean }) => css`
    border-bottom: ${props.isSelected && `3px solid ${Colors.BLACK}`};
  `}
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  height: 7.2rem;
  background-color: ${Colors.LIGHT_GREY};
`;

const ProfileHolder = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 2.5rem;
  overflow: hidden;
  background-color: ${Colors.GREY};
  position: absolute;
  top: 4.6rem;
`;

const InfoWrapper = styled.div`
  width: 48rem;
  box-sizing: border-box;
  min-height: 6rem;
  padding: 0.72rem 0 1rem 0;
  margin: 2rem 4rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 92%;
`;
