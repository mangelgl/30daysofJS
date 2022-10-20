/**
 * DOM (Document Object Model)
 *
 * El documento HTML está estructurado como un objeto JavaScript. Cada elemento HTML tiene diferentes propiedades que pueden ayudar a manipularlos.
 * Es posible obtener, crear, añadir o borrar elementos HMTL usando JavaScript.
 *
 * Seleccionar elementos HTML con JavaScript es similar a CSS. Para seleccionarlos usamos el nombre de la etiqueta, id, clase u otros atributos.
 */

/**
 * Obteniendo el elemento
 */

/** Getting elements by tag name */
const allTitles = document.getElementsByTagName("h1");
console.log(allTitles);
console.log(allTitles.length);

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]);
}

/** Getting elements by class name */
const allTitles1 = document.getElementsByClassName("titulo");

/** Getting elements by id */
const primerTitulo = document.getElementById("primer-titulo");
console.log(primerTitulo);

/**
 * Getting elements by using querySelector methods
 * querySelector: selecciona solo el primer elemento
 * querySelectorAll: selecciona todos los elementos. Puede usarse for o foreach para iterar los elementos
 */
/*
let firstTitle = document.querySelector('h1') // select the first available h1 element
let firstTitle = document.querySelector('#first-title') // select id with first-title
let firstTitle = document.querySelector('.title') // select the first available element with class title
*/

/**
 * Adding attribute
 */
const titles = document.querySelectorAll("h1");
titles[3].setAttribute("class", "titulo");
titles[3].setAttribute("id", "cuarto-titulo");

/** Añadir atributo sin setAttribute() */
// Otra manera de establecer atributos
/*
titles[3].className = 'titulo'
titles[3].id = 'cuarto-titulo'
*/

/** Añadir clase usando classList */
// Otra manera de establecer un atributo, añade la clase, no sobreescribe
titles[3].classList.add("title", "header-title");

/** Quitar clase usando remove */
titles[3].classList.remove("title", "header-title");

/**
 * Añadir texto a un elemento HTML
 */

/** Añadir contenido de texto usando textContent */
titles[3].textContent = "Fourth Title";

/** Añadir contenido de texto usando innerHTML (puede añadir elementos HTML o elementos como hijos) */
const lists = `
    <li>30DaysOfPython Challenge Done</li>
    <li>30DaysOfJavaScript Challenge Ongoing</li>
    <li>30DaysOfReact Challenge Coming</li>
    <li>30DaysOfFullStack Challenge Coming</li>
    <li>30DaysOfDataAnalysis Challenge Coming</li>
    <li>30DaysOfReactNative Challenge Coming</li>
    <li>30DaysOfMachineLearning Challenge Coming</li>`;
const ul = document.getElementById("segunda-lista");
ul.innerHTML = lists;

/** También podemos eliminar todos los hijos de un elemento padre con innerHTML */

/**
 * Añadiendo estilos
 */
titles.forEach((title, i) => {
    // Cambiar tamaño de letra
    title.style.fontSize = "24px"; // all titles will have 24px font size
    if (i % 2 === 0) {
        // Cambiar color de fuente
        title.style.color = "green";
        // Cambiar color de fondo
        title.style.backgroundColor = "red";
    } else {
        title.style.color = "red";
        title.style.backgroundColor = "green";
    }
});
