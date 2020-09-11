import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../src/components/organisms/ModalView";
import UpdateModal from "../src/components/organisms/ModalUpdate";
import Gnb from "../src/components/organisms/Gnb";
import PortfolioBody from "../src/components/templates/PortfolioBody";
import Footer from "../src/components/organisms/Footer";

export default function Portfolio() {
  const router = useRouter();
  const [update, setUpdate] = useState<boolean>(false); //수정
  const [reload, setReload] = useState<number>(0);
  const [modalReload, setModalReload] = useState<number>(0);

  return (
    <>
      {router.query.pid && !update && (
        <Modal
          type="portfolio"
          visible={!!router.query.pid}
          pid={router.query.pid}
          onClose={() => router.push(`/portfolio`)}
          setUpdate={setUpdate}
          reload={reload}
          setReload={setReload}
          modalReload={modalReload}
          setModalReload={setModalReload}
        ></Modal>
      )}
      {update && (
        <UpdateModal
          type="portfolio"
          pid={router.query.pid}
          onClose={() => {
            setUpdate(false);
            router.push(`/portfolio`);
          }}
          setUpdate={setUpdate}
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
