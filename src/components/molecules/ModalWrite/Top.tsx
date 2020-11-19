import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Top from "../../atoms/Modal/Top";
import Profile from "../Profile";
import Filters from "../Filter/FilterGroup";
import { PageType } from "../../atoms/Modal/ModalType";

type ModalTopProps = {
  page: PageType;
  setCategory: Dispatch<SetStateAction<string>>;
  setField: React.Dispatch<React.SetStateAction<string>>;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  setProjectType: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  profileImage: string;
};

function ModalTop({
  page,
  setCategory,
  setField,
  setRegion,
  setProjectType,
  setTitle,
  title,
  profileImage,
}: ModalTopProps) {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <Top>
      <Div>
        <TitleFilterWrapper>
          <Input
            placeholder="제목을 입력하세요"
            type="text"
            value={title}
            onChange={onChangeHandler}
          ></Input>
          <Filters
            page={page}
            width="fit-content"
            height="1rem"
            level={0}
            setCategory={setCategory}
            setField={setField}
            setRegion={setRegion}
            setProjectType={setProjectType}
          ></Filters>
        </TitleFilterWrapper>
        <ProfileWrapper>
          <Profile size="3rem" profileImage={profileImage}></Profile>
        </ProfileWrapper>
      </Div>
    </Top>
  );
}

export default React.memo(ModalTop);

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
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
