/**
 * JSON
 * JSON significa Notación de Objetos JavaScript / JavaScript Object Notation.
 * El formato es texto o cadena de texto solo.
 * Es un formato de datos ligero para almacenar y transportar datos.
 * Mayormente es usado para enviar datos desde un server a un cliente.
 * Alternativa fácil de utilizar a XML
 */

/**
 * Example below
 */

/*
{
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
*/

/**
 * Converting JSON to JavaScript Object
 * En su mayoría de casos, obtenemos datos JSON de una respuesta HTTP o de un fichero
 * pero podemos almacenar el JSON en una cadena de texto y podemos cambiarlo a un objeto.
 */

/**
 * En JavaScript la palabra clave JSON tiene
 * parse()
 * stringify()
 * métodos.
 * Cuando queremos cambiar el JSON a un objeto analizamos el JSON usando JSON.parse().
 * Cuando queremos cambiar el objeto a JSON usamos JSON.stringify().
 */
const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`;

const usersObj = JSON.parse(usersText, undefined, 4);
console.log(usersObj);

/**
 * Usando una función reviver con JSON.parse()
 * Para usar la función reviver como formateador, ponemos las llaves que queremos para formatear los valores.
 */
const usersText1 = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`;

const usersObj1 = JSON.parse(usersText1, (key, value) => {
    let newValue = typeof value == "string" && key != "email" ? value.toUpperCase() : value;
    return newValue;
});
console.log(usersObj1);

/**
 * Converting Object to JSON
 * JSON.stringify(): Require un parámetro obligatorio y dos opcionales.
 * El replacer es usado como filtro, y el space como indentaciones.
 * JSON.stringify(obj, replacer, space)
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

const txt = JSON.stringify(users, undefined, 4);
console.log(txt); // text means JSON- because json is a string form of an object.

/**
 * Usando un array de filtrado con JSON.stringify()
 * Usamos el parámetro replacer como filtro
 */
const user = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    country: "Finland",
    city: "Helsinki",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
    age: 250,
    isLoggedIn: false,
    points: 30,
};

const txt1 = JSON.stringify(user, ["firstName", "lastName", "country", "city", "age"], 4);
console.log(txt1);
