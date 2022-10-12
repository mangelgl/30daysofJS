/**
 * JavaScript is an object oriented programming language. Everything in JavScript is an object, with its properties and methods.
 */
// Definir una clase
class Person {
    // Constructor de la clase - Valores por defecto
    constructor(firstName, lastName, age, country = "Finland", city = "Helsinki") {
        console.log(this); // Check the output from here
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    }
    // Class methods
    getFullName() {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
    getPersonInfo() {
        let fullName = this.getFullName();
        let skills =
            this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(", ") + ` and ${this.skills[this.skills.length - 1]}`;
        let formattedSkills = skills ? `He knows ${skills}` : "";

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
        return info;
    }
    /**
     * getters
     */
    get getScore() {
        return this.score;
    }
    get getSkills() {
        return this.skills;
    }
    /**
     * setters
     */
    set setScore(score) {
        this.score += score;
    }
    set setSkill(skill) {
        this.skills.push(skill);
    }
    /**
     * static method
     * The static methods are methods which can be used as utility functions.
     */
    static favoriteSkill() {
        const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
        const index = Math.floor(Math.random() * skills.length);
        return skills[index];
    }
    static showDateTime() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let dateMonthYear = date + "." + month + "." + year;
        let time = hours + ":" + minutes;
        let fullTime = dateMonthYear + " " + time;
        return fullTime;
    }
}

// Instanciar una clase
const person = new Person();
const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
const person2 = new Person("Lidiya", "Tekle");
const person3 = new Person("Abraham", "Yetayeh");

console.log(person); // Person {firstName: undefined, lastName:undefined}
console.log(person1); // Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
console.log(person2); // Person {firstName: "Lidiya", lastName: "Tekle"}
console.log(person3); // Person {firstName: "Abraham", lastName: "Yetayeh"}
console.log(person1.getFullName());
console.log(person2.getFullName());

/* 
console.log(person1.score) // 0
console.log(person2.score) // 0
console.log(person1.skills) // []
console.log(person2.skills) // [] 
*/
person1.setScore = 1;
person1.setSkill = "HTML";
person1.setSkill = "CSS";
person1.setSkill = "JavaScript";

person2.setScore = 1;
person2.setSkill = "Planning";
person2.setSkill = "Managing";
person2.setSkill = "Organizing";

// We do not need parenthesis to call a getter method
console.log(person1.getScore);
console.log(person2.getScore);
console.log(person1.getSkills);
console.log(person2.getSkills);

// Al no ser un método getter, necesitamos paréntesis
console.log(person1.getPersonInfo());
console.log(person2.getPersonInfo());

console.log(Person.favoriteSkill());
console.log(Person.showDateTime());

/**
 * Herencias / Inheritance
 * Usando herencia podemos acceder a las propiedades y métodos del padre.
 * Esto reduce la repetición de código.
 */
class Student extends Person {
    saySomething() {
        console.log("I am a child of the person class");
    }
}

const s1 = new Student("Asabeneh", "Yetayeh", "Finland", 250, "Helsinki");
console.log(s1); // Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
console.log(s1.saySomething()); // I am a child of the person class
console.log(s1.getFullName()); // Asabeneh Yetayeh
console.log(s1.getPersonInfo()); // Asabeneh Yetayeh is Finland. He lives Helsinki, 250.

/**
 * Overriding methods
 */
console.group("Overriding methods");
class StudentOverriding extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city);
        this.gender = gender;
    }

    saySomething() {
        console.log("I am a child of the person class");
    }
    getPersonInfo() {
        let fullName = this.getFullName();
        let skills =
            this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(", ") + ` and ${this.skills[this.skills.length - 1]}`;

        let formattedSkills = skills ? `He knows ${skills}` : "";
        let pronoun = this.gender == "Male" ? "He" : "She";

        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
        return info;
    }
}

const s1Overriding = new StudentOverriding("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki", "Male");
const s2Overriding = new StudentOverriding("Lidiya", "Tekle", 28, "Finland", "Helsinki", "Female");
s1Overriding.setScore = 1;
s1Overriding.setSkill = "HTML";
s1Overriding.setSkill = "CSS";
s1Overriding.setSkill = "JavaScript";

s2Overriding.setScore = 1;
s2Overriding.setSkill = "Planning";
s2Overriding.setSkill = "Managing";
s2Overriding.setSkill = "Organizing";

console.log(s1Overriding);

console.log(s1Overriding.saySomething());
console.log(s1Overriding.getFullName());
console.log(s1Overriding.getPersonInfo());

console.log(s2Overriding.saySomething());
console.log(s2Overriding.getFullName());
console.log(s2Overriding.getPersonInfo());
/**
 * Now, the getPersonInfo method has been overridden and it identifies if the person is male or female.
 */
console.groupEnd();
