import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../src/components/organisms/ModalView";
import UpdateModal from "../src/components/organisms/ModalUpdate";
import Gnb from "../src/components/organisms/Gnb";
import PortfolioBody from "../src/components/templates/PortfolioBody";
import Footer from "../src/components/organisms/Footer";

export default function Portfolio() {
  const router = useRouter();
  const [update, setUpdate] = useState(false); //수정
  const [reload, setReload] = useState(0);

  return (
    <>
      {router.query.pid && (
        <Modal
          type="portfolio"
          visible={!!router.query.pid}
          pid={router.query.pid}
          onClose={() => router.push(`/portfolio`)}
          setUpdate={setUpdate}
          reload={reload}
          setReload={setReload}
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
