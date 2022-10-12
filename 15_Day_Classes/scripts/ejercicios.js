console.group("Ejercicios nivel 1");
/**
 * Create an Animal class. The class will have name, age, color, legs properties and create different methods
 */
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    get getName() {
        return this.name;
    }
    set setAge(age) {
        this.age = age;
    }
    getAnimalInfo() {
        return `El nombre del animal es ${this.name} y tiene ${this.age} años. Tiene ${this.legs} patas y es de color ${this.color}.`;
    }
}
/**
 * Create a Dog and Cat child class from the Animal Class.
 */
class Dog extends Animal {
    saySomething() {
        return "woof woof";
    }
    getAnimalInfo() {
        return `El nombre del perro es ${this.name} y tiene ${this.age} años. Tiene ${this.legs} patas y es de color ${this.color}.`;
    }
}
class Cat extends Animal {
    saySomething() {
        return "miau miau";
    }
    getAnimalInfo() {
        return `El nombre del gato es ${this.name} y tiene ${this.age} años. Tiene ${this.legs} patas y es de color ${this.color}.`;
    }
}
console.log("Hecho");
console.groupEnd();

console.group("Ejercicios nivel 2");
/**
 * Override the method you create in Animal class
 */
const animal = new Animal("Nombre", 5, "Negro", 4),
    dog = new Dog("Nombre", 5, "Negro", 4),
    cat = new Cat("Nombre", 5, "Negro", 4);
console.log(animal.getAnimalInfo());
console.log(dog.getAnimalInfo());
console.log(cat.getAnimalInfo());
console.groupEnd();

console.group("Ejercicios nivel 3");
console.groupEnd();
