import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

type NavbarProps = {
  toggle: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <div
        className={styles.navbar}
        style={{
          background: scrollNav ? "rgba(0, 155, 0, 0.86)" : "transparent",
          borderBottom: scrollNav
            ? "5px solid rgb(255, 255, 255)"
            : "5px solid transparent",
        }}
      >
        <div className={styles.container}>
          <Link href="/">
            <a
              style={{
                fontSize: scrollNav ? "1.7rem" : "2.9rem",
                color: scrollNav ? "white" : "green ",
                textShadow: scrollNav
                  ? "2px 4px 4px black"
                  : "2px 2px 3px black",
              }}
              className={styles.logo_link}
            >
              Zajazd Tusinek
            </a>
          </Link>

          <div className={styles.mobile_icon} onClick={toggle}>
            <FaBars />
          </div>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link href="/accomodation">
                <a
                  className={styles.link}
                  style={{
                    visibility: scrollNav ? "visible" : "hidden",
                    opacity: scrollNav ? "1" : "0",
                    fontSize: scrollNav ? "1.1rem" : "0.5rem",
                  }}
                >
                  Noclegi
                </a>
              </Link>
            </li>

            <li className={styles.item}>
              <Link href="info">
                <a
                  style={{
                    visibility: scrollNav ? "visible" : "hidden",
                    opacity: scrollNav ? "1" : "0",
                    fontSize: scrollNav ? "1.1rem" : "0.5rem",
                  }}
                  className={styles.link}
                >
                  Nagrody
                </a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/products">
                <a
                  style={{
                    visibility: scrollNav ? "visible" : "hidden",
                    opacity: scrollNav ? "1" : "0",
                    fontSize: scrollNav ? "1.1rem" : "0.5rem",
                  }}
                  className={styles.link}
                >
                  Produkty
                </a>
              </Link>
            </li>
          </ul>
          <nav className={styles.navBtn}>
            {scrollNav && (
              <Link href="contact">
                <a className={styles.btnLink}>Kontakt</a>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
