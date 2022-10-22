/**
 * Creating an element
 */
let parrafo = document.createElement("p");
parrafo.textContent = "Texto dentro del párrafo";

/**
 * Appending child to a parent element
 */
// Añade el párrafo al body
document.body.appendChild(parrafo);

/**
 * Remove child from a parent node
 */
const ul = document.querySelector("ul");
const lists = document.querySelectorAll("li");
for (const list of lists) {
    ul.removeChild(list);
}

/** Better way */
ul.innerHTML = "";
