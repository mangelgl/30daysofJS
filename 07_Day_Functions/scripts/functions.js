// Unlimited number of parameters in regular function
​function sumAllNums() {
 console.log(arguments); // Arguments object
}

sumAllNums(1, 2, 3, 4);

// Unlimited number of parameters in arrow function
const sumAllNums1 = (...args) => {
 /* console.log(arguments), arguments object not found in arrow function
 instead we use a parameter followed by spread operator (...) */
 console.log(args);
}
sumAllNums1(1, 2, 3, 4);
// [1, 2, 3, 4]

const sumAllNums2 = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
}

console.log(sumAllNums2(1, 2, 3, 4)); // 10
console.log(sumAllNums2(10, 20, 13, 40, 10));  // 93
console.log(sumAllNums2(15, 20, 30, 25, 10, 33, 40));  // 173

// Anonymous function
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  );
}

// Function expression
const square = function(n) {
  return n * n
}
  
console.log(square(2)); // -> 4

// Self-invoking functions
(function(n) {
  console.log(n * n);
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
let squaredNum = (function(n) {
  return n * n;
})(10)
  
console.log(squaredNum);

// Arrow function
const square1 = n => {
    return n * n
}
  
console.log(square1(2))  // -> 4
  
// if we have only one line in the code block, it can be written as follows, explicit return
const square2 = n => n * n  // -> 4


const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

// const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

