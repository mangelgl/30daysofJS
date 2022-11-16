/**
 * Event Listeners
 * Podemos añadir métodos de escucha de eventos a cualquier objeto del DOM.
 * Se utiliza el método addEventListener() para escuchar diferentes tipos de
 * eventos en elementos HTML.
 *
 * El método addEventListener() toma dos parámetros, un event listener y una función callback.
 */
selectedElement.addEventListener("eventlistener", function (e) {
    // the activity you want to occur after the event will be in here
});
// or

selectedElement.addEventListener("eventlistener", (e) => {
    // the activity you want to occur after the event will be in here
});

/**
 * Tipos
 *
 * click, onclick, double click, mouse enter
 */
const button = document.querySelector("button");
button.addEventListener("click", (e) => {
    console.log("e gives the event listener object:", e);
    console.log("e.target gives the selected element: ", e.target);
    console.log("e.target.textContent gives content of selected element: ", e.target.textContent);
});

// OR
let otraForma = '<button onclick="clickMe()">Click Me</button>';
const clickMe = () => {
    alert("We can attach event on HTML element");
};

/**
 * Click: click (cuando se pulsa el elemento)
 * Double click: dblclick (cuando se pulsa el elemento dos veces)
 * Mouse enter: mouseenter (cuando el puntero del ratón entra en el elemento)
 * Mouse leave: mouseleave (cuando el puntero del ratón sale del elemento)
 * Mouse move: mousemove (cuando el puntero del ratón se mueve en el elemento)
 * Mouse over: mouseover (cuando el puntero del ratón se mueve en el elemento)
 * Mouse out: mouseout (cuando el puntero del ratón sale del elemento)
 * Input: input (cuando un valor se introduce en el elemento)
 * Change: change (cuando un valor se cambia en el elemento)
 * Blur: blur (cuando el elemento no está enfocado)
 * Key down: keydown (cuando una tecla está pulsada)
 * Key up: keyup (cuando una tecla no está pulsada)
 * Key press: keypress (cuando presionamos una tecla)
 * On load: onload (cuando el navegador termina de cargar una página)
 */

/**
 * Getting value from an input element
 */
const mass = document.querySelector("#mass"); // Input element
let massValue = mass.value; // Input value

/** Input event and CHANGE */
const input = document.querySelector("input");
const p = document.querySelector("p");

// Se añade al párrafo lo que se introduce en el input
input.addEventListener("input", (e) => {
    p.textContent = e.target.value;
});

/** Blur */
input.addEventListener("blur", (e) => {
    p.textContent = "Field is required";
    p.style.color = "red";
});

/** Keys */
document.body.addEventListener("keypress", (e) => {
    alert(e.keyCode);
});
