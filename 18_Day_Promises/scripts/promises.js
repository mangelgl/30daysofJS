/**
 * Promises
 * Una promesa en JavaScript es una manera de manejar operaciones asíncronas.
 * Permite manejadores con el valor de éxito eventual de una acción asíncrona o motivo de fallo.
 * Eso permite a los métodos asíncronos devolver valores como metodos síncronos; en lugar de devolver
 * inmediatamente el valor final, los métodos asíncronos devuelven una promesa para suministrar el valor en
 * cualquier punto en el futuro.
 *
 * Una promesa está en uno de estos estados
 *
 * pendiente -> estado inicial
 * cumplida -> la operación se completó satisfactoriamente
 * rechazada -> la operación falló
 */

/**
 * Callbacks
 */
//Callback
const doSomething = (callback) => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JS"];
        callback("It did not go well", skills);
        // callback(false, skills)
    }, 2000);
};

const callback = (err, result) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
};

doSomething(callback);
// after 2 seconds it will print: It did not go well

// callback(false, skills)
// after 2 seconds it will print the skills: ["HTML", "CSS", "JS"]

/**
 * Promise constructor
 * La función callback de la promesa tiene dos parámetros que son las funciones resolve y reject.
 */
// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JS"];
        if (skills.length > 0) {
            resolve(skills);
        } else {
            reject("Something wrong has happened");
        }
    }, 2000);
});

doPromise
    // resolve() method
    .then((result) => {
        console.log(result);
    })
    // reject() method
    .catch((error) => console.log(error));

// ["HTML", "CSS", "JS"]
// Si el condicionante if() da fallo, se ejecuta el método reject (catch())

/**
 * Fetch API
 * La API Fetch provee una interfaz para traerse recursos (incluyendo a través de la red).
 * Similar a XMLHttpRequest, pero la nueva API provee un conjunto de herramientas mas poderosas y flexibles.
 */
const url = "https://restcountries.com/v2/all"; // countries api: url hacia la api
fetch(url)
    .then((response) => response.json()) // accessing the API data as JSON
    .then((data) => {
        // getting the data
        console.log(data);
    })
    .catch((error) => console.error(error)); // handling error if something wrong happens

/**
 * Async and Await
 * Async y await es una manera elegante de manejar promesas. Fácil de entender y de escribir.
 */
const square = async function (n) {
    return n * n;
};

square(2); // Promise {<resolved>: 4}
/**
 * La palabra async delante de una función significa que esta función devolverá una promesa.
 */
/**
 * ¿Cómo accedemos al valor desde la promesa? Para acceder al valor usamos la palabra clave await.
 */
// const value = await square(2);
// console.log(value); // 4
