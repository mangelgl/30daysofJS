/*
Enlace: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/06_Day_Loops/06_day_loops.md#exercises-level-1
*/
console.log("Ejercicios nivel 1");
let ejercicio1 = "";
for (let index = 0; index < 11; index++) {
  ejercicio1 += `${index} `;
}
/* let index = 0;
while (index <= 10) {
  ejercicio1 += `${index} `;
  index++;
}
do {
  ejercicio1 += `${index} `;
  index++;
} while (index <= 10); */
console.log(ejercicio1);
console.log("Ejercicio 2 es igual pero al reves");

// Ejercicio 3
/* let n = Number(prompt("¿Hasta qué numero quieres iterar?")),
  ejercicio3 = "";
for (let i = 0; i <= n; i++) {
  ejercicio3 += `${i} `;
}
console.log(ejercicio3); */

console.log("Ejercicio 4");
for (let i = 1; i <= 7; i++) {
  let ejercicio4 = "";
  for (let j = 0; j < i; j++) {
    ejercicio4 += "#";
  }
  console.log(ejercicio4);
}

// Ejercicio 5
for (let i = 0; i < 11; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// Ejercicio 6
for (let i = 0; i < 11; i++) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`);
}

// Ejercicio 7
let ejercicio7 = "";
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    continue;
  }
  ejercicio7 += `${i} `;
}
console.log(ejercicio7);

// Ejercicio 10
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// Ejercicio 11
let sumEven = 0,
  sumOdds = 0,
  arraySums = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven += i;
  } else {
    sumOdds += i;
  }
}
arraySums.push(sumEven, sumOdds);
console.log(`The sum of all even numbers from 0 to 100 is ${sumEven}. And the sum of all odds number is ${sumOdds}`);
console.log(arraySums);

/**
 * Generate an array of five random numbers between 0 and 10
 * @returns {array} a number array
 */
function generateArray() {
  let arr = [];
  while (arr.length != 5) {
    let random = generateRandomNumber(10);
    arr.push(random);
  }
  return arr;
}

/**
 * Generate an array of five unique random numbers between 0 and 10
 * @returns {array} a unique number array
 */
function generateUniqueArray() {
  let arr = [];
  while (arr.length != 5) {
    let random = generateRandomNumber(10);
    if (arr.includes(random, 0)) {
      continue;
    }
    arr.push(random);
  }

  return arr;
}

/**
 * Generate a random number
 * @param num final number to stop generate
 * @returns {Number} random number
 */
function generateRandomNumber(num) {
  return Math.floor(Math.random() * Number(num) + 1);
}

/**
 * Genera un carácter random
 * @returns {string} carácter random
 */
function generateRandomCharacter() {
  let pattern = "abcdefghijklmnñopqrstuvwxyzabcdefghijklmnñopqrstuvwxyz0123456789";
  return pattern[Math.floor(Math.random() * pattern.length + 1)];
}

/**
 * Genera un ID aleatorio de 6 caracteres
 * @returns {string} ID
 */
function generateID() {
  let id = "";
  while (id.length != 6) {
    id += generateRandomCharacter();
  }
  return id;
}

console.log(generateArray());
console.log(generateUniqueArray());
console.log(generateID());
