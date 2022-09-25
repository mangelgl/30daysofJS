/**
 * BOOLEANS
 */
/*
Truthy values:
    - All string except an empty string
    - Boolean true
    - All numbers (positive and negative) except zero

Falsy values:
    - 0
    - 0n
    - null
    - undefined
    - NaN
    - Boolean false
    - An empty string
*/

// Undefined
let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet

// Null
let empty = null;
console.log(empty); // -> null , means no value

/**
 * OPERATORS
    - Assignment operators -> =, +=, -=, *=, /=, %=, **=
    - Arithmetic operators -> +, -, *, /, %, **
    - Comparison operators -> ==, ===, !=, >, <, >=, <=
    - Logical operators -> &&, ||, !
    - Increment Operator -> Pre-increment ++count, Post-increment count++
    - Decrement Operator -> Pre-decrement --count, Post-decrement count--
    - Ternary Operator -> let isRaining = (isRaining == "si") ? console.log("Llueve") : console.log("No llueve")
    - Operator Precedence -> Some operators have precedence against others
 */

/**
 * WINDOW METHODS
    - alert()
    - confirm() -> const agree = confirm('Are you sure you like to delete? ')
    - prompt() -> let number = prompt('Enter number', 'number goes here')
 */

/**
 * DATE OBJECT
    - getFullYear() -> 2020
    - getMonth(): Get month as a number 0-11 -> 0
    - getDate() -> 4
    - getHours() -> 0
    - getMinutes() -> 56
    - getSeconds() -> 41
    - getMiliseconds() -> 341
    - getTime(): miliseconds since January 1, 1970 -> 1578095631
    - getDay(): weekday as a number 0-6 -> 6
 */

const now = new Date();
console.log(now); // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
console.log(now.getFullYear()); // 2020
console.log(now.getMonth()); // 0, because the month is January,  month(0-11)
console.log(now.getDate()); // 4, because the day of the month is 4th,  day(1-31)
console.log(now.getDay()); // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
console.log(now.getHours()); // 0, because the time is 00:56:41
console.log(now.getMinutes()); // 56, because the time is 00:56:41
console.log(now.getSeconds()); // 41, because the time is 00:56:41

// Get time
// 1. Using getTime()
console.log(now.getTime()); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

// 2. Using Date.now()
const allSeconds = Date.now(); //
console.log(allSeconds); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true

// Formatting these values to a human readable time format
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56
