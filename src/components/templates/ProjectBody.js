import { useState } from "react";
import styled from "styled-components";
import FilterSearch from "../organisms/FilterSearch";
import Filter from "../molecules/Filter/Filter";
import { ALIGN } from "../molecules/Filter/ItemData";
import ProjectList from "./ProjectList";
import WriteButton from "../molecules/Button/Write";
import ModalWrite from "../organisms/ModalWrite";
import BottomButtons from "../organisms/BottomButtons";

export default function ProjectBody() {
  const [filter, setFilter] = useState({});
  const [category, setCategory] = useState();
  const [field, setField] = useState();
  const [region, setRegion] = useState();
  const [projectType, setProjectType] = useState();
  const [sort, setSort] = useState("최신순");
  const [query, setQuery] = useState();

  const [viewVisible, setViewVisible] = useState(false);
  const [writeVisible, setWriteVisible] = useState(false);

  const openView = () => {
    setViewVisible(true);
  };
  const openWrite = () => {
    setWriteVisible(true);
  };

  const closeView = () => {
    setViewVisible(false);
  };
  const closeWrite = () => {
    setWriteVisible(false);
  };

  return (
    <>
      <FilterSearch
        type="project"
        setCategory={setCategory}
        setField={setField}
        setRegion={setRegion}
        setProjectType={setProjectType}
        setQuery={setQuery}
      ></FilterSearch>
      <Wrapper>
        <InnerWrapper>
          <Div>
            <Filter
              title="최신순"
              activeMenu="align"
              data={ALIGN}
              onClick={setSort}
            ></Filter>
          </Div>
          <ProjectList></ProjectList>
          <BottomButtons></BottomButtons>
        </InnerWrapper>
      </Wrapper>
      <WriteButton openWrite={openWrite}></WriteButton>
      {writeVisible && (
        <ModalWrite
          visible={writeVisible}
          maskClosable={true}
          onClose={closeWrite}
          type="project"
        ></ModalWrite>
      )}
    </>
  );
}

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1.2rem 0 1.2rem 1rem;
  box-sizing: border-box;
`;

const InnerWrapper = styled.div`
  margin: 0 4rem 0 4rem;
  max-width: 1200px;
  width: 48rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  z-index: 100;
`;

const Wrapper = styled.div`
  background-color: #f0f8fd;
  justify-content: center;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
