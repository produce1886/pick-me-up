import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../src/components/organisms/ModalView";
import UpdateModal from "../src/components/organisms/ModalUpdate";
import Gnb from "../src/components/organisms/Gnb";
import ProjectBody from "../src/components/templates/ProjectBody";
import Footer from "../src/components/organisms/Footer";

export default function Project() {
  const router = useRouter();
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [reload, setReload] = useState<number>(0);
  const [modalReload, setModalReload] = useState<number>(0);

  const pid = parseInt(router.query.pid.toString(), 10);

  return (
    <>
      {pid && !isUpdate && (
        <Modal
          page="project"
          isVisible={!!pid}
          pid={pid}
          onClose={() => router.push(`/project`)}
          setIsUpdate={setIsUpdate}
          reload={reload}
          setReload={setReload}
          modalReload={modalReload}
          setModalReload={setModalReload}
        ></Modal>
      )}
      {pid && isUpdate && (
        <UpdateModal
          page="project"
          pid={pid}
          onClose={() => {
            setIsUpdate(false);
            router.push(`/project`);
          }}
          setIsUpdate={setIsUpdate}
          modalReload={modalReload}
          setModalReload={setModalReload}
        ></UpdateModal>
      )}
      <Gnb></Gnb>
      <ProjectBody
        isModalVisible={!!pid}
        reload={reload}
        setReload={setReload}
      ></ProjectBody>
      <Footer></Footer>
    </>
  );
}
