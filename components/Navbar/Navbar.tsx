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
          background: scrollNav ? "#059b05d0" : "rgba(255,255,255,0.6)",
        }}
      >
        <div className={styles.container}>
          <Link href="intro">
            <a
              style={{
                fontSize: scrollNav ? "1.7rem" : "3.7rem",
                color: scrollNav ? "white" : "green ",
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
              <Link href="info">
                <a
                  className={styles.link}
                  style={{
                    opacity: scrollNav ? "1" : "0",
                    fontSize: scrollNav ? "1.1rem" : "0.5rem",
                  }}
                >
                  Informacje
                </a>
              </Link>
            </li>

            <li className={styles.item}>
              <Link href="info">
                <a
                  style={{
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
              <Link href="info">
                <a
                  style={{
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
