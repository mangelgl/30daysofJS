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

// Creación de la cabecera
let date = new Date(),
    titulo = document.createElement("h1"),
    subtitulo = document.createElement("p"),
    titulofecha = document.createElement("p");

// Se añade el contenido de los títulos
titulo.textContent = `${data.challengeTitle} in ${date.getFullYear()}`;
subtitulo.textContent = data.challengeSubtitle;
titulofecha.setAttribute("id", "fecha");

// Se añade la cabecera al DOM
document.body.appendChild(titulo);
document.body.appendChild(subtitulo);
document.body.appendChild(titulofecha);

// Creación de la tabla de desafíos
let tablaDesafios = document.createElement("table"),
    tableColumns = 3,
    challenges = data.challenges;
document.body.appendChild(tablaDesafios); // Se añade la tabla al DOM
// tablaDesafios.setAttribute("border", "1");
tablaDesafios.setAttribute("style", "width: 800px; margin: auto;");
for (let i = 0; i < challenges.length; i++) {
    let row = document.createElement("tr");
    tablaDesafios.appendChild(row); // Se añade la fila a la tabla
    row.setAttribute("style", "padding: 15px;");

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
            row.setAttribute("style", "background-color: " + color + ";");
        }
        row.appendChild(column); // Se añade la columna a la fila
    }
    document.querySelectorAll("td").forEach((t) => (t.style.padding = "15px"));
}

mostrarFecha();
