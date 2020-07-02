import Head from "next/head";
import Gnb from "../src/components/organisms/Gnb";
import Banner from "../src/components/organisms/Banner";

export default function Home() {
  return (
    <>
      <Gnb></Gnb>
      <Banner></Banner>
      <p>Initial settings...</p>
    </>
  );
}
