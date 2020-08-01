import styled from "styled-components";
import Gnb from "../src/components/organisms/Gnb";
import FilterSearch from "../src/components/organisms/FilterSearch"
import BottomButtons from "../src/components/organisms/BottomButtons";
import PortfolioBody from "../src/components/templates/PortfolioBody"
export default function Portfolio() {

  return (
    <>
    <Gnb></Gnb>
    <FilterSearch type="portfolio"></FilterSearch>
    <PortfolioBody></PortfolioBody>
    <BottomButtons background="#f5edff"></BottomButtons>
  </>
  );
}
