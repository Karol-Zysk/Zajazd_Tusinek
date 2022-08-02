import introImage1 from "/public/images/intro/introImage1.jpg";
import introImage2 from "/public/images/intro/introImage2.jpg";
import introImage3 from "/public/images/intro/introImage3.jpg";
import introImage4 from "/public/images/intro/introImage4.jpg";
import { TbSoup } from "react-icons/tb";
import { GiHotMeal } from "react-icons/gi";
import { IoRestaurantSharp } from "react-icons/io5";

export const data = [
  {
    id: 1,
    name: "noclegi",
    title: "Noclegi",
    desc: "Kameralną i domową atmosferę tworzy oryginalna stylizacja zajazdu oraz 17 pokoi .  Pokoje znajdują się na poddaszu budynku hotelowego. W dolnej części znajdują się trzy duże sale w których można organizować  imprezy okolicznościowe czy szkolenia.",
    video: "nocleg.mp4",

    longDesc: "Zajazd w malowniczym miejscu i regionalnym klimacie",
    images: [
      {
        id: 1,
        url: "introImage1.jpg",
      },
      {
        id: 2,
        url: "introImage1.jpg",
      },
      {
        id: 3,
        url: "introImage2.jpg",
      },
      {
        id: 4,
        url: "introImage3.jpg",
      },
      {
        id: 5,
        url: "introImage4.jpg",
      },
      {
        id: 6,
        url: "introImage1.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "smaki",
    title: "Tusinkowe Smaki",
    desc: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.",

    video: "smaki.mp4",
    longDesc:
      "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library. Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.",
    images: [
      {
        id: 1,
        url: introImage1,
      },
      {
        id: 2,
        url: introImage1,
      },
      {
        id: 3,
        url: introImage2,
      },
      {
        id: 4,
        url: introImage3,
      },
      {
        id: 5,
        url: introImage4,
      },
      {
        id: 6,
        url: introImage1,
      },
    ],
  },
  {
    id: 3,
    name: "produkcja",
    title: "Produkcja Serów",
    desc: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.",

    video: "sery.mp4",
    longDesc:
      "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library. Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.",
    images: [
      {
        id: 1,
        url: introImage1,
      },
      {
        id: 2,
        url: introImage1,
      },
      {
        id: 3,
        url: introImage2,
      },
      {
        id: 4,
        url: introImage3,
      },
      {
        id: 5,
        url: introImage4,
      },
      {
        id: 6,
        url: introImage1,
      },
    ],
  },
  {
    id: 4,
    name: "położenie",
    title: "Położenie",
    desc: "Zajazd Tusinek  położony przy wjeździe na Mazury . W głębi alei lipowej, za restauracją znajduje się część hotelowa oraz gospodarstwo.",
    video: "place.mp4",
    longDesc:
      "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library. Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.",
    images: [
      {
        id: 1,
        url: introImage1,
      },
      {
        id: 2,
        url: introImage1,
      },
      {
        id: 3,
        url: introImage2,
      },
      {
        id: 4,
        url: introImage3,
      },
      {
        id: 5,
        url: introImage4,
      },
      {
        id: 6,
        url: introImage1,
      },
    ],
  },
];

export const allProducts = [
  {
    id: 1,
    name: "Sery",
    title: "Oferta Serów",
    opis: "Sery Farmerskie z Przetwórni Tusinek",

    dlugiOpis: "Krowie i Kozie z naszej hodowli",
    cennik: [
      {
        id: 1,
        name: "Ser krowi Grąd dojrzały",
        price: "80",
        qty: "zł/kg",
      },
      {
        id: 2,
        name: "Ser krowi Grąd świeży",
        price: "80",
        qty: "zł/kg",
      },
      {
        id: 3,
        name: "Ser krowi Mały Tusinek ",
        price: "50",
        qty: "zł/kg",
      },
      {
        id: 3,
        name: "Ser krowi  Klinik",
        price: "38",
        qty: "zł/kg",
      },
      {
        id: 4,
        name: "Twaróg krowi",
        price: "30",
        qty: "zł/kg",
      },
      {
        id: 5,
        name: "Ser kozi Dziadek",
        price: "115",
        qty: "zł/kg",
      },
      {
        id: 6,
        name: "Ser kozi Koszałek dojrzały",
        price: "98",
        qty: "zł/kg",
      },

      {
        id: 7,
        name: "Ser kozi Opałek",
        price: "95",
        qty: "zł/kg",
      },
      {
        id: 8,
        name: "Ser kozi solankowy",
        price: "90",
        qty: "zł/kg",
      },
      {
        id: 9,
        name: "Ser kozi  ciaciorikotta",
        price: "80",
        qty: "zł/kg",
      },
      {
        id: 10,
        name: "Twaróg kozi",
        price: "18",
        qty: "zł/kg",
      },
    ],
    images: [
      {
        id: 1,
        url: "ser3.jpg",
      },
      {
        id: 2,
        url: "ser2.jpg",
      },
      {
        id: 3,
        url: "miod.jpg",
      },
      {
        id: 4,
        url: "inne2.jpg",
      },
      {
        id: 5,
        url: "warzywa.jpg",
      },
      {
        id: 6,
        url: "inne.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Wędliny",
    title: "Oferta Wędlin",
    opis: "Kurpiowskie Wędliny Tradycyjne",

    dlugiOpis: "Takiej jeszcze żech ni jod",
    cennik: [
      {
        id: 1,
        name: "Boczek wędzony",
        price: "45",
        qty: "zł/kg",
      },
      {
        id: 2,
        name: "Szynka wędzona",
        price: "59",
        qty: "zł/kg",
      },
      {
        id: 3,
        name: "Szynka wędzona z tłuszczem",
        price: "59",
        qty: "zł/kg",
      },
      {
        id: 4,
        name: "Polędwica wędzona",
        qty: "zł/kg",
      },
      {
        id: 5,
        name: "Baleron wędzony",
        price: "58",
        qty: "zł/kg",
      },
      {
        id: 6,
        name: "Kiełbasa swojska",
        price: "45",
        qty: "zł/kg",
      },
      {
        id: 7,
        name: "Kiełbasa czosnkowa ",
        price: "57",
        qty: "zł/kg",
      },
      {
        id: 8,
        name: "Kabanosy z gęsi",
        price: "125",
        qty: "zł/kg",
      },
      {
        id: 9,
        name: "Kiełbasa z gęsi",
        price: "110",
        qty: "zł/kg",
      },
      {
        id: 10,
        name: "Półgęsek",
        price: "145",
        qty: "zł",
      },
      {
        id: 11,
        name: "Kaszanka",
        price: "258",
        qty: "zł/kg",
      },
      {
        id: 11,
        name: "Salceson ",
        price: "38",
        qty: "zł/kg",
      },
      {
        id: 11,
        name: "Pasztet",
        price: "75",
        qty: "zł/kg",
      },
    ],
    images: [
      {
        id: 1,
        url: "ser3.jpg",
      },
      {
        id: 2,
        url: "ser2.jpg",
      },
      {
        id: 3,
        url: "inne.jpg",
      },
      {
        id: 4,
        url: "inne2.jpg",
      },
      {
        id: 5,
        url: "warzywa.jpg",
      },
      {
        id: 6,
        url: "inne.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Wyroby",
    title: "Wyroby własne",
    opis: "Coś smacznego dla każdego",

    dlugiOpis: "Kaczka, kopytka, smalec i inne",
    cennik: [
      {
        id: 1,
        name: "Kaczka",
        price: "85",
        qty: "zł/kg",
      },
      {
        id: 2,
        name: "Mielony",
        price: "28",
        qty: "zł/kg",
      },
      {
        id: 3,
        name: "Pyzy z mięsem",
        price: "30",
        qty: "zł/ opak",
      },
      {
        id: 4,
        name: "Pierogi leniwe",
        price: "25",
        qty: " zł/ opak",
      },
      {
        id: 5,
        name: "Kopytka",
        price: "15",
        qty: " zł/ opak",
      },
      {
        id: 6,
        name: "Kluski kładzione",
        price: "45",
        qty: " zł/kg",
      },
      {
        id: 7,
        name: "Naleśniki z twarogiem na słodko",
        price: "25",
        qty: " zł/ opak",
      },
      {
        id: 8,
        name: "Krokiety z farszem grzybowym",
        price: "25",
        qty: " zł/ opak",
      },
      {
        id: 9,
        name: "Słonina smakowa",
        price: "36",
        qty: " zł/ kg",
      },
      {
        id: 10,
        name: "Smalec ",
        price: "19",
        qty: " zł/ opak (0,5 kg)",
      },
      {
        id: 11,
        name: "Bigos",
        price: "35",
        qty: " zł/ słoik (1,20kg)",
      },
    ],
    images: [
      {
        id: 1,
        url: "ser3.jpg",
      },
      {
        id: 2,
        url: "ser2.jpg",
      },
      {
        id: 3,
        url: "miod.jpg",
      },
      {
        id: 4,
        url: "inne2.jpg",
      },
      {
        id: 5,
        url: "warzywa.jpg",
      },
      {
        id: 6,
        url: "inne.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Warzywa",
    title: "Nasze Warzywa",
    opis: "Warzywa z uprawy naturalnej Gospodarstwo Tusinek",

    dlugiOpis:
      "Przepyszne warzywa z ziemi kurpiowskiej w tradycyjnym kurpiowskim  wydaniu ",
    cennik: [
      {
        id: 1,
        name: "Kapusta kiszona",
      },
      {
        id: 2,
        name: "Ogórki kiszone",
      },
      {
        id: 3,
        name: "Mieszanka Warzyw do zup",
      },
      {
        id: 4,
        name: "Buraki ugotowane",
      },
    ],
    images: [
      {
        id: 1,
        url: "ser3.jpg",
      },
      {
        id: 2,
        url: "ser2.jpg",
      },
      {
        id: 3,
        url: "miod.jpg",
      },
      {
        id: 4,
        url: "inne2.jpg",
      },
      {
        id: 5,
        url: "warzywa.jpg",
      },
      {
        id: 6,
        url: "inne.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Miody",
    title: "Miody i inne",
    opis: "Miody, żurawina, gryby, ryby",

    dlugiOpis:
      "Przepyszne warzywa z ziemi kurpiowskiej w tradycyjnym kurpiowskim  wydaniu ",
    cennik: [
      {
        id: 1,
        name: "Miody małe 330g",
        info: "akacjowy, chaber-blawatek, faceliowy, gryczany, leśny, nawłociowy, rzepakowy, wielokwiatowy",
      },
      {
        id: 2,
        name: "Miody duże 1300g",
        info: "akacjowy, faceliowy, gryczany, leśny, nawlociowy, rzepakowy, wielokwiatowy",
      },
      {
        id: 3,
        name: "Żurawina",
      },
      {
        id: 4,
        name: "Grzyby",
      },
      {
        id: 5,
        name: "Ryby",
      },
      {
        id: 6,
        name: "Ciasto drożdżowe",
      },
      {
        id: 7,
        name: "Sernik",
      },
      {
        id: 8,
        name: "Wina Macedońskie",
      },
    ],
    images: [
      {
        id: 1,
        url: "ser3.jpg",
      },
      {
        id: 2,
        url: "ser2.jpg",
      },
      {
        id: 3,
        url: "miod.jpg",
      },
      {
        id: 4,
        url: "inne2.jpg",
      },
      {
        id: 5,
        url: "warzywa.jpg",
      },
      {
        id: 6,
        url: "inne.jpg",
      },
    ],
  },
];

export const users = [
  {
    id: 1,
    logo: "booking.jpg",
    avatar: "user1.jpeg",
    note: "9.5",
    comment:
      "Bardzo ładnie urządzony teren. Mnóstwo kwiatów. Zadbana trawa. Duży plac zabaw dla dzieci. Fajne miejsca na gotowanie pod dachem w piecu i na ogniska (chociaż nie korzystaliśmy). Nawet dosyć kiepsko udokumentowane zdjęciami na Booking - a jest co fotografować.",
    name: "Anna Domagała",
    date: "10 Czerwiec 2021 ",
  },
  {
    id: 2,
    logo: "google.png",
    avatar: "user2.jpeg",
    note: "8.5",
    comment:
      "Dziękujemy  za cudowny  pobyt,   bardzo pomocny  i mily właściciel,  polecamy serdecznie,  bardzo smaczna  kuchnia, na pewno wrócimy. Dziękujemy 😍",
    name: "Bohdan  Smoleń",
    date: "14 Listopad 2021",
  },
  {
    id: 3,
    logo: "booking.jpg",
    avatar: "user3.jpeg",
    note: "9.0",
    comment:
      "Pyszne jedzenie, fajni gospodarze, wspaniałe zwierzęta, cudownie można odpocząć od zgiełku wielkiego mista",
    date: "15 Maj 2022",
  },
  {
    id: 4,
    logo: "booking.jpg",
    avatar: "user3.jpeg",
    note: "9.0",
    comment:
      "Wyjątkowe miejsce, gdzie można odpocząć, uciec myślami od pędzącego świata. Przepyszne jedzenie (śniadanie i obiad w restauracji obok)! Bardzo miły Pan Właściciel. Czystość i przestrzeń. Miejsce, w którym wyczuwalna jest przyjazna atmosfera i sielski spokój.",
    name: "James Garry",
    date: "15 Maj 2022",
  },
  {
    id: 5,
    logo: "booking.jpg",
    avatar: "user2.jpeg",
    note: "9.0",
    comment:
      "Bardzo ładnie urządzony teren. Mnóstwo kwiatów. Zadbana trawa. Duży plac zabaw dla dzieci. Fajne miejsca na gotowanie pod dachem w piecu i na ogniska (chociaż nie korzystaliśmy). Nawet dosyć kiepsko udokumentowane zdjęciami na Booking - a jest co fotografować.W pokoju porządnie szerokie łóżko 2+1 bez kłopotu.",
    name: "Magdalena",
    date: "18 Czerwiec 2022",
  },
  {
    id: 6,
    logo: "booking.jpg",
    avatar: "user1.jpeg",
    note: "9.0",
    comment:
      "„Piękne malownicze miejsce z klimatem. Wyjatkowe śniadanie na świeżych produktach. Można było najejść się do syta.”",
    name: "Paweł",
    date: "15 Maj 2022",
  },
];

export const IntroData = [
  { img: introImage1, position: { left: "5%", top: " 5%" } },
  {
    img: introImage2,

    position: { left: "50%", top: "10% " },
  },
  { img: introImage3, position: { left: "25%", top: " 45%" } },
];

export const noclegi = [
  { nr: "1", info: "1 łóżko podwójne + 2 pojedyncze" },

  { nr: "2", info: "1 łóżko podwójne + kanapa dla 2 osób" },

  { nr: "3", info: "2 łóżka pojedyncze + kanapa dla 2 osób" },

  { nr: "4", info: "1 łóżka pojedyncza + kanapa 1 osobowa" },

  { nr: "5", info: " 1 łóżka pojedyncza + kanapa 1 osobowa" },

  { nr: "6", info: "3 łóżka pojedyncze" },

  { nr: "7", info: "1 łóżko podwójne" },

  { nr: "8", info: "2 łóżka pojedyncze" },

  { nr: "9", info: " 2 łóżka pojedyncze + rozkładana kanapa" },

  { nr: "10", info: "2 łóżka pojedyncze + łóżko dziecięce" },

  { nr: "11", info: "2 łóżka pojedyncze" },

  { nr: "12", info: "2 łóżka pojedyncze" },

  { nr: "13", info: "1 łóżko podwójne + rozkładana kanapa" },

  { nr: "14", info: "3 łóżka pojedyncze" },

  { nr: "15", info: "2 łóżka pojedyncze" },

  { nr: "16", info: "2 łóżka pojedyncze" },

  { nr: "17", info: "1 łóżko podwójne + 1 łóżko pojedyncze" },
  {
    nr: "18",
    info: ` studio/"apartament pod lasem" - 2 sypialnie z 2 pojedynczymi łóżkami w każdej z sypialni, salon z aneksem kuchennym
 (Rezerwacja - min. 3 noclegi)`,
  },
];

export const accomodationImages = [
  {
    id: 1,
    url: "nocleg9.jpg",
  },
  {
    id: 2,
    url: "nocleg1.jpg",
  },
  {
    id: 3,
    url: "nocleg2.jpg",
  },
  {
    id: 4,
    url: "nocleg3.jpg",
  },
  {
    id: 5,
    url: "nocleg4.jpg",
  },
  {
    id: 6,
    url: "nocleg5.jpg",
  },
  {
    id: 7,
    url: "nocleg6.jpg",
  },
  {
    id: 8,
    url: "nocleg7.jpg",
  },
  {
    id: 9,
    url: "nocleg8.jpg",
  },
];

export const nagrody = [
  { id: 1, rok: 2002, nagroda: `„Cztery widelce” – dziennik Rzeczpospolita,` },

  { id: 2, rok: 2002, nagroda: `Statuetka „Jurand”` },

  {
    id: 3,
    rok: 2005,
    nagroda: `„Top Warmii i Mazur” w kategorii Firma Rodzinna`,
  },

  { id: 4, rok: 2005, nagroda: `Godło „Zielone Płuca Polski”` },
  { id: 5, rok: 2006, nagroda: "Dziedzictwo Kulinarne Warmii Mazur i Powiśla" },

  {
    id: 6,
    rok: 2007,
    nagroda: `Restauracja wyróżniona przez Piotra Bikonta i Roberta Makłowicza - Newsweek Polska`,
  },

  {
    id: 7,
    rok: 2007,
    nagroda: ` „Najlepszy Produkt i Usługa Warmii i Mazur” w kategorii Usługa Gastronomiczna`,
  },

  {
    id: 8,
    rok: 2008,
    nagroda:
      "Kulinarne Dziedzictwo Smaki Regionu „Perła 2008” Produkt Regionalny",
  },

  {
    id: 9,
    rok: 2008,
    nagroda:
      "Tygodnik Polityka (trzy gwiazdki) za jakość potraw i kulturę obsługi",
  },

  {
    id: 10,
    rok: 2009,
    nagroda: `"Najlepszy z Najlepszych" przyznawane przez Marszałka Województwa Warmińsko-Mazurskiego`,
  },

  {
    id: 11,
    rok: 2014,
    nagroda: `Firma dostaje certyfikat "Produkt Warmii i Mazur" w kategorii usługa`,
  },

  {
    id: 12,
    rok: 2015,
    nagroda: `Wytwarzany w naszej przetwórni mleka krowiego i koziego ser kozi "Dziadek" zostaje laureatem IV Festiwalu "Czas na ser" w Lidzbarku Warmińskim, a ser krowi dojrzewający "Grąd" otrzymuje wyróżnienie.`,
  },

  {
    id: 13,
    rok: 2015,
    nagroda: `przystąpienie do sieci "Zagród Edukacyjnych"`,
  },

  {
    id: 14,
    rok: 2015,
    nagroda:
      "laureat konkursu Agro-Eko-Turystycznego Zielone Lato w kategorii Zagrody Edukacyjne Warmii i Mazur.",
  },

  {
    id: 15,
    rok: 2016,
    nagroda: "wpis do przewodnika kulinarnego Gault & Millau",
  },

  {
    id: 16,
    rok: 2017,
    nagroda: `laureat konkursu "Sposób na sukces" w kategorii "Firma rodzinna"`,
  },

  {
    id: 17,
    rok: 2020,
    nagroda: `laureat konkursu AgroLiga 2020 w kategorii "FIRMA".`,
  },
];

export const awardIcons = [
  {
    id: 1,
    url: "nagroda9.png",
  },
  {
    id: 2,
    url: "nagroda1.png",
  },
  {
    id: 3,
    url: "nagroda2.png",
  },
  {
    id: 4,
    url: "nagroda3.png",
  },
  {
    id: 5,
    url: "nagroda4.png",
  },
  {
    id: 6,
    url: "nagroda5.png",
  },
  {
    id: 7,
    url: "nagroda6.png",
  },
  {
    id: 8,
    url: "nagroda7.png",
  },
  {
    id: 9,
    url: "nagroda8.png",
  },
];

export const restauracja = [
  {
    id: 1,
    name: "Restauracja",
    photos: [
      {
        id: 1,
        img: "menu.jpg",
        title: "Sala Kominkowa",
        subtitle: "W Sali kominkowej można posiedzieć",
        comment:
          "Coś o miejscu, które pokazuje zdjęcie, lub o piecu lub ile ludzi mieści czy co się w tym miejscu odbywa",
        text: "Zapraszamy",
      },
      {
        id: 2,
        img: "sala.jpg",
        title: "Sala Inna",
        subtitle:
          "W Sali kominkowej można posiedzieć, odpocząć a tu można zjeść",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        text: "Zapraszamy",
      },
      {
        id: 3,
        img: "bankiety.jpg",
        title: "Sala Bankietowa",
        subtitle: "Może tu być 70 osób",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji bankiet",
        text: "Zapraszamy",
      },
      {
        id: 4,
        img: "piec.jpg",
        title: "Sala Bankietowa",
        subtitle: "Może tu być 70 osób",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji bankiet",
        text: "Zapraszamy",
      },
      {
        id: 5,
        img: "widok.jpg",
        title: "Sala Bankietowa",
        subtitle: "Może tu być 70 osób",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji bankiet",
        text: "Zapraszamy",
      },
      {
        id: 6,
        img: "piec2.jpg",
        title: "Sala Bankietowa",
        subtitle: "Może tu być 70 osób",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji ",
        text: "Zapraszamy",
      },
    ],
  },
  {
    id: 2,
    name: "Przekąski",
    photos: [
      {
        id: 1,
        img: "smalec.jpg",
        title: "Chleb ze smalcem",
        subtitle: "Naturalny smalec na prawdziwym chlebie, mniam mniam",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "15zł",
      },
      {
        id: 2,
        img: "placek.png",
        title: "Placek Drożdżowy",
        subtitle: "Pyszny Tradycyjny placek",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "15zł",
      },
      {
        id: 3,
        img: "podplomyk.png",
        title: "Podpłomyk",
        subtitle: "Tradycyjne Podpłomyki",
        comment:
          "Nasza specjalność to podpłomyk z serem kozim i spyrką. Takiego czegoś jeszcze nie jadłeś",
        cena: "20zł",
      },
    ],
  },
  {
    id: 3,
    name: "Zupy",
    photos: [
      {
        id: 1,
        img: "rosol.png",
        title: "Rosół z kury",
        subtitle: "Naturalny smalec na prawdziwym chlebie, mniam mniam",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "15zł",
      },
      {
        id: 2,
        img: "krupnik.png",
        title: "Krupnik",
        subtitle: "Pyszny Krupnik",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "20zł",
      },
      {
        id: 3,
        img: "pomidorowa.png",
        title: "Pomidorowa",
        subtitle: "Pomidorowa to nasza specjalność.",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji bankiet",
        cena: "20zł",
      },
      {
        id: 4,
        img: "zurek.jpg",
        title: "Żurek w chlebie",
        subtitle: "Naturalny smalec na prawdziwym chlebie, mniam mniam",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "15zł",
      },
      {
        id: 5,
        img: "krupnik.png",
        title: "Krupnik",
        subtitle: "Pyszny Krupnik",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "20zł",
      },
      {
        id: 6,
        img: "pomidorowa.png",
        title: "Pomidorowa",
        subtitle: "Pomidorowa to nasza specjalność.",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "20zł",
      },
    ],
  },
  {
    id: 4,
    name: "Dania Główne",
    photos: [
      {
        id: 1,
        img: "ziemniaki.png",
        title: "Ziemniaki ze zsiadłym mlekiem",
        subtitle: "Zsiadłe Mleko z Ziemniakami wpisane jako produkt tradycyjny",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "35zł",
      },
      {
        id: 2,
        img: "rejbak.png",
        title: "Rejbak Kurpiowski",
        subtitle:
          "Tradycyjny Prrzepis, naturalne składniki z naszej hodowli. Rejbak inaczej zwany kartoflakiem lub kuglem to pozycja obowiązkowa!",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "25zł",
      },
      {
        id: 3,
        img: "pierogi.jpg",
        title: "Pierogi",
        subtitle:
          "Wyśmienite pierogi wykonywane na miejscu z różnymi farszem w zależności od pory roku,",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji ",
        cena: "20zł",
      },
      {
        id: 4,
        img: "pyzy.jpg",
        title: "Pyzy z mięsem",
        subtitle: "Rolada super pyszna.",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "20zł",
      },
      {
        id: 5,
        img: "rejbak.png",
        title: "Rejbak Kurpiowski",
        subtitle:
          "Tradycyjny Prrzepis, naturalne składniki z naszej hodowli. Rejbak inaczej zwany kartoflakiem lub kuglem to pozycja obowiązkowa!",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "25zł",
      },
      {
        id: 6,
        img: "pyzy.jpg",
        title: "Pyzy z mięsem",
        subtitle: "Rolada super pyszna.",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji bankiet",
        cena: "20zł",
      },
      {
        id: 7,
        img: "pyzy.jpg",
        title: "Pyzy z mięsem",
        subtitle: "Rolada super pyszna.",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji bankiet",
        cena: "20zł",
      },
    ],
  },
  {
    id: 5,
    name: "Napoje",
    photos: [
      {
        id: 1,
        img: "woda.jpg",
        title: "Woda",

        cena: "5zł",
      },
      {
        id: 2,
        img: "kompot.jpg",
        title: "Kompot",
        subtitle:
          "Kompot z owoców z naturalnej uprawy <b>Wiśnia</b> ,<b> Rabarbar</b>",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "5zł",
      },
      {
        id: 3,
        img: "wina.jpg",
        title: "Wino",
        subtitle: "Wina Macedońskie",
        comment:
          "Tutaj jakiś ciekawy tekst o danym produkcie, z czego się składa i dlaczego mamy go w swojej restauracji, coś o historii lub o produkcji",
        cena: "40zł",
      },
    ],
  },
];
