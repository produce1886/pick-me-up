import { useRouter } from "next/router";
import Modal from "../src/components/organisms/ModalView";
import Gnb from "../src/components/organisms/Gnb";
import ProjectBody from "../src/components/templates/ProjectBody";
import Footer from "../src/components/organisms/Footer";

export default function Project() {
  const router = useRouter();

  return (
    <>
      {router.query.pid && (
        <Modal
          type="project"
          visible={!!router.query.pid}
          pid={router.query.pid}
          onClose={() => router.push(`/project`)}
        ></Modal>
      )}
      <Gnb></Gnb>
      <ProjectBody></ProjectBody>
      <Footer></Footer>
    </>
  );
}
