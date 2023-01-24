function pizzaOven(crustTypeValue, sauceTypeValue, cheesesValue, toppingsValue) {
    var pizza = {};
    pizza.crustType = crustTypeValue;
    pizza.sauceType = sauceTypeValue;
    pizza.cheeses = cheesesValue;
    pizza.toppings = toppingsValue;
    return pizza;
}

var pizzaTraditional = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizzaMarinara = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizzaEscargotPesto = pizzaOven("thin crust", "pesto", ["baufort"], ["escargot, basilic"]);
var pizzaHawai = pizzaOven("thin crust", "tomato", ["mozzarila"], ["jambon", "ananas"]);

var arrayPizza = [pizzaTraditional, pizzaMarinara, pizzaEscargotPesto, pizzaHawai];
function randomPizza(arr) {
    var index = Math.random();
    index = Math.floor(index * 4);
    return arr[index];
}