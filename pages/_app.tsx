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

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") {
      setAnimation(true);
    }
  }, [router, setAnimation]);

  return animation ? (
    <LogoSvgAnim2 />
  ) : (
    <Layout>
      <AnimatePresence>
        <motion.div
          style={{ overflowX: "hidden" }}
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              x: 0,
              opacity: 0,
            },
            pageAnimate: {
              transition: {
                duration: 1,
              },
              opacity: 1,
              x: 0,
            },
            pageExit: {
              transition: {
                duration: 0.5,
              },
              x: 1200,
              opacity: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
