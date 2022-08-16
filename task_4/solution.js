// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data;
	data = JSON.parse(json);
	let products;
	products = data.products;
	return data.products;
}
function renderProductsCards(json){
	clearProducts();
	let productsCards;
	productsCards = parseProducts(json);
let length;
length = productsCards.length;
for (let i = 0; i < length; i += 1) {
	addProduct (productsCards[i]);
 }
}
// Напишите функцию renderProductsCards(json)
// Аргументом функции является JSON
// Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
// Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
// Запишите в переменную length значение свойства products.length
// Напишите цикл, в котором перебираете все products от 0 до (length - 1)
// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
