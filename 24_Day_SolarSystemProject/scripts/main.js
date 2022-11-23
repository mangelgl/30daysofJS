/**
 * Body Styles
 */
document.body.style.backgroundImage = "url(images/galaxy.gif)";
document.body.style.color = "white";

/**
 * Containers: titulo, buscador y content
 */
let divContainer = document.createElement("div"),
    divTitulo = document.createElement("div"),
    divBuscador = document.createElement("div"),
    divContent = document.createElement("div");

divContainer.id = "container";
divContainer.setAttribute("style", "width: 100%; margin: auto;");
document.body.appendChild(divContainer);

divTitulo.id = "titulo";
divBuscador.id = "buscador";
divContent.id = "content";

divContainer.appendChild(divTitulo);
divContainer.appendChild(divBuscador);
divContainer.appendChild(divContent);

/**
 * Titulo container
 */
let titulo = document.createElement("h1");
titulo.textContent = "Calculate a weigth of an object on a planet";

divTitulo.appendChild(titulo);

/**
 * Buscador container
 */
let inputTag = document.createElement("input"),
    selectTag = document.createElement("select"),
    button = document.createElement("button"),
    planetsArr = ["earth", "jupiter", "mars", "mercury", "moon", "neptune", "pluto", "saturn", "uranus", "venus"];

button.textContent = "Calculate weight";
inputTag.setAttribute("placeholder", "Mass in Kilogram");

divBuscador.appendChild(inputTag);
divBuscador.appendChild(selectTag);
divBuscador.appendChild(button);

let defaultOption = document.createElement("option");
defaultOption.setAttribute("value", "default");
defaultOption.setAttribute("selected", "selected");
defaultOption.textContent = "--select planet--";
selectTag.appendChild(defaultOption);
for (const planet of planetsArr) {
    let option = document.createElement("option");
    option.setAttribute("value", planet);
    option.textContent = planet.toUpperCase();
    selectTag.appendChild(option);
}

/**
 * Content container
 */
let contentContainer = document.createElement("div");
contentContainer.id = "contentContainer";
divContent.appendChild(contentContainer);
