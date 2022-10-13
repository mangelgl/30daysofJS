/**
 * HTML5 Web Storage // Almacenamiento web
 * Web Storage (sessionStorage y localStorage) es una nueva API de HTML5 que ofrece
 * importantes beneficios en lugar de las cookies tradicionales. Antes de HTML5,
 * los datos de aplicaciones tenían que ser almacenadas en cookies, incluidas en cada petición al servidor.
 *
 * Web Storage es más seguro, y puede almacenar localmente grandes montones de datos, sin afectar al
 * rendimiento de la página. El límite de almacenamiento de datos de las cookies en muchos navegadores
 * es sobre 4KB por cookie. WStorages pueden almacenar datos mucho más grandes (casi 5MB) y nunca son
 * transferidos al servidor. Todos los sitios desde el mismo o un origen pueden almacenar y acceder a la misma información.
 */

/**
 * Se puede acceder a la información almacenada usando JavaScript, que te da la capacidad de aprovechar las secuencias
 * de comandos del lado del cliente para hacer bastantes cosas que han envuelto tradicionalmente a la programación
 * de lado del servidor y bases de datos relacionales. 
 * Estos son dos objetos Web Storages:
    - sessionStorage
    - localStorage
 * localStorage es similar a sessionStorage, excepto que mientras la información se almacena en localStorage no tiene
    tiempo de expiración, la información almacenada en sessionStorage se limpia cuando la sesión de la página termina.
 * Debería ser anotado que la información almacenada en cualquiera de los dos objetos es específica al protocolo de la página.
 * Las llaves y valores son siempre cadenas de texto.
 */
console.log("Application tab -> Storage -> Local & Session Storage");

/**
 * sessionStorage
 * Solo está disponible dentro de la pestaña del navegador o la sessión de la ventana (window).
 * Está diseñada para almacenar información en una sola sesión de la pagina web.
 * Esto significa que si la ventana es cerrada, la ínformación de sesión será eliminada.
 */

/**
 * localStorage
 * La información estará disponible en el navegador incluso despues que se cierre. Es mantenida
 * incluso entre sesiones de navegador. Esto significa que la información todavía está disponible cuando
 * el navegador es cerrado y reabierto, y también entre pestañas y ventanas.
 *
 * La información Web Storage, en ambos casos, no está disponible entre diferentes navegadores.
 * Por ejemplo, los objetos creados en Firefox no pueden ser accedidos en IE, como las cookies.
 */

/**
 * Hay cinco métodos para trabajar en el almacenamiento local:
 * setItem()
 * getItem()
 * removeItem()
 * clear()
 * key()
 */

/**
 * Algunos casos para el almacenamiento web son:
 *
 * almacenar información temporalmente
 *
 * guardar productos que el usuario guarda en el carrito de la compra
 *
 * la información puede estar disponible entre peticiones de páginas, multiples pestañas de navegador y
 * también entre sesiones de navegador usando localStorage
 *
 * puede ser usada completamente offline usando localStorage
 *
 * El almacenamiento web puede tener un gran rendimiento cuando información estática es almacenada en el cliente para minimizar el numero de peticiones.
 * Incluso imágenes pueden ser almacenadas en cadenas de texto usando encriptación Base64
 *
 * puede ser usada como método de autenticación de usuarios
 *
 *
 * Para los ejemplos anteriores, tiene sentido usar almacenamiento local.
 * Quizás se debe estar preguntando cuándo deberíamos usar almacenamiento de sesión.
 *
 * En algunos casos, queremos deshacernos de los datos tan pronto como se cierre la ventana.
 * O, quizás, si no queremos que la aplicación interfiera con la misma aplicación que está abierta en otra ventana.
 * Estos escenarios se sirven mejor con sessionStorage.
 */

/**
 * Estableciendo un elemento para el almacenamiento local
 * Será almacenado como una cadena de texto string.
 * Si almacenamos un array o un objeto deberíamos usar el método stringify() primero para no perder la estructura.
 */

/**
 * Storing string in a localStorage
 */
localStorage.setItem("firstName", "Asabeneh"); // since the value is string we do not stringify it
console.log(localStorage); // Storage {firstName: 'Asabeneh', length: 1}

/**
 * Storing number in a localStorage
 */
localStorage.setItem("age", 200);
console.log(localStorage); //  Storage {age: '200', firstName: 'Asabeneh', length: 2}

/**
 * Storing an array in a localStorage
 */

//Skills array has to be stringified first to keep the format.
let skills = [
    { tech: "HTML", level: 10 },
    { tech: "CSS", level: 9 },
    { tech: "JS", level: 8 },
    { tech: "React", level: 9 },
    { tech: "Redux", level: 10 },
    { tech: "Node", level: 8 },
    { tech: "MongoDB", level: 8 },
];

let skillJSON = JSON.stringify(skills);
localStorage.setItem("skills", skillJSON);

/**
 * Storing an object in a localStorage
 */
const user = {
    firstName: "Asabeneh",
    age: 250,
    skills: ["HTML", "CSS", "JS", "React"],
};

const userText = JSON.stringify(user, undefined, 4);
localStorage.setItem("user", userText);

/**
 * Getting item from a localStorage
 */
let getFirstName = localStorage.getItem("firstName");
let getAge = localStorage.getItem("age");
let getSkills = localStorage.getItem("skills");
console.log(getFirstName, getAge, getSkills);

// JSON.parse() para devolver la variable skill a un array normal
let skillsObj = JSON.parse(getSkills, undefined, 4);
console.log(skillsObj);

/**
 * Clearing the localStorage
 */
localStorage.clear();
