import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { BiMailSend, BiMap, BiPhoneCall } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <div className={styles.container_white}>
      <div className={styles.container}>
        <div className={styles.card_large}>
          <Image src={logo} width="300" height="90" alt="logo" />

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
            Kolonia, 12-114 Rozogi,
            <br /> Warmińsko-Mazurskie, Polska
          </div>
          <div className={styles.card_item}>
            tusinek@tusinek.com.pl
            <br /> 89 722 60 39
          </div>
        </div>
        <div className={styles.card_small}>
          <div className={styles.card_item}>
            <p className={styles.card_item_title}>Polub nas:</p>
            <a></a>
            <p
              onClick={() => {
                window.open("http://facebook.com/tusinek");
              }}
              className={styles.card_item_content}
            >
              facebook.com/tusinek
              <BsFacebook color="white" />
            </p>
          </div>
          <div className={styles.card_item}>
            © 2022 LAMA INTERACTIVE,
            <br />
            ALL RIGHTS RESERVED
          </div>
        </div>
        <div className={styles.card_small}>
          <div className={styles.card_item}>
            FOLLOW US:
            <br /> __FB __IN __BE __TW
          </div>
          <div className={styles.card_item}>
            © 2022 LAMA INTERACTIVE,
            <br />
            ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
