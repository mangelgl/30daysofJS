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
        arrFilas = [];

    // Rellenando la tabla
    for (let i = 0; i < +numbersToGenerate; i++) {
        let row = document.createElement("tr");
        /* console.log(i); */
        for (let j = 0; j < columnasTabla; j++) {
            let column = document.createElement("td");
            column.textContent = i;
            row.appendChild(column);
            if (i < +numbersToGenerate) {
                i++;
            } else {
                break;
            }
        }
        arrFilas.push(row);
    }

    return arrFilas;
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
    botonGenerar = document.createElement("button");

inputGeneradorNumeros.id = "numero";
botonGenerar.id = "botonGenerar";
botonGenerar.textContent = "Generate numbers";

divBuscador.appendChild(divInput);
divInput.appendChild(inputGeneradorNumeros);
divBuscador.appendChild(botonGenerar);

// Creación del contenido de la tabla de números
let tabla = document.createElement("table");
tabla.id = "tablaNumeros";
divTabla.appendChild(tabla);

/** Event Listeners */
botonGenerar.addEventListener("click", () => {
    resetTabla();

    let filas = generarFilas();
    filas.forEach((el) => tabla.appendChild(el));
    console.log(filas);
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
divInput.style.margin = "0px 10px 0px 0px";
divInput.style.float = "left";

inputGeneradorNumeros.style.width = "500px";

botonGenerar.style.float = "left";
botonGenerar.style.backgroundColor = "#5bbc7a";
botonGenerar.style.color = "white";
botonGenerar.style.border = "none";
botonGenerar.style.padding = "5px";
