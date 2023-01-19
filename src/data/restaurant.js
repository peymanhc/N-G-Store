export const citis = [
  { id: "1", name: "Москва" },
  { id: "2", name: "Санкт-Петербург" },
  { id: "3", name: "Алматы" },
  { id: "4", name: "Астрахань" },
  { id: "5", name: "Барнаул" },
  { id: "6", name: "Белгород" },
  { id: "7", name: "Брянск" },
  { id: "8", name: "Волгоград" },
  { id: "9", name: "Воронеж" },
  { id: "10", name: "Екатеринбург" },
  { id: "11", name: "Ижевск" },
  { id: "12", name: "Иркутск" },
  { id: "13", name: "Казань" },
  { id: "14", name: "Калининград" },
  { id: "15", name: "Калуга" },
  { id: "16", name: "Кемерово" },
  { id: "17", name: "Краснодар" },
  { id: "18", name: "Красноярск" },
  { id: "19", name: "Липецк" },
  { id: "20", name: "Набережные Челны" },
  { id: "21", name: "Нижний Новгород" },
  { id: "22", name: "Новосибирск" },
  { id: "23", name: "Нур-Султан" },
  { id: "24", name: "Омск" },
  { id: "25", name: "Оренбург" },
  { id: "26", name: "Пермь" },
  { id: "27", name: "Ростов-на-Дону" },
  { id: "28", name: "Рязань" },
  { id: "29", name: "Самара" },
  { id: "30", name: "Саратов" },
  { id: "31", name: "Смоленск" },
  { id: "32", name: "Сочи" },
  { id: "33", name: "Ставрополь" },
  { id: "34", name: "Тольятти" },
  { id: "35", name: "Томск" },
  { id: "36", name: "Тула" },
  { id: "37", name: "Тюмень" },
  { id: "38", name: "Уфа" },
  { id: "39", name: "Челябинск" },
  { id: "40", name: "Ярославль" },
];

const description = "Классический стейк Нью-Йорк с тонкой прослойкой жира. Вес указан в сыром виде. Степень прожарки на выбор Классический стейк Нью-Йорк";
export const restaurants = [
	{id:1, name:'Park & Pizza', imagesAdress:'/static/images/restaurants/f39ee4d41b90ccd818085b9f876525fd-600x450.jpeg', labelTitle:'00:00', labelAnnotation:'сегодня', rate:'4.6', description},
	{id:2, name:'Доставка из Папа Джонс', imagesAdress:'/static/images/restaurants/ec7dbe904b4d71dad3812ac076b00d42-600x450.jpeg', labelTitle:'00:00', labelAnnotation:'сегодня', rate:'4.6', description},
	{id:3, name:'Beerman Grill', imagesAdress:'/static/images/restaurants/0d171e1c8f69117ee27249fd9c3dd0f0-600x450.jpg', labelTitle:'00:00', labelAnnotation:'сегодня', rate:'Ролл Хикара', description},
	{id:4, name:'Сибирский Гриль', imagesAdress:'/static/images/restaurants/ed22a68c5f043accf13806242639bd3f-600x450.jpeg', labelTitle:'00:00', labelAnnotation:'сегодня', rate:'4.6', description},
	{id:5, name:'Сибирский Гриль', imagesAdress:'/static/images/restaurants/647b17eb8fca35db5daddae1cae0a37f-600x450.jpg', labelTitle:'00:00', labelAnnotation:'сегодня', rate:'4.6', description},
];

export const categorise = [
  { id: 1, name: "Все", imageAddress: "/static/images/categories/7261a46c7ee50edb6208bb58d07a47a9-200x200.jpg", count: 100, },
  { id: 2, name: "Бургеры" , imageAddress: "/static/images/categories/c0b1283f22c4c21383c5f8819bd72e9e-200x200.jpg", count: 74, },
  { id: 3, name: "Суши" , imageAddress: "/static/images/categories/f89baa2592e8e3c0687825ce631dcf91-200x200.jpg", count: 56, },
  { id: 4, name: "Пицца", imageAddress: "/static/images/categories/4529d57df6bc970d11c1f3496296d99b-200x200.jpg", count: 40,  },
  { id: 5, name: "Кофе" , imageAddress: "/static/images/categories/coffee.jpg", count: 75, },
  { id: 6, name: "Здоровая еда" , imageAddress: "/static/images/categories/f210e10daac9d3aea322c214d4701c71-200x200.jpg", count: 68, },
  { id: 7, name: "Лапша Вок", imageAddress: "/static/images/categories/629484dbeaefb145b746d6e94298da55-200x200.jpg", count: 24,  },
  { id: 8, name: "Вегги" , imageAddress: "/static/images/categories/caeb8a171d0953819f16b25aaaef3ff3-200x200.jpg", count: 31, },
  { id: 9, name: "Шаверма" , imageAddress: "/static/images/categories/4529d57df6bc970d11c1f3496296d99b-200x200.jpg", count: 11, },
  { id: 10, name: "Сэндвичи" , imageAddress: "/static/images/categories/7d94d947e7d6d51d739e2b658c3b4050-200x200.jpg", count: 69, },
  { id: 11, name: "Итальянская", imageAddress: "/static/images/categories/3311b3b746a63b39c7e0e247ee7d33ef-200x200.jpg", count: 83,  },
  { id: 12, name: "Ещё" , imageAddress: "/static/images/categories/f89baa2592e8e3c0687825ce631dcf91-200x200.jpg", count: 8, },
  { id: 13, name: "Десерты" , imageAddress: "/static/images/categories/f97164f134dc572b74a5fab856724f16-200x200.jpg", count: 17, },
  { id: 14, name: "Грузинская", imageAddress: "/static/images/categories/7261a46c7ee50edb6208bb58d07a47a9-200x200.jpg", count: 62,  },
  { id: 15, name: "Обед" , imageAddress: "/static/images/categories/f210e10daac9d3aea322c214d4701c71-200x200.jpg", count: 99, },
];

const products1 = [
  {
    id: "1",
    name: "Хачапури по-аджарски с яйцом",
    imagesAdress:
      "/static/images/products/ea7d7dbd0a7ed4f2182efb3bb2ad9371-400x400.jpeg",
    description:
      "Сочная грудка индейки на свежевыпеченной чиабатте с перечным и брусничным соусами, листья салата, помидоры, зеленый перец и свежие огурцы",
    weight: "249 r",
    price: "199",
	discount:600,
  },
  {
    id: "2",
    name: "индейки",
    imagesAdress:
      "/static/images/products/0b6e2d39c71c185bca8d9b6af1a3696d-400x400.jpeg",
    description:
      "Сочная грудка индейки на свежевыпеченной чиабатте с перечным и брусничным соусами, листья салата, помидоры, зеленый перец и свежие огурцы",
    weight: "249 r",
    price: "499",
	discount:600,
  },
];
const products = [
  {
    id: "1",
    name: "Сэндвич Чаба-Саба",
    imagesAdress:
      "/static/images/products/42aad804be3c04ac3ff439ffcbace3c4-450x300.jpeg",
    description:
      "Сочная грудка индейки на свежевыпеченной чиабатте с перечным и брусничным соусами, листья салата, помидоры, зеленый перец и свежие огурцы",
    weight: "249 g",
    price: "199",
	discount:500,
  },
  {
    id: "2",
    name: "Выберите опции",
    imagesAdress:
      "/static/images/products/95150a4e74aae90746a4ed698f4d3aed-450x300.jpeg",
    description:
      "Сочная грудка индейки на свежевыпеченной чиабатте с перечным и брусничным соусами, листья салата, помидоры, зеленый перец и свежие огурцы",
    weight: "115 r",
    price: "500",
	discount:500,
  },
  {
    id: "3",
    name: "Поке боул с лососем",
    imagesAdress:
      "/static/images/products/a197d24070435d0ffe2dae779dc2a1d6-450x300.jpeg",
    description:
      "Сочная грудка индейки на свежевыпеченной чиабатте с перечным и брусничным соусами, листья салата, помидоры, зеленый перец и свежие огурцы",
    weight: "277 g",
    price: "460",
	discount:500,
  },
  {
    id: "4",
    name: "Поке боул с угрем",
    imagesAdress:
      "/static/images/products/cd73777c67362d15ad0b2c93fd6eb726-450x300.jpeg",
    description:
      "Сочная грудка индейки на свежевыпеченной чиабатте с перечным и брусничным соусами, листья салата, помидоры, зеленый перец и свежие огурцы",
    weight: "145 r",
    price: "265",
	discount:500,
  },
  {
    id: "5",
    name: "Чикен Мисо боул",
    imagesAdress:
      "/static/images/products/d55b12988b5bda22acb0f13d93ab37bf-450x300.jpeg",
    description:
      "Сочная грудка индейки на свежевыпеченной чиабатте с перечным и брусничным соусами, листья салата, помидоры, зеленый перец и свежие огурцы",
    weight: "112 g",
    price: "159",
	discount:500,	
  },
];

export const productCategorise = [
 	{id:'1', name:'Популярные блюда', count: 5, products:products1 },
	{id:'2', name:'Холодные закуски', count: 5, products },
	{id:'3', name:'Салаты', count: 5, products },
	{id:'4', name:'Супы', count: 5, products:products1 },
	{id:'5', name:'Хинкали', count: 5, products },
	{id:'6', name:'Горячие блюда', count: 5, products:products1 },
	{id:'7', name:'Выпечка', count: 5, products },
	{id:'8', name:'Соусы', count: 5, products },
	{id:'9', name:'Десерты', count: 5, products },
	{id:'10', name:'Напитки', count: 5, products }, 
	{id:'11', name:'Напитки1', count: 5, products }, 
];