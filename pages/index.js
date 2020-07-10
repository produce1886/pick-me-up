import Head from "next/head";
import Gnb from "../src/components/organisms/Gnb";
import Banner from "../src/components/organisms/Banner";
import Preview from "../src/components/templates/Preview";

export default function Home() {
  return (
    <>
      <Gnb></Gnb>
      <Banner></Banner>
      <Preview></Preview>
    </>
  );
}
