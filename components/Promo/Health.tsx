import React from "react";
import styles from "./Promo.module.css";

const Health = () => {
  return (
    <div>
      <div className={styles.margin_top_div}>
        <p className={styles.medium_text}>
          Zapraszamy Państwa na sześciodniowe wczasy zdrowotne.
        </p>
        <p className={styles.medium_text}>
          Oferujemy dietę sporządzoną na bazie produktów pochodzących z naszego
          gospodarstwa .
        </p>
        <p className={styles.medium_text}>
          Posiadamy własny
          <b className={styles.color}>
            {" "}
            nabiał, sery, jajka, warzywa
          </b> oraz <b className={styles.color}> mięso</b> z naszej hodowli
          drobiu.
        </p>
      </div>
      <div className={styles.margin_top_div}>
        <p className={styles.medium_text}>
          Dodatkowo istnieje możliwość skorzystania z kąpieli w wannie z
          hydromasażem ({" "}
          <span className={styles.color}>
            w <span className={styles.color}>kozim mleku</span>, w{" "}
            <span className={styles.color}>solance</span> oraz w ziołach
          </span>
          ), <span className={styles.color}>sauny, masażu relaksacyjnego</span>{" "}
          oraz <span className={styles.color}>leczniczego.</span>
        </p>
      </div>

      <p className={styles.text_margin_bottom}>
        Dzienny pobyt w naszym Hotelu kosztuje 250 zł/doba.
      </p>
      <p className={styles.medium_text}>Sześciodniowy pakiet obejmuje:</p>
      <p className={styles.medium_text}>
        - 3 posiłki : śniadanie, obiad i kolacja,
      </p>
      <p className={styles.medium_text}>- kąpiele w wannie z hydromasażem,</p>
      <p className={styles.medium_text}>- 2 wizyty w saunie,</p>
      <p className={styles.medium_text}>- zajęcia z instruktorem,</p>
      <p className={styles.text_margin_bottom}>
        Zapraszamy do zapisywania się na niżej podane terminy:
      </p>
      <p className={styles.medium_text}>- 26.09.22 - 01.10.22</p>
      <p className={styles.medium_text}>- 10.10.22 - 15.10.22</p>
      <p className={styles.medium_text}>- 24.10.22- 29.10.22</p>
      <div className={styles.margin_top_div}>
        <p className={styles.text_margin_bottom}>
          Zapisy możliwe są pod numerem telefonu 666-337-887 oraz poprzez email
          tusinek@tusinek.com.pl.
        </p>
      </div>
    </div>
  );
};

export default Health;
