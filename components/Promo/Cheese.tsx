import React from "react";
import styles from "./Promo.module.css";

const Cheese = () => {
  return (
    <div>
      <p className={styles.medium_text}>
        Zapraszamy Państwa do udziału w warsztatach serowarskich organizowanych
        wspólnie ze Stowarzyszeniem Serowarów Farmerskich i Zagrodowych.
      </p>

      <p className={styles.medium_text}>
        <b className={styles.color}>Miejsce organizacji</b> - Przetwórnia Mleka
        Krowiego i Koziego oraz Zajazd Tusinek w Rozogach.
      </p>

      <p className={styles.medium_text}>
        Celem warsztatów jest przedstawienie całego procesuprodukcji serów:
      </p>
      <p className={styles.small_text}>- kwasowo-podpuszczkowych,</p>
      <p className={styles.small_text}>- podpuszczkowo-dojrzewających,</p>
      <p className={styles.small_text}>- serów pleśniowych,</p>
      <p className={styles.small_text}>- produkcji jogurtu.</p>

      <p className={styles.bigger}>Posiadamy:</p>
      <p className={styles.medium_text}>
        - zaplecze niezbędne do przeprowadzenia warsztatów z produkcji serów,
      </p>
      <p className={styles.medium_text}>
        - osoby posiadające doświadczenie i umiejętności w produkcji mleka i
        jego przetworów,
      </p>
      <p className={styles.medium_text}>
        - ba className={styles.medium_text}zę noclegową z całodziennym
        wyżywieniem.
      </p>

      <p className={styles.bigger}>Planowane program zajęć:</p>

      <p className={styles.bigger}>Dzięń I</p>
      <p className={styles.medium_text}>
        - rejestracja i powitanie uczestników,
      </p>
      <p className={styles.medium_text}>
        - przygotowanie mleka na twaróg i sery,
      </p>
      <p className={styles.medium_text}>- część teoretyczna.</p>

      <p className={styles.bigger}>Dzień II</p>
      <p className={styles.medium_text}>- zajęcia teoretyczne,</p>
      <p className={styles.medium_text}>
        - zajęcia praktyczne w przetwórni mleka krowiego i koziego.
      </p>

      <p className={styles.bigger}>Dzień III</p>
      <p className={styles.medium_text}>- zajęcia praktyczne,</p>
      <p className={styles.medium_text}>
        - podsumowanie i wręczenie zaświadczeń.
      </p>

      <p className={styles.bigger}>Przykładowe tematy zajęć:</p>

      <p className={styles.medium_text}>- zaprawianie,</p>
      <p className={styles.medium_text}>- koagulacja,</p>
      <p className={styles.medium_text}>- obróbka skrzepu,</p>
      <p className={styles.medium_text}>- prasowanie,</p>
      <p className={styles.medium_text}>- dojrzewanie,</p>
      <p className={styles.medium_text}>- pielęgnacja na maź.</p>

      <p className={styles.medium_text}>
        Warsztaty odbędą się, jeśli zgłosi się minimum 20 osób. Minimalny koszt{" "}
        warsztatów wynosi 700zł/osoby.
      </p>

      <div className={styles.margin_top_div}>
        <p className={styles.text_margin_bottom}>
          Informacji udziela Grzegorz Winiarek
          <span className={styles.color}> 602-582-422</span>
        </p>
      </div>
    </div>
  );
};

export default Cheese;
