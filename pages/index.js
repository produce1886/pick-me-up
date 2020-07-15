import Head from "next/head";
import Gnb from "../src/components/organisms/Gnb";
import Banner from "../src/components/organisms/Banner";
import Preview from "../src/components/templates/Preview";
import HotTag from "../src/components/organisms/HotTag";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Gnb></Gnb>
      <Banner></Banner>
      <Preview type="new"></Preview>
      <Preview type="most"></Preview>
      <HotTag></HotTag>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;
