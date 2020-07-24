import styled from "styled-components";
import Gnb from "../src/components/organisms/Gnb";
import ProjectBody from "../src/components/templates/ProjectBody"
import Bottom from "../src/components/organisms/Bottom";
import FilterSearch from "../src/components/organisms/FilterSearch";

export default function Project() {
  
  return (
    <>
      <Gnb></Gnb>
      <FilterSearch type="project"></FilterSearch>
      <ProjectBody></ProjectBody>
      <Bottom background="#f0f8fd"></Bottom>
    </>
  );
}


