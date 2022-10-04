console.log("Ejercicios nivel 2");
// 1. Import another JS file
// Exercise 2
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.",
  pattern = /[^\W][\w]*/g,
  words = text.match(pattern);
console.log("2 ->", words);

// Exercise 3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
/*
- add 'Meat' in the beginning of your shopping cart if it has not been already added
- add Sugar at the end of you shopping cart if it has not been already added
- remove 'Honey' if you are allergic to honey
- modify Tea to 'Green Tea'
*/
let addMeat = shoppingCart.includes("Meat")
  ? console.log("3.1 -> Meat has already added")
  : console.log("3.1 ->", shoppingCart.unshift("Meat"), shoppingCart);
console.log(addMeat);

let addSugar = shoppingCart.includes("Sugar")
  ? console.log("3.2 -> Sugar has already added")
  : console.log("3.2 ->", shoppingCart.push("Sugar"), shoppingCart);
console.log(addSugar);

let isAllergic = true,
  removeIfAllergic = isAllergic ? shoppingCart.splice(shoppingCart.indexOf("Honey"), 1) : null;
console.log("3.3 ->", removeIfAllergic, shoppingCart);

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log("3.4 ->", shoppingCart);

// Exercise 4 and 5
/*
In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
If it does not exist add to the countries list.

In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
If it does not exist add Sass to the array and print the array.
*/

// Exercise 6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
