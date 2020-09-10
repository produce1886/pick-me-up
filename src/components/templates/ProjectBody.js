import { useState } from "react";
import styled from "styled-components";
import FilterSearch from "../organisms/FilterSearch";
import Filter from "../molecules/Filter/Filter";
import { ALIGN } from "../molecules/Filter/ItemData";
import ProjectList from "./ProjectList";
import WriteButton from "../molecules/Button/Write";
import ModalWrite from "../organisms/ModalWrite";
import { useSelector } from "react-redux";

function ProjectBody(props) {
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");
  const [projectType, setProjectType] = useState("");
  const [sort, setSort] = useState("최신순");
  const [query, setQuery] = useState("");
  const [writeVisible, setWriteVisible] = useState(false);
  const isSignedIn = useSelector((state) => state.user.isSignedIn);

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
            reload={props.reload}
          ></ProjectList>
        </InnerWrapper>
      </Wrapper>
      {isSignedIn && !writeVisible && !props.viewVisible && (
        <WriteButton openWrite={() => setWriteVisible(true)}></WriteButton>
      )}
      {writeVisible && (
        <ModalWrite
          type="project"
          visible={writeVisible}
          onClose={() => setWriteVisible(false)}
          reload={props.reload}
          setReload={props.setReload}
        ></ModalWrite>
      )}
    </>
  );
}

export default React.memo(ProjectBody);

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
  max-width: 92%;
  width: 48rem;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  z-index: 100;
`;

const Wrapper = styled.div`
  background-color: #f0f8fd;
  width: 100%;
  min-height: 30rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
`;
