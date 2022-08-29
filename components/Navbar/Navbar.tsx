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
    const handleNavScroll = function () {
      if (prevScrollpos > currentScrollPos) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
      setPrevScrollpos(currentScrollPos);
    };
    window.addEventListener("scroll", handleNavScroll);
    return () => window.removeEventListener("scroll", handleNavScroll);
  });

  return (
    <nav
      className={styles.navbar}
      style={{
        top: !scrollNav ? "-5rem" : "0rem",
      }}
    >
      <div className={styles.container}>
        <Link href="/">
          <LogoSvg />
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
              <a className={styles.link}>Noclegi</a>
            </Link>
          </li>

          <li className={styles.item}>
            <Link href="/awards">
              <a className={styles.link}>Nagrody</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/restaurant">
              <a className={styles.link}>Restauracja</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/promo">
              <a className={styles.link}>Okazje</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/products">
              <a className={styles.link}>Produkty</a>
            </Link>
          </li>
        </ul>
        <nav className={styles.navBtn}>
          <Link href="/contact">
            <a className={styles.btnLink}>Kontakt</a>
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
