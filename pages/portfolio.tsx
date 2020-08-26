import { useRouter } from "next/router";
import Modal from "../src/components/organisms/ModalView";
import Gnb from "../src/components/organisms/Gnb";
import PortfolioBody from "../src/components/templates/PortfolioBody";
import Footer from "../src/components/organisms/Footer";

export default function Portfolio() {
  const router = useRouter();
  return (
    <>
      {router.query.pid && (
        <Modal
          type="portfolio"
          visible={!!router.query.pid}
          pid={router.query.pid}
          onClose={() => router.push(`/portfolio`)}
        ></Modal>
      )}
      <Gnb></Gnb>
      <PortfolioBody></PortfolioBody>
      <Footer></Footer>
    </>
  );
}
