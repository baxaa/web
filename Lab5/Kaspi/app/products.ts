export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
  rating : number;
  category : string;
  like : number;
}

export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy A23',
    price: 199990,
    description: 'Откройте для себя больше возможностей. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h83/49792685178910/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
    link: "",
    rating: 5,
    category : "smartphones and gadjets",
    like : 0
  },
  {
    id: 2,
    name: 'Xiaomi Redmi 10C',
    price: 69990,
    description: 'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h96/49939925139486/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
    link: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item",
    rating: 5,
    category : "smartphones and gadjets",
    like : 0
  },
  {
    id: 3,
    name: 'X-Game XK-200UB',
    price: 3000,
    description: 'Яркая клавиатура с LED подсветкой станет стильным элементом геймерского стола.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h75/31943918518302/x-game-xk-200ub-black-9200601-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/x-game-xk-200ub-chernyi-9200601/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item",
    rating: 5,
    category : "computers",
    like : 0
  },
  {
    id: 4,
    name: 'Apple Iphone 14',
    price: 420000,
    description: `Ceramic Shield front
    Glass back and aluminum design`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg",
    link : "",
    rating: 5,
    category : "smartphones and gadjets",
    like : 0
  },
  {
    id: 5,
    name: 'Apple MacBook Pro 14',
    price: 993035,
    description: `Ноутбук Apple MacBook Pro 14 MKGP3 серый`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg",
    link : "https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item",
    rating: 5,
    category : "computers",
    like : 0
  },
  {
    id: 6,
    name: 'Кондиционер',
    price: 225000,
    description: `Кондиционер ALMACOM ACH-09LC черный + монтажный комплект`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/h58/31488378011678/almacom-ach-09lc-cernyj-montaznyj-komplekt-100354850-1-Container.jpg",
    link : "https://kaspi.kz/shop/p/almacom-ach-09lc-chernyi-montazhnyi-komplekt-100354850/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item",
    rating: 5,
    category : "home technics",
    like : 0
  },
  {
    id: 7,
    name: 'Телевизор',
    price: 2999990,
    description: `Телевизор Samsung QE75QN800BUXCE черный`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/h6a/68572136341534/qled-televizor-samsung-qe75qn800buxce-108728380-1.jpg",
    link : "https://kaspi.kz/shop/p/samsung-qe75qn800buxce-chernyi-108728380/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item",
    rating: 5,
    category : "home technics",
    like : 0
  },
  {
    id: 8,
    name: 'Проектор',
    price: 2200100,
    description: `Проектор Optoma UHZ50`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h08/hdd/52319194873886/optoma-uhz50-105727919-1.jpg",
    link : "https://kaspi.kz/shop/p/optoma-uhz50-105727919/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item",
    rating: 5,
    category : "home technics",
    like : 0
  },
  {
    id: 9,
    name: 'Зарядное устройство',
    price: 29990,
    description: `Зарядное устройство Canyon CNS-WCS303B черный`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/h4e/33834402840606/canyon-cns-wcs303b-cernyj-101169918-1-Container.jpg",
    link : "https://kaspi.kz/shop/p/canyon-cns-wcs303b-chernyi-101169918/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item",
    rating: 5,
    category : "home technics",
    like : 0
  },
  {
    id: 10,
    name: 'Домашний кинотеатр',
    price: 194948,
    description: `Домашний кинотеатр LG LHB655NK`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hf7/31583642517534/lg-lhb655nk-cernyj-2100099-1-Container.jpg",
    link : "https://kaspi.kz/shop/p/lg-lhb655nk-2100099/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/itemб",
    rating: 5,
    category : "home technics",
    like : 0
  },
  {
    id: 11,
    name: 'Смарт-часы Apple Watch',
    price: 229990,
    description: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h33/hc7/63158967926814/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg",
    link: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item",
    rating: 5,
    category : "smartphones and gadjets",
    like : 0
  },
  {
    id: 12,
    name: 'Смартфон Google Pixel',
    price: 209900,
    description: 'Смартфон Google Pixel 6a 6 ГБ/128 ГБ белый',
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h21/h06/62084242112542/google-pixel-6a-6-gb-128-gb-belyi-106250314-1.jpg",
    link: "https://kaspi.kz/shop/p/google-pixel-6a-6-gb-128-gb-belyi-106250314/?c=750000000#!/item",
    rating: 5,
    category : "smartphones and gadjets",
    like : 0
  },
  {
    id: 13,
    name: "Мышь Razer",
    price: 99990,
    description: 'Мышь Razer DeathAdder V3 Pro белый',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h03/67863260528670/razer-deathadder-v3-pro-belyi-108434841-1.jpg",
    link: "https://kaspi.kz/shop/p/razer-deathadder-v3-pro-belyi-108434841/?c=750000000#!/item",
    rating: 5,
    category : "computers",
    like : 0
  },
  {
    id: 14,
    name: 'Системный блок Vega',
    price: 3000000,
    description: 'Системный блок Vega Limited 844083 черный',
    image: "https://resources.cdn-kaspi.kz/img/m/p/hb8/hbf/68708585865246.jpg?format=preview-medium",
    link: "https://kaspi.kz/shop/p/vega-limited-844083-chernyi-108778429/?c=750000000#!/item",
    rating: 5,
    category : "computers",
    like : 0
  },
  {
    id: 15,
    name: 'Моноблок Apple iMac',
    price: 1099900,
    description: 'Моноблок Apple iMac 24 2021 24M185SUX MGPL3 синий',
    image: "https://resources.cdn-kaspi.kz/img/m/p/hb4/he2/64095418581022.jpg?format=preview-medium",
    link: "https://kaspi.kz/shop/p/apple-imac-24-2021-24m185sux-mgpl3-sinii-101530515/?c=750000000#!/item",
    rating: 5,
    category : "computers",
    like : 0
  },
  {
    id: 16,
    name: 'Петропавловское молоко',
    price: 469,
    description: 'Петропавловское молоко 3.2% 900 мл',
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h88/h5e/46585887850526/petropavlovskoe-ultrapasterizovannoe-3-2-0-9-l-100815879-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/petropavlovskoe-moloko-3-2-900-ml-100815879/?c=750000000#!/item",
    rating: 5,
    category : "food",
    like : 0
  },
  {
    id: 17,
    name: 'Шоро курт',
    price: 267,
    description: 'Шоро курт соленый 30 г',
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h03/h73/34158416461854/soro-kurt-klassiceskij-30-g-101639158-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/shoro-kurt-solenyi-30-g-101639158/?c=750000000#!/item",
    rating: 5,
    category : "food",
    like : 0
  },
  {
    id: 18,
    name: 'Энергетический напиток Gorilla',
    price: 420,
    description: 'Энергетический напиток Gorilla лимонад 450 мл',
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h02/hbe/45491227590686/gorilla-toniziruusij-limonad-450-ml-102277492-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/gorilla-limonad-450-ml-102277492/?c=750000000#!/item",
    rating: 5,
    category : "food",
    like : 0
  },
  {
    id: 19,
    name: 'Рудненский Тан',
    price: 629,
    description: 'Рудненский Тан Газированный 0.7-1.8 % 1.5 л',
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc3/h97/33540150689822/rudnenskij-tan-gazirovannyj-0-7-1-8-1-5-l-101055760-1.jpg",
    link: "https://kaspi.kz/shop/p/rudnenskii-tan-gazirovannyi-0-7-1-8-1-5-l-101055760/?c=750000000#!/item",
    rating: 5,
    category : "food",
    like : 0
  },
  {
    id: 20,
    name: 'Рахат шоколадная плитка ',
    price: 463,
    description: 'Рахат шоколадная плитка молочный 100 г',
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd7/ha8/67021630079006/rakhat-shokoladnaya-plitka-molochnyi-100-g-100221859-1.jpg",
    link: "https://kaspi.kz/shop/p/rahat-shokoladnaja-plitka-molochnyi-100-g-100221859/?c=750000000#!/item  ",
    rating: 5,
    category : "food",
    like : 0
  }

];

