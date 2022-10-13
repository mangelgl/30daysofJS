const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
    firstName: "Asabeneh",
    lastName: "Yetayehe",
    age: 250,
    isMarried: true,
    skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
console.group("Ejercicios nivel 1");
/**
 * 1.Change skills array to JSON using JSON.stringify()
 */
let skillsJSON = JSON.stringify(skills, undefined);
console.log(typeof skillsJSON, skillsJSON);
/**
 * 2.Stringify the age variable
 */
let ageJSON = JSON.stringify(age, undefined);
console.log(typeof ageJSON, ageJSON);
/**
 * 3.Stringify the isMarried variable
 */
let isMarriedJSON = JSON.stringify(isMarried, undefined);
console.log(typeof isMarriedJSON, isMarriedJSON);
/**
 * 4.Stringify the student object
 */
let studentJSON = JSON.stringify(student, undefined);
console.log(typeof studentJSON, studentJSON);
console.groupEnd();

console.group("Ejercicios nivel 2");
/**
 * 1. Stringify the students object with only firstName, lastName and skills properties
 */
let studentsJSON1 = JSON.stringify(student, ["firstName", "lastName", "skills"]);
console.log(typeof studentsJSON1, studentsJSON1);
console.groupEnd();

console.group("Ejercicios nivel 3");
/**
 * 1.Parse the txt JSON to object.
 */
let txtObj = JSON.parse(txt, undefined, 4);
console.log(typeof txtObj, txtObj);
/**
 * 2.Find the user who has many skills from the variable stored in txt.
 */
let txtObjKeys = Object.values(txtObj);
let userWithManySkills = txtObjKeys
    .sort((a, b) => {
        if (a.skills.length > b.skills.length) return -1;
        if (a.skills.length > b.skills.length) return 1;
        return 0;
    })
    .filter((el, index) => (index === 0 ? el : false));
console.log(typeof userWithManySkills, userWithManySkills);
console.groupEnd();
