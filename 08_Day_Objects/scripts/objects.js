/*
Scope can be:
    - Global
    - Local
*/

//scope.js
let a = "JavaScript"; // is a global scope it will be found anywhere
let b = 10; // is a global scope it will be found anywhere

// Function scope
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  let value = false;

  // Block scope
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block: Local scope
    let a = "Python";
    let b = 20;
    let c = 30;
    let d = 40;
    value = !value;
    console.log(a, b, c, value); // Python 20 30 true
  }

  // we can not access c because c's scope is only the if block
  console.log(a, b, value); // JavaScript 10 true
}

letsLearnScope();
console.log(a, b); // JavaScript 10, accessible
/**
 * ----------------------------------------------------
 */

function letsLearnScope1() {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3

/**
 * Creating an empty object
 */
const car = {};

/**
 * Creating an object with values
 */
const person = {
  firstName: "Asabeneh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS"],
  title: "teacher",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};

/**
 * Getting values from an object, 2 methods
 */
console.log(person.age);
console.log(person["city"]);

/**
 * Creating object methods
 */

const person1 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB", "Python", "D3.js"],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person1.getFullName());
// Asabeneh Yetayeh

/**
 * Setting new key for an object
 */
person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = false;
person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};

console.log(person.getPersonInfo());

/**
 * Object methods
 * Copy an object using
 * Object.assign
 */
const copyPerson = Object.assign({}, person);
console.log(copyPerson);

/**
 * Getting object keys using
 * Object.keys
 */
const keys = Object.keys(copyPerson);
console.log(keys); //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pobox', 'city']

/**
 * Getting object values using
 * Object.values
 */
const values = Object.values(copyPerson);
console.log(values);

/**
 * Getting object keys and values using
 * Objects.entries
 */
const entries = Object.entries(copyPerson);
console.log(entries);

/**
 * Check if a property or a key exist using
 * Object.hasOwnProperty
 */
console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("score"));
