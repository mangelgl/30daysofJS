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

// Pie de página
let divFooterContainer = document.createElement("div"),
    divFooterAuthor = document.createElement("div"),
    divFooterKeywords = document.createElement("div");
divFooterContainer.id = "footer";

// Estilos del pie de página
divFooterContainer.style.margin = "20px auto 0px auto";
divFooterContainer.style.width = "800px";
divFooterContainer.style.height = "auto";
/* divFooterContainer.style.backgroundColor = "gray"; */
divFooterAuthor.style.width = "auto";
divFooterAuthor.style.margin = "0px auto 0px auto";
divFooterKeywords.style.width = "auto";
divFooterKeywords.style.margin = "10px auto 50px auto";

divFooterAuthor.id = "divFooterAuthor";
divFooterKeywords.id = "divFooterKeywords";

// Se añaden los elementos al DOM
document.body.appendChild(divFooterContainer);
document.querySelector("#footer").appendChild(divFooterAuthor);
document.querySelector("#footer").appendChild(divFooterKeywords);

let author = data.author,
    fullname = `${author.firstName} ${author.lastName}`,
    socialLinks = author.socialLinks;

let nameElement = document.createElement("p"),
    bioElement = document.createElement("p"),
    titleTitles = document.createElement("h3"),
    listaTitles = document.createElement("ul"),
    titleSkills = document.createElement("h3"),
    listaSkills = document.createElement("ul"),
    titleQualifications = document.createElement("h3"),
    listaQualifications = document.createElement("ul");

(nameElement.textContent = fullname),
    (bioElement.textContent = author.bio),
    (titleTitles.textContent = "Titles"),
    (titleSkills.textContent = "Skills"),
    (titleQualifications.textContent = "Qualifications");

// Nombre autor
let divNombreAutor = document.createElement("div");
divNombreAutor.id = "divNombreAutor";
divFooterAuthor.appendChild(divNombreAutor);
divNombreAutor.appendChild(nameElement);
nameElement.setAttribute("style", "text-align:center; font-weight: bold; font-size: 27px; margin: 0px;");
divNombreAutor.style.margin = "10px";

// Iconos
let divIconos = document.createElement("div");
divIconos.id = "divIconos";
divFooterAuthor.appendChild(divIconos);
for (let i = 0; i < socialLinks.length - 1; i++) {
    let elemento = document.createElement("a");
    elemento.innerHTML = socialLinks[i].fontawesomeIcon;
    elemento.href = socialLinks[i].url;
    /* divIconos.innerHTML += socialLinks[i].fontawesomeIcon; */
    divIconos.appendChild(elemento);
}
// Estilos para los iconos
document.getElementById("divIconos").setAttribute("style", "margin-bottom: 40px; text-align: center;");
document.querySelectorAll("#divIconos > a").forEach((el) => el.setAttribute("style", "margin-right: 5px; font-size: 28px;"));

// Bio
let divBio = document.createElement("div");
divBio.id = "divBio";
divFooterAuthor.appendChild(divBio);
divBio.appendChild(bioElement);
divBio.setAttribute("style", "width: 90%; text-align:center; margin: auto;");

let divListas = document.createElement("div");
divListas.id = "divListas";
divFooterAuthor.appendChild(divListas);

// Titles
let divTitles = document.createElement("div");
divTitles.id = "divTitles";
divListas.appendChild(divTitles);
divTitles.style.width = "30%";

divTitles.appendChild(titleTitles);
divTitles.appendChild(listaTitles);
for (let i = 0; i < author.titles.length; i++) {
    let elemento = document.createElement("li");
    elemento.textContent = `${author.titles[i][0]} ${author.titles[i][1]}`;
    listaTitles.appendChild(elemento);
}
// Skills
let divSkills = document.createElement("div");
divSkills.id = "divSkills";
divListas.appendChild(divSkills);
divSkills.style.width = "30%";

divSkills.appendChild(titleSkills);
divSkills.appendChild(listaSkills);
for (let i = 0; i < author.skills.length; i++) {
    let elemento = document.createElement("li");
    elemento.innerHTML = `<i class="fa-solid fa-square-check" style="color: #00ba00;"></i> ${author.skills[i]}`;
    listaSkills.appendChild(elemento);
}

// Qualifications
let divQ = document.createElement("div");
divQ.id = "divQ";
divListas.appendChild(divQ);
divQ.style.width = "40%";

divQ.appendChild(titleQualifications);
divQ.appendChild(listaQualifications);
for (let i = 0; i < author.qualifications.length; i++) {
    let elemento = document.createElement("li");
    elemento.innerHTML = `<i class="fa-light fa-book-open"></i> ${author.qualifications[i]}`;
    listaQualifications.appendChild(elemento);
}

// Estilos para las listas Titles, Skills y Qualifications
document.getElementById("divListas").setAttribute("style", "overflow: hidden;");
document.querySelectorAll("#divListas > div").forEach((div) => div.setAttribute("style", "float: left; margin-right: 20px;"));

// Keywords
divFooterKeywords.style.margintop = "50px";
let keywordsTitle = document.createElement("h3");
keywordsTitle.textContent = "Keywords";
divFooterKeywords.appendChild(keywordsTitle);

let listaKeywords = document.createElement("ul"),
    keywordsLength = data.keywords.length;
divFooterKeywords.appendChild(listaKeywords);
listaKeywords.style.overflow = "hidden";

for (let i = 0; i < keywordsLength; i++) {
    let elemento = document.createElement("li");
    elemento.textContent = "#" + data.keywords[i];
    elemento.setAttribute("style", "display: block; float: left; margin: 3px; background-color: #e3e114; border-radius: 10px; padding: 2px;");
    listaKeywords.appendChild(elemento);
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
