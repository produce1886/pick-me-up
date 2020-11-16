import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import Text from "../../atoms/Text";
import EditButton from "../../molecules/Button/Edit";

function Top(props) {
  return (
    <Wrapper>
      <Background></Background>
      <ProfileHolder>
        <Img src={props.image}></Img>
      </ProfileHolder>
      <InfoWrapper>
        <ButtonWrapper
          onClick={() => {
            props.setEditVisible(true);
          }}
        >
          <EditButton></EditButton>
        </ButtonWrapper>
        <Text level={6} weight="bold" color={Colors.BLACK}>
          {props.username}
        </Text>
        {props.introduce_security && (
          <Text level={3} color={Colors.DEEP_GREY}>
            {props.introduce}
          </Text>
        )}
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
  background-color: ${Colors.LIGHT_GREY};
`;

const InfoWrapper = styled.div`
  width: 48rem;
  box-sizing: border-box;
  min-height: 6rem;
  padding: 0.72rem 0 1rem 0;
  margin: 0 4rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 92%;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.2rem;
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

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
