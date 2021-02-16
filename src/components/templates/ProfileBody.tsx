import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ProfileHooks from "@src/lib/hooks/Profile";
import Top from "../organisms/Profile/Top";
import Tab from "../organisms/Profile/Tab";
import Info from "../organisms/Profile/Info";
import Portfolio from "../organisms/Profile/Portfolio";
import Project from "../organisms/Profile/Project";
import EditModal from "../organisms/Profile/EditModal";
import Skeleton from "../_skeletons/profile/ProfileInfo";

function ProfileBody() {
  const [reload, setReload] = useState<number>(0);
  const [selected, setSelected] = useState(0);
  const [isEditVisible, setIsEditVisible] = useState(false);

  const router = useRouter();
  const { userID } = router.query;

  const { isLoading, isError, data } = ProfileHooks.useProfileGetApi([
    userID,
    reload,
  ]);

  const getUserProjects = ProfileHooks.useUserProjectListGetApi([userID]);
  const userProjectList = getUserProjects;

  if (isLoading) {
    return (
      <Wrapper>
        <Skeleton></Skeleton>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {data && !isLoading && (
        <Top
          setIsEditVisible={setIsEditVisible}
          profileImage={data.image}
          name={data.username}
          isIntroducePublic={true}
          introduce={data.introduce}
        ></Top>
      )}
      <Tab selected={selected} setSelected={setSelected}></Tab>
      <BodyWrapper>
        {selected === 0 && data && <Info {...data}></Info>}
        {selected === 1 && userProjectList && (
          <Project {...userProjectList}></Project>
        )}
        {selected === 2 && <Portfolio></Portfolio>}
      </BodyWrapper>
      {isEditVisible && (
        <EditModal
          onClose={() => setIsEditVisible(false)}
          reload={reload}
          setReload={setReload}
          {...data}
        ></EditModal>
      )}
    </Wrapper>
  );
}

export default ProfileBody;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BodyWrapper = styled.div`
  width: 48rem;
  box-sizing: border-box;
  min-height: 20rem;
  margin: 0 4rem 0 4rem;
  align-items: center;
  max-width: 92%;
`;
