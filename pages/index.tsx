import Gnb from "../src/components/organisms/Gnb";
import Banner from "../src/components/organisms/Banner";
import Preview from "../src/components/templates/Preview";
import HotTag from "../src/components/organisms/HotTag";
import Footer from "../src/components/organisms/Footer";

export default function Home() {
  return (
    <>
      <Gnb></Gnb>
      <Banner></Banner>
      <Preview sort="new"></Preview>
      <Preview sort="most"></Preview>
      <HotTag></HotTag>
      <Footer></Footer>
    </>
  );
}
