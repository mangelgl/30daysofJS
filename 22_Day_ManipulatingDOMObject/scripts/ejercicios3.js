console.log(data);

const mostrarFecha = () => {
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
    setInterval(() => {
        mostrarFecha();
    }, 1000);
};

/** Creo la cabecera */
let date = new Date(),
    titulo = document.createElement("h1"),
    subtitulo = document.createElement("p"),
    titulofecha = document.createElement("p");

titulo.textContent = `${data.challengeTitle} in ${date.getFullYear()}`;
subtitulo.textContent = data.challengeSubtitle;
titulofecha.setAttribute("id", "fecha");

/** Añado la cabecera al HTML */
document.body.appendChild(titulo);
document.body.appendChild(subtitulo);
document.body.appendChild(titulofecha);

/** Creo la lista y los elementos */
let lista = document.createElement("ul"),
    challenges = data.challenges,
    elementosArr = [];
for (let i = 0; i < challenges.length; i++) {
    let elemento = document.createElement("li");
    elemento.textContent = challenges[i].name;
    elementosArr.push(elemento);
}

/** Crear tabla para indexar desafíos, el tag <details> y el estado del desafío */

/** Añadir lista de desafíos */
/* document.body.appendChild(lista);
for (let i = 0; i < elementosArr.length; i++) {
    lista.appendChild(elementosArr[i]);
} */

mostrarFecha();
