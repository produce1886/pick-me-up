import styled from "styled-components";
import Gnb from "../src/components/organisms/Gnb";
import Projectlist from "../src/components/templates/Projectlist";
import Filter from "../src/components/molecules/Filter";
import FilterSearch from "../src/components/organisms/FilterSearch";
import WriteButton from "../src/components/molecules/Button/Write";
export default function Project() {
  
  return (
    <>
    <Gnb></Gnb>
    <FilterWrapper>
      <FilterSearch type="project"></FilterSearch>
    </FilterWrapper>
    <Wrapper>
      <FilterListWrapper>
        <Div>
          <Filter type="bigoff" word="최신순"></Filter>
        </Div>
        <Projectlist></Projectlist>
      </FilterListWrapper>
      <WriteButton></WriteButton>
    </Wrapper>
  </>
  
  );
}

const Wrapper = styled.div`
  background-color: #f0f8fd;
  justify-content: center;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  bottom: 0;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 1.2rem 0 1.2rem 0;
`;

const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 0.01rem solid #d3d4d8;
`;

const FilterListWrapper = styled.div`
  width: 50rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  bottom: 0;
  margin: 0 0 0 3rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 2rem;
  position: absolute;
  margin: 2rem 0 2rem 20rem;
`;