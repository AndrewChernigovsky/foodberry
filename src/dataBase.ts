import assortFishImage from "./images/allMenu/coldSnacks/assorted-fish.jpg";
import eggplantRoulletsImage from "./images/allMenu/coldSnacks/eggplant-roulletes.webp";
import assortCheeseImage from "./images/allMenu/coldSnacks/assorted-cheese.jpg";
import meatDelicusiImage from "/images/allMenu/coldSnacks/meat-delicusi.jpg";
import saloImage from "/images/allMenu/coldSnacks/salo-garlicGrenki.jpg";
import brouslettImage from "/images/allMenu/coldSnacks/brouskett.jpg";
import buritoImage from "/images/allMenu/coldSnacks/burito.jpeg";
import assortVegetablesImage from "/images/allMenu/coldSnacks/assorted-vegetables.jpeg";


import hachapuryImage from "/images/allMenu/hotSnacks/ajarsky-hachapuri.jpg";
import chuduImage from "/images/allMenu/hotSnacks/chudu.jpg";
import italianPizzaImage from "/images/allMenu/hotSnacks/italian-pizza.jpg";
import homePizzaImage from "/images/allMenu/hotSnacks/home-pizza.jpg";
import tomatHachapuryImage from "/images/allMenu/hotSnacks/tomat-hachapuri.jpg";
import shpinatHachapuryImage from "/images/allMenu/hotSnacks/shpinat-hachapuri.jpeg";
import threeCheesesImage from "/images/allMenu/hotSnacks/three-cheeses.jpg";
import margaritaPizzaImage from "/images/allMenu/hotSnacks/margarita-pizza.jpg";



export const food: {
	menuTitle: string;
	id: string;
	foods: {
		img: string;
		name: string;
		weight: string;
		about: string;
		price: number;
	}[];
}[] = [
	{
		menuTitle: "Холодные закуски",
		id: "coldSnackes",
		foods: [
			{
				img: assortFishImage,
				name: "Ассорти из рыбы",
				weight: "360",
				about: "Слабосолёная сёмга, кета холодного копчения, слабосолёная скумбрия, рулетик из масляной рыбы, оливки, маслины.",
				price: 1635,
			},
			{
				img: eggplantRoulletsImage,
				name: "Рулетики из баклажанов",
				weight: "250",
				about: "Два варианта рулетиков из жареных баклажанов для истинных гурманов: с сыром креметте, базиликом и чесноком, и с пряной ореховой пастой. Блюдо украшено соусом песто, зёрнами граната и маслом из печёного перца.",
				price: 360,
			},
			{
				img: assortCheeseImage,
				name: "Ассорти сыров",
				weight: "210",
				about: "Сыры Пармезан, Маасдам, Чечил, с грецким орехом, сырная палочка, сыр дорблю, виноград, курага, грецкий орех, крендельки сдобные.",
				price: 745,
			},
			{
				img: meatDelicusiImage,
				name: "Мясные деликатесы",
				weight: "500",
				about: "Ростбиф из говядины в пряном маринаде, буженина печёная с дижонской горчицей, рулет из свинины с сыром дор блю, рулет из курицы и свинины с паприкой, баллотин с куриной печенью и фисташками, томаты черри, зелень.",
				price: 1450,
			},
			{
				img: saloImage,
				name: "Сало с чесночными гренками",
				weight: "100",
				about: "Ароматное копчёное и солёное сало собственного приготовления.",
				price: 240,
			},
			{
				img: brouslettImage,
				name: "Брускетта",
				weight: "70",
				about: "Традиционное центральноитальянское простонародное блюдо; в наше время - закуска-антипасто перед основными приёмами блюд.",
				price: 100,
			},
			{
				img: buritoImage,
				name: "Буррито",
				weight: "90",
				about: "Мексиканское блюдо, состоящее из мягкой пшеничной лепёшки (тортильи), в которую завёрнута разнообразная начинка, к примеру, рубленое мясо, пережаренные бобы, рис, помидоры, авокадо или сыр.",
				price: 150,
			},
			{
				img: assortVegetablesImage,
				name: "Овощное ассорти",
				weight: "370",
				about: "Ассорти в составе которого только овощи натурального происхождения из Краснодара",
				price: 300,
			},
		],
	},
	{
		menuTitle: "Горячие закуски",
		id: "hotSnackes",
		foods: [
			{
				img: hachapuryImage,
				name: "Хачапури по–аджарски",
				weight: "370",
				about: "«Лодочка» из теста с сыром сулугуни и яйцом",
				price: 570,
			},
			{
				img: chuduImage,
				name: "Чуду",
				weight: "100",
				about: "Блюдо народов Дагестана, входит в даргинскую, кумыкскую и другие национальные кухни.",
				price: 275,
			},
			{
				img: italianPizzaImage,
				name: "Пицца итальянская",
				weight: "450",
				about: "Классическая пицца по итальянскому рецепту",
				price: 580,
			},
			{
				img: homePizzaImage,
				name: "Пицца домашняя",
				weight: "480",
				about: "Пицца, приготовленная по домашнему рецепту",
				price: 550,
			},
			{
				img: tomatHachapuryImage,
				name: "Хачапури с томатом и базиликом",
				weight: "400",
				about: "Блюдо грузинской кухни, национальное мучное изделие, булка с начинкой из сыра.",
				price: 500,
			},
			{
				img: shpinatHachapuryImage,
				name: "Хачапури со шпинатом",
				weight: "",
				about: "Блюдо грузинской кухни, национальное мучное изделие, булка с начинкой из сыра и шпината",
				price: 470,
			},
			{
				img: threeCheesesImage,
				name: "Пицца три сыра",
				weight: "500",
				about: "Пицца с моцареллой, пармезаном и камамбером.",
				price: 500,
			},
			{
				img: margaritaPizzaImage,
				name: "Пицца Маргарита",
				weight: "520",
				about: "Неаполитанская пицца, приготовленная из помидоров Сан-Марцано, сыра моцарелла, свежего базилика, соли и оливкового масла первого отжима.",
				price: 590,
			},
		],
	},
	{
		menuTitle: "Мясные блюда",
		id: "meatDelicious",
		foods: [
			{
				img: "/images/allMenu/meatDishes/keta-meat.jpg",
				name: "Стейк из кеты",
				weight: "100",
				about: "Рыбный стейк прожаренный на мангале",
				price: 320,
			},
			{
				img: "/images/allMenu/meatDishes/spicy-krilyshki.jpg",
				name: "Крылышки острые",
				weight: "100",
				about: "Сочные куриные крылышки в фирменном маринаде из Индии",
				price: 290,
			},
			{
				img: "/images/allMenu/meatDishes/assorted-chicken.jpg",
				name: "Ассорти из курицы",
				weight: "800",
				about: "Шашлык, из курицы, куриные крылышки, люля-кебаб, шашлык из куриного филе, наггетсы, картофель фри, специи.",
				price: 1800,
			},
			{
				img: "/images/allMenu/meatDishes/assorted-chicken-and-pig.jpeg",
				name: "Ассорти из курицы и свинины",
				weight: "1000",
				about: "Шашлык из курицы, шашлык из свинины, шашлык из куриного филе, стейк из свинины, люля-кебаб из курицы, лаваш, лук.",
				price: 2500,
			},
			{
				img: "/images/allMenu/meatDishes/chicken-shashlyk.webp",
				name: "Шашлык из курицы по-баварски",
				weight: "200",
				about: "Шашлык из куриного филе в специях.",
				price: 350,
			},
			{
				img: "/images/allMenu/meatDishes/assorted-chickend-and-horse.jpg",
				name: "Ассорти из курицы и баранины",
				weight: "1500",
				about: 'Шашлык из баранины, шашлык из бараньей лопатки, шашлык "семечки", люля-кебаб из баранины, люля-кебаб из курицы, шашлык из курицы, шашлык из филе курицы.',
				price: 3200,
			},
			{
				img: "/images/allMenu/meatDishes/meat-pig-neck.jpg",
				name: "Стейк из свиной шеи",
				weight: "150",
				about: "Подаётся с гарниром из квашеной капусты, яблок, лука и мяты.",
				price: 750,
			},
			{
				img: "/images/allMenu/meatDishes/forel-meat.jpg",
				name: "Стейк из форели",
				weight: "200",
				about: "Аппетитный стейк из премиальной рыбы",
				price: 1130,
			},
		],
	},
	{
		menuTitle: "Супы",
		id: "soups",
		foods: [
			{
				img: "/images/allMenu/soups/borsh-myasnoy.jpg",
				name: "Борщ мясной ",
				weight: "300",
				about: "Украинский борщ, любимый всеми славянскими народами, редко назовут супом. Это особенное, ароматное блюдо зовут только по имени. Горячий, наваристый мясной борщ всегда пахнет домом, печкой и семейным уютом. Густой, красивый, сваренный в лучших традициях. Особый вкус борщу придает чесночная приправа, смягченная нежнейшей сливочной сметаной.",
				price: 350,
			},
			{
				img: "/images/allMenu/soups/solyanka.jpg",
				name: "Солянка мясная",
				weight: "300",
				about: "Исконно русское блюдо обладает особым островатым привкусом с кислинкой и восхитительным ароматом. Солянка вобрала в себя все самое лучшее из национальных блюд: тут и обжаренное сочное мясо, и ароматные копченые колбаски, и хрустящие соленые огурчики и свежая капуста. Все это приготовлено по старинному рецепту и приправлено нежнейшей сметаной.",
				price: 350,
			},
			{
				img: "/images/allMenu/soups/harcho.jpg",
				name: "Харчо ",
				weight: "300",
				about: "Настоящий грузинский харчо прославился своей остротой и обилием ароматных пряностей. Мягкая волокнистая говядина, нежнейший рис и свежие сочные помидоры – основа правильного супа. Харчо, сваренный у нас в кафе по оригинальному рецепту получается густым, с мягким разваренным рисом, имеющим острый, необыкновенный кисловато-чесночный вкус, а яркая зелень делает подачу необычайно красивой. В нашем меню суп харчо отличается особым пряным вкусом и готовится по особой технологии.",
				price: 350,
			},
			{
				img: "/images/allMenu/soups/udon-c-kyricey-krevetikami.jpg",
				name: "Удон с курицей и креветками",
				weight: "300",
				about: "Суп с лапшой удон - отличный выбор для тех, кто следит за своей фигурой. Куриная грудка и креветки в его составе – это источник белка, который является главным «строителем» мышц. ",
				price: 440,
			},
			{
				img: "/images/allMenu/soups/ramen-c-krevetikami.jpg",
				name: "Рамен с креветками",
				weight: "300",
				about: "Традиционное азиатское блюдо с пшеничной лапшой и тигровыми креветками. На родине оно представляет собой недорогое блюдо быстрого питания, обладающее большой энергетической ценностью и насыщенным вкусом. ",
				price: 404,
			},
			{
				img: "/images/allMenu/soups/lagman.jpg",
				name: "Лагман",
				weight: "300",
				about: "Лагман – происходит и крайне популярен в странах Центральной Азии. Это густое, изысканное и безумно вкусное блюдо первое блюдо. Существует много разновидностей лагмана, которые различны по особенностям приготовления и составу, но все вариации неизменно включает в себя специальную лапшу, мясо и овощи. ",
				price: 404,
			},
			{
				img: "/images/allMenu/soups/meksikanskiy-chili.jpg",
				name: "Мексиканский чили",
				weight: "300",
				about: "",
				price: 377,
			},
			{
				img: "/images/allMenu/soups/harcho.jpg",
				name: "Харчо ",
				weight: "300",
				about: "Настоящий грузинский харчо прославился своей остротой и обилием ароматных пряностей. Мягкая волокнистая говядина, нежнейший рис и свежие сочные помидоры – основа правильного супа. Харчо, сваренный у нас в кафе по оригинальному рецепту получается густым, с мягким разваренным рисом, имеющим острый, необыкновенный кисловато-чесночный вкус, а яркая зелень делает подачу необычайно красивой. В нашем меню суп харчо отличается особым пряным вкусом и готовится по особой технологии.",
				price: 350,
			},
		],
	},
	{
		menuTitle: "Гриль Меню",
		id: "grillMenu",
		foods: [
			{
				img: "/images/allMenu/grill/stejk-ribay.jpg",
				name: "Стейк Рибай",
				weight: "100/50/30",
				about: "Стейк из толстого края мраморной говядины",
				price: 220,
			},
			{
				img: "/images/allMenu/grill/stejk-new-york.jpg",
				name: "Стейк Нью-Йорк",
				weight: "170/50/30",
				about: "Стейк из тонкого края мраморной говядины",
				price: 312,
			},
			{
				img: "/images/allMenu/grill/stejk-chak-roll.jpg",
				name: "Стейк Чак Ролл",
				weight: "100/20/30",
				about: "Стейк из шейно-лопаточной части мраморной говядины",
				price: 445,
			},
			{
				img: "/images/allMenu/grill/stejk-machete.jpg",
				name: "Стейк Мачете",
				weight: "180/20/30",
				about: "Тонкий удлиненный кусок мяса из диафрагмы быка",
				price: 360,
			},
			{
				img: "/images/allMenu/grill/rebra.jpg",
				name: "Ребра из мраморной говядины",
				weight: "",
				about: "запечённых по-Гренобольски",
				price: 870,
			},
			{
				img: "/images/allMenu/grill/baranina-grill.jpg",
				name: "Баранина гриль",
				weight: "150/30",
				about: "Мякоть баранины с маринованным луком ",
				price: 509,
			},
			{
				img: "/images/allMenu/grill/govyadina-grill.jpg",
				name: "Говядина гриль",
				weight: "160/30",
				about: "Мякоть мраморной говядины с маринованным луком",
				price: 520,
			},
			{
				img: "/images/allMenu/grill/stejk-machete.jpg",
				name: "Стейк Мачете",
				weight: "180/20/30",
				about: "Тонкий удлиненный кусок мяса из диафрагмы быка",
				price: 360,
			},
		],
	},
	{
		menuTitle: "Рыбные блюда",
		id: "fishDelicious",
		foods: [
			{
				img: "/images/allMenu/fishDelicuos/morskoy-ej.jpg",
				name: "Морские ежи с эспуме",
				weight: "126",
				about: "из манго и красной икрой.",
				price: 970,
			},
			{
				img: "/images/allMenu/fishDelicuos/ugolnaya-ruba.jpeg",
				name: "Угольная рыба",
				weight: "300",
				about: "с артишоками и вялеными томатами",
				price: 1520,
			},
			{
				img: "/images/allMenu/fishDelicuos/assorty-morskoe-plato.jpg",
				name: "Ассорти «Морское плато»",
				weight: "1 000",
				about: "Ассорти из королевских креветок, дальневосточного гребешка, фаланги камчатского краба, жаренного на гриле кальмара и мидий.",
				price: 8400,
			},
			{
				img: "/images/allMenu/fishDelicuos/shushi-kotletu.jpg",
				name: "Щучьи котлеты",
				weight: "140",
				about: "с картофельным пюре и красной икрой ",
				price: 860,
			},
			{
				img: "/images/allMenu/fishDelicuos/assorty-iz-ustriz.jpg",
				name: "Ассорти из устриц",
				weight: "152",
				about: "запечённых по-Гренобольски",
				price: 1870,
			},
			{
				img: "/images/allMenu/fishDelicuos/file-paltysa.jpg",
				name: "Филе палтуса",
				weight: "313",
				about: 'с зелёной спаржей и "Голландским" соусом ',
				price: 1509,
			},
			{
				img: "/images/allMenu/fishDelicuos/ugolnaya-ruba.jpeg",
				name: "Угольная рыба",
				weight: "310",
				about: "с артишоками и вялеными томатами",
				price: 1220,
			},
			{
				img: "/images/allMenu/fishDelicuos/assorty-morskoe-plato.jpg",
				name: "Ассорти «Морское плато»",
				weight: "1 000",
				about: "Ассорти из королевских креветок, дальневосточного гребешка, фаланги камчатского краба, жаренного на гриле кальмара и мидий.",
				price: 8400,
			},
		],
	},
	{
		menuTitle: "Напитки",
		id: "drinks",
		foods: [
			{
				img: "/images/allMenu/drinks/seldereeyeviu-fresh.jpg",
				name: "Сельдереевый фреш",
				weight: "250",
				about: "сок натуральный свежевыжатый.",
				price: 190,
			},
			{
				img: "/images/allMenu/drinks/apelsinoviu-fresh.jpg",
				name: "Апельсиновый фреш",
				weight: "250",
				about: "сок натуральный свежевыжатый",
				price: 190,
			},
			{
				img: "/images/allMenu/drinks/greypfrutoviu-fresh.jpg",
				name: "Грейпфрутовый фреш",
				weight: "250",
				about: "сок натуральный свежевыжатый.",
				price: 190,
			},
			{
				img: "/images/allMenu/drinks/ananasoviu-fresh.jpg",
				name: "Ананасовый фреш",
				weight: "250",
				about: "сок натуральный свежевыжатый.",
				price: 380,
			},
			{
				img: "/images/allMenu/drinks/limonniu-fresh.jpeg",
				name: "Лимонный фреш",
				weight: "250",
				about: "сок натуральный свежевыжатый.",
				price: 190,
			},
			{
				img: "/images/allMenu/drinks/mineralnaya-voda-baykal.png",
				name: 'Мин. вода "Байкал"',
				weight: "530",
				about: "Газированная / Без газа",
				price: 170,
			},
			{
				img: "/images/allMenu/drinks/mineralnaya-voda-narzan.jpg",
				name: 'Мин. вода "Нарзан"',
				weight: "500",
				about: "Натуральная газация",
				price: 150,
			},
			{
				img: "/images/allMenu/drinks/seldereeyeviu-fresh.jpg",
				name: "Сельдереевый фреш",
				weight: "250",
				about: "сок натуральный свежевыжатый.",
				price: 190,
			},
		],
	},
];
