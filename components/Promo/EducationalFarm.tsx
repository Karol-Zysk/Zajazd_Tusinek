import React from "react";
import { Link } from "react-scroll";
import styles from "./Promo.module.css";

const EducationalFarm = () => {
  return (
    <div>
      <nav className={styles.navigation_bar}>
        <p className={styles.nav_element}>
          <Link smooth offset={-50} to="milk">
            Od pastwiska do mleka
          </Link>
        </p>
        <p className={styles.nav_element}>
          <Link smooth offset={-50} to="garden">
            Ogród i zioła
          </Link>
        </p>
        <p className={styles.nav_element}>
          <Link smooth offset={-50} to="cheese">
            Mleko i ser
          </Link>
        </p>
        <p className={styles.nav_element}>
          <Link smooth offset={-50} to="carpenter">
            Ginące zawody – stolarz
          </Link>
        </p>
        <p className={styles.nav_element}>
          <Link smooth offset={-50} to="weaver">
            Ginące zawody – tkaczka
          </Link>
        </p>
        <p className={styles.nav_element}>
          <Link
            smooth
            offset={-50}
            to="
beekeeper"
          >
            Ginące zawody – pszczelarz
          </Link>
        </p>
      </nav>
      <div className={styles.workshop_wrapper}>
        <p className={styles.medium_text}>
          W przygotowaniu kolejne tematy zajęć.
        </p>

        <p className={styles.medium_text}>
          Przy łączeniu kilku zajęć – <strong className={styles.larger_color}>Cena</strong> do uzgodnienia.
        </p>

        <p className={styles.medium_text}>
          Istnieje możliwość połączenia zajęć wraz z zakwaterowaniem i posiłkami
          – <strong className={styles.larger_color}>Cena</strong> do uzgodnienia.
        </p>

        <p className={styles.medium_text}>
          Zajęcia kierowane są do przedszkoli i szkół. Liczebność uczestników 15
          - 25/30 osób.
        </p>
      </div>

      <h2>Poniżej przykładowe programy.</h2>
      <div className={styles.workshop_wrapper} id="milk">
        <p className={styles.larger}>
          Temat / tytuł zajęć:{" "}
          <strong className={styles.larger_color}>
            {" "}
            Od pastwiska do mleka
          </strong>
        </p>

        <p className={styles.small_text}>Czas trwania zajęć: 2-2,5 godziny</p>

        <p className={styles.secondary_text}>
          <b>Zakres tematyczny</b>: Poznanie sposobu pozyskiwania mleka od kóz i krów
        </p>

        <p className={styles.text_margin_bottom}>
          Harmonogram/przebieg zajęć:{" "}
        </p>
        <p className={styles.secondary_text}>
          Spacer po gospodarstwie połączony z prezentacją zwierząt (konie,
          krowy, kozy).
        </p>

        <p className={styles.secondary_text}>Udział w udoju krów lub kóz.</p>

        <p className={styles.secondary_text}>Pogadanka na temat pozyskiwania mleka i opieki nad zwierzętami.</p>

        <p className={styles.secondary_text}>Pomoce dydaktyczne: Urządzenia do udoju i produkcji serów.</p>

        <p className={styles.price}><strong className={styles.larger_color}>Cena</strong>: 10zł/uczestnika</p>
      </div>

      <div className={styles.workshop_wrapper} id="garden">
        <p className={styles.larger}>
          Temat / tytuł zajęć:{" "}
          <strong className={styles.larger_color}> Ogród i zioła</strong>
        </p>

        <p className={styles.small_text}>Czas trwania zajęć: 2,5-3 godzin</p>

        <p className={styles.secondary_text}>
          <b>Zakres tematyczny</b>: Podstawowe informacje na temat pracy w ogrodzie
        </p>

        <p className={styles.text_margin_bottom}>
          Harmonogram/przebieg zajęć:{" "}
        </p>
        <p className={styles.secondary_text}>Pogadanka o tradycyjnej uprawie warzyw i ziół,</p>

        <p className={styles.secondary_text}>Zajęcia w ogrodzie - jak rosną warzywa i zioła,</p>

        <p className={styles.secondary_text}>Pogadanka o zastosowaniu warzyw i ziół,</p>

        <p className={styles.secondary_text}>Zajęcia - jak smakują oraz pachną warzywa i zioła,</p>

        <p className={styles.secondary_text}>Pomoce dydaktyczne: Ogród warzywny i narzędzia pracy ogrodnika</p>

        <p className={styles.secondary_text}>
          Dodatkowe uwagi: Każde dziecko uczestniczące w zajęciach dostaje
          bukiet warzyw.
        </p>

        <p className={styles.price}><strong className={styles.larger_color}>Cena</strong>: 10zł/uczestnika</p>
      </div>

      <div className={styles.workshop_wrapper} id="cheese">
        <p className={styles.larger}>
          Temat / tytuł zajęć:{" "}
          <strong className={styles.larger_color}> Mleko i ser</strong>
        </p>

        <p className={styles.small_text}>Czas trwania pokazu: ok. 2 godzin</p>

        <p className={styles.secondary_text}>
          <b>Zakres tematyczny</b>: Podstawowe informacje na temat mleka i jego
          przetworów
        </p>

        <p className={styles.text_margin_bottom}>
          Harmonogram/przebieg zajęć:{" "}
        </p>

        <p className={styles.secondary_text}>Pogawędka o tym jak powstaje mleko,</p>

        <p className={styles.secondary_text}>Poznanie pastwisk i zwierząt,</p>

        <p className={styles.secondary_text}>Udział w udoju kóz lub krów,</p>

        <p className={styles.secondary_text}>Poznajemy smak mleka,</p>

        <p className={styles.secondary_text}>Poznajemy smak sera,</p>

        <p className={styles.secondary_text}>Pomoce dydaktyczne: Urządzenia do udoju i produkcji serów</p>

        <p className={styles.secondary_text}>
          Dodatkowe uwagi: Każde dziecko uczestniczące w zajęciach dostaje
          własnoręcznie zrobiony ser.
        </p>

        <p className={styles.price}><strong className={styles.larger_color}>Cena</strong>: 20zł/uczestnika</p>
      </div>

      <div className={styles.workshop_wrapper}>
        <p className={styles.larger}>
          Temat / tytuł zajęć:
          <strong className={styles.larger_color}>
            {" "}
            Warsztaty wikliniarskie
          </strong>
        </p>

        <p className={styles.small_text}>Czas trwania zajęć: 2.5-3 godz.</p>

        <p className={styles.secondary_text}>
          <b>Zakres tematyczny</b>: pokaz plecenia koszyków z wikliny, każdy uczestnik
          będzie miał możliwość samodzielnej próby plecenia.
        </p>

        <p className={styles.price}><strong className={styles.larger_color}>Cena</strong>: 35 zł/uczestnika</p>

        <p className={styles.larger}>
          Temat / tytuł zajęć:
          <strong className={styles.larger_color}> Warsztaty kulinarne</strong>
        </p>

        <p className={styles.small_text}>Czas trwania zajęć: ok. 2 godz.</p>

        <p className={styles.secondary_text}>
          <b>Zakres tematyczny</b>: warsztaty polegające na gotowaniu pod okiem
          Szefowej kuchni z pogadanką dotyczącą składników i receptur wraz z
          degustacją przygotowanych dań. Jedna potrawa do wyboru: pierogi z
          serem, placuszki chlebowe lub oponki serowe.
        </p>

        <p className={styles.price}><strong className={styles.larger_color}>Cena</strong>: 30 zł/ uczestnika</p>
      </div>

      <div className={styles.workshop_wrapper} id="carpenter">
        <p className={styles.larger}>
          Temat / tytuł zajęć:
          <strong className={styles.larger_color}>
            {" "}
            Ginące zawody - stolarz
          </strong>
        </p>

        <p className={styles.small_text}>Czas trwania zajęć: 2-2,5 godziny</p>

        <p className={styles.secondary_text}>
          <b>Zakres tematyczny</b>: Podstawy pracy w stolarni z wykorzystaniem
          tradycyjnych narzędzi
        </p>

        <p className={styles.text_margin_bottom}>
          Harmonogram/przebieg zajęć:{" "}
        </p>

        <p className={styles.secondary_text}>
          Prezentacja podstawowych narzędzi stolarskich i objaśnia ich
          zastosowania.
        </p>

        <p className={styles.secondary_text}>Zapoznanie dzieci z regułami panującymi w stolarni.</p>

        <p className={styles.secondary_text}>
          Budowa domku dla ptaków, karmnik lub stołeczek z wcześniej
          przygotowanych elementów.
        </p>

        <p className={styles.secondary_text}>Dzieci na czas zajęć dostają fartuchy ochronne.</p>

        <p className={styles.secondary_text}>Pomoce dydaktyczne: Narzędzia stolarskie</p>

        <p className={styles.secondary_text}>
          Dodatkowe uwagi: Każde dziecko uczestniczące w zajęciach dostaje
          własnoręcznie zrobiony produkt.
        </p>

        <p className={styles.price}><strong className={styles.larger_color}>Cena</strong>: 20zł/uczestnika</p>
      </div>

      <div className={styles.workshop_wrapper} id="weaver">
        <p className={styles.larger}>
          Temat / tytuł zajęć:
          <strong className={styles.larger_color}>
            {" "}
            Ginące zawody - tkaczka
          </strong>
        </p>

        <p className={styles.small_text}>Czas trwania zajęć: 2-2,5 godziny</p>

        <p className={styles.secondary_text}>
          <b>Zakres tematyczny</b>: Zapoznanie z techniką i zasadami tkania chodników
          regionalnych
        </p>

        <p className={styles.text_margin_bottom}>
          Harmonogram/przebieg zajęć:{" "}
        </p>

        <p className={styles.secondary_text}>Prezentacja warsztatu tkackiego,</p>

        <p className={styles.secondary_text}>Prezentacja przędzenia na kołowrotku,</p>

        <p className={styles.secondary_text}>Ustalenie reguł zajęć oraz środków ostrożności,</p>

        <p className={styles.secondary_text}>Pokaz i nauka tkania,</p>

        <p className={styles.secondary_text}>Pomoce dydaktyczne: Warsztat tkacki</p>

        <p className={styles.price}><strong className={styles.larger_color}>Cena</strong>: 15zł/uczestnika</p>
      </div>

      <div
        className={styles.workshop_wrapper}
        id="
beekeeper"
      >
        <p className={styles.larger}>
          Temat / tytuł zajęć:
          <strong className={styles.larger_color}>
            {" "}
            Ginące zawody - Pszczelarz
          </strong>
        </p>

        <p className={styles.secondary_text}>Warsztaty tylko w sezonie letnim.</p>

        <p className={styles.small_text}>Czas trwania zajęć: 2-2,5 godzin</p>

        <p className={styles.secondary_text}>
          <b>Zakres tematyczny</b>: Podstawowe informacje na temat pracy pszczelarza
        </p>

        <p className={styles.text_margin_bottom}>
          Harmonogram/przebieg zajęć:{" "}
        </p>

        <p className={styles.secondary_text}>Prezentacja ubioru i narzędzi pszczelarskich,</p>

        <p className={styles.secondary_text}>Prezentacja budowy ula,</p>

        <p className={styles.secondary_text}>Podstawowe informacje o miodzie i wosku,</p>

        <p className={styles.secondary_text}>Zwiedzanie pasieki,</p>

        <p className={styles.secondary_text}>Pomoce dydaktyczne: Urządzenia i narzędzia pszczelarskie</p>

        <p className={styles.secondary_text}>Pomoce dydaktyczne: Urządzenia i narzędzia pszczelarskie</p>

        <p className={styles.price}><strong className={styles.larger_color}>Cena</strong>: 20zł/uczestnika</p>
      </div>
    </div>
  );
};

export default EducationalFarm;
