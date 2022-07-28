import styles from "./Footer.module.css";
import Image from "next/image";
import { BiMailSend, BiMap, BiPhoneCall } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GiBriefcase, GiKnifeFork } from "react-icons/gi";
import logo from "../../public/images/svg/logo.svg";

const Footer = () => {
  return (
    <div className={styles.container_white}>
      <div className={styles.container}>
        <div className={styles.card_large}>
          <div className={styles.link_container}>
            <span className={styles.link_text}>
              Napisz
              <BiMailSend className={styles.icon} />
            </span>
            <span className={styles.link_text}>
              Zadzwoń
              <BiPhoneCall className={styles.icon} />
            </span>
            <span className={styles.link_text}>
              Sprawdź drogę
              <BiMap className={styles.icon} />
            </span>
          </div>
        </div>
        <div className={styles.card_small}>
          <div className={styles.card_item}>
            <p className={styles.card_item_title}>Informacje:</p>
            <p className={styles.card_item_info}>Kolonia, 12-114 Rozogi,</p>
            <p className={styles.card_item_info}>
              {" "}
              Warmińsko-Mazurskie, Polska
            </p>
          </div>
          <div className={styles.card_item}>
            <p className={styles.card_item_info}>tusinek@tusinek.com.pl</p>
            <p className={styles.card_item_info}> 89 722 60 39</p>
          </div>
        </div>
        <div className={styles.card_small}>
          <div className={styles.card_item}>
            <p className={styles.card_item_title}>Polub nas:</p>

            <p
              onClick={() => {
                window.open("http://facebook.com/tusinek");
              }}
              className={styles.card_item_content}
            >
              Facebook
              <BsFacebook className={styles.icon_small} />
            </p>
            <p
              onClick={() => {
                window.open("http://instagram.com/zajazd_tusinek/");
              }}
              className={styles.card_item_content}
            >
              Instagram
              <BsInstagram className={styles.icon_small} />
            </p>
          </div>
          <div className={styles.card_item}>
            <p className={styles.card_item_title}>Pisali o nas:</p>

            <p
              onClick={() => {
                window.open(
                  "https://krytykakulinarna.com/zajazd-tusinek-rozogi/"
                );
              }}
              className={styles.card_item_content}
            >
              Krytyka kulinarna
              <GiKnifeFork className={styles.icon_small} />
            </p>
            <p
              onClick={() => {
                window.open(
                  "https://www.szalonewalizki.pl/zajazd-tusinek-wypoczynek-i-kuchnia-w-zgodzie-z-natura/"
                );
              }}
              className={styles.card_item_content}
            >
              Szalone walizki
              <GiBriefcase className={styles.icon_small} />
            </p>
          </div>
        </div>
        <div className={styles.card_small}>
          <div className={styles.card_item}>
            <Image src={logo} width="290" height="95" alt="logo" />
          </div>
          <div className={styles.card_item}>
            <p className={styles.card_item_info}>© 2022 TUSINEK,</p>
            <p className={styles.card_item_info}> WSZELKIE PRAWA ZASTRZEŻONE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
