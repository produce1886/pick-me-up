import { useState } from "react";
import styled from "styled-components";
import FilterSearch from "../organisms/FilterSearch";
import Filter from "../molecules/Filter/Filter";
import { ALIGN } from "../molecules/Filter/ItemData";
import ProjectList from "./ProjectList";
import WriteButton from "../molecules/Button/Write";
import ModalWrite from "../organisms/ModalWrite";
import { useSelector } from "react-redux";

export default function ProjectBody() {
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");
  const [projectType, setProjectType] = useState("");
  const [sort, setSort] = useState("최신순");
  const [query, setQuery] = useState("");
  const [writeVisible, setWriteVisible] = useState(false);
  const isSignedIn = useSelector((state) => state.user.isSignedIn);

  const openWrite = () => {
    setWriteVisible(true);
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
          <ProjectList
            category={category}
            field={field}
            region={region}
            projectType={projectType}
            query={query}
            sort={sort}
          ></ProjectList>
        </InnerWrapper>
      </Wrapper>
      {isSignedIn && <WriteButton openWrite={openWrite}></WriteButton>}
      {writeVisible && (
        <ModalWrite
          visible={writeVisible}
          maskClosable={true}
          onClose={closeWrite}
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
