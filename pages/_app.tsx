import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import dotenv from "dotenv";
import { wrapper } from "../src/_store";

dotenv.config();

const GlobalStyle = createGlobalStyle`
 
@media (min-width: 768px) { 
  html {
    font-size: 14px;
  } 
} 

@media (min-width: 1024px) { 
  html {
    font-size: 17px;
  } 
} 

@media (min-width: 1440px) {
  html {
    font-size: 18px;
  } 
}

@media (min-width: 2560px) {
  html {
    font-size: 32px;
  } 
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  background-color:#fff;
  min-width: 768px;
}
::-webkit-scrollbar {
  display: none;
}
input {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
html,
          body,
          body > div:first-child{
            height: 100%;
          }
`;

function PickMeUp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>픽미업, Pick me up</title>
        <link rel="shortcut icon" href="favicon.ico"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #fff;
`;

export default wrapper.withRedux(PickMeUp);
