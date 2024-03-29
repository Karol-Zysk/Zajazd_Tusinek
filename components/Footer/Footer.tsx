import styles from "./Footer.module.css";
import Image from "next/image";
import { BiMailSend, BiMap, BiPhoneCall } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GiBriefcase, GiKnifeFork } from "react-icons/gi";
import logo from "../../public/images/svg/logo.svg";
import Link from "next/link";
import { ModalProps } from "../../type";

const Footer: React.FC<ModalProps> = ({ toggleModal }) => {
  return (
    <div className={styles.container_white}>
      <div className={styles.container}>
        <div className={styles.card_large}>
          <div className={styles.link_container}>
            <Link href="/contact">
              <span className={styles.link_text}>
                Napisz
                <BiMailSend className={styles.icon} />
              </span>
            </Link>

            <span onClick={toggleModal} className={styles.link_text}>
              Zadzwoń
              <BiPhoneCall className={styles.icon} />
            </span>
            <Link
              passHref
              href="https://www.google.com/maps/place/Zajazd+Tusinek+Grzegorz+Winiarek/@53.471598,20.2470555,8z/data=!4m8!3m7!1s0x471e06b5436e43bf:0xce73f7e7fec63c4f!5m2!4m1!1i2!8m2!3d53.4714961!4d21.3677216"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link_text}
              >
                Sprawdź drogę
                <BiMap className={styles.icon} />
              </a>
            </Link>
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
                window.open("http://facebook.com/zajazdtusinek");
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
