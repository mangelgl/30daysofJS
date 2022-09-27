/*
Enlace: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/04_Day_Conditionals/04_day_conditionals.md
*/

console.log("Ejercicios nivel 1");
/*
Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:
'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
*/
/* let userAge = Number(prompt("Enter your age: ")),
  diference = 18 - userAge,
  isOldEnough = userAge >= 18 ? "You are old enough to drive" : `You will be allowed to drive in ${diference} years`;
console.log("1 ->", isOldEnough); */
/*
Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the result to console stating who is older (me or you). 
Use prompt(“Enter your age:”) to get the age as input.
*/
/* let myAge = 22;
if (userAge > myAge) {
  console.log(`You are ${userAge - myAge} years older than me`);
} else {
  console.log(`I am ${myAge - userAge} years older than you`);
} */
/*
If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
using if else
ternary operator.
*/
/* let a = 3,
  b = 4,
  isGreater = a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;
console.log("3 -> ternary operator", isGreater);
if (a > b) {
  console.log(`${a} is greather than ${b}`);
} else {
  console.log(`${b} is greather than ${a}`);
} */
/*
Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
*/
/* let number = Number(prompt("Enter a number: ")),
  isEven = number % 2 == 0 ? `${number} is an even number` : `${number} is an odd number`;
console.log("4 ->", isEven); */
