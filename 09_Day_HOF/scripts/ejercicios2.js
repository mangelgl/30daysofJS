/**
 * 1.Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
 * 2.Find the sum of price of products using only reduce reduce(callback))
 * 3.Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
 * 4.Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
 * 5.Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
 * 6.Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
 * 7.Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
 */
console.log("Ejercicios nivel 2");
//const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];
// Ejercicio 1
console.log(
    products
        .map((element) => element.price)
        .filter((element) => typeof element == "number")
        .reduce((acc, cur) => acc + cur, 0)
);
// Ejercicio 2
/* console.log(products.reduce((acc, cur) => acc.price + cur.price, 0)); */
// Ejercicio 3
const categorizeCountries = () => {
    return countries.filter((element) => element.languages.includes("Spanish"));
};
console.log(categorizeCountries());
// Ejercicio 4
const countriesStartingWithLetter = (letter) => {
    return countries.filter((element) => element.name[0] === letter.toUpperCase());
};
console.log(countriesStartingWithLetter("a"));
// Ejercicio 5 y 6
const getFirstTenCountries = () => {
    let arr = [];
    //countries.forEach((element, index) => (index <= 9 ? arr.push(element) : false));
    countries.filter((element, index) => (index <= 9 ? arr.push(element) : false));
    //countries.map((element, index) => (index <= 9 ? arr.push(element) : false));
    return arr;
};
const getLastTenCountries = () => {
    let arr = [];
    //countries.forEach((element, index) => (index >= countries.length - 10 ? arr.push(element) : false));
    countries.filter((element, index) => (index >= countries.length - 10 ? arr.push(element) : false));
    //countries.map((element, index) => (index >= countries.length - 10 ? arr.push(element) : false));
    return arr;
};
console.log(getFirstTenCountries());
console.log(getLastTenCountries());
// Ejercicio 7
const letterUsedManyTimes = () => {
    return (countriesName = countries.map((element) => element.name[0]).reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {}));
};
console.log(letterUsedManyTimes());
