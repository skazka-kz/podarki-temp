export interface PresentInfo {
  id?: number;
  name?: string;
  description?: string;
  weight?: string;
  price?: string;
  folder?: string;
  images?: string[];
  thumbs?: string[];
}

export const db: PresentInfo[] = [
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 3,
    name: `Кубик Золотой`,
    description: ``,
    weight: `200`,
    price: `270`,
    folder: "03_kubik_zolotoi",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 2,
    name: `Фонарик "Кто Там"`,
    description: ``,
    weight: `320`,
    price: `490`,
    folder: "02_kto_tam",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 4,
    name: `Лесной Домик`,
    description: ``,
    weight: `215`,
    price: `300`,
    folder: "04_lesnoi_domik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 5,
    name: `Праздник Маленький`,
    description: ``,
    weight: `310`,
    price: `450`,
    folder: "05_prazdnik_malenkii",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 6,
    name: `С Новым Годом!`,
    description: ``,
    weight: `320`,
    price: `500`,
    folder: "06_s_novym_godom",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 7,
    name: `Кубик Маленький`,
    description: ``,
    weight: `165`,
    price: `235`,
    folder: "07_kubik_malenkii",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 8,
    name: `Сумочка`,
    description: ``,
    weight: `250`,
    price: `345`,
    folder: "08_sumochka",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 9,
    name: `Конфетка`,
    description: ``,
    weight: `250`,
    price: `360`,
    folder: "09_konfetka",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 10,
    name: `Конфетка-Раскраска`,
    description: ``,
    weight: `260`,
    price: `365`,
    folder: "10_konfetka_raskraska",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 11,
    name: `Недорогой Подарок`,
    description: ``,
    weight: `300`,
    price: `430`,
    folder: "11_nedorogoi_podarok",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 12,
    name: `Белочка`,
    description: ``,
    weight: `330`,
    price: `500`,
    folder: "12_belochka",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 13,
    name: `Почта Деда Мороза`,
    description: ``,
    weight: `315`,
    price: `480`,
    folder: "13_pochta_deda_moroza",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 14,
    name: `Крепкая Дружба`,
    description: ``,
    weight: `260`,
    price: `400`,
    folder: "14_krepkaya_druzhba",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 15,
    name: `Веселье Маленькое`,
    description: ``,
    weight: `290`,
    price: `475`,
    folder: "15_vesele_malenkoe",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 16,
    name: `Бумажные Снежинки`,
    description: ``,
    weight: `215`,
    price: `345`,
    folder: "16_bumazhnye_snezhinki",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 17,
    name: `Кукурузный Домик`,
    description: ``,
    weight: `375`,
    price: `590`,
    folder: "17_kukuruznyi_domik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 18,
    name: `Снежный Вечер`,
    description: ``,
    weight: `405`,
    price: `590`,
    folder: "18_snezhnyi_vecher",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 19,
    name: `Кубик Большой`,
    description: ``,
    weight: `410`,
    price: `600`,
    folder: "19_kubik_bolshoi",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 20,
    name: `Эко Сумочка`,
    description: ``,
    weight: `410`,
    price: `700`,
    folder: "20_eko_sumochka",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 21,
    name: `Фонарик`,
    description: ``,
    weight: `310`,
    price: `535`,
    folder: "21_fonarik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 22,
    name: `Сказочный Замок`,
    description: ``,
    weight: `485`,
    price: `750`,
    folder: "22_skazochnyi_zamok",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 23,
    name: `Друзья`,
    description: ``,
    weight: `340`,
    price: `550`,
    folder: "23_druziya",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 24,
    name: `Веселье Большое`,
    description: ``,
    weight: `450`,
    price: `700`,
    folder: "24_veselie_bolshoe",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 25,
    name: `Детки / Снеговики`,
    description: ``,
    weight: `250`,
    price: `400`,
    folder: "25_detki_snegoviki",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 26,
    name: `Елочка Огоньки`,
    description: ``,
    weight: `400`,
    price: `600`,
    folder: "26_elki_ogonki",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 27,
    name: `Новогоднее Чудо`,
    description: ``,
    weight: `460`,
    price: `690`,
    folder: "27_novogodnee_chudo",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 28,
    name: `Снежинка`,
    description: ``,
    weight: `350`,
    price: `550`,
    folder: "28_snezhinka",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 29,
    name: `Праздник Большой`,
    description: ``,
    weight: `520`,
    price: `800`,
    folder: "29_prazdnik_bolshoi",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 30,
    name: `Новогоднее Веселье`,
    description: ``,
    weight: `500`,
    price: `800`,
    folder: "30_novogodnee_veselie",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 31,
    name: `Снеговичок`,
    description: ``,
    weight: `180`,
    price: `320`,
    folder: "31_snegovichok",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 32,
    name: `Ушастик`,
    description: ``,
    weight: `300`,
    price: `500`,
    folder: "32_ushastik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 33,
    name: `СантаФон`,
    description: ``,
    weight: `410`,
    price: `700`,
    folder: "33_santafon",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 34,
    name: `Северный Узор / Северная Сказка`,
    description: ``,
    weight: `350`,
    price: `600`,
    folder: "34_severnyi_uzor",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 35,
    name: `Часы`,
    description: ``,
    weight: `660`,
    price: `1150`,
    folder: "35_chasy",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 36,
    name: `Ребусы Загадки`,
    description: ``,
    weight: `350`,
    price: `555`,
    folder: "36_rebusy_zagadki",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 37,
    name: `Город Гномов`,
    description: ``,
    weight: `450`,
    price: `850`,
    folder: "37_gorod_gnomov",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 38,
    name: `Мышкина Книжка`,
    description: ``,
    weight: `380`,
    price: `650`,
    folder: "38_myshkina_knizhka",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 39,
    name: `Письмо Деда Мороза`,
    description: ``,
    weight: `420`,
    price: `660`,
    folder: "39_pismo_deda_moroza",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 40,
    name: `Лесные Непоседы`,
    description: ``,
    weight: `415`,
    price: `700`,
    folder: "40_lesnye_neposedy",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 41,
    name: `Мышонок Пик`,
    description: ``,
    weight: `400`,
    price: `700`,
    folder: "41_myshonok_pik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 42,
    name: `Подарок от Снегурочки`,
    description: ``,
    weight: `560`,
    price: `1000`,
    folder: "42_podarok_ot_snegurochki",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 43,
    name: `Веселый Грузовик`,
    description: ``,
    weight: `850`,
    price: `1500`,
    folder: "43_veselyi_gruzovik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 44,
    name: `Милашка`,
    description: ``,
    weight: `620`,
    price: `1200`,
    folder: "44_milashka",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 45,
    name: `Мышонок Марс`,
    description: ``,
    weight: `610`,
    price: `1100`,
    folder: "45_myshonok_mars",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 46,
    name: `Подарок для Ребят`,
    description: ``,
    weight: `500`,
    price: `900`,
    folder: "46_podarok_dlya_rebyat",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 47,
    name: `Золотое Сияние`,
    description: ``,
    weight: `530`,
    price: `950`,
    folder: "47_zolotoe_siyanie",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 48,
    name: `Ночной Город`,
    description: ``,
    weight: `400`,
    price: `760`,
    folder: "48_nochnoi_gorod",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 49,
    name: `Волшебная Избушка`,
    description: ``,
    weight: `540`,
    price: `1000`,
    folder: "49_volshebnaya_izbushka",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 50,
    name: `Снежинка Большая`,
    description: ``,
    weight: `620`,
    price: `1250`,
    folder: "50_snezhinki_bolshie",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 51,
    name: `Волшебство`,
    description: ``,
    weight: `650`,
    price: `1250`,
    folder: "51_volshebstvo",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 52,
    name: `Лапландия`,
    description: ``,
    weight: `650`,
    price: `1200`,
    folder: "52_laplandiya",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 53,
    name: `Желаем Счастья`,
    description: ``,
    weight: `650`,
    price: `1300`,
    folder: "53_zhelaem_schastiya",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 54,
    name: `Дед Мороз и Снегурочка`,
    description: ``,
    weight: `620`,
    price: `1200`,
    folder: "54_ded_moroz_snegurochka",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 55,
    name: `Мишутка`,
    description: ``,
    weight: `420`,
    price: `1700`,
    folder: "55_mishutka",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 56,
    name: `Джинсовый Пенал`,
    description: ``,
    weight: `275`,
    price: `1200`,
    folder: "56_penal",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 57,
    name: `Джек и Стёпа`,
    description: ``,
    weight: `860`,
    price: `1900`,
    folder: "57_dzhek_i_styopa",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 58,
    name: `Юрта`,
    description: ``,
    weight: `720`,
    price: `1500`,
    folder: "58_yurta",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 59,
    name: `Чудеса Случаются`,
    description: ``,
    weight: `510`,
    price: `1000`,
    folder: "59_chudesa_sluchaiutsya",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 60,
    name: `Новогодняя Сказка`,
    description: ``,
    weight: `740`,
    price: `1500`,
    folder: "60_novogodnyaya_skazka",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 61,
    name: `Замок`,
    description: ``,
    weight: `1000`,
    price: `2300`,
    folder: "61_zamok",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
  {
    id: 1,
    name: `Колокольчик`,
    description: ``,
    weight: `280`,
    price: `400`,
    folder: "01_kolokolchik",
    images: [
      "back.jpg",
      "cover.jgp",
      "display.jgp",
      "pile.jpg",
    ]
  },
];
