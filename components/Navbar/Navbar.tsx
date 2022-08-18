import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import LogoSvg from "./LogoSvg";

type NavbarProps = {
  toggle: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [color, setColor] = useState("green");

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
      setColor("white");
    } else {
      setScrollNav(false);
      setColor("green");
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
          backgroundColor: "transparent",
        }}
      >
        <div className={styles.container}>
          <Link href="/">
            <a>
              <LogoSvg color={color} />
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
            <FaBars color={color} />
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
