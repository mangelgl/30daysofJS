/**
 * Find the person who has many skills in the users object.
 * Count logged in users, count users having greater than equal to 50 points from the following object.
 * Find people who are MERN stack developer from the users object
 * Set your name in the users object without modifying the original users object
 * Get all keys or properties of users object
 * Get all the values of users object
 * Use the countries object to print a country name, capital, populations and languages.
 */
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
let usersCopy = Object.entries(users);

// Ejercicio 1
function getSkills(person) {
  let usersK = Object.keys(users),
    i;
  switch (person) {
    case usersK[0]:
      i = 0;
      break;
    case usersK[1]:
      i = 1;
      break;
    case usersK[2]:
      i = 2;
      break;
    case usersK[3]:
      i = 3;
      break;
    case usersK[4]:
      i = 4;
      break;
    case usersK[5]:
      i = 5;
      break;
    case usersK[6]:
      i = 6;
      break;

    default:
      break;
  }
  let personObject = usersCopy[i][1],
    skills = personObject.skills;
  return skills;
}

function getPersonWithManySkills() {
  let personWithManySkills = "";
  // Recorre cada uno de los arrays de persona
  for (let i = 0; i < usersCopy.length; i++) {
    // Recorre cada array internamente
    for (let j = 0; j < usersCopy[i].length; j++) {
      let personObject = usersCopy[i][j],
        skills = getSkills(usersCopy[i][0]),
        skillsCount = personWithManySkills.length > 0 ? personWithManySkills.split(";")[1] : 0;
      if (typeof personObject === "object") {
        if (skills.length > skillsCount) {
          personWithManySkills = usersCopy[i][0] + ";" + skills.length;
        }
      }
      continue;
    }
  }
  return `${personWithManySkills.split(";")[0]} is the person with more skills, with ${personWithManySkills.split(";")[1]}`;
}
console.log(getPersonWithManySkills());

// Ejercicio 2
function getPersonWithMostPoints() {
  let names = "";
  for (let i = 0; i < usersCopy.length; i++) {
    // Recorre cada array internamente
    for (let j = 0; j < usersCopy[i].length; j++) {
      let personObject = usersCopy[i][j],
        points = personObject.points;
      if (points >= 50) {
        names += usersCopy[i][0] + ";";
      }
    }
  }
  namesArr = names.split(";");
  return `${namesArr.splice(0, namesArr.length - 2).join(", ")}, and ${namesArr.splice(namesArr.length - 2)[0]} are the persons with points >= 50`;
}
console.log(getPersonWithMostPoints());

// Ejercicio 3
function getMernStackDevelopers() {
  let mernDevelopers = "";
  for (let i = 0; i < usersCopy.length; i++) {
    // Recorre cada array internamente
    for (let j = 1; j < usersCopy[i].length; j++) {
      let personObject = usersCopy[i][j],
        skills = getSkills(usersCopy[i][0]);
      if (skills.includes("MongoDB") && skills.includes("Express") && skills.includes("React") && skills.includes("Node")) {
        mernDevelopers += usersCopy[i][0] + ";";
      }
    }
  }
  namesArr = mernDevelopers.split(";");
  console.log(namesArr);
  return `${namesArr.splice(0, namesArr.length - 2).join(", ")}, and ${namesArr.splice(namesArr.length - 2)[0]} are MERN stack developers`;
}
console.log(getMernStackDevelopers());

// Ejercicio 4

// Ejercicio 5
console.log(Object.entries(users));

// Ejercicio 6
console.log(Object.values(users));
