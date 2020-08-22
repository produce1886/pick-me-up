import Gnb from "../../src/components/organisms/Gnb";
import ProjectBody from "../../src/components/templates/ProjectBody";
import Footer from "../../src/components/organisms/Footer";
import ModalView from "../../src/components/organisms/ModalView";

export default function Project() {
  return (
    <>
      <Gnb></Gnb>
      <ModalView></ModalView>
      <ProjectBody></ProjectBody>
      <Footer></Footer>
    </>
  );
}
