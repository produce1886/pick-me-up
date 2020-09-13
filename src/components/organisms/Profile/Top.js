import styled from "styled-components";
import Text from "../../atoms/Text";

function Top() {
  return (
    <Wrapper>
      <Background></Background>
      <ProfileHolder></ProfileHolder>
      <InfoWrapper>
        <Text level={6} weight="bold" color="#232735">
          Username
        </Text>
        <Text level={3} color="#8b90a0">
          introduce
        </Text>
      </InfoWrapper>
    </Wrapper>
  );
}

export default React.memo(Top);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  height: 7.2rem;
  background-color: #f0f1f3;
`;

const InfoWrapper = styled.div`
  width: 48rem;
  box-sizing: border-box;
  min-height: 6rem;
  padding: 2.5rem 0 1rem 0;
  margin: 0 4rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 92%;
`;

const ProfileHolder = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 2.5rem;
  overflow: hidden;
  background-color: #d3d4d8;
  position: absolute;
  top: 4.6rem;
`;
