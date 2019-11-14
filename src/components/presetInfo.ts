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
