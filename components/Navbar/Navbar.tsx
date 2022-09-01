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
  const [currentScrollPos, setCurrentScrollPos] = useState(0);

  const [scrollNav, setScrollNav] = useState(true);

  useEffect(() => {
    const handleNavScroll = function () {
      setCurrentScrollPos(window.pageYOffset);
      if (prevScrollpos > currentScrollPos) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
      setPrevScrollpos(currentScrollPos);
    };
    window.addEventListener("scroll", handleNavScroll);
    return () => window.removeEventListener("scroll", handleNavScroll);
  }, [prevScrollpos, currentScrollPos]);

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
          <span
            style={{
              transform: "scale(1.2)",
              color: "green ",
            }}
            className={styles.logo_link}
          >
            Zajazd Tusinek
          </span>
        </Link>

        <div className={styles.mobile_icon} onClick={toggle}>
          <FaBars color="darkgreen" />
        </div>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link href="/accomodation">
              <span className={styles.link}>Noclegi</span>
            </Link>
          </li>

          <li className={styles.item}>
            <Link href="/awards">
              <span className={styles.link}>Nagrody</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/restaurant">
              <span className={styles.link}>Restauracja</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/promo">
              <span className={styles.link}>Okazje</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/products">
              <span className={styles.link}>Produkty</span>
            </Link>
          </li>
        </ul>
        <nav className={styles.navBtn}>
          <Link href="/contact">
            <span className={styles.btnLink}>Kontakt</span>
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
