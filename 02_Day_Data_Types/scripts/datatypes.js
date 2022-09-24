/*
TIPOS DE DATOS:
    - PRIMITIVOS
        * Números
        * Strings
        * Booleanos
        * Null
        * Undefined
    - NO PRIMITIVOS
        * Objetos
        * Funciones
        * Matrices

Los tipos de datos PRIMITIVOS son inmutables, es decir, una vez se crean no se pueden modificar.
*/
let word = "Javascript";
word[0] = "Y";
console.log(word);

// Comparar valores PRIMITIVOS
let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // Verdadero

let js = "JavaScript";
let py = "Python";

console.log(js == py); // Falso

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // Falso

// Los tipos de datos NO PRIMITIVOS sí son mutables, es decir, una vez creados SÍ se pueden modificar.
let nums = [1, 2, 3];
nums[0] = 10;

console.log(nums); // [10, 2, 3]

// Comparar valores NO PRIMITIVOS
let nums1 = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums1 == numbers); // Falso

let usuarioUno = {
  nombre: "Asabeneh",
  papel: "teaching",
  pais: "Finland",
};

let usuarioDos = {
  nombre: "Asabeneh",
  papel: "teaching",
  pais: "Finland",
};

console.log(usuarioUno == usuarioDos); // Falso

// Tipo número
console.log("Tipo número");
// Declaración de tipos de datos numéricos
let edad = 35;
const gravedad = 9.81; // usamos const para valores que no cambian, constante gravitacional en m/s2
let masa = 72; // masa en Kilogramo
const PI = 3.14; // pi una constante geométrica

// Más ejemplos
const boilingPoint = 100; // temperatura en oC, punto de ebullición del agua que es una constante
const bodyTemp = 37; // oC la temperatura corporal promedio del ser humano, que es una constante

console.log(edad, gravedad, masa, PI, boilingPoint, bodyTemp);

// Objeto matemático Math
const MATHPI = Math.PI;
console.log(MATHPI); // 3.141592653589793

// Redondeo al número más cercano
// si es superior a 0,5 hacia arriba si es inferior a 0,5 redondeo hacia abajo

console.log(Math.round(MATHPI)); // 3 para redondear valores al número más cercano
console.log(Math.round(9.81)); // 10
console.log(Math.floor(MATHPI)); // 3 redondeando hacia abajo
console.log(Math.ceil(MATHPI)); // 4 redondeando hacia arriba

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, devuelve el valor mínimo
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, devuelve el valor máximo

const randNum = Math.random(); // crea un número aleatorio entre 0 y 0,999999
console.log(randNum);

// Vamos a crear un número aleatorio entre 0 y 10

const num = Math.floor(Math.random() * 11); // crea un número aleatorio entre 0 y 10
console.log(num);

//Valor absoluto
console.log(Math.abs(-10)); // 10

//Raíz cuadrada
console.log(Math.sqrt(100)); // 10
console.log(Math.sqrt(2)); // 1.4142135623730951

// Potencias
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logaritmo
// Devuelve el logaritmo natural con base E de x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Devuelve el logaritmo natural de 2 y 10 respectivamente
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometría
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);

// Número aleatorio del 0 al 10
let randomNum = Math.random(); //  0 a 0.999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // esto da: min 0 y max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // esto da entre 0 y 10

// Tipo String
console.log("Tipo String");

let espacio = " "; // una cadena de espacio vacío
let primerNombre = "Asabeneh";
let apellido = "Yetayeh";
let pais = "Finland";
let ciudad = "Helsinki";
let idioma = "JavaScript";
let trabajo = "maestra";
let cita = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotConBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

// Concatenación
let nombreCompleto = primerNombre + espacio + apellido; // concatenación, fusionando dos cadenas juntas.
console.log(nombreCompleto);
// Cadenas literales largas. Podemos usar el carácter de barra invertida (\) para seguir en la línea siguiente.
const parrafo =
  "Mi nombre es Asabeneh Yetayeh. Vivo en Finlandia, Helsinki.\
Soy profesora y me encanta enseñar. Enseño HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis y D3.js para cualquier persona interesada en aprender. \
A fines de 2019, estaba pensando en expandir mi enseñanza y llegar a \
a la audiencia global y comencé un desafío de Python del 20 de noviembre al 19 de diciembre.\
Fue una de las experiencias más gratificantes e inspiradoras.\
Ahora, estamos en 2020. Disfruto preparando el desafío 30DaysOfJavaScript y \
Espero que tú también estés disfrutando.";

console.log(parrafo);
// Secuencias de escape en cadenas
/*
\n -> nueva línea
\t -> tabulador, 8 espacios
\' -> una frase
\" -> comillas dobles ""
*/
console.log(
  "Espero que todos estén disfrutando el desafío de 30 días de JavaScript.¿Y tú?"
); // salto de línea
console.log("Días\ttemasEjercicios");
console.log("Día 1\t3\t5");
console.log("Día 2\t3\t5");
console.log("Día 3\t3\t5");
console.log("Día 4\t3\t5");
console.log("Este es un símbolo de barra invertida (\\)"); // Para escribir una barra invertida
console.log(
  'En todos los lenguajes de programación comienza con "¡Hola, mundo!"'
);
console.log(
  "En todos los lenguajes de programación comienza con '¡Hola, mundo!'"
);
console.log("El dicho 'Ver para creer' no es correcto en 2022");

// Literales de plantilla. IMPORTANTE LAS COMILLAS DE RETROCESO
console.log(`La suma de 2 y 3 es 5`); // escribiendo estáticamente los datos
let a = 2;
let b = 3;
console.log(`La suma de ${a} y ${b} es ${a + b}`); // inyectando los datos dinámicamente
console.log(`${a} es mayor que ${b}: ${a > b}`);

let personaInfoDos = `Soy ${nombreCompleto}. Tengo ${edad} años. Vivo en ${pais}.`; //ES6 - Método de interpolación de cadenas
let personaInfoTres = `Soy ${nombreCompleto}. Vivo en ${ciudad}, ${pais}. Soy una ${trabajo}. Enseño ${idioma}.`;
console.log(personaInfoDos);
console.log(personaInfoTres);

// MÉTODOS DE STRING
/**
 * longitud -> string.length
 * acceder a los caracteres de una cadena -> string[0]
 * mayúscula -> string.toUpperCase()
 * minúscula -> string.toLowerCase()
 * substring -> string.substring(indice_inicial, indice_final)
 * dividir cadena -> string.split(caracter)
 * eliminar espacios -> string.trim()
 * comprobar si existe un argumento en una cadena -> string.includes(string)
 * reemplazo -> string.replace(oldstring, newstring)
 * devuelve valor del índice -> string.charAt(string)
 * devuelve valor ASCII del índice -> string.charCodeAt(string)
 * toma una subcadena y si existe devuelve el índice inicial, sino devuelve -1 -> string.indexOf(string)
 * same, but devuelve índice final -> string.lastIndexOf(string)
 * une cadenas -> string.concat(string)
 * verifica que empiece la cadena con el string -> string.starsWith(string)
 * verifica que finalice la cadena con el string -> string.endsWith(string)
 * busca subcadenas y devuelve el índice de la primera coincidencia -> string.search(string)
 * busca y devuelve una matriz o nulo -> string.match(pattern)
 * repite la cadena x veces -> string.repeat(x)
 */

let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d+/;

// d con carácter de escape significa que d no es una d normal sino que actúa como un dígito
// + significa uno o más dígitos,
// si hay g después de eso, significa global, busque en todas partes.

console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]

let string = "love";
console.log(string.repeat(10)); // lovelovelovelovelovelovelovelovelovelove

// Comprobación de tipos de datos
console.log("Comprobación de tipos de datos");

let job; // indefinido, porque no se asignó un valor

console.log(typeof "Asabeneh"); // cadena
console.log(typeof firstName); // cadena
console.log(typeof 10); // numero
console.log(typeof 3.14); // numero
console.log(typeof true); // booleano
console.log(typeof false); // booleano
console.log(typeof NaN); // numero
console.log(typeof job); // indefinido
console.log(typeof undefined); // indefinido
console.log(typeof null); // objeto

// Cambio de String a Integer
let numInt = parseInt(num);
// let numInt = Number(num)
// let numInt = +num
console.log(numInt); // 10

// Cambio de String a Float
let float = "9.81";
let numFloat = parseFloat(num);
// let numFloat = Number(num);
// let numFloat = +num;
console.log(numFloat); // 9.81

// Cambio de Float a Int
let num1 = 9.81;
let numInt1 = parseInt(num1);

console.log(numInt1); // 9
