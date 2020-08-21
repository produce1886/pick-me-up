import styled from "styled-components";
import Text from "../../atoms/Text";
import Top from "../../atoms/Modal/Top";
import Profile from "../Profile";
import Filterinfo from "../FilterInfo";

export default function ModalTop(props) {
  return (
    <Top>
      <Div>
        <TitleFilterWrapper>
          <TitleWrapper>
            <Text level={12} color="#9c69e2" weight={800}>
              {props.title}
            </Text>
          </TitleWrapper>
          <Filterinfo type={props.type}></Filterinfo>
        </TitleFilterWrapper>
        <ProfileBox>
          <Profile
            direction="column"
            size="2rem"
            profileImage={props.profileImage}
          ></Profile>
          <TextDiv>
            <Text level={3} weight={800}>
              {props.name}
            </Text>
          </TextDiv>
        </ProfileBox>
      </Div>
    </Top>
  );
}

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const TextDiv = styled.div`
  width: 2rem;
  height: fit-content;
  display: flex;
  align-items: center;
  margin: 0 0.3rem 0 0;
`;
const TitleWrapper = styled.div`
  width: 30rem;
  height: fit-content;
  display: flex;
  align-items: left;
  margin: 0 0 0.5rem 0rem;
`;

const TitleFilterWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: left;
  margin: 0 0 1rem 0rem;
  flex-direction: column;
`;
const ProfileBox = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
