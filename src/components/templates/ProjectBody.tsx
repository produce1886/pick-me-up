import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Colors from "@colors";
import UserState from "@src/types/User";
import FilterSearch from "../organisms/FilterSearch";
import Filter from "../molecules/Filter/Filter";
import { ALIGN } from "../molecules/Filter/ItemData";
import ProjectList from "./ProjectList";
import WriteButton from "../molecules/Button/Write";
import TopButton from "../molecules/Button/Top";
import ModalWrite from "../organisms/ModalWrite";

type BodyProps = {
  isModalVisible: boolean;
  reload: number;
  setReload: React.Dispatch<React.SetStateAction<number>>;
};

function ProjectBody(props: BodyProps) {
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");
  const [projectType, setProjectType] = useState("");
  const [sort, setSort] = useState("최신순");
  const [query, setQuery] = useState("");
  const [isWriteVisible, setIsWriteVisible] = useState(false);
  const isSignedIn = useSelector((state: UserState) => state.isSignedIn);
  const align = "최신순";

  return (
    <>
      <FilterSearch
        page="project"
        setCategory={setCategory}
        setField={setField}
        setRegion={setRegion}
        setProjectType={setProjectType}
        setQuery={setQuery}
      ></FilterSearch>
      <Wrapper>
        <InnerWrapper>
          <AlignFilterWrapper>
            <Filter
              width="6rem"
              height="1.6rem"
              line="1.08rem"
              level={3}
              defaultText={align}
              data={ALIGN}
              onClick={setSort}
            ></Filter>
          </AlignFilterWrapper>
          <ProjectList
            category={category}
            field={field}
            region={region}
            projectType={projectType}
            query={query}
            sort={sort}
            reload={props.reload}
          ></ProjectList>
        </InnerWrapper>
      </Wrapper>
      <TopButton></TopButton>
      {isSignedIn && !isWriteVisible && !props.isModalVisible && (
        <WriteButton onClick={() => setIsWriteVisible(true)}></WriteButton>
      )}
      {isWriteVisible && (
        <ModalWrite
          page="project"
          isVisible={isWriteVisible}
          onClose={() => setIsWriteVisible(false)}
          reload={props.reload}
          setReload={props.setReload}
        ></ModalWrite>
      )}
    </>
  );
}

export default React.memo(ProjectBody);

const AlignFilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1.2rem 0 1.2rem 1rem;
  box-sizing: border-box;
`;

const InnerWrapper = styled.div`
  margin: 0 4rem 0 4rem;
  max-width: 92%;
  width: 48rem;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  z-index: 100;
`;

const Wrapper = styled.div`
  background-color: ${Colors.LIGHT_BLUE};
  width: 100%;
  min-height: 30rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
`;
