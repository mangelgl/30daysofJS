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
            infoText = document.createElement("p"),
            infoSubText = document.createElement("div"),
            nombrePlaneta = selectTag.options[selectTag.selectedIndex].value;

        image.setAttribute("src", `images/${nombrePlaneta}.png`);
        image.setAttribute("alt", `${nombrePlaneta} planet`);

        infoContainer.id = "infoContainer";
        infoText.style.fontSize = "20px";
        infoText.innerHTML = "The weight of the object in <b>" + nombrePlaneta.toUpperCase() + "</b>";
        infoSubText.innerHTML =
            '<p style="margin: 0px; padding: 40px; font-family: Kanit; font-size: 24px; display: table-cell; vertical-align: middle"><b>' +
            calcularPeso(inputTag.value, nombrePlaneta) +
            "N</b></p>";
        infoContainer.appendChild(infoText);
        infoContainer.appendChild(infoSubText);

        infoContainer.style.width = "500px";
        infoContainer.style.padding = "20px";
        infoContainer.style.margin = "0px auto";
        infoContainer.style.backgroundColor = "rgba(92, 92, 92, 0.6)";

        infoSubText.style.width = "140px";
        infoSubText.style.height = "140px";
        infoSubText.style.display = "table";
        infoSubText.style.borderRadius = "50%";
        infoSubText.style.backgroundColor = "rgba(92, 92, 92, 0.3)";
        infoSubText.style.color = "white";
        infoSubText.style.margin = "0px auto";

        if (i == 0) {
            columna.appendChild(image);
            columna.id = "planetImage";
            columna.style.width = "fit-content";
            columna.style.padding = "50px";
        } else {
            columna.appendChild(infoContainer);
            columna.id = "planetInfo";
            columna.style.width = "50%";
            columna.style.textAlign = "center";
        }
        fila.appendChild(columna);
    }

    filasArr.push(fila);
    return filasArr;
};

const validarInput = (input) => {
    let erroresValidacion = [];
    if (input.length == 0) {
        erroresValidacion.push({ code: 0, message: "Introduce un valor para generar números." });
    } else if (isNaN(input)) {
        erroresValidacion.push({ code: 1, message: "El valor que se introduzca debe ser un número." });
    }

    return erroresValidacion;
};

/**
 * Calcula el peso de un objeto en un determinado planeta multiplicando la masa en kg por la fuerza de gravedad de dicho planeta
 * @param {int} peso masa en kg
 * @param {string} planeta nombre del planeta
 */
const calcularPeso = (peso, planeta) => {
    let newton = 9.8066,
        gravedad,
        gravedadTierra = 9.8,
        result;

    switch (planeta) {
        case "earth":
            result = peso;
            break;
        case "jupiter":
            gravedad = 24.79;
            result = (gravedad * peso) / gravedadTierra;
            break;
        case "mars":
            gravedad = 3.7;
            result = (gravedad * peso) / gravedadTierra;
            break;
        case "mercury":
            gravedad = 3.7;
            result = (gravedad * peso) / gravedadTierra;
            break;
        case "moon":
            gravedad = 1.62;
            result = (gravedad * peso) / gravedadTierra;
            break;
        case "neptune":
            gravedad = 11.15;
            result = (gravedad * peso) / gravedadTierra;
            break;
        case "pluto":
            gravedad = 0.62;
            result = (gravedad * peso) / gravedadTierra;
            break;
        case "saturn":
            gravedad = 10.44;
            result = (gravedad * peso) / gravedadTierra;
            break;
        case "uranus":
            gravedad = 8.87;
            result = (gravedad * peso) / gravedadTierra;
            break;
        case "venus":
            gravedad = 8.87;
            result = (gravedad * peso) / gravedadTierra;
            break;

        default:
            break;
    }
    return (result * newton).toFixed(2);
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
massContainer.innerHTML = '<p style="margin: 0px; color: white; font-size: 28px; font-weight: bold;">Mass is required</p>';

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
titulo.style.fontSize = "50px";
titulo.style.textShadow = "2px 2px 0px #6565ac";

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
    let inputValue = document.getElementById("inputTag").value,
        validacion = validarInput(inputValue);

    if (validacion.length > 0) {
        console.log(`Error code: ${validacion[0].code} - ${validacion[0].message}`);
    } else {
        resetContent();

        contentContainer.appendChild(tablaPlaneta);
        let filas = generarFilas();
        filas.forEach((fila) => {
            tablaPlaneta.appendChild(fila);
        });
    }
});
