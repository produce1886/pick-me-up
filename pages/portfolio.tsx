import Gnb from "../src/components/organisms/Gnb";
import FilterSearch from "../src/components/organisms/FilterSearch";
import BottomButtons from "../src/components/organisms/BottomButtons";
import PortfolioBody from "../src/components/templates/PortfolioBody";
import Footer from "../src/components/organisms/Footer";

export default function Portfolio() {
  return (
    <>
      <Gnb></Gnb>
      <FilterSearch type="portfolio"></FilterSearch>
      <PortfolioBody></PortfolioBody>
      <BottomButtons></BottomButtons>
      <Footer></Footer>
    </>
  );
}
