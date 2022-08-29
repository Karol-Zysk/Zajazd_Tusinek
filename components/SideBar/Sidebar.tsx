import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./Sidebar.module.css";

import { SidebarProps } from "../../type";
import Link from "next/link";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <aside
      className={styles.container}
      style={{
        opacity: isOpen ? "1" : "0",
        top: isOpen ? "0" : "-100%",
      }}
    >
      <div className={styles.icon} onClick={toggle}>
        <FaTimes />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <Link href="/restaurant">
            <span className={styles.sidebar_link} onClick={toggle}>
              Restauracja
            </span>
          </Link>

          <Link href="/accomodation">
            <span className={styles.sidebar_link} onClick={toggle}>
              Noclegi
            </span>
          </Link>

          <Link href="/awards">
            <span className={styles.sidebar_link} onClick={toggle}>
              Nagrody
            </span>
          </Link>
          <Link href="/products">
            <span className={styles.sidebar_link} onClick={toggle}>
              Produkty
            </span>
          </Link>
          <Link href="/promo">
            <span className={styles.sidebar_link} onClick={toggle}>
              Okazje
            </span>
          </Link>
        </div>
        <div className={styles.btn_wrapper}>
          <Link href="/contact">
            <span className={styles.btn_link} onClick={toggle}>
              Kontakt
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
