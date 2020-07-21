import styled from "styled-components";
import Gnb from "../src/components/organisms/Gnb";
import FilterSearch from "../src/components/organisms/FilterSearch"
export default function Portfolio() {
  return (
    <>
    <Gnb></Gnb>
    <FilterWrapper>
     <FilterSearch type="portfolio"></FilterSearch>
   </FilterWrapper>
    <Wrapper></Wrapper>
  </>
  );
}

const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 0.01rem solid #d3d4d8;
`;

const Wrapper = styled.div`
  background-color: #f5edff;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
