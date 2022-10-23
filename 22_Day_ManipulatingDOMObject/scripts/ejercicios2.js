console.log("Ejercicios nivel 2");

const getAllCountries = () => {
    let namesArr = [];
    countries.forEach((country) => namesArr.push(country.name));
    return namesArr.sort();
};

const setStyles = () => {
    let tabla = document.querySelector("table");
    tabla.style.width = "200px";
    tabla.style.margin = "auto";
    tabla.style.marginTop = "20px";
    let filas = document.querySelectorAll(".filaNombres");
    filas.forEach((row) => {
        row.style.width = "auto";
        row.style.display = "flex";
    });
    let celdas = document.querySelectorAll(".celdaNombrePais");
    celdas.forEach((column) => {
        column.style.width = "100px";
        column.style.height = "100px";
        column.style.borderRadius = "3px";
        column.style.boxShadow = "-4px 3px 19px 1px rgb(225 225 225)";
        column.style.display = "inline-flex";
        column.style.alignContent = "center";
        column.style.justifyContent = "center";
        column.style.alignItems = "center";
        column.style.textAlign = "center";
    });
    let titulo = document.getElementsByTagName("h1");
    titulo[0].style.textAlign = "center";
    let subtitulos = document.getElementsByTagName("p");
    for (let i = 0; i < subtitulos.length; i++) {
        if (i != 0) {
            subtitulos[i].style.margin = "0";
            subtitulos[i].style.textDecoration = "underline";
        }
        subtitulos[i].style.textAlign = "center";
    }
};

let titulo1 = document.createElement("h1");
titulo1.textContent = "WORLD COUNTRIES LIST";
let titulo2 = document.createElement("p"),
    titulo3 = document.createElement("p"),
    titulo4 = document.createElement("p");
titulo3.textContent = "30DaysOfJavaScript:Dom-Day2";
titulo4.textContent = "Author: Miguel Ángel García López";

let countriesNames = getAllCountries();
titulo2.textContent = `Total number of countries: ${countriesNames.length}`;

document.body.appendChild(titulo1);
document.body.appendChild(titulo2);
document.body.appendChild(titulo3);
document.body.appendChild(titulo4);

let tabla = document.createElement("table");
document.body.appendChild(tabla);
let rowNumber = 0,
    i = 0;
while (i < countriesNames.length) {
    let row = document.createElement("tr");
    row.setAttribute("class", "filaNombres");
    tabla.appendChild(row);

    while (rowNumber < 6) {
        if (countriesNames[i] != undefined) {
            let column = document.createElement("td");
            column.setAttribute("class", "celdaNombrePais");
            column.textContent = countriesNames[i];
            row.appendChild(column);

            if (rowNumber != 5) {
                column.style.margin = "0px 5px 5px 0px";
            }

            rowNumber++;
            i++;
        } else {
            break;
        }
    }
    rowNumber = 0;
}

setStyles();
