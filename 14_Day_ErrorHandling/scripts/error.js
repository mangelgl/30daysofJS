/**
 * Error handling / Manejo de errores
 */

/**
 * JavaScript es un lenguaje de tipado débil, esto es, las variables no necesitan que se declare su tipo.
 */
try {
    let lastName = "Yetayeh";
    let fullName = fistName + " " + lastName;
} catch (err) {
    console.log("Name of the error", err.name);
    console.log("Error message", err.message);
} finally {
    console.log("In any case I will be executed");
}

/**
 * throw: the throw statement allows us to create a custom error.
 * We can through a string, number, boolean or an object.
 */
/* throw "Error2"; // generates an exception with a string value
throw 42; // generates an exception with the value 42
throw true; // generates an exception with the value true
throw new Error("Required"); // generates an error object with the message of Required */
const throwErrorExampleFun = () => {
    let message;
    let x = prompt("Enter a number: ");
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    } catch (err) {
        console.log(err);
    }
};
//throwErrorExampleFun();

/**
 * Error Types
    - Reference Error: Aparece si usamos una variable que no ha sido declarada.
    - SyntaxError: Error de sintaxis.
    - TypeError: Error de tipado.
 */
