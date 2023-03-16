import React from "react";
import "../styles/globals.scss";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <br></br>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
