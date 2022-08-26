import "../styles/globals.css";
import { useEffect } from "react";
import "../styles/Home.module.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {

  
  useEffect(() => {
    if (typeof window === "undefined") {
      console.log("elo");
    }
  });

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
