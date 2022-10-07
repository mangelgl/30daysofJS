/**
 * Create an empty object called dog
 * Print the the dog object on the console
 * Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
 * Get name, legs, color, age and bark value from the dog object
 * Set new properties the dog object: breed, getDogInfo
 */

console.log("Ejercicios nivel 1");
// Ejercicio 1
const dog = {};

// Ejercicio 2
console.log(dog);

// Ejercicio 3
dog.name = "Firulais";
dog.legs = 4;
dog.color = "brown";
dog.age = 2;
dog.bark = function () {
  return "woof woof";
};

// Ejercicio 4
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());

// Ejercicio 5
dog.breed = true;
dog.getDogInfo = function () {
  return `Name:${this.name}.\n${this.name} has ${this.legs} legs.\nHe is ${this.color} color.\n${this.name} is ${this.age} years old.\nCan he breed?: ${this.breed}.`;
};

console.log(dog.getDogInfo());
