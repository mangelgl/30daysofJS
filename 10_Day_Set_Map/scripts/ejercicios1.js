/**
 * 1.create an empty set
 * 2.Create a set containing 0 to 10 using loop
 * 3.Remove an element from a set
 * 4.Clear a set
 * 5.Create a set of 5 string elements from array
 * 6.Create a map of countries and number of characters of a country
 */
console.log("Ejercicios nivel 1");
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries1 = ["Finland", "Sweden", "Norway"];
// Ejercicio 1
const ej1 = new Set();
// Ejercicio 2
const numbers = new Set();
for (let i = 0; i < 10; i++) {
    numbers.add(i);
}
console.log(numbers);
// Ejercicio 3
numbers.delete(0);
console.log(numbers);
// Ejercicio 4
numbers.clear();
console.log(numbers);
// Ejercicio 5
const arr = ["Charmander", "Squirtle", "Bulbasaur", "Pikachu", "Mewtwo"];
const ej5 = new Set(arr);
console.log(ej5);
// Ejercicio 6
const ej6 = new Map();
countries1.forEach((element) => {
    ej6.set(element, element.length);
});
console.log(ej6);
/**
 * Find a union b
 * Find a intersection b
 * Find a with b
 */
console.log("Ejercicios nivel 2");
// Ejercicio 1
const c = [...a, ...b];
const cMap = new Set(c);
console.log(cMap);
// Ejercicio 2
const B = new Set(b);
const d = a.filter((num) => B.has(num));
const dMap = new Set(d);
console.log(d);
// Ejercicio 3
const e = a.filter((num) => !B.has(num));
const eMap = new Set(e);
console.log(e);
