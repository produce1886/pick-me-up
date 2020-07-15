import Head from "next/head";
import styled from "styled-components";
import Gnb from "../src/components/organisms/Gnb";
import Banner from "../src/components/organisms/Banner";
import Preview from "../src/components/templates/Preview";
import HotTag from "../src/components/organisms/HotTag";
import Footer from "../src/components/organisms/Footer";

export default function Home() {
  return (
    <Wrapper>
      <Gnb></Gnb>
      <Banner></Banner>
      <Preview type="new"></Preview>
      <Preview type="most"></Preview>
      <HotTag></HotTag>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;
