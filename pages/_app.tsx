import "../styles/globals.css";
import "../styles/Home.module.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import styles from "../components/Accomodations/Accomodations.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LogoSvgAnim2 from "../components/Navbar/LogoSvgAnim2";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
