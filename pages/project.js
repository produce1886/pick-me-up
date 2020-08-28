import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../src/components/organisms/ModalView";
import UpdateModal from "../src/components/organisms/ModalUpdate";
import Gnb from "../src/components/organisms/Gnb";
import ProjectBody from "../src/components/templates/ProjectBody";
import Footer from "../src/components/organisms/Footer";

export default function Project() {
  const router = useRouter();
  const [update, setUpdate] = useState(false);

  return (
    <>
      {router.query.pid && !update && (
        <Modal
          type="project"
          visible={!!router.query.pid}
          pid={router.query.pid}
          onClose={() => router.push(`/project`)}
          setUpdate={setUpdate}
        ></Modal>
      )}
      {update && (
        <UpdateModal
          type="project"
          pid={router.query.pid}
          onClose={() => {
            setUpdate(false);
            router.push(`/project`);
          }}
          setUpdate={setUpdate}
        ></UpdateModal>
      )}
      <Gnb></Gnb>
      <ProjectBody viewVisible={!!router.query.pid}></ProjectBody>
      <Footer></Footer>
    </>
  );
}
