import Gnb from "../src/components/organisms/Gnb";
import ProjectBody from "../src/components/templates/ProjectBody";
import BottomButtons from "../src/components/organisms/BottomButtons";
import FilterSearch from "../src/components/organisms/FilterSearch";
export default function Project(props) {
  return (
    <>
      <Gnb></Gnb>
      <FilterSearch type="project"></FilterSearch>
      <ProjectBody></ProjectBody>
      <BottomButtons background="#f0f8fd"></BottomButtons>
    </>
  );
}
