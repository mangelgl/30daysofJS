/**
 * Higher Order Functions
 * Higher order functions are functions which take other function as a parameter or return a function as a value.
 * The function passed as a parameter is called callback.
 */

/**
 * Callback
 * Un callback es una función que puede ser pasada como parámetro a otra función. Vea el ejemplo más abajo.
 */
// El nombre de la función puede ser cualquiera; callback, saySomething, doSomething...
const elevarAlCuadrado = (n) => {
    return n ** 2;
};

// Función que toma otra función como callback
function cube(elevarAlCuadrado, n) {
    return elevarAlCuadrado(n) * n;
}

console.log(cube(elevarAlCuadrado, 3)); // 27

/**
 * Returning function
 * Función de Higher Order (Orden superior) que devuelve otra función
 */
const higherOrder = (n) => {
    const doSomething = (m) => {
        const doWhatEver = (t) => {
            return 2 * n + 3 * m + t;
        };
        return doWhatEver;
    };
    return doSomething;
};
console.log(higherOrder(2)(3)(10)); // 23

/**
 * Veamos dónde usamos funciones callback. El método forEach usa un callback
 */

const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
    let sum = 0;
    const callback = function (element) {
        sum += element;
    };
    arr.forEach(callback);
    return sum;
};
console.log(sumArray(numbers)); // 15

/**
 * Ejemplo anterior simplificado
 */
const numbersSimplificado = [1, 2, 3, 4];

const sumArraySimplificado = (arr) => {
    let sum = 0;
    arr.forEach(function (element) {
        sum += element;
    });
    return sum;
};
console.log(sumArraySimplificado(numbersSimplificado));

/**
 * Setting time
 * En JS podemos ejecutar algunas actividades en un intervalo de tiempo
 * o podemos esperar un tiempo para ejecutar alguna actividad.
 */

/**
 * Setting Interval using a setInterval function
 * El parámetro de duración se especifica en milisegundos (ms)
 * y el callback siempre será llamado en este intervalo de tiempo.
 */
function sayHello() {
    console.log("Hello");
}

// Imprime "Hello" cada segundo, 1000ms es 1 segundo
//setInterval(sayHello, 1000);

/**
 * Setting a time using a setTimeout
 * El parámetro de duración se especifica en milisegundos (ms)
 * y el callback siempre será llamado en este intervalo de tiempo.
 */
function sayBye() {
    console.log("Bye");
}
// Imprime "Bye" tras esperar 2 segundos
//setTimeout(sayBye, 2000);

/**
 * FUNCTIONAL PROGRAMMING
 * En vez de escribir bucles normales, la últ. versión de JS trae
 * métodos incorporados que nos pueden ayudar a resolver problemas complicados.
 * Todos estos métodos toman un callback como parámetro. Los métodos son:
 * forEach, map, filter, reduce, find, every, some y sort.
 */

/**
 * forEach
 * Sólo se usa con arrays. Toma como parámetro una función callback,
 * el index y el propio array. Estos dos últimos son opcionales.
 */
let sum = 0;
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach((num) => (sum += num));

console.log(sum); // 15

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries.forEach((element) => console.log(element.toUpperCase()));

/**
 * map
 * Itera y modifica arrays. Toma como parámetro una función callback,
 * index y el array y devuelve un nuevo array. Devuelve un array con
 * los resultados.
 */
const numbers2 = [1, 2, 3, 4, 5];
const numbersSquare = numbers2.map((num) => num * num);

console.log(numbersSquare); // [1,4,9,14,25]

/**
 * filter
 * Filtra elementos que contienen las condiciones de filtrado
 * y devuelve un nuevo array.
 */
const countriesContainingLand = countries.filter((country) => country.includes("land"));
console.log(countriesContainingLand); // ["Finland", "Iceland"]

/**
 * reduce
 * Toma como parámetro una función callback. La función callback toma como parámetro
 * acumulador, valor actual y opcionalmente valor inicial y devuelve un solo valor.
 * Es una buena práctica definir un valor inicial para el valor acumulador.
 * Si no especificamos este parámetro, por defecto el acumulador tomará el primer
 * valor del array. Si el array está vacío, entonces saltará un error.
 */
const numbers3 = [1, 2, 3, 4, 5];
const sum1 = numbers3.reduce((acc, cur) => acc + cur, 0);

console.log(sum1); // 15

/**
 * every
 * Comprueba si todos los elementos son similares en un aspecto.
 * Devuelve un booleano.
 */
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = names.every((name) => typeof name === "string"); // Are all strings?

console.log(areAllStr); // true

/**
 * find
 * Devuelve el primer elemento que pasa la condición
 */
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 26);

console.log(age); // 32

/**
 * findIndex
 * Devuelve el primer index del elemento que pasa la condición
 */
const names1 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const ages1 = [24, 22, 25, 32, 35, 18];

const result = names1.findIndex((name) => name.length > 7);
console.log(result); // 0

const age1 = ages1.findIndex((age) => age < 20);
console.log(age1); // 5

/**
 * some
 * Comprueba si algunos de los elementos son similares en un aspecto.
 * Devuelve un booleano.
 */
const names2 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const bools = [true, true, true, true];

const areSomeTrue = bools.some((b) => b === true);

console.log(areSomeTrue); //true

/**
 * sort
 * Modifica el array original. Es recomendable copiar
 * el array original antes de usar el método sort.
 */

/**
 * Sorting string values
 */
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array is also sorted

/**
 * Sorting numeric values
 * Como podemos ver en el ejemplo, el número 100 está el primero al ordenarlo
 * de manera ascendente. El método sort convierte los elementos a tipo String.
 * Para evitar esto usamos una callback function dentro del método sort.
 */
const numbers4 = [9.81, 3.14, 100, 37];
// Usar el método sort para ordernar elementos de tipo número devuelve un error.
// Orden ascendente
numbers4.sort(function (a, b) {
    return a - b;
});

console.log(numbers4); // [3.14, 9.81, 37, 100]

// Orden descendente
numbers4.sort(function (a, b) {
    return b - a;
});
console.log(numbers4); //[100, 37, 9.81, 3.14]

/**
 * Sorting object arrays
 * Usamos la key para comparar
 */
const users = [
    { name: "Asabeneh", age: 150 },
    { name: "Brook", age: 50 },
    { name: "Eyob", age: 100 },
    { name: "Elias", age: 22 },
];

users.sort((a, b) => {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
});
console.log(users); // sorted ascending
