/*
Enlace: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/03_Day_Booleans_operators_date/03_booleans_operators_date.md
*/

console.log("Ejercicios nivel 1");
let firstName = "Miguel Ángel",
  lastName = "García",
  country = "Spain",
  city = "Seville",
  age = 22,
  isMarried = false,
  year = 1999;
console.log("1 -> declare variables");
console.log("2 ->", typeof "10" == 10);
console.log("3 ->", parseFloat("9.8") == 10);
let a = 5,
  b = 9,
  c = 0;
console.log("4.1 ->", a > c, b > a + c, a < b);
console.log("4.2 ->", c > b, a < c, b + a == c);
const now = new Date();
let getYear = now.getYear(),
  getMonth = now.getMonth() + 1,
  getMonthDay = now.getDate(),
  getHours = now.getHours(),
  getMinutes = now.getMinutes(),
  getMiliSeconds = now.getTime();
let getDateToday = `${getMonthDay}/${getMonth}/${getYear}`;
console.log("7.1 ->", getYear);
console.log("7.2 ->", getMonth);
console.log("7.3 ->", getDateToday);
console.log("7.4 ->", getMonthDay);
console.log("7.5 ->", getHours);
console.log("7.6 ->", getMinutes);
console.log("7.7 ->", getMiliSeconds);
