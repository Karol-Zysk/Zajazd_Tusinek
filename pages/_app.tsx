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
  const router = useRouter();

  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    if (router.pathname === "/") {
      setTimeout(() => {
        setAnimation(false);
      }, 7000);
    }
  }, [router, setAnimation]);

  return (
    <>
      <LogoSvgAnim2 animation={animation} />
      <AnimatePresence>
        <Layout>
          <Component {...pageProps} animation={animation} />
        </Layout>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
