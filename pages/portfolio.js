import styled from "styled-components";
import Gnb from "../src/components/organisms/Gnb";
import FilterSearch from "../src/components/organisms/FilterSearch"
import Bottom from "../src/components/organisms/Bottom";
import PortfolioBody from "../src/components/templates/PortfolioBody"
export default function Portfolio() {

  return (
    <>
    <Gnb></Gnb>
    <FilterSearch type="portfolio"></FilterSearch>
    <PortfolioBody></PortfolioBody>
    <Bottom background="#f5edff"></Bottom>
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
`;