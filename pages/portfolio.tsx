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

  return (
    <>
      {router.query.pid && !isUpdate && (
        <Modal
          page="portfolio"
          isVisible={!!router.query.pid}
          pid={router.query.pid}
          onClose={() => router.push(`/portfolio`)}
          setIsUpdate={setIsUpdate}
          reload={reload}
          setReload={setReload}
          modalReload={modalReload}
          setModalReload={setModalReload}
        ></Modal>
      )}
      {router.query.pid && isUpdate && (
        <UpdateModal
          page="portfolio"
          pid={router.query.pid}
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
        viewVisible={!!router.query.pid}
        reload={reload}
        setReload={setReload}
      ></PortfolioBody>
      <Footer></Footer>
    </>
  );
}
