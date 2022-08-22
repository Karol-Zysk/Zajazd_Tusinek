import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import LogoSvg from "./LogoSvg";

type NavbarProps = {
  toggle: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [prevScrollpos, setPrevScrollpos] = useState(0);

  const [scrollNav, setScrollNav] = useState(true);

  useEffect(() => {
    let currentScrollPos = window.pageYOffset;
    window.onscroll = function () {
      if (prevScrollpos > currentScrollPos) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
      setPrevScrollpos(currentScrollPos);
    };
  });


  return (
    <>
      <div
        className={styles.navbar}
        style={{
          position: "fixed",
          top: scrollNav ? "5rem" : "-5rem",
        }}
      >
        <div className={styles.container} style={{}}>
          <Link href="/">
            <a>
              <LogoSvg  />
            </a>
          </Link>
          <Link href="/">
            <a
              style={{
                transform: "scale(1.2)",
                color: "green ",
              }}
              className={styles.logo_link}
            >
              Zajazd Tusinek
            </a>
          </Link>

          <div className={styles.mobile_icon} onClick={toggle}>
            <FaBars color="darkgreen" />
          </div>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link href="/accomodation">
                <a
                  className={styles.link}
                  style={{
                    color: "green",
                    textShadow: "1px 1px 1px black",
                    fontSize: "1.4rem",
                  }}
                >
                  Noclegi
                </a>
              </Link>
            </li>

            <li className={styles.item}>
              <Link href="awards">
                <a
                  style={{
                    color: "green",
                    textShadow: "1px 1px 1px black",
                    fontSize: "1.4rem",
                  }}
                  className={styles.link}
                >
                  Nagrody
                </a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="restaurant">
                <a
                  style={{
                    color: "green",
                    textShadow: "1px 1px 1px black",
                    fontSize: "1.4rem",
                  }}
                  className={styles.link}
                >
                  Restauracja
                </a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/products">
                <a
                  style={{
                    color: "green",
                    textShadow: "1px 1px 1px black",
                    fontSize: "1.4rem",
                  }}
                  className={styles.link}
                >
                  Produkty
                </a>
              </Link>
            </li>
          </ul>
          <nav className={styles.navBtn}>
            <Link href="contact">
              <a className={styles.btnLink}>Kontakt</a>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
