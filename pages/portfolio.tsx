import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../src/components/organisms/ModalView";
import UpdateModal from "../src/components/organisms/ModalUpdate";
import Gnb from "../src/components/organisms/Gnb";
import PortfolioBody from "../src/components/templates/PortfolioBody";
import Footer from "../src/components/organisms/Footer";

export default function Portfolio() {
  const router = useRouter();
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [reload, setReload] = useState<number>(0);
  const [modalReload, setModalReload] = useState<number>(0);

  const pid = router.query.pid
    ? parseInt(router.query.pid.toString(), 10)
    : null;

  return (
    <>
      {pid && !isUpdate && (
        <Modal
          page="portfolio"
          isVisible={!!pid}
          pid={pid}
          onClose={() => router.push(`/portfolio`)}
          setIsUpdate={setIsUpdate}
          reload={reload}
          setReload={setReload}
          modalReload={modalReload}
          setModalReload={setModalReload}
        ></Modal>
      )}
      {pid && isUpdate && (
        <UpdateModal
          page="portfolio"
          pid={pid}
          onClose={() => {
            setIsUpdate(false);
            router.push(`/portfolio`);
          }}
          setIsUpdate={setIsUpdate}
          modalReload={modalReload}
          setModalReload={setModalReload}
        ></UpdateModal>
      )}
      <Gnb></Gnb>
      <PortfolioBody
        isModalVisible={!!pid}
        reload={reload}
        setReload={setReload}
      ></PortfolioBody>
      <Footer></Footer>
    </>
  );
}
