import styled from "styled-components";
import Text from "../../atoms/Text";
import Top from "../../atoms/Modal/Top";
import Profile from "../Profile";
import Filters from "../Filter/FilterGroup";

export default function ModalTop(props) {
  const handleChange = (event) => {
    props.setTitle(event.target.value);
  };
  return (
    <Top height="6rem">
      <Div>
        <TitleFilterWrapper>
          <Input
            placeholder="제목을 입력하세요"
            type="text"
            onChange={handleChange}
          ></Input>
          <Filters
            type={props.type}
            width="fit-content"
            height="1rem"
            line="1rem"
            level={1}
            setCategory={props.setCategory}
            setField={props.setField}
            setRegion={props.setRegion}
            setProjectType={props.setProjectType}
          ></Filters>
        </TitleFilterWrapper>

        <ProfileWrapper>
          <Profile size="2rem" profileImage={props.profilePic}></Profile>
          <TextDiv>
            <Text level={2} weight={800}>
              {props.name}
            </Text>
          </TextDiv>
        </ProfileWrapper>
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
  display: flex;
  align-items: center;
  margin: 0 0.3rem 0 0;
`;
const ProfileWrapper = styled.div`
  width: 2.2rem;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 0.3rem 0 0;
`;
const TitleFilterWrapper = styled.div`
  width: 30rem;
  height: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: unset;
  box-sizing: border-box;
  width: 20rem;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.6rem;
  font-weight: bolder;
  margin: 0 0 0.3rem 0;
`;
