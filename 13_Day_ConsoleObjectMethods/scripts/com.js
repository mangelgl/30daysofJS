/**
 * Console.log
 */
console.log("30 Days of JavaScript");
console.log("%d %s of JavaScript", 30, "Days");
console.log("%c30 Days Of JavaScript", "color:green"); // log output is green
console.log("%c30 Days%c %cOf%c %cJavaScript%c", "color:green", "", "color:red", "", "color:yellow"); // log output green red and yellow text

/**
 * Console.warn
 * Warnings
 */
console.warn("This is a warning");
console.warn("You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!");
console.warn("Warning is different from error");

/**
 * Console.error
 * Error messages
 */
console.error("This is an error message");
console.error("We all make mistakes");

/**
 * Console.table
 */
const user = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
};
console.table(user);
const names = ["Asabeneh", "Brook", "David", "John"];
console.table(names);
const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];
console.table(countries);
const users = [
    {
        name: "Asabeneh",
        title: "Programmer",
        country: "Finland",
        city: "Helsinki",
        age: 250,
    },
    {
        name: "Eyob",
        title: "Teacher",
        country: "Sweden",
        city: "London",
        age: 25,
    },
    {
        name: "Asab",
        title: "Instructor",
        country: "Norway",
        city: "Oslo",
        age: 22,
    },
    {
        name: "Matias",
        title: "Developer",
        country: "Denmark",
        city: "Copenhagen",
        age: 28,
    },
];
console.table(users);

/**
 * Console.time
 * Crea un temporizador con un nombre único. Cuando llamas a la función console.timeEnd(nombre) termina el temporizador y muestra el tiempo
 */
console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
    console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
    console.log(name, city);
});
console.timeEnd("forEach loop");

/**
 * Console.info
 */
console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");

/**
 * Console.assert
 * Si la condición es false, escribe un mensaje en la consola
 */
for (let i = 0; i <= 10; i += 1) {
    let errorMessage = `${i} is not even`;
    console.log("the # is " + i);
    console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
}

/**
 * Console.group
 */
console.group("Names");
console.log(names);
console.groupEnd();

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("Users");
console.log(user);
console.log(users);
console.groupEnd();

/**
 * Console.count()
 */
const func = () => {
    console.count("Function has been called");
};
func();
func();
func();

/**
 * Console.clear
 * Borra la consola
 */
// console.clear();
