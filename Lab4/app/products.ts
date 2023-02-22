export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
  // rating : number;
}

export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy A23',
    price: 199990,
    description: 'Откройте для себя больше возможностей. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h83/49792685178910/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
    link: "",
    rating: 5
  },
  {
    id: 2,
    name: 'Xiaomi Redmi 10C',
    price: 69990,
    description: 'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h96/49939925139486/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
    link: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item",
    rating: 5
  },
  {
    id: 3,
    name: 'X-Game XK-200UB',
    price: 3000,
    description: 'Яркая клавиатура с LED подсветкой станет стильным элементом геймерского стола.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h75/31943918518302/x-game-xk-200ub-black-9200601-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/x-game-xk-200ub-chernyi-9200601/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item",
    rating: 5
  },
  {
    id: 4,
    name: 'Apple Iphone 14',
    price: 420000,
    description: `Ceramic Shield front
    Glass back and aluminum design`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg",
    link : ""
  },
  {
    id: 5,
    name: 'Apple MacBook Pro 14',
    price: 993035,
    description: `Ноутбук Apple MacBook Pro 14 MKGP3 серый`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg",
    link : "https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item"
  },
  {
    id: 6,
    name: 'Кондиционер',
    price: 225000,
    description: `Кондиционер ALMACOM ACH-09LC черный + монтажный комплект`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/h58/31488378011678/almacom-ach-09lc-cernyj-montaznyj-komplekt-100354850-1-Container.jpg",
    link : "https://kaspi.kz/shop/p/almacom-ach-09lc-chernyi-montazhnyi-komplekt-100354850/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item"
  },
  {
    id: 7,
    name: 'Телевизор',
    price: 2999990,
    description: `Телевизор Samsung QE75QN800BUXCE черный`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/h6a/68572136341534/qled-televizor-samsung-qe75qn800buxce-108728380-1.jpg",
    link : "https://kaspi.kz/shop/p/samsung-qe75qn800buxce-chernyi-108728380/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item"
  },
  {
    id: 8,
    name: 'Проектор',
    price: 2200100,
    description: `Проектор Optoma UHZ50`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h08/hdd/52319194873886/optoma-uhz50-105727919-1.jpg",
    link : "https://kaspi.kz/shop/p/optoma-uhz50-105727919/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item"
  },
  {
    id: 9,
    name: 'Зарядное устройство',
    price: 29990,
    description: `Зарядное устройство Canyon CNS-WCS303B черный`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/h4e/33834402840606/canyon-cns-wcs303b-cernyj-101169918-1-Container.jpg",
    link : "https://kaspi.kz/shop/p/canyon-cns-wcs303b-chernyi-101169918/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item"
  },
  {
    id: 10,
    name: 'Домашний кинотеатр',
    price: 194948,
    description: `Домашний кинотеатр LG LHB655NK`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hf7/31583642517534/lg-lhb655nk-cernyj-2100099-1-Container.jpg",
    link : "https://kaspi.kz/shop/p/lg-lhb655nk-2100099/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toriuy9xleHS99sLdIOFPzVkE-6z7bPVLStp5Z2Oh2ECUlnS52kdHZRkRoCy4AQAvD_BwE#!/item"
  }

];

