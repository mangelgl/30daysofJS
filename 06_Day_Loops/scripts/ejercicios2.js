/*
Enlace: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/06_Day_Loops/06_day_loops.md#exercises-level-1
*/
console.log("Ejercicios nivel 2");
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
function generateID(num) {
  let id = "";
  while (id.length != Number(num)) {
    id += generateRandomCharacter();
  }
  return id;
}
/* let id = generateID(Math.floor(Math.random() * 21) + 10);
console.log(id);
id = null; */

function generateRandomHexNumber() {
  let hex = "#",
    pattern = "0123456789abcdef";
  while (hex.length <= 6) {
    hex += pattern[Math.floor(Math.random() * pattern.length)];
  }
  return hex;
}
/* let hex = generateRandomHexNumber();
console.log(hex);
hex = null; */

function generateRandomRGBNumber() {
  let num1 = Math.floor(Math.random() * 256),
    num2 = Math.floor(Math.random() * 256),
    num3 = Math.floor(Math.random() * 256);
  return `rgb(${num1},${num2},${num3})`;
}
/* let rgb = generateRandomRGBNumber();
console.log(rgb);
rgb = null; */

const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];
const mernStack = ["MongoDB", "Express", "React", "Node"];

let newArr = [],
  newArrLength = [],
  arrOfArr = [];
for (const country of countries) {
  newArr.push(country.toUpperCase());
  newArrLength.push(country.length);
  let temp = [country, country.toUpperCase().substring(0, 3), country.length];
  arrOfArr.push(temp);
}
console.log(newArr, newArrLength, arrOfArr);

function countriesWithLand() {
  let arr = [],
    noLands = true,
    result,
    pattern = /land/g;
  for (const c of countries) {
    if (c.match(pattern)) {
      arr.push(c);
      noLands = false;
    } else {
      noLands = true;
    }
  }
  if (noLands && arr.count == 0) {
    result = "All these countries are without land";
  } else {
    result = arr;
  }
  return result;
}

function countriesEndWith() {
  let arr = [],
    result;
  for (const c of countries) {
    if (c.endsWith("ia", c.length)) {
      arr.push(c);
    }
  }
  if (arr.count == 0) {
    result = "All these countries are not ends with ia";
  } else {
    result = arr;
  }
  return result;
}

function countriesBiggerChar() {
  let result = "";
  for (const c of countries) {
    if (c.length > result.length) {
      result = c;
    }
  }
  return result;
}

function countriesFiveChar() {
  let arr = [];
  for (const c of countries) {
    if (c.length == 5) {
      arr.push(c);
    }
  }
  return arr;
}

console.log(countriesWithLand());
console.log(countriesEndWith());
console.log(countriesBiggerChar());
console.log(countriesFiveChar());

function getLongestWebTech() {
  let result = "";
  for (const wt of webTechs) {
    if (wt.length > result.length) {
      result = wt;
    }
  }
  return result;
}

console.log(getLongestWebTech());

function createArrayWT() {
  let arr = [];
  for (const wt of webTechs) {
    arr.push([wt, wt.length]);
  }
  return arr;
}

console.log(createArrayWT());

function createAcronym() {
  let result = "";
  for (const i of mernStack) {
    result += i.toUpperCase()[0];
  }
  return result;
}

console.log(createAcronym());

let fruitsArr = ["banana", "orange", "mango", "lemon"];
function reverseFruitsArr(arr) {
  let fruitsArr = arr,
    newFruitsArr = [];
  for (const fruit of fruitsArr) {
    newFruitsArr.unshift(fruit);
  }
  return newFruitsArr;
}

console.log(fruitsArr, reverseFruitsArr(fruitsArr));
