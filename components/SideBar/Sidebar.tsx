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
            <a className={styles.sidebar_link} onClick={toggle}>
              Restauracja
            </a>
          </Link>

          <Link href="/accomodation">
            <a className={styles.sidebar_link} onClick={toggle}>
              Noclegi
            </a>
          </Link>

          <Link href="/awards">
            <a className={styles.sidebar_link} onClick={toggle}>
              Nagrody
            </a>
          </Link>
          <Link href="/products">
            <a className={styles.sidebar_link} onClick={toggle}>
              Produkty
            </a>
          </Link>
        </div>
        <div className={styles.btn_wrapper}>
          <Link href="/contact">
            <a className={styles.sidebar_link} onClick={toggle}>
              Kontakt
            </a>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
