/**
 * Functions
 */
const resetContent = () => {
    let childs = document.getElementById("contentContainer").childNodes;
    if (document.getElementById("contentContainer").childNodes[0].id == "mass") {
        for (let i = 0; i < childs.length; i++) {
            let parent = childs[i].parentNode;
            parent.removeChild(childs[i]);
        }
    } else {
        let filasAntiguas = tablaPlaneta.querySelectorAll("tr");
        for (const fila of filasAntiguas) {
            tablaPlaneta.removeChild(fila);
        }
    }
};

const generarFilas = () => {
    let fila = document.createElement("tr"),
        numeroColumnas = 2,
        filasArr = [];

    for (let i = 0; i < numeroColumnas; i++) {
        let columna = document.createElement("td"),
            image = document.createElement("img"),
            infoContainer = document.createElement("div"),
            infoText = document.createElement("p");
        nombrePlaneta = selectTag.options[selectTag.selectedIndex].value;

        image.setAttribute("src", `images/${nombrePlaneta}.png`);
        image.setAttribute("alt", `${nombrePlaneta} planet`);

        infoContainer.id = "infoContainer";
        infoText.textContent = "INFORMACIÓN PLANETA";
        infoContainer.appendChild(infoText);
        infoContainer.style.width = "fit-content";
        infoContainer.style.padding = "10px";

        if (i == 0) {
            columna.appendChild(image);
            columna.id = "planetImage";
            columna.style.width = "40%";
            columna.style.padding = "50px";
        } else {
            columna.appendChild(infoContainer);
            columna.id = "planetInfo";
            columna.style.width = "60%";
            columna.style.textAlign = "center";
        }
        fila.appendChild(columna);
    }

    filasArr.push(fila);
    return filasArr;
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
inputTag.id = "inputTag";
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
    massContainer = document.createElement("div"),
    tablaPlaneta = document.createElement("table");

contentContainer.id = "contentContainer";
tablaPlaneta.id = "tablaPlaneta";
massContainer.id = "mass";
massContainer.innerHTML = '<p style="margin: 0px; color: white; font-size: 28px;">Mass is required</p>';

divContent.appendChild(contentContainer);
contentContainer.appendChild(massContainer);

/**
 * Styles
 */
document.body.style.backgroundImage = "url(images/galaxy.gif)";
document.body.style.color = "white";
document.body.style.fontFamily = "Source Sans Pro";

// Titulo
divTitulo.style.textAlign = "center";
divTitulo.style.margin = "50px auto";

// Buscador
divBuscador.style.textAlign = "center";
divBuscador.style.margin = "20px auto";

inputTag.style.marginRight = "10px";
inputTag.style.width = "200px";
inputTag.style.padding = "10px";

selectTag.style.marginRight = "10px";
selectTag.style.padding = "10px";
selectTag.style.borderRadius = "4px";

button.style.padding = "10px";

// Content
divContent.style.width = "70%";
divContent.style.height = "auto";
divContent.style.margin = "auto";
divContent.style.backgroundColor = "rgba(111, 111, 111, 0.3)";
/* divContent.style.opacity = "0.3"; */
divContent.style.overflow = "hidden";

massContainer.style.width = "30%";
massContainer.style.padding = "20px";
massContainer.style.textAlign = "center";
massContainer.style.margin = "25px auto";
massContainer.style.backgroundColor = "rgba(92, 92, 92, 0.6)";

tablaPlaneta.style.width = "100%";
tablaPlaneta.style.margin = "0px";
tablaPlaneta.style.padding = "0px";

/**
 * EventListener
 */
button.addEventListener("click", () => {
    resetContent();

    contentContainer.appendChild(tablaPlaneta);
    let filas = generarFilas();
    filas.forEach((fila) => {
        tablaPlaneta.appendChild(fila);
    });
    //console.log("click");
    /*     let image = document.createElement("img"),
        info = document.createElement("p"),
        br = document.createElement("br"),
        selectValue = selectTag.options[selectTag.selectedIndex].value;

    image.setAttribute("src", `images/${selectValue}.png`);
    image.setAttribute("alt", `${selectValue} planet`);
    info.textContent = "Info planeta"; */

    /*     planetContainer.appendChild(image);
    infoContainer.appendChild(info); */
    /*     contentContainer.appendChild(image);
    contentContainer.appendChild(info);
    contentContainer.appendChild(br);

    contentContainer.style.minHeight = "600px";
    contentContainer.style.height = "600px";
    info.style.display = "table-cell";
    info.style.verticalAlign = "middle";
    br.style.clear = "both"; */
});
