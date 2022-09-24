// INTRODUCCIÓN A LOS TIPOS DE DATOS
/**
 * String
 * Números
 * Booleanos
 * undefined
 * null
 * Symbol
 */

/**
 * String

"Asabeneh"
"Finlandia"
'JavaScript es un hermoso lenguaje de programación'.
"Me encanta enseñar"
"Espero que estés disfrutando del primer día"
`También podemos crear una cadena usando un backtick`
 */

/**
 * Booleanos

true: si la luz está encendida, el valor es true
falso: si la luz está apagada, el valor es Falso
 */

/**
 * Undefined

En JavaScript, si no asignamos un valor a una variable, el valor es indefinido. Además, si una función no devuelve nada, devuelve undefined.

let nombre;
console.log(nombre); //no está definida, porque no está asignada a un valor todavía
 */

/**
 * Null

Null en JavaScript significa un valor vacío/nulo
 */

/*

Para comprobar un tipo de datos, se usa el operador typeof

*/

// Declarando diferentes variables de diferentes tipos de datos
let nombre = "Asabeneh"; // nombre de una persona
let apellido = "Yetayeh"; // apellido de una persona
let pais = "Finland"; // país
let ciudad = "Helsinki"; // ciudad capital
let edad = 100; // edad en años
let estaCasado = true;

console.log(nombre, apellido, pais, ciudad, edad, estaCasado);

// Declarando variables con valores numéricos
const constante = 9.81; // gravedad terrestre en m/s2
const puntoDeEbullicion = 100; // punto de ebullición del agua, temperatura en oC
const PI = 3.14; // constante geométrica

console.log(constante, puntoDeEbullicion, PI);

// Las variables también pueden ser declaradas en una línea separada por una coma
(trabajo = "profesor"), (viveEn = "Finlandia");
// let nombre = string,
//    trabajo = String,
//    viveEn = string
console.log(nombre, trabajo, viveEn);
