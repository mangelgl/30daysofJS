console.group("Ejercicios nivel 1");
/**
 * Store you first name, last name, age, country, city in your browser localStorage.
 */
localStorage.setItem("firstName", "Miguel Ángel");
localStorage.setItem("lastName", "García López");
localStorage.setItem("age", 22);
localStorage.setItem("country", "Spain");
localStorage.setItem("city", "Sanlúcar la Mayor");
console.log(localStorage);
console.groupEnd();

console.group("Ejercicios nivel 2");
/**
 * Create a student object.
 * The student object will have first name, last name, age, skills, country,
 * enrolled keys and values for the keys.
 * Store the student object in your browser localStorage.
 */
let studentObj = {
    firstName: "Miguel Ángel",
    lastName: "García López",
    age: 22,
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Python", "ScritpCase", "Laravel", "Symfony"],
    country: "Spain",
};
let studentObjString = JSON.stringify(studentObj, undefined, 4);
localStorage.setItem("studentObject", studentObjString);
console.log(localStorage);
console.groupEnd();
