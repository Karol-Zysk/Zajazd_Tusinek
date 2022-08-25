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

      <p>Posiadamy:</p>
      <p>
        - zaplecze niezbędne do przeprowadzenia warsztatów z produkcji serów,
      </p>
      <p>
        - osoby posiadające doświadczenie i umiejętności w produkcji mleka i
        jego przetworów,
      </p>
      <p>- bazę noclegową z całodziennym wyżywieniem.</p>

      <p>Planowane program zajęć:</p>

      <p>Dzięń I</p>
      <p>- rejestracja i powitanie uczestników,</p>
      <p>- przygotowanie mleka na twaróg i sery,</p>
      <p>- część teoretyczna.</p>

      <p>Dzień II</p>
      <p>- zajęcia teoretyczne,</p>
      <p>- zajęcia praktyczne w przetwórni mleka krowiego i koziego.</p>

      <p>Dzień III</p>
      <p>- zajęcia praktyczne,</p>
      <p>- podsumowanie i wręczenie zaświadczeń.</p>

      <p>Przykładowe tematy zajęć:</p>

      <p>- zaprawianie,</p>
      <p>- koagulacja,</p>
      <p>- obróbka skrzepu,</p>
      <p>- prasowanie,</p>
      <p>- dojrzewanie,</p>
      <p>- pielęgnacja na maź.</p>

      <p>
        Warsztaty odbędą się, jeśli zgłosi się minimum 20 osób. Minimalny koszt{" "}
        <p></p>
        warsztatów wynosi 700zł/osoby.
      </p>

      <p>Informacji udziela Grzegorz Winiarek 602-582-422</p>
    </div>
  );
};

export default Cheese;
