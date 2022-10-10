/**
 * Destructuring and Spread
 * Destructuring es una manera de desempaquetar arrays y objetos
 * y asignarlos a una variable distinta.
 */

/**
 * Desestructurando arrays
 */
const numbers = [1, 2, 3];
const names = ["Asabeneh", "Brook", "David", "John"];
const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
];

let [numOne, numTwo, numThree] = numbers;
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
const [frontEnd, backEnd] = fullStack;

console.log(numOne, numTwo, numThree); // 1 2 3
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson); // Asabeneh Brook David John
console.log(e, pi, gravity, bodyTemp, boilingTemp); // 2.72 3.14 9.81 37 100
console.log(frontEnd); // ["HTML", "CSS", "JS", "React"]
console.log(backEnd); // ["Node", "Express", "MongoDB"]

/**
 * Si queremos skipear un valor, usamos una coma adicional
 */
let [numOne1, , numThree1] = numbers; //2 is omitted
let [, secondPerson1, , fourthPerson1] = names; // first and third person is omitted
const names1 = [undefined, "Brook", "David"];
let [firstPerson2 = "Asabeneh", secondPerson2, thirdPerson2, fourthPerson2 = "John"] = names1;

console.log(firstPerson2, secondPerson2, thirdPerson2, fourthPerson2); // Asabeneh Brook David John

/**
 * Podemos asignar varios valores a una variable
 */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3); // 1 2 3
console.log(rest); // [4, 5, 6, 7, 8, 9, 10]

/**
 * Destructurando durante iteraciones
 */
const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
    console.log(country, city);
}
/* Finland Helsinki
Sweden Stockholm
Norway Oslo */

const fullStack1 = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
];

for (const [first, second, third] of fullStack1) {
    console.log(first, second, third);
}
/* HTML CSS JS
Node Express MongoDB */

/**
 * Desestructurando objetos
 */
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
};
let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter); // 20 10 200 undefined

/**
 * Renombrando durante la desestructuración
 */
const rectangle1 = {
    width: 20,
    height: 10,
    area: 200,
};
let { width: w, height: h, area: a, perimeter: p } = rectangle1;

console.log(w, h, a, p); // 20 10 200 undefined

/**
 * Default values during renaming
 */
const rectangle2 = {
    width: 20,
    height: 10,
    area: 200,
};
let { width1, height1, area1, perimeter1 = 60 } = rectangle2;

console.log(width, height, area, perimeter); //20 10 200 60

/**
 * Desestructurando llaves como parámetros de función. Vamos a crear una función
 * que toma un objeto rectangulo y devuelve el perimetro del rectangulo
 */

/**
 * Parámetro objeto sin desestructuración
 */
// Without destructuring
const rect = {
    width: 20,
    height: 10,
};
const calculatePerimeter = (rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect)); // 60

/**
 * Parámetro objeto con desestructuración
 */

const calculatePerimeter1 = ({ width, height }) => {
    return 2 * (width + height);
};

console.log(calculatePerimeter1(rect)); // 60

// Let us create a function which give information about the person object with destructuring
const getPersonInfo = ({ firstName, lastName, age, country, job, skills, languages }) => {
    const formattedSkills = skills.slice(0, -1).join(", ");
    const formattedLanguages = languages.slice(0, -1).join(", ");

    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
        skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

    return personInfo;
};
console.log(getPersonInfo(person));
/*
  Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer.
  He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js.
  He speaks Amharic, English and a little bit of Suomi(Finnish)
  */

/**
 * Desestructurando objetos durante iteraciones
 */
const todoList = [
    {
        task: "Prepare JS Test",
        time: "4/1/2020 8:30",
        completed: true,
    },
    {
        task: "Give JS Test",
        time: "4/1/2020 10:00",
        completed: false,
    },
    {
        task: "Assess Test Result",
        time: "4/1/2020 1:00",
        completed: false,
    },
];

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed);
}
/* Prepare JS Test 4/1/2020 8:30 true
Give JS Test 4/1/2020 10:00 false
Assess Test Result 4/1/2020 1:00 false */

/**
 * Spread or Rest Operator
 * Cuando se desestructura un array usamos el operador spread (...)
 * para conseguir el resto de elementos del array. A parte de esto,
 * usamos el operador spread para propagar elementos a otro array
 */

/**
 * Operador spread para conseguir resto de elementos del array
 */
const nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num11, num21, num31, ...rest1] = nums4;

console.log(num11, num21, num31); // 1 2 3
console.log(rest1); // [4, 5, 6, 7, 8, 9, 10]

/**
 * Operador spread para copiar un array
 */
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers); // [0, 2, 4, 6, 8, 10]
console.log(oddNumbers); // [1, 3, 5, 7, 9]
console.log(wholeNumbers); // [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

/**
 * Operador spread para copiar un objeto
 */
const user = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
};

const copiedUser = { ...user };
console.log(copiedUser); // {name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}

/**
 * Modificar o cambiar el objeto mientras el copiado
 */
const user1 = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
};

const copiedUser1 = { ...user1, title: "instructor" };
console.log(copiedUser1); // {name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}

/**
 * Operador spread con función flecha
 */

const sumAllNums = (...args) => {
    console.log(args);
};

sumAllNums(1, 2, 3, 4, 5);
