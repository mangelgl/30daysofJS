const validarNumeros = (numero) => {
    let erroresValidacion = [];
    if (numero.length == 0) {
        erroresValidacion.push({ code: 0, message: "Introduce un valor para generar números." });
    } else if (isNaN(numero)) {
        erroresValidacion.push({ code: 1, message: "El valor que se introduzca debe ser un número." });
    }

    return erroresValidacion;
};

const esPrimo = (numero) => {
    // Casos especiales
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return false;
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
};

const resetTabla = () => {
    let filasAntiguas = tabla.querySelectorAll("tr");
    for (const fila of filasAntiguas) {
        tabla.removeChild(fila);
    }
};

const generarFilas = () => {
    // Consiguiendo el valor de los números a generar
    let numbersToGenerate = document.body.querySelector("#numero").value,
        columnasTabla = 9,
        arrFilas = [],
        errores = validarNumeros(numbersToGenerate);

    if (errores.length != 0) {
        console.log(`Error code ${errores[0].code}: ${errores[0].message}`);
        document.body.querySelector("p#parrafoErrores").textContent = errores[0].message;
    }

    numbersToGenerate = Number(numbersToGenerate);
    let filas = Math.ceil(numbersToGenerate / columnasTabla),
        cont = 0;

    while (cont < numbersToGenerate) {
        for (let i = 0; i < filas; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < columnasTabla; j++) {
                if (cont > numbersToGenerate) {
                    // Debug
                    /* console.log("break de columnas"); */
                    break;
                }
                let column = document.createElement("td");
                column.textContent = cont;
                // Inicio estilos columna
                column.style.width = "80px";
                column.style.height = "30px";
                column.style.color = "white";
                column.style.fontSize = "30px";
                if (cont % 2 == 0) {
                    column.style.backgroundColor = "#21BF73";
                } else {
                    column.style.backgroundColor = "#FDDB3A";
                }

                if (esPrimo(cont)) {
                    column.style.backgroundColor = "#FD5E53";
                }
                // Fin estilos columna
                row.appendChild(column);
                cont++;
            }
            arrFilas.push(row);
        }
        // Debug
        /* console.log("se acaban las filas"); */
        break;
    }

    return arrFilas;
};

// Creando los contenedores
let container = document.createElement("div"),
    divCabecera = document.createElement("div"),
    divBuscador = document.createElement("div"),
    divTabla = document.createElement("div");

// Aplicando estilos a los contenedores
container.id = "container";
divCabecera.id = "divCabecera";
divBuscador.id = "divBuscador";
divTabla.id = "divTabla";

// Se añaden al DOM los contenedores
document.body.appendChild(container);
container.appendChild(divCabecera);
container.appendChild(divBuscador);
container.appendChild(divTabla);

// Creación del contenido de la cabecera
let titulo1 = document.createElement("h1"),
    titulo2 = document.createElement("p"),
    titulo3 = document.createElement("p");

titulo1.textContent = "Number Generator";
titulo2.textContent = "30DaysOfJavaScript: DOM Day 3";
titulo3.textContent = "Author: Miguel Ángel García López";

divCabecera.appendChild(titulo1);
divCabecera.appendChild(titulo2);
divCabecera.appendChild(titulo3);

// Creación del contenido del buscador
let divInput = document.createElement("div"),
    inputGeneradorNumeros = document.createElement("input"),
    botonGenerar = document.createElement("button"),
    parrafoErrores = document.createElement("p");

inputGeneradorNumeros.id = "numero";
botonGenerar.id = "botonGenerar";
parrafoErrores.id = "parrafoErrores";
botonGenerar.textContent = "Generate numbers";

divBuscador.appendChild(parrafoErrores);
divBuscador.appendChild(divInput);
divInput.appendChild(inputGeneradorNumeros);
divInput.appendChild(botonGenerar);

// Creación del contenido de la tabla de números
let tabla = document.createElement("table");
tabla.id = "tablaNumeros";
divTabla.appendChild(tabla);

/** Event Listeners */
document.body.querySelector("button#botonGenerar").addEventListener("click", () => {
    resetTabla();

    let filas = generarFilas();
    filas.forEach((el) => tabla.appendChild(el));
    // Debug
    /* console.log(filas); */
});

document.body.querySelector("input#numero").addEventListener("focus", function () {
    this.style.border = "1px solid #79c892";
});

/** Estilos */
document.body.style.fontFamily = "Source Sans Pro";
container.setAttribute("style", "width: 100%; margin: auto;");
document.body.querySelector("#tablaNumeros").style.fontFamily = "Kanit";

/**
 * Cabecera
 */
divCabecera.style.textAlign = "center";
divCabecera.style.margin = "0px 0px 20px 0px";

titulo1.style.color = "#65c082";
titulo1.style.margin = "0px";

titulo2.style.margin = "5px 0px 0px 0px";
titulo2.style.fontSize = "18px";
titulo3.style.margin = "0px";
titulo3.style.fontSize = "14px";

/**
 * Buscador
 */
divBuscador.style.margin = "auto";
divBuscador.style.textAlign = "center";
divBuscador.style.overflow = "hidden";

divInput.style.width = "fit-content";
divInput.style.margin = "0 auto";
divInput.style.height = "40px";

inputGeneradorNumeros.setAttribute("placeholder", "Generate more numbers...");
inputGeneradorNumeros.style.boxSizing = "border-box";
inputGeneradorNumeros.style.height = "100%";
inputGeneradorNumeros.style.width = "500px";
inputGeneradorNumeros.style.float = "left";
inputGeneradorNumeros.style.padding = "20px";
inputGeneradorNumeros.style.border = "1px solid #79c892";
inputGeneradorNumeros.style.outline = "none";

botonGenerar.style.height = "100%";
botonGenerar.style.float = "left";
botonGenerar.style.backgroundColor = "#5bbc7a";
botonGenerar.style.color = "white";
botonGenerar.style.border = "none";
botonGenerar.style.padding = "0px";
botonGenerar.style.marginLeft = "10px";

parrafoErrores.style.color = "red";
parrafoErrores.style.margin = "0px";

/**
 * Tabla
 */
divTabla.style.marginTop = "20px";
/* tabla.setAttribute("border", "1"); */
tabla.style.borderCollapse = "separate";
tabla.style.textAlign = "center";
tabla.style.margin = "0 auto";
