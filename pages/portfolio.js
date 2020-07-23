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
