console.log(data);

/**
 * Función que muestra la fecha y hora en tiempo real
 *
 */
const mostrarFecha = async () => {
    myDate = new Date();
    day = myDate.getDate();
    //month = myDate.getMonth();
    monthTemp = myDate.toLocaleString("default", { month: "long" });
    month = monthTemp[0].toUpperCase() + monthTemp.slice(1);
    year = myDate.getFullYear();
    hours = myDate.getHours();
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();
    if (hours < 10) hours = 0 + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("fecha").textContent = month + " " + day + ", " + year + " " + hours + ":" + minutes + ":" + seconds;
    await setInterval(() => {
        mostrarFecha();
    }, 1000);
};

const modifyTitulo = () => {
    const primerTitulo = document.querySelector("h1");
    const textoTitulo = primerTitulo.textContent.substring(0, primerTitulo.textContent.indexOf("2022"));
    const fechaTitulo = primerTitulo.textContent.substring(primerTitulo.textContent.indexOf("2022"));
    primerTitulo.innerHTML = textoTitulo + `<span style="font-size: 60px;">${fechaTitulo}</span>`;
};

// Creación de la cabecera
let date = new Date(),
    divCabecera = document.createElement("div"),
    titulo = document.createElement("h1"),
    subtitulo = document.createElement("p"),
    titulofecha = document.createElement("p");

// Se añade el contenido de los títulos
titulo.textContent = `${data.challengeTitle} in ${date.getFullYear()}`;
subtitulo.textContent = data.challengeSubtitle;

// Estilos para la cabecera
subtitulo.style.textDecoration = "underline";
titulofecha.id = "fecha";
titulofecha.style.margin = "0 auto 10px auto";
titulofecha.style.width = "fit-content";
titulofecha.style.backgroundColor = "blue";
titulofecha.style.padding = "5px";
divCabecera.style.margin = "auto";
divCabecera.style.textAlign = "center";

// Se añade la cabecera al DOM
document.body.appendChild(divCabecera);
divCabecera.appendChild(titulo);
divCabecera.appendChild(subtitulo);
divCabecera.appendChild(titulofecha);
modifyTitulo();

// Creación de la tabla de desafíos
let tablaDesafios = document.createElement("table"),
    tableColumns = 3,
    challenges = data.challenges;
document.body.appendChild(tablaDesafios); // Se añade la tabla al DOM
// tablaDesafios.setAttribute("border", "1");
tablaDesafios.setAttribute("border", "1");
tablaDesafios.setAttribute("style", "width: 800px; margin: auto; border-collapse: collapse; border: none;");
for (let i = 0; i < challenges.length; i++) {
    let row = document.createElement("tr");
    tablaDesafios.appendChild(row); // Se añade la fila a la tabla

    for (let j = 0; j < tableColumns; j++) {
        let column = document.createElement("td"),
            challengeName = challenges[i].name,
            status = challenges[i].status,
            topics = challenges[i].topics,
            topicsTitle = challenges[i].topics[0];

        if (j == 0) {
            column.textContent = challengeName;
        }
        if (j == 1) {
            // Creación de <details> y summary
            let details = document.createElement("details"),
                detailsSummary = document.createElement("summary");

            // Definición del summary y se añade a la etiqueta <details>
            detailsSummary.textContent = topicsTitle;
            details.appendChild(detailsSummary);
            // Se crea y añade los distintos topics a la etiqueta <details>
            for (let k = 0; k < topics.length; k++) {
                let topic = document.createElement("p");
                topic.textContent = topics[k];
                topic.setAttribute("style", "margin: 0px;"); // Añadir estilos a los topic
                details.appendChild(topic);
            }

            column.appendChild(details); // Se añade la etiqueta a la columna
            document.getElementsByTagName("details");
        }
        if (j == 2) {
            let color = "white";
            column.textContent = status;
            if (status.toLowerCase() == "done") {
                color = "#21BF73";
            }
            if (status.toLowerCase() == "ongoing") {
                color = "#FDDB3A";
            }
            if (status.toLowerCase() == "coming") {
                color = "#FD5E53";
            }
            // column.style.textAlign = "right";
            row.setAttribute("style", "background-color: " + color + "; padding: 15px; margin-bottom: 5px; border-bottom: 2px solid white;");
        }
        row.appendChild(column); // Se añade la columna a la fila
    }
    document.querySelectorAll("td").forEach((t) => t.setAttribute("style", "padding: 15px; border-right: none; border-left: none;"));
}

// Cambio de fondos por cada segundo
const fecha = document.querySelector("span");
const horayfecha = document.getElementById("fecha");
const colors = ["blue", "red", "yellow", "gray", "brown", "pink", "violet", "green"];
let i = 0;
const cambiarFondoPorSegundo = async () => {
    await setInterval(() => {
        horayfecha.style.backgroundColor = colors[i];
        fecha.style.color = colors[i];
        if (i != colors.length - 1) {
            i++;
        } else {
            i = 0;
        }
    }, 1000);
};

mostrarFecha();
cambiarFondoPorSegundo();
