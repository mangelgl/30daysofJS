/**
 * Functions
 */
const resetContent = () => {
    let content = document.getElementById("contentContainer"),
        childs = content.childNodes;
    console.log(childs);
    for (const child of childs) {
        console.log(child);
        contentContainer.removeChild(child);
    }
};

const validarInput = () => {
    console.log("validar");
};

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

inputTag.setAttribute("placeholder", "Mass in Kilogram");
selectTag.id = "planetsSelect";
button.textContent = "Calculate weight";

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
let contentContainer = document.createElement("div"),
    planetContainer = document.createElement("div"),
    infoContainer = document.createElement("div");

contentContainer.id = "contentContainer";
planetContainer.id = "planet";
infoContainer.id = "info";

divContent.appendChild(contentContainer);

/**
 * EventListener
 */
button.addEventListener("click", () => {
    resetContent();
    //console.log("click");
    let image = document.createElement("img"),
        selectValue = selectTag.options[selectTag.selectedIndex].value,
        info = document.createElement("p"),
        br = document.createElement("br");

    br.style.clear = "both";

    contentContainer.appendChild(planetContainer);
    contentContainer.appendChild(infoContainer);
    contentContainer.appendChild(br);

    image.setAttribute("src", `images/${selectValue}.png`);
    image.setAttribute("alt", `${selectValue} planet`);
    planetContainer.appendChild(image);

    info.textContent = "Info planeta";
    infoContainer.appendChild(info);
});

/**
 * Hacer:
 * Función para resetear el content
 * Comprobar que el valor del select sea correcto
 * Validación de input
 */

/**
 * Styles
 */
document.body.style.backgroundImage = "url(images/galaxy.gif)";
document.body.style.color = "white";

// Titulo
divTitulo.style.textAlign = "center";
divTitulo.style.marginBottom = "100px";

// Buscador
divBuscador.style.textAlign = "center";
divBuscador.style.marginBottom = "15px";
inputTag.style.marginRight = "10px";
selectTag.style.marginRight = "10px";

// Content
divContent.style.width = "70%";
divContent.style.margin = "auto";
divContent.style.backgroundColor = "gray";
divContent.style.opacity = "50%";
divContent.style.overflow = "hidden";

planetContainer.style.width = "49%";
planetContainer.style.margin = "0px";
planetContainer.style.padding = "0px";
planetContainer.style.float = "left";

infoContainer.style.width = "49%";
infoContainer.style.margin = "0px";
infoContainer.style.padding = "0px";
infoContainer.style.float = "left";
