console.log("Ejercicios nivel 1");
/**
 * Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
 *
 * Even numbers background is green
 * Odd numbers background is yellow
 * Prime numbers background is red
 */

const esPrimo = (numero) => {
    // Casos especiales
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return false;
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
};

// Crear el div padre
let divnumbers = document.createElement("div");
document.body.appendChild(divnumbers);

divnumbers.id = "container";
divnumbers.style.width = "600px";
divnumbers.style.margin = "auto";
divnumbers.style.textAlign = "center";

// Creando y añadiendo la cabecera al documento HTML
let titulo1 = document.createElement("h1"),
    titulo2 = document.createElement("h2"),
    titulo3 = document.createElement("h3");
divnumbers.appendChild(titulo1);
divnumbers.appendChild(titulo2);
divnumbers.appendChild(titulo3);

titulo1.textContent = "Number Generator";
titulo2.textContent = "30DaysOfJavaScript:DOM Day 2";
titulo3.textContent = "Author: Miguel Ángel García López";
titulo1.style.margin = "0";
titulo2.style.margin = "0";
titulo3.style.margin = "0";
titulo2.style.textDecoration = "underline";
titulo3.style.textDecoration = "underline";

let tabla = document.createElement("table");
document.body.appendChild(tabla);
/* tabla.style.border = "1px";
tabla.style.borderStyle = "solid"; */
tabla.id = "tablaNumeros";
tabla.style.width = "200px";
tabla.style.margin = "auto";
tabla.style.marginTop = "20px";
let j = 0;
while (j <= 101) {
    let row = document.createElement("tr");
    tabla.appendChild(row);
    row.style.width = "auto";
    row.style.display = "flex";
    for (let i = 1; i <= 6; i++) {
        let column = document.createElement("td");
        row.appendChild(column);
        column.textContent = j;
        column.style.width = "100px";
        column.style.height = "50px";
        column.style.color = "white";
        column.style.fontSize = "30px";
        column.style.display = "inline-flex";
        column.style.alignContent = "center";
        column.style.justifyContent = "center";
        column.style.alignItems = "center";
        if (i != 6) {
            column.style.margin = "0px 3px 3px 0px";
        }

        if (j % 2 == 0) {
            column.style.backgroundColor = "#21BF73";
        } else {
            column.style.backgroundColor = "#FDDB3A";
        }

        if (esPrimo(j)) {
            column.style.backgroundColor = "#FD5E53";
        }
        j++;
    }
}
